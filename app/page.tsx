"use client";

import { Button, Box, Badge, IconButton, Spinner, useTheme } from "patiya";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "../components/Logo";

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
    <main className="flex flex-col items-center justify-center min-h-screen p-8 gap-8">
      <Box className="absolute top-4 right-4">
        <ThemeToggle />
      </Box>

      <Box className="text-center space-y-4 max-w-2xl flex flex-col items-center">
        <Logo className="w-20 h-20 mb-2 drop-shadow-md" />
        <Badge variant="soft" color="primary">Patiya v0.1.0</Badge>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Build Premium UIs Fast.
        </h1>
        <p className="text-lg text-[var(--patiya-color-muted-foreground)]">
          A fully accessible, customizable React library styled with Tailwind CSS v4 and CSS variables.
        </p>
      </Box>

      <Box className="flex flex-wrap items-center justify-center gap-4">
        <Link href="/docs">
          <Button size="lg" color="primary">Get Started</Button>
        </Link>
        <Link href="/docs">
          <Button size="lg" variant="outline" color="secondary">Documentation</Button>
        </Link>
      </Box>

      <Box className="w-full max-w-4xl p-8 rounded-2xl border bg-[var(--patiya-color-card)] shadow-[var(--patiya-shadow-md)] mt-8">
        <h3 className="text-xl font-semibold mb-6">Component Preview: Button</h3>
        
        <Box className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Box className="flex flex-col gap-4">
            <h4 className="font-medium text-sm text-[var(--patiya-color-muted-foreground)]">Variants</h4>
            <Box className="flex flex-wrap gap-2">
              <Button variant="solid">Solid</Button>
              <Button variant="soft">Soft</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </Box>
          </Box>

          <Box className="flex flex-col gap-4">
            <h4 className="font-medium text-sm text-[var(--patiya-color-muted-foreground)]">Colors (Soft)</h4>
            <Box className="flex flex-wrap gap-2">
              <Button variant="soft" color="primary">Primary</Button>
              <Button variant="soft" color="destructive">Destructive</Button>
              <Button variant="soft" color="success">Success</Button>
              <Button variant="soft" color="warning">Warning</Button>
            </Box>
          </Box>

          <Box className="flex flex-col gap-4">
            <h4 className="font-medium text-sm text-[var(--patiya-color-muted-foreground)]">States & Icons</h4>
            <Box className="flex flex-wrap gap-2 items-center">
              <Button loading>Saving</Button>
              <Button disabled>Disabled</Button>
              <IconButton icon={<Spinner size="sm" />} aria-label="Loading icon" />
            </Box>
          </Box>
        </Box>
      </Box>
    </main>
  );
}
