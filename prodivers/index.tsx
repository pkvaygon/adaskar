"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/navigation";

interface ProviderProps{
  children: React.ReactNode,
}
export function Providers({ children }: ProviderProps) {
  const router = useRouter();
  return (
        <NextUIProvider navigate={router.push}>
          <NextThemesProvider
            enableColorScheme
            attribute="class"
            defaultTheme="light">
            {children}
          </NextThemesProvider>
        </NextUIProvider>
  );
}
