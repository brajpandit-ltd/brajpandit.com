import { Button } from "@/components/common";
import { Phone, MessageCircle, Calendar } from "lucide-react";
import Link from "next/link";


const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-3
       relative z-10">
        <div className=" text-center">
          <div className="mb-12">
            <h2 className="text-2xl
             md:text-3xl
            font-bold mb-3
             leading-tight">
              
              Book Your     
             <span className="text-primary mx-2">
                
              Dhanteras Puja 
              </span>
            
                Invite 
                <span className = "text-secondary mx-2">
                 Devi Lakshmi 

                 </span>

                 in your life
              
            </h2>
            <p className="
            mx-auto leading-relaxed">
              Don&apos;t miss this sacred opportunity to celebrate the divine
              birth of Lord Krishna with authentic Braj traditions
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link href= "/services/puja-booking?pujaSlug=dhanteras&packageId=basic&pujaType=ePuja">
            <Button
              label="Proceed to Booking"
              variant="primary"
              size="medium"
              icon={<Calendar className="w-6 h-6" />}
            />

            </Link>

            <Link
                          href="https://wa.me/918595009640"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto"
                        >
            <Button
              label="Call Now"
              icon={<Phone className="w-6 h-6" />}
              variant="default"
              size="medium"
            />

            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="backdrop-blur-sm rounded-lg p-6 border">
              <div className="w-12 h-12 bg-gradient-divine rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 " />
              </div>
              <h3 className="text-lg font-bold  mb-2">24/7 Support</h3>
              <p className="/70">Instant assistance via WhatsApp</p>
            </div>

            <div className="backdrop-blur-sm rounded-lg p-6 border">
              <div className="w-12 h-12 bg-gradient-divine rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 " />
              </div>
              <h3 className="text-lg font-bold  mb-2">Flexible Booking</h3>
              <p className="/70">Easy rescheduling available</p>
            </div>

            <div className="backdrop-blur-sm rounded-lg p-6 border">
              <div className="w-12 h-12 bg-gradient-divine rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 " />
              </div>
              <h3 className="text-lg font-bold  mb-2">Instant Confirmation</h3>
              <p className="/70">Immediate booking confirmation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
