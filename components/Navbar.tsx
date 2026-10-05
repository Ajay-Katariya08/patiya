"use client";
import Link from 'next/link';
import { Box, Button, IconButton, useTheme } from 'patiya';
import { useEffect, useState } from 'react';
import { docsNav } from './Sidebar';
import { Logo } from './Logo';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <Box className="h-16 border-b border-[var(--patiya-color-border)] sticky top-0 bg-[var(--patiya-color-background)]/80 backdrop-blur-md z-50 flex items-center px-6 md:px-12 justify-between">
        <Link href="/" className="font-bold text-xl tracking-tight flex items-center gap-2">
          <Logo className="w-7 h-7" />
          Patiya UI
        </Link>
        <Box className="flex items-center gap-4 md:gap-6">
          <Box className="hidden md:flex items-center gap-6">
            <Link href="/docs" className="text-sm font-medium text-[var(--patiya-color-muted-foreground)] hover:text-[var(--patiya-color-foreground)] transition-colors">Documentation</Link>
            <Link href="https://github.com" target="_blank" className="text-sm font-medium text-[var(--patiya-color-muted-foreground)] hover:text-[var(--patiya-color-foreground)] transition-colors">GitHub</Link>
          </Box>
          {mounted && (
            <IconButton 
              variant="ghost" 
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
          )}
          <button 
            className="md:hidden p-2 -mr-2 text-[var(--patiya-color-foreground)]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
            )}
          </button>
        </Box>
      </Box>

      {/* Mobile Menu */}
      {isOpen && (
        <Box className="fixed inset-0 top-16 z-40 bg-[var(--patiya-color-background)] overflow-y-auto p-6 md:hidden">
          <Box className="space-y-8 pb-12">
            <Box className="flex flex-col space-y-4 pb-4 border-b border-[var(--patiya-color-border)]">
              <Link href="/docs" className="text-sm font-medium">Documentation</Link>
              <Link href="https://github.com" className="text-sm font-medium">GitHub</Link>
            </Box>
            {docsNav.map((section) => (
              <Box key={section.title} className="space-y-3">
                <h4 className="font-semibold text-xs uppercase tracking-wider text-[var(--patiya-color-muted-foreground)]">
                  {section.title}
                </h4>
                <Box className="flex flex-col space-y-1">
                  {section.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`px-3 py-2 text-sm rounded-md transition-colors -mx-3 ${
                        pathname === item.href 
                          ? 'bg-[var(--patiya-color-primary)]/10 text-[var(--patiya-color-primary)] font-medium' 
                          : 'text-[var(--patiya-color-foreground)] hover:bg-[var(--patiya-color-muted)]'
                      }`}
                    >
                      {item.title}
                    </Link>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </>
  );
}
