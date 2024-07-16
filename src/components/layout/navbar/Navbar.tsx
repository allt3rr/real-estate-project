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
import { useMediaQuery } from "@/hooks/isMobile";
import { MenuIcon } from "lucide-react";
import "./style.css";

const Navbar = () => {
  const isScrolled = useScroll();
  const isMobile = useMediaQuery();

  return (
    <div className="flex items-center justify-center">
      <div
        className={
          "fixed flex items-center bg-white pl-2 transitions z-50 " +
          (isScrolled ? "top-0 w-full" : "top-10 w-11/12 lg:w-3/4 rounded-full")
        }
      >
        {isMobile ? (
          <>
            <div
              className={
                "flex items-center mr-10 w-2/12 " +
                (isScrolled ? "text-md" : "text-xl")
              }
            >
              <Image
                src={Logo}
                alt="Logo firmy [firma]"
                height={isScrolled ? 55 : 80}
                width={isScrolled ? 55 : 80}
              />
              Company
            </div>
            <div className="w-10/12 flex justify-end">
              <Drawer direction="right">
                <DrawerTrigger>
                  <MenuIcon />
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerClose>
                    <Button
                      variant="destructive"
                      className="absolute right-1 top-1 w-0 h-6"
                    >
                      X
                    </Button>
                  </DrawerClose>
                  <DrawerDescription className="flex justify-center mt-10">
                    <Menu />
                  </DrawerDescription>
                </DrawerContent>
              </Drawer>
            </div>
          </>
        ) : (
          <>
            <div
              className={
                "flex items-center mr-10 w-2/12 " +
                (isScrolled ? "text-md" : "text-xl")
              }
            >
              <Image
                src={Logo}
                alt="Logo firmy [firma]"
                height={isScrolled ? 55 : 80}
                width={isScrolled ? 55 : 80}
              />
              Company
            </div>
            <div className="w-10/12 xl:w-8/12 flex justify-center">
              <Menu />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
