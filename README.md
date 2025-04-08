# 🧩 Drag-and-Drop Website Builder

A lightweight, responsive drag-and-drop website builder prototype. Built using React and `@dnd-kit`, this tool allows users to visually create websites by dragging elements (text, images, buttons) onto a canvas, and customize them using a property editor.

---

## 🚀 Features

- 🔧 **Drag and Drop Editor** powered by `@dnd-kit`
- 📝 **Property Editor** to update content live
- 🧱 **Element Renderer** for dynamic UI generation
- 📱 **Responsive Design** using Tailwind CSS
- 🌐 **Easily Extendable** for new components & templates

---

## 🛠️ Tech Stack

- **React** – UI framework
- **@dnd-kit/core** – Drag and drop engine
- **Tailwind CSS** – Utility-first styling
- **JavaScript (ES6+)** – Application logic

---

## 🧩 How It Works

1. Users drag an element (Text, Image, Button) from the sidebar
2. Element is dropped onto the canvas using `@dnd-kit`
3. Elements are rendered via `ElementRenderer.jsx`
4. Clicking an element opens the `PropertyEditor`
5. Editor updates props in real-time via `useEditorStore`

---

## 🎨 Customization

Each element supports default props that can be updated:

| Element  | Props           |
| -------- | --------------- |
| `Text`   | `text`          |
| `Image`  | `src`, `alt`    |
| `Button` | `label`, `link` |

---

## 📱 Responsive Design

- Mobile, Tablet, and Desktop friendly
- Tailwind’s responsive utility classes (`md:`, `lg:`) used for layout
- Canvas and Editor stack vertically on smaller screens

---

## 📈 Future Enhancements

- 🔄 Drag reordering inside canvas
- 💾 Save & load designs from localStorage / database
- 🔀 Add templates and layout presets
- 🔙 Undo/redo stack
- ➕ Add more elements (videos, forms, social embeds)

---

## 💡 Rationale

This project focuses on **scalability** and **developer friendliness**:

- Modular components make it easy to add new UI elements
- `@dnd-kit` provides fine-grained control over interactions
- Clean separation of concerns between UI, state, and behavior
- Tailwind speeds up styling and ensures responsive layout

---

## 🧪 Setup & Run Locally

```bash
git clone https://github.com/your-username/drag-drop-builder.git
cd drag-drop-builder
npm install
npm run dev
```
