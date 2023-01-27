import { useStoryblok } from "@storyblok/react";
import { useParams } from "react-router-dom";
import { getCardSlug } from "../../../helpers/storyblok";
import { isObjectEmpty } from "../../../helpers/types";
import Carrousel from "../../generics/Carrousel";
import PageHeader from "../../generics/PageHeader";
import Summary from "../../generics/Summary";
import NotFound404 from "../http/404";
import {
  CardDetailsPageCarrouselStyled,
  CardDetailsPageContainerStyled,
} from "./CardDetailsPage.styled";

const CardDetailsPage = (): JSX.Element => {
  const params = useParams();
  const story = useStoryblok(getCardSlug(params.card, params.pantheon), {
    version: "draft",
  });

  if (isObjectEmpty(story)) return <NotFound404 />;

  const { name, subtitle, summary, images, available } = story.content;

  if (!available) return <NotFound404 />;

  return (
    <CardDetailsPageContainerStyled>
      <PageHeader title={name} subtitle={subtitle} />
      {summary && <Summary content={summary} />}
      <CardDetailsPageCarrouselStyled>
        <Carrousel imageList={images} />
      </CardDetailsPageCarrouselStyled>
    </CardDetailsPageContainerStyled>
  );
};

export default CardDetailsPage;
