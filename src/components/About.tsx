// src/components/About.tsx
import { CheckCircle, Target, Award, Users, Star, BookOpen, GraduationCap, Building, TargetIcon } from "lucide-react";

const About = () => {
  const features = [
    "Small batches with personalized attention",
    "Concept-first teaching methodology", 
    "Weekly tests and progress tracking",
    "CBSE & ICSE aligned comprehensive notes",
    "Daily doubt solving sessions",
    "Banking exam specialized coaching"
  ];

  const stats = [
    { value: "1000+", label: "Students Mentored", icon: Users },
    { value: "96%", label: "Success Rate", icon: Star },
    { value: "4+", label: "Years of Excellence", icon: Award },
    { value: "25+", label: "Expert Faculty", icon: GraduationCap }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-blue-200">
            <Building className="w-4 h-4" />
            Building Futures Since 2020
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Teach Nation</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Premier educational institute in Palam offering comprehensive CBSE, ICSE, and Banking exam coaching with proven results and expert faculty.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Description */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <h2 className="text-3xl font-black text-gray-900 mb-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                Our Vision & Mission
              </h2>
              
              <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                <p>
                  Established in 2020, <strong className="text-blue-700">Teach Nation</strong> has 
                  emerged as a leading educational institute in Palam, dedicated to nurturing 
                  students from Classes 1 through 12 and aspiring banking professionals.
                </p>
                
                <p>
                  We take immense pride in our <strong className="text-blue-600">Banking Exam coaching</strong>, 
                  where our specialized faculty provides comprehensive preparation for 
                  <strong> SBI Clerk, IBPS RBB, and IBPS Clerk</strong> examinations with 
                  proven success rates.
                </p>

                <p>
                  Our expertise spans across <strong>CBSE & ICSE curriculum for Classes 1-12</strong>, 
                  and specialized programs in <strong>Science, Commerce & Humanities for senior secondary students</strong>. 
                  Each program is designed to build strong academic foundations.
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white shadow-2xl">
              <h3 className="text-2xl font-black mb-8 flex items-center gap-4">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-amber-300" />
                </div>
                Why Choose Teach Nation?
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300"
                  >
                    <CheckCircle className="w-5 h-5 text-amber-300 flex-shrink-0 mt-0.5" />
                    <span className="font-semibold">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            {/* Stats Card */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <h3 className="text-2xl font-black text-gray-900 mb-8 text-center">
                Our Journey in Numbers
              </h3>
              
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-black text-blue-600 mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-600 font-semibold">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Teaching Methodology */}
            <div className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-black text-gray-900 mb-6">Our Educational Approach</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 bg-white/90 rounded-2xl p-5 hover:shadow-lg transition-all duration-300">
                  <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-black text-gray-900 mb-2 text-lg">Exam-Focused Training</h4>
                    <p className="text-gray-700">
                      Specialized coaching for CBSE, ICSE board exams and banking competitive examinations 
                      with comprehensive study material and mock tests.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white/90 rounded-2xl p-5 hover:shadow-lg transition-all duration-300">
                  <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-black text-gray-900 mb-2 text-lg">Personalized Mentorship</h4>
                    <p className="text-gray-700">
                      Limited batch sizes ensure every student receives individual attention, 
                      regular feedback, and customized learning paths for optimal growth.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white/90 rounded-2xl p-5 hover:shadow-lg transition-all duration-300">
                  <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-black text-gray-900 mb-2 text-lg">Result-Driven System</h4>
                    <p className="text-gray-700">
                      Comprehensive assessment framework including regular tests, mock exams, 
                      and performance analytics to ensure continuous improvement.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Location & Contact CTA */}
            <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl p-6 text-white shadow-2xl text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <TargetIcon className="w-5 h-5 text-amber-300" />
                <h4 className="font-black text-lg">Visit Our Campus</h4>
              </div>
              <p className="text-gray-300 mb-5 text-sm leading-relaxed">
                Bata Chowk, WZ 908, Palam Village<br />
                Palam, New Delhi - 110077
              </p>
              <button className="bg-gradient-to-r from-amber-400 to-orange-500 text-gray-900 px-6 py-3 rounded-xl font-black hover:shadow-xl transition-all duration-300 w-full hover:scale-105">
                Schedule a Campus Tour
              </button>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 pt-12 border-t border-gray-200">
          <h3 className="text-3xl font-black text-gray-900 mb-4">
            Ready to Build Your Successful Future?
          </h3>
          <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of successful students who have achieved their academic and career goals with Teach Nation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-2xl font-black hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Book Free Demo Class
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-2xl font-black hover:bg-blue-600 hover:text-white transition-all duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;