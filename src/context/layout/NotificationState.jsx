import { useState } from "react";
import NotificationContext from "./NotificationContext";

const NotificationState = ({ children }) => {
  let notificationState = {
    title: "",
    message: "",
    color: "",
  };
  const [notification, setNotification] = useState(notificationState);
  return (
    <NotificationContext.Provider value={[notification, setNotification]}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationState;
