import { useDraggable } from "@dnd-kit/core";

export default function DraggableItem({ type, label }) {
	const { attributes, listeners, setNodeRef } = useDraggable({
		id: type, // 👈 important: "text", "image", or "button"
	});

	return (
		<div
			ref={setNodeRef}
			{...listeners}
			{...attributes}
			className="p-3 bg-white border hover:border-blue-400 transition rounded-lg shadow-sm cursor-pointer"
		>
			{label}
		</div>
	);
}
