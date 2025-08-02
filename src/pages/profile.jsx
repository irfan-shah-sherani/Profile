import Head from '../components/head.jsx';
import Social from '../components/body/social.jsx';
import Language from '../components/body/language.jsx';
import Experience from '../components/body/experience.jsx';

export default function Profile() {
  return (
    <div className="bg-gray-100 min-h-screen p-10">
        <div className="ml-50"> 
            <Head />
           
        </div>
        <div className="ml-50 flex flex-row gap-60 mt-10">
           <div>
                <Social />
                <div className='w-full h-1 bg-blue-800 my-10 mr-10'></div>
                <Language />
           </div>
           <div>
               <Experience />
           </div>
        </div>

    </div>
  );
}