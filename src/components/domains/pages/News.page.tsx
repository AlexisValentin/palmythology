import { useEffect, useState } from "react";
import { wording } from "../../../wording/fr/main";
import PageHeader from "../../generics/PageHeader";
import { fetchNewsStories } from "../../../helpers/storyblok";
import PageSection from "../../generics/PageSection";
import { setNewsRouteParameters } from "../../../helpers/routes";
import { NewsPageType } from "../../../types/storyblok";

const NewsPage = (): JSX.Element => {
  const [newsPages, setNewsPages] = useState<NewsPageType[]>([]);

  useEffect(() => {
    fetchNewsStories().then((items) => {
      setNewsPages(() => items);
    });
  }, []);

  return (
    <>
      <PageHeader
        title={wording.sections.news_title}
        subtitle={wording.sections.news_description}
      />
      <div className="flex flex-row justify-cente r flex-wrap mx-8 sm:block sm:mx-0">
        {newsPages.map((item, idx) => {
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
