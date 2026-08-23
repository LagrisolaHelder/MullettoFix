import { ShoppingCart, Zap } from "lucide-react";

export default function Card({
	name = "Essential Product",
	price = "$29.99",
	image = "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-17-pro-witb-cosmicorange-202509_FMT_WHH?wid=560&hei=744&fmt=jpeg&qlt=90&.v=NXh3OEZPWW1IYUpzT1hwc0dnVnRpNGpxQkRKUjFONlhiQkhUZXVydnkwSnRNV1RtaElLOWlibWpBaG1hcUZKYlZwRHBsN0J5WGltZHEvVEZYY0VZa3I2TGhYaGhMVkJpQ2RGWWVURTZNbXpJc0RDNGp0cUtNQmRxTjZCWlpwYmw",
	onAddToCart = () => {},
	onBuyNow = () => {},
}) {
	return (
		<article
			style={{
				width: "100%",
				maxWidth: 300,
				overflow: "hidden",
				border: "1px solid #e5e7eb",
				borderRadius: 18,
				background: "#fff",
				fontFamily: "system-ui, sans-serif",
				boxShadow: "0 12px 30px rgba(15, 23, 42, 0.08)",
			}}
		>
			<style>{`@media (max-width: 640px) {
				.card-actions { display: none !important; }
				.product-card { aspect-ratio: 1 / 1; }
				.card-image { aspect-ratio: 1 / 1; height: auto !important; }
				.card-title { font-size: 16px !important; }
				.card-price { font-size: 17px !important; }
			}`}</style>
			{image && (
				<div className="card-image" style={{ position: "relative", aspectRatio: "1 / 1", overflow: "hidden", background: "#f1f5f9" }}>
					<img
						src={image}
						alt={name}
						style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
					/>
				</div>
			)}
			<div style={{ padding: "14px 14px 12px" }}>
				<div style={{ marginBottom: 14 }}>
					<h2 className="card-title" style={{ margin: 0, color: "#000", fontSize: 17, lineHeight: 1.3, letterSpacing: "-0.02em" }}>{name}</h2>
					<strong className="card-price" style={{ display: "block", marginTop: 6, color: "#000", fontSize: 18 }}>{price}</strong>
				</div>
				<div className="card-actions" style={{ display: "flex", flexDirection: "row", gap: 10 }}>
					<button
						type="button"
						aria-label={`Add ${name} to cart`}
						className="card-add-to-cart"
						style={{ ...buttonStyle, flex: 1 }}
						onClick={() => onAddToCart({ name, price })}
					>
						<ShoppingCart size={16} /> Add to cart
					</button>
					<button
						type="button"
						style={{ ...buttonStyle, flex: 1, background: "#22c55e", color: "#fff", borderColor: "#22c55e", boxShadow: "0 5px 12px rgba(34, 197, 94, 0.22)" }}
						onClick={() => onBuyNow({ name, price })}
					>
						<Zap size={14} /> Buy now
					</button>
				</div>
			</div>
		</article>
	);
}

const buttonStyle = {
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	gap: 7,
	width: "100%",
	border: "1px solid #e5e7eb",
	borderRadius: 7,
	padding: "8px 6px",
	background: "#f8fafc",
	color: "#000",
	cursor: "pointer",
	fontWeight: 600,
	fontSize: 13,
	minHeight: 40,
	transition: "transform 150ms ease, box-shadow 150ms ease",
};

