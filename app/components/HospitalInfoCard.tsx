//asset imports
import Image from 'next/image';
import logoPic from '../assets/logo.png';

export default function HospitalInfoCard() {
  return (
    <div className="flex flex-row items-center justify-between gap-10 bg-white rounded-2xl shadow-md px-6 py-5 max-w-md mx-auto">
      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-semibold text-slate-800">
          People&apos;s Hospital
        </h1>
        <p className="text-slate-500 text-sm">111 Colchester Ave</p>
        <p className="text-slate-500 text-sm">802-123-4567</p>
      </div>
      <Image
        src={logoPic}
        alt="People's Hospital Logo"
        width={75}
        height={75}
        className="rounded-2xl border-4 border-blue-50 shrink-0"
      />
    </div>
  );
}
