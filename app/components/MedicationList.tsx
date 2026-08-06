const medicationData = [
  {
    id: 0,
    name: 'Melatonin',
    description: 'Helps promote sleep',
  },
  {
    id: 1,
    name: 'Ibuprofen',
    description: 'Relieves pain, reduces inflammation and fever',
  },
  {
    id: 2,
    name: 'Acetaminophen',
    description: 'Relieves pain and reduces fever',
  },
  {
    id: 3,
    name: 'Aspirin',
    description: 'Relieves pain, reduces fever, and thins blood',
  },
  {
    id: 4,
    name: 'Loratadine',
    description: 'Relieves allergy symptoms like sneezing and itching',
  },
  {
    id: 5,
    name: 'Diphenhydramine',
    description: 'Antihistamine used for allergies and as a sleep aid',
  },
  {
    id: 6,
    name: 'Omeprazole',
    description: 'Reduces stomach acid to treat heartburn and reflux',
  },
  {
    id: 7,
    name: 'Metformin',
    description: 'Helps control blood sugar levels in type 2 diabetes',
  },
  {
    id: 8,
    name: 'Lisinopril',
    description: 'Lowers blood pressure and treats heart failure',
  },
  {
    id: 9,
    name: 'Atorvastatin',
    description: 'Lowers cholesterol levels',
  },
  {
    id: 10,
    name: 'Amoxicillin',
    description: 'Antibiotic used to treat bacterial infections',
  },
];

export default function MedicationList() {
  const listContent = medicationData.map((item) => (
    <li
      key={item.id}
      className="flex flex-col gap-1 px-6 py-4 border-b border-slate-100 last:border-b-0"
    >
      <h2 className="text-base font-semibold text-slate-800">{item.name}</h2>
      <p className="text-sm text-slate-500">{item.description}</p>
    </li>
  ));
  return (
    <section className="bg-white rounded-2xl shadow-md max-w-md mx-auto overflow-hidden">
      <h2 className="text-lg font-semibold text-slate-800 px-6 pt-5 pb-3 border-b border-slate-100">
        Medication List:
      </h2>
      <ul className="max-h-96 overflow-y-auto">{listContent}</ul>
    </section>
  );
}
