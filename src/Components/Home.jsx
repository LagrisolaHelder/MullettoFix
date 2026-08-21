import React from "react";

const services = [
	{
		title: "Screen replacement",
		description: "Clear, reliable displays fitted with care.",
		icon: "▣",
	},
	{
		title: "Battery replacement",
		description: "Bring your phone back to a full day of power.",
		icon: "⌁",
	},
];

export default function Home() {
	return (
		<main className="min-h-screen bg-white text-black">
			<nav className=" sticky top-0 bg-white/80 backdrop-blur-md     mx-auto flex max-w-6xl items-center justify-between px-6 py-6 lg:px-8">
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

			<section id="top" className="mx-auto max-w-6xl px-6 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24 h-screen flex items-center">
				<div className="max-w-3xl">
					<p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-green-400">Welcome to MullettoFix</p>
					<h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
						Better parts. <span className="text-green-400">Better fixes.</span>
					</h1>
					<p className="mt-7 max-w-xl text-lg leading-8 text-black/60">
						Quality mobile phone parts, accessories, and everyday repair help—kept simple, honest, and accessible.
					</p>
					<div className="mt-9 flex flex-wrap gap-3">
						<a href="#shop" className="inline-flex rounded-full bg-green-500 px-6 py-3 font-semibold text-white transition hover:bg-green-600">
							Shop parts & accessories <span className="ml-2" aria-hidden="true">→</span>
						</a>
						<a href="#services" className="inline-flex rounded-full border border-black/10 px-6 py-3 font-semibold transition hover:border-black/30">
							Explore services
						</a>
					</div>
				</div>
			</section>

			<section id="services" className="border-t border-black/10 bg-black/[0.02]">
				<div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
					<div className="mb-10 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
						<div>
							<p className="text-sm font-semibold text-green-400">What we do</p>
							<h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Most-loved services</h2>
						</div>
						<p className="max-w-xs text-sm leading-6 text-black/50">The essentials to keep your phone working at its best.</p>
					</div>
					<div className="grid gap-4 md:grid-cols-2">
						{services.map((service) => (
							<article key={service.title} className="rounded-2xl border border-black/10 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg">
								<div className="mb-12 flex h-11 w-11 items-center justify-center rounded-xl bg-green-400/15 text-2xl text-green-500" aria-hidden="true">{service.icon}</div>
								<h3 className="text-xl font-bold">{service.title}</h3>
								<p className="mt-2 text-black/55">{service.description}</p>
							</article>
						))}
					</div>
				</div>
			</section>

			<section id="about" className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
				<div className="rounded-2xl bg-black p-8 text-white sm:p-12">
					<p className="text-sm font-semibold text-green-400">Need a hand?</p>
					<div className="mt-3 flex flex-col justify-between gap-7 sm:flex-row sm:items-end">
						<h2 className="max-w-lg text-3xl font-bold tracking-tight sm:text-4xl">Let’s get your phone feeling new again.</h2>
						<a href="mailto:hello@mullettofix.com" className="shrink-0 rounded-full bg-green-500 px-5 py-3 text-center font-semibold text-white hover:bg-green-600">Contact us</a>
					</div>
				</div>
			</section>
		</main>
	);
}
