import Image from "next/image";
import { useElementSize } from "usehooks-ts";
import Draggable, { DraggableEvent } from "react-draggable";
import React, { useState } from "react";
import { MemeTemplate } from "@/app/(data)/types";
export const MemeDisplay = ({
  template,
  values,
}: {
  template: MemeTemplate;
  values: Record<string, string>;
}) => {
  const [memeRef, { width }] = useElementSize();
  const ratio = width / template.background.width;
  const [textareaPositions, setTextareaPositions] = useState(() =>
    template.textareas.map((textarea) => ({
      top: textarea.top * ratio,
      left: textarea.left * ratio,
    }))
  );

  const handleDrag = (
    index: number,
    _e: DraggableEvent,
    { x, y }: { x: number; y: number }
  ) => {
    const newPositions = [...textareaPositions];
    newPositions[index] = {
      top: y,
      left: x,
    };
    // console.log(newPositions[index]);
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
            onDrag={(e, data) => handleDrag(index, e, data)}
            bounds="parent"
            defaultPosition={{
              x: textareaPositions[index]?.left || 0,
              y: textareaPositions[index]?.top || 0,
            }}
            defaultClassName="absolute inset-0 h-fit w-fit font-hs"
          >
            <span
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
