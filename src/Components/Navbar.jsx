export default function Navbar() {
	return (
		<nav className="z-10 sticky top-0 bg-white/80 backdrop-blur-md mx-auto flex max-w-6xl items-center justify-between px-6 py-6 lg:px-8">
			<a href="#top" className="text-lg font-bold tracking-tight">
				Mulletto<span className="text-green-400">Fix</span>
			</a>
			<div className="hidden items-center gap-8 text-sm text-black/60 sm:flex">
				<a className="transition hover:text-black" href="#services">Services</a>
				<a className="transition hover:text-black" href="#about">About us</a>
			</div>
			<a href="#services" className="rounded-full bg-green-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-600">
				Get started
			</a>
		</nav>
	);
}
