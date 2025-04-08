import { DndContext, DragOverlay } from "@dnd-kit/core";
import Sidebar from "./components/Sidebar";
import Canvas from "./components/Canvas";
import PropertyEditor from "./components/PropertyEditor";
import ElementRenderer from "./components/ElementRenderer";
import { useEditorStore, getDefaultProps } from "./hooks/useEditorStore"; // ✅

import { useState } from "react";

function App() {
	const editor = useEditorStore();
	const [selectedId, setSelectedId] = useState(null);
	const [activeId, setActiveId] = useState(null);
	const [activeType, setActiveType] = useState(null);

	const handleDragStart = (event) => {
		const { active } = event;
		setActiveId(active.id);
		setActiveType(active.data.current?.type);
	};

	const handleDragEnd = (event) => {
		const { over, active } = event;
		setActiveId(null);
		setActiveType(null);

		if (over && over.id === "canvas-drop-area") {
			editor.addElement(active.data.current.type);
		}
	};

	return (
		<DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
			<div className="flex flex-col md:flex-row h-screen overflow-hidden">
				<Sidebar />
				<Canvas
					elements={editor.elements}
					onSelect={setSelectedId}
					selectedId={selectedId}
				/>
				<PropertyEditor
					selectedId={selectedId}
					elements={editor.elements}
					updateProps={editor.updateElementProps}
				/>
			</div>

			<DragOverlay>
				{activeId ? (
					<div className="p-4 opacity-80">
						<ElementRenderer
							type={activeType}
							props={getDefaultProps(activeType)}
						/>
					</div>
				) : null}
			</DragOverlay>
		</DndContext>
	);
}

export default App;
