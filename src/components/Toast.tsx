interface ToastProps {
  message: string;
  type: "success" | "error";
}

const Toast: React.FC<ToastProps> = ({ message, type }) => {
  const bgColor = type === "success" ? "bg-green-500" : "bg-red-500";

  return (
    <div className={`${bgColor} fixed bottom-4 right-4 py-2 px-4 rounded-md text-white`}>
      {message}
    </div>
  );
};

export default Toast;