import { useState } from 'react';

export default function PatientCheckIn() {
  const [status, setStatus] = useState(false);

  function handleCheckIn() {
    setStatus(true);
    alert('Patient has checked in!');
  }
  function handleCheckOut() {
    setStatus(false);
    alert('Patient has checked out!');
  }

  let statusMessage = status
    ? 'Patient is checked in.'
    : 'Patient has not checked in.';

  return (
    <section className="flex flex-col items-center gap-4 bg-white rounded-2xl shadow-md px-6 py-6 max-w-md mx-auto">
      <p className="text-base font-medium text-slate-700">{statusMessage}</p>
      {status ? (
        <Button handleEvent={handleCheckOut}>check out</Button>
      ) : (
        <Button handleEvent={handleCheckIn}>check in</Button>
      )}
    </section>
  );
}

interface PropTypes {
  handleEvent: () => void;
  children: any;
}
function Button({ handleEvent, children }: PropTypes) {
  return (
    <button
      onClick={handleEvent}
      className="rounded-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 transition-colors text-white font-medium px-6 py-2"
    >
      {children}
    </button>
  );
}
