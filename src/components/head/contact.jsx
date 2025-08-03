import { Smartphone, Mail, Linkedin,Github, Twitch, Twitter, Instagram } from "lucide-react";
import Photo from '../../assets/IMG_953222.JPG';

export default function Contact() {
  return (
    <div className=" flex flex-col items-center gap-6 px-4">
      <div className="w-32 h-32 md:w-80 md:h-80 p-2 rounded-full border-4 border-blue-500 overflow-hidden">
        <img src={Photo} alt="Profile" className="w-full h-full object-cover rounded-full" />
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Contact</h2>
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-3">
            <Smartphone size={20} className="text-blue-500" />
            <span className="text-sm text-gray-700">+92 327-0013606</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail size={20} className="text-blue-500" />
            <a href="mailto:mrirfanshahsherani@gmail.com" className="text-sm text-gray-700">
              mrirfanshahsherani@gmail.com
            </a>
          </div>
        </div>

        <div className="h-1 bg-blue-800 my-4 w-full"></div>

        <div className="flex justify-center gap-5">
          <a href="#" target="_blank"><Github className="text-gray-400 hover:text-black" /></a>
          <a href="#" target="_blank"><Linkedin className="text-gray-400 hover:text-[#0077b5]" /></a>
          <a href="#" target="_blank"><Twitter className="text-gray-400 hover:text-[#1da1f2]" /></a>
          <a href="#" target="_blank"><Instagram className="text-gray-400 hover:text-[#e1306c]" /></a>
        </div>
      </div>
    </div>
  );
}
