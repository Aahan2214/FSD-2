import React, { useState } from "react";
import NotificationButton from "../components/NotificationButton";

function HomePage() {
  const [count, setCount] = useState(0);

  const addNotification = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Total Notifications: {count}</h1>
      <NotificationButton addNotification={addNotification} />
    </div>
  );
}

export default HomePage;