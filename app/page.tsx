'use client';
import { useState } from 'react';
import Image from 'next/image';

//asset imports
import logoPic from './assets/logo.png';
import profilePic from './assets/profilePhoto.png';

//component imports
import DoctorBadge from './components/DoctorBadge';
import HospitalInfoCard from './components/HospitalInfoCard';
import PatientProfileCard from './components/PatientProfileCard';
import DoctorProfileCard from './components/DoctorProfileCard';
import { profile } from 'console';

export default function MyApp() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center gap-6 px-4 py-12">
      <Logo />
      <Welcome />
      <Greeting />
      <DoctorBadge
        name="John Green"
        profileImage={profilePic}
        positionTitle="Medical Assistant"
      />
      <HospitalInfoCard />
      <PatientProfileCard
        name="Mason Black"
        dob="05/15/1979"
        bloodType="AB"
        allergies="soy, milk, eggs"
      />
      <PatientProfileCard
        name="Jason Hughes"
        dob="10/7/1996"
        bloodType="B"
        allergies="peanuts, wheat, gluten"
      />
      <DoctorProfileCard
        name="Micheal Harris"
        imageId={profilePic}
        credentials="PhD"
        department="Oncology"
        email="michealharris@peopleshospital.com"
        phoneNumber="802-452-3658"
      />
      <DoctorProfileCard
        name="James Tony"
        imageId={profilePic}
        credentials="MD"
        department="Dermatology"
        email="jamestony@peopleshospital.com"
        phoneNumber="802-485-3327"
      />
    </div>
  );
}

function Welcome() {
  return (
    <h1 className="text-3xl font-semibold text-slate-800 text-center">
      Welcome to People&apos;s Hospital.
    </h1>
  );
}

const logo = {
  name: "People's Hospital logo",
  imagePath: logoPic,
  imageSize: 95,
};
function Logo() {
  return (
    <div className="rounded-4xl shadow-lg p-2 bg-white">
      <Image
        src={logo.imagePath}
        alt={logo.name}
        width={logo.imageSize}
        height={logo.imageSize}
        className="rounded-4xl"
      />
    </div>
  );
}

function Greeting() {
  const [status, setStatus] = useState(true);
  const greeting = status
    ? 'We will be up and running soon!'
    : 'Tell your friends and family about us!';

  function handleClick() {
    setStatus(!status);
  }

  return (
    <div className="flex flex-col items-center gap-4 bg-white rounded-2xl shadow-sm px-8 py-6 max-w-md text-center">
      <p className="text-lg text-slate-600">{greeting}</p>
      <button
        onClick={handleClick}
        className="rounded-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 transition-colors text-white font-medium px-6 py-2"
      >
        Learn More
      </button>
    </div>
  );
}
