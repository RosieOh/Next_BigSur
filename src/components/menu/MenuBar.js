import { useState } from 'react';
import useBatteryStatus from './Battery'; // Battery.js 훅 임포트

export default function MenuBar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const { batteryLevel, isCharging } = useBatteryStatus(); // 배터리 상태 가져오기


  // 메뉴 아이템 클릭 핸들러
  const handleMenuClick = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <div className="w-full h-8 bg-gray-800 flex items-center justify-between px-4 text-white fixed top-0 z-50">
      <div className="flex items-center space-x-4 relative">
        <span onClick={() => handleMenuClick('apple')} className="cursor-pointer relative"></span>
        {activeMenu === 'apple' && (
          <div className="absolute top-8 left-0 w-40 bg-gray-900 text-white rounded-md shadow-lg">
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">About This Mac</li>
              <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">System Preferences...</li>
              <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">App Store...</li>
              <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Restart</li>
              <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Shut Down</li>
            </ul>
          </div>
        )}

        <span onClick={() => handleMenuClick('finder')} className="cursor-pointer relative">Finder</span>
        {activeMenu === 'finder' && (
          <div className="absolute top-8 left-0 w-40 bg-gray-900 text-white rounded-md shadow-lg">
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">New Finder Window</li>
              <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">New Folder</li>
              <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Connect to Server...</li>
            </ul>
          </div>
        )}

        <span onClick={() => handleMenuClick('file')} className="cursor-pointer relative">File</span>
        {activeMenu === 'file' && (
          <div className="absolute top-8 left-0 w-40 bg-gray-900 text-white rounded-md shadow-lg">
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Open</li>
              <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Save</li>
              <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Close</li>
            </ul>
          </div>
        )}

        <span onClick={() => handleMenuClick('edit')} className="cursor-pointer relative">Edit</span>
        {activeMenu === 'edit' && (
          <div className="absolute top-8 left-0 w-40 bg-gray-900 text-white rounded-md shadow-lg">
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Undo</li>
              <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Redo</li>
              <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Cut</li>
            </ul>
          </div>
        )}

        <span onClick={() => handleMenuClick('view')} className="cursor-pointer relative">View</span>
        {activeMenu === 'view' && (
          <div className="absolute top-8 left-0 w-40 bg-gray-900 text-white rounded-md shadow-lg">
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Show Sidebar</li>
              <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Hide Toolbar</li>
              <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Customize Toolbar...</li>
            </ul>
          </div>
        )}
      </div>

      <div className="flex items-center space-x-4">
        <span>12:34 PM</span>
        {batteryLevel !== null && (
          <span>
            🔋 {batteryLevel}% {isCharging ? '⚡' : ''}
          </span>
        )}
        <span>Wi-Fi</span>
      </div>
    </div>
  );
}
