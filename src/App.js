import { useRef } from "react";
import { useEffect, useState } from "react";
// import { HashRouter as Router, Routes, Route } from "react-router-dom";
// import { HashLink as Link } from "react-router-hash-link";

const pr = [
  {
    _id: "2",
    name: "Kanban Board",
    desc: "Kanban board app (Trello clone) built with MERN STACK",
    tags: ["NodeJS", "ExpressJS", "ReactJS", "MongoDB", "SocketIO"],
    image: "/img/mern-kanboard/mk2c.png",
    images: [
      "/img/mern-kanboard/mk1.png",
      "/img/mern-kanboard/mk2.png",
      "/img/mern-kanboard/mk3.png",
      "/img/mern-kanboard/mk4.png",
    ],
    link: {
      demo: "https://mern-kanboard.herokuapp.com",
      github: "https://github.com/hafidd/mern-kanboard",
    },
  },
  {
    _id: "3",
    name: "Media Server",
    desc: "Simple media server app",
    tags: ["Javascript", "ExpressJS", "Google Drive API"],
    image: "/img/media-server/ms4c.png",
    images: [
      "/img/media-server/ms1.png",
      "/img/media-server/ms2.png",
      "/img/media-server/ms3.png",
      "/img/media-server/ms4.png",
      "/img/media-server/ms5.png",
      "/img/media-server/ms6.png",
      "/img/media-server/ms7.png",
      "/img/media-server/ms8.png",
      "/img/media-server/ms9.png",
    ],
    link: {
      demo: false,
      github: "https://github.com/hafidd/simple-media-server",
    },
  },
  {
    _id: "1",
    name: "Simple Chat",
    desc: "Realtime chatting app built with MERN STACK",
    tags: ["NodeJS", "ExpressJS", "ReactJS", "MongoDB", "SocketIO"],
    image: "/img/mern-chat/mc2c.png",
    images: [
      "/img/mern-chat/mc1.png",
      "/img/mern-chat/mc2.png",
      "/img/mern-chat/mc3.png",
      "/img/mern-chat/mc4.png",
      "/img/mern-chat/mc5.png",
    ],

    link: {
      demo: "https://serene-cliffs-60386.herokuapp.com/",
      github: "https://github.com/hafidd/mern-chat",
    },
  },
  {
    _id: "4",
    name: "E-Learning",
    desc: "E-Learning app built with Laravel and ReactJS",
    tags: ["PHP", "Laravel", "ReactJS", "PostgreSQL"],
    image: "/img/reavelearning/el9c.png",
    images: [
      "/img/reavelearning/el1.png",
      "/img/reavelearning/el2.png",
      "/img/reavelearning/el3.png",
      "/img/reavelearning/el4.png",
      "/img/reavelearning/el5.png",
      "/img/reavelearning/el6.png",
      "/img/reavelearning/el7.png",
      "/img/reavelearning/el8.png",
      "/img/reavelearning/el9.png",
      "/img/reavelearning/el10.png",
    ],
    link: {
      demo: "https://reavelearning.herokuapp.com/",
      github: "https://github.com/hafidd/reavelearning",
    },
  },
];
const tcs = [
  "Javascript",
  "NodeJS",
  "ExpressJS",

  "ReactJS",

  "PHP",
  "SQL",
  "Laravel",
  "Bootstrap",
  "Tailwind CSS",
];

let darkMode = false;
try {
  darkMode = JSON.parse(localStorage.getItem("darkMode"));
} catch (error) {}

const name = "Abcde Fghijklmn Opqrst";
const about =
  "Hello! My name is Paijo. Born and raised in Yogyakarta. I am always curious and willing to learn new things.";
const github = "https://github.com/hafidd";

function App() {
  const [projects, setProjects] = useState(pr);

  const [project, setProject] = useState({});

  const [scrolling, setScrolling] = useState(false);
  const [apalah, setApalah] = useState(false);

  const [dark, setDark] = useState(darkMode);

  const aboutRef = useRef(null);
  const projectRef = useRef(null);

  let to = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) setApalah(true);
      else setApalah(false);
      setScrolling(true);
      clearTimeout(to);
      to = setTimeout(() => setScrolling(false), 222);
    });
  }, []);

  const scrollToAbout = () =>
    aboutRef.current && aboutRef.current.scrollIntoView({ behavior: "smooth" });
  const scrollToProject = () =>
    projectRef.current &&
    projectRef.current.scrollIntoView({ behavior: "smooth" });

  return (
    <div className={`${dark ? "dark" : ""}`}>
      {/* Modal detail projek */}
      {project._id && <Project project={project} setProject={setProject} />}
      {/* Pencetan */}
      <Menu
        apalah={apalah}
        scrolling={scrolling}
        dark={dark}
        setDark={setDark}
        scrollToAbout={scrollToAbout}
        scrollToProject={scrollToProject}
      />
      {/* Konten */}
      <div
        className={`bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-200 z-0`}
      >
        <About aboutRef={aboutRef} />
        <Projects
          projectRef={projectRef}
          projects={projects}
          tcs={tcs}
          setProject={setProject}
        />
      </div>
    </div>
  );
}

function Menu({
  apalah,
  scrolling,
  dark,
  setDark,
  scrollToAbout,
  scrollToProject,
}) {
  return (
    <div
      className={`fixed flex md:flex-col items-center justify-center h-16 md:h-screen w-full md:w-14 dark:text-slate-100 ${
        apalah && "bg-black bg-opacity-80 md:bg-transparent"
      }`}
    >
      <a
        href="#"
        className={`text-center md:block p-2 px-3 md:mb-4 ${
          scrolling && "md:border rounded-md"
        }`}
        onClick={(e) => {
          e.preventDefault();
          scrollToAbout();
        }}
      >
        A
      </a>
      <a
        href="#"
        className={`text-center md:block p-2 px-3 md:mb-4 ${
          scrolling && "md:border rounded-md"
        }`}
        onClick={(e) => {
          e.preventDefault();
          scrollToProject();
        }}
      >
        B
      </a>
      <a
        href="#"
        className={`text-center md:block p-2 px-3 md:mb-4 ${
          scrolling && "md:border rounded-md"
        }`}
        onClick={(e) => {
          e.preventDefault();
          setDark((prev) => {
            localStorage.setItem("darkMode", JSON.stringify(!prev));
            return !prev;
          });
        }}
      >
        {dark ? "N" : "D"}
      </a>
    </div>
  );
}

function Project({ project = {}, setProject }) {
  const [imgIndex, setImgIndex] = useState(0);
  return (
    project._id && (
      <div
        className="fixed flex items-center justify-center h-screen w-full bg-opacity-50 bg-black z-30 overflow-auto"
        onClick={() => setProject({})}
      >
        <div
          className="w-11/12 flex flex-col items-center justify-center z-40 bg-opacity-100 p-4 bg-white dark:bg-slate-700 dark:text-white"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-2xl mb-5 lg:text-4xl">{project.name}</h2>
          <div className="lg:px-20 relative">
            <img
              src={project.images[imgIndex]}
              alt={project.images[imgIndex]}
              className="min-h-[30vh] max-h-[60vh] max-w-[80vw]"
              loading="lazy"
            />
            {project.images.length > 1 && (
              <>
                <button
                  className="h-full md:h-fit w-1/4 md:w-fit absolute top-0 md:top-1/2 left-0 px-3 py-2 font-bold md:border md:rounded-full"
                  onClick={() =>
                    setImgIndex((prev) =>
                      prev === 0 ? project.images.length - 1 : prev - 1
                    )
                  }
                >
                  <span className="hidden md:block">🡠</span>
                </button>
                <button
                  className="h-full md:h-fit w-1/4 md:w-fit absolute top-0 md:top-1/2 right-0 px-3 py-2 font-bold md:border md:rounded-full"
                  onClick={() =>
                    setImgIndex((prev) =>
                      prev + 1 === project.images.length ? 0 : prev + 1
                    )
                  }
                >
                  <span className="hidden md:block">🡢</span>
                </button>
              </>
            )}
          </div>
          <p className="md:text-lg mt-1">
            ({imgIndex + 1} / {project.images.length})
          </p>
          <div className="flex w-3/4 mt-2">
            {project.link.demo && (
              <a
                target="_blank"
                rel="noreferrer"
                href={project.link.demo}
                className="block text-center border p-1 px-2 mx-1 w-1/2"
              >
                Demo
              </a>
            )}
            <a
              target="_blank"
              rel="noreferrer"
              href={project.link.github}
              className="block text-center border p-1 px-2 mx-1 w-1/2"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    )
  );
}

function About({ aboutRef }) {
  return (
    <div
      ref={aboutRef}
      className="flex flex-col items-center justify-center h-screen w-full"
    >
      <div className="flex flex-col items-center justify-center">
        <p className="lg:self-start te text-lg mb-1">Hi!, my name is</p>
        <h2 className="font-semibold mb-6 text-center text-5xl md:text-6xl lg:text-7xl lg:self-start">
          {name || "My name"}
        </h2>
        <p className="font-semibold lg:self-start">About me .</p>
        <p className="mb-3 indent-7 p-5 lg:self-start lg:p-0">
          {about || "about me..."}
        </p>
        <a
          className="py-1 px-2 border lg:self-start"
          href={github}
          target="_blank"
          rel="noreferrer"
        >
          My Github repository
        </a>
      </div>
    </div>
  );
}

function Projects({ projects, tcs, setProject, projectRef }) {
  return (
    <div ref={projectRef} className="md:px-24 lg:px-48 py-4 dark:bg-slate-900">
      {/* <h2 className="text-center mb-2 text-3xl">Projects</h2> */}
      <div className="flex flex-wrap justify-center">
        {tcs?.map((tc) => (
          <div key={tc} className="p-1 m-1 border tracking-widest text-sm">
            {tc}
          </div>
        ))}
      </div>

      <ul className="flex flex-wrap p-1 lg:p-4">
        {projects?.map((project) => (
          <li className="m-auto flex p-1 w-full md:w-1/2" key={project._id}>
            <div className="m-auto w-full bg-slate-50 dark:bg-slate-500">
              <div
                className="p-1 hover:cursor-pointer"
                onClick={() => setProject(project)}
              >
                <img src={project.image} alt={project.image} />
              </div>
              <div className="flex flex-col p-4">
                <div className="uppercase text-xl font-semibold tracking-wide">
                  {project.name}
                </div>
                <p className="flex-1 text-sm mb-2">{project.desc || "desc"}</p>
                <div className="flex w-full">
                  {project.link.demo && (
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={project.link.demo}
                      className="block text-center border p-1 px-2 mx-1 w-1/2"
                    >
                      Demo
                    </a>
                  )}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={project.link.github}
                    className="block text-center border p-1 px-2 mx-1 w-1/2"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
