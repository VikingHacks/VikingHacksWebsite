"use client"
import Link from 'next/link'
import Image from 'next/image';

// const ComingSoon: React.FC = () => {
//     return (
//         <div className="text-black grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//             <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//                 <Image src="/viking_logo_transparent.png" alt="Viking Hacks Logo" height={37.97} width={99.2} priority />
//                 <h1 className="text-3xl font-semibold -mt-5">Hey there!</h1>
//                 <ul className="list-inside list-disc text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//                     <li className="mb-2">
//                         We&apos;re preparing the live site {" "}
//                         {/* <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//               stores
//             </code> */}
//                     </li>
//                     <li>Please check back later!</li>
//                 </ul>

//                 <div className="flex gap-4 items-center flex-col sm:flex-row">
//                     <a
//                         className="border border-solid border-transparent uppercase font-mono transition-colors flex items-center justify-center bg-black text-white gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
//                         href="mailto:hello@vikinghacks.com"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                     >
//                         <Image
//                             className="dark:invert"
//                             src="/mail.svg"
//                             alt="mail icon"
//                             width={20}
//                             height={20}
//                         />
//                         Email us
//                     </a>
//                 </div>
//             </main>
//         </div>
//     )
// }

// export default ComingSoon;
"use client"
import { useState, useEffect } from 'react';
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
  const tabs = [
    {
      title: 'Introduction',
      content: (
        <div>
          <h2 className="text-2xl font-mono font-semibold mb-4">
            Introduction & Competition Context
          </h2>
          <p>
            Welcome to Viking Hacks 2025! In this competition, you'll have the chance
            to innovate, create, and collaborate with peers to solve real-world challenges.
            Choose from various tracks that cater to different interests and expertise levels.
          </p>
        </div>
      ),
    },
    {
      title: 'Setup',
      content: (
        <div>
          <h2 className="text-2xl font-mono font-semibold mb-4">Setup, WiFi, and Apps</h2>
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
            Hacking & General Reminders
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
            <nav className="flex justify-evenly overflow-x-scroll overflow-y-hidden">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`grow px-4 py-2 -mb-px font-semibold text-sm font-mono uppercase border-b-2 border-transparent focus:outline-none ${
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