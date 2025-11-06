// src/components/Footer.tsx
import { MapPin, Phone, Mail, MessageCircle, GraduationCap, BookOpen, Users, Target, BanknoteIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* ---------- BRAND ---------- */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center border-2 border-white/20 shadow-2xl">
                <GraduationCap className="w-10 h-10 text-white" />  
              </div>
              <div>
                <h3 className="text-2xl font-black tracking-tight">
                  Teach Nation
                </h3>
                <p className="text-sm text-blue-300 mt-2 font-semibold">Building Future Leaders</p>
              </div>
            </div>
            <p className="text-gray-300 text-base leading-relaxed max-w-sm">
              Premier educational institute in Palam offering comprehensive programs for{" "}
              <span className="font-bold text-white">CBSE, ICSE, and Banking Exams</span> with expert faculty and proven results since 2020.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Target className="w-4 h-4 text-blue-400" />
              <span>Comprehensive Education, Proven Results</span>
            </div>
          </div>

          {/* ---------- QUICK LINKS ---------- */}
          <div>
            <h4 className="font-black text-lg mb-6 text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-400" />
              Quick Links
            </h4>
            <ul className="space-y-3 text-base">
              {[
                { label: "Academic Programs", href: "#courses" },
                { label: "About Institute", href: "#about" },
                { label: "Student Results", href: "#results" },
                { label: "Contact Us", href: "#contact" },
                { label: "Admission Process", href: "#admissions" },
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-blue-300 transition-all duration-300 hover:pl-3 block hover:font-bold group"
                  >
                    <span className="group-hover:text-blue-400">› </span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ---------- COURSES ---------- */}
          <div>
            <h4 className="font-black text-lg mb-6 text-white flex items-center gap-2">
              <Users className="w-5 h-5 text-amber-400" />
              Our Programs
            </h4>
            <ul className="space-y-3 text-base text-gray-300">
              {[
                "Class 1-8 Foundation",
                "Class 9-10 CBSE/ICSE",
                "Class 11-12 Science",
                "Class 11-12 Commerce",
                "SBI Clerk Coaching",
                "IBPS RBB & Clerk",
                "English Speaking Course"
              ].map((program, i) => (
                <li key={i} className="hover:text-amber-300 transition-colors duration-300 hover:font-medium">
                  {program}
                </li>
              ))}
            </ul>
          </div>

          {/* ---------- CONTACT INFO ---------- */}
          <div>
            <h4 className="font-black text-lg mb-6 text-white flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-amber-400" />
              Get In Touch
            </h4>
            <div className="space-y-4 text-base">
              <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform duration-300">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>
                <span className="text-gray-300 group-hover:text-white">
                  Bata Chowk, WZ 908, Palam Village<br />
                  Palam, New Delhi - 110077
                </span>
              </div>
              <div className="flex items-center gap-3 group hover:translate-x-1 transition-transform duration-300">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-blue-400" />
                </div>
                <a href="tel:919716777769" className="text-gray-300 group-hover:text-white block hover:text-blue-300 transition-colors">
                  +91-9716777769
                </a>
              </div>
              <div className="flex items-center gap-3 group hover:translate-x-1 transition-transform duration-300">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-blue-400" />
                </div>
                <span className="text-gray-300 group-hover:text-white">WhatsApp Available</span>
              </div>
              <div className="flex items-center gap-3 group hover:translate-x-1 transition-transform duration-300">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <span className="text-gray-300 group-hover:text-white">info@teachnation.in</span>
              </div>
              
              {/* Call to Action */}
              <button className="mt-6 w-full bg-gradient-to-r from-amber-400 to-orange-500 text-gray-900 font-black py-3 px-6 rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                <span className="group-hover:scale-105 transition-transform">Book Campus Tour</span>
              </button>
            </div>
          </div>
        </div>

        {/* ---------- BOTTOM BAR ---------- */}
        <div className="border-t border-white/20 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center text-base">
          <p className="text-center md:text-left text-gray-300">
            © {new Date().getFullYear()} <span className="font-black text-white">Teach Nation Institute</span>. All rights reserved.
          </p>

          <div className="flex space-x-8 mt-6 md:mt-0">
            {[
              { label: "Terms of Service", href: "#" },
              { label: "Privacy Policy", href: "#" },
              { label: "Refund Policy", href: "#" }
            ].map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="text-gray-400 hover:text-blue-300 transition-all duration-300 hover:font-bold"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* ---------- ACCREDITATION ---------- */}
        <div className="text-center mt-8 pt-6 border-t border-white/10">
          <p className="text-sm text-gray-400 font-semibold">
            Specialized in CBSE & ICSE Curriculum | Banking Exam Coaching | Recognized Educational Institute
          </p>
          <div className="flex justify-center items-center gap-6 mt-4 text-xs text-gray-500">
            <span>🏆 Proven Academic Results</span>
            <span>⭐ Expert Faculty Team</span>
            <span>🏦 Banking Exam Specialists</span>
          </div>
        </div>

        {/* ---------- SOCIAL & ADDITIONAL INFO ---------- */}
        <div className="text-center mt-8 pt-6 border-t border-white/10">
          <div className="flex justify-center items-center gap-8 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-blue-400" />
              <span>Classes 1-12 & Banking</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-amber-400" />
              <span>Small Batch Sizes</span>
            </div>
            <div className="flex items-center gap-2">
              <BanknoteIcon className="w-4 h-4 text-blue-400" />
              <span>Banking Exam Focus</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;