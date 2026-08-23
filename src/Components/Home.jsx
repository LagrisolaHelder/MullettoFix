import React from "react";
import { BatteryMedium, Smartphone } from "lucide-react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Faq from "./Faq";
import About from "./About";
const services = [
	{
		title: "Screen replacement",
		description: "Clear, reliable displays fitted with care.",
		icon: Smartphone,
	},
	{
		title: "Battery replacement",
		description: "Bring your phone back to a full day of power.",
		icon: BatteryMedium,
	},
];

export default function Home() {
	return (
		<main className="min-h-screen bg-white text-black">
            <Navbar />
			<section id="top" className="mx-auto max-w-6xl px-6 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24 h-[80vh] flex items-center">
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

			<section id="services" className="flex min-h-[70vh] items-center border-t border-black/10 bg-white]">
				<div className="mx-auto w-full max-w-6xl px-6 py-16 text-center lg:px-8 lg:py-20">
					<div className="mb-10 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
						<div>
							<p className="text-sm font-semibold text-green-400">What we do</p>
							<h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Most-loved services</h2>
						</div>
						<p className="max-w-xs text-sm leading-6 text-black/50 sm:text-left">The essentials to keep your phone working at its best.</p>
					</div>
					<div className="grid gap-4 md:grid-cols-2">
						{services.map((service) => (
							<div key={service.title} className="text-left">
								<a href={`/services/${service.title.toLowerCase().replaceAll(" ", "-")}`} className="flex h-48 items-center justify-center rounded-2xl border border-black/10 bg-white transition hover:-translate-y-1 hover:border-black/20 hover:shadow-lg" aria-label={service.title}>
									<div className="flex h-16 w-16 items-center justify-center rounded-xl bg-green-400/10 text-green-500" aria-hidden="true">
										<service.icon size={30} strokeWidth={1.75} />
									</div>
								</a>
								<div className="mt-4 px-1">
									<h3 className="text-xl font-bold">{service.title}</h3>
									<p className="mt-2 text-black/55">{service.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<About />

                        <Faq />

            <Footer />
		</main>
	);
}
