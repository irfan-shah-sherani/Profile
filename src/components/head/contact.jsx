import { Smartphone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div>
      <div className="w-full max-w-md ">
        <div className=" flex items-center justify-left text-4xl text-left font-bold text-blue-800 mb-4 ml-12">
          Contact
        </div>
        <div className="flex flex-row">
           <div className='w-1 h-auto bg-blue-800 mr-10'></div>
          <div className="flex flex-col gap-3">
            <div className="flex justify-left items-center gap-">
              <span>
                <Smartphone size={40} className="text-blue-500" />
              </span>
              <div>
                <p>Phone</p>
                <p>+1234567890</p>
              </div>
            </div>
            <div className="flex justify-left items-center gap-2">
              <span>
                <Mail
                  size={40}
                  className="inline-block mr-1 text-blue-500"
                />
              </span>
              <div>
                <p>Email</p>
                <p>
                  <a href="mailto:example@example.com">
                    example@example.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
