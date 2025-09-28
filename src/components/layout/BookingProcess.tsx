import Image from "next/image";
import staticData from "@/constants/static.json";

interface Step {
  title: string;
  description: string;
  icon: string;
}

const BookingProcess = () => {
  const { bookingSteps }: { bookingSteps: Step[] } = staticData;

  return (
    <div className="bg-amber-100 flex flex-col justify-center items-center w-full px-4 py-18 md:py-24">
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-3xl font-bold">
          How to
          <span className="text-secondary"> book your Puja?</span>
        </h2>
        <p className="text-base md:text-md max-w-2xl mx-auto mt-3">
          A simple and seamless booking process to connect you with divine
          blessings.
        </p>
      </div>

      <div className="relative w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 z-1">
        <div className="absolute top-1/2 left-0 w-full h-3 -z-1 bg-muted hidden lg:block"></div>
        {bookingSteps?.map((step, index) => (
          <PujaStepCard step={step} key={index} />
        ))}
      </div>
    </div>
  );
};

export default BookingProcess;

const PujaStepCard = ({ step }: { step: Step }) => {
  return (
    <div className="flex flex-col justify-center items-center rounded-tr-[50px] rounded-bl-[50px] p-6 bg-text-white text-center">
      <Image
        src={`/assets/${step.icon}`}
        alt="Booking Process 1"
        width={60}
        height={60}
        className="w-[60px] h-[60px]"
      />
      <h4 className="text-sm font-medium mt-4">{step.title}</h4>
      <p className="text-xs mt-2">{step.description}</p>
    </div>
  );
};
