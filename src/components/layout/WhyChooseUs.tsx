import { Card } from "@/components/ui";
import { whyChooseUsPoints } from "@/constants/static";

const WhyChooseUs = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Decorative Elements */}

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold">
            Why Book with <span className="text-primary">Braj Pandit?</span>
          </h2>
          <p className="text-base md:text-md max-w-2xl mx-auto mt-3">
            Experience the divine grace of Lord Krishna through our authentic
            and trusted puja services
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUsPoints.map((point, index) => (
              <Card
                key={index}
                className="p-8 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl shadow-sm transition-all duration-300 group cursor-pointer"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-divine rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <point.icon className="w-8 h-8 text-primary" />
                  </div>

                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                    {point.title}
                  </h3>

                  <p className="leading-relaxed text-gray-700">
                    {point.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
