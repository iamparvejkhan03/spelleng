// ProblemSection.jsx
import { grammaticalMistake, hesitationInSpeaking, unableToSpeakInInterview, unableToSpeakInMeeting } from '../assets';
import Container from './Container';

const ProblemSection = () => {
  const problems = [
    {
      id: 1,
      image: unableToSpeakInMeeting,
      title: "You have great ideas in meetings, but hesitate to share them?",
      description: "Excellent point hai dimaag me, lekin 'kya bolun, kaise bolun' soch kar chup reh jaate ho. Opportunities miss ho jaati hai.",
      alt: "Quiet person in business meeting"
    },
    {
      id: 2,
      image: unableToSpeakInInterview,
      title: "You know the answer in an interview, but can't express it confidently.",
      description: "Sahi words soch lete ho, par mouth open karte hi atak jaate ho. Akele practice sab aata hai, saamne baithte hi blank ho jaate ho.",
      alt: "Frustrated professional during interview"
    },
    {
      id: 3,
      image: hesitationInSpeaking,
      title: "You understand English, but hesitate when it comes to speaking.",
      description: "Sab samajh aa raha hai, lekin confidence nahi hai. Darr rehta hai ki judge na ho jaayein ya hasi na ho.",
      alt: "Nervous person speaking"
    },
    {
      id: 4,
      image: grammaticalMistake,
      title: "You're afraid of making grammar mistakes when you speak.",
      description: '"Kahi galat na bol dun" — ye soch kar aap important opportunities miss kar dete ho. Perfect hone ka pressure bohot hai.',
      alt: "Worried student checking grammar"
    }
  ];

  const handleBookTrial = (problemTitle) => {
    window.location.href = 'https://pages.razorpay.com/spelleng';
  };

  return (
    <section className="bg-gray-50 mt-8 sm:mt-0">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 bg-white shadow-sm rounded-full px-4 py-1.5 mb-4 border border-gray-200 mx-auto w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: '#09B850' }}></span>
              <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: '#09B850' }}></span>
            </span>
            <span className="text-gray-700 text-sm font-medium" style={{ color: '#09B850' }}>We Understand Your Pain</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Do you struggle with these issues as well?
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            ✅ You're not alone — 80% of professionals face these challenges every day.
          </p>
        </div>

        {/* Cards Grid - Using your exact card design */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {problems.map((problem) => (
            <div
              key={problem.id}
              className="p-4 bg-white border border-gray-200 hover:-translate-y-1 transition duration-300 rounded-lg shadow shadow-black/10 max-w-80 mx-auto w-full flex flex-col h-full"
            >
              <img
                className="rounded-md h-40 w-full object-cover"
                src={problem.image}
                alt={problem.alt}
              />
              <p className="text-gray-900 text-sm font-semibold mt-4 grow">
                {problem.title}
              </p>
              <button
                onClick={() => window.location.href = 'https://pages.razorpay.com/spelleng'}
                type="button"
                className="bg-[#09B850] hover:bg-[#08a048] transition cursor-pointer mt-4 mb-0 px-2 py-2 font-medium flex items-center justify-center rounded-md text-white text-sm shadow-md hover:shadow-lg w-full"
              >
                This is exactly how I feel 👉
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Trust Message */}
        <div className="hidden sm:block mt-12 text-center">
          <div onClick={() => window.location.href = 'https://pages.razorpay.com/spelleng'} className="cursor-pointer inline-flex items-center gap-3 bg-white border border-gray-200 rounded-full px-6 py-3 shadow-sm">
            <span className="text-3xl">👉</span>
            <span className="text-gray-700 font-medium">
              Ever faced these problems? — <span style={{ color: '#09B850' }} className="font-bold">Join SpellEng</span>
            </span>
            <span className="text-2xl">→</span>
          </div>
        </div>

        {/* Bottom Trust Message */}
        <div className="block sm:hidden mt-8 text-center">
          <div onClick={() => window.location.href = 'https://pages.razorpay.com/spelleng'} className="cursor-pointer inline-flex items-end gap-3 bg-white border border-gray-200 rounded-full px-6 pb-2 shadow-sm">
            <span className="text-xl">👉</span>
            <span className="text-gray-700 font-medium">
              <span style={{ color: '#09B850' }} className="font-semibold text-sm">Join SpellEng</span>
            </span>
            <span className="text-2xl">→</span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProblemSection;