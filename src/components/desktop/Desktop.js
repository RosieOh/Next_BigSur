import { useState } from 'react';
import Window from './Window';
import styles from './Desktop.module.css';

const icons = [
    { id: 1, src: '/icons/project1.png', title: 'Project 1', content: 'Project 1 content' },
    { id: 2, src: '/icons/project2.png', title: 'Project 2', content: 'Project 2 content' },
];

export default function Desktop() {
    const [openWindows, setOpenWindows] = useState([]);

    const openWindow = (icon) => {
        setOpenWindows((prev) => [...prev, icon]);
    };

    const closeWindow = (id) => {
        setOpenWindows((prev) => prev.filter((win) => win.id !== id));
    };

    return (
        <div className={styles.desktop}>
            {icons.map((icon) => (
                <div key={icon.id} className={styles.icon} onClick={() => openWindow(icon)}>
                    <img src={icon.src} alt={icon.title} />
                    <span>{icon.title}</span>
                </div>
            ))}
            {openWindows.map((win) => (
                <Window key={win.id} title={win.title} onClose={() => closeWindow(win.id)}>
                    {win.content}
                </Window>
            ))}
        </div>
    );
}
