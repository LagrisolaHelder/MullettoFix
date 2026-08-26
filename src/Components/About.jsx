import {
	ArrowRight,
	CheckCircle2,
	Clock3,
	MapPin,
	ShieldCheck,
} from "lucide-react";

export default function About() {
	const benefits = [
		"Clear, upfront pricing",
		"Quality parts and careful repairs",
		"Friendly service from start to finish",
	];

	return (
		<section id="about" className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
			<div className="overflow-hidden border-t border-black/10 py-8 text-black sm:py-10 lg:py-12">
				<div className="grid gap-8 sm:gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-12">
					<div>
						<h2 className="max-w-2xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
							Let’s get your phone feeling new again.
						</h2>
						<p className="mt-7 max-w-xl text-lg leading-8 text-black/60">
							From cracked screens to tired batteries, MullettoFix provides dependable phone repairs without confusing jargon or surprise costs.
						</p>
						<div className="mt-6 grid gap-3 text-sm text-black/60 sm:mt-8 sm:flex sm:flex-wrap sm:gap-x-6 sm:gap-y-3">
							<span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4 shrink-0 text-green-400" />Fast turnaround</span>
							<span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 shrink-0 text-green-400" />Local and convenient</span>
							<span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 shrink-0 text-green-400" />Repair you can trust</span>
						</div>
						<div className="mt-9 grid gap-3 sm:mt-10 sm:flex sm:flex-row">
							<a href="mailto:hello@mullettofix.com" className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-green-500 px-6 py-3 font-semibold text-white transition hover:bg-green-600 sm:w-auto">
								Contact us <ArrowRight className="h-4 w-4" />
							</a>
							<a href="tel:+10000000000" className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-black/10 px-6 py-3 font-semibold transition hover:border-black/30 sm:w-auto">
								Call for a quote
							</a>
						</div>
					</div>

					<div className="border-l-2 border-green-400 pl-6 sm:pl-8">
						<p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">Why choose us?</p>
						<ul className="mt-5 space-y-5">
							{benefits.map((benefit) => (
								<li key={benefit} className="flex items-start gap-3 text-black/60">
									<CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-400" />
									<span>{benefit}</span>
								</li>
							))}
						</ul>
						<div className="mt-8 border-t border-black/10 pt-4 text-sm leading-6 text-black/60">
							Tell us what is wrong with your device and we’ll help you find the best next step.
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
