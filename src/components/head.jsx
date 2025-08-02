import Img from "./head/img.jsx";
import Name from "./head/Name.jsx";
import Contact from "./head/contact.jsx";
import About from "./head/about.jsx";

export default function head() {
  return (
    <div className="bg-gray-100">
        <div className="absolute top-0 left-0  h-10 w-200 bg-blue-500"></div>
        <div className="absolute top-0 right-0  h-230 w-10 bg-blue-500"></div>
        {/* <div className="ml-50"> */}
            <div className="flex flex-row items-center gap-20 py-20">
                <div>
                    <Img />
                </div>
                <div className="w-full">
                    <Name/>
                </div>
            </div>
            <div className="flex flex-row items-start gap-20">
                <div>
                    <Contact />
                </div>
                <div className="pl-25">
                    <About />
                </div>
            </div>
            <div className="w-full">
                <div className="h-1 bg-blue-500 my-10 mr-20"></div>
            </div>

        {/* </div> */}
    </div>
  );
}