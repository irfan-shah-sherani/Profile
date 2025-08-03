// Education section
export default function Education() {
  return (
    <div>
      <div className="flex text-2xl font-bold text-blue-800 mb-4 ml-4">Education</div>
      <div className="flex flex-row">
        <div className="w-1 bg-blue-800 mr-6"></div>
        <div className="flex flex-col gap-4">
          <div>
            <div className="font-semibold text-blue-600">Master Degree</div>
            <div className="text-gray-700 text-sm">University Name 2020 | 2021</div>
            <div className="text-gray-500 text-xs">
              Short description about the degree and achievements.
            </div>
          </div>
          <div>
            <div className="font-semibold text-blue-600">Bachelor Degree</div>
            <div className="text-gray-700 text-sm">University Name 2016 | 2020</div>
            <div className="text-gray-500 text-xs">
              Short description about the degree and achievements.
            </div>
          </div>
          <div>
            <div className="font-semibold text-blue-600">Intermediate</div>
            <div className="text-gray-700 text-sm">College Name 2014 | 2016</div>
            <div className="text-gray-500 text-xs">
              Short description about the degree and achievements.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
