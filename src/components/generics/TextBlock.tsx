import { isEven } from "../../helpers/number";
import { TextBlockType } from "../../types/storyblok";

export enum IconSize {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

interface TextBlockProps {
  content: TextBlockType[];
  iconSize: IconSize;
  leftSiding?: boolean;
}

const TextBlock: React.FC<TextBlockProps> = ({
  content,
  iconSize,
  leftSiding,
}): JSX.Element => {
  const getIconContainerWidthStyle = (iconWidth: IconSize) => {
    switch (iconWidth) {
      case IconSize.SMALL:
        return `w-1/6`;
      case IconSize.MEDIUM:
        return `w-1/4`;
      case IconSize.LARGE:
      default:
        return `w-1/3`;
    }
  };

  return (
    <div className="mt-20">
      {content.map((block, key) => {
        return (
          <div
            key={block._uid}
            className={`flex ${
              isEven(key) && !leftSiding ? `flex-row` : `flex-row-reverse`
            } grow mb-20`}
          >
            <div
              className={`flex ${
                isEven(key) && !leftSiding ? `justify-end` : `justify-start`
              } items-center px-10 py-3 w-full`}
            >
              {block.text}
            </div>
            {block.illustration?.filename && (
              <div className={`flex ${getIconContainerWidthStyle(iconSize)}`}>
                <img
                  src={block.illustration.filename}
                  alt={block.illustration.alt}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TextBlock;
