"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import { redirectHome } from "@/action/redirectHome";

export default function MyNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Health Chat",
    "Skin Cancer Detector",
    "Heart Beat Analyzor",
  ];

  return (
    <Navbar
      className="z-10 dark sticky m-0 text-foreground bg-background "
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand
          className="cursor-pointer"
          onClick={() => {
            redirectHome();
          }}
        >
          {/* <AcmeLogo /> */}
          <p className="font-bold text-inherit">Project Name</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/healthchat">
            Health Chat
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/skincancer" color="foreground">
            Skin Cancer Detector
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/heartbeat">
            Heart Beat Analyzor
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="dark text-foreground bg-background">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
