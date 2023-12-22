"use client";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Link from "next/link";
export const Nav = () => {
  return (
    <>
      <Navbar isBlurred isBordered>
        <NavbarBrand className="font-extrabold">Tasks By Shaharyar</NavbarBrand>
        <NavbarContent>
          <NavbarItem>
            <Button color="primary" variant="flat">
              <Link href={"/"}>Home</Link>
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
};
