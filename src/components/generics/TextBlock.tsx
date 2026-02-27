import Image from "next/image";
import type { TextBlockType } from "../../utils/cms/cms.constants";
import { isEven } from "../../utils/number";
import styles from "./TextBlock.module.scss";

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
}) => {
	const getIconContainerStyle = (iconWidth: IconSize) => {
		switch (iconWidth) {
			case IconSize.SMALL:
				return styles.iconSideSmall;
			case IconSize.MEDIUM:
				return styles.iconSideMedium;
			default:
				return styles.iconSideLarge;
		}
	};

	return (
		<div className={styles.wrapper}>
			{content.map((block, key) => {
				const isNormal = isEven(key) && !leftSiding;
				return (
					<div
						key={block._uid}
						className={`${styles.row} ${isNormal ? styles.rowNormal : styles.rowReverse}`}
					>
						<div
							className={`${styles.textSide} ${isNormal ? styles.textAlignEnd : styles.textAlignStart}`}
						>
							{block.text}
						</div>
						{block.illustration?.filename && (
							<div className={getIconContainerStyle(iconSize)}>
								<Image
									src={block.illustration.filename}
									alt={block.illustration.alt}
									width={100}
									height={100}
									sizes="6.25rem"
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
