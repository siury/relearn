import React, { useState } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString("US"));
  setInterval(() => setTime(new Date().toLocaleTimeString("US")), 1000);
  return <>{time}</>;
}
