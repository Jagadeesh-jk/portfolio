"use client";

import React, { useState, useEffect, useRef } from "react";
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
  ArrowUpCircleIcon,
  MenuIcon,
} from "lucide-react";
import Image from "next/image";
import profilePic from "../images/jagadeesh.jpg";

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
  const [showGoToTop, setShowGoToTop] = useState(false);
  const [isHeroSticky, setIsHeroSticky] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleJobDetails = (index: number) => {
    setExpandedJob(expandedJob === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroHeight = heroRef.current?.offsetHeight || 0;
      setShowGoToTop(scrollPosition > 200);
      setIsHeroSticky(scrollPosition > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileMenuOpen(false);
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
          ? "bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800"
          : "bg-gradient-to-br from-blue-50 via-white to-blue-100"
      } text-gray-900 dark:text-white`}
    >
      <header
        className={`transition-all duration-300 ${
          isHeroSticky
            ? "fixed top-0 left-0 right-0 z-50 shadow-lg"
            : "absolute -top-full"
        } ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}
      >
        <div className="max-w-4xl mx-auto p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Image
                src={profilePic}
                alt="Kasu Jagadeesh"
                className="w-12 h-12 rounded-full object-cover border-2 border-blue-500"
              />
              <div>
                <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                  Kasu Jagadeesh
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  (65) 91554309
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  kasu.jagadeesh@gmail.com
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-opacity-20 bg-gray-600 hover:bg-opacity-30 transition-colors"
                aria-label={
                  theme === "dark"
                    ? "Switch to light mode"
                    : "Switch to dark mode"
                }
              >
                {theme === "dark" ? (
                  <SunIcon className="w-6 h-6" />
                ) : (
                  <MoonIcon className="w-6 h-6" />
                )}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 md:hidden"
                aria-label="Toggle menu"
              >
                <MenuIcon className="w-6 h-6" />
              </button>
            </div>
            <nav
              className={`${
                mobileMenuOpen ? "flex" : "hidden"
              } md:flex flex-col md:flex-row absolute md:relative top-full left-0 right-0 md:top-auto bg-white dark:bg-gray-800 md:bg-transparent p-4 md:p-0 space-y-2 md:space-y-0 md:space-x-4 md:items-center`}
            >
              <a
                href="#skills"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-blue-500 transition-colors"
              >
                Skills
              </a>
              <a
                href="#experience"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-blue-500 transition-colors"
              >
                Experience
              </a>
              <a
                href="#education"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-blue-500 transition-colors"
              >
                Education
              </a>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  toggleTheme();
                  setMobileMenuOpen(false);
                }}
                className="p-2 rounded-full bg-opacity-20 bg-gray-600 hover:bg-opacity-30 transition-colors md:hidden"
                aria-label={
                  theme === "dark"
                    ? "Switch to light mode"
                    : "Switch to dark mode"
                }
              >
                {theme === "dark" ? (
                  <SunIcon className="w-6 h-6" />
                ) : (
                  <MoonIcon className="w-6 h-6" />
                )}
              </button>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto p-8 pb-16">
        <main>
          <section ref={heroRef} className="mb-12">
            <div className="flex flex-col md:flex-row items-center justify-between mb-8">
              <Image
                src={profilePic}
                alt="Kasu Jagadeesh"
                className="w-40 h-40 rounded-full object-cover border-2 border-blue-500"
              />
              <div className="text-center md:text-left">
                <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                  Kasu Jagadeesh
                </h1>
                <p className="text-xl mb-4">Full Stack Developer</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-gray-500 dark:text-gray-300">
                  <div className="flex items-center">
                    <MailIcon className="w-5 h-5 mr-2" />
                    <a
                      href="mailto:kasu.jagadeesh@gmail.com"
                      className="hover:text-blue-500 transition-colors"
                    >
                      kasu.jagadeesh@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <PhoneIcon className="w-5 h-5 mr-2" />
                    <a
                      href="tel:+6591554309"
                      className="hover:text-blue-500 transition-colors"
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
                  ? "bg-gradient-to-r from-gray-700 to-gray-600"
                  : "bg-gradient-to-r from-blue-100 to-white"
              } p-6 rounded-lg shadow-lg`}
            >
              <h2 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                Objective
              </h2>
              <p
                className={`${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                } leading-relaxed`}
              >
                I am a highly motivated computer science professional with over
                20 years of experience, known for delivering high-quality web
                applications that meet diverse client needs. I have extensive
                expertise in both front-end and back-end development, along with
                a strong background in database management. I thrive in dynamic
                and fast-paced environments, where innovation and
                problem-solving are key. Passionate about staying updated with
                the latest industry trends, I am eager to take on new
                challenges, contribute to the success of a forward-thinking
                organization, and continue advancing in my career.
              </p>
            </div>
          </section>

          <section id="skills" className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
              Technical Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {technicalSkills.map((skill, index) => (
                <div
                  key={index}
                  className={`${
                    theme === "dark"
                      ? "bg-gradient-to-r from-gray-700 to-gray-600"
                      : "bg-gradient-to-r from-blue-100 to-white"
                  } p-4 rounded-lg flex items-center space-x-3 transition-all duration-300 hover:shadow-lg`}
                >
                  {skill.icon}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
              Soft Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className={`${
                    theme === "dark"
                      ? "bg-gradient-to-r from-gray-700 to-gray-600"
                      : "bg-gradient-to-r from-blue-100 to-white"
                  } p-4 rounded-lg flex items-center space-x-3 transition-all duration-300 hover:shadow-lg`}
                >
                  {skill.icon}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </section>

          <section id="experience" className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
              Work Experience
            </h2>
            <div className="space-y-6">
              {jobs.map((job, index) => (
                <div
                  key={index}
                  className={`${
                    theme === "dark"
                      ? "bg-gradient-to-r from-gray-700 to-gray-600"
                      : "bg-gradient-to-r from-blue-100 to-white"
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
                        theme === "dark"
                          ? "text-gray-300 bg-gray-800"
                          : "text-gray-700 bg-white"
                      } space-y-2 animate-fadeIn rounded-lg p-4 shadow-lg`}
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

          <section id="education">
            <h2 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
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
      {showGoToTop && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 p-2 rounded-full ${
            theme === "dark"
              ? "bg-gray-700 hover:bg-gray-600"
              : "bg-blue-100 hover:bg-blue-200"
          } transition-colors duration-300 shadow-lg`}
          aria-label="Go to top"
        >
          <ArrowUpCircleIcon
            className={`w-8 h-8 ${
              theme === "dark" ? "text-white" : "text-blue-600"
            }`}
          />
        </button>
      )}
    </div>
  );
}
