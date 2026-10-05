"use client";

import { Button, Box, Badge, IconButton, Spinner, useTheme } from "patiya";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "../components/Logo";
import { Footer } from "../components/Footer";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  // Avoid hydration mismatch by waiting for mount
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <IconButton 
      variant="outline" 
      color="secondary" 
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle theme"
      icon={
        theme === 'dark' ? (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        )
      }
    />
  );
}

export default function Home() {
  return (
    <Box className="flex flex-col min-h-screen">
      <main className="flex-1 flex flex-col items-center px-4 sm:px-6 md:px-8 py-12 md:py-24 gap-12 relative overflow-hidden">
        {/* Background decoration */}
        <Box 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[300px] md:h-[500px] opacity-20 pointer-events-none" 
          style={{
            background: 'radial-gradient(circle at top, var(--patiya-color-primary) 0%, transparent 70%)'
          }} 
        />

        <Box className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10">
          <ThemeToggle />
        </Box>

        <Box className="text-center space-y-6 max-w-3xl flex flex-col items-center mt-8 md:mt-12 relative z-10 w-full">
          <Logo className="w-16 h-16 sm:w-20 sm:h-20 mb-2 drop-shadow-md" />
          <Badge variant="soft" color="primary" className="text-xs sm:text-sm">Patiya v0.1.1</Badge>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-medium tracking-tight px-4 leading-tight">
            Build Premium <br className="hidden sm:block" /> UIs Fast.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[var(--patiya-color-muted-foreground)] max-w-2xl px-4">
            A fully accessible, customizable React library styled with Tailwind CSS v4 and native CSS variables.
          </p>
        </Box>

        <Box className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md sm:max-w-none px-4 sm:px-0 relative z-10">
          <Link href="/docs" className="w-full sm:w-auto">
            <Button size="lg" color="primary" className="w-full sm:w-auto text-base h-12 px-8">Get Started</Button>
          </Link>
          <Link href="/docs" className="w-full sm:w-auto">
            <Button size="lg" variant="outline" color="secondary" className="w-full sm:w-auto text-base h-12 px-8">Documentation</Button>
          </Link>
        </Box>

        <Box className="w-full max-w-4xl p-5 sm:p-8 rounded-2xl sm:rounded-3xl border bg-[var(--patiya-color-card)]/80 backdrop-blur-sm shadow-[var(--patiya-shadow-lg)] mt-4 sm:mt-8 relative z-10">
          <h3 className="text-lg sm:text-xl font-semibold mb-6 sm:mb-8 text-center sm:text-left">Component Preview</h3>
          
          <Box className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
            <Box className="flex flex-col gap-4">
              <h4 className="font-medium text-sm text-[var(--patiya-color-muted-foreground)] border-b border-[var(--patiya-color-border)] pb-2">Button Variants</h4>
              <Box className="flex flex-wrap gap-2 sm:gap-3">
                <Button variant="solid">Solid</Button>
                <Button variant="soft">Soft</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
              </Box>
            </Box>

            <Box className="flex flex-col gap-4">
              <h4 className="font-medium text-sm text-[var(--patiya-color-muted-foreground)] border-b border-[var(--patiya-color-border)] pb-2">Colors (Soft)</h4>
              <Box className="flex flex-wrap gap-2 sm:gap-3">
                <Button variant="soft" color="primary">Primary</Button>
                <Button variant="soft" color="destructive">Danger</Button>
                <Button variant="soft" color="success">Success</Button>
                <Button variant="soft" color="warning">Warning</Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </main>
      <Footer />
    </Box>
  );
}
