declare module "*.module.scss" {
	const styles: Record<string, string>;
	export default styles;
}

declare module "*.svg" {
	import type { StaticImageData } from "next/image";
	const content: StaticImageData;
	export default content;
}

declare module "*.png" {
	import type { StaticImageData } from "next/image";
	const content: StaticImageData;
	export default content;
}

declare module "*.jpg" {
	import type { StaticImageData } from "next/image";
	const content: StaticImageData;
	export default content;
}

declare module "*.jpeg" {
	import type { StaticImageData } from "next/image";
	const content: StaticImageData;
	export default content;
}

declare module "*.webp" {
	import type { StaticImageData } from "next/image";
	const content: StaticImageData;
	export default content;
}
