import { Card, Badge } from "@/components/ui";
import { Eye, Gift, Sparkles } from "lucide-react";

const TempleDetails = ({
  templeDetails,
}: {
  templeDetails: {
    heading: string;
    description: string;
    highlights: string[];
    temples: string[];
  };
}) => {
  const { heading, description, highlights, temples } = templeDetails;

  const templeHighlights = highlights.map((highlight: string, idx: number) => {
    switch (idx) {
      case 0:
        return {
          icon: <Eye className="w-6 h-6" />,
          decscription: highlight,
        };

      case 1:
        return {
          icon: <Gift className="w-6 h-6" />,
          decscription: highlight,
        };

      case 2:
        return {
          icon: <Sparkles className="w-6 h-6" />,
          decscription: highlight,
        };
    }
  });

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              {heading}
            </h2>
            <p className="text-xl max-w-4xl mx-auto leading-relaxed">
              {description}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Temple List */}
            <Card className="p-8 shadow-sacred">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-divine rounded-full flex items-center justify-center">
                  <Sparkles className="w-4 h-4" />
                </div>
                Sacred Temple Network
              </h3>
              <div className="space-y-4">
                {temples.map((temple: string, index: number) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary-light transition-colors duration-200"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="font-medium">{temple}</span>
                    <Badge variant="secondary" className="ml-auto">
                      Verified
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>

            {/* Highlights */}
            <div className="space-y-6">
              {templeHighlights.map((highlight: any, index: number) => (
                <Card
                  key={index}
                  className="p-6 shadow-sacred hover:shadow-divine transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    {highlight.icon}
                    <p className="text-base">{highlight.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TempleDetails;
