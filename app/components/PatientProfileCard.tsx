// component props types
interface PatientProfileProps {
  name: string;
  dob: string;
  bloodType: string;
  allergies: string;
}

/*
  PatientProfileCard recieves props:
    - name
    - age
    - bloodType
    - allergies
*/
export default function PatientProfileCard({
  name,
  dob,
  bloodType,
  allergies,
}: PatientProfileProps) {
  return (
    <section className="flex flex-col gap-1 bg-white rounded-2xl shadow-md px-6 py-5 max-w-md mx-auto">
      <h1 className="text-xl font-semibold text-slate-800">{name}</h1>
      <p className="text-slate-500 text-sm">Date of Birth: {dob}</p>
      <p className="text-slate-500 text-sm">Blood Type: {bloodType}</p>
      <p className="text-slate-500 text-sm">Allergies: {allergies}</p>
    </section>
  );
}
