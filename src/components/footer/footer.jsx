import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-6">
        {/* Left: Copyright */}
        <p className="text-sm text-center sm:text-left">
          &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
        </p>

        {/* Right: Social Icons */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/yourusername"
            target="_blank"
          >
            <Github size={24} className="text-gray-100 hover:text-[#333] transition-colors" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
          >
            <Linkedin size={24} className="text-gray-100 hover:text-[#0077b5] transition-colors" />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
          >
            <Twitter size={24} className="text-gray-100 hover:text-[#1da1f2] transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  );
}
