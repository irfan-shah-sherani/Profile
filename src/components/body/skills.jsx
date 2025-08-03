export default function ProSkills() {
  return (
    <div className="w-60">
      <div className="flex text-2xl font-bold text-blue-800 mb-4 ml-4">Skills</div>
      <div className="flex flex-row">
        <div className="w-1 bg-blue-800 mr-6"></div>
        <div className="flex flex-col gap-4 w-full">
          
          <div>
            <div className="flex justify-between">
              <span className="font-semibold text-gray-700">Frontend</span>
              <span className="text-sm text-gray-500">90%</span>
            </div>
            <div className="w-full bg-gray-200 h-2.5">
              <div className="bg-blue-600 h-2.5" style={{ width: "90%" }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between">
              <span className="font-semibold text-gray-700">Backend</span>
              <span className="text-sm text-gray-500">80%</span>
            </div>
            <div className="w-full bg-gray-200  h-2.5">
              <div className="bg-blue-600 h-2.5 " style={{ width: "80%" }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between">
              <span className="font-semibold text-gray-700">Git&Github</span>
              <span className="text-sm text-gray-500">70%</span>
            </div>
            <div className="w-full bg-gray-200  h-2.5">
              <div className="bg-blue-600 h-2.5 " style={{ width: "70%" }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between">
              <span className="font-semibold text-gray-700">SQL&NoSQL</span>
              <span className="text-sm text-gray-500">85%</span>
            </div>
            <div className="w-full bg-gray-200  h-2.5">
              <div className="bg-blue-600 h-2.5 " style={{ width: "85%" }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between">
              <span className="font-semibold text-gray-700">React</span>
              <span className="text-sm text-gray-500">75%</span>
            </div>
            <div className="w-full bg-gray-200  h-2.5">
              <div className="bg-blue-600 h-2.5 " style={{ width: "75%" }}></div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

