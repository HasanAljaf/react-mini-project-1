import { useState } from 'react';

export default function Greeting() {
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
