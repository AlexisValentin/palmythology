import { NewsItemType } from "../../../types/consts/news";
import { useEffect, useState } from "react";
import { wording } from "../../../wording/fr/main";
import PageHeader from "../../generics/PageHeader";
import { fetchNewsStories } from "../../../helpers/storyblok";
import PageSection from "../../generics/PageSection";
import { setNewsRouteParameters } from "../../../helpers/routes";

const NewsPage = (): JSX.Element => {
  const [newsItems, setNewsItems] = useState<NewsItemType[]>([]);

  useEffect(() => {
    fetchNewsStories().then((items) => {
      setNewsItems(() => items);
    });
  }, []);

  return (
    <>
      <PageHeader
        title={wording.sections.news_title}
        subtitle={wording.sections.news_description}
      />
      <div className="flex flex-row justify-center flex-wrap mx-8 sm:block sm:mx-0">
        {newsItems.map((item, idx) => {
          if (!item) return <div key={idx} />;

          const { title, summary, icon } = item;

          return (
            <PageSection
              key={idx}
              name={title}
              description={summary}
              url={setNewsRouteParameters(title)}
              iconUrl={icon?.filename}
            />
          );
        })}
      </div>
    </>
  );
};

export default NewsPage;
