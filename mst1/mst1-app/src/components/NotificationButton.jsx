import React from "react";

function NotificationButton({ addNotification }) {
  return (
    <button onClick={addNotification}>
      Add Notification
    </button>
  );
}

export default NotificationButton;