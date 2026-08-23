const Footer = () => {
	return (
		<footer className="border-t border-slate-200 bg-white px-6 py-6 text-sm text-slate-500">
			<div className="mx-auto flex max-w-6xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
				<p className="font-semibold text-slate-900">MullettoFix</p>
				<a className="hover:text-green-500" href="mailto:support@mullettoofix.com">Contact support</a>
				<p>&copy; {new Date().getFullYear()} MullettoFix</p>
			</div>
		</footer>
	);
};

export default Footer;
