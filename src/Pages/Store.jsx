import Card from "../Components/Card";

const item = {
	name: "Classic Mullet Tee",
	description: "A comfortable everyday tee with a bold mullet-inspired design.",
	price: "$29.99",
	image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
};

export default function Store() {
	return (
		<main className="store">
			<header className="store__header">
				<p className="store__eyebrow">Mulletto shop</p>
				<h1>Simple essentials</h1>
				<p>Find something worth wearing.</p>
			</header>

			<section className="store__grid" aria-label="Store items">
				<Card>
					<img className="store__image" src={item.image} alt={item.name} />
					<div className="store__content">
						<h2>{item.name}</h2>
						<p>{item.description}</p>
						<div className="store__footer">
							<strong>{item.price}</strong>
							<button type="button">Add to cart</button>
						</div>
					</div>
				</Card>
			</section>
		</main>
	);
}
