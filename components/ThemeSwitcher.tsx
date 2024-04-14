// app/components/ThemeSwitcher.tsx
"use client";

import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "./../icons/index";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isRotated, setIsRotated] = useState(false);

  const handleButtonClick = () => {
    setIsRotated(true);
    setTheme(theme === "light" ? "dark" : "light");

    setTimeout(() => {
      setIsRotated(false);
    }, 300);
  };
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      style={{ transform: isRotated ? "rotate(90deg)" : "rotate(0)" }}
      onClick={handleButtonClick}
      isIconOnly
      radius="full"
      variant="flat">
      {theme === "light" ? (
        <MoonIcon
          className="text-default-500"
          icon="solar:sun-linear"
          width={24}
        />
      ) : (
        <SunIcon
          className="text-default-500"
          icon="solar:moon-linear"
          width={24}
        />
      )}
    </Button>
  );
}
