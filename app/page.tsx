'use client';
import { useState } from 'react';
import Image from 'next/image';

//asset imports
import logoPic from './assets/logo.png';

//component imports
import DoctorBadge from './components/DoctorBadge';

export default function MyApp() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center gap-6 px-4 py-12">
      <Logo />
      <Welcome />
      <Greeting />
      <DoctorBadge />
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
