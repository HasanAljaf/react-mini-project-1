'use client';

import { useState } from 'react';

// Prop Types
type Appointment = {
  id: string;
  name: string;
  doctor: string;
  date: string;
  time: string;
  reason: string;
};

export default function AppointmentManager() {
  // Appointment List State
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  // Input States
  const [fullName, setFullName] = useState('');
  const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [reason, setReason] = useState('');

  const [editingId, setEditingId] = useState<string | null>(null);

  // Event Handlers
  function handleAddAppointment() {
    // a => previous appointments (naming standard practice)
    setAppointments((a) => [
      ...a,
      {
        id: crypto.randomUUID(),
        name: fullName,
        doctor: doctor,
        date: date,
        time: time,
        reason: reason,
      },
    ]);
    setFullName('');
    setDoctor('');
    setDate('');
    setTime('');
    setReason('');
  }

  function handleDeleteAppointment(apptId: string) {
    setAppointments((current) => current.filter((a) => a.id !== apptId));
  }

  function handleEditAppointment(apptId: string) {
    const apptToEdit = appointments.find((a) => a.id === apptId);

    if (!apptToEdit) {
      return;
    }

    setEditingId(apptToEdit.id);

    setFullName(apptToEdit.name);
    setDoctor(apptToEdit.doctor);
    setDate(apptToEdit.date);
    setTime(apptToEdit.time);
    setReason(apptToEdit.reason);
  }

  function handleSaveAppointment(apptId: string) {
    const apptToSave = appointments.find((a) => a.id === apptId);

    if (!apptToSave) {
      alert('Error: no appointment found!');
    } else {
      setAppointments((current) =>
        current.map((a) =>
          a.id === apptId
            ? {
                ...a,
                name: fullName,
                doctor: doctor,
                date: date,
                time: time,
                reason: reason,
              }
            : a
        )
      );
    }

    setFullName('');
    setDoctor('');
    setDate('');
    setTime('');
    setReason('');
    setEditingId(null);
  }

  return (
    <section className="flex flex-col gap-6 max-w-3xl mx-auto">
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        <table className="w-full text-sm text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-100">
              <th className="px-4 py-3 font-semibold text-slate-800">
                Patient
              </th>
              <th className="px-4 py-3 font-semibold text-slate-800">Doctor</th>
              <th className="px-4 py-3 font-semibold text-slate-800">Date</th>
              <th className="px-4 py-3 font-semibold text-slate-800">Time</th>
              <th className="px-4 py-3 font-semibold text-slate-800">
                Reason for visit
              </th>
              <th className="px-4 py-3"></th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr
                key={appointment.id}
                className="border-b border-slate-100 last:border-b-0"
              >
                <td className="px-4 py-3 text-slate-700">{appointment.name}</td>
                <td className="px-4 py-3 text-blue-600 font-medium">
                  {appointment.doctor}
                </td>
                <td className="px-4 py-3 text-slate-500">{appointment.date}</td>
                <td className="px-4 py-3 text-slate-500">{appointment.time}</td>
                <td className="px-4 py-3 text-slate-500">
                  {appointment.reason}
                </td>
                <td className="px-2 py-3">
                  <button
                    onClick={(e) => handleEditAppointment(appointment.id)}
                    className="rounded-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 transition-colors text-white font-medium text-xs px-4 py-1.5"
                  >
                    Edit
                  </button>
                </td>
                <td className="px-2 py-3">
                  <button
                    onClick={(e) => handleDeleteAppointment(appointment.id)}
                    className="rounded-full bg-red-50 hover:bg-red-100 active:bg-red-200 transition-colors text-red-600 font-medium text-xs px-4 py-1.5"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <form className="flex flex-col gap-3 bg-white rounded-2xl shadow-md p-6 max-w-md">
        <label
          htmlFor="Full name"
          className="flex flex-col gap-1 text-sm text-slate-700"
        >
          Full name
          <input
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
            type="text"
            required
            className="border border-slate-200 rounded-lg p-2 text-sm text-slate-700 w-full focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
          />
        </label>
        <label
          htmlFor="Doctor"
          className="flex flex-col gap-1 text-sm text-slate-700"
        >
          Doctor{' '}
          <input
            onChange={(e) => setDoctor(e.target.value)}
            value={doctor}
            type="text"
            required
            className="border border-slate-200 rounded-lg p-2 text-sm text-slate-700 w-full focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
          />
        </label>
        <label
          htmlFor="Date"
          className="flex flex-col gap-1 text-sm text-slate-700"
        >
          Date{' '}
          <input
            onChange={(e) => setDate(e.target.value)}
            value={date}
            type="date"
            required
            className="border border-slate-200 rounded-lg p-2 text-sm text-slate-700 w-full focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
          />
        </label>
        <label
          htmlFor="Time"
          className="flex flex-col gap-1 text-sm text-slate-700"
        >
          Time{' '}
          <input
            onChange={(e) => setTime(e.target.value)}
            value={time}
            type="time"
            required
            className="border border-slate-200 rounded-lg p-2 text-sm text-slate-700 w-full focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
          />
        </label>
        <label
          htmlFor="Reason"
          className="flex flex-col gap-1 text-sm text-slate-700"
        >
          Reason for visit{' '}
          <textarea
            onChange={(e) => setReason(e.target.value)}
            value={reason}
            name="Reason"
            required
            className="border border-slate-200 rounded-lg p-2 text-sm text-slate-700 w-full focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
          ></textarea>
        </label>
        <input
          type="submit"
          value={editingId === null ? 'Add Appointment' : 'Save'}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            editingId === null
              ? handleAddAppointment()
              : handleSaveAppointment(editingId);
          }}
          className="rounded-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 transition-colors text-white font-medium px-6 py-2 self-start w-fit cursor-pointer"
        />
      </form>
    </section>
  );
}
