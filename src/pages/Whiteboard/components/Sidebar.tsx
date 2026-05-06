import cn from "../../../utils/cn";

export interface SidebarProps {
	className?: string;
}

export const Sidebar = (props: SidebarProps) => {
	return (
		<section
			className={cn("w-sm border-r", props.className)}
		></section>
	);
};
