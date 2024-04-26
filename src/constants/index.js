import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
    threejs,
    logo,
    tfl,
    amazon,
    ei,
    psl,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "ML Engineer",
      icon: web,
      skills:[
        "Python",
        "ML ops",
        "ML & DL",
        "OpenCV",
        "TensorFlow",
        "Scikit-learn",
        ,
      ],
    },
    {
      title: "React.js Developer",
      icon: mobile,
      skills: ["CSS","HTML", "React.js", "Bootstrap","JavaScript", "Tailwind CSS"],
    },
    {
      title: "Backend Developer",
      icon: backend,
      skills: ["Node.js","Express.js","MongoDB","PostgreSQL","JWT, OAuth","RESTful APIs"],
    },
    {
      title: "DevOps Engineer",
      icon: creator,
      skills: ["Git","AWS","CI/CD","Docker","Jenkins","Kubernetes"],
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "tensorflow",
      icon: tfl,
    },
    {
      name: "PostgreSQL",
      icon: psl,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Portfolio Website",
      company_name: "Personal Portfolio",
      icon: logo,
      iconBg: "#000000",
      date: "Mar 2024 - Apr 2024",
      points: [
        "Developed and maintained a professional portfolio website using Vite.js, HTML, CSS, and JavaScript to showcase my skills, experience, and projects.",
        "Designed, developed, and maintained the portfolio website independently.",
        "Evolving over time to reflect my growing skills and experience, such as adding new projects, updating design elements, or expanding functionality."
    ],
    },
    {
      title: "Speed Breaker & Pothole Detection",
      company_name: "Research",
      icon: tfl,
      iconBg: "#000000",
      date: "Jan 2024 - Apr 2024",
      points: [
        "Developed an app using computer vision techniques including YOLOV5 and Faster R-CNN to detect speed breakers and potholes on roads.",
        "The system aims to enhance road safety by providing real-time alerts to drivers, enabling them to take necessary precautions.",
        "Programming Languages: Python.",
        "Libraries: Pandas, Numpy, OpenCV.",
        "Frameworks: Tensorflow.",
      ],
    },
    {
      title: "Amazon_Clone",
      company_name: "Amazon",
      icon: amazon,
      iconBg: "#000000",
      date: "Aug 2023 - Dec 2023",
      points: [
        "Developed a replica of the Amazon e-commerce platform with a focus on replicating key features and functionalities.",
        " Implemented user authentication, product search, and shopping cart management functionalities to mimic the original platform's user experience.",
        "Frontend: HTML, CSS, JavaScript, React.js.",
        "Backend: Node.js, Express.js.",
        "Database: MongoDB.",
      ],
    },
    {
      title: "DelveFlow",
      company_name: "Educational Streaming Platform",
      icon: ei,
      iconBg: "#000000",
      date: "Feb 2023 - Present",
      points: [
        "Led the development of an innovative education streaming platform aimed at providing high-quality educational content to students and professionals in various fields.",
        "Spearheaded the project as the lead developer, overseeing all aspects of development from conceptualization to deployment.",
        "Utilized cutting-edge technologies such as Node.js, MongoDB, JavaScript, React, and streaming technologies to develop a robust and scalable platform.",
      ],
    },
  ];
  
  // const testimonials = [
  //   {
  //     testimonial:
  //       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //     name: "Sara Lee",
  //     designation: "CFO",
  //     company: "Acme Co",
  //     image: "https://randomuser.me/api/portraits/women/4.jpg",
  //   },
  //   {
  //     testimonial:
  //       "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //     name: "Chris Brown",
  //     designation: "COO",
  //     company: "DEF Corp",
  //     image: "https://randomuser.me/api/portraits/men/5.jpg",
  //   },
  //   {
  //     testimonial:
  //       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //     name: "Lisa Wang",
  //     designation: "CTO",
  //     company: "456 Enterprises",
  //     image: "https://randomuser.me/api/portraits/women/6.jpg",
  //   },
  // ];
  
  // const projects = [
  //   {
  //     name: "Car Rent",
  //     description:
  //       "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
  //     tags: [
  //       {
  //         name: "react",
  //         color: "blue-text-gradient",
  //       },
  //       {
  //         name: "mongodb",
  //         color: "green-text-gradient",
  //       },
  //       {
  //         name: "tailwind",
  //         color: "pink-text-gradient",
  //       },
  //     ],
  //     image: carrent,
  //     source_code_link: "https://github.com/",
  //   },
  //   {
  //     name: "Job IT",
  //     description:
  //       "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
  //     tags: [
  //       {
  //         name: "react",
  //         color: "blue-text-gradient",
  //       },
  //       {
  //         name: "restapi",
  //         color: "green-text-gradient",
  //       },
  //       {
  //         name: "scss",
  //         color: "pink-text-gradient",
  //       },
  //     ],
  //     image: jobit,
  //     source_code_link: "https://github.com/",
  //   },
  //   {
  //     name: "Trip Guide",
  //     description:
  //       "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //     tags: [
  //       {
  //         name: "nextjs",
  //         color: "blue-text-gradient",
  //       },
  //       {
  //         name: "supabase",
  //         color: "green-text-gradient",
  //       },
  //       {
  //         name: "css",
  //         color: "pink-text-gradient",
  //       },
  //     ],
  //     image: tripguide,
  //     source_code_link: "https://github.com/",
  //   },
  // ];
  
  export { services, technologies, experiences };