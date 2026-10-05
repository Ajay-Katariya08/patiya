"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { Box } from 'patiya';

export const docsNav = [
  {
    title: 'Getting Started',
    items: [{ title: 'Installation', href: '/docs' }]
  },
  {
    title: 'Elements',
    items: [
      { title: 'Button', href: '/docs/components/button' },
      { title: 'Badge', href: '/docs/components/badge' },
      { title: 'Spinner', href: '/docs/components/spinner' },
    ]
  },
  {
    title: 'Forms',
    items: [
      { title: 'Input', href: '/docs/components/input' },
      { title: 'Textarea', href: '/docs/components/textarea' },
      { title: 'Switch', href: '/docs/components/switch' },
      { title: 'Checkbox', href: '/docs/components/checkbox' },
      { title: 'Radio', href: '/docs/components/radio' },
      { title: 'Select', href: '/docs/components/select' },
    ]
  },
  {
    title: 'Feedback',
    items: [
      { title: 'Alert', href: '/docs/components/alert' },
      { title: 'Progress', href: '/docs/components/progress' },
      { title: 'Skeleton', href: '/docs/components/skeleton' },
    ]
  },
  {
    title: 'Overlays',
    items: [
      { title: 'Modal', href: '/docs/components/modal' },
      { title: 'Drawer', href: '/docs/components/drawer' },
      { title: 'Tooltip', href: '/docs/components/tooltip' },
      { title: 'Popover', href: '/docs/components/popover' },
      { title: 'Dropdown Menu', href: '/docs/components/dropdown-menu' },
      { title: 'Toast', href: '/docs/components/toast' },
    ]
  },
  {
    title: 'Data Display',
    items: [
      { title: 'Card', href: '/docs/components/card' },
      { title: 'Avatar', href: '/docs/components/avatar' },
      { title: 'Chip', href: '/docs/components/chip' },
      { title: 'Table', href: '/docs/components/table' },
      { title: 'Timeline', href: '/docs/components/timeline' },
      { title: 'Stepper', href: '/docs/components/stepper' },
    ]
  },
  {
    title: 'Navigation',
    items: [
      { title: 'Tabs', href: '/docs/components/tabs' },
      { title: 'Accordion', href: '/docs/components/accordion' },
      { title: 'Breadcrumb', href: '/docs/components/breadcrumb' },
      { title: 'Pagination', href: '/docs/components/pagination' },
      { title: 'Navbar', href: '/docs/components/navbar' },
      { title: 'Command', href: '/docs/components/command' },
    ]
  },
  {
    title: 'Advanced',
    items: [
      { title: 'Chart', href: '/docs/components/chart' },
      { title: 'Rich Text Editor', href: '/docs/components/rich-text-editor' },
    ]
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const activeRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (activeRef.current) {
      activeRef.current.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }
  }, []);

  return (
    <Box className="w-[280px] shrink-0 border-r border-[var(--patiya-color-border)] hidden md:block bg-[var(--patiya-color-background)]">
      <Box className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto py-8 pl-6 md:pl-12 pr-6">
        <Box className="space-y-8">
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
                    ref={pathname === item.href ? activeRef : null}
                    className={`px-3 py-2 text-sm rounded-md transition-colors ${
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
    </Box>
  );
}
