import Image from "next/image";
import Link from "next/link";

// components
import Header from "../components/Header";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import Sponsors from "../components/Sponsors";
// import ScheduleItem from "../components/ScheduleItem";
import { Balancer } from "react-wrap-balancer";
import DottedLine from "../components/DottedLine";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" fill="none" height={21} viewBox="0 0 20 21" width={20} xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#arrow_icon)"><path clipRule="evenodd" d="M7.25 9.75H6.5V11.25H7.25H11.4393L9.96967 12.7197L9.43934 13.25L10.5 14.3107L11.0303 13.7803L13.7803 11.0303C14.0732 10.7374 14.0732 10.2626 13.7803 9.96967L11.0303 7.21967L10.5 6.68934L9.43934 7.75L9.96967 8.28033L11.4393 9.75H7.25ZM10 17C6.41015 17 3.5 14.0899 3.5 10.5C3.5 6.91015 6.41015 4 10 4C13.5899 4 16.5 6.91015 16.5 10.5C16.5 14.0899 13.5899 17 10 17ZM2 10.5C2 14.9183 5.58172 18.5 10 18.5C14.4183 18.5 18 14.9183 18 10.5C18 6.08172 14.4183 2.5 10 2.5C5.58172 2.5 2 6.08172 2 10.5Z" fill="currentColor" fillRule="evenodd"></path></g><defs><clipPath id="arrow_icon"><rect fill="currentColor" height="16" rx="0.25" width="16" x="2" y="2.5"></rect></clipPath></defs></svg>
  );
}

const ScheduleList = {
  'Check-in Opens': {
    Description: 'Participants arrive and check-in begins.',
    Time: '7:30am',
  },
  'Check-in Closes': {
    Description: 'Official start, event kickoff.',
    Time: '8:30am',
  },
  'Team Formation Wrap-up': {
    Description: 'Finalizing teams and project ideas.',
    Time: '9:00am',
  },
  'Lunch Service Starts': {
    Description: 'Fuel up for the second half of hacking.',
    Time: '12:30pm',
  },
  'Project Submission Support Begins': {
    Description: 'Organizers help teams finalize submissions.',
    Time: '4:00pm',
  },
  'Project Submissions Due': {
    Description: 'All projects must be submitted. Judges review submitted projects.',
    Time: '6:00pm',
  },
  'Dinner Service': {
    Description: 'Participants grab dinner while waiting.',
    Time: '6:00pm',
  },
  'Judging Ends': {
    Description: 'Final project evaluations complete.',
    Time: '8:00pm',
  },
  'Closing Ceremony': {
    Description: 'Winners announced, wrap-up, and reflections.',
    Time: '8:30pm',
  },
};

const FAQList = {
  'What is Viking Hacks?': {
    answer: "Viking Hacks is Irvington High School's very own hackathon, designed to bring together students with a passion for technology and innovation."
  },
  'Who can participate in Viking Hacks?': {
    answer: "The hackathon is open to all high school students who are interested in creating, learning, and exploring the world of technology."
  },
  'Do I need to have coding experience to join?': {
    answer: "No prior coding experience is required. We encourage students of all skill levels to participate and learn."
  },
  'What should I bring to the hackathon?': {
    answer: "Participants should bring their own laptop, charger, and any other tech they plan to use. Food and drinks will be provided."
  },
  'Is there a cost to attend Viking Hacks?': {
    answer: "Viking Hacks is completely free for all participants, thanks to our sponsors."
  }
}

const partners = [
  { 
    name: "SFBU", 
    logo: "/sponsors/logos/SFBU_F.png", 
    link: "https://sfbu.edu"
  },
  { 
    name: "LaunchX", 
    logo: "/sponsors/logos/LAUNCHX_F.png", 
    link: "https://launchx.com"
  },
];

const diamond = [
  { 
    name: "Palo Alto Networks", 
    logo: "/sponsors/logos/PAN_F.png", 
    link: "https://www.paloaltonetworks.com/"
  },
  { 
    name: "Marchup", 
    logo: "/sponsors/logos/MARCHUP_F.png", 
    link: "https://marchup.net/"
  },
  { 
    name: "Berbawy Makers", 
    logo: "/sponsors/logos/BERBAWY_F.png", 
    link: "https://berbawymakers.com/"
  },
];

const gold = [
  { 
    name: "Replit", 
    logo: "/sponsors/logos/REPLIT_F.png", 
    link: "https://replit.com/"
  },
  { 
    name: "Keep the Bay Beautiful", 
    logo: "/sponsors/logos/KTBB_F.png", 
    link: "https://keepbayareabeautiful.wixsite.com/bayarea"
  },
  { 
    name: "Empyrean Technologies", 
    logo: "/sponsors/logos/EMPYREAN_F.png", 
    link: "https://www.empyrean-tech.com/"
  },
];

const supporters = [
  { 
    name: ".xyz", 
    logo: "/sponsors/logos/XYZ_F.png", 
    link: "https://gen.xyz"
  },
  { 
    name: "AoPS", 
    logo: "/sponsors/logos/AOPS_F.png", 
    link: "https://artofproblemsolving.com/"
  },
];

export default function HomePage() {
  return (
    <>
      <main className="min-h-screen h-full bg-white pb-10">
        <Header />
        <div className="m-5 md:m-12 mt-20">
          {/* main container */}
          <div className="h-[60lvh] w-full overflow-hidden relative transition-all">
            <Image
              src={"/IHS_PHOTO1.jpg"}
              alt={"Fremont Downtown Event Center"}
              fill
              style={{
                objectFit: "cover",
                objectPosition: "50% 100%"
              }}
              priority
            />
          </div>
          <div className="flex flex-col lg:flex-row my-20 justify-between lg:items-center">
            <div className="flex flex-col text-black">
              <h1 className="tracking-[-0.07em] font-medium text-[9vw] sm:text-[8vw] lg:text-[5.5vw] leading-[1.1]">Viking Hacks is here.</h1>
              <text className="font-mono text-[4vw] sm:text-[2.5vw] lg:text-[1.5vw] uppercase">February 15th - Fremont, CA.</text>
            </div>
            <Link href={"/register"} target={"_self"} className="group mt-5 lg:mt-0 flex font-mono items-center justify-center gap-x-2 text-white bg-[rgb(0,87,255)] px-10 md:px-32 text-2xl py-1 h-24">
              <div className="flex flex-col">
                <div className="flex items-center justify-center">
                  <span className="font-mono text-xl lg:text-2xl uppercase mr-2">Register Now</span>
                  <svg className="group-hover:translate-x-1 transition-transform duration-150" aria-hidden="true" fill="none" height={21} viewBox="0 0 20 21" width={20} xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#arrow_icon)"><path clipRule="evenodd" d="M7.25 9.75H6.5V11.25H7.25H11.4393L9.96967 12.7197L9.43934 13.25L10.5 14.3107L11.0303 13.7803L13.7803 11.0303C14.0732 10.7374 14.0732 10.2626 13.7803 9.96967L11.0303 7.21967L10.5 6.68934L9.43934 7.75L9.96967 8.28033L11.4393 9.75H7.25ZM10 17C6.41015 17 3.5 14.0899 3.5 10.5C3.5 6.91015 6.41015 4 10 4C13.5899 4 16.5 6.91015 16.5 10.5C16.5 14.0899 13.5899 17 10 17ZM2 10.5C2 14.9183 5.58172 18.5 10 18.5C14.4183 18.5 18 14.9183 18 10.5C18 6.08172 14.4183 2.5 10 2.5C5.58172 2.5 2 6.08172 2 10.5Z" fill="currentColor" fillRule="evenodd"></path></g><defs><clipPath id="arrow_icon"><rect fill="currentColor" height="16" rx="0.25" width="16" x="2" y="2.5"></rect></clipPath></defs></svg>
                </div>
                <span className="block mt-1 font-mono font-medium leading-none text-center tracking-normal text-[14px] uppercase text-[#95B9FF]">completely free</span>
              </div>
            </Link>
          </div>
          <div className="my-20">
            <span className="bg-black text-white font-mono py-[0.1rem] px-4 uppercase tracking-wider">About</span>
            <hr className="mt-4 border-t border-dashed border-blue-300" />
            <h2 className="text-black font-medium text-[5vw] md:text-[4vw] tracking-[-0.05em] my-10 leading-[2.5] md:leading-[2] lg:leading-normal">
              <Balancer>
                Join our
                <span className="relative inline-block border-[1px] border-primaryColor ml-2 mr-1 px-2 py-1 leading-[1.2]">
                  community of developers
                  {/* Blue underline decoration */}
                  <div
                    aria-hidden="true"
                    className="absolute flex left-0 -bottom-[14px] w-full items-center justify-start md:-translate-x-[20%]"
                  >
                    <svg
                      className="absolute left-0 -bottom-[6px] w-[90%] md:w-auto"
                      fill="none"
                      height={18}
                      viewBox="0 0 400 18"
                      width={400}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M262.85.164v6.332h-1.096v-4.62l-15.546 15.682H0v-1h245.792L261.056 1.16h-4.637V.164h6.431Z"
                        fill="#0057FF"
                      />
                    </svg>
                    <span className="inline-block pointer-events-none -mb-[0.1rem] md:-mb-1 font-mono font-medium tracking-wide uppercase text-[10px] md:text-[13px] text-primaryColor">
                      Hosted by students
                    </span>
                  </div>
                </span>
                and innovators at Viking Hacks 2025 for a day of learning, creativity, and collaboration as we
                <span className="relative inline-block border-[1px] border-primaryColor ml-2 md:ml-0 mr-1 px-2 py-1 leading-[1.2]">
                  build solutions
                  {/* Blue underline decoration */}
                  <div
                    aria-hidden="true"
                    className="absolute flex right-0 -bottom-[14px] w-full items-center justify-end  md:translate-x-[20%]"
                  >
                    <svg
                      className="absolute right-0 -bottom-[6px] w-[70%] scale-x-[-1]"
                      fill="none"
                      height={18} 
                      viewBox="0 0 263 18"
                      width={263}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M262.85.164v6.332h-1.096v-4.62l-15.546 15.682H0v-1h245.792L261.056 1.16h-4.637V.164h6.431Z"
                        fill="#0057FF"
                      />
                    </svg>
                    <span className="inline-block pointer-events-none -mb-[0.02rem] md:-mb-1 font-mono font-medium tracking-wide uppercase text-[10px] md:text-[13px] text-primaryColor">
                      For a cause
                    </span>
                  </div>
                </span>
                to real-world challenges together.
              </Balancer>
            </h2>
          </div>
          {/* Prizes preview */}
          <div className="my-20">
          </div>
          {/* FAQ section */}
          <div className="flex flex-col md:flex-row my-20 md:mt-40 w-full">
            {/* Sticky FAQ section */}
            <div className="sticky-container block w-full lg:min-w-[40%] lg:w-[40%]">
              <div className="sticky top-32 flex flex-col text-black gap-5">
                <Balancer className="font-medium -tracking-[0.05em] text-[10vw] md:text-[4vw] leading-none">
                  Frequently<br />Asked Questions
                </Balancer>
                <p className="hidden md:block font-mono font-regular uppercase text-xs">
                  Contact
                  <a href="mailto:hello@vikinghacks.com" className="ml-2 mr-1 text-primaryColor">
                    hello@vikinghacks.com
                  </a>
                  <svg
                    className="inline-block mb-[0.05rem]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    fill="#000000"
                    viewBox="0 0 256 256"
                  >
                    <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path>
                  </svg>
                </p>
              </div>
            </div>

            {/* FAQ list */}
            <div className="flex-grow">
              <FAQ FAQList={FAQList} />
            </div>
          </div>
          <section className="text-black py-20 w-full">
            <span className="text-[10vw] md:text-[4vw] font-medium leading-none tracking-tighter">Schedule</span>
            <div className="w-full md:w-1/2 flex flex-col items-start">
              <span className="mt-5 md:mt-10 mb-2 text-[8vw] md:text-[3vw] font-medium leading-none tracking-tighter">Important Note</span>
              <Balancer className="font-mono tracking-[0.02em] font-normal text-neutral-600 mb-8">
              During the hackathon, all updates, announcements, and essential resources will be posted on our live page. Whether it&apos;s schedule changes, API keys, important links, or project submission details, everything you need will be there.
              </Balancer>
              {/* <Link href="/live" target={"_self"} className="
                        font-mono font-light text-sm
                        group
                        flex
                        items-center
                        gap-x-2
                        text-white
                        bg-primaryColor
                        px-5
                        py-1
                        h-10
                        uppercase
                        ">Live Site
                <svg className="group-hover:translate-x-1 transition-transform duration-150" aria-hidden="true" fill="none" height={21} viewBox="0 0 20 21" width={20} xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#arrow_icon)"><path clipRule="evenodd" d="M7.25 9.75H6.5V11.25H7.25H11.4393L9.96967 12.7197L9.43934 13.25L10.5 14.3107L11.0303 13.7803L13.7803 11.0303C14.0732 10.7374 14.0732 10.2626 13.7803 9.96967L11.0303 7.21967L10.5 6.68934L9.43934 7.75L9.96967 8.28033L11.4393 9.75H7.25ZM10 17C6.41015 17 3.5 14.0899 3.5 10.5C3.5 6.91015 6.41015 4 10 4C13.5899 4 16.5 6.91015 16.5 10.5C16.5 14.0899 13.5899 17 10 17ZM2 10.5C2 14.9183 5.58172 18.5 10 18.5C14.4183 18.5 18 14.9183 18 10.5C18 6.08172 14.4183 2.5 10 2.5C5.58172 2.5 2 6.08172 2 10.5Z" fill="currentColor" fillRule="evenodd"></path></g><defs><clipPath id="arrow_icon"><rect fill="currentColor" height="16" rx="0.25" width="16" x="2" y="2.5"></rect></clipPath></defs></svg>
              </Link> */}
            </div>
            <div className="hidden mt-14 md:grid grid-cols-4 font-normal">
              <h1 className="col-span-2 uppercase font-mono text-sm">Title</h1>
              <h1 className="col-span-1 uppercase font-mono text-sm">Details</h1>
              <h1 className="col-span-1 uppercase font-mono text-sm">Time</h1>
            </div>
            <hr className="hidden md:block mt-4 border-t border-dashed border-blue-300" />
            <div className={`mt-14 md:mt-0 grid grid-rows-[${Object.entries(ScheduleList).length}] divide-y divide-blue-300 divide-dashed`}>
              {Object.entries(ScheduleList).map(([ItemTitle, { Description, Time }]) => {
                return (
                  <div key={ItemTitle} className="flex flex-col justify-start py-12 md:grid md:items-center grid-cols-4">
                    <div className="flex flex-row md:flex-col justify-between md:col-span-2">
                      <Balancer className="w-3/4 leading-tight text-2xl tracking-tight">{ItemTitle}</Balancer>
                      <h2 className="block md:hidden px-2 py-1 bg-black text-white w-min h-min font-mono font-light">{Time}</h2>
                    </div>
                    <Balancer className="mt-2 md:mt-0 w-3/4 text-sm">{Description}</Balancer>
                    <h2 className="hidden md:block px-2 py-1 bg-black text-white w-min h-min font-mono font-light">{Time}</h2>
                  </div>
                );
              })}
            </div>
          </section>
           <Sponsors partners={partners} diamond={diamond} gold={gold} supporters={supporters} />
          {/* <div className="w-full h-screen"></div> */}
        </div>
        <Footer />
      </main>
    </>
  )
}