import React from "react";
import { Balancer } from "react-wrap-balancer";

type Sponsor = {
  name: string;
  people: string; // URL to the sponsor's logo
  place: string; // Sponsor's website link
};

type SponsorsProps = {
  partners: Sponsor[]; // Top-tier sponsors
  diamond: Sponsor[]; // Diamond sponsors
  gold: Sponsor[]; // Gold sponsors
  supporters: Sponsor[]; // Gold sponsors
};

const Winners: React.FC<SponsorsProps> = ({ partners, diamond, gold, supporters }) => {
  // Section rendering helper
  const WinnerSection = ({
    title,
    sponsors,
    gridCols,
  }: {
    title: string;
    sponsors: Sponsor[];
    gridCols: string;
  }) => (
    <div className="my-10">
      {/* Section Title */}
      <h3 className="text-[4vw] md:text-[1vw] w-min whitespace-nowrap bg-black text-white font-mono py-[0.1rem] px-4 uppercase tracking-normal mb-3">
        {title}
      </h3>
      {/* Sponsor Grid */}
      <div className={`flex gap-5 border-t border-dashed border-blue-300 border-opacity-90 pt-5`}>
        {sponsors.map((sponsor) => (
            <div key={sponsor.name} className="flex flex-col justify-between grow border hover:border-[#0057FF] p-5 w-full">
                <h1 className="tracking-tighter text-xl font-medium">{sponsor.name}</h1>
                { (sponsor.place !== "None") ? 
                (<h3 className="font-mono"><svg className="inline -translate-y-[0.1rem] mr-[0.3rem]" width="5" height="5" xmlns="http://www.w3.org/2000/svg">
                <rect width="5" height="5" className="fill-[#0057FF]" />
              </svg>{sponsor.place}</h3>)
                 : <></> }
                <Balancer className="mt-2 w-full">{sponsor.people}</Balancer>
            </div>
        ))}
      </div>
    </div>
  );

  return (
    <section
      className="text-black relative"
      id="sponsors-section"
    >
      <div className="relative">
        {/* Partner Section */}
        <WinnerSection
          title="Educational Technology"
          sponsors={partners}
          gridCols="grid-cols-1 md:grid-cols-2 lg:grid-cols-5"
        />

        {/* Diamond Section */}
        <WinnerSection
          title="Health and Wellness"
          sponsors={diamond}
          gridCols="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
        />

        {/* Gold Section */}
        <WinnerSection
          title="Low/No Code"
          sponsors={gold}
          gridCols="grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
        />

        {/* Gold Section */}
        <WinnerSection
          title="Grand Winner"
          sponsors={supporters}
          gridCols="grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
        />
      </div>
    </section>
  );
};

export default Winners;