import { Modal, Input, message } from "antd";
import React, { useState } from "react";

export default function AppraisalConfirm({
  action,
  object,
  open,
  setOpen,
  getConfirm,
}: {
  action?: string;
  object: any | any[];
  open: boolean;
  setOpen: Function;
  getConfirm: Function;
}) {
  const [note, setNote] = useState("");

  const handleConfirm = () => {
    let data: any = {
      action: action,
      object: object,
      note: note,
    };

    getConfirm(data);
    setOpen("");
    setNote("");
  };

  return (
    <Modal
      title={
        <p className="font-bold text-lg">CONFIRM TO {action?.toUpperCase()}</p>
      }
      open={open}
      footer={null}
      onCancel={(e) => {
        e.stopPropagation();
        setOpen("");
        setNote("");
      }}
      centered
    >
      <p className="text-gray-700 text-md italic">
        Are you sure you want to do this?
      </p>
      {action === "reject" && (
        <div className="flex flex-col items-start gap-2 mt-4">
          <p>
            Reject reason: <span className="text-red-600">*</span>
          </p>
          <Input.TextArea
            placeholder="Enter reject reason"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="font-montserrat"
          />
        </div>
      )}
      <div className="w-full flex items-center justify-end gap-8 px-2 pt-8">
        <button
          onClick={() => {
            setOpen(false);
            setNote("");
          }}
          className="text-xs hover:underline"
        >
          CANCEL
        </button>
        <button
          disabled={action === "reject" && note.length === 0}
          onClick={handleConfirm}
          className={`px-8 py-2 rounded-xl ${
            action === "approve"
              ? "bg-green-600 hover:bg-green-800"
              : "bg-red-600 hover:bg-red-800"
          } duration-200 text-white font-semibold text-nowrap disabled:bg-gray-300 disabled:cursor-not-allowed`}
        >
          CONFIRM
        </button>
      </div>
    </Modal>
  );
}
