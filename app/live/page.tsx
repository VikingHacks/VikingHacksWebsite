"use client"
import { useState, useEffect } from 'react';
import { Balancer } from 'react-wrap-balancer';

const TrackList = {
  'Track1': {
    Description: 'Participants arrive and check-in begins.',
    Guidelines: [
      "No blah blah"
    ],
  },
  'Track2': {
    Description: 'Official start, event kickoff.',
    Guidelines: [
      "No blah blah"
    ],
  },
  'Track3': {
    Description: 'Finalizing teams and project ideas.',
    Guidelines: [
      "No blah blah"
    ],
  },
  'Track4': {
    Description: 'Finalizing teams and project ideas.',
    Guidelines: [
      "No blah blah"
    ],
  },
};

// Define the countdown start and event end times.
const countdownStartTime = new Date('2025-02-15T08:30:00-08:00');
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
  // Initialize state using the helper function.
  const initial = getInitialCountdown();
  const [timeLeft, setTimeLeft] = useState(initial.timeLeft);
  const [countdownActive, setCountdownActive] = useState(initial.countdownActive);
  const [deadlinePassed, setDeadlinePassed] = useState(initial.deadlinePassed);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();

      // Before the countdown start, show inactive grey timer.
      if (now < countdownStartTime) {
        setCountdownActive(false);
        setDeadlinePassed(false);
        setTimeLeft({ hours: '00', minutes: '00', seconds: '00' });
        return;
      } else {
        setCountdownActive(true);
      }

      // Calculate the time difference until the event end.
      const diff = eventEndTime.valueOf() - now.valueOf();
      if (diff <= 0) {
        // Deadline passed.
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

    // Run immediately and then update every second.
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

  // Data for the four tabs.
  const [openTrack, setOpenTrack] = useState<string | null>(null);
	const toggleTrack = (question: string) => {
		setOpenTrack((prev) => (prev === question ? null : question));
	};

  const tabs = [
    {
      title: 'Intro',
      content: (
        <div>
          <h2 className="text-2xl font-mono font-semibold mb-4">
            Introduction and Competition Context
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
            Hackathon Tracks
          </h2>
          <p>
            Viking Hacks 2025 will have 4 tracks participants can choose from. Your project must be directly related to the topic and guidelines of your track.
          </p>
          {/* <div className="mt-4 grid grid-rows-4 md:grid-rows-2 md:grid-cols-2 gap-2"> */}
          <div className="mt-4 flex flex-col gap-2">
            {Object.entries(TrackList).map(([TrackName, { Description, Guidelines }]) => {
              const isOpen = openTrack === TrackName;
              const GuidelineList = Guidelines.map((Guideline) =>
                <li key={Guideline}>{Guideline}</li>
              );
              return (
                <button
                 key={TrackName} 
                 className="flex flex-col items-start border hover:border-blue-500 hover:cursor-pointer p-4 select-none"
                 onClick={() => toggleTrack(TrackName)}
                 >
                  <div className="flex justify-between items-center w-full">
                    <h1 className="font-mono tracking-tight font-semibold text-lg">{TrackName}</h1>
                    <svg
                      className={`transition-transform rotate-90 -translate-y-[0.1rem] duration-100 mt-1 min-w-[15px] ${isOpen ? "-rotate-90" : ""
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
                  <div className={`${isOpen ? "block" : "hidden"}`}>
                    <h3>{Description}</h3>
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
      title: 'Awards',
      content: (
        <div>
          <h2 className="text-2xl font-mono font-semibold mb-4">
            Awards
            </h2>
          <p>
            <ul className="space-y-10">
              <li className="flex flex-col gap-2">
                <h1 className="flex gap-2 font-mono items-center">
                  <p className="bg-orange-400 px-2 py-[0.1rem] font-light">$1,500</p>
                  <p className="text-lg font-bold">LaunchX Scholarship</p>
                </h1>
                <Balancer className="leading-tight">
                LaunchX is not just a program; it&apos;s where future entrepreneurs are made. With world-class mentorship, hands-on experience, and a global network of innovators, LaunchX has shaped some of the brightest young founders in the world.
                </Balancer>
              </li>
              <li className="">
                <h1 className="flex gap-2 font-mono items-center">
                  <p className="bg-black px-2 py-[0.1rem] text-white font-light">$100</p>
                  <p className="text-lg font-bold">Apple Air Tag</p>
                </h1>
              </li>
            </ul>
          </p>
        </div>
      ),
    },
    {
      title: 'Setup',
      content: (
        <div>
          <h2 className="text-2xl font-mono font-semibold mb-4">
            Setup, WiFi, and Apps
            </h2>
          <p>
            To get started, connect to the event WiFi:{" "}
            <strong>FUSDGuest</strong>
            <br />Use the provided apps for scheduling,
            communication, and resource sharing:
            (stuff here)
          </p>
        </div>
      ),
    },
    {
      title: 'Reminders',
      content: (
        <div>
          <h2 className="text-2xl font-mono font-semibold mb-4">
            Hacking and General Reminders
          </h2>
              <ul className="list-disc space-y-2 ml-4">
                  <li>
                      You only have 9 hours, so aim to create something impactful yet achievable. Think about what problem you can address with a rapid deployment of GenAI—whether it's a creative application, automation, or an innovative twist on user interaction.
                  </li>
                  <li>
                      Focus on projects that can show off the power of generative AI with minimal complexity in terms of data and dependencies.
                  </li>
                  <li>
                      Build, Don't Reinvent: Utilize the pre-trained models to save time. This hackathon is all about shipping quickly, so rely on pre-existing data or defaults to avoid spending time on fine-tuning or data curation.
                  </li>
                  <li>Start with the Best Prompts: The key to achieving maximum output in minimal time is in the prompts. Use the provided examples as inspiration, and experiment with wording to optimize results.</li>
              </ul>
          <p className="mt-2">
            Remember to take breaks, stay hydrated, and collaborate effectively. Keep
            your devices charged and check the schedule for workshops and mentoring sessions.
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
            Project Submission Guidelines
          </h2>
          <p>
            When you're ready to submit your project, visit ...
            <br />
            Be sure to follow the submission guidelines carefully,
            including providing a detailed project description, a demo link, and contact information
            for your team members.
          </p>
        </div>
      ),
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto p-4">
        {/* Countdown Section */}
        <div className="text-center my-8">
          <div suppressHydrationWarning
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
        <div className="bg-white mt-20">
          <div className="border-b">
            <nav className="flex justify-evenly overflow-x-auto">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`grow px-4 py-2 font-semibold text-sm font-mono uppercase border-b-2 border-transparent focus:outline-none ${
                    activeTab === index
                      ? "border-b-2 border-blue-500 text-blue-500"
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