import { Flex } from "../../common";

const Render = ({ key, children }) => (
	<Flex
		key={key}
		direction="row"
		justify="between"
		className="p-3 odd:bg-white even:bg-[#f4f4f4]"
	>
		<Flex direction="row" justify="start" className="gap-12">
			{children}
		</Flex>
	</Flex>
);

const StrongUpperTag = ({ children }) => (
	<strong style={{ textTransform: "uppercase" }}>{children}</strong>
);

export const StudentInfoOverview = ([key, value]) => {
	switch (key) {
		case "foto":
			return (
				<Render key={key}>
					<p>
						<StrongUpperTag>{key}</StrongUpperTag>:{" "}
						{value ? "Imagem uploaded" : "N/A"}
					</p>
				</Render>
			);
		case "emails":
			return (
				<Render key={key}>
					<p>
						<StrongUpperTag>{key}</StrongUpperTag>:{" "}
						{value.length ? value?.map((email) => email) : "N/A"}
					</p>
				</Render>
			);
		case "telefones":
			return (
				<Render key={key}>
					<p>
						<StrongUpperTag>{key}</StrongUpperTag>:{" "}
						{value.length ? value?.map((phone) => phone) : "N/A"}
					</p>
				</Render>
			);

		case "endereco":
			return (
				<Render key={key}>
					<p>
						<StrongUpperTag>{key}</StrongUpperTag>:{" "}
						{Object.entries(value).length ? (
							<ul>
								{Object.entries(value).map(([addressKey, addressValue]) => (
									<li key={addressKey}>
										{addressKey}: {addressValue}
									</li>
								))}
							</ul>
						) : (
							"N/A"
						)}
					</p>
				</Render>
			);
		case "responsaveis":
			return (
				<Render key={key}>
					<p>
						<StrongUpperTag>{key}</StrongUpperTag>:{" "}
						{value.length ? value?.map(({ nome }) => nome) : "N/A"}
					</p>
				</Render>
			);
		case "login":
			return null;

		default:
			return (
				<Render key={key}>
					<p>
						<StrongUpperTag>{key}</StrongUpperTag>: {!value ? "N/A" : value}
					</p>
				</Render>
			);
	}
};
