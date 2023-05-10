import { useStoryblok } from "@storyblok/react";
import { useParams } from "react-router-dom";
import { getCardSlug } from "../../../helpers/storyblok";
import { isObjectEmpty } from "../../../helpers/types";
import Carrousel from "../../generics/Carrousel";
import PageHeader from "../../generics/PageHeader";
import Summary from "../../generics/Summary";
import NotFound404 from "../http/404";

const CardDetailsPage = (): JSX.Element => {
  const params = useParams();
  const story = useStoryblok(getCardSlug(params.card, params.pantheon), {
    version: "published",
  });

  if (isObjectEmpty(story)) return <NotFound404 />;

  const { name, subtitle, summary, images, available } = story.content;

  if (!available) return <NotFound404 />;

  return (
    <div className="flex items-center justify-center flex-col">
      <PageHeader title={name} subtitle={subtitle} />
      {summary && <Summary content={summary} />}
      <div className="flex items-center justify-center w-full lg:w-3/4">
        <Carrousel imageList={images} />
      </div>
    </div>
  );
};

export default CardDetailsPage;
