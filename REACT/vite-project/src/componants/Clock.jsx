import { useEffect, useState } from "react";

export function Clock() {
  const [heure, setHeure] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setHeure(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const formatHeure = heure.toLocaleTimeString();

  return <div>{formatHeure}</div>;
}
