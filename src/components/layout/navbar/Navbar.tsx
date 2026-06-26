"use client";

import Image from "next/image";
import Logo from "/public/assets/navbar/menu_logo.svg";
import Menu from "./Menu/Menu";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { useScroll } from "@/hooks/isScrolled";
import { MenuIcon } from "lucide-react";
import "./style.css";

const Navbar = () => {
  const isScrolled = useScroll();

  return (
    <div className="flex items-center justify-center">
      <div
        className={
          "fixed flex items-center bg-white px-4 py-2 transitions z-50 " +
          (isScrolled ? "top-0 w-full shadow-md" : "top-6 w-11/12 lg:w-3/4 rounded-full shadow-lg border border-gray-100")
        }
      >
        <div className="flex w-full items-center justify-between lg:hidden">
          <div className="flex items-center gap-2">
            <Image
              src={Logo}
              alt="Logo firmy [firma]"
              height={isScrolled ? 45 : 60}
              width={isScrolled ? 45 : 60}
              className="transition-all duration-300"
            />
            <span className={`font-jost font-bold text-gray-800 ${isScrolled ? "text-lg" : "text-xl"}`}>
              Company
            </span>
          </div>
          <div className="flex justify-end">
            <Drawer direction="right">
              <DrawerTrigger asChild>
                <button aria-label="Menu" className="p-2 text-gray-700 hover:text-[#008EF4] transition-colors">
                  <MenuIcon className="h-6 w-6" />
                </button>
              </DrawerTrigger>
              <DrawerContent className="p-6 bg-white">
                <div className="flex justify-end mb-8">
                  <DrawerClose asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full hover:bg-gray-100"
                    >
                      <span className="text-xl font-bold">✕</span>
                    </Button>
                  </DrawerClose>
                </div>
                <DrawerDescription className="flex justify-center mt-10">
                  <Menu />
                </DrawerDescription>
              </DrawerContent>
            </Drawer>
          </div>
        </div>

        <div className="hidden lg:flex w-full items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src={Logo}
              alt="Logo firmy [firma]"
              height={isScrolled ? 50 : 70}
              width={isScrolled ? 50 : 70}
              className="transition-all duration-300"
            />
            <span className={`font-jost font-bold text-gray-800 transition-all ${isScrolled ? "text-lg" : "text-2xl"}`}>
              Company
            </span>
          </div>
          <div className="w-10/12 xl:w-8/12 flex justify-center">
            <Menu />
          </div>
          <div className="w-[120px]" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
