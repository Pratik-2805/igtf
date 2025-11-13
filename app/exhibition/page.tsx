"use client"
import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { ChatBot } from "@/components/chat-bot"
import { Calendar, Clock, MapPin } from "lucide-react"

interface FormData {
  company_name: string;
  contact_person_name: string;
  designation: string;
  email_address: string;
  contact_number: string;
  product_service: string;
  company_address: string;
}

const API_URL = 'http://localhost:8000/api/exhibitor-registrations/';

export default function ExhibitionPage() {
  const [formData, setFormData] = useState<FormData>({
    company_name: '',
    contact_person_name: '',
    designation: '',
    email_address: '',
    contact_number: '',
    product_service: '',
    company_address: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: 'success', text: 'Registration submitted successfully! We will contact you soon.' });
        // Reset form
        setFormData({
          company_name: '',
          contact_person_name: '',
          designation: '',
          email_address: '',
          contact_number: '',
          product_service: '',
          company_address: ''
        });
        
        // Scroll to message
        window.scrollTo({ top: document.getElementById('registration-form')?.offsetTop! - 100, behavior: 'smooth' });
      } else {
        const errorMsg = Object.values(data).flat().join(', ');
        setMessage({ type: 'error', text: `Error: ${errorMsg}` });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to submit registration. Please check if the server is running and try again.' });
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-32 px-4 bg-gradient-to-b from-muted/30 to-background">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl mb-6 animate-fade-in">Exhibitions</h1>
            <p className="text-xl text-muted-foreground animate-fade-in-delay-1">
              Join us at our upcoming trade fairs in Mumbai and Dubai
            </p>
          </div>
        </section>

        {/* Upcoming Exhibitions */}
        <section className="py-20 px-4 bg-background">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl text-center mb-16 scroll-animate">Upcoming Events</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* India Exhibition */}
              <div className="bg-muted/30 p-8 rounded-lg scroll-animate hover:scale-102 transition-transform duration-700 ease-out shadow-lg">
                <div className="mb-6">
                  <h3 className="font-serif text-3xl mb-2">IGTF Mumbai 2025</h3>
                  <p className="text-muted-foreground flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Bombay Exhibitions Center, Mumbai, India
                  </p>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">December 12-14, 2025</p>
                      <p className="text-sm text-muted-foreground">3-Day Exhibition</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">10:00 AM - 7:00 PM</p>
                      <p className="text-sm text-muted-foreground">Daily Schedule</p>
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
                <button 
                  onClick={() => document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                  className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-all duration-500 font-medium"
                >
                  Register as Exhibitor
                </button>
              </div>

              {/* Dubai Exhibition */}
              <div className="bg-muted/30 p-8 rounded-lg scroll-animate animation-delay-100 hover:scale-102 transition-transform duration-700 ease-out shadow-lg">
                <div className="mb-6">
                  <h3 className="font-serif text-3xl mb-2">IGTF Dubai 2025</h3>
                  <p className="text-muted-foreground flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Dubai Exhibition Center, Dubai, UAE
                  </p>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">February 15-17, 2025</p>
                      <p className="text-sm text-muted-foreground">3-Day Exhibition</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">10:00 AM - 7:00 PM</p>
                      <p className="text-sm text-muted-foreground">Daily Schedule</p>
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
                <button 
                  onClick={() => document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                  className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-all duration-500 font-medium"
                >
                  Register as Exhibitor
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Attractions Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 scroll-animate">
              <h2 className="font-serif text-4xl md:text-5xl mb-6">Exhibition Highlights</h2>
              <p className="text-xl text-muted-foreground italic">What makes IGTF the premier trade fair in India</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-background p-8 rounded-lg shadow-lg scroll-animate-card hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl">
                <h4 className="font-serif text-xl mb-4">Prime Location</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Strategically hosted at Bombay Exhibitions Center with exceptional visibility and footfall, ensuring
                  maximum exposure for exhibitors.
                </p>
              </div>

              <div className="bg-background p-8 rounded-lg shadow-lg scroll-animate-card animation-delay-100 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl">
                <h4 className="font-serif text-xl mb-4">16 Dynamic Sectors</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Hardware & Tools, Toys, Chemical, Electronics, Auto Parts, Construction Material, Agriculture, and
                  more representing diverse industries.
                </p>
              </div>

              <div className="bg-background p-8 rounded-lg shadow-lg scroll-animate-card animation-delay-200 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl">
                <h4 className="font-serif text-xl mb-4">Global Participation</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Drawing exhibitors and buyers from more than 40 countries, offering opportunities for cross-border
                  collaborations.
                </p>
              </div>

              <div className="bg-background p-8 rounded-lg shadow-lg scroll-animate-card animation-delay-300 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl">
                <h4 className="font-serif text-xl mb-4">Extensive B2B Focus</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Premier platform bringing together manufacturers, exporters, distributors, and key decision-makers for
                  meaningful business connections.
                </p>
              </div>

              <div className="bg-background p-8 rounded-lg shadow-lg scroll-animate-card animation-delay-400 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl">
                <h4 className="font-serif text-xl mb-4">Hosted Buyer Program</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Exclusive initiative matching exhibitors with qualified buyers, ensuring focused meetings and higher
                  conversion opportunities.
                </p>
              </div>

              <div className="bg-background p-8 rounded-lg shadow-lg scroll-animate-card animation-delay-500 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl">
                <h4 className="font-serif text-xl mb-4">Networking Opportunities</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Platform for industry professionals to connect, collaborate, and grow their business through strategic
                  partnerships.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Registration Form */}
        <section id="registration-form" className="py-20 px-4 bg-background scroll-mt-20">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 scroll-animate">
              <h2 className="font-serif text-4xl md:text-5xl mb-6">Register as Exhibitor</h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form below to register your company for the Indo Global Trade Fair
              </p>
            </div>

            {/* Success/Error Message */}
            {message && (
              <div 
                className={`mb-6 p-4 rounded-lg border ${
                  message.type === 'success' 
                    ? 'bg-green-50 border-green-200 text-green-800 dark:bg-green-900/20 dark:border-green-800 dark:text-green-200' 
                    : 'bg-red-50 border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-800 dark:text-red-200'
                }`}
              >
                <p className="font-medium">{message.text}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="bg-muted/30 p-8 rounded-lg shadow-xl scroll-animate space-y-6">
              <div>
                <label htmlFor="company_name" className="block text-sm font-medium mb-2">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="company_name"
                  name="company_name"
                  value={formData.company_name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-500 outline-none"
                  placeholder="Enter your company name"
                />
              </div>

              <div>
                <label htmlFor="contact_person_name" className="block text-sm font-medium mb-2">
                  Contact Person Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="contact_person_name"
                  name="contact_person_name"
                  value={formData.contact_person_name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-500 outline-none"
                  placeholder="Enter contact person name"
                />
              </div>

              <div>
                <label htmlFor="designation" className="block text-sm font-medium mb-2">
                  Designation <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="designation"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-500 outline-none"
                  placeholder="Enter designation"
                />
              </div>

              <div>
                <label htmlFor="email_address" className="block text-sm font-medium mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email_address"
                  name="email_address"
                  value={formData.email_address}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-500 outline-none"
                  placeholder="Enter email address"
                />
              </div>

              <div>
                <label htmlFor="contact_number" className="block text-sm font-medium mb-2">
                  Contact Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="contact_number"
                  name="contact_number"
                  value={formData.contact_number}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-500 outline-none"
                  placeholder="Enter contact number"
                />
              </div>

              <div>
                <label htmlFor="product_service" className="block text-sm font-medium mb-2">
                  Product/Service <span className="text-red-500">*</span>
                </label>
                <select
                  id="product_service"
                  name="product_service"
                  value={formData.product_service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-500 outline-none"
                >
                  <option value="">Select your industry sector</option>
                  <option value="Hardware & Tools">Hardware & Tools</option>
                  <option value="Toys">Toys</option>
                  <option value="Chemical">Chemical</option>
                  <option value="Electronics & Components">Electronics & Components</option>
                  <option value="Auto Parts">Auto Parts</option>
                  <option value="Construction Material">Construction Material</option>
                  <option value="Agriculture & Equipment's">Agriculture & Equipment's</option>
                  <option value="Plastic & Packaging">Plastic & Packaging</option>
                  <option value="Sports">Sports</option>
                  <option value="Food & Beverage">Food & Beverage</option>
                  <option value="Pharma">Pharma</option>
                  <option value="Surgical Devices">Surgical Devices</option>
                  <option value="Gifting & Stationary">Gifting & Stationary</option>
                  <option value="Furniture">Furniture</option>
                  <option value="Kitchen Wear">Kitchen Wear</option>
                  <option value="Spices">Spices</option>
                  <option value="Footwear">Footwear</option>
                  <option value="Home Décor">Home Décor</option>
                </select>
              </div>

              <div>
                <label htmlFor="company_address" className="block text-sm font-medium mb-2">
                  Company Address <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="company_address"
                  name="company_address"
                  value={formData.company_address}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-md bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-500 outline-none resize-none"
                  placeholder="Enter complete company address"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-4 rounded-md transition-all duration-500 font-medium text-lg ${
                  isSubmitting 
                    ? 'bg-primary/50 text-primary-foreground cursor-not-allowed' 
                    : 'bg-primary text-primary-foreground hover:bg-primary/90'
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Registration'}
              </button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 bg-background border-t">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h4 className="font-serif text-xl mb-4">Indo Global Trade Fair</h4>
                <p className="text-sm text-muted-foreground">
                  Connecting Indian Enterprise with the World through strategic B2B trade platforms.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <a href="/" className="hover:text-primary transition-colors">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="hover:text-primary transition-colors">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/categories" className="hover:text-primary transition-colors">
                      Categories
                    </a>
                  </li>
                  <li>
                    <a href="/gallery" className="hover:text-primary transition-colors">
                      Gallery
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
                    <a href="/career" className="hover:text-primary transition-colors">
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
  )
}