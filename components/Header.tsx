/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React from "react";
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
  Popover,
  PopoverContent,
  PopoverTrigger,
  Avatar,
  Badge,
} from "@nextui-org/react";
import { Icon } from "@iconify/react";

import { navLinks } from "@/static";
import { LogoIcon } from "@/icons";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { signIn, signOut, useSession } from "next-auth/react";
import SelectStateComponent from "./SelectStateComponent";

export default function Header() {
  const user = useSession().data?.user
  React.useEffect(() => {
    console.log(user)
  },[user])
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
        <p className="font-bold text-inherit">AdAskar</p>        
      </NavbarBrand>
      <NavbarContent
        className="ml-4 hidden h-12 w-full max-w-fit gap-4 rounded-full bg-content2 px-4 dark:bg-content1 sm:flex"
        justify="center">
        {navLinks.map((el) => (
          <NavbarItem key={el.id}>
            <Link className="flex gap-2 text-inherit" href={el.href}>
              {el.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent
        className="ml-auto flex h-12 max-w-max items-center gap-2 rounded-full p-0 lg:bg-content2 lg:p-1 lg:dark:bg-content1"
        justify="end"
      >
        <NavbarItem className="w-[180px] max-md:hidden">
         <SelectStateComponent/>
        </NavbarItem>
        <NavbarItem className=" sm:flex">
          <ThemeSwitcher/>
        </NavbarItem>
        <NavbarItem className="flex max-md:hidden">
          <Popover offset={12} placement="bottom-end">
            <PopoverTrigger>
              <Button
                disableRipple
                isIconOnly
                className="overflow-visible"
                radius="full"
                variant="light">
                <Badge color="danger" content="5" showOutline={false} size="md">
                  <Icon
                    className="text-default-500"
                    icon="solar:bell-linear"
                    width={22}
                  />
                </Badge>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="max-w-[90vw] p-0 sm:max-w-[380px]">
                          {/* <NotificationsCard className="w-full shadow-none" /> */}
                          koko
            </PopoverContent>
          </Popover>
        </NavbarItem>
        <NavbarItem className="px-2">
          {
            user ? (
              
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
                  <Avatar
                    size="sm"
                    src={user?.avatar}
                  />
                </Badge>
              </button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem isReadOnly key="profile" className="h-14 gap-2 select-none cursor-default">
                <p className="font-semibold">Signed in as</p>
                    <p className="font-semibold">{user?.email}</p>
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
                    <Button onClick={()=> signOut()}>
                      Log Out
               </Button>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
            ) : (
                <Button onClick={()=> signIn('google')}>Sign In</Button>
          )
          }
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
