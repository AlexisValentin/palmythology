import { useEffect, useState } from "react";
import { stringifyMonthCode } from "../../../helpers/dates";
import { fetchQuoi2NeufStories } from "../../../helpers/storyblok";
import { Quoi2NeufItemType } from "../../../types/consts/quoi2Neuf";
import { wording } from "../../../wording/fr/main";
import PageHeader from "../../generics/PageHeader";
import PageSquare from "../../generics/PageSquare";

const Quoi2NeufPage = (): JSX.Element => {
  const [quoi2NeufItems, setQuoi2NeufItems] = useState<Quoi2NeufItemType[]>([]);

  const date = new Date();
  const month = date.getMonth();
  const parsedDate = `${stringifyMonthCode(month)} ${date.getFullYear()}`;

  useEffect(() => {
    fetchQuoi2NeufStories().then((items) => {
      setQuoi2NeufItems(() => items);
    });
  }, []);

  return (
    <>
      <PageHeader
        title={`${wording.folders.quoi_2_neuf_title}`}
        subtitle={`${parsedDate}`}
      />
      <div className="flex items-center justify-center flex-wrap">
        {quoi2NeufItems.map((item, idx) => {
          const { title, subtitle, icon, available, pantheon } = item;

          return (
            <PageSquare
              key={idx}
              title={title}
              subtitle={subtitle}
              icon={icon}
              available={available}
              pantheon={pantheon}
            />
          );
        })}
      </div>
    </>
  );
};

export default Quoi2NeufPage;
