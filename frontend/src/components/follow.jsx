import {
  Assignment,
  Login,
  Dashboard,
  VpnKey,
} from "@mui/icons-material";
import { motion } from "framer-motion";

const Follow = () => {
  const bubbleVariants = {
    animate: {
      x: ["-20vw", "120vw"], // Horizontal movement
      y: ["120vh", "-20vh"], // Vertical movement
      opacity: [0.2, 0.8, 0], // Fade in and out
      transition: {
        duration: 6 + Math.random() * 6, // Random animation duration (6s to 12s)
        repeat: Infinity, // Infinite animation
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative  min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-red-500 via-red-400 to-red-300 overflow-hidden">
      {/* Background Bubbles */}
      {[...Array(50)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-white shadow-lg"
          style={{
            width: `${Math.random() * 50 + 20}px`, // Random width (20px to 70px)
            height: `${Math.random() * 50 + 20}px`, // Random height
            top: `${Math.random() * 100}vh`, // Random vertical start position
            left: `${Math.random() * 100}vw`, // Random horizontal start position
          }}
          variants={bubbleVariants}
          animate="animate"
        ></motion.div>
      ))}

      {/* Section Content */}
      <div className="text-center mb-12">
        <motion.h1
          className="text-5xl font-bold mb-4 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Follow these easy steps
        </motion.h1>
        <motion.div
          className="w-20 h-1 bg-white mx-auto"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        ></motion.div>
      </div>

      <motion.div
        className="space-y-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Step 1 */}
        <div className="flex items-center space-x-6 text-white">
          <Assignment fontSize="large" />
          <motion.p
            className="text-xl font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Sign Up and Create Your Profile.
          </motion.p>
        </div>

        {/* Step 2 */}
        <div className="flex items-center space-x-6 text-white">
          <Login fontSize="large" />
          <motion.p
            className="text-xl font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Add Tasks and Organize Your Study Plan.
          </motion.p>
        </div>

        {/* Step 3 */}
        <div className="flex items-center space-x-6 text-white">
          <Dashboard fontSize="large" />
          <motion.p
            className="text-xl font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Start Your Pomodoro Timer and Stay on Track.
          </motion.p>
        </div>

        {/* Step 4 */}
        <div className="flex items-center space-x-6 text-white">
          <VpnKey fontSize="large" />
          <motion.p
            className="text-xl font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Review Your Progress and Celebrate Your Wins.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default Follow;
