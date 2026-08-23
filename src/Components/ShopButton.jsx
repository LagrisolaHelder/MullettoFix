import { Link } from "react-router-dom";
 

export default function ShopButton() {
    return (
        <Link 
            to="../Pages/Store.jsx" 
            className="inline-flex rounded-full bg-green-500 px-6 py-3 font-semibold text-white transition hover:bg-green-600"
        >
            Shop parts & accessories <span className="ml-2" aria-hidden="true">→</span>
        </Link>
    );
}