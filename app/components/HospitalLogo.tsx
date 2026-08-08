import Image from 'next/image';
import logoPic from '../assets/logo.png';

const logo = {
  name: "People's Hospital logo",
  imagePath: logoPic,
  imageSize: 95,
};
export default function HospitalLogo() {
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
