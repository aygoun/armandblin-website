/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: false // set to false to use static SVG
};

// Personal Projects
const projects = {
  title: "Projects",
  subtitle: "...",
  projects: [
    {
      image: require("./assets/images/viguier.png"),
      projectName: "Maître Constance Viguier",
      projectDesc: "A small website (using PHP/SQL) to illustrate the work of the bailiff Maître Constance Viguier.",
      projectView: "👀 by ~400 visitors/month",
      projectStatus: "[PROJECT DONE]",
      projectSecondStatus: "",
      footerDisplay: true,
      footerLink: [
        {
          name: "Show project",
          url: "http://r.armandblin.com/?c=viguier"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/classroom.png"),
      projectName: "Classroom",
      projectDesc: "A website (using PHP/SQL) to generate class lists from my high school.",
      projectView: "👀 by ~480 unique visitors",
      projectStatus: "[PROJECT DONE]",
      projectSecondStatus: "",
      footerDisplay: true,
      footerLink: [
        {
          name: "Show project",
          url: "http://r.armandblin.com/?c=classroom"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/domainedesaintclair.png"),
      projectName: "Domaine de Saint Clair",
      projectDesc: "A website to give visibility to a bed and breakfast.",
      projectView: "👀 by +1300 visitors/month",
      projectStatus: "[PROJECT DONE]",
      projectSecondStatus: "",
      footerDisplay: true,
      footerLink: [
        {
          name: "Show project",
          url: "http://r.armandblin.com/?c=saintclair"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/peewix.png"),
      projectName: "peewix",
      projectDesc: "A social network (developed in Swift 5) which allows users to create, organize, manage and invite colleagues and friends to events.",
      projectView: "Has been Top 142/200 iOS Social Media Ranking",
      projectStatus: "Version 1 : [PROJECT DONE]",
      projectSecondStatus: "Version 2: [IN DEVELOPMENT]",
      footerDisplay: false,
      footerLink: [
        {
          name: "Show project",
          url: ""
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const greeting = {
  username: "Armand Blin",
  title: "Hi, I'm Armand",
  subTitle: emoji(
    "A passionate Developer 💻 !"
  ),
  resumeLink:
    "https://google.com/",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/armandblin/",
  github: "https://github.com/aygoun",
  gmail: "contact@armandblin.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "My skills",
  subTitle: "THIS IS SOME OF MY SKILLS",
  skills: [
    emoji(
      "🔥 Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji(
      "🔥 Integration of third party services such as Firebase"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    /*{
      skillName: "csharp",
      fontAwesomeClassname: "fab fa-csharp"
    },*/
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "EPITA Paris",
      logo: require("./assets/images/epita.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2021 - June 2026",
      desc: "All of my EPITA projects are on my github.",
      descBullets: [
        "Actually in first year of this degree."
      ]
    },
    {
      schoolName: "Lycée La Nativité",
      logo: require("./assets/images/la_nativite.jpg"),
      subHeader: "French Baccalaureate with Mathematics and Chemistry-Physics ",
      duration: "June 2021"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend / Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "60%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Clever Programmer",
      companylogo: require("./"),
      date: "September 2020 – Present",
      desc:
        "Changing lives of developers one line of code at a time.",
      descBullets: [
        "Custom building applications",
        "Coaching",
        "Streaming live on YouTube",
        "Creating tutorials"
      ]
    },
    {
      role: "Product Owner (PSD2)",
      company: "Erste Bank",
      companylogo: require("./"),
      date: "July 2019 – September 2020",
      desc:
        "I lead software developers building the API for the bank in order to fulfil the PSD2 regulation requirements."
    },
    {
      role: "Junior Information Security & Systems Representative",
      company: "Vodafone",
      companylogo: require("./"),
      date: "November 2018 – July 2019",
      desc:
        "I've conducted internal audit making sure the organization is compliant with the GDPR."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "drakosi99", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME OF MY PROJECTS ",
  projects: [
    {
      image: require("./"),
      projectName: "Domaine de Saint Clair",
      projectDesc: "A guest house located in Aix en Provence",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://r.armandblin.com/?c=saintclair"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./"),
      projectName: "Viguier",
      projectDesc: "A judicial officer located in the Hautes-Alpes",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://r.armandblin.com/?c=viguier"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./"),
      footerLink: [
        {
          name: "Certification",
          url:
            ""
        },
        {
          name: "Award Letter",
          url:
            ""
        },
        {
          name: "Google Code-in Blog",
          url:
            ""
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url:
            ""
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: ""
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    ""
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  //number: "(323) 768 0674",
  email_address: "contact@armandblin.com"
};

// Twitter Section

const twitterDetails = {
  userName: "#", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  projects,
  greeting,
  socialMediaLinks,
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
  twitterDetails
};
