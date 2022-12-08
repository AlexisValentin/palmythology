import { wording } from "../../wording/fr/main";

export interface Quoi2NeufItemType {
  name: string;
  description: string;
  iconUrl?: string;
}

interface Quoi2NeufItemWordingType {
  title: string;
  subtitle: string;
  available: boolean;
  iconUrl: string;
}

export const getQuoi2NeufItems = (): Quoi2NeufItemType[] => {
  const { quoi_2_neuf_items } = wording.folders;

  return quoi_2_neuf_items.map((item: Quoi2NeufItemWordingType) => {
    return {
      name: item.title,
      description: item.subtitle,
      iconUrl: item.iconUrl,
    };
  });
};
