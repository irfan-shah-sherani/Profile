export default function Info() {
  return (
    <div className="flex flex-col gap-10 p-4">
      <div className="flex flex-col flex-row items-center bg-blue-100 p-6 rounded shadow">
        <div className="w-2 h-20 md:h-30 bg-blue-800 mb-4 mr-10"></div>
        <div className="flex flex-col justify-center gap-4">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-800">Irfan Shah</h1>
          <p className="text-lg md:text-3xl text-gray-700">Founder | CEO of Avanicsoft</p>
        </div>
      </div>

      <div className="max-w-3xl">
        <div className="text-2xl font-bold text-blue-800 mb-2">About</div>
        <p className="text-sm text-gray-700 text-left">
          I’m the Founder and CEO of AvanicSoft, a tech-driven company focused on delivering innovative solutions in web development, mobile applications, artificial intelligence, and enterprise software.
          <br /><br />
          Currently, I’m pursuing a Bachelor's in Computer Science (BSCS) from International University Islamabad, where I’m deepening my skills in software engineering.
          <br /><br />
          My mission is to bridge the gap between innovation and impact by building scalable, intelligent systems that solve real-world problems.
        </p>
      </div>
    </div>
  );
}
