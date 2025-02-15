"use client"
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { Balancer } from 'react-wrap-balancer';

const TrackList = {
  'Health/Wellbeing': {
    Description:
      'Technology plays a crucial role in improving healthcare, mental wellness, and overall well-being. For this track, develop software that enhances access to healthcare, promotes healthy lifestyles, or address gaps in wellness and accessibility. The top projects in this track will use unique solutions to tackle common challenges in a new and impactful way.',
    Guidelines: [
      "Projects should focus on health, wellness, accessibility, or healthcare innovation",
      "Creativity and originality are key. Solutions that explore uncommon approaches, unique APIs, or novel applications will receive higher scores from judges.",
      "Simply repackaging existing tools (e.g., ChatGPT wrappers) will not score as well.",
    ],
  },
  'Educational Tech': {
    Description:
      'Education has changed a lot in the past few years with Generative AI hitting the market. This new technology has the potential to make learning more engaging, accessible, and effective. For this track, develop software that enhances education, whether by improving learning experiences, increasing accessibility, or addressing gaps in traditional educational methods.',
    Guidelines: [
      "Projects should focus on improving education, learning accessibility, or skill development.",
      "Innovation is key. Judges will give higher scores to solutions that build off uncommon approaches, unique APIs, or novel educational techniques rather than repackaging existing tools (e.g., basic chatbot tutors)",
      "Consider user experience—effective educational tools should be engaging, scalable, and easy to use.",
    ],
  },
  'Low/No Code': {
    Description:
      'Not every impactful solution requires extensive coding. For this track, create software-based projects using low-code or no-code platforms. Whether automating workflows, building interactive applications, or streamlining a complex process, projects in this track should showcase the power of creative problem-solving using minimal coding.',
    Guidelines: [
      "Solutions must be built primarily using low-code or no-code tools such as app builders, workflow automation tools, or API integrations.",
      "Design mockups in Figma are allowed, but they should represent a clear MVP with a defined user flow.",
      "You must use a low-code or no-code platform (e.g., Bubble, Webflow, Make, Google AppSheet).",
      "Projects should be user-friendly and demonstrate the effectiveness of low/no-code development",
      "Open to all experience levels",
    ],
  },
};

// Define the countdown start and event end times.
const countdownStartTime = new Date('2025-02-15T09:00:00-08:00');
const eventEndTime = new Date('2025-02-15T18:00:00-08:00');

// Helper function to compute the current countdown state.
function getInitialCountdown() {
  const now = new Date();

  if (now < countdownStartTime) {
    return {
      timeLeft: { hours: '00', minutes: '00', seconds: '00' },
      countdownActive: false,
      deadlinePassed: false,
    };
  }

  const diff = eventEndTime.valueOf() - now.valueOf();
  if (diff <= 0) {
    return {
      timeLeft: { hours: '00', minutes: '00', seconds: '00' },
      countdownActive: true,
      deadlinePassed: true,
    };
  }

  const totalSeconds = Math.floor(diff / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return {
    timeLeft: {
      hours: String(hours).padStart(2, '0'),
      minutes: String(minutes).padStart(2, '0'),
      seconds: String(seconds).padStart(2, '0'),
    },
    countdownActive: true,
    deadlinePassed: false,
  };
}

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Initialize countdown state.
  const initialCountdown = getInitialCountdown();
  const [timeLeft, setTimeLeft] = useState(initialCountdown.timeLeft);
  const [countdownActive, setCountdownActive] = useState(initialCountdown.countdownActive);
  const [deadlinePassed, setDeadlinePassed] = useState(initialCountdown.deadlinePassed);

  // Set activeTab from URL query if present; default to 0.
  const [activeTab, setActiveTab] = useState(0);
  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam !== null) {
      const index = parseInt(tabParam, 10);
      if (!isNaN(index)) {
        setActiveTab(index);
      }
    }
  }, [searchParams]);

  // Update URL query when a tab is selected.
  const handleTabChange = (index: number) => {
    setActiveTab(index);
    // This will update the URL to include ?tab=index without a full page reload.
    router.push(`?tab=${index}`);
  };

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();

      if (now < countdownStartTime) {
        setCountdownActive(false);
        setDeadlinePassed(false);
        setTimeLeft({ hours: '00', minutes: '00', seconds: '00' });
        return;
      } else {
        setCountdownActive(true);
      }

      const diff = eventEndTime.valueOf() - now.valueOf();
      if (diff <= 0) {
        setDeadlinePassed(true);
        setTimeLeft({ hours: '00', minutes: '00', seconds: '00' });
      } else {
        setDeadlinePassed(false);
        const totalSeconds = Math.floor(diff / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        setTimeLeft({
          hours: String(hours).padStart(2, '0'),
          minutes: String(minutes).padStart(2, '0'),
          seconds: String(seconds).padStart(2, '0'),
        });
      }
    };

    updateCountdown();
    const intervalId = setInterval(updateCountdown, 1000);
    return () => clearInterval(intervalId);
  }, []);

  // Helper to format the countdown display.
  const renderCountdownDisplay = () => {
    if (!countdownActive) {
      return "00h 00m 00s";
    }
    if (timeLeft.hours !== "00") {
      return `${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`;
    }
    if (timeLeft.minutes !== "00") {
      return `${timeLeft.minutes}m ${timeLeft.seconds}s`;
    }
    return `${timeLeft.seconds}s`;
  };

  // Data for the tabs.
  const [openTrack, setOpenTrack] = useState<string | null>(null);
  const toggleTrack = (question: string) => {
    setOpenTrack((prev) => (prev === question ? null : question));
  };

  const kbdText = (text: string) => {
    return (
      <kbd className="rounded-lg bg-gray-100 px-[0.3rem] py-[0.15rem] text-pink-500">
        {text}
      </kbd>
    );
  };

  const tabs = [
    {
      title: 'Intro',
      content: (
        <div>
          <h2 className="text-2xl font-mono font-semibold mb-4">
            <svg className="inline -translate-y-[0.1rem]" width="8" height="8" xmlns="http://www.w3.org/2000/svg">
              <rect width="8" height="8" className="fill-[#0057FF]" />
            </svg> Hello there!
          </h2>
          <p>
            Welcome to Viking Hacks 2025! In this competition, you'll have the chance
            to innovate, create, and collaborate with peers to solve real-world challenges.
            Choose from various that cater to different interests and expertise levels.
          </p>
        </div>
      ),
    },
    {
      title: 'Tracks',
      content: (
        <div>
          <h2 className="text-2xl font-mono font-semibold mb-4">
          <svg className="inline -translate-y-[0.1rem]" width="8" height="8" xmlns="http://www.w3.org/2000/svg">
              <rect width="8" height="8" className="fill-[#0057FF]" />
            </svg> Hackathon Tracks
          </h2>
          <p>
            Viking Hacks 2025 will have 3 tracks participants can choose from. Your project must be directly related to the topic and guidelines of your track.
          </p>
          <div className="mt-4 flex flex-col gap-2">
            {Object.entries(TrackList).map(([TrackName, { Description, Guidelines }]) => {
              const isOpen = openTrack === TrackName;
              const GuidelineList = Guidelines.map((Guideline) => (
                <li key={Guideline}>{Guideline}</li>
              ));
              return (
                <button
                  key={TrackName}
                  className="flex flex-col items-start border hover:border-blue-500 hover:cursor-pointer p-4 select-none"
                  onClick={() => toggleTrack(TrackName)}
                >
                  <div className="flex justify-between items-center w-full">
                    <h1 className="font-mono tracking-tight text-lg">
                      {TrackName}
                    </h1>
                    <svg
                      className={`transition-transform rotate-90 -translate-y-[0.1rem] duration-100 mt-1 min-w-[15px] ${
                        isOpen ? "-rotate-90" : ""
                      }`}
                      fill="#000000"
                      width="15px"
                      height="15px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polygon
                        fillRule="evenodd"
                        points="17.586 13 3 13 3 11 17.586 11 11.293 4.707 12.707 3.293 21.414 12 12.707 20.707 11.293 19.293"
                      />
                    </svg>
                  </div>
                  <div className={`flex flex-col items-start ${isOpen ? "block" : "hidden"}`}>
                    <h3 className="text-left mb-2">{Description}</h3>
                    <h2 className="underline underline-offset-4 decoration-blue-500 decoration-1">Rules</h2>
                    <ul className="list-disc ml-4 text-left">
                      {GuidelineList}
                    </ul>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      ),
    },
    {
      title: 'Setup',
      content: (
        <div>
          <h2 className="text-2xl font-mono font-semibold mb-4">
          <svg className="inline -translate-y-[0.1rem]" width="8" height="8" xmlns="http://www.w3.org/2000/svg">
              <rect width="8" height="8" className="fill-[#0057FF]" />
            </svg> Setup, WiFi, and Apps
          </h2>
          <p>
            To get started, connect to the event WiFi: {kbdText("FUSDGuest")}
          </p>
          <h1 className="font-semibold text-xl mt-6">Free API Keys</h1>
          <div className="p-3 border">
            <h3 className="text-xl mb-2 flex flex-col gap-1">
              <Image src="/OPENAILOGO.png" alt="OpenAI Logo" width={1280} height={348} style={{
                width: '10%',
                height: 'auto',
              }} />
            </h3>
            <p>
              We are providing <strong>5 OpenAI API keys</strong> for participants to use.
              These keys are shared, so at high usage times (like judging), there may be rate
              limits. We recommend recording a demo while your project is working.
            </p>
            <ul className="list-decimal list-inside my-2 space-y-1">
              <li>
                {kbdText("sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")}
              </li>
              <li>
                {kbdText("sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")}
              </li>
              <li>
                {kbdText("sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")}
              </li>
              <li>
                {kbdText("sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")}
              </li>
              <li>
                {kbdText("sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")}
              </li>
            </ul>
          </div>
          <p className="mt-1 font-medium tracking-tight text-red-600">
            If you face any issues with the API keys, reach out to an organizer immediately.
          </p>
          <h3 className="text-xl font-semibold mt-6 mb-2">
            Hosting Your Frontend
          </h3>
          <p>
            We recommend hosting your frontend by writing your code on{" "}
            <a href="https://github.com/" className="text-blue-500 underline">
              GitHub
            </a>{" "}
            and connecting the repository to{" "}
            <a href="https://vercel.com/" className="text-blue-500 underline">
              Vercel
            </a>.
          </p>
          <h3 className="text-xl font-semibold mt-6 mb-2">
            Working in a Team
          </h3>
          <p>
            If you are working in a team, we suggest using a{" "}
            <strong>shared GitHub repository</strong>. Each team member can work on separate
            parts of the project under the same repo, but in a different subfolder. Use{" "}
            <a href="https://desktop.github.com/" className="text-blue-500 underline">
              GitHub Desktop
            </a>{" "}
            to monitor changes. In the end, merge the different parts into a complete website.
          </p>
          <br />
          <br />
        </div>
      ),
    },
    {
      title: 'Reminders',
      content: (
        <div>
          <h2 className="text-2xl font-mono font-semibold mb-4">
          <svg className="inline -translate-y-[0.1rem]" width="8" height="8" xmlns="http://www.w3.org/2000/svg">
              <rect width="8" height="8" className="fill-[#0057FF]" />
            </svg> Hacking and General Reminders
          </h2>
          <ul className="list-disc space-y-2 ml-4">
            <li>
              You only have 9 hours, so aim to create something impactful yet achievable.
              Think about what problem you can address—whether it's a creative application,
              automation, or an innovative twist on user interaction.
            </li>
            <li>
              Focus on projects that can show off the power of generative AI with minimal
              complexity in terms of data and dependencies.
            </li>
            <li>
              Build, Don't Reinvent: Utilize the pre-trained models to save time. This hackathon is all about shipping quickly, so rely on pre-existing data or defaults to avoid spending time on fine-tuning or data curation.
            </li>
            <li>
              Start with the Best Prompts: The key to achieving maximum output in minimal time
              is in the prompts. Use the provided examples as inspiration, and experiment with wording to optimize results.
            </li>
          </ul>
          <p className="mt-2">
            Remember to take breaks, stay hydrated, and collaborate effectively. Keep your
            devices charged and check the schedule for workshops and mentoring sessions.
            Follow all event guidelines to ensure a safe and productive hacking environment.
          </p>
        </div>
      ),
    },
    {
      title: 'Submission',
      content: (
        <div>
          <h2 className="text-2xl font-mono font-semibold mb-4">
          <svg className="inline -translate-y-[0.1rem]" width="8" height="8" xmlns="http://www.w3.org/2000/svg">
              <rect width="8" height="8" className="fill-[#0057FF]" />
            </svg> Project Submission Guidelines
          </h2>
          <h3 className="text-xl font-semibold mt-4 mb-2">
            Using Marchup for Submission
          </h3>
          <p>
            We are using{" "}
            <a
              href="https://marchup.net/"
              className="text-blue-500 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Marchup
            </a>
            , a platform many of you may not have used before. It functions like a LinkedIn
            for high schoolers and will serve as the hub for all project submissions.
          </p>
          <h3 className="text-xl font-semibold mt-4">
            How to Submit Your Project
          </h3>
          <ol className="list-decimal list-inside my-2 space-y-2">
            <li>
              Create an account on{" "}
              <a
                href="https://marchup.net/"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Marchup
              </a>
              .
            </li>
            <li>
              Find the{" "}
                <a
                  href="https://marchup.net/s/viking-hacks-2025/space/space/child-spaces"
                  className="text-blue-500 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Viking Hacks 2025
                </a>
                {" "}
              space.
            </li>
            <li>
              <strong>Do not request to join the main space</strong>—this is unnecessary.
            </li>
            <li>
              Create a <strong>child space</strong> under Viking Hacks 2025 for your project.
            </li>
            <li>
              Post updates about your project in the child space's stream. These updates will
              be considered during judging.
            </li>
          </ol>
          <h3 className="text-xl font-semibold mt-6 mb-2">
            Naming Your Child Space
          </h3>
          <div className="flex flex-col justify-start gap-1"> 
          <p>
            When creating your child space, you <strong>must</strong> use this format: {" "}
            <span className="bg-gray-100 px-2 py-1 rounded-md text-sm font-mono">
            TEAM NAME - TRACK NAME - TABLE NUMBER
          </span>
          </p>
          <p className="">
            <strong>Example:</strong> <code>Sunrise - Health/Wellness - 5</code>
          </p>
          </div>
          <h3 className="text-xl font-semibold mt-6 mb-2">
            Team Member Requirements
          </h3>
          <p className="text-red-600 mb-10">
            All members of your team must sign up and be part of the child space.
            Otherwise, they will be ineligible for prizes.
          </p>
        </div>
      ),
    },
    {
      title: 'Awards',
      content: (
        <div>
          <h2 className="text-2xl font-mono font-semibold mb-4">
          <svg className="inline -translate-y-[0.1rem]" width="8" height="8" xmlns="http://www.w3.org/2000/svg">
              <rect width="8" height="8" className="fill-[#0057FF]" />
            </svg> Awards</h2>
          <p>
            <ul className="space-y-5">
              <li className="flex flex-col gap-2">
                <h1 className="flex gap-2 font-mono items-center">
                  <p className="bg-[#0057FF] text-white px-2 py-[0.1rem] font-light">
                    Grand Prize
                  </p>
                  <p className="text-lg font-bold">
                    Sony ULT WEAR Noise Cancelling Headphones
                  </p>
                </h1>
              </li>
              <li className="flex flex-col gap-2">
                <h1 className="flex gap-2 font-mono items-center">
                  <p className="bg-orange-400 px-2 py-[0.1rem] font-light">
                    $1,500
                  </p>
                  <p className="text-lg font-bold">LaunchX Scholarship</p>
                </h1>
                <Balancer className="leading-tight">
                  LaunchX is not just a program; it&apos;s where future entrepreneurs are
                  made. With world-class mentorship, hands-on experience, and a global network
                  of innovators, LaunchX has shaped some of the brightest young founders in the world.
                </Balancer>
              </li>
              <li className="">
                <h1 className="flex gap-2 font-mono items-center">
                  <p className="bg-black px-2 py-[0.1rem] text-white font-light">
                    Ed Tech 1st Place
                  </p>
                  <p className="text-lg font-bold">JBL Clip 3</p>
                </h1>
              </li>
              <li className="">
                <h1 className="flex gap-2 font-mono items-center">
                  <p className="bg-black px-2 py-[0.1rem] text-white font-light">
                    Ed Tech 2nd Place
                  </p>
                  <p className="text-lg font-bold">Govee Smart LED Strip</p>
                </h1>
              </li>
              <li className="">
                <h1 className="flex gap-2 font-mono items-center">
                  <p className="bg-black px-2 py-[0.1rem] text-white font-light">
                    Health/Wellbeing 1st Place
                  </p>
                  <p className="text-lg font-bold">Apple Airtag</p>
                </h1>
              </li>
              <li className="">
                <h1 className="flex gap-2 font-mono items-center">
                  <p className="bg-black px-2 py-[0.1rem] text-white font-light">
                    Health/Wellbeing 2nd Place
                  </p>
                  <p className="text-lg font-bold">Anker Wireless Charger</p>
                </h1>
              </li>
              <li className="">
                <h1 className="flex gap-2 font-mono items-center">
                  <p className="bg-black px-2 py-[0.1rem] text-white font-light">
                    Low/No Code 1st Place
                  </p>
                  <p className="text-lg font-bold">Anker Powercore</p>
                </h1>
              </li>
              <li className="">
                <h1 className="flex gap-2 font-mono items-center">
                  <p className="bg-black px-2 py-[0.1rem] text-white font-light">
                    Low/No Code 2nd Place
                  </p>
                  <p className="text-lg font-bold">
                    Rocketbook Smart Reusable Notebook
                  </p>
                </h1>
              </li>
            </ul>
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto p-4">
        {/* Countdown Section */}
        <div className="text-center my-8">
          <div
            suppressHydrationWarning
            className={`text-[13vw] mt-20 md:text-[12vw] lg:text-[8vw] xl:text-9xl leading-none font-mono ${
              !countdownActive
                ? "text-gray-300"
                : deadlinePassed
                ? "text-red-500"
                : "text-black"
            }`}
          >
            {renderCountdownDisplay()}
          </div>
          <div className="mt-4 text-black text-sm font-mono">
            {countdownActive
              ? "Time remaining until submission deadline"
              : "Countdown will start at event"}
          </div>
        </div>

        {/* Tabs Section */}
        <div className="bg-white mt-20 mb-20">
          <div className="border-b">
            <nav className="flex justify-evenly overflow-x-auto">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => handleTabChange(index)}
                  className={`grow px-4 py-2 font-semibold text-sm font-mono uppercase border-b-2 border-transparent focus:outline-none ${
                    activeTab === index
                      ? "border-b-2 !border-blue-500 text-blue-500"
                      : "text-gray-600 hover:text-blue-500"
                  }`}
                >
                  {tab.title}
                </button>
              ))}
            </nav>
          </div>
          <div className="mt-4 text-black">{tabs[activeTab].content}</div>
        </div>
      </div>
    </div>
  );
}