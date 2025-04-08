import { useState } from "react";

export const getDefaultProps = (type) => {
	switch (type) {
		case "text":
			return { text: "Hello World" };
		case "image":
			return { src: "https://picsum.photos/300", alt: "Placeholder" };
		case "button":
			return { label: "Click Me", link: "#" };
		default:
			return {};
	}
};

export function useEditorStore() {
	const [elements, setElements] = useState([]);

	const addElement = (type) => {
		const id = Date.now().toString();
		const newElement = { id, type, props: getDefaultProps(type) };
		setElements((prev) => [...prev, newElement]);
	};

	const updateElementProps = (id, newProps) => {
		setElements((prev) =>
			prev.map((el) => (el.id === id ? { ...el, props: newProps } : el))
		);
	};

	return { elements, addElement, updateElementProps };
}
