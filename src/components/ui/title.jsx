export const Title = ({ style, fontSize, subTitle, children }) => (
	<>
		<h1
			className="text-blue-800 font-bold text-4xl"
			style={{ ...style, fontSize }}
		>
			{children}
		</h1>
		{subTitle && <span className="text-slate-500">{subTitle}</span>}
	</>
);
