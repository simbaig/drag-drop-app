export default function ElementRenderer({ type, props }) {
	switch (type) {
		case "text":
			return <p className="text-lg text-gray-800">{props.text}</p>;
		case "image":
			return (
				<img
					src={props.src}
					alt={props.alt}
					className="max-w-full rounded-lg border shadow"
				/>
			);
		case "button":
			return (
				<a href={props.link}>
					<button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg shadow">
						{props.label}
					</button>
				</a>
			);
		default:
			return null;
	}
}
