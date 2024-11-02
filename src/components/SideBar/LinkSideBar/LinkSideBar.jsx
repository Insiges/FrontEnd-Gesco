import { Link, useLocation } from "react-router-dom";

const LinkSideBar = ({ url, icone, nome }) => {
	const location = useLocation();
	const isActive = location.pathname === url;

	return (
		<li className="list-none lg:pl-4">
			<Link
				to={url}
				className={`flex items-center text-gray-300 p-1 gap-4 no-underline transition-all duration-300 hover:bg-white hover:text-gray-600 hover:rounded-l-2xl hover:opacity-80 hover:translate-x-1 sm:hover:translate-x-4 ${
					isActive
						? "bg-white text-gray-700 rounded-l-2xl translate-x-1 opacity-100 sm:translate-x-4"
						: ""
				}`}
			>
				<span className="text-2xl lg:pl-2">{icone}</span>
				<p className="text-lg hidden lg:block">{nome}</p>
			</Link>
		</li>
	);
};

export default LinkSideBar;
