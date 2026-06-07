import { useState } from 'react';
import Container from './Container';
import { Play, Youtube, Star, MessageCircle, ThumbsUp, X } from 'lucide-react';

const TestimonialsSection = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const testimonials = [
    {
      id: 1,
      videoId: "g32qUM-Gb7Q",
      title: "Overcame Mother-Tongue Influence & Built Speaking Confidence",
      name: "Ravi",
      role: "Accountant",
      rating: 5,
      description: "Before joining SpellEng, my mother-tongue influence affected the way I spoke English. Through personalized feedback, pronunciation practice, and regular speaking sessions, I became more confident communicating in English."
    },
    {
      id: 2,
      videoId: "DlDNU7lMWYE",
      title: "From Avoiding Conversations to Speaking More Confidently",
      name: "Sameer",
      role: "Job Seeker",
      rating: 5,
      description: "I used to hesitate while speaking English and often avoided conversations because I wasn't confident about my grammar and pronunciation. Regular practice and supportive tutor feedback helped me become much more comfortable speaking English."
    },
    {
      id: 3,
      videoId: "9X5WdHbSrBA",
      title: "Turned English Knowledge Into Interview Confidence",
      name: "Neha",
      role: "Working Professional",
      rating: 5,
      description: "I could read, write, and understand English well, but speaking confidently in interviews was a challenge. Real-life conversation practice and personalized feedback helped me improve my communication skills and speak with greater confidence."
    }
  ];

  return (
    <>
      <section className="pt-0 pb-16 md:pb-20 md:pt-0 bg-linear-to-b from-gray-50 to-white">
        <Container>
          {/* Section Header */}
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 bg-white shadow-sm rounded-full px-4 py-1.5 mb-4 border border-gray-200">
              <Youtube size={16} style={{ color: '#FF0000' }} />
              <span className="text-sm font-medium" style={{ color: '#09B850' }}>Student Success Stories</span>
            </div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Real Students. <span style={{ color: '#09B850' }}>Real Results.</span>
            </h2>
            <p className="text-gray-600 text-sm max-w-2xl mx-auto">
              See how our students improved their English.
            </p>
          </div>

          {/* YouTube Videos Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((video) => (
              <div
                key={video.id}
                onClick={() => setSelectedVideo(video)}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden cursor-pointer"
              >
                {/* YouTube Thumbnail */}
                <div className="relative">
                  <img
                    src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`;
                    }}
                  />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-1000 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-red-600 rounded-full p-4 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                      <Play size={32} className="text-white fill-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(video.rating)].map((_, i) => (
                      <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2">{video.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{video.description}</p>
                  <div className="pt-3 border-t border-gray-100">
                    <p className="text-gray-900 font-semibold text-sm">{video.name}</p>
                    <p className="text-gray-500 text-xs">{video.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="relative w-full max-w-4xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition"
            >
              <X size={32} />
            </button>
            
            {/* YouTube Embed */}
            <div className="relative pb-[56.25%] h-0 rounded-2xl overflow-hidden">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1&rel=0`}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            {/* Video Info */}
            <div className="mt-4 text-white">
              <h3 className="text-xl font-bold">{selectedVideo.title}</h3>
              <p className="text-gray-300">{selectedVideo.name} • {selectedVideo.role}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TestimonialsSection;