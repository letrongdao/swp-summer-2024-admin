import { Modal, Input, DatePicker, TimePicker, message } from "antd";
import React, { useState } from "react";
import moment from "moment";
import dayjs from "dayjs";

export default function AppraisalConfirm({
  action,
  object,
  open,
  setOpen,
  getConfirm,
  onClose,
}: {
  action?: string;
  object: any | any[];
  open: boolean;
  setOpen: Function;
  getConfirm: Function;
  onClose: boolean;
}): React.JSX.Element {
  const [appointmentDate, setAppointmentDate] = useState<moment.Moment | null>(
    null
  );
  const [appointmentTime, setAppointmentTime] = useState<moment.Moment | null>(
    null
  );
  const [note, setNote] = useState("");
  const appointmentMoment = moment();
  const appointmentDayjs = converDayjs(appointmentMoment);
  console.log(appointmentDayjs);
  
  const handleConfirm = () => {
    let data: any = {
      action: action,
      object: object,
    };

    if (action === "schedule appointment") {
      if (
        appointmentDate &&
        appointmentTime &&
        moment.isMoment(appointmentTime)
      ) {
        data.appointmentDate = appointmentDate.format("YYYY-MM-DD");
        data.appointmentTime = appointmentTime.format("HH:mm");
        data.note = `Appointment scheduled for ${data.appointmentDate} at ${data.appointmentTime}`;
      } else {
        message.error("Please select a valid date and time");
        return;
      }
    }

    if (action === "reject" && note) {
      data.note = note;
    }

    getConfirm(data);
    setOpen(false);
    setAppointmentDate(null);
    setAppointmentTime(null);
    setNote("");
  };

  const status = action?.match("schedule appointment");

  function converDayjs(
    appointmentTime: moment.Moment
  ): import("dayjs").Dayjs | null | undefined {
    if (!appointmentTime) return null;
    try {
      return dayjs(appointmentTime.toISOString());
    } catch (error) {
      console.error("Error converting to Dayjs:", error);
      return undefined;
    }
  }

  return (
    <Modal
      title={
        <p className="font-bold text-lg">CONFIRM TO {action?.toUpperCase()}</p>
      }
      open={open}
      footer={null}
      onCancel={(e) => {
        e.stopPropagation();
        setOpen(false);
        setAppointmentDate(null);
        setAppointmentTime(null);
        setNote("");
      }}
      centered
    >
      <p className="text-gray-700 text-md italic">
        Are you sure you want to do this?
      </p>
      {status ? (
        <div className="mt-4">
          <DatePicker
            value={appointmentDate}
            onChange={(date) => setAppointmentDate(date)}
            className="w-full mb-2"
          />

          <TimePicker
            value={appointmentTime ? converDayjs(appointmentTime) : null}
            onChange={(time) => setAppointmentTime(moment(time.toDate()))}
            className="w-full"
            format="HH:mm"
          />
        </div>
      ) : (
        <Input.TextArea
          placeholder="Enter reject note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="mt-4"
        />
      )}
      <div className="w-full flex items-center justify-end gap-8 px-2 pt-8">
        <button
          onClick={() => {
            setOpen(false);
            setAppointmentDate(null);
            setAppointmentTime(null);
            setNote("");
          }}
          className="text-xs hover:underline"
        >
          CANCEL
        </button>
        <button
          onClick={handleConfirm}
          className={`px-8 py-2 rounded-xl ${
            status
              ? "bg-green-600 hover:bg-green-800"
              : "bg-red-600 hover:bg-red-800"
          } duration-200 text-white font-semibold text-nowrap`}
        >
          CONFIRM
        </button>
      </div>
    </Modal>
  );
}
