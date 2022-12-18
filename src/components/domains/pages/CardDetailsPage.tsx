import { useStoryblok } from "@storyblok/react";
import { useParams } from "react-router-dom";
import { getCardSlug } from "../../../helpers/storyblok";
import PageHeader from "../../generics/PageHeader";
import Summary from "../../generics/Summary";
import {
  CardDetailsPageCarrouselStyled,
  CardDetailsPageImageStyled,
} from "./CardDetailsPage.styled";

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
      <CardDetailsPageCarrouselStyled>
        {story.content.images.map(
          (image: { filename: string; alt: string }, idx: number) => (
            <CardDetailsPageImageStyled
              className="p-10"
              key={idx}
              src={image.filename}
              alt={image.alt}
            />
          )
        )}
      </CardDetailsPageCarrouselStyled>
    </>
  );
};

export default CardDetailsPage;
