
export const profile_pic_url = 'images/profile.png'
export const email_address = "mh155@rice.edu"
export const resume_url = 'docs/resume.pdf'
// import { Link } from "gatsby"

export const achievements = [
    {title: "Huawei Koc university mobile development competition (ranked <strong>1<sup>st</sup></strong>)",
    year: 2021},
    {title: "Project of the year award in software engineering analysis and design course",
    year: 2020},

    {title: "Top 100 worldwide in IEEEXtreme Programming Contest (ranked <strong>2<sup>nd</sup></strong> in Turkey).",
    year: 2019},

    {title: "Damascus ACM College Programing Contest (ranked <strong>1<sup>st</sup></strong> for two years).",
    year: "2015 & 2016"},

    {title: "Honorable mention in Asia-Pacific Olympiad of Informatics (APIO)",
    year: 2016},
    
]

export const publications = [
  {title: "\"VidStyleODE: Disentangled Video Editing via StyleGAN and NeuralODEs\"",
  authors: "<strong> M. Haji Ali </strong>, A. Bond, T. Birdal, D. Ceylan, L. Karacan, E. Erdem, and A. Erdem",
  status : "Published at", 
  conference : "ICCV",
  year: 2023},
  {title: "\"Opera: Scalable Simulator for Distributed Systems\" [Demo Paper]",
  authors: "Y. H. Nazarabadi, <strong> M. Haji Ali </strong>, and N. Nayal",
  status : "Published at", 
  conference : "IEEE INFOCOMP",
  year: 2021},
]

export const news = [
  {
    title: "Joining Rice University",
    date: "August 2023",
    description: [
      "I am happy to start my PhD journey at Rice University under the supervision of Prof. <a href='https://vislang.ai/'>Vicente Roman</a>"]
  },

  {
    title: "Paper Acepted at ICCV 2023",
    date: "July 2023",
    description: [
      " Our paper <a href:'https://cyberiada.github.io/VidStyleODE/'>VidStyleODE</a> has been accepted at ICCV 2023"]
  },

  {
    title: "Joining CareX",
    date: "April 2023",
    description: [
      " I joined CareX to work on blood pressure estimation from videos"]
  },

  {
    title: "Participating at HashCode 2022",
    date: "February 2022",
    description: [
      "I am excited to participate in <a href:'https://codingcompetitions.withgoogle.com/hashcode/'>HashCode 2022</a>."
    ]
  },
  {
    title: "Joining a Teaching Assistant Position",
    date: "February 2022",
    description: [
      "I joined as an undergraduate teaching assistant of <a href='https://aykuterdem.github.io/classes/comp547/'> COMP 547 Deep Unsupervised Learning </a> for spring 2022."
    ]
  },
]
export const experience = [
  {
    title : "KUIS AI LAB Computer Vision Research Intern",
    location: "Istanbul, Turkey",
    subtitle: "“Text-guided image manipulation”. (Supervised by Prof. Aykut Erdem)",
    date: "July 2021 - July 2023",
    description: [
      "Leading an ongoing project on unsupervised disentangled image representation using multimodal neural networks.",
      "Lead a research project on video modeling and manipulation using StyleGAN2 and Latent ODEs.",
      "Implemented using Pytorch a baseline for text-guided image manipulation based on CLIP and TokenGAN"
    ],
  },
  {
    title: "Remote Part-Time Machine Learning Engineer at CareX",
    subtitle: "“Body vitals estimation from fignertip and face videos”",
    date: "Feb 2021 - Jan 2022, April 2023 - Aug 2023",
    location: "California, USA",
    description: [
      "Implemented a Pytorch and Tensorflow framework interface for integrating, training, and visualizing deep learning models",
      "Developed a reliable AI-based method for blood pressure estimation from fingertip videos",
      "Contributed to HRV estimation from fingertip videos technology, which was deployed in CareX’s SDK"
    ],
  },
  {
    title: "IUI LAB Resarch Intern",
    location: "Istanbul, Turkey",
    subtitle: "“Automated feedback for school assignements” (Supervised by Prof. Metin Sezgin)",
    date: "May 2020 - June 2021",
    description: [
      "Designed and implemented an unsupervised in Tensorflow a feedback system for sketch-based questions based on a novel transformer-based architecture",
    ],
  },
]

export const indep_projects = [

  {
    title : "Coolingo: ",
    subtitle: "An Android bot for teaching children English interactively",
    description: [
      "Developed a video chat-bot that combines several SOTA models effectively: BlenderBot 2.0, Google T5, MakeItTalk, FastSpeech2.0, and GPT3",
      "Deployed AI models on AWS lambda, EC2 instance, and a local server"
    ],
  },

  {
    title : "Video Continuous Implicit Representation ",
    subtitle: "",
    description: [
      "As a part of “advances in deep learning” course project, I implemented a new architecture using Pytorch for representing videos as an implicit function parameterized by a transformer architecture.",
    ],
  },
  {
    title : "Co-Founder of Yders: ",
    subtitle: "A platform that empowers university students and links them with school students to give them private tutoring at reasonable prices.",
    description: [
      "1st place in Startup Roadshow Istanbul 2019.",
    ],
  },
  {
    title : "Technical Skills & Tools: ",
    subtitle: "",
    description: [
      "Programming Languages And Tools: Python, C/C++, Java, Julia, MYSQL.",
      "Advanced algorithms, Data Structure, Computer Networking, Machine learning, Deep learning, and the basics of Web development, and Android development.",
      "Unix, LaTex, Web scraping, Git, LEGO Robotics, and Arduino."
    ],
  },
]



// TODO Add a couple lines about each projectexport 
export const projects = [
  {
    title: 'VidStyleODE: Disentangled Video Editing via StyleGAN and NeuralODEs',
    link: 'https://cyberiada.github.io/VidStyleODE/',
    image: 'figs/vidstyleode_teaser.jpg',
    date: 'July 2022 - Nov 2022',
    relevantSkills : ["Research", "PyTorch", "Generative Models", "Representation Learning"],
    desc:
      "During my internship at <a href='https://ai.ku.edu.tr/'>KUIS AI LAB</a>, I worked as the primary author on developing a novel framework for modeling videos using a pre-trained image generator's and a learned latent ODE, enabling a range of applications with high-resolution videos \
       such as image animation, guided motion and appearance manipulation, and temporal interpolation and extrapolation. This work was accepted to ICCV 2023. For more details, see the <a href='https://cyberiada.github.io/VidStyleODE/' target='_blank'>project page</a>"
  },

  {
    title: 'CooLingo: AI-powered Application for Interactive Language Learning',
    link: '#',
    image: 'figs/CooLingo.jpg',
    date: 'Feb 2022 - June 2022',
    relevantSkills : ["Andriod", "AI", "MLOps"],
    desc:
      "For my graduation project, I collaborated with my peers to develop a video chatbot Android application\
       that incorporates cutting-edge AI models to offer a tailored and interactive language-learning experience.\
      I am now volunteering with the <a href ='https://linguisticsjusticeleague.org'>Linguistics Justice League </a> to scale our application \
      and deliver it to refugee and immigrant youth living in the United States."
  },

  {
    title: 'Language-Guided Represetnation for Image Editting',
    link: 'https://ai.ku.edu.tr/',
    image: 'images/image-manipulation.png',
    date: 'July 2021 - Present',
    relevantSkills : ["Research", "PyTorch", "Generative Models", "Multimodal Representation Learning"],
    desc:
      "In this ongoing research project at <a href='https://ai.ku.edu.tr/'>KUIS AI LAB</a> under the supervision of <a href='https://aykuterdem.github.io/'> Prof. Aykut Erdem</a>, I am investigating how language can be used to learn an image representation that will facilitate more natural image editing." +
      "The project is in its final stage and planned to be submitted in March 2023"
  },
  {
    title: 'Self-Supervised Feedback System',
    link: 'https://github.com/MoayedHajiAli/Sketch-Feedback-System',
    image: 'images/sketch.gif',
    date: 'May 2020 - July 2021',
    relevantSkills : ["Research", "Python", "Deep learning", "Clustering algorithms", "Self-supervised learning"],
    desc:
    "During my research internship at the <a href='https://iui.ku.edu.tr'>IUI LAB</a>, I worked under the supervision of " +
    "<a href='https://iui.ku.edu.tr/people/'>Prof. Metin Sezgin</a> on designing a self-supervised feedback system for sketch-based open-ended questions."
    +" The project is based on <a href='https://arxiv.org/abs/2002.10381'>Sketchformer</a> for object-to-object alignment and a clustering-based approach for object-level segmentation."
    + ' The shared video is a sample of transforming student answer (bottom-left corner) to the correct answer (upper-right corner)',
  },

  {
    title: 'Opera: Distributed Systems Simulator',
    image: 'images/dashboard_sample.png',
    link: 'https://github.com/MoayedHajiAli/Opera',
    date: 'May 2020 - March 2021',
    relevantSkills : ["Software Engineering", "Java", "Computer networking", "Docker"],
    desc:
      'Opera is an offline simulator for distributed systems. Opera provides an integrative and easy-to-use interface for running, testing, and analysing distributed systems on various protocols such as TCP, JavaRMI, and UDP.'+
      " The work was publish as a demo paper at <a href='https://ieeexplore.ieee.org/document/9484524'> IEEE INFOCOMP Conference</a>"
  },
  
  {
    title: 'KuViD 2021: The winner of Best Software engineering & desing course project',
    link: 'https://github.com/MoayedHajiAli/KUvid-302',
    image: 'images/game.gif',
    date: 'Sep 2020 - Jan 2021',
    relevantSkills : ["Software Engineering", "Java", "Design patterns"],
    desc:
      'As a part of Koc University Software engineering & design course, I worked with a team of five students to develop an invader game.' +
      ' The project was meant to practice various design patters such as Decorator, Controller, Observor, and Visitor.' +
      'KuVid was awarded the best project of the year award'
  },

  {
    title: 'HuaweiQA: Huawei Androind Development Competition Winner',
    image: 'images/huawei.gif',
    link: 'https://github.com/MoayedHajiAli/HuaweiQA',
    date: 'Nov 2020 - Dec 2020',
    relevantSkills : ["Software Engineering", "Java", "Android Development"],
    center : true,
    desc:
      'HuaweiQA is an android application that enables teachers to create quizzes for students and track their overall scores.'
      + ' The application was meant to showcase using HMS Toolkit, and I received first place in Huawei Android Development Competition.' 
  },
];

