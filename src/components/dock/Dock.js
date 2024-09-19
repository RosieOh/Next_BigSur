import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFolder, FaChrome, FaFile } from 'react-icons/fa';

export default function Dock({ openWindow }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const icons = [
    { icon: FaFolder, name: 'Finder' },
    { icon: FaChrome, name: 'Browser' },
    { icon: FaFile, name: 'Files' },
  ];

  return (
    <div className="fixed bottom-0 w-full flex justify-center mb-4">
      <div className="flex space-x-4 bg-gray-800 p-4 rounded-xl backdrop-blur-lg bg-opacity-60">
        {icons.map((item, index) => {
          const IconComponent = item.icon;
          let scale = 1;

          if (hoveredIndex !== null) {
            if (index === hoveredIndex) {
              scale = 1.25;
            } else if (index === hoveredIndex - 1 || index === hoveredIndex + 1) {
              scale = 1.1;
            }
          }

          return (
<motion.div
  key={index}
  className={`relative flex items-center justify-center w-16 h-16 rounded-full bg-white bg-opacity-20 shadow-lg transition duration-200`}
  onMouseEnter={() => setHoveredIndex(index)}
  onMouseLeave={() => setHoveredIndex(null)}
  onClick={() => {
    openWindow(item.name);
    setHoveredIndex(index); // 아이콘을 흔드는 효과
  }}
  whileHover={{ scale: 1.25 }}
  initial={{ scale: 1 }}
  animate={{ scale, rotate: hoveredIndex === index ? [0, -10, 10, -5, 5, 0] : 0 }}
  transition={{ type: 'spring', stiffness: 300, duration: 0.6 }}
>
  <IconComponent className={`text-white text-3xl cursor-pointer`} />
  {/* 반사 효과 */}
  <div className="absolute bottom-0 left-0 w-full h-full opacity-30 transform scale-y-[-1] rounded-full overflow-hidden">
    <IconComponent className="text-white text-3xl blur-sm opacity-20" />
  </div>
</motion.div>

          );
        })}
      </div>
    </div>
  );
}
