"use client";

import React from "react";
import ImagesBackgroundContactSection from "./isMobile/ImagesBackgroundContactSection";

const ContactSection = () => {
  return (
    <div className="relative min-h-[600px] md:min-h-screen py-16 md:py-24 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ImagesBackgroundContactSection />
        <div className="absolute inset-0 bg-black/50 z-[5]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 flex justify-center">
        <div className="bg-[#008EF4]/85 backdrop-blur-md w-full max-w-4xl rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/20 text-white">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-8 font-jost uppercase tracking-wider">
            Skontaktuj się z nami!
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5 text-center lg:text-left">
              <p className="text-base sm:text-lg leading-relaxed text-white/90 font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in
                ex elementum neque scelerisque interdum. Fusce ultrices consequat
                dui quis laoreet. Nullam dapibus venenatis erat in aliquet.
              </p>
              <div className="mt-8 hidden lg:block w-16 h-1 bg-white rounded-full opacity-60" />
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="lg:col-span-7 flex flex-col gap-5 w-full"
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs uppercase tracking-wider font-bold text-white/80">E-mail</label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="Twój adres e-mail"
                  className="bg-black/30 border border-white/20 focus:border-white rounded-xl p-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all text-base"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs uppercase tracking-wider font-bold text-white/80">Wiadomość</label>
                <textarea
                  id="message"
                  required
                  placeholder="Jak możemy Ci pomóc?"
                  className="bg-black/30 border border-white/20 focus:border-white rounded-xl p-3 h-32 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all resize-none text-base"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#003861] hover:bg-[#00223d] text-white font-bold uppercase tracking-wider rounded-xl py-3 px-8 transition-colors self-center lg:self-start shadow-md hover:shadow-lg mt-2 cursor-pointer"
              >
                Wyślij
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
