"use client";

import React, { useState, useEffect } from "react";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  MessageSquareIcon,
  BrainIcon,
  UsersIcon,
  ClockIcon,
  LinkedinIcon,
  GithubIcon,
  TwitterIcon,
  SunIcon,
  MoonIcon,
  CodeIcon,
  Globe2Icon,
  ServerIcon,
  DatabaseIcon,
} from "lucide-react";

type Theme = "dark" | "light";

function useTheme() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return { theme, toggleTheme };
}

export default function EnhancedColorfulPortfolio() {
  const [expandedJob, setExpandedJob] = useState<number | null>(null);
  const { theme, toggleTheme } = useTheme();

  const toggleJobDetails = (index: number) => {
    setExpandedJob(expandedJob === index ? null : index);
  };

  const jobs = [
    {
      title: "Analyst Programmer (Full Stack)",
      company: "Julia Gabriel Centre Pte Ltd, Singapore",
      period: "August 2003 - Current",
      description:
        "Developed and maintained a comprehensive School Management System for Julia Gabriel Centre, Chengzhu Mandarin Centre & Chiltern House. Created various systems including Leave Management, Library Management, Online Event Registrations, and Accounting System.",
      technologies: "ColdFusion, MySQL, HTML, CSS, JavaScript, ReactJS",
    },
    {
      title: "Analyst Programmer",
      company:
        "Zenith InfoTech (Singapore) Pte Ltd. (Client – Singapore General Hospital)",
      period: "October 2001 - July 2003",
      description:
        "Developed the A&E Clinical Support System (A&ECSS) for Singapore General Hospital's Accident and Emergency Department. The system managed critical operations such as patient registration, triage, critical care, and admissions.",
      technologies: "VB 6.0, SQL Server 2000, Crystal Reports 8.5",
    },
    {
      title: "Application Engineer",
      company:
        "PENTASOFT International (Singapore) Pte Ltd. (Client – EzyHealth.com)",
      period: "Aug 2000 - Sep 2001",
      description:
        "Worked on Eclaims, an e-commerce solution automating medical claims processes. Developed EzyCare, a web application for managing health data, and Ezylink, an Enterprise Application Integration system.",
      technologies: "ASP, VB (COM), SQL Server, Crystal Reports",
    },
    {
      title: "Application Engineer",
      company: "Ocean Soft Development Center (P) Ltd, India",
      period: "Dec 1999 - Jul 2000",
      description:
        "Developed BUSINESS PACK, a system for a manufacturing company specializing in casting and molding. Contributed to AUTOMAN, a comprehensive solution for automotive dealers.",
      technologies: "Developer 2000, Oracle 7.3",
    },
    {
      title: "Programmer",
      company: "PENUEL InfoTech (P) Ltd, India",
      period: "Dec 1998 - Dec 1999",
      description:
        "Developed various systems including a Point of Sale (POS) System, Marketing Information System (MIS - 2000), Business Card Organizer (BCO - 2000), and an Aqua-Culture Cost Benefit Analysis project.",
      technologies: "Visual FoxPro, Developer 2000",
    },
  ];

  const softSkills = [
    { name: "Communication", icon: <MessageSquareIcon className="w-6 h-6" /> },
    { name: "Decision Making", icon: <BrainIcon className="w-6 h-6" /> },
    { name: "Leadership", icon: <UsersIcon className="w-6 h-6" /> },
    { name: "Teamwork", icon: <UsersIcon className="w-6 h-6" /> },
    { name: "Time Management", icon: <ClockIcon className="w-6 h-6" /> },
  ];

  const technicalSkills = [
    { name: "HTML", icon: <CodeIcon className="w-6 h-6" /> },
    { name: "CSS", icon: <CodeIcon className="w-6 h-6" /> },
    { name: "JavaScript", icon: <CodeIcon className="w-6 h-6" /> },
    { name: "React.js", icon: <CodeIcon className="w-6 h-6" /> },
    { name: "Node.js", icon: <ServerIcon className="w-6 h-6" /> },
    { name: "Next.js", icon: <Globe2Icon className="w-6 h-6" /> },
    { name: "ColdFusion", icon: <ServerIcon className="w-6 h-6" /> },
    { name: "MySQL", icon: <DatabaseIcon className="w-6 h-6" /> },
  ];

  return (
    <div
      className={`min-h-screen ${
        theme === "dark"
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-br from-gray-100 via-white to-gray-100"
      } text-gray-900 dark:text-white`}
    >
      <div className="max-w-4xl mx-auto p-8 pb-16">
        <header className="mb-12 relative">
          <button
            onClick={toggleTheme}
            className="absolute top-0 right-0 p-2 rounded-full bg-opacity-20 bg-gray-600 hover:bg-opacity-30 transition-colors"
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {theme === "dark" ? (
              <SunIcon className="w-6 h-6" />
            ) : (
              <MoonIcon className="w-6 h-6" />
            )}
          </button>
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <img
              src="/placeholder.svg?height=200&width=200&text=KJ"
              alt="Kasu Jagadeesh"
              className="w-48 h-48 rounded-full mb-4 md:mb-0 md:mr-8 object-cover border-4 border-gradient-to-r from-red-500 via-yellow-500 to-blue-500"
            />
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500">
                Kasu Jagadeesh
              </h1>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-gray-500 dark:text-gray-300">
                <div className="flex items-center">
                  <MailIcon className="w-5 h-5 mr-2" />
                  <a
                    href="mailto:kasu.jagadeesh@gmail.com"
                    className="hover:text-gray-700 dark:hover:text-white transition-colors"
                  >
                    kasu.jagadeesh@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <PhoneIcon className="w-5 h-5 mr-2" />
                  <a
                    href="tel:+6591554309"
                    className="hover:text-gray-700 dark:hover:text-white transition-colors"
                  >
                    (65) 91554309
                  </a>
                </div>
                <div className="flex items-center">
                  <MapPinIcon className="w-5 h-5 mr-2" />
                  <span>Singapore</span>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${
              theme === "dark"
                ? "bg-gradient-to-r from-red-900 via-yellow-900 to-blue-900"
                : "bg-gradient-to-r from-red-100 via-yellow-100 to-blue-100"
            } p-6 rounded-lg shadow-lg`}
          >
            <h2 className="text-2xl font-semibold mb-4">Objective</h2>
            <p
              className={`${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              } leading-relaxed`}
            >
              I am a highly motivated computer science professional with over 20
              years of experience, known for delivering high-quality web
              applications that meet diverse client needs. I have extensive
              expertise in both front-end and back-end development, along with a
              strong background in database management. I thrive in dynamic and
              fast-paced environments, where innovation and problem-solving are
              key. Passionate about staying updated with the latest industry
              trends, I am eager to take on new challenges, contribute to the
              success of a forward-thinking organization, and continue advancing
              in my career.
            </p>
          </div>
        </header>

        <main>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500">
              Technical Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {technicalSkills.map((skill, index) => (
                <div
                  key={index}
                  className={`${
                    theme === "dark"
                      ? "bg-gradient-to-r from-red-900 via-yellow-900 to-blue-900"
                      : "bg-gradient-to-r from-red-100 via-yellow-100 to-blue-100"
                  } p-4 rounded-lg flex items-center space-x-3 transition-all duration-300 hover:shadow-lg`}
                >
                  {skill.icon}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500">
              Soft Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className={`${
                    theme === "dark"
                      ? "bg-gradient-to-r from-red-900 via-yellow-900 to-blue-900"
                      : "bg-gradient-to-r from-red-100 via-yellow-100 to-blue-100"
                  } p-4 rounded-lg flex items-center space-x-3 transition-all duration-300 hover:shadow-lg`}
                >
                  {skill.icon}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500">
              Work Experience
            </h2>
            <div className="space-y-6">
              {jobs.map((job, index) => (
                <div
                  key={index}
                  className={`${
                    theme === "dark"
                      ? "bg-gradient-to-r from-red-900 via-yellow-900 to-blue-900"
                      : "bg-gradient-to-r from-red-100 via-yellow-100 to-blue-100"
                  } rounded-lg p-6 transition-all duration-300 ease-in-out hover:shadow-lg`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-semibold">{job.title}</h3>
                      <p
                        className={
                          theme === "dark" ? "text-gray-400" : "text-gray-600"
                        }
                      >
                        {job.company}
                      </p>
                    </div>
                    <button
                      onClick={() => toggleJobDetails(index)}
                      className={`${
                        theme === "dark"
                          ? "text-gray-400 hover:text-white"
                          : "text-gray-600 hover:text-gray-900"
                      } transition-colors`}
                      aria-expanded={expandedJob === index}
                      aria-controls={`job-details-${index}`}
                    >
                      {expandedJob === index ? (
                        <ChevronUpIcon className="w-6 h-6" />
                      ) : (
                        <ChevronDownIcon className="w-6 h-6" />
                      )}
                    </button>
                  </div>
                  <p
                    className={`text-sm ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    } mb-2`}
                  >
                    {job.period}
                  </p>
                  {expandedJob === index && (
                    <div
                      id={`job-details-${index}`}
                      className={`mt-4 ${
                        theme === "dark" ? "text-gray-300" : "text-gray-700"
                      } space-y-2 animate-fadeIn`}
                    >
                      <p>{job.description}</p>
                      <p className="text-sm">
                        <strong>Technologies:</strong> {job.technologies}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500">
              Education
            </h2>
            <ul
              className={`list-disc list-inside ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              <li>Bachelor of Science in Computers</li>
              <li>Post-Graduation Diploma in Computer Applications</li>
            </ul>
          </section>
        </main>
        <footer
          className={`mt-12 pt-8 border-t ${
            theme === "dark" ? "border-gray-700" : "border-gray-300"
          }`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className={theme === "dark" ? "text-gray-400" : "text-gray-600"}>
              &copy; 2023 Kasu Jagadeesh. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon
                  className={`w-6 h-6 ${
                    theme === "dark"
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  } transition-colors`}
                />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <GithubIcon
                  className={`w-6 h-6 ${
                    theme === "dark"
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  } transition-colors`}
                />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter Profile"
              >
                <TwitterIcon
                  className={`w-6 h-6 ${
                    theme === "dark"
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  } transition-colors`}
                />
              </a>
            </div>
            <p
              className={`text-sm ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              } mt-4 text-center`}
            >
              Built with React, Next.js, and Tailwind CSS
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
