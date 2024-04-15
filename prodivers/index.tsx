"use client";

import { NextUIProvider } from "@nextui-org/react";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/navigation";

interface ProviderProps{
  children: React.ReactNode,
  session?: Session | undefined | null
}
export function Providers({ children, session }: ProviderProps) {
  const router = useRouter();
  return (
    <SessionProvider session={session}>
        <NextUIProvider navigate={router.push}>
          <NextThemesProvider
            enableColorScheme
            attribute="class"
            defaultTheme="light">
            {children}
          </NextThemesProvider>
        </NextUIProvider>
    </SessionProvider>
  );
}
