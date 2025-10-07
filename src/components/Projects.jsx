import React, { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Freelance Client Multi-Page Dashboard",
    description: `A responsive admin dashboard interface designed for a fictional freelance client, built with React.js, React Router, TailwindCSS, and Chart.js/Recharts.
                  The dashboard includes:
                  Overview Page with summary cards (Total Projects, Earnings, Tasks Due), recent activity, and basic statistics.
                  Projects Page displaying a structured list of projects with status and deadlines.
                  Profile Settings Page (optional) for updating personal details like name, email, and password placeholders.
                  The layout features a persistent sidebar and top header, enabling seamless navigation across pages using React Router. Simple data visualizations, such as bar and pie charts, provide insights into earnings and tasks.
                  Optimized for both desktop and mobile, the app also includes a notification dropdown showing the most recent user activities (mock data).
                  This project demonstrates skills in building multi-page React apps, implementing reusable layouts, integrating charts, and ensuring responsive UI/UX.`,
    category: "Web Development",
    tags: ["React", "Next.js", "Charts" , "Tailwindcss"],
    images: ["/images/free.png", "/images/free2.png", "/images/free3.png", "/images/free4.png"],
    github: "https://github.com/abdulhannant-ai/FreelanceHUb.git",
    demo: "https://freelance-hub-bay.vercel.app/",
  },
  {
    id: 2,
    title: "Job Application Tracker",
    description: `A full-featured job application tracker built with React.js, React Router, Context API, and TailwindCSS, designed to help users manage and monitor their job search process.
                  The app includes a dashboard to view saved applications with company name, job title, status, and applied date, an Add Job page with a structured form, and a Job Details page for editing or deleting applications. Data is stored in localStorage for persistence, ensuring users can continue where they left off without any backend setup.
                  The layout is fully responsive, optimized for both desktop and mobile users. Additionally, users can export their applications as a .json file for backup and import existing data to restore progress.
                  This project showcases state management, routing, responsive design, and data persistence in a modern React environment.`,
    category: "Web Development",
    tags: ["ReactJs", "Tailwindcss", "React Route","Context API"],
    images: ["/images/1.png", "/images/2.png", "/images/3.png"],
    github: "https://github.com/abdulhannant-ai/Job-Tracker.git",
    demo: "https://job-tracker-nu-ten.vercel.app/",
  },
  {
    id: 3,
    title: "Personal Blog Homepage",
    description: `A clean and responsive personal blog homepage built with HTML, CSS, and JavaScript.
                  The homepage features:
                  A simple header displaying the blog title.
                  A card-based layout showcasing blog posts with title, image, description, and date.
                  Category filters to view posts by type (e.g., Tech, Travel, Food).
                  Pagination support to limit the number of posts per page.
                  Bonus feature: A search bar that allows users to filter posts by keywords for quick access.
                  This project highlights skills in front-end development, dynamic content filtering, responsive design, and user-friendly UI layouts.`,
    category: "Web Development",
    tags: ["HTML", "CSS", "JavaScript"],
    images: ["/images/blog (1).png", "/images/blog (2).png", "/images/blog (3).png", "/images/blog (4).png"],
    github: "https://github.com/abdulhannant-ai/Blogs_Site.git",
    demo: "https://blogs-site-nu.vercel.app/",
  },
   {
    id: 4,
    title: "TaskFlow – One-Page Website",
    description: `A modern and responsive one-page website designed for a fictional productivity app called TaskFlow.
                  The page includes:
                  Hero section with app name, tagline, and call-to-action button.
                  Features section highlighting 3 core benefits with icons and descriptions.
                  User testimonials showcasing positive reviews.
                  Pricing plans with clear options (Free, Pro, Team).
                  Footer with contact links and social media icons.
                  The website is built using HTML, CSS/Tailwind, and JavaScript, with a clean, mobile-first design.
                  Bonus feature: Smooth scroll animations that enhance user experience.
                  This project showcases strengths in responsive design, landing page development, and UI/UX principles.`,
    category: "Web Development",
    tags: ["HTML", "CSS", "JavaScript"],
    images: ["/images/Taskflow (1).jpeg", "/images/Taskflow (2).jpeg", "/images/Taskflow (3).jpeg"],
    github: "https://github.com/abdulhannant-ai/Taskflow.git",
    demo: "https://taskflow-orpin-seven.vercel.app/",
  },
   {
    id: 5,
    title: "Sanovia Hospital Management System with AI Chatbot",
    description: `Sanovia HMS is a comprehensive hospital management system built using .NET (three-tier architecture) with a MySQL database. The system streamlines hospital operations by managing patients, doctors, appointments, billing, pharmacy, insurance, and staff through an intuitive dashboard.
                  A key feature is the integrated AI chatbot, which reduces staff workload by providing instant access to patient records, scheduling details, and generating automated PDF reports with AI-powered health improvement suggestions.
                  The system includes:
                  User Authentication: Role-based login (Doctor, Admin, Staff, Patient) with auto-suggested usernames.
                  Patient & Doctor Management: Validations (e.g., DoB must be in the past, appointment dates in present/future).
                  Appointments: Automatically marked as Complete or Cancelled based on medical record updates.
                  Pharmacy & Insurance: Auto-expiry detection for medicines and insurance.
                  Billing & Records: Validated billing system and detailed medical history management.
                  AI Chatbot: Provides quick data retrieval and AI-driven patient care insights.
                  This project demonstrates end-to-end hospital management with a focus on automation, validation, and AI assistance.`,
    category: ".NET",
    tags: ["HTML", "CSS", "JavaScript", "C#", ".Net (Three-tier Architecture)", "ASP.NET", "MySQL"],
    images: ["/images/hms 1.jpg", "/images/hms 2.jpg", "/images/hms 3.jpg", "/images/hms 4.jpg", "/images/hms 5.jpg", "/images/hms 6.jpg", "/images/hms 7.jpg", "/images/hms 8.jpg", "/images/hms 9.jpg", "/images/hms 10.jpg", "/images/hms 11.jpg", "/images/hms 12.jpg", "/images/hms 12.jpg", "/images/hms 13.jpg", "/images/hms 14.jpg"],
    github: "",
    demo: "",
  },

  {
    id: 6,
    title: "University Ranking Website",
    description: `Project Description:
                A clean, professional website that displays rankings and information for universities in Pakistan. The platform helps students compare institutions and make informed education decisions.
                Features:
                University rankings with sorting and filtering
                Detailed university profiles with programs and contact info
                Comparison tool to analyze multiple universities
                Resources section with blog, career guidance, events, and news
                Responsive design for all devices
                Ad integration for monetization
                Technical Details:
                Built with HTML, CSS, and JavaScript
                Serverless architecture
                SEO-optimized structure
                Professional design with consistent color scheme
                Purpose:
                Provides centralized information about Pakistani universities to help students in their education planning process.`,
    category: "Web Development",
   tags: ["HTML", "CSS", "JavaScript"],
    images: ["/images/uni1.png", "/images/uni2.png", "/images/uni3.png", "/images/uni4.png", "/images/uni5.png", "/images/uni6.png", "/images/uni7.png", "/images/uni8.png", "/images/uni9.png", "/images/uni10.png", "/images/uni11.png", "/images/uni12.png"],
    github: "https://github.com/abdulhannant-ai/Uni-Ranking.git",
    demo: "https://uni-ranking-tau.vercel.app/",
  },

];

const categories = ["All", "Web Development", ".NET"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const closeModal = () => {
    setSelectedProject(null);
    setImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

  return (
    <section id="projects" className="py-20 bg-green-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-800 mb-12">
          My Projects
        </h2>
        <div className="flex justify-center gap-3 flex-wrap mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-lg font-medium transition duration-300 shadow-sm ${
                selectedCategory === cat
                  ? "bg-teal-700 text-white"
                  : "bg-gray-200 text-gray-600 hover:bg-teal-600 hover:text-white"
              }`}
              aria-label={`Filter by ${cat}`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300 overflow-hidden"
            >
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 font-medium mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs rounded-full bg-teal-100 text-teal-800 font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="px-5 py-2 rounded-lg bg-teal-600 text-white font-medium hover:bg-teal-600 active:bg-teal-800 transition duration-300"
                  aria-label={`View details for ${project.title}`}
                >
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
            role="dialog"
            aria-labelledby="project-modal-title"
          >
            <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full relative p-8 overflow-y-auto max-h-[90vh]">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-gray-200 text-gray-600 hover:bg-red-500 hover:text-white rounded-full p-2 transition duration-300"
                aria-label="Close modal"
              >
                ✕
              </button>
              <div className="relative mb-6">
                <img
                  src={selectedProject.images[imageIndex]}
                  alt={`${selectedProject.title} screenshot ${imageIndex + 1}`}
                  className="w-full h-72 md:h-96 object-contain rounded-lg shadow-sm"
                />
                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-teal-700/70 text-white p-3 rounded-full hover:bg-teal-600 transition duration-300"
                  aria-label="Previous image"
                >
                  ◀
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-teal-700/70 text-white p-3 rounded-full hover:bg-teal-600 transition duration-300"
                  aria-label="Next image"
                >
                  ▶
                </button>
              </div>
              <h3 id="project-modal-title" className="text-2xl font-semibold text-gray-800 mb-3">
                {selectedProject.title}
              </h3>
              <p className="text-gray-600 font-medium mb-5">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {selectedProject.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm rounded-full bg-teal-100 text-teal-800 font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            <div className="flex justify-center space-x-4">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-teal-700 text-white rounded-lg font-medium hover:bg-teal-600 transition duration-300"
                    aria-label={`View ${selectedProject.title} on GitHub`}
                  >
                    GitHub
                  </a>
                )}
                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-transparent border border-teal-700 text-teal-700 rounded-lg font-medium hover:bg-teal-50 transition duration-300"
                    aria-label={`View live demo of ${selectedProject.title}`}
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
