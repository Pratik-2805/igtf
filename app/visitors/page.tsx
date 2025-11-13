"use client";
import { Navbar } from "@/components/navbar";
import { ChatBot } from "@/components/chat-bot";
import { CheckCircle2 } from "lucide-react";

export default function VisitorsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-20">
        {/* Why Visit */}
        <section className="py-20 px-4 bg-background">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl text-center mb-16 scroll-animate">
              Why Visit IGTF?
            </h2>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="space-y-6 scroll-animate-left">
                <h3 className="font-serif text-2xl">For Trade Buyers</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <span className="text-muted-foreground">
                      Source directly from 400+ manufacturers and exporters
                      across 16 industry sectors
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <span className="text-muted-foreground">
                      Discover new products, innovations, and cutting-edge
                      solutions for your business
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <span className="text-muted-foreground">
                      Network with industry leaders and establish valuable
                      business partnerships
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <span className="text-muted-foreground">
                      Compare prices, quality, and terms from multiple suppliers
                      in one location
                    </span>
                  </li>
                </ul>
              </div>

              <div className="space-y-6 scroll-animate-right">
                <h3 className="font-serif text-2xl">
                  For Industry Professionals
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <span className="text-muted-foreground">
                      Stay updated with the latest industry trends and market
                      insights
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <span className="text-muted-foreground">
                      Attend seminars and workshops by industry experts
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <span className="text-muted-foreground">
                      Explore career opportunities and business collaborations
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <span className="text-muted-foreground">
                      Connect with global trade professionals from 40+ countries
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Registration Benefits */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl text-center mb-16 scroll-animate">
              Visitor Registration Benefits
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background p-8 rounded-lg scroll-animate-card hover:-translate-y-2 transition-all duration-300 shadow-lg">
                <h4 className="font-serif text-xl mb-4">Free Entry Pass</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Get complimentary access to all three days of the exhibition
                  with pre-registration
                </p>
              </div>

              <div className="bg-background p-8 rounded-lg scroll-animate-card animation-delay-100 hover:-translate-y-2 transition-all duration-300 shadow-lg">
                <h4 className="font-serif text-xl mb-4">Priority Access</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Skip the queues with fast-track entry and priority access to
                  special sessions
                </p>
              </div>

              <div className="bg-background p-8 rounded-lg scroll-animate-card animation-delay-200 hover:-translate-y-2 transition-all duration-300 shadow-lg">
                <h4 className="font-serif text-xl mb-4">Event Updates</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Receive exclusive updates about exhibitors, floor plans, and
                  special events
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Registration Form */}
        <section className="py-20 px-4 bg-background">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 scroll-animate">
              <h2 className="font-serif text-4xl md:text-5xl mb-6">
                Register as Visitor
              </h2>
              <p className="text-lg text-muted-foreground">
                Pre-register now for free entry and exclusive benefits
              </p>
            </div>

            <form className="bg-muted/30 p-8 rounded-lg shadow-xl scroll-animate space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium mb-2"
                  >
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 rounded-md bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-500 outline-none"
                    placeholder="Enter first name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium mb-2"
                  >
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 rounded-md bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-500 outline-none"
                    placeholder="Enter last name"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium mb-2"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 rounded-md bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-500 outline-none"
                  placeholder="Enter company name (optional)"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
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
                  htmlFor="phone"
                  className="block text-sm font-medium mb-2"
                >
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 rounded-md bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-500 outline-none"
                  placeholder="Enter phone number"
                />
              </div>

              <div>
                <label
                  htmlFor="interest"
                  className="block text-sm font-medium mb-2"
                >
                  Industry Interest <span className="text-red-500">*</span>
                </label>
                <select
                  id="interest"
                  name="interest"
                  required
                  className="w-full px-4 py-3 rounded-md bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-500 outline-none"
                >
                  <option value="">Select your area of interest</option>
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

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground px-8 py-4 rounded-md hover:bg-primary/90 transition-all duration-500 font-medium text-lg"
              >
                Register as Visitor
              </button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 bg-background border-t">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h4 className="font-serif text-xl mb-4">
                  Indo Global Trade Fair
                </h4>
                <p className="text-sm text-muted-foreground">
                  Connecting Indian Enterprise with the World through strategic
                  B2B trade platforms.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <a
                      href="/"
                      className="hover:text-primary transition-colors"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about"
                      className="hover:text-primary transition-colors"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/exhibition"
                      className="hover:text-primary transition-colors"
                    >
                      Exhibition
                    </a>
                  </li>
                  <li>
                    <a
                      href="/categories"
                      className="hover:text-primary transition-colors"
                    >
                      Categories
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Email: info@indoglobaltradefair.com</li>
                  <li>Phone: +91 XXX XXX XXXX</li>
                  <li>
                    <a
                      href="/career"
                      className="hover:text-primary transition-colors"
                    >
                      Career Opportunities
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center pt-8 border-t text-muted-foreground text-sm">
              <p>© 2025 Indo Global Trade Fair. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>

      <ChatBot />
    </div>
  );
}
