import { Navbar } from "../components/Navbar/Navbar";
import * as React from "react";

export interface MainLayoutProps {
	children: React.ReactNode;
}

export const MainLayout = (props: MainLayoutProps) => {
	return (
		<div className="h-screen bg-stone-50 flex flex-col text-white font-serif">
			<header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
				<Navbar />
			</header>

			<main className="h-full w-full mx-auto bg-background ">
				{props.children}
			</main>

			<footer className="border-t border-stone-200 bg-background py-6 text-center text-sm text-muted">
				© 2026 SatisGrid. Todos los derechos reservados.
			</footer>
		</div>
	);
};
