import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Social() {
    return (
        <div>
            <div className="w-full ">
                <div className=" flex  text-2xl text-left font-bold text-blue-800 mb-4 ml-12">
                    Social
                </div>
                <div className="flex flex-row">
                    <div className='w-1 bg-blue-800 mr-6'></div>
                    <div className="flex flex-col gap-3">
                        <div className="flex justify-left items-center gap-5 ">
                            <span>
                                <Facebook size={20} className="text-blue-500" />
                            </span>
                            <div className="text-sm  text-gray-700">

                                <p><a href="https://www.facebook.com/yourprofile">yourprofile</a></p>
                            </div>
                        </div>
                        <div className="flex justify-left items-center gap-5">
                            <span>
                                <Twitter size={20} className="text-blue-500" />
                            </span>
                            <div className="text-sm  text-gray-700">
                                <p><a href="https://twitter.com/yourprofile">yourprofile</a></p>
                            </div>
                        </div>
                        <div className="flex justify-left items-center gap-5">
                            <span>
                                <Instagram size={20} className="text-blue-500 " />
                            </span>
                            <div className="text-sm  text-gray-700 flex flex-col">
                                <p><a href="https://www.instagram.com/yourprofile">yourprofile</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
