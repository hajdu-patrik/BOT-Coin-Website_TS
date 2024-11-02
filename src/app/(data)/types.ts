type BackgroundImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

type TextArea = {
  id: string;
  top: number;
  left: number;
  width: number;
  height: number;
  text: string;
  size: number;
  color?: string;
  outlineColor?: string;
};

// export type MemeTextArea = {
//   textarea: TextArea[];
//   values: Record<string, string>;
//   ratio: number;
// };

export type MemeTemplate = {
  id: string;
  background: BackgroundImage;
  textareas: TextArea[];
};

export type Meme = {
  id: string;
  template: string;
  values: Record<string, string>;
};
