//asset imports
import Image from 'next/image';

// component props types
interface BadgeInfoProps {
  name: string;
  profileImage: any;
  imageSize?: number;
  positionTitle: string;
}

/*
  DoctorBadge will recieve props:
    - name
    - profileImage
    - imageSize
    - positionTitle
*/
export default function DoctorBadge({
  name,
  profileImage,
  imageSize = 150,
  positionTitle,
}: BadgeInfoProps) {
  return (
    <div className="flex flex-row items-center gap-6 bg-white rounded-2xl shadow-md px-6 py-5 max-w-md mx-auto">
      <Image
        src={profileImage}
        alt={name + ' profile image'}
        width={imageSize}
        className="rounded-3xl object-cover border-4 border-blue-50 shrink-0"
      />
      <div className="flex flex-col">
        <h1 className="text-xl font-semibold text-slate-800">Dr. {name}</h1>
        <p className="text-blue-600 font-medium">
          {positionTitle} <br /> {staticBadgeInfo.hospitalName}
        </p>
        <p className="text-slate-500 text-sm">
          {staticBadgeInfo.hospitalAddress}
        </p>
      </div>
    </div>
  );
}

const staticBadgeInfo = {
  hospitalAddress: '111 Colchester Ave',
  hospitalName: "People's Hospital",
};
