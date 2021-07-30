import { useEffect, useState } from "react";

export const useTimeLeft = () => {
  const [timeLeft, setTimeLeft] = useState(getRemainingTime());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(getRemainingTime());
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  });

  return timeLeft;
};

function getRemainingTime() {
  const countDown = new Date(`2021/8/12`);
  const diff = countDown - new Date();
  if (diff <= 0) return { seconds: 0, minutes: 0, hours: 0, days: 0 };

  let seconds = Math.floor((diff / 1000) % 60);
  let minutes = Math.floor((diff / 1000 / 60) % 60);
  let hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));

  return { seconds, minutes, hours, days };
}
