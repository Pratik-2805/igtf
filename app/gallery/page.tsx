"use client";
import { Navbar } from "@/components/navbar";
import { ChatBot } from "@/components/chat-bot";
import { Footer } from "@/components/footer";

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-32 px-4 bg-gradient-to-b from-muted/30 to-background">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl mb-6 animate-fade-in">
              Gallery
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in-delay-1">
              Explore highlights from our previous exhibitions
            </p>
          </div>
        </section>

        {/* Gallery Grid - Placeholder for images */}
        <section className="py-20 px-4 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 scroll-animate">
              <h2 className="font-serif text-3xl md:text-4xl mb-4">
                Exhibition Moments
              </h2>
              <p className="text-muted-foreground">
                Please upload your gallery images to showcase your exhibition
                highlights
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Placeholder for gallery images */}
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="aspect-square bg-muted/30 rounded-lg overflow-hidden scroll-animate-card hover:scale-105 transition-all duration-500 flex items-center justify-center"
                >
                  <p className="text-muted-foreground text-sm">
                    Gallery Image {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
      <Footer />
      <ChatBot />
    </div>
  );
}
