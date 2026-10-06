import { Box } from 'patiya';
import { Sidebar } from '../../components/Sidebar';
import { Navbar } from '../../components/Navbar';

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box className="min-h-screen flex flex-col bg-[var(--patiya-color-background)]">
      <Navbar />
      <Box className="flex flex-1 w-full border-t border-[var(--patiya-color-border)]">
        <Sidebar />
        <Box className="flex-1 py-8 px-4 md:px-8 min-w-0">
          <Box className="max-w-3xl mx-auto w-full">
            {children}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
