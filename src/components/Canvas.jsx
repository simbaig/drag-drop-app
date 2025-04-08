// src/components/Canvas.jsx
import { useDroppable } from "@dnd-kit/core";
import ElementRenderer from "./ElementRenderer";

export default function Canvas({ elements, onSelect, selectedId }) {
	const { setNodeRef, isOver } = useDroppable({ id: "canvas-drop-area" });

	return (
		<div className="flex-1 bg-white px-4 py-4 overflow-auto">
			<div
				ref={setNodeRef}
				className={`min-h-[600px] bg-gray-50 border-2 border-dashed rounded-xl p-8 grid gap-4 transition ${
					isOver ? "border-blue-400 bg-blue-100" : "border-gray-300"
				}`}
			>
				{elements.map((el) => (
					<div
						key={el.id}
						onClick={() => onSelect(el.id)}
						className={`p-3 rounded-lg transition border-2 ${
							selectedId === el.id
								? "border-blue-500 bg-blue-50"
								: "border-transparent hover:border-gray-300"
						}`}
					>
						<ElementRenderer type={el.type} props={el.props} />
					</div>
				))}
			</div>
		</div>
	);
}
