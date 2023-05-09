import { remark } from "remark";
import remarkGfm from "remark-gfm";
import html from "remark-html";

export const stripDiacritics = (stringToStrip: string): string =>
  stringToStrip?.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

export const markdownToHtml = async (markdown: string | undefined = "") => {
  const result = await remark().use(remarkGfm).use(html).process(markdown);

  return result.toString().replace(/<\/p>\s+/g, "</p>");
};
