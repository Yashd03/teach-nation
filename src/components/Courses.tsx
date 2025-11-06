// src/components/PopularCourses.tsx
import React from "react";
import { Star, CheckCircle2, BookOpen, Users, Target, Award, GraduationCap, Zap, BanknoteIcon } from "lucide-react";

const StarRow = ({ count = 5 }: { count?: number }) => (
  <div className="flex justify-center gap-1 text-amber-400 mb-4">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} className="w-5 h-5 fill-amber-400" />
    ))}
  </div>
);

const Card = ({
  title,
  copy,
  img,
  stats,
  rating = 5,
  quote,
  focus = "object-center",
}: {
  title: string;
  copy: string;
  img: string;
  stats: string[];
  rating?: number;
  quote: string;
  focus?: string;
}) => (
  <div className="group bg-white p-6 md:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-blue-300">
    <div className="overflow-hidden rounded-2xl mb-6 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
      <img
        src={img}
        alt={title}
        className={`w-full h-56 md:h-60 object-cover ${focus} group-hover:scale-105 transition-transform duration-500`}
      />
    </div>
    <h3 className="text-2xl font-black bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
      {title}
    </h3>
    <p className="text-gray-700 mt-3 leading-relaxed">{copy}</p>
    <StarRow count={rating} />
    <ul className="text-sm text-gray-800 space-y-3 my-5">
      {stats.map((s, i) => (
        <li key={i} className="flex items-start gap-3">
          <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
            <CheckCircle2 className="w-3 h-3 text-white" />
          </div>
          <span className="font-medium">{s}</span>
        </li>
      ))}
    </ul>
    <blockquote className="text-sm text-gray-600 italic border-t border-gray-200 pt-4 leading-relaxed">
      "{quote}"
    </blockquote>
  </div>
);

const PopularCourses = () => {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-blue-200">
          <BookOpen className="w-4 h-4" />
          Comprehensive Learning Programs
        </div>
        <h2 className="text-5xl font-black text-gray-900 mb-4">
          Our <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Academic Programs</span>
        </h2>
        <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
          Comprehensive educational programs designed for CBSE, ICSE, and Banking exams with expert faculty 
          and proven teaching methodologies at Teach Nation.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Foundation Program */}
          <Card
            title="Class 1-8 Foundation Program"
            copy="Strong academic foundation with focus on conceptual understanding across CBSE and ICSE curricula."
            img="public\main1.jpg"
            focus="object-center"
            stats={[
              "CBSE & ICSE curriculum coverage",
              "All subjects: English, Maths, Science, SST",
              "Activity-based learning approach",
              "Regular assessments & progress tracking"
            ]}
            rating={5}
            quote="The foundation program built my child's confidence and love for learning. Excellent teaching methods!"
          />

          {/* Class 9-10 CBSE/ICSE */}
          <Card
            title="Class 9-10 CBSE/ICSE Board"
            copy="Comprehensive preparation for CBSE and ICSE board examinations with specialized subject coaching."
            img="public\A4.jpg"
            focus="object-center"
            stats={[
              "CBSE & ICSE board preparation",
              "Science, Maths, Social Science",
              "Regular mock tests and revisions",
              "Doubt clearing sessions"
            ]}
            rating={5}
            quote="Scored 95% in ICSE boards! The teachers' dedication and regular tests made all the difference."
          />

          {/* Class 11-12 Science */}
          <Card
            title="Class 11-12 Science (PCM/PCB)"
            copy="Rigorous preparation for board exams with expert faculty in Physics, Chemistry, Mathematics, and Biology."
            img="public\main2.jpg"
            focus="object-center"
            stats={[
              "Physics, Chemistry, Mathematics/Biology",
              "CBSE & ICSE curriculum",
              "Practical lab training",
              "Competitive exam preparation"
            ]}
            rating={5}
            quote="The faculty's depth of knowledge helped me crack both board exams and competitive tests."
          />

          {/* Class 11-12 Commerce */}
          <Card
            title="Class 11-12 Commerce"
            copy="Specialized coaching in Commerce subjects with practical accounting and business applications."
            img="public\A1.jpg"
            focus="object-center"
            stats={[
              "Accounts, Economics, Business Studies",
              "Mathematics/Entrepreneurship",
              "Practical accounting sessions",
              "Case study analysis"
            ]}
            rating={5}
            quote="Accounts became my favorite subject with their practical teaching approach. Scored 94% in boards!"
          />

          {/* Banking Exams */}
          <Card
            title="Banking Exams Coaching"
            copy="Comprehensive preparation for SBI Clerk, IBPS RBB, and IBPS Clerk examinations with expert guidance."
            img="public\A2.jpg"
            focus="object-center"
            stats={[
              "SBI Clerk exam preparation",
              "IBPS RBB & Clerk coaching",
              "Quantitative aptitude training",
              "Reasoning & English modules"
            ]}
            rating={5}
            quote="Cleared SBI Clerk in first attempt! The mock tests and faculty guidance were exceptional."
          />

          {/* English Speaking */}
          <Card
            title="English Speaking Course"
            copy="Enhance communication skills with focus on fluency, pronunciation, and confident public speaking."
            img="public\main.jpg"
            focus="object-center"
            stats={[
              "Daily conversation practice",
              "Pronunciation & accent training",
              "Group discussions & debates",
              "Personality development"
            ]}
            rating={4}
            quote="From hesitant speaker to confident communicator - this course transformed my personality."
          />
        </div>

        {/* Why Choose Teach Nation Section */}
        <div className="mt-16 bg-gradient-to-br from-white to-blue-50 rounded-3xl p-10 shadow-2xl border border-blue-100">
          <h3 className="text-3xl font-black text-gray-900 mb-8">Why Choose Teach Nation?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h4 className="font-black text-gray-900 mb-3 text-lg">Expert Faculty</h4>
              <p className="text-sm text-gray-700 leading-relaxed">Highly qualified educators with proven track records in academic excellence</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h4 className="font-black text-gray-900 mb-3 text-lg">Personalized Attention</h4>
              <p className="text-sm text-gray-700 leading-relaxed">Small batch sizes ensuring individual focus and customized learning paths</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h4 className="font-black text-gray-900 mb-3 text-lg">Exam Focused</h4>
              <p className="text-sm text-gray-700 leading-relaxed">Specialized coaching for CBSE, ICSE and Banking competitive examinations</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <BanknoteIcon className="w-7 h-7 text-white" />
              </div>
              <h4 className="font-black text-gray-900 mb-3 text-lg">Proven Results</h4>
              <p className="text-sm text-gray-700 leading-relaxed">Consistent track record of academic excellence and competition success</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl p-10 text-white shadow-2xl">
            <h3 className="text-3xl font-black mb-4">Ready to Build Your Successful Future?</h3>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
              Join Teach Nation and experience comprehensive education that prepares you for academic and career success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-amber-400 to-orange-500 text-gray-900 font-black px-8 py-4 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                Book Free Demo Class
              </button>
              <button className="bg-white/20 text-white font-bold px-8 py-4 rounded-2xl hover:bg-white/30 transition-all duration-300 border border-white/30">
                Download Course Brochure
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              📍 Bata Chowk, WZ 908, Palam Village, Palam, New Delhi - 110077
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;