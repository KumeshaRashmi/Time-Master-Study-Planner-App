import React from "react";
import { motion } from "framer-motion"; // Ensure framer-motion is imported correctly
import Header2 from "./Header2";

const developers = [
{
    name: "Kumesha Rashmi",
    role: "Developer",
    university: "Faculty of Engineering University of Ruhuna",
    image: "/src/assets/kumesha1.jpg",
},
{
    name: "Oshani Ranahunga",
    role: "Developer",
    university: "Faculty of Engineering University of Ruhuna",
    image: "/src/assets/oshani.jpg",
},
];

const About = () => {
return (
    <><Header2/>
    <section className="bg-navy text-slate-600 py-12">
    <div className="container mx-auto px-6 text-center">
        {/* About Us Title */}
        <motion.h2
        className="text-5xl font-extrabold mb-12 text-red-500"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        >
        About Us
        </motion.h2>

        {/* About Text Section */}
        <motion.div
        className="mx-auto max-w-10xl mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        >
        <p className="text-lg leading-relaxed mb-6">
        This project aims to develop a web application called "TimeMaster Study" to help users organize and track their study sessions using the Pomodoro Technique. The application will offer secure user authentication for login and registration, allowing users to manage their tasks by creating, updating, and deleting them as needed. Users can start and manage Pomodoro sessions with a built-in timer, which will track their study time and notify them when to take breaks and resume. The application will also visualize users' progress by displaying completed sessions and breaks, and provide reminders for break times and session completions. Additionally, users will have a profile section to manage their settings and preferences, ensuring a tailored experience for efficient study planning.
        </p>
        <p className="text-lg leading-relaxed">
            Developed by the University of Ruhuna undergraduate as a DevOps group project, this initiative aims to revolutionize the study process with modern and efficient solutions designed to maximize productivity and minimize distractions. The application will utilize ReactJS with Tailwind CSS for the frontend, and Spring Boot for the backend. User authentication will be implemented using Spring Security, while task management will be powered by Spring Data, MongoDB, and Axios. The Pomodoro timer functionality will leverage React State and timer libraries, ensuring accurate session tracking. The entire application will be containerized and deployed using Docker for seamless deployment and scalability.
        </p>

        </motion.div>

        {/* Developer Cards Section */}
        <div className="flex justify-center">
            <div className="grid  md:grid-cols-1 lg:grid-cols-2 gap-10">
            {developers.map((dev, index) => (
                <motion.div
                key={index}
                className="bg-white text-black p-6 rounded-lg shadow-lg transition-transform hover:scale-105"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
            >
            <img
                src={dev.image}
                alt={dev.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-center">{dev.name}</h3>
                <p className="text-center text-gray-700">{dev.role}</p>
                <p className="text-center text-sm mt-2">{dev.university}</p>
            </motion.div>
            ))}
        </div>
        </div>
    </div>
    </section></>
);
};

export default About;
