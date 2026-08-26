import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const sections = [
	["General & Orders", [
		["How do I know if a part is compatible with my specific phone model?", <>Check your device model number in <strong>Settings &gt; About Phone</strong> (or on the back of the device) and compare it with the product title and specifications. If unsure, contact support with your model number before ordering.</>],
		["Are your replacement parts original OEM or high-quality aftermarket?", <>We offer both. Listings are labeled <strong>Genuine OEM</strong> or <strong>Premium Aftermarket</strong>, tested to meet or exceed OEM specifications.</>],
		["Can I cancel or modify my order after placing it?", "Contact customer support immediately. Once an order enters fulfillment, it cannot be modified, but it can be returned after arrival."],
	]],
	["Shipping & Returns", [
		["How long will shipping take, and do you offer express delivery?", "Standard orders ship within 1–2 business days. Express options, including next-day delivery, are available at checkout. Tracking is emailed once your package is scanned."],
		["What is your return policy for unused or incorrectly ordered parts?", "Unused parts in original, undamaged packaging can be returned within 30 days for a refund or store credit. Return shipping costs apply unless the item was defective or incorrect."],
		["What happens if my part arrives damaged or DOA (Dead on Arrival)?", "Contact us within 48 hours with photos or video of the defect and original packaging. We will send a replacement or issue a full refund."],
	]],
	["Repairs & Installation", [
		["Do replacement screens and parts come with repair tools and adhesives?", "Toolkits and pre-cut adhesive strips are included with select repair kits, as noted on the product page. Recommended tools and adhesives can be added for stand-alone parts."],
		["Should I test the replacement part before installing it permanently?", <><strong>Yes.</strong> Always connect and dry-test the part before applying adhesive or closing the frame. Installing damaged parts voids the standard return policy.</>],
		["What warranty is provided on replacement parts?", "All replacement parts carry a 6-month to 1-year warranty covering manufacturing defects. It excludes installation damage, drops, and liquid exposure."],
	]],
];

export default function Faq() {
	const [open, setOpen] = useState("0-0");
	return (
		<section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
			<header className="mb-10 text-center">
				<HelpCircle className="mx-auto mb-4 h-10 w-10 text-green-400" />
				<h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">Frequently asked questions</h2>
				<p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-black/60">Everything you need to know about our parts, shipping, and repairs.</p>
			</header>
			<div className="space-y-6">
				{sections.map(([title, items], sectionIndex) => (
					<div key={title} className="rounded-2xl border border-black/10 px-5 sm:px-7">
						<h3 className="border-b border-black/10 py-4 text-xs font-bold uppercase tracking-[.18em] text-green-400">{title}</h3>
						{items.map(([question, answer], itemIndex) => {
							const id = `${sectionIndex}-${itemIndex}`;
							const isOpen = open === id;
							return <div key={question} className="border-b border-black/10 last:border-0">
								<button type="button" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? "" : id)} className="flex w-full items-center justify-between gap-5 py-5 text-left text-sm font-semibold text-black hover:text-green-400">
									<span>{question}</span><ChevronDown className={`h-5 w-5 shrink-0 text-green-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
								</button>
								{isOpen && <div className="pb-5 pr-8 text-sm leading-6 text-black/60">{answer}</div>}
							</div>;
						})}
					</div>
				))}
			</div>
		</section>
	);
}
