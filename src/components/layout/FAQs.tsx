import {
  Card,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui";
import { faqs } from "@/constants/static";

const FAQs = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-base md:text-md max-w-2xl mx-auto mt-3">
              Find answers to common questions about our Krishna Janmashtami
              puja services
            </p>
          </div>

          <Card className="border-none !shadow-none">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-lg px-4 py-2"
                >
                  <AccordionTrigger className="text-left hover:text-primary transition-colors duration-200">
                    <span className="text-base font-medium">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <p className="text-muted-foreground leading-relaxed text-sm mt-2">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>

          {/* <div className="text-center mt-8">
            <p className="text-lg text-muted-foreground mb-6">
              Still have questions? We&apos;re here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+918595009640."
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-divine  rounded-lg font-semibold hover:shadow-divine transition-all duration-300"
              >
                Call Us: +91 8595009640.
              </a>
              <a
                href="https://wa.me/+918595009640."
                className="bg-primary inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-white rounded-lg font-semibold hover:bg-red-800 transition-all duration-300"
              >
                WhatsApp Us
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
