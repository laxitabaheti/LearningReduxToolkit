import { useSelector } from "react-redux";

const Notification = (props) => {
  const notification = useSelector((state) => state.Ui.notification);
  return (
    <div>
      <div>{notification.title}</div>
      <div> {notification.message}</div>
      <div>{notification.state}</div>
    </div>
  );
};
export default Notification;
