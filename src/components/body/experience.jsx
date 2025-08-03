// Education section
export default function Experience() {
  return (
    <div>
      <div className="flex text-2xl font-bold text-blue-800 mb-4 ml-4">Experience</div>
      <div className="flex flex-row">
        <div className="w-1 bg-blue-800 mr-6"></div>
        <div className="flex flex-col gap-4">
          <div>
            <div className="font-semibold text-blue-600">Job Title</div>
            <div className="text-gray-700 text-sm">Company Name 2020 | Present</div>
          </div>
          <div>
            <div className="font-semibold text-blue-600">Job Title</div>
            <div className="text-gray-700 text-sm">Company Name 2018 | 2020</div>
          </div>
          <div>
            <div className="font-semibold text-blue-600">Job Title</div>
            <div className="text-gray-700 text-sm">Company Name 2016 | 2018</div>
          </div>
        </div>
      </div>
    </div>
  );
}