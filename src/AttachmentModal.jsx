import React, { useState } from 'react';

const AttachmentModal = ({ isOpen, onClose }) => {
  const [attachments, setAttachments] = useState([]);

  const handleFileChange = (e) => {
    const files = e.target.files;
    const newAttachments = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      newAttachments.push({
        name: file.name,
        extension: file.name.split('.').pop(),
      });
    }

    setAttachments(newAttachments);
  };

  return (
    <div className={`modal ${isOpen ? 'visible' : 'hidden'}`}>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-container bg-white p-4 rounded shadow-md">
        <h2 className="text-lg font-bold mb-2">Upload Attachments</h2>
        <input type="file" onChange={handleFileChange} multiple />
        <ul className="mt-3">
          {attachments.map((attachment, index) => (
            <li key={index}>
              {attachment.name} ({attachment.extension})
            </li>
          ))}
        </ul>
        <button onClick={onClose} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Close
        </button>
      </div>
    </div>
  );
};

export default AttachmentModal;
