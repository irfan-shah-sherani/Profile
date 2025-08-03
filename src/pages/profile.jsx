import Language from '../components/body/language.jsx';
import Experience from '../components/body/experience.jsx';
import Education from '../components/body/education.jsx';
import ProSkills from '../components/body/skills.jsx';
import Contact from '../components/head/contact.jsx';
import Info from '../components/head/Info.jsx';
import Footer from '../components/footer/footer.jsx';

export default function Profile() {
  return (
    <div>
      <div className="relative  py-10 px-4">
        <div className="absolute top-0 left-0 h-5 md:h-8 w-40 md:w-150 bg-blue-500"></div>
        <div className="absolute top-0 right-0 h-90 md:h-110 w-8 bg-blue-500"></div>
        <div className="flex flex-col md:flex-row gap-10 justify-center items-center md:mt-5">
          <Contact />
          <Info />
        </div>
      </div>
      <div className='h-1 bg-blue-800'></div>
      <div className="flex flex-col items-center justify-center py-10 px-4 md:flex-row md:justify-around md:items-start md:px-20">
        <div className="flex flex-col gap-10 w-full max-w-md md:max-w-none md:w-1/2">
          <Experience />
          <Education />
        </div>
        <div className="flex flex-col gap-10 w-full max-w-md md:max-w-none md:w-1/2 mt-10 md:mt-0">
          <Language />
          <ProSkills />
        </div>
      </div>
      <Footer />
    </div>
  );
}