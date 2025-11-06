import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { BLOG_POSTS } from "@/data/blog";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, User, BookOpen, Share2, Clock, GraduationCap } from "lucide-react";

function renderContent(md: string) {
  return md.split("\n").map((line, i) => {
    if (line.startsWith("## ")) 
      return <h2 key={i} className="text-3xl font-bold mt-12 mb-6 text-gray-900 border-l-4 border-blue-500 pl-4 py-2 bg-gradient-to-r from-blue-50 to-transparent">{line.slice(3)}</h2>;
    if (line.startsWith("### ")) 
      return <h3 key={i} className="text-2xl font-semibold mt-10 mb-4 text-blue-700">{line.slice(4)}</h3>;
    if (line.startsWith("- ")) 
      return <li key={i} className="ml-8 list-disc text-gray-700 my-3 leading-relaxed flex items-start">
        <span className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-3 flex-shrink-0" />
        {line.slice(2)}
      </li>;
    if (line.startsWith("1. ")) 
      return <li key={i} className="ml-8 list-decimal text-gray-700 my-3 leading-relaxed">{line.slice(3)}</li>;
    if (line.startsWith("> ")) 
      return <blockquote key={i} className="border-l-4 border-amber-400 pl-6 italic text-gray-600 my-8 bg-gradient-to-r from-amber-50 to-orange-50 py-6 rounded-r-2xl text-lg leading-relaxed">
        {line.slice(2)}
      </blockquote>;
    if (line.trim() === "") 
      return <br key={i} />;
    return <p key={i} className="my-6 text-gray-700 leading-relaxed text-lg">{line}</p>;
  });
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = useMemo(() => BLOG_POSTS.find(p => p.slug === slug), [slug]);

  if (!post) {
    return (
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl flex items-center justify-center shadow-2xl">
            <GraduationCap className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl font-black text-gray-900 mb-6">Article Not Found</h1>
          <p className="text-gray-600 text-lg mb-10 max-w-md mx-auto leading-relaxed">
            The knowledge you seek seems to be on a different path. Let's guide you back to valuable insights.
          </p>
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold px-8 py-4 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Return to Insights
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-gradient-to-br from-slate-50 via-white to-blue-50/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Back Button */}
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-3 text-blue-600 font-bold hover:text-blue-700 transition-all duration-300 mb-8 group"
        >
          <div className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center group-hover:shadow-xl transition-shadow">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          </div>
          Back to Insights
        </Link>

        {/* Article Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-blue-200">
            <GraduationCap className="w-4 h-4" />
            {post.category}
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-black text-gray-900 mb-8 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center justify-center gap-8 text-base text-gray-600 mb-10">
            <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-2xl shadow-sm border border-gray-100">
              <Calendar className="w-5 h-5 text-blue-600" />
              <span className="font-medium">{new Date(post.date).toLocaleDateString('en-IN', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-2xl shadow-sm border border-gray-100">
              <User className="w-5 h-5 text-blue-600" />
              <span className="font-medium">By {post.author}</span>
            </div>
            {post.readTime && (
              <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-2xl shadow-sm border border-gray-100">
                <Clock className="w-5 h-5 text-blue-600" />
                <span className="font-medium">{post.readTime} read</span>
              </div>
            )}
          </div>

          {/* Featured Image */}
          {post.image && (
            <div className="mb-12 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-72 sm:h-96 object-cover"
              />
            </div>
          )}
        </div>

        {/* Article Content */}
        <Card className="border border-gray-200 shadow-2xl rounded-3xl overflow-hidden bg-white/80 backdrop-blur-sm">
          <CardContent className="p-8 sm:p-12">
            <article className="max-w-none">
              {renderContent(post.content)}
            </article>

            {/* Article Footer */}
            <div className="mt-16 pt-12 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-center">
                <div className="text-center sm:text-left">
                  <div className="text-sm text-gray-500 mb-2 font-medium">Published by</div>
                  <div className="text-lg font-bold text-blue-700">
                    Teach Nation Institute
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    Bata Chowk, WZ 908, Palam Village, Palam, New Delhi - 110077
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <button className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 px-4 py-2 rounded-xl border border-gray-300 hover:border-blue-300">
                    <Share2 className="w-4 h-4" />
                    Share
                  </button>
                  <Link 
                    to="/blog" 
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    All Articles
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Success CTA */}
        <div className="mt-16 text-center">
          <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 rounded-3xl p-12 text-white shadow-2xl">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full -translate-y-16 translate-x-16" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-amber-500/20 rounded-full translate-y-12 -translate-x-12" />
            
            <div className="relative">
              <div className="inline-flex items-center gap-2 bg-blue-500/30 border border-blue-400/40 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <GraduationCap className="w-4 h-4" />
                Begin Your Journey
              </div>
              <h3 className="text-3xl font-bold mb-6">
                Ready to <span className="text-amber-300">Build</span> Your Academic Success?
              </h3>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                Join Teach Nation Institute and experience our comprehensive educational approach that has guided countless students toward academic excellence and career success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-400 to-orange-500 text-gray-900 font-bold px-8 py-4 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  Start Your Journey
                </Link>
                <Link 
                  to="/courses" 
                  className="inline-flex items-center gap-3 bg-white/20 text-white font-semibold px-8 py-4 rounded-2xl hover:bg-white/30 transition-all duration-300 border border-white/30"
                >
                  Explore Programs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}