'use client';

// asset imports
import profilePic from './assets/profilePhoto.png';

//component imports
import HospitalLogo from './components/HospitalLogo';
import Welcome from './components/WelcomeBanner';
import Greeting from './components/Greeting';
import AppointmentManager from './components/AppointmentManager';

export default function MyApp() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center gap-6 px-4 py-12">
      <HospitalLogo />
      <Welcome />
      <Greeting />
      <AppointmentManager />
    </div>
  );
}

{
  /* COMPONENTS
      copy and paste a component to render. Don't forget to import!
      
      <HospitalInfoCard />
      <DoctorProfileCard
        name="Micheal Smith"
        imageId={profilePic}
        credentials="PhD"
        department="Oncology"
        email="michealsmith@peopleshospital.com"
        phoneNumber="(802) 713-4157"
      />
      <DoctorBadge
        name="Joe Anderson"
        profileImage={profilePic}
        positionTitle="Neurosurgeon"
      />
      <PatientProfileCard
        name="Harvey Spector"
        dob="09/29/1985"
        bloodType="AB"
        allergies="wheat, gluten"
      />
      <AppStatusBadge apptStatus="upcoming" />
      <PatientCheckIn />
      <MedicationList />
      <MedicationCounter name="Molly" />
      <MedicationCounter name="Oxy" />
      <PatientVisitCounter name="Hasan Aljaf" />
      <PatientProfileEditor />
      <AppointmentManager />
  */
}
