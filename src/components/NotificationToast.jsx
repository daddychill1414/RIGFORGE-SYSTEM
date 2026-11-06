// ============================================================
// NotificationToast.jsx
// Lightweight, non-intrusive notification toast
// Props: message (string), isVisible (boolean), type ('info' | 'success')
// ============================================================

function NotificationToast({ message, isVisible, type = "info" }) {
  if (!isVisible) return null;

  return (
    <div className={`notification-toast ${type}`}>
      <span className="toast-tag">
        {type === "success" ? "[OK]" : "[INFO]"}
      </span>
      <span className="toast-message">{message}</span>
    </div>
  );
}

export default NotificationToast;
