import { useState } from 'react';
import MenuBar from '../components/menu/MenuBar';
import Dock from '../components/dock/Dock';
import Window from '../components/window/Window';

export default function Home() {
  const [windows, setWindows] = useState([]);

  const openWindow = (app) => {
    setWindows([...windows, { title: app, content: `${app} Content`, id: Date.now() }]);
  };

  const closeWindow = (id) => {
    setWindows(windows.filter((win) => win.id !== id));
  };

  return (
    <div className="h-screen w-screen bg-cover bg-center" style={{ backgroundImage: "url('/background/bg1.jpg')" }}
>
      <MenuBar />
      {windows.map((win) => (
        <Window
          key={win.id}
          title={win.title}
          content={win.content}
          onClose={() => closeWindow(win.id)}
        />
      ))}
      <Dock openWindow={openWindow} />
    </div>
  );
}
