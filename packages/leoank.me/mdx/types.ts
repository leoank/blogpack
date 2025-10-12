export type TFrontmatterReference = {
  name: string;
  text: string;
};

export type TFrontmatter = {
  title: string;
  summary: string;
  date: string;
  thumbnailURL?: string;
  references?: TFrontmatterReference[];
};
