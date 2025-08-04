import React, { useState } from "react";
import EducationLoader from "@/components/ui/EducationLoader";
import {
  Star,
  Award,
  Calendar,
  BookOpen,
  GraduationCap,
  Trophy,
} from "lucide-react";
import { motion } from "framer-motion";

const EducationSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const educationData = [
    {
      degree: "Bachelor of Business Administration (BBA)",
      school: "Southeast University",
      mascot: "🎓",
      year: "2017",
      achievements: ["Major: Marketing"],
      skills: ["Business Strategy", "Marketing", "Finance", "Management"],
      description:
        "Completed a comprehensive BBA program covering core areas of business including management, marketing, and finance. Developed analytical and strategic thinking skills for real-world business environments.",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      school: "New North South College, Dhaka",
      mascot: "🎓",
      year: "2011",
      achievements: ["Group: Commerce"],
      skills: ["Business Strategy", "Finance", "Management"],
      description:
        "Successfully completed HSC with foundational knowledge in academic subjects. Developed discipline, critical thinking, and communication skills.",
    }
  ];
  const professionaleducationData = [
    {
      degree: "MERN Stack Development",
      school: "Programming Hero",
      mascot: "💻",
      year: "2024",
      achievements: ["Certification in Full-Stack Web Development"],
      skills: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "REST API", "Firebase", "Tailwind CSS"],
      description:
        "Completed an extensive MERN Stack development program focused on building full-stack web applications. Developed real-world projects using MongoDB, Express.js, React, and Node.js. Gained practical experience with RESTful APIs, JWT authentication, Firebase integration, and modern UI design with Tailwind CSS.",
    },

    {
      degree: "IT scholarship programmed",
      school: "ISDB-BISEW",
      mascot: "📘",
      year: "2022-2023",
      achievements: ["result: Pass", "Subject: JAVA"],
      skills: ["JAVA", "SpringBoot", "Angular", "Oracle", "MySQL"],
      description:
        "Successfully completed a competitive one-year IT Scholarship Program, specializing in Java and enterprise application development. Developed full-stack projects using Spring Boot and Angular, and built strong foundations in database management with Oracle and MySQL.",
    },
    {
      degree: "Fundamentals of Digital Marketing",
      school: "Google Digital Garage",
      mascot: "🌐",
      year: "2021",
      achievements: ["Certification by Google"],
      skills: ["SEO", "SEM", "Content Marketing", "Email Marketing", "Analytics"],
      description:
        "Completed Google's Fundamentals of Digital Marketing course, covering essential strategies such as SEO, SEM, content marketing, email campaigns, and web analytics. Developed a strong understanding of how to build and grow an online presence effectively.",
    }, {
      degree: "Graphic Design",
      school: "Trend Up IT",
      mascot: "🎨",
      year: "2020",
      achievements: ["Certification in Graphic Design"],
      skills: ["Adobe Photoshop", "Illustrator", "Logo Design", "Social Media Design", "Branding"],
      description:
        "Completed a practical course on graphic design focusing on creative visual content for digital platforms. Gained hands-on experience with Adobe Photoshop and Illustrator, and worked on projects involving branding, logo design, and social media graphics.",
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="min-h-screen relative overflow-hidden py-40 bg-[#04081A]">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#04081A] via-transparent to-[#04081A]" />
        <div className="absolute inset-0 border border-white/[0.05] grid grid-cols-2 md:grid-cols-4" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-6">
            Educational Journey
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Discover how academic excellence shapes innovative thinking and
            professional growth.
          </p>
        </motion.div>
        <h2 className="mb-6 text-2xl md:text-4xl font-black text-transparent bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-center ">Professional Certification</h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {professionaleducationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`relative border rounded-xl p-8 transition-all duration-300 bg-gray-900/50 backdrop-blur-sm ${hoveredIndex === index
                ? "border-teal-500 scale-[1.02]"
                : "border-blue-400/20"
                }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{edu.mascot}</span>
                    <h3 className="text-2xl font-bold text-white">
                      {edu.degree}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-300 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-teal-500" />
                    {edu.school}
                  </p>
                  <p className="text-gray-400 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {edu.year}
                  </p>
                </div>

                <p className="text-gray-300 text-sm italic border-l-2 border-teal-500 pl-3">
                  {edu.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-yellow-500" />
                    Key Achievements
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 flex items-center gap-2 text-sm"
                      >
                        <Award className="w-4 h-4" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {edu.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded bg-blue-500/10 text-blue-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

            <h2 className="text-2xl md:text-4xl font-black text-transparent bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-center ">Educational Certification</h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
      
          </motion.div>
          {/* professional certification */}
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`relative border rounded-xl p-8 transition-all duration-300 bg-gray-900/50 backdrop-blur-sm ${hoveredIndex === index
                ? "border-teal-500 scale-[1.02]"
                : "border-blue-400/20"
                }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{edu.mascot}</span>
                    <h3 className="text-2xl font-bold text-white">
                      {edu.degree}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-300 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-teal-500" />
                    {edu.school}
                  </p>
                  <p className="text-gray-400 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {edu.year}
                  </p>
                </div>

                <p className="text-gray-300 text-sm italic border-l-2 border-teal-500 pl-3">
                  {edu.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-yellow-500" />
                    Key Achievements
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 flex items-center gap-2 text-sm"
                      >
                        <Award className="w-4 h-4" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {edu.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded bg-blue-500/10 text-blue-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
