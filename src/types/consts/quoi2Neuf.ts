import FomoriansIcon from "../../assets/icons/quoi_2_neuf/fomorians.svg";
import FujinIcon from "../../assets/icons/quoi_2_neuf/fujin.svg";
import EnneadIcon from "../../assets/icons/quoi_2_neuf/ennead.svg";
import OgdoadIcon from "../../assets/icons/quoi_2_neuf/ogdoad.svg";
import CirceIcon from "../../assets/icons/quoi_2_neuf/circe.svg";
import NornsIcon from "../../assets/icons/quoi_2_neuf/norns.svg";
import FutharkIcon from "../../assets/icons/quoi_2_neuf/futhark.svg";

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

const QUOI_2_NEUF_ITEMS = [
  {
    title: "Fomoires",
    subtitle: "Êtres inhumains",
    available: true,
    iconUrl: FomoriansIcon,
  },
  {
    title: "Fujin",
    subtitle: "Kami du vent",
    available: true,
    iconUrl: FujinIcon,
  },
  {
    title: "Ennéade",
    subtitle: "Assemblée des neuf",
    available: false,
    iconUrl: EnneadIcon,
  },
  {
    title: "Ogdoade",
    subtitle: "Huit génies",
    available: false,
    iconUrl: OgdoadIcon,
  },
  {
    title: "Circé",
    subtitle: "Experte en poison",
    available: false,
    iconUrl: CirceIcon,
  },
  {
    title: "Nornes",
    subtitle: "Diseuses de destins",
    available: false,
    iconUrl: NornsIcon,
  },
  {
    title: "Futhark",
    subtitle: "Alphabet runique",
    available: false,
    iconUrl: FutharkIcon,
  },
];

export const getQuoi2NeufItems = (): Quoi2NeufItemType[] =>
  QUOI_2_NEUF_ITEMS.map((item: Quoi2NeufItemWordingType) => {
    return {
      name: item.title,
      description: item.subtitle,
      iconUrl: item.iconUrl,
    };
  });
