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
		<section id="about" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
			<div className="overflow-hidden rounded-2xl border border-green-100 bg-gradient-to-br from-green-50 via-white to-emerald-50 p-5 text-slate-900 shadow-sm sm:rounded-3xl sm:p-8 lg:p-12">
				<div className="grid gap-8 sm:gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-12">
					<div>
						<h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
							Let’s get your phone feeling new again.
						</h2>
						<p className="mt-4 max-w-xl text-base leading-7 text-slate-600 sm:mt-5 sm:text-lg sm:leading-8">
							From cracked screens to tired batteries, MullettoFix provides dependable phone repairs without confusing jargon or surprise costs.
						</p>
						<div className="mt-6 grid gap-3 text-sm text-slate-600 sm:mt-8 sm:flex sm:flex-wrap sm:gap-x-6 sm:gap-y-3">
							<span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4 shrink-0 text-green-600" />Fast turnaround</span>
							<span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 shrink-0 text-green-600" />Local and convenient</span>
							<span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 shrink-0 text-green-600" />Repair you can trust</span>
						</div>
						<div className="mt-7 grid gap-3 sm:mt-8 sm:flex sm:flex-row">
							<a href="mailto:hello@mullettofix.com" className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-green-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-700 sm:w-auto sm:text-base">
								Contact us <ArrowRight className="h-4 w-4" />
							</a>
							<a href="tel:+10000000000" className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-green-200 bg-white px-5 py-3 text-sm font-semibold text-green-700 transition hover:bg-green-50 sm:w-auto sm:text-base">
								Call for a quote
							</a>
						</div>
					</div>

					<div className="rounded-2xl border border-white/80 bg-white/80 p-5 shadow-sm backdrop-blur sm:p-8">
						<p className="text-sm font-semibold uppercase tracking-wider text-green-700">Why choose us?</p>
						<ul className="mt-5 space-y-5">
							{benefits.map((benefit) => (
								<li key={benefit} className="flex items-start gap-3 text-slate-700">
									<CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
									<span>{benefit}</span>
								</li>
							))}
						</ul>
						<div className="mt-8 rounded-xl bg-green-50 p-4 text-sm leading-6 text-green-900">
							Tell us what is wrong with your device and we’ll help you find the best next step.
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
