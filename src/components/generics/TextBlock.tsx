import { isEven } from '../../utils/number'
import { TextBlockType } from '../../types/cms/stories'

export enum IconSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

interface TextBlockProps {
  content: TextBlockType[]
  iconSize: IconSize
  leftSiding?: boolean
}

const TextBlock: React.FC<TextBlockProps> = ({
  content,
  iconSize,
  leftSiding,
}) => {
  const getIconContainerWidthStyle = (iconWidth: IconSize) => {
    switch (iconWidth) {
      case IconSize.SMALL:
        return `w-1/12`
      case IconSize.MEDIUM:
        return `w-32`
      case IconSize.LARGE:
      default:
        return `w-1/6`
    }
  }

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
                  width={100}
                  height={100}
                />
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default TextBlock
