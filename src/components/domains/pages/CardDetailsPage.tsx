import { useStoryblok } from "@storyblok/react";
import { useParams } from "react-router-dom";
import { getCardSlug } from "../../../helpers/storyblok";
import Carrousel from "../../generics/Carrousel";
import PageHeader from "../../generics/PageHeader";
import Summary from "../../generics/Summary";
import { CardDetailsPageCarrouselStyled } from "./CardDetailsPage.styled";

const CardDetailsPage = (): JSX.Element => {
  const params = useParams();
  const story = useStoryblok(getCardSlug(params.card, params.pantheon), {
    version: "draft",
  });

  if (!story || !story.content) {
    return <div>Indisponible</div>;
  }

  return (
    <>
      <PageHeader
        title={story.content.name}
        subtitle={story.content.subtitle}
      />
      <Summary content={story.content.summary} />
      <CardDetailsPageCarrouselStyled className="pt-10">
        <Carrousel imageList={story.content.images} />
      </CardDetailsPageCarrouselStyled>
    </>
  );
};

export default CardDetailsPage;
