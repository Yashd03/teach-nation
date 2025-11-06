import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Search, ChevronDown, Menu, X, Phone, Star, GraduationCap, BookOpen, Target, Zap } from "lucide-react";
import { COURSES } from "@/config/courses";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [q, setQ] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const nav = useNavigate();
  const location = useLocation();
  const wrapRef = useRef<HTMLDivElement>(null);

  /* ---------- Scroll effect ---------- */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---------- Close dropdown on route change ---------- */
  useEffect(() => {
    setOpen(false);
    setMobileMenu(false);
  }, [location.pathname]);

  /* ---------- Search submit ---------- */
  const submitSearch = () => {
    const query = q.trim();
    nav(`/courses${query ? `?q=${encodeURIComponent(query)}` : ""}`);
  };

  const onKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") submitSearch();
  };

  const class11 = useMemo(() => COURSES.filter((c) => c.cls === 11), []);
  const class12 = useMemo(() => COURSES.filter((c) => c.cls === 12), []);

  /* ---------- Close on click outside ---------- */
  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  /* ---------- Handle phone click ---------- */
  const handlePhoneClick = () => {
    window.open('tel:919716777769', '_self');
  };

  /* ---------- Handle enquire click ---------- */
  const handleEnquireClick = (e: React.MouseEvent) => {
    e.preventDefault();
    nav('/contact');
  };

  return (
    <>
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-2 px-4 text-center text-sm font-bold border-b border-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }} />
        </div>
        <div className="relative z-10">
          🎓 <span className="font-black">FREE DEMO CLASSES</span> - Admissions Open 2024-25
        </div>
      </div>

      {/* Main Navbar */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-2xl border-b border-gray-200/50" 
          : "bg-white border-b border-gray-200"
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
          {/* ---------- BRAND ---------- */}
          <Link
            to="/"
            className="flex items-center gap-3 group transition-all flex-shrink-0"
          >
            <div className="relative">
              {/* Logo Container */}
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="leading-tight">
              <div className="text-xl font-black bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
                Teach Nation
              </div>
              <div className="text-xs text-gray-500 font-semibold">
                Building Future Leaders
              </div>
            </div>
          </Link>

          {/* ---------- DESKTOP NAV ---------- */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* Navigation Links */}
            <div className="flex items-center gap-8">
              <Link
                to="/"
                className="font-bold text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105"
              >
                Home
              </Link>

              {/* Programs Dropdown */}
              <div
                className="relative"
                ref={wrapRef}
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
              >
                <button
                  className="inline-flex items-center gap-2 font-bold text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 group"
                  aria-haspopup="menu"
                  aria-expanded={open}
                >
                  <BookOpen className="w-4 h-4" />
                  Programs 
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
                </button>

                {open && (
                  <div
                    className="absolute left-0 top-full pt-3 z-[999]"
                    onMouseEnter={() => setOpen(true)}
                    onMouseLeave={() => setOpen(false)}
                  >
                    <div
                      role="menu"
                      className="w-72 rounded-2xl border border-gray-200 bg-white/95 backdrop-blur-md shadow-2xl p-4 space-y-4"
                    >
                      <div>
                        <div className="text-sm font-black text-blue-600 mb-3 flex items-center gap-2">
                          <GraduationCap className="w-4 h-4" />
                          Class 11 Programs
                        </div>
                        <ul className="space-y-2">
                          {class11.map((c) => (
                            <li key={c.id}>
                              <Link
                                to={`/courses?select=${c.id}`}
                                className="block rounded-xl px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 hover:translate-x-1 font-medium"
                              >
                                {c.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="border-t border-gray-200 pt-4">
                        <div className="text-sm font-black text-blue-600 mb-3 flex items-center gap-2">
                          <Target className="w-4 h-4" />
                          Class 12 Programs
                        </div>
                        <ul className="space-y-2">
                          {class12.map((c) => (
                            <li key={c.id}>
                              <Link
                                to={`/courses?select=${c.id}`}
                                className="block rounded-xl px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 hover:translate-x-1 font-medium"
                              >
                                {c.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/results"
                className="font-bold text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105"
              >
                Results
              </Link>

              <Link
                to="/blog"
                className="font-bold text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105"
              >
                Insights
              </Link>

              <Link
                to="/contact"
                className="font-bold text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105"
              >
                Contact
              </Link>
            </div>

            {/* Search Bar */}
            <div className="flex items-center rounded-xl border border-gray-300 bg-white px-4 py-2.5 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20 transition-all duration-300 w-52 hover:shadow-lg">
              <Search className="w-4 h-4 text-gray-400 mr-3" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                onKeyDown={onKey}
                placeholder="Search programs..."
                className="outline-none placeholder:text-gray-400 w-full text-sm bg-transparent text-gray-700 font-medium"
              />
            </div>

            {/* Phone Number Box */}
            <button
              onClick={handlePhoneClick}
              className="bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-gray-900 font-black px-5 py-2.5 rounded-xl transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl hover:scale-105 border border-amber-500"
            >
              <Phone className="w-4 h-4" />
              <span>9716777769</span>
            </button>

            {/* Enquire Button */}
            <button
              onClick={handleEnquireClick}
              className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-black px-6 py-2.5 rounded-xl transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Zap className="w-4 h-4" />
              Enquire Now
            </button>
          </nav>

          {/* ---------- MOBILE MENU BUTTON ---------- */}
          <button
            className="lg:hidden p-3 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-100 transition-all duration-300 hover:scale-105"
            onClick={() => setMobileMenu((p) => !p)}
          >
            {mobileMenu ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* ---------- MOBILE MENU PANEL ---------- */}
        {mobileMenu && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-2xl">
            <nav className="flex flex-col p-6 space-y-4">
              {/* Search in Mobile */}
              <div className="flex items-center rounded-xl border border-gray-300 bg-white px-4 py-3 mb-2 shadow-lg">
                <Search className="w-4 h-4 text-gray-400 mr-3" />
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  onKeyDown={onKey}
                  placeholder="Search programs..."
                  className="outline-none placeholder:text-gray-400 w-full text-sm bg-transparent text-gray-700 font-medium"
                />
              </div>

              <Link 
                to="/" 
                onClick={() => setMobileMenu(false)}
                className="font-bold text-gray-700 hover:text-blue-600 py-3 px-4 rounded-xl hover:bg-blue-50 transition-all duration-300 flex items-center gap-3"
              >
                <GraduationCap className="w-4 h-4" />
                Home
              </Link>

              <Link 
                to="/courses" 
                onClick={() => setMobileMenu(false)}
                className="font-bold text-gray-700 hover:text-blue-600 py-3 px-4 rounded-xl hover:bg-blue-50 transition-all duration-300 flex items-center gap-3"
              >
                <BookOpen className="w-4 h-4" />
                Programs
              </Link>

              <Link 
                to="/results" 
                onClick={() => setMobileMenu(false)}
                className="font-bold text-gray-700 hover:text-blue-600 py-3 px-4 rounded-xl hover:bg-blue-50 transition-all duration-300 flex items-center gap-3"
              >
                <Target className="w-4 h-4" />
                Results
              </Link>

              <Link 
                to="/blog" 
                onClick={() => setMobileMenu(false)}
                className="font-bold text-gray-700 hover:text-blue-600 py-3 px-4 rounded-xl hover:bg-blue-50 transition-all duration-300 flex items-center gap-3"
              >
                <BookOpen className="w-4 h-4" />
                Insights
              </Link>

              <Link
                to="/contact"
                onClick={() => setMobileMenu(false)}
                className="font-bold text-gray-700 hover:text-blue-600 py-3 px-4 rounded-xl hover:bg-blue-50 transition-all duration-300 flex items-center gap-3"
              >
                <Phone className="w-4 h-4" />
                Contact
              </Link>

              <div className="border-t border-gray-200 pt-4 mt-2 space-y-4">
                <button
                  onClick={() => {
                    handlePhoneClick();
                    setMobileMenu(false);
                  }}
                  className="w-full bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-gray-900 font-black py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call: 9716777769</span>
                </button>

                <button
                  onClick={(e) => {
                    handleEnquireClick(e);
                    setMobileMenu(false);
                  }}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-black py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg"
                >
                  <Zap className="w-4 h-4" />
                  Enquire Now
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}