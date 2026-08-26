import React from "react";
import { BatteryMedium, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Faq from "./Faq";
import About from "./About";
import Card from "./Card";
 
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
						<Link
							to="/store"
							className="inline-flex rounded-full bg-green-500 px-6 py-3 font-semibold text-white transition hover:bg-green-600"
						>
							Shop parts & accessories <span className="ml-2" aria-hidden="true">→</span>
						</Link>
						<a href="#services" className="inline-flex rounded-full border border-black/10 px-6 py-3 font-semibold transition hover:border-black/30">
							Explore services
						</a>

					</div>
              
				</div>
			</section>

		 

			<About />

                        <Faq />

            <Footer />
		</main>
	);
}
