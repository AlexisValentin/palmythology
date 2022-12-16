import { useStoryblok } from "@storyblok/react";
import { useParams } from "react-router-dom";
import PageHeader from "../../generics/PageHeader";
import Summary from "../../generics/Summary";

const CardDetailsPage = (): JSX.Element => {
  const params = useParams();
  const story = useStoryblok(`cards/greek/zeus` || "", {
    version: "draft",
  });

  if (!story || !story.content) {
    return <div>Loading...</div>;
  }

  console.log("Story -> ", story.content.summary.content[0].content[0].text);

  return (
    <>
      <PageHeader title={params.card} subtitle={params.pantheon} />
      <Summary content={story.content.summary.content[0].content[0].text} />
    </>
  );
};

export default CardDetailsPage;
