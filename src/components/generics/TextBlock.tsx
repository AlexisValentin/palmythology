import { isEven } from "../../helpers/number";
import { TextBlockType } from "../../types/storyblok";

interface TextBlockProps {
  content: TextBlockType[];
}

const TextBlock: React.FC<TextBlockProps> = ({ content }): JSX.Element => {
  return (
    <div className="mt-20">
      {content.map((block, key) => {
        return (
          <div
            key={block._uid}
            className={`flex ${
              isEven(key) ? `flex-row` : `flex-row-reverse`
            } grow mb-20`}
          >
            <div className="flex justify-center items-center px-10 py-3 w-full">
              {block.text}
            </div>
            {block.illustration?.filename && (
              <div className="flex w-3/4">
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
