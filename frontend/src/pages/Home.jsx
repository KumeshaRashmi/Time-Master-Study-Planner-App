import React from 'react';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import Follow from '../components/follow';
import Footer from '../components/footer';
import About from '../components/About';
import Header from '../components/Header';

export default function Home() {
  return (
    <div>
      <Header/>
      {/* Banner Section */}
      <div className="relative">
        <img
          src="/src/assets/study1.jpeg"
          alt="Banner"
          className="w-full h-95 object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-2xl md:text-3xl text-white mb-4">
            Transform Your Study Habits
          </h2>
          <h1 className="text-3xl md:text-5xl font-bold text-red-400 mb-4">
            <Typewriter
              words={['Focus Better with the Pomodoro Technique']}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={50}
              deleteSpeed={80}
              delaySpeed={1000}
            />
          </h1>
          <p className="text-lg md:text-xl text-white mb-6">
            Organize your tasks, track your progress, and make study sessions more productive.
            Take breaks, stay focused, and unlock your potential!
          </p>
          <Link to="/sign-up">
            <button className="bg-red-500 text-white py-2 px-6 rounded shadow hover:bg-red-600">
              Start Planning Now
            </button>
          </Link>
        </div>
      </div>

      {/* Image Display Section */}
      <div className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-red-500 text-center mb-8">
            Sharper Focus, Better Results
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="flex justify-center mb-4">
                <img
                  src="/src/assets/focus.webp"
                  alt="Smarter Studying"
                  className="h-16 w-16"
                />
              </div>
              <h3 className="text-xl font-bold text-red-600 mb-2">
                Smarter Studying
              </h3>
              <p className="text-gray-600">
                Work smarter, not harder. Our innovative productivity tools help you do just that, ensuring maximum efficiency for maximum results.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="flex justify-center mb-4">
                <img
                  src="/src/assets/org.png"
                  alt="Better Organization"
                  className="h-16 w-16"
                />
              </div>
              <h3 className="text-xl font-bold text-red-600 mb-2">
                Better Organization
              </h3>
              <p className="text-gray-600">
                Seamlessly manage your classes, exams, and extra-curricular activities—because school schedules need more than just a calendar.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="flex justify-center mb-4">
                <img
                  src="/src/assets/prod.avif"
                  alt="Enhanced Productivity"
                  className="h-16 w-16"
                />
              </div>
              <h3 className="text-xl font-bold text-red-600 mb-2">
                Enhanced Productivity
              </h3>
              <p className="text-gray-600">
                Let us handle the hard work, keeping you on track for success with your personal academic assistant.
              </p>
            </div>
          </div>
        </div>
      </div>

      <About />
      <Follow />
      <Footer />
    </div>
  );
}
