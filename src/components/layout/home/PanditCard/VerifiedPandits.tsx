import Link from "next/link";
import pandits from "@/constants/pandits.json";
import { Pandit } from "@/types/pandit";
import { PanditCard } from "./PanditCard";
import Button from "@/components/common/Button";

export default function VerifiedPanditsSection() {
  return (
    <section
      id="verified-pandits"
      className="px-4 sm:px-6 md:px-12 py-18 md:py-24"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:items-start">
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-start">
          <h2 className="text-2xl md:text-3xl font-bold">
            Book a <span className="text-primary">Pooja</span> with <br />
            Experts <span className="text-secondary">at your home.</span>
          </h2>

          <div className="h-1 w-20 bg-primary rounded-full mb-2 mt-4"></div>
          <p className="mt-4">
            Invite divine blessings with our expert Vedic Pandits, well-versed
            in Sanskrit mantras and Hindu scriptures. From rituals to
            astrological guidance, they ensure an authentic and spiritually
            uplifting experience at your home.
          </p>

          {/* Subheading */}
          <h3 className="text-lg mt-4">
            Meet Our <span className="text-primary">Verified PanditJis</span>
          </h3>

          <ul className="text-base list-disc pl-5 mt-4">
            <li>Highly knowledgeable Vedic Pandits & Purohits</li>
            <li>Expertise in Sanskrit mantras & Hindu scriptures</li>
            <li>Astrology & ritual guidance</li>
            <li>Ensuring a spiritually enriching experience</li>
          </ul>

          {/* Button */}
          <Link href="/pandits" className="mt-8">
            <Button
              label="See All PanditJis →"
              variant="primary"
              size="medium"
            />
          </Link>
        </div>

        {/* Right Grid of Cards */}
        <div className="flex-1">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {(pandits as Pandit[]).slice(0, 6).map((pandit) => (
              <PanditCard key={pandit.id} pandit={pandit} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
