/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { Suspense } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  Badge,
} from "@nextui-org/react";

import SelectCategory from "../components/SearchAds/SelectCategory";
import Loading from "@/app/search-ads/loading";

import { navLinks } from "@/static";
import { LogoIcon } from "@/icons";
import { ThemeSwitcher } from "./ThemeSwitcher";
import SelectStateComponent from "./SelectStateComponent";
import NotificationBage from './ui/notificationBage';
import SearchBar from "./ui/searchbar";

export default function Header() {
 
  return (
    <Navbar
      classNames={{
        // base: "lg:bg-transparent lg:backdrop-filter-none",
        item: "data-[active=true]:text-primary",
        wrapper: "px-4 sm:px-6",
      }}
      height="60px">
      <NavbarBrand className="flex gap-2">
        <NavbarMenuToggle className="mr-2 h-6 sm:hidden" />
        <LogoIcon size={24} width={24} height={24} />
        <p className="font-bold text-inherit">AdZone</p>
      </NavbarBrand>
      <Suspense fallback={<Loading />}>
        <SelectCategory className="mr-auto" />
      </Suspense>
      <NavbarItem className="w-full max-md:hidden">
        <SearchBar/>
      </NavbarItem>

      <NavbarContent
        className="ml-auto flex h-12 max-w-max items-center gap-2 rounded-full p-0 lg:bg-content2 lg:p-1 lg:dark:bg-content1"
        justify="end">
        <NavbarItem className="w-[180px] max-md:hidden">
          <SelectStateComponent />
        </NavbarItem>
        <NavbarItem className=" sm:flex">
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem className="flex max-md:hidden">
          <NotificationBage/>
        </NavbarItem>
        <NavbarItem className="px-2">
          {true ? (
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <button className="mt-1 h-8 w-8 outline-none transition-transform">
                  <Badge
                    className="border-transparent"
                    color="success"
                    content=""
                    placement="bottom-right"
                    shape="circle"
                    size="sm">
                    <Avatar size="sm" />
                  </Badge>
                </button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem
                  isReadOnly
                  key="profile"
                  className="h-14 gap-2 select-none cursor-default">
                  <p className="font-semibold">Signed in as</p>
                  <p className="font-semibold">somemail@gmail.com</p>
                </DropdownItem>
                <DropdownItem key="settings">My Settings</DropdownItem>
                <DropdownItem key="team_settings">Team Settings</DropdownItem>
                <DropdownItem key="analytics">Analytics</DropdownItem>
                <DropdownItem key="system">System</DropdownItem>
                <DropdownItem key="configurations">Configurations</DropdownItem>
                <DropdownItem key="help_and_feedback">
                  Help & Feedback
                </DropdownItem>
                <DropdownItem key="logout" color="danger">
                  <Button>Log Out</Button>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ) : (
            <Button>Sign In</Button>
          )}
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {navLinks.map((el) => (
          <NavbarMenuItem key={el.id}>
            <Link className="flex gap-2 text-inherit" href={el.href}>
              {el.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
