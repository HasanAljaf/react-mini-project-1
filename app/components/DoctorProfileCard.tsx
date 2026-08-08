import Image from 'next/image';

// component props types
interface DoctorInfoProps {
  name: string;
  imageId: any;
  credentials: string;
  department: string;
  email: string;
  phoneNumber: string;
  imageSize?: number;
}

/*Doctor Info -> child component
    Takes in props from parent component;
        - name
        - imageId
        - credentials
        - department
        - email
        - phoneNumber
*/
export default function DoctorProfileCard({
  name,
  imageId,
  credentials,
  department,
  email,
  phoneNumber,
  imageSize = 150,
}: DoctorInfoProps) {
  return (
    <section className="DoctorInfoContainer flex flex-row items-center gap-5 bg-white rounded-2xl shadow-md px-6 py-5 max-w-md mx-auto">
      <div className="imageWrapper shrink-0">
        <Image
          src={imageId}
          alt={name}
          width={imageSize}
          height={imageSize}
          className="rounded-full object-cover border-4 border-blue-50"
        />
      </div>
      <div className="infoWrapper flex flex-col gap-1">
        <h1 className="fullName text-xl font-semibold text-slate-800">
          {name}
        </h1>
        <p className="credential text-blue-600 font-medium">{credentials}</p>
        <p className="department text-slate-500 text-sm">{department}</p>
        <p className="email text-slate-500 text-sm">{email}</p>
        <p className="phoneNumber text-slate-500 text-sm">{phoneNumber}</p>
      </div>
    </section>
  );
}
