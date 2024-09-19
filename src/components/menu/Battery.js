import { useState, useEffect } from 'react';

const useBattery = () => {
  const [batteryState, setBatteryState] = useState({
    level: 1,
    charging: false,
  });

  useEffect(() => {
    const fetchBatteryStatus = async () => {
      try {
        const battery = await navigator.getBattery();

        setBatteryState({
          level: battery.level,
          charging: battery.charging,
        });

        battery.addEventListener('levelchange', () => {
          setBatteryState((prevState) => ({
            ...prevState,
            level: battery.level,
          }));
        });

        battery.addEventListener('chargingchange', () => {
          setBatteryState((prevState) => ({
            ...prevState,
            charging: battery.charging,
          }));
        });
      } catch (error) {
        console.error('Battery Status API를 사용할 수 없습니다.', error);
      }
    };

    fetchBatteryStatus();
  }, []);

  return batteryState;
};

export default function Battery() {
  const batteryState = useBattery();

  const width = () => {
    return 0.1 + batteryState.level * 0.96;
  };

  const color = () => {
    if (batteryState.charging) return 'bg-green-400';

    if (batteryState.level < 0.2) return 'bg-red-500';
    else if (batteryState.level < 0.5) return 'bg-yellow-500';
    else return 'bg-white';
  };

  return (
    <div className="flex items-center space-x-2">
      <span className="text-xs">{(batteryState.level * 100).toFixed()}%</span>
      <div className="relative flex items-center">
        <span className="i-bi:battery text-2xl" />
        <div className={`battery-level ${color()}`} style={{ width: `${width()}rem` }} />
        {batteryState.charging && (
          <span className="i-bi:lightning-charge-fill absolute inset-0 m-auto text-xs" />
        )}
      </div>
    </div>
  );
}
