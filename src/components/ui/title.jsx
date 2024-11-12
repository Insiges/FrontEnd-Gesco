export const Title = ({ style, fontSize, subTitle, children }) => (
	<>
		<h1
			className="text-[#060343] font-bold text-2xl"
			style={{ ...style, fontSize }}
		>
			{children}
		</h1>
		{subTitle && <span className="text-slate-500">{subTitle}</span>}
	</>
);
