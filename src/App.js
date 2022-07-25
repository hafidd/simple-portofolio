import { useMemo } from "react";
import { useRef } from "react";
import { useEffect, useState } from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { Helmet } from "react-helmet";

const pr = [
  {
    _id: "2",
    name: "Kanban Board",
    desc: "Trello clone built with MERN + Socket.IO",
    tags: ["js", "node", "express", "react", "mongo", "sio"],
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
    tags: ["js", "express", "react", "tailwind"],
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
    desc: "Realtime chatting app built with MERN + Socket.IO",
    tags: ["js", "node", "express", "react", "mongo", "sio", "bootstrap"],
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
    tags: ["php", "laravel", "react", "sql", "bootstrap"],
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
  {
    id: "js",
    text: (
      <>
        <i className="fa-brands fa-js"></i> Javascript
      </>
    ),
  },
  {
    id: "node",
    text: (
      <>
        <i className="fa-brands fa-node"></i> NodeJS
      </>
    ),
  },
  {
    id: "express",
    text: (
      <>
        <i className="fa-brands fa-node"></i> ExpressJS
      </>
    ),
  },
  {
    id: "react",
    text: (
      <>
        <i className="fa-brands fa-react"></i> ReactJS
      </>
    ),
  },
  {
    id: "sio",
    text: (
      <>
        <i className="fa-solid fa-bolt"></i> Socket.IO
      </>
    ),
  },
  {
    id: "php",
    text: (
      <>
        <i className="fa-brands fa-php"></i> PHP
      </>
    ),
  },
  {
    id: "sql",
    text: (
      <>
        <i className="fa-solid fa-database"></i> SQL
      </>
    ),
  },
  {
    id: "mongo",
    text: (
      <>
        <i className="fa-solid fa-database"></i> MongoDB
      </>
    ),
  },
  {
    id: "laravel",
    text: (
      <>
        <i className="fa-brands fa-laravel"></i> Laravel
      </>
    ),
  },
  {
    id: "bootstrap",
    text: (
      <>
        <i className="fa-brands fa-css3-alt"></i> Bootstrap
      </>
    ),
  },
  {
    id: "tailwind",
    text: (
      <>
        <i className="fa-brands fa-css3-alt"></i> Tailwind
      </>
    ),
  },
];

let darkMode = true;
try {
  darkMode = JSON.parse(localStorage.getItem("darkMode"));
} catch (error) {}

const name = "Hafid Fadilah Septiawan";
const title = "Hafid F Septiawan";
// const about =
//   "Hello! My name is Paijo. Born and raised in Yogyakarta. I am always curious and willing to learn new things.";
const github = "https://github.com/hafidd";

function App() {
  const [projects, setProjects] = useState([]);

  const [project, setProject] = useState({});

  const [scrolling, setScrolling] = useState(false);
  const [apalah, setApalah] = useState(false); // is scrolled

  const [dark, setDark] = useState(darkMode);

  const aboutRef = useRef(null);
  const projectRef = useRef(null);

  useEffect(() => setProjects(pr), [pr]);

  // scroll event
  let to = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) setApalah(true);
      else setApalah(false);
      setScrolling(true);
      clearTimeout(to.current);
      to.current = setTimeout(() => setScrolling(false), 222);
    });
  }, []);

  const scrollToAbout = () =>
    aboutRef.current && aboutRef.current.scrollIntoView({ behavior: "smooth" });
  const scrollToProject = () =>
    projectRef.current &&
    projectRef.current.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <ParallaxProvider>
        <div className={`${dark ? "dark" : ""}`}>
          {/* Modal detail projek */}
          {project._id && (
            <>
              <div className="fixed w-full h-screen bg-black z-10 bg-opacity-70"></div>
              <Project project={project} setProject={setProject} />
            </>
          )}
          {/* Menu */}
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
            <About
              aboutRef={aboutRef}
              apalah={apalah}
              scrollToProject={scrollToProject}
            />
            <Projects
              projectRef={projectRef}
              projects={projects}
              tcs={tcs}
              setProject={setProject}
            />
          </div>
        </div>
      </ParallaxProvider>
    </>
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
      className={`z-40 fixed flex md:flex-col items-center justify-center h-16 md:h-screen w-full md:w-14 lg:ml-4 dark:text-slate-100 ${
        apalah &&
        "bg-black bg-opacity-80 md:bg-transparent text-white md:text-black"
      }`}
    >
      <button
        className={`mr-2 md:mr-0 text-center md:block p-2 px-3 md:mb-4 ${
          scrolling && "bg-black bg-opacity-100 rounded-md"
        }`}
        onClick={scrollToAbout}
      >
        <i className="fa-solid fa-user"></i>
      </button>
      <button
        className={`mr-2 md:mr-0 text-center md:block p-2 px-3 md:mb-4 ${
          scrolling && "bg-black bg-opacity-100 rounded-md"
        }`}
        onClick={scrollToProject}
      >
        <i className="fa-solid fa-list"></i>
      </button>
      <button
        className={`text-center md:block p-2 px-3 md:mb-4 ${
          scrolling && "bg-black bg-opacity-100 rounded-md"
        }`}
        onClick={(e) =>
          setDark((prev) => {
            localStorage.setItem("darkMode", JSON.stringify(!prev));
            return !prev;
          })
        }
      >
        {dark ? (
          <i className="fa-solid fa-moon"></i>
        ) : (
          <i className="fa-solid fa-sun"></i>
        )}
      </button>
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
          className="w-11/12 flex flex-col items-center justify-center z-40 bg-opacity-100 p-4 bg-white dark:bg-slate-900 dark:text-white"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-2xl mb-5 lg:text-4xl">{project.name}</h2>
          <div className="lg:px-20 relative">
            <img
              src={project.images[imgIndex]}
              alt={project.images[imgIndex]}
              className="md:min-h-[50vh] max-h-[60vh] max-w-[80vw]"
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

function About({ aboutRef, apalah, scrollToProject }) {
  return (
    <div
      ref={aboutRef}
      className="flex flex-col items-center justify-center h-screen w-full overflow-hidden"
    >
      <Parallax speed={-20}>
        <div className="flex flex-col items-center justify-center py-10">
          <p className="lg:self-start te text-lg mb-1">Hi!, my name is</p>
          <h2 className="font-semibold mb-6 text-center text-5xl md:text-6xl lg:text-7xl lg:self-start spaci">
            {name || "My name"}
          </h2>
          {/* <p className="font-semibold lg:self-start">About me .</p>
        <p className="mb-3 indent-7 p-5 lg:self-start lg:p-0">
          {about || "about me..."}
        </p> */}
          <div className={!apalah ? "lg:self-start" : ""}>
            <a href={github} target="_blank" rel="noreferrer">
              <button className={"mr-2 py-2 px-3 border-2 rounded-md "}>
                <i className="fa-brands fa-github"></i> Github
              </button>
            </a>
            <button
              className={
                "py-2 px-3 border-2 rounded-md " + (apalah && " hidden")
              }
              onClick={scrollToProject}
            >
              <i className="fa-solid fa-list"></i> Projects
            </button>
          </div>
        </div>
      </Parallax>
    </div>
  );
}

function Projects({ projects, tcs, setProject, projectRef }) {
  const [selectedTags, setSelectedTags] = useState([]);

  const Tags = () =>
    tcs?.map((tc, i) => (
      <button
        key={tc.id || i}
        className="relative rounded-sm p-1 m-1 border tracking-widest text-sm"
        onClick={() => addFilter(tc.id)}
      >
        {selectedTags.includes(tc.id) && (
          <div className="absolute bg-black w-full h-full left-0 top-0 rounded-sm bg-opacity-50"></div>
        )}
        {tc.text || "tag"}
      </button>
    ));

  const SelectedTags = () =>
    selectedTags?.map((tc, i) => (
      <button
        key={tc || i}
        className="rounded-sm p-1 m-1 border tracking-widest text-sm"
        onClick={() => removeFilter(tc)}
      >
        <>{tcs.find((t) => t.id === tc).text || "tag"} x</>
      </button>
    ));

  const ProjectCard = ({ project }) => (
    <li className="m-auto flex p-1 w-full md:w-1/2">
      <div className="rounded-md m-auto w-full bg-white border-2 dark:border-none dark:bg-slate-700">
        <div
          className="p-1 relative hover:cursor-pointer group"
          onClick={() => setProject(project)}
        >
          <img
            src={project.image}
            alt={project.image}
            className="rounded-md "
          />
          {/* tags */}
          <div
            className="z-10 hidden absolute top-0 left-0 w-full h-full
            group-hover:flex flex-wrap justify-center items-center bg-black bg-opacity-20 
          "
          >
            <div className="flex flex-wrap px-1 justify-center">
              {project.tags.map((tag) => (
                <span
                  className="px-2 rounded-sm m-1 bg-white dark:bg-black bg-opacity-70 border border-gray-500 tracking-wider"
                  key={project._id + "_" + tag}
                >
                  {tcs.find((t) => t.id === tag).text}
                </span>
              ))}
            </div>
          </div>
          {/* end tags */}
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
                className="rounded-sm block text-center border p-1 px-2 mx-1 w-1/2"
              >
                Demo
              </a>
            )}
            <a
              target="_blank"
              rel="noreferrer"
              href={project.link.github}
              className="rounded-sm block text-center border p-1 px-2 mx-1 w-1/2"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </li>
  );

  const filteredProjects = useMemo(
    () =>
      selectedTags.length === 0
        ? projects
        : projects.filter((project) =>
            selectedTags.every((tag) => project.tags.includes(tag))
          ),
    [projects, selectedTags]
  );

  const addFilter = (tag) =>
    setSelectedTags((prev) =>
      prev.filter((t) => t === tag).length > 0 ? prev : [...prev, tag]
    );
  const removeFilter = (tag) =>
    setSelectedTags((prev) => prev.filter((t) => t !== tag));

  return (
    <div
      ref={projectRef}
      className="md:px-24 lg:px-48 py-4 bg-slate-50 dark:bg-slate-900 min-h-screen"
    >
      <div className="flex flex-wrap justify-center">
        <Tags />
      </div>

      {selectedTags.length > 0 && (
        <div className="flex flex-wrap justify-center mt-1 border-y py-1">
          <span className="rounded-sm p-1 m-1 tracking-widest text-sm">
            Filter({selectedTags.length}) :{" "}
          </span>
          <SelectedTags />
          <button
            className="rounded-sm p-1 m-1 border tracking-widest text-sm"
            onClick={() => setSelectedTags([])}
          >
            Clear
          </button>
        </div>
      )}

      <ul className="flex flex-wrap p-1 lg:p-4">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard project={project} key={project._id} />
          ))
        ) : (
          <div className="w-full text-center">
            No data found...{" "}
            <a
              href={github + "?tab=repositories"}
              target="_blank"
              rel="noreferrer"
            >
              <button className={"mx-1 py-1 px-2 border rounded-md"}>
                <i className="fa-brands fa-github"></i> Github repository
              </button>
            </a>
            <button
              className="mx-1 py-1 px-2 border rounded-md"
              onClick={() => setSelectedTags([])}
            >
              Clear filter
            </button>
          </div>
        )}
      </ul>
    </div>
  );
}

export default App;
