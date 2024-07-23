import { Modal } from "antd";
import React from "react";

export default function NoteModal({
  open,
  setOpen,
  note,
}: {
  open: boolean;
  setOpen: Function;
  note: string;
}) {
  return (
    <Modal
      title={<p className="font-bold text-sky-900">REASON</p>}
      open={open}
      footer={null}
      onCancel={(e) => {
        e.stopPropagation();
        setOpen("");
      }}
      centered
    >
      <p className="text-gray-700 text-md">{note}</p>
      <div className="w-full flex items-center justify-end gap-8 px-2 pt-8">
        <button onClick={() => setOpen("")} className="text-xs hover:underline">
          Close
        </button>
      </div>
    </Modal>
  );
}
