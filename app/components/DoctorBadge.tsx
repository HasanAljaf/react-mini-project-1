import Image from 'next/image';
import profileImg from '../assets/profilePhoto.png';

export default function DoctorBadge() {
  return (
    <div className="badgeContainer flex flex-row items-center gap-5 bg-white rounded-2xl shadow-md px-6 py-5 max-w-md mx-auto">
      <Image
        src={badgeInfo.photo}
        alt="Profile Photo"
        width={150}
        height={150}
        className="rounded-3xl object-cover border-4 border-blue-50 shrink-0"
      />
      <div className="flex flex-col">
        <h1 className="text-xl font-semibold text-slate-800">
          {badgeInfo.name}
        </h1>
        <p className="text-blue-600 font-medium">
          {badgeInfo.title} <br /> {badgeInfo.company}
        </p>
        <p className="text-slate-500 text-sm">{badgeInfo.location}</p>
      </div>
    </div>
  );
}

const badgeInfo = {
  name: 'Dr. John Green',
  location: '111 Colchester Ave',
  company: "People's Hospital",
  title: 'Medical Assistant',
  photo: profileImg,
};
