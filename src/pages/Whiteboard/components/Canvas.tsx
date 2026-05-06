import cn from "../../../utils/cn";

export interface CanvasProps {
	className?: string;
}

export const Canvas = (props: CanvasProps) => {
	return (
		<section
			className={cn(
				"m-12 bg-origin-padding bg-size-[24px_24px] bg-[radial-gradient(var(--color-border),transparent_2px)]",
				props.className,
			)}
		></section>
	);
};
