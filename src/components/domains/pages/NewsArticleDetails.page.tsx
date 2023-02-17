import { useStoryblok } from "@storyblok/react";
import { useParams } from "react-router";
import { getNewsSlug } from "../../../helpers/storyblok";
import { isObjectEmpty } from "../../../helpers/types";
import PageHeader from "../../generics/PageHeader";
import Summary from "../../generics/Summary";
import NotFound404 from "../http/404";

const NewsArticleDetailsPage = (): JSX.Element => {
  const params = useParams();
  const story = useStoryblok(getNewsSlug(params.title), {
    version: "published",
  });

  if (isObjectEmpty(story)) return <NotFound404 />;

  const { title, summary, text } = story.content;

  return (
    <div className="flex items-center justify-center flex-col">
      <PageHeader title={title} subtitle={summary} />
      {summary && <Summary content={text} />}
    </div>
  );
};

export default NewsArticleDetailsPage;
