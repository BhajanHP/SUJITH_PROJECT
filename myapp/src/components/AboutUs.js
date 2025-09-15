import React, { useEffect, useState } from "react";
import "../App.css";

function Counter({ end, suffix }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <h2>
      {count}
      {suffix}
    </h2>
  );
}

function AboutUs() {
  return (
    <div className="about-section">
      <div className="about-stats">
        <div>
          <Counter end={15} suffix="+" />
          <p>HAPPY CLIENTS</p>
        </div>
        <div>
          <Counter end={28} suffix="+" />
          <p>PROJECTS</p>
        </div>
        <div>
          <Counter end={5} suffix="+" />
          <p>YEARS EXPERIENCE</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
