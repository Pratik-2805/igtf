"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ChatBot } from "@/components/chat-bot";

export default function CategoriesPage() {
  const categories = [
    { name: "Spices", imageUrl: "/categories/spices.webp" },
    { name: "Footwear", imageUrl: "/categories/footwear.webp" },
    { name: "Toys", imageUrl: "/categories/toys.webp" },
    { name: "Chemical", imageUrl: "/categories/chemicals.webp" },
    { name: "Hardware & Tools", imageUrl: "/categories/hardware.webp" },
    { name: "Electronics & Components", imageUrl: "/categories/electronics.webp" },
    { name: "Auto Parts", imageUrl: "/categories/auto.webp" },
    { name: "Construction Material", imageUrl: "/categories/construction.webp" },
    { name: "Agriculture & Equipment's", imageUrl: "/categories/agriculture.webp" },
    { name: "Plastic & Packaging", imageUrl: "/categories/plastic.webp" },
    { name: "Sports", imageUrl: "/categories/sports.webp" },
    { name: "Food & Beverage", imageUrl: "/categories/food.webp" },
    { name: "Pharmaceutical Products", imageUrl: "/categories/pharma.webp" },
    { name: "Surgical Devices", imageUrl: "/categories/surgical.webp" },
    { name: "Gifting & Stationary", imageUrl: "/categories/gifting.webp" },
    { name: "Furniture", imageUrl: "/categories/furniture.webp" },
    { name: "Kitchenware", imageUrl: "/categories/kitchenware.webp" },
    { name: "Home Décor", imageUrl: "/categories/home.webp" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [overlayVisible, setOverlayVisible] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % categories.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setOverlayVisible(false);
    const timer = setTimeout(() => setOverlayVisible(true), 300);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  const getSlideStyle = (index: number) => {
    const offset = index - activeIndex;
    const total = categories.length;
    const half = Math.floor(total / 2);
    let position = offset;

    if (offset > half) position = offset - total;
    if (offset < -half) position = offset + total;

    const translateX = position * 160;
    const scale = 1 - Math.abs(position) * 0.1;
    const zIndex = 50 - Math.abs(position);
    const opacity = Math.abs(position) > 4 ? 0 : 1;

    return {
      transform: `translateX(${translateX}px) scale(${scale})`,
      zIndex,
      opacity,
      transition: "all 0.8s ease",
    };
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <div className="pt-15">
        {/* Hero Section */}
        <section className="relative py-12 px-4 bg-gradient-to-b from-muted/30 to-background text-center">
          <h1 className="font-serif text-5xl md:text-6xl mb-4">Exhibition Categories</h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Explore 16 dynamic sectors representing diverse industries
          </p>
        </section>

        {/* Animation Keyframes */}
        <style jsx global>{`
        @keyframes slideUpFade {
          0% {
            opacity: 0;
            transform: translateY(15px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideUpFade {
          animation: slideUpFade 0.6s ease-out forwards;
        }

        @keyframes fadeInOverlay {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeInOverlay {
          animation: fadeInOverlay 0.5s ease-in forwards;
        }
      `}</style>

        {/* Carousel Section */}
        <section className="py-10 sm:py-12 bg-gradient-to-b from-[#FEF9F4] to-[#E59E54]/30 relative overflow-hidden">
          <div className="relative flex items-center justify-center h-[380px] sm:h-[460px] md:h-[520px]">
            <div className="relative w-full flex items-center justify-center h-full">
              {categories.map((cat, i) => {
                const isActive = i === activeIndex;
                return (
                  <div
                    key={i}
                    className="absolute rounded-2xl overflow-hidden shadow-lg transition-transform duration-700 w-[200px] h-[280px] sm:w-[260px] sm:h-[360px] md:w-[300px] md:h-[430px]"
                    style={getSlideStyle(i)}
                  >
                    <Image
                      src={cat.imageUrl}
                      alt={cat.name}
                      fill
                      sizes="(max-width: 640px) 200px, (max-width: 1024px) 260px, 300px"
                      priority={i < 3}
                      className={`object-cover rounded-2xl transition-all duration-700 ${isActive ? "brightness-100" : "brightness-75 blur-[1px]"
                        }`}
                    />

                    {isActive && (
                      <>
                        {overlayVisible && (
                          <div className="absolute inset-0 bg-black/40 animate-fadeInOverlay" />
                        )}
                        {overlayVisible && (
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent py-3 sm:py-4 animate-slideUpFade">
                            <h3 className="text-white text-base sm:text-lg md:text-xl font-semibold text-center drop-shadow-lg">
                              {cat.name}
                            </h3>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={() =>
                setActiveIndex(
                  (prev) => (prev - 1 + categories.length) % categories.length
                )
              }
              className="absolute left-4 sm:left-8 md:left-10 top-1/2 -translate-y-1/2 bg-[#002B5B] text-white rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-[#003C7B] transition z-50 shadow-md"
            >
              &#8249;
            </button>

            <button
              onClick={() =>
                setActiveIndex((prev) => (prev + 1) % categories.length)
              }
              className="absolute right-4 sm:right-8 md:right-10 top-1/2 -translate-y-1/2 bg-[#002B5B] text-white rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-[#003C7B] transition z-50 shadow-md"
            >
              &#8250;
            </button>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              Find Your Industry Sector
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Register as an exhibitor in your category and connect with
              thousands of trade buyers from around the world.
            </p>
            <a href="/exhibition">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-md hover:bg-primary/90 transition-all duration-500 font-medium text-lg">
                Register Now
              </button>
            </a>
          </div>
        </section>

        <Footer />
        <ChatBot />

      </div>
    </div>
  );
}
