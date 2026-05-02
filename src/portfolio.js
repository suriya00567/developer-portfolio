/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Suriya Gayathri B S",
  title: "Hi all, I'm Suriya Gayathri",
  subTitle: emoji(
    "Computer Science Undergraduate | Full Stack & AI Enthusiast"
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/suriyagayathri",
  linkedin: "https://www.linkedin.com/in/suriyagayathri",
  gmail: "10suriyagayathri@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Skills",
  subTitle: "Python, Java, JavaScript, MERN Stack, TensorFlow, PyTorch, FastAPI, MongoDB, SQL, React, Node.js",
  skills: [
    emoji("⚡ Building responsive MERN stack applications"),
    emoji("⚡ Developing Machine Learning models with TensorFlow and PyTorch"),
    emoji("⚡ Creating efficient REST APIs with FastAPI and Node.js")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: []
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Technical Development Intern",
      company: "Techsnapie",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "Past",
      desc: "Worked as a Technical Development Intern focused on full stack development and WordPress.",
      descBullets: [
        "MERN stack development",
        "Backend APIs (Node.js, Express)",
        "WordPress work"
      ]
    },
    {
      role: "AI Intern",
      company: "Edunet Foundation x Shell",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "Past",
      desc: "Interned as an AI researcher focusing on optimization algorithms and data analysis.",
      descBullets: [
        "PSO-based optimization",
        "Data analysis with NumPy, Pandas"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME OF MY RECENT WORK",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "NeuroAdvisor – Brain Tumor Detection",
      projectDesc: "CNN model (TensorFlow), Grad-CAM explainability, FastAPI backend with JWT.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/suriyagayathri/neuroadvisor"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Adversarial Attacks on DNN",
      projectDesc: "FGSM on ResNet-18, PyTorch, Gradio interface.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/suriyagayathri/adversarial-attacks"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Subscription Management System",
      projectDesc: "MERN stack, Built in 24 hours (Hackathon), Handles users, plans, billing logic.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/suriyagayathri/subscription-management"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements"),
  subtitle: "Hackathons and Event Coordination",

  achievementsCards: [
    {
      title: "Hackathon Winner",
      subtitle: "Sri Shakthi Institute",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Hackathon Winner",
      footerLink: []
    },
    {
      title: "Coordinator – Oblivion 25",
      subtitle: "Successfully coordinated event with 200+ participants",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Coordinator",
      footerLink: []
    },
    {
      title: "Coordinator – Texperia 26",
      subtitle: "Event coordinator and conducted Agentic AI workshop",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "Coordinator",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "",
  email_address: "10suriyagayathri@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
