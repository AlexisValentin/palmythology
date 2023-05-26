import { useStoryblok } from "@storyblok/react";
import { useParams } from "react-router";
import { getNewsSlug } from "../../../helpers/storyblok";
import PageHeader from "../../generics/PageHeader";
import NotFound404 from "../http/404";
import TextBlock, { IconSize } from "../../generics/TextBlock";
import { isObjectEmpty } from "../../../helpers/object";

const NewsArticleDetailsPage = (): JSX.Element => {
  const params = useParams();
  // @ts-ignore
  const story = useStoryblok(getNewsSlug(params.title), {
    version: "published",
  });

  if (isObjectEmpty(story)) return <NotFound404 />;

  const { title, summary, newsItem } = story.content;

  return (
    <div className="flex items-center justify-center flex-col">
      <PageHeader title={title} subtitle={summary} />
      {newsItem && <TextBlock content={newsItem} iconSize={IconSize.MEDIUM} />}
    </div>
  );
};

export default NewsArticleDetailsPage;
