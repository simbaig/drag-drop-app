import { useState, useEffect } from "react";

export default function PropertyEditor({ selectedId, elements, updateProps }) {
	const [formData, setFormData] = useState(null);

	useEffect(() => {
		if (!selectedId) {
			setFormData(null);
			return;
		}
		const el = elements.find((e) => e.id === selectedId);
		setFormData({ ...el.props });
	}, [selectedId]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		const updated = { ...formData, [name]: value };
		setFormData(updated);
		updateProps(selectedId, updated);
	};

	if (!formData) {
		return (
			<div className="w-full md:w-1/4 bg-white border-l p-6 space-y-4 shadow-inner">
				<h2 className="text-lg font-semibold text-gray-600">
					No Element Selected
				</h2>
			</div>
		);
	}

	const type = elements.find((e) => e.id === selectedId)?.type;

	return (
		<div className="w-full md:w-1/4 bg-white border-l p-6 space-y-4 shadow-inner">
			<h2 className="text-xl font-bold text-gray-800 mb-4">🛠 Edit {type}</h2>

			{type === "text" && (
				<div className="space-y-1">
					<label className="text-sm text-gray-600">Text</label>
					<input
						type="text"
						name="text"
						value={formData.text}
						onChange={handleChange}
						className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
					/>
				</div>
			)}

			{type === "image" && (
				<>
					<div className="space-y-1">
						<label className="text-sm text-gray-600">Image URL</label>
						<input
							type="text"
							name="src"
							value={formData.src}
							onChange={handleChange}
							className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
						/>
					</div>
					<div className="space-y-1">
						<label className="text-sm text-gray-600">Alt Text</label>
						<input
							type="text"
							name="alt"
							value={formData.alt}
							onChange={handleChange}
							className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
						/>
					</div>
				</>
			)}

			{type === "button" && (
				<>
					<div className="space-y-1">
						<label className="text-sm text-gray-600">Label</label>
						<input
							type="text"
							name="label"
							value={formData.label}
							onChange={handleChange}
							className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
						/>
					</div>
					<div className="space-y-1">
						<label className="text-sm text-gray-600">Link</label>
						<input
							type="text"
							name="link"
							value={formData.link}
							onChange={handleChange}
							className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
						/>
					</div>
				</>
			)}
		</div>
	);
}
