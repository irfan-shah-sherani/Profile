export default function Language() {
    return (
        <div>
            <div className="w-full ">
                <div className=" flex  text-2xl text-left font-bold text-blue-800 mb-4 ml-4">
                    Language
                </div>
                <div className="flex flex-row">
                    <div className='w-1 h-auto bg-blue-800 mr-10'></div>
                    <div className="flex flex-col gap-3">
                        <div className="flex justify-left items-center gap-5">
                            <div>
                                <p className="font-bold text-blue-600">English</p>
                                <p className="font-normal text-gray-600">Native</p>
                            </div>
                        </div>
                        <div className="flex justify-left items-center gap-5">
                           
                            <div>
                                <p className="font-bold text-blue-600">Urdu</p>
                                <p className="font-normal text-gray-600">Native</p>
                            </div>
                        </div>
                        <div className="flex justify-left items-center gap-5">
                            
                            <div>
                                <p className="font-bold text-blue-600">Pashto</p>
                                <p className="font-normal text-gray-600">Native</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
