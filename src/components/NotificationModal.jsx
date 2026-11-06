// ============================================================
// NotificationModal.jsx
// Displays clean modal dialogues for Exporting & Sharing Rig Configurations
// Props: isOpen (boolean), onClose (function), title (string), content (string)
// ============================================================

function NotificationModal({ isOpen, onClose, title, content, onNotify }) {
  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    if (onNotify) {
      onNotify("Configuration copied to clipboard.");
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-wrap">
            <span className="modal-tag">[MANIFEST]</span>
            <h3 className="modal-title">{title}</h3>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="modal-body">
          <textarea
            className="modal-textarea"
            readOnly
            value={content}
            rows={10}
          />
        </div>

        <div className="modal-footer">
          <button className="modal-copy-btn" onClick={handleCopy}>
            Copy Manifest
          </button>
          <button className="modal-done-btn" onClick={onClose}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotificationModal;
