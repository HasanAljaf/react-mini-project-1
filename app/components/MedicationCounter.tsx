import { useState } from 'react';

interface PropTypes {
  name: String;
}
export default function MedicationCounter({ name }: PropTypes) {
  const [count, setCount] = useState(0);

  function handleAddCount() {
    setCount(count + 1);
  }

  function handleSubtractCount() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <section className="flex flex-col items-center gap-3 bg-white rounded-2xl shadow-md px-6 py-5 max-w-xs mx-auto">
      <h2 className="text-lg font-semibold text-slate-800">{name}</h2>
      <p className="text-sm text-slate-500">
        Doses taken: <b className="test-slate-700">{count}</b>
      </p>
      <div className="flex gap-3">
        <button
          onClick={handleSubtractCount}
          className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 active:bg-slate-300 transition-colors text-slate-700 font-semibold text-lg"
        >
          -
        </button>
        <button
          onClick={handleAddCount}
          className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 transition-colors text-white font-semibold text-lg"
        >
          +
        </button>
      </div>
    </section>
  );
}
