import { useDraggable } from "@dnd-kit/core";

const DraggableElement = ({ type }) => {
	const { attributes, listeners, setNodeRef } = useDraggable({
		id: type,
		data: { type },
	});

	return (
		<div
			ref={setNodeRef}
			{...listeners}
			{...attributes}
			className="cursor-grab p-4 bg-white border rounded shadow-sm hover:shadow-md transition"
		>
			{type.toUpperCase()}
		</div>
	);
};

export default function Sidebar() {
	const elements = ["text", "image", "button"];
	return (
		<div className="w-full md:w-1/4 bg-gray-100 p-6 space-y-4 overflow-y-auto border-r">
			<h2 className="text-xl font-bold mb-4">🎛 Elements</h2>
			{elements.map((type) => (
				<DraggableElement key={type} type={type} />
			))}
		</div>
	);
}
