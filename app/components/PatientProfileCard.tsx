export default function PatientProfileCard() {
  return (
    <section className="flex flex-col gap-1 bg-white rounded-2xl shadow-md px-6 py-5 max-w-md mx-auto">
      <h1 className="text-xl font-semibold text-slate-800">
        {patientInfo.name}
      </h1>
      <p className="text-slate-500 text-sm">Age: {patientInfo.age}</p>
      <p className="text-slate-500 text-sm">
        Blood Type: {patientInfo.bloodType}
      </p>
      <p className="text-slate-500 text-sm">
        Allergies: {patientInfo.allergies}
      </p>
    </section>
  );
}

const patientInfo = {
  name: 'Mason Black',
  age: 84,
  bloodType: 'AB',
  allergies: 'peanuts, milk, eggs',
};
