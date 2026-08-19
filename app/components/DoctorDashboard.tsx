import { useState } from 'react';

// Prop Types
type PatientListProps = {
  patientsArray: Patient[];
  onSelectPatient: (patientId: number) => void;
};

type PatientDetailsProps = {
  displayPatient: Patient | null;
};

// Patient Property Types
type Patient = {
  id: number;
  name: string;
  age: number;
  bloodType: string;
  allergies: string[];
};

// Data -> Array of Patient Objects
const patientDataList = [
  {
    id: 0,
    name: 'Jane Doe',
    age: 23,
    bloodType: 'AB+',
    allergies: ['wheat', 'soy', 'gluten'],
  },
  {
    id: 1,
    name: 'Marcus Chen',
    age: 34,
    bloodType: 'O-',
    allergies: ['penicillin', 'peanuts'],
  },
  {
    id: 2,
    name: 'Aaliyah Patel',
    age: 29,
    bloodType: 'A+',
    allergies: ['latex'],
  },
  {
    id: 3,
    name: 'Carlos Gomez',
    age: 52,
    bloodType: 'B-',
    allergies: ['sulfa drugs', 'shellfish'],
  },
  {
    id: 4,
    name: 'Emily Watson',
    age: 41,
    bloodType: 'AB-',
    allergies: ['pollen', 'dairy', 'tree nuts'],
  },
];

// Dashboard -> Parent
export default function Dashboard() {
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

  function handlePatientSelect(patientId: number) {
    setSelectedPatient(patientDataList.find((p) => p.id === patientId) ?? null);
  }

  return (
    <section className="flex flex-col md:flex-row gap-6 max-w-3xl mx-auto">
      <PatientList
        patientsArray={patientDataList}
        onSelectPatient={handlePatientSelect}
      />
      <PatientDetails displayPatient={selectedPatient} />
    </section>
  );
}

// PatientList -> Child
function PatientList({ patientsArray, onSelectPatient }: PatientListProps) {
  return (
    <section className="bg-white rounded-2xl shadow-md overflow-hidden max-w-xs w-full p-4">
      <h1 className="text-xl font-semibold text-slate-800 px-4 pt-4 pb-2">
        Patient List
      </h1>
      {patientsArray.map((p) => (
        <div
          key={p.id}
          className="flex items-center justify-between gap-6 px-4 py-3 border-b border-slate-100 last:border-b-0"
        >
          <p className="grow text-base text-slate-700 truncate">{p.name}</p>
          <button
            onClick={() => onSelectPatient(p.id)}
            className="shrink-0 rounded-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 transition-colors text-white font-medium text-xs px-4 py-1.5"
          >
            View
          </button>
        </div>
      ))}
    </section>
  );
}

function PatientDetails({ displayPatient }: PatientDetailsProps) {
  return (
    <section className="bg-white rounded-2xl shadow-md p-6 flex-1">
      {displayPatient ? (
        <div className="flex flex-col gap-1">
          <h1 className="text-sm text-blue-600 font-medium">
            Patient {displayPatient.id + 1}
          </h1>
          <h2 className="text-xl font-semibold text-slate-800">
            {displayPatient.name}
          </h2>
          <p className="text-sm text-slate-500">Age: {displayPatient.age}</p>
          <p className="text-sm text-slate-500">
            Blood Type: {displayPatient.bloodType}
          </p>
          <div className="text-sm text-slate-500">
            Allergies:
            <ul className="list-disc list-inside">
              {displayPatient.allergies.map((a) => (
                <li key={crypto.randomUUID()}>{a}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div>
          <h1 className="text-base text-slate-400 text-center">
            No patients selected.
          </h1>
        </div>
      )}
    </section>
  );
}
