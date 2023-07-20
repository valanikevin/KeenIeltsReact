import { useState } from "react";
import NotificationContext from "./NotificationContext";

const NotificationState = ({ children }) => {
  const [notification, setNotification] = useState(null);
  return (
    <NotificationContext.Provider value={[notification, setNotification]}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationState;
