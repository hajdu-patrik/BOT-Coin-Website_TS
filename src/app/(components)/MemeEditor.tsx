import { useState } from "react";
import { useForm } from "react-hook-form";
import { MemeDisplay } from "./MemeDisplay";
import { MemeTemplate } from "@/app/(data)/types";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import { Transition } from "@headlessui/react";
import React from "react";
import axios from "axios";
const textValues = (template: MemeTemplate) =>
  template.textareas.reduce(
    (values, ta) => ({
      ...values,
      [ta.id]: ta.text,
    }),
    {} as Record<string, string>
  );

export const MemeEditor = ({ templates }: { templates: MemeTemplate[] }) => {
  const { register, handleSubmit, watch, setValue } = useForm<{
    template: string;
    values: Record<string, string>;
  }>({
    defaultValues: {
      template: templates[0].id,
      values: textValues(templates[0]),
    },
  });

  const [isTransitioning, setIsTransitioning] = useState(false);

  const templateId = watch("template");
  const template = templates.find((template) => template.id === templateId)!;

  const values = watch("values");

  const handleExportImage = () => {
    const memeDisplayElement = document.getElementById(
      "meme-display"
    ) as HTMLElement;

    html2canvas(memeDisplayElement).then(function (canvas) {
      canvas.toBlob(function (blob) {
        blob && saveAs(blob, "meme.png");
      });
    });
  };
  //Save Image
  // const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);
  const [showAlert, setShowAlert] = React.useState<boolean>(false);
  const onSubmit = async () => {
    // //Alert box
    // setIsSubmitting(true);
    // const memeData = new FormData();
    // memeData.append("image", "meme.png");
    // try {
    //   await axios.post("/api/memes", memeData);
    // } catch (error) {
    //   console.error(error);
    // }
    // setIsSubmitting(false);
    setShowAlert(true);
    const showSeconds = 5;
    setTimeout(() => {
      setShowAlert(false);
    }, showSeconds * 1000);
    handleExportImage();
  };

  const handleTemplateChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newTemplate = templates.find(
      (template) => template.id === event.target.value
    )!;
    setIsTransitioning(true);
    setTimeout(() => {
      setValue("template", newTemplate.id);
      setValue("values", textValues(newTemplate));
      setIsTransitioning(false);
    }, 300);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="xs:grid-cols-1 mt-10 grid select-none gap-8 font-hs 2xl:mt-0 2xl:grid-cols-[100%]">
        <div className="self-center px-2">
          <h2 className="text-[1.25em] font-bold">Select an image</h2>
          <select
            className="select-bordered w-full rounded-[0.5rem] p-4"
            aria-label="memelist"
            value={templateId}
            onChange={handleTemplateChange}
          >
            <option disabled>Pick your template</option>
            {templates.map((template) => (
              <option key={template.id} value={template.id}>
                {template.id}
              </option>
            ))}
          </select>
          {template.textareas.map((textarea, index) => (
            <div key={index} className="mt-5">
              <label htmlFor={textarea.id} className="text-[1.25em] font-bold">
                {textarea.id}
              </label>
              <input
                className="input-bordered w-full rounded-[0.5rem] p-4"
                type="text"
                {...register(`values.${textarea.id}`)}
                name={`values.${textarea.id}`}
              />
            </div>
          ))}
          <button
            className="sm:-text-[1.3em] mx-auto mt-5 block min-w-[10rem] rounded-lg bg-red-600 p-2 font-wp text-[1.2em] hover:opacity-60 md:text-[1.4em] lg:text-[1.6em] xl:text-[1.8em] 2xl:text-[2em]"
            type="submit"
          >
            Save
          </button>
          {/* meg kéne úgy csinálni, hogy popup lenne felül, hogy a meme elkészült! */}
          {/* <Transition
            show={showAlert}
            enter="transition-opacity duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            className="fixed inset-0 left-[50%] right-[50%] top-10 flex aspect-square w-[10em] items-center justify-center rounded-lg bg-slate-400"
          >
            Meme is ready! :)
          </Transition> */}
        </div>
        {/* Here you can edit the memes */}
        <Transition
          show={!isTransitioning}
          enter="transition-opacity duration-100"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          className="relative justify-self-center font-hs"
        >
          <MemeDisplay key={template.id} template={template} values={values} />
        </Transition>
      </div>
    </form>
  );
};
