import Image from "next/image";
import { useResizeObserver } from "usehooks-ts";
import Draggable, { DraggableEvent } from "react-draggable";
import React, { useMemo, useRef, useState } from "react";
import { MemeTemplate } from "@/app/(data)/types";
export const MemeDisplay = ({
  template,
  values,
}: {
  template: MemeTemplate;
  values: Record<string, string>;
}) => {
  const memeRef = useRef<HTMLDivElement>(null);
  // usehooks-ts's UseResizeObserverOptions still types `ref` as a non-null
  // RefObject even though useRef(<T>(null)) now returns RefObject<T | null>
  // in React 19 - the hook itself null-checks ref.current internally before
  // observing, so this narrows only the type at the call boundary.
  const { width } = useResizeObserver({
    ref: memeRef as React.RefObject<HTMLDivElement>,
  });
  // Whole pixels, like the offsetWidth-based measurement this replaced: keeps the text scale identical
  const ratio = Math.round(width!) / template.background.width;
  const [textareaPositions, setTextareaPositions] = useState(() =>
    template.textareas.map((textarea) => ({
      top: textarea.top * ratio,
      left: textarea.left * ratio,
    }))
  );
  // react-draggable needs a real DOM node ref (findDOMNode is unavailable in
  // the React runtime the App Router uses for client components); one stable
  // ref per draggable textarea.
  const nodeRefs = useMemo(
    () => template.textareas.map(() => React.createRef<HTMLSpanElement>()),
    [template]
  );

  // Committed once the gesture ends (onStop) rather than on every pointer-move
  // tick (onDrag): react-draggable already moves the dragged node itself via
  // its own internal transform, so re-rendering MemeDisplay on every drag
  // frame bought nothing but layout/reconciliation work while dragging.
  const handleDragStop = (
    index: number,
    _e: DraggableEvent,
    { x, y }: { x: number; y: number }
  ) => {
    const newPositions = [...textareaPositions];
    newPositions[index] = {
      top: y,
      left: x,
    };
    setTextareaPositions(newPositions);
  };

  return (
    <div ref={memeRef} id="meme-display">
      <Image
        src={template.background.src}
        width={template.background.width}
        height={template.background.height}
        alt={template.background.alt}
        draggable={false}
        priority={true}
        className="select-none"
      />
      {textareaPositions.length > 0 &&
        template.textareas.map((textarea, index) => (
          <Draggable
            key={index}
            nodeRef={nodeRefs[index]}
            onStop={(e, data) => handleDragStop(index, e, data)}
            bounds="parent"
            defaultPosition={{
              x: textareaPositions[index]?.left || 0,
              y: textareaPositions[index]?.top || 0,
            }}
            defaultClassName="absolute inset-0 h-fit w-fit font-hs"
          >
            <span
              ref={nodeRefs[index]}
              className={`${
                textarea.color ?? "white"
              } contrast-outline cursor-grab select-none border-black leading-tight hover:border-2`}
              style={{
                fontSize: textarea.size * ratio,
                color: textarea.color ?? "white",
              }}
            >
              {values[textarea.id] ?? textarea.text}
            </span>
          </Draggable>
        ))}
    </div>
  );
};
