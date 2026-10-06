"use client";

import { use } from 'react';
import { componentsRegistry } from '../../../../registry/components';
import { notFound } from 'next/navigation';
import { Box } from 'patiya';
import { CodeTabs } from '../../../../components/CodeTabs';

export default function ComponentPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const comp = componentsRegistry[slug];
  
  if (!comp) {
    notFound();
  }

  return (
    <Box className="max-w-4xl space-y-12 pb-20">
      <Box className="space-y-4">
        <h1 className="text-4xl font-medium tracking-tight lg:text-5xl">{comp.title}</h1>
        <p className="text-xl text-(--patiya-color-muted-foreground) leading-relaxed">
          {comp.description}
        </p>
      </Box>

      <Box className="space-y-6 mt-8">
        <h2 className="text-2xl font-semibold border-b border-[var(--patiya-color-border)] pb-3">Installation</h2>
        <CodeTabs tabs={[{ name: 'import', code: comp.installation || `import { ${comp.title.split(' / ')[0].replace(' ', '')} } from 'patiya';` }]} />
      </Box>

      {comp.examples ? (
        <Box className="space-y-16 mt-12">
          {comp.examples.map((example: any, i: number) => (
            <Box key={i} className="space-y-6">
              <Box>
                <h2 className="text-2xl font-semibold border-b border-[var(--patiya-color-border)] pb-3">{example.title}</h2>
                {example.description && <p className="mt-2 text-(--patiya-color-muted-foreground)">{example.description}</p>}
              </Box>
              <Box className="p-12 border border-(--patiya-color-border) rounded-2xl bg-(--patiya-color-card) flex items-center justify-center min-h-50 shadow-sm relative overflow-hidden">
                <Box className="absolute inset-0 bg-grid-[var(--patiya-color-border)]/[0.2] bg-size-[20px_20px]" />
                <Box className="relative z-10 w-full flex justify-center">
                  {example.preview}
                </Box>
              </Box>
              <CodeTabs tabs={[{ name: 'tsx', code: example.code }]} />
            </Box>
          ))}
        </Box>
      ) : (
        <>
          <Box className="space-y-6 mt-12">
            <h2 className="text-2xl font-semibold border-b border-[var(--patiya-color-border)] pb-3">Preview</h2>
            <Box className="p-12 border border-[var(--patiya-color-border)] rounded-2xl bg-[var(--patiya-color-card)] flex items-center justify-center min-h-[300px] shadow-sm relative overflow-hidden">
              <Box className="absolute inset-0 bg-grid-[var(--patiya-color-border)]/[0.2] bg-[size:20px_20px]" />
              <Box className="relative z-10 w-full flex justify-center">
                {comp.preview}
              </Box>
            </Box>
          </Box>
          <Box className="space-y-6 mt-12">
            <h2 className="text-2xl font-semibold border-b border-[var(--patiya-color-border)] pb-3">Usage</h2>
            <CodeTabs tabs={[{ name: 'tsx', code: comp.code }]} />
          </Box>
        </>
      )}

      {comp.props && (
        <Box className="space-y-6 mt-12">
          <h2 className="text-2xl font-semibold border-b border-[var(--patiya-color-border)] pb-3">Props API</h2>
          <div className="overflow-x-auto rounded-xl border border-[var(--patiya-color-border)]">
            <table className="w-full text-sm text-left border-collapse">
              <thead className="bg-[var(--patiya-color-muted)] text-[var(--patiya-color-foreground)]">
                <tr>
                  <th className="px-6 py-4 font-semibold border-b border-[var(--patiya-color-border)]">Prop</th>
                  <th className="px-6 py-4 font-semibold border-b border-[var(--patiya-color-border)]">Type</th>
                  <th className="px-6 py-4 font-semibold border-b border-[var(--patiya-color-border)]">Default</th>
                  <th className="px-6 py-4 font-semibold border-b border-[var(--patiya-color-border)]">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--patiya-color-border)] bg-[var(--patiya-color-background)]">
                {comp.props.map((prop: any) => (
                  <tr key={prop.name} className="hover:bg-[var(--patiya-color-muted)]/30 transition-colors">
                    <td className="px-6 py-4 font-mono text-xs text-blue-500 font-medium">{prop.name}</td>
                    <td className="px-6 py-4 font-mono text-xs text-orange-500">{prop.type}</td>
                    <td className="px-6 py-4 font-mono text-xs text-gray-500">{prop.default || '-'}</td>
                    <td className="px-6 py-4 text-sm leading-relaxed">{prop.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Box>
      )}
    </Box>
  );
}
