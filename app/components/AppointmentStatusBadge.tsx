// component props types
interface StatusBadgeProps {
  apptStatus?: string;
  /*
  possible values:
  - upcoming
  - completed
  - cancelled
  - undefined (error handling)
  */
}

export default function ApptStatusBadge({ apptStatus }: StatusBadgeProps) {
  let statusMessage;
  let statusStyles = 'bg-slate-100 text-slate-600';

  if (apptStatus === undefined) {
    statusMessage = 'You have no appointments.';
  } else if (apptStatus === 'upcoming') {
    statusMessage = 'You have an upcoming appointment.';
    statusStyles = 'bg-blue-50 text-blue-600';
  } else if (apptStatus === 'completed') {
    statusMessage = 'Appointment completed.';
    statusStyles = 'bg-green-50 text-green-600';
  } else if (apptStatus === 'cancelled') {
    statusMessage = 'Appointment cancelled.';
    statusStyles = 'bg-red-50 text-red-600';
  } else {
    statusMessage = 'Invalid appointment status!';
    statusStyles = 'bg-amber-50 text-amber-600';
  }

  return (
    <section
      className={`rounded-2xl shadow-md px-6 py-4 max-w-md mx-auto ${statusStyles}`}
    >
      <h1 className="text-base font-medium text-center">{statusMessage}</h1>
    </section>
  );
}
