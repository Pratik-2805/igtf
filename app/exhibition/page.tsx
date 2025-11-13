"use client";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ChatBot } from "@/components/chat-bot";
import { Calendar, Clock, MapPin } from "lucide-react";

export default function ExhibitionPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 sm:py-28 lg:py-32 px-4 bg-gradient-to-b from-muted/30 to-background">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 animate-fade-in">
              Exhibitions
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground animate-fade-in-delay-1 px-4">
              Join us at our upcoming trade fairs in Mumbai and Dubai
            </p>

            {/* Past Exhibitors Image */}
            <div className="pt-12 sm:pt-16 lg:pt-20 scroll-animate-card">
              <img src="past_exhibitors.png" alt="Our Past Exhibitors" className="w-full h-auto" />
            </div>
          </div>
        </section>

        {/* Upcoming Exhibitions */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-background">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-center mb-12 sm:mb-16 scroll-animate">
              Upcoming Events
            </h2>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
              {/* India Exhibition */}
              <div className="bg-muted/30 p-6 sm:p-8 rounded-lg scroll-animate hover:scale-102 transition-transform duration-700 ease-out shadow-lg">
                <div className="mb-4 sm:mb-6">
                  <h3 className="font-serif text-2xl sm:text-3xl mb-2">
                    IGTF Mumbai 2025
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground flex items-center gap-2">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <span>Bombay Exhibitions Center, Mumbai, India</span>
                  </p>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">December 12-14, 2025</p>
                      <p className="text-sm text-muted-foreground">
                        3-Day Exhibition
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">10:00 AM - 7:00 PM</p>
                      <p className="text-sm text-muted-foreground">
                        Daily Schedule
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3 text-sm text-muted-foreground mb-6 border-t pt-6">
                  <div className="flex justify-between">
                    <span>Exhibitors</span>
                    <span className="font-medium text-foreground">400+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Trade Buyers</span>
                    <span className="font-medium text-foreground">6000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Countries</span>
                    <span className="font-medium text-foreground">40+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sectors</span>
                    <span className="font-medium text-foreground">16</span>
                  </div>
                </div>
                <button className="w-full bg-primary text-primary-foreground px-6 py-2.5 sm:py-3 rounded-md hover:bg-primary/90 transition-all duration-500 font-medium text-sm sm:text-base">
                  Register as Exhibitor
                </button>
              </div>

              {/* Dubai Exhibition */}
              <div className="bg-muted/30 p-6 sm:p-8 rounded-lg scroll-animate animation-delay-100 hover:scale-102 transition-transform duration-700 ease-out shadow-lg">
                <div className="mb-4 sm:mb-6">
                  <h3 className="font-serif text-2xl sm:text-3xl mb-2">
                    IGTF Dubai 2025
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground flex items-center gap-2">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <span>Dubai Exhibition Center, Dubai, UAE</span>
                  </p>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">February 15-17, 2025</p>
                      <p className="text-sm text-muted-foreground">
                        3-Day Exhibition
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">10:00 AM - 7:00 PM</p>
                      <p className="text-sm text-muted-foreground">
                        Daily Schedule
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3 text-sm text-muted-foreground mb-6 border-t pt-6">
                  <div className="flex justify-between">
                    <span>Exhibitors</span>
                    <span className="font-medium text-foreground">400+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Trade Buyers</span>
                    <span className="font-medium text-foreground">6000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Countries</span>
                    <span className="font-medium text-foreground">40+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sectors</span>
                    <span className="font-medium text-foreground">16</span>
                  </div>
                </div>
                <button className="w-full bg-primary text-primary-foreground px-6 py-2.5 sm:py-3 rounded-md hover:bg-primary/90 transition-all duration-500 font-medium text-sm sm:text-base">
                  Register as Exhibitor
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Attractions Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 scroll-animate">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6">
                Exhibition Highlights
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground italic px-4">
                What makes IGTF the premier trade fair in India
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-background p-6 sm:p-8 rounded-lg shadow-lg scroll-animate-card hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl">
                <h4 className="font-serif text-lg sm:text-xl mb-3 sm:mb-4">
                  Prime Location
                </h4>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Strategically hosted at Bombay Exhibitions Center with
                  exceptional visibility and footfall, ensuring maximum exposure
                  for exhibitors.
                </p>
              </div>

              <div className="bg-background p-6 sm:p-8 rounded-lg shadow-lg scroll-animate-card animation-delay-100 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl">
                <h4 className="font-serif text-lg sm:text-xl mb-3 sm:mb-4">
                  16 Dynamic Sectors
                </h4>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Hardware & Tools, Toys, Chemical, Electronics, Auto Parts,
                  Construction Material, Agriculture, and more representing
                  diverse industries.
                </p>
              </div>

              <div className="bg-background p-6 sm:p-8 rounded-lg shadow-lg scroll-animate-card animation-delay-200 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl">
                <h4 className="font-serif text-lg sm:text-xl mb-3 sm:mb-4">
                  Global Participation
                </h4>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Drawing exhibitors and buyers from more than 40 countries,
                  offering opportunities for cross-border collaborations.
                </p>
              </div>

              <div className="bg-background p-6 sm:p-8 rounded-lg shadow-lg scroll-animate-card animation-delay-300 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl">
                <h4 className="font-serif text-lg sm:text-xl mb-3 sm:mb-4">
                  Extensive B2B Focus
                </h4>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Premier platform bringing together manufacturers, exporters,
                  distributors, and key decision-makers for meaningful business
                  connections.
                </p>
              </div>

              <div className="bg-background p-6 sm:p-8 rounded-lg shadow-lg scroll-animate-card animation-delay-400 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl">
                <h4 className="font-serif text-lg sm:text-xl mb-3 sm:mb-4">
                  Hosted Buyer Program
                </h4>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Exclusive initiative matching exhibitors with qualified
                  buyers, ensuring focused meetings and higher conversion
                  opportunities.
                </p>
              </div>

              <div className="bg-background p-6 sm:p-8 rounded-lg shadow-lg scroll-animate-card animation-delay-500 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl">
                <h4 className="font-serif text-lg sm:text-xl mb-3 sm:mb-4">
                  Networking Opportunities
                </h4>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Platform for industry professionals to connect, collaborate,
                  and grow their business through strategic partnerships.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Registration Form */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-background">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 scroll-animate">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6">
                Register as Exhibitor
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground px-4">
                Fill out the form below to register your company for the Indo
                Global Trade Fair
              </p>
            </div>

            <form className="bg-muted/30 p-6 sm:p-8 rounded-lg shadow-xl scroll-animate space-y-4 sm:space-y-6">
              <div>
                <label
                  htmlFor="companyName"
                  className="block text-sm sm:text-base font-medium mb-2"
                >
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  required
                  className="w-full px-4 py-3 rounded-md bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-500 outline-none"
                  placeholder="Enter your company name"
                />
              </div>

              <div>
                <label
                  htmlFor="contactPerson"
                  className="block text-sm sm:text-base font-medium mb-2"
                >
                  Contact Person Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="contactPerson"
                  name="contactPerson"
                  required
                  className="w-full px-4 py-3 rounded-md bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-500 outline-none"
                  placeholder="Enter contact person name"
                />
              </div>

              <div>
                <label
                  htmlFor="designation"
                  className="block text-sm sm:text-base font-medium mb-2"
                >
                  Designation <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="designation"
                  name="designation"
                  required
                  className="w-full px-4 py-3 rounded-md bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-500 outline-none"
                  placeholder="Enter designation"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm sm:text-base font-medium mb-2"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-500 outline-none"
                  placeholder="Enter email address"
                />
              </div>

              <div>
                <label
                  htmlFor="contactNumber"
                  className="block text-sm sm:text-base font-medium mb-2"
                >
                  Contact Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="contactNumber"
                  name="contactNumber"
                  required
                  className="w-full px-4 py-3 rounded-md bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-500 outline-none"
                  placeholder="Enter contact number"
                />
              </div>

              <div>
                <label
                  htmlFor="product"
                  className="block text-sm sm:text-base font-medium mb-2"
                >
                  Product/Service <span className="text-red-500">*</span>
                </label>
                <select
                  id="product"
                  name="product"
                  required
                  className="w-full px-4 py-3 rounded-md bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-500 outline-none"
                >
                  <option value="">Select your industry sector</option>
                  <option value="Hardware & Tools">Hardware & Tools</option>
                  <option value="Toys">Toys</option>
                  <option value="Chemical">Chemical</option>
                  <option value="Electronics & Components">
                    Electronics & Components
                  </option>
                  <option value="Auto Parts">Auto Parts</option>
                  <option value="Construction Material">
                    Construction Material
                  </option>
                  <option value="Agriculture & Equipment's">
                    Agriculture & Equipment's
                  </option>
                  <option value="Plastic & Packaging">
                    Plastic & Packaging
                  </option>
                  <option value="Sports">Sports</option>
                  <option value="Food & Beverage">Food & Beverage</option>
                  <option value="Pharma">Pharma</option>
                  <option value="Surgical Devices">Surgical Devices</option>
                  <option value="Gifting & Stationary">
                    Gifting & Stationary
                  </option>
                  <option value="Furniture">Furniture</option>
                  <option value="Kitchen Wear">Kitchen Wear</option>
                  <option value="Spices">Spices</option>
                  <option value="Footwear">Footwear</option>
                  <option value="Home Décor">Home Décor</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="address"
                  className="block text-sm sm:text-base font-medium mb-2"
                >
                  Company Address <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="address"
                  name="address"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-md bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-500 outline-none resize-none"
                  placeholder="Enter complete company address"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground px-8 py-4 rounded-md hover:bg-primary/90 transition-all duration-500 font-medium text-lg sm:text-xl"
              >
                Submit Registration
              </button>
            </form>
          </div>
        </section>
      </div>
      <Footer />
      <ChatBot />
    </div>
  );
}
