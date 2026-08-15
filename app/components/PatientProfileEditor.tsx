import { useState } from 'react';

export default function PatientProfileEditor() {
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    age: '',
    bloodType: '',
    allergies: '',
  });

  function handleFirstName(e: any) {
    setProfile({
      ...profile,
      firstName: e.target.value,
    });
  }

  function handleLastName(e: any) {
    setProfile({
      ...profile,
      lastName: e.target.value,
    });
  }

  function handleAge(e: any) {
    setProfile({
      ...profile,
      age: e.target.value,
    });
  }

  function handleBloodType(e: any) {
    setProfile({
      ...profile,
      bloodType: e.target.value,
    });
  }

  function handleAllergies(e: any) {
    setProfile({
      ...profile,
      allergies: e.target.value,
    });
  }

  return (
    <section className="bg-white rounded-2xl shadow-md p-6 max-w-md mx-auto flex flex-col gap-2">
      <div className="flex flex-col gap-2">
        <div>
          <h2 className="text-xl font-semibold text-slate-800">
            {profile.firstName} {profile.lastName}
          </h2>
          <h4 className="text-sm text-blue-600 font-medium">patient profile</h4>
        </div>

        <h4 className="text-sm text-slate-500">Age:{profile.age}</h4>
        <h4 className="text-sm text-slate-500">
          Blood Type: {profile.bloodType}
        </h4>

        <div>
          <h4 className="text-sm text-slate-500">Allergies</h4>
          <p className="text-sm text-slate-500">{profile.allergies}</p>
        </div>

        <div className="flex flex-col gap-2 border-t border-slate-100 pt-4 mt-2">
          <h4 className="text-sm font-semibold text-slate-800">
            Update information
          </h4>

          <div className="flex flex-row gap-2 max-w-sm">
            <input
              type="text"
              placeholder="first name"
              value={profile.firstName}
              onChange={handleFirstName}
              className="border border-slate-200 rounded-lg p-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
            />
            <input
              type="text"
              placeholder="last name"
              value={profile.lastName}
              onChange={handleLastName}
              className="border border-slate-200 rounded-lg p-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 "
            />
          </div>

          <input
            type="text"
            placeholder="age"
            value={profile.age}
            onChange={handleAge}
            className="border border-slate-200 rounded-lg p-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
          />
          <input
            type="text"
            placeholder="blood type"
            value={profile.bloodType}
            onChange={handleBloodType}
            className="border border-slate-200 rounded-lg p-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
          />
          <h4 className="text-sm text-slate-500">Allergies</h4>
          <textarea
            name="allergies"
            value={profile.allergies}
            onChange={handleAllergies}
            placeholder="type here... "
            className="border border-slate-200 rounded-lg p-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
          ></textarea>
        </div>
      </div>
    </section>
  );
}
