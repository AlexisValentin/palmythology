import { wording } from "../../../wording/fr/main";
import PageHeader from "../../generics/PageHeader";
import TextBlock, { IconSize } from "../../generics/TextBlock";
import { getAboutSlug } from "../../../helpers/storyblok";
import { useStoryblok } from "@storyblok/react";

const AboutPage = (): JSX.Element => {
  const story = useStoryblok(getAboutSlug(), {
    version: "published",
  });

  return (
    <>
      <PageHeader
        title={wording.sections.about_title}
        subtitle={wording.sections.about_description}
      />
      {story?.content?.aboutItems && (
        <TextBlock
          content={story.content.aboutItems}
          iconSize={IconSize.SMALL}
          leftSiding={true}
        />
      )}
    </>
  );
};

export default AboutPage;
