// components/Window.js
import Draggable from 'react-draggable';

export default function Window({ title, content, onClose }) {
  return (
    <Draggable>
      <div className="absolute w-96 h-64 bg-white shadow-lg rounded-lg">
        <div className="w-full h-8 bg-gray-200 flex justify-between items-center p-2 rounded-t-lg cursor-move">
          <span>{title}</span>
          <button className="text-red-500" onClick={onClose}>✕</button>
        </div>
        <div className="p-4">
          {content}
        </div>
      </div>
    </Draggable>
  );
}
