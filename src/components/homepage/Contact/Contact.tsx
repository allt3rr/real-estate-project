import React from "react";
import ImagesBackgroundContactSection from "./isMobile/ImagesBackgroundContactSection";

const ContactSection = () => {
  return (
    <div className="w-screen h-screen relative sm:mt-[35%] xl:mt-[10%] imageBackground">
      <ImagesBackgroundContactSection />
      <div className="w-full h-full bg-opacity-30 bg-black z-10 absolute top-0 left-0 flex items-center justify-center">
        <div className="CustomBg w-5/6 sm:w-2/3 md:w-1/2 h-4/5 xl:h-2/3 rounded-3xl flex items-center flex-col">
          <h1 className="text-white text-3xl my-6 sm:my-10 text-center">
            Skontaktuj się z nami!
          </h1>
          <div className="flex flex-col xl:flex-row w-full items-center">
            <p className="w-5/6 text-center xl:text-left mx-auto xl:mx-0 xl:w-1/3 xl:ms-10 xl:me-6 text-white text-base sm:text-base mb-2 sm:mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in
              ex elementum neque scelerisque interdum. Fusce ultrices consequat
              dui quis laoreet. Nullam dapibus venenatis erat in aliquet.
            </p>
            <form
              action="#"
              className="flex flex-col gap-6 sm:gap-10 items-center w-2/3 mt-4 lg:mt-14"
            >
              <input
                type="text"
                placeholder="E-mail"
                className="inputStyles p-2 text-lg w-full sm:w-5/6 xl:w-5/6 mx-auto text-white mt-4 xl:mt-0"
              />
              <textarea
                placeholder="Wiadomość"
                className="inputStyles p-2 text-lg w-full sm:w-5/6 xl:w-5/6 mx-auto h-[200px] text-white"
              ></textarea>
              <input
                type="submit"
                value="Wyślij"
                className="bg-[#003861] text-white uppercase rounded-full p-2 cursor-pointer w-2/3 sm:w-1/3 xl:self-start xl:ms-12"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
