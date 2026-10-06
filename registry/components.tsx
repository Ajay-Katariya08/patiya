"use client";
import React, { useState } from 'react';
import { Box, Button, Input, Textarea, Switch, Badge, Checkbox, Radio, Select, Alert, Progress, Skeleton, Spinner, Tooltip, Modal, ModalHeader, ModalTitle, ModalDescription, ModalFooter, Drawer, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, Popover, PopoverTrigger, PopoverContent, DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, useToast, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Avatar, Chip, Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow, Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineDot, TimelineContent, Stepper, Step, StepIndicator, StepTitle, StepSeparator, Tabs, TabsList, TabsTrigger, TabsContent, Accordion, AccordionItem, AccordionTrigger, AccordionContent, Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage, Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationEllipsis, PaginationNext, Navbar, NavbarContainer, NavbarBrand, NavbarContent, NavbarItem, NavbarActions, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, ChartContainer, ChartTooltipContent, LineChart, Line, XAxis, YAxis, CartesianGrid, RechartsTooltip, RichTextEditor, Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandShortcut, CommandSeparator, SpotlightCard, TiltCard, CompareSlider, ScratchToReveal, Magnetic, Dock, DockItem, FlipCard, DirectionAwareHover, ShimmerButton, Carousel, VideoModal, ImageZoom, GradientText, TypingText, FlipText, BlurText, MeteorShower, AuroraBackground, BorderBeam, Spotlight, Sparkles } from 'patiya';

export const ToastPreview = () => {
  const { toast } = useToast();
  return (
    <Box className="flex gap-4 flex-wrap">
      <Button variant="outline" onClick={() => toast({ title: 'Success', description: 'Your profile has been updated successfully.', type: 'success' })}>Success Toast</Button>
      <Button variant="outline" onClick={() => toast({ title: 'Error', description: 'Failed to save changes. Please try again.', type: 'error' })}>Error Toast</Button>
      <Button variant="outline" onClick={() => toast({ title: 'Message Received', description: 'You have a new message from Sarah.' })}>Default Toast</Button>
    </Box>
  );
};

export const SpotlightCardPreview = () => {
  return (
    <Box className="flex w-full items-center justify-center py-10">
      <SpotlightCard className="w-full max-w-sm text-center">
        <h3 className="text-xl font-semibold mb-2">Spotlight Card</h3>
        <p className="text-(--patiya-color-muted-foreground) text-sm">
          Hover over me to see the beautiful glowing spotlight effect tracking your cursor.
        </p>
      </SpotlightCard>
    </Box>
  );
};

export const CardPreview = () => {
  return (
    <Box className="flex flex-wrap gap-6 items-start justify-center">
      <Card className="w-[300px]">
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>Deploy your new project in one-click.</CardDescription>
        </CardHeader>
        <CardContent>
          <Box className="flex flex-col space-y-4">
            <Input placeholder="Name of your project" />
          </Box>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Deploy</Button>
        </CardFooter>
      </Card>
      
      <Card className="w-[300px]">
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>You have 3 unread messages.</CardDescription>
        </CardHeader>
        <CardContent>
          <Box className="space-y-4">
            <Box className="flex items-center gap-4">
              <Avatar initials="JD" />
              <Box>
                <p className="text-sm font-medium">John Doe</p>
                <p className="text-xs text-(--patiya-color-muted-foreground)">2 mins ago</p>
              </Box>
            </Box>
            <Box className="flex items-center gap-4">
              <Avatar initials="AS" color="accent" className="bg-[var(--patiya-color-accent)] text-white" />
              <Box>
                <p className="text-sm font-medium">Alice Smith</p>
                <p className="text-xs text-(--patiya-color-muted-foreground)">1 hour ago</p>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>
      
      <Card className="w-[300px]">
        <CardContent className="pt-6">
          <Box className="flex flex-col items-center justify-center space-y-3 text-center">
            <Avatar src="https://i.pravatar.cc/150?img=4" size="xl" />
            <Box>
              <h3 className="font-semibold text-lg">Sarah Jenkins</h3>
              <p className="text-sm text-(--patiya-color-muted-foreground)">Software Engineer</p>
            </Box>
            <Box className="flex gap-2">
              <Badge variant="soft" color="primary">React</Badge>
              <Badge variant="soft" color="secondary">Design</Badge>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export const AvatarPreview = () => {
  return (
    <Box className="flex flex-wrap items-center gap-6">
      <Avatar src="https://i.pravatar.cc/150?u=1" size="sm" />
      <Avatar src="https://i.pravatar.cc/150?u=1" size="md" />
      <Avatar src="https://i.pravatar.cc/150?u=1" size="lg" />
      <Avatar src="https://i.pravatar.cc/150?u=1" size="xl" />
      <Avatar initials="AK" size="lg" className="bg-[var(--patiya-color-primary)] text-[var(--patiya-color-primary-foreground)]" />
      <Avatar shape="square" src="https://i.pravatar.cc/150?u=2" size="lg" />
      <Avatar shape="square" initials="JD" size="xl" className="bg-[var(--patiya-color-accent)] text-[var(--patiya-color-primary-foreground)]" />
    </Box>
  );
};

export const ChipPreview = () => {
  return (
    <Box className="flex gap-4 flex-wrap">
      <Chip color="primary" variant="solid">Primary</Chip>
      <Chip color="accent" variant="soft" onClose={() => {}}>Removable</Chip>
      <Chip color="secondary" variant="outline">Outline</Chip>
      <Chip color="destructive" variant="soft" onClose={() => {}}>Error</Chip>
      <Chip color="muted" variant="solid">Default</Chip>
    </Box>
  );
};

export const TablePreview = () => {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">INV002</TableCell>
          <TableCell>Pending</TableCell>
          <TableCell>PayPal</TableCell>
          <TableCell className="text-right">$150.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export const TimelinePreview = () => {
  return (
    <Timeline>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="solid" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <h4 className="font-semibold text-sm">Order Placed</h4>
          <p className="text-sm text-(--patiya-color-muted-foreground)">Your order #12345 has been placed.</p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="accent" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <h4 className="font-semibold text-sm">Processing</h4>
          <p className="text-sm text-(--patiya-color-muted-foreground)">We are preparing your items.</p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="muted" />
        </TimelineSeparator>
        <TimelineContent>
          <h4 className="font-semibold text-sm">Shipped</h4>
          <p className="text-sm text-(--patiya-color-muted-foreground)">Pending carrier pickup.</p>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export const StepperPreview = () => {
  return (
    <Stepper className="max-w-xl mx-auto w-full">
      <Step completed className="flex-1">
        <StepIndicator completed>1</StepIndicator>
        <StepTitle>Account</StepTitle>
        <StepSeparator />
      </Step>
      <Step active className="flex-1">
        <StepIndicator active>2</StepIndicator>
        <StepTitle>Shipping</StepTitle>
        <StepSeparator />
      </Step>
      <Step>
        <StepIndicator>3</StepIndicator>
        <StepTitle>Payment</StepTitle>
      </Step>
    </Stepper>
  );
};

export const TabsPreview = () => {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="w-full grid grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>Make changes to your account here. Click save when you're done.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Input defaultValue="Ajay Katariya" />
            <Input defaultValue="@ajay" />
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>Change your password here. After saving, you'll be logged out.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Input type="password" placeholder="Current password" />
            <Input type="password" placeholder="New password" />
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export const AccordionPreview = () => {
  return (
    <Accordion type="single" className="w-[400px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other components' aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export const BreadcrumbPreview = () => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export const PaginationPreview = () => {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export const CommandPreview = () => {
  return (
    <Box className="w-full max-w-[450px] border border-[var(--patiya-color-border)] rounded-xl overflow-hidden shadow-sm">
      <Command>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              <span>Mail</span>
            </CommandItem>
            <CommandItem>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h.01"/><path d="M17 7h.01"/><path d="M7 17h.01"/><path d="M17 17h.01"/></svg>
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1Z"/></svg>
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </Box>
  );
};

export const NavbarPreview = () => {
  return (
    <Box className="w-full relative border border-[var(--patiya-color-border)] rounded-xl overflow-hidden bg-[var(--patiya-color-muted)]/20 min-h-[300px]">
      <Navbar className="absolute">
        <NavbarContainer>
          <NavbarBrand>
            <Box className="w-8 h-8 rounded-xl bg-[var(--patiya-color-foreground)] text-[var(--patiya-color-background)] flex items-center justify-center mr-2 shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
              </svg>
            </Box>
            <span className="font-extrabold text-xl tracking-tight">Patiya</span>
          </NavbarBrand>
          <NavbarContent>
            <NavbarItem href="#" isActive>Products</NavbarItem>
            <NavbarItem href="#">Solutions</NavbarItem>
            <NavbarItem href="#">Pricing</NavbarItem>
            <NavbarItem href="#">Documentation</NavbarItem>
          </NavbarContent>
          <NavbarActions>
            <Button variant="ghost" size="sm" className="hidden md:inline-flex">Sign In</Button>
            <Button size="sm" className="hidden sm:inline-flex">Get Started</Button>
            <NavbarMenuToggle />
          </NavbarActions>
        </NavbarContainer>
        <NavbarMenu>
          <NavbarMenuItem href="#" isActive>Products</NavbarMenuItem>
          <NavbarMenuItem href="#">Solutions</NavbarMenuItem>
          <NavbarMenuItem href="#">Pricing</NavbarMenuItem>
          <NavbarMenuItem href="#">Documentation</NavbarMenuItem>
          <Box className="flex flex-col gap-2 mt-4 pt-4 border-t border-[var(--patiya-color-border)]">
            <Button variant="outline" fullWidth>Sign In</Button>
            <Button fullWidth>Get Started</Button>
          </Box>
        </NavbarMenu>
      </Navbar>
    </Box>
  );
};

export const ChartPreview = () => {
  const data = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 550 },
    { name: 'Apr', value: 450 },
    { name: 'May', value: 700 },
    { name: 'Jun', value: 650 },
  ];

  return (
    <Box className="w-full h-[350px] p-4 border border-[var(--patiya-color-border)] rounded-xl bg-[var(--patiya-color-background)]">
      <ChartContainer config={{ value: { label: "Sales", color: "var(--patiya-color-primary)" } }}>
        <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--patiya-color-border)" />
          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'var(--patiya-color-muted-foreground)', fontSize: 12 }} dy={10} />
          <YAxis axisLine={false} tickLine={false} tick={{ fill: 'var(--patiya-color-muted-foreground)', fontSize: 12 }} />
          <RechartsTooltip content={<ChartTooltipContent />} />
          <Line type="monotone" dataKey="value" stroke="var(--color-value)" strokeWidth={3} dot={{ r: 4, fill: "var(--color-value)" }} activeDot={{ r: 6, fill: "var(--color-value)" }} />
        </LineChart>
      </ChartContainer>
    </Box>
  );
};

export const RichTextEditorPreview = () => {
  return (
    <Box className="w-full">
      <RichTextEditor placeholder="Type your beautiful content here..." />
    </Box>
  );
};

export const PopoverPreview = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <Box className="space-y-2">
          <h4 className="font-medium leading-none">Dimensions</h4>
          <p className="text-sm text-(--patiya-color-muted-foreground)">Set the dimensions for the layer.</p>
          <Box className="grid gap-2 pt-2">
            <Box className="grid grid-cols-3 items-center gap-4">
              <span className="text-sm">Width</span>
              <Input className="col-span-2 h-8" defaultValue="100%" />
            </Box>
            <Box className="grid grid-cols-3 items-center gap-4">
              <span className="text-sm">Height</span>
              <Input className="col-span-2 h-8" defaultValue="25px" />
            </Box>
          </Box>
        </Box>
      </PopoverContent>
    </Popover>
  );
};

export const ProfilePopoverPreview = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="inline-block cursor-pointer">
          <Avatar src="https://i.pravatar.cc/130" />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-56">
        <Box className="flex flex-col gap-2 p-2">
          <h4 className="font-semibold text-sm">John Doe</h4>
          <p className="text-xs text-(--patiya-color-muted-foreground)">john@example.com</p>
        </Box>
      </PopoverContent>
    </Popover>
  );
};

export const DropdownPreview = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
        <Box className="my-1 h-px bg-[var(--patiya-color-border)]" />
        <DropdownMenuItem className="text-[var(--patiya-color-destructive)] focus:text-[var(--patiya-color-destructive)] focus:bg-[var(--patiya-color-destructive)]/10">Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const DropdownWithIconsPreview = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Settings</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
          Billing
        </DropdownMenuItem>
        <DropdownMenuItem>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          Team
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const DropdownAvatarPreview = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="inline-block cursor-pointer">
          <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        <Box className="flex flex-col gap-1 p-2 border-b border-[var(--patiya-color-border)] mb-1">
          <span className="font-semibold text-sm leading-none">Jane Smith</span>
          <span className="text-xs text-(--patiya-color-muted-foreground)">jane@example.com</span>
        </Box>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <Box className="my-1 h-px bg-[var(--patiya-color-border)]" />
        <DropdownMenuItem className="text-[var(--patiya-color-destructive)] focus:text-[var(--patiya-color-destructive)] focus:bg-[var(--patiya-color-destructive)]/10">Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const DismissibleAlertPreview = () => {
  const [open, setOpen] = useState(true);
  
  if (!open) {
    return <Button variant="outline" onClick={() => setOpen(true)}>Show Alert</Button>;
  }
  
  return (
    <Alert color="primary" variant="soft" title="Note" onClose={() => setOpen(false)}>
      This alert can be dismissed.
    </Alert>
  );
};

export const ModalPreview = () => {
  const [open, setOpen] = useState(false);
  return (
    <Box>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal open={open} onOpenChange={setOpen}>
        <ModalHeader>
          <ModalTitle>Edit Profile</ModalTitle>
          <ModalDescription>Make changes to your profile here. Click save when you're done.</ModalDescription>
        </ModalHeader>
        <Box className="py-4">
          <Input placeholder="Name" defaultValue="Ajay Katariya" />
        </Box>
        <ModalFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={() => setOpen(false)}>Save changes</Button>
        </ModalFooter>
      </Modal>
    </Box>
  );
};

export const ModalSizePreview = () => {
  const [open, setOpen] = useState(false);
  type ModalSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  const [size, setSize] = useState<ModalSize>('md');

  const openWithSize = (s: ModalSize) => {
    setSize(s);
    setOpen(true);
  };

  return (
    <Box className="flex gap-2 flex-wrap justify-center">
      <Button variant="outline" onClick={() => openWithSize('xs')}>XS</Button>
      <Button variant="outline" onClick={() => openWithSize('sm')}>SM</Button>
      <Button variant="outline" onClick={() => openWithSize('md')}>MD</Button>
      <Button variant="outline" onClick={() => openWithSize('lg')}>LG</Button>
      <Button variant="outline" onClick={() => openWithSize('xl')}>XL</Button>
      <Button variant="outline" onClick={() => openWithSize('xxl')}>XXL</Button>

      <Modal open={open} onOpenChange={setOpen} size={size}>
        <ModalHeader>
          <ModalTitle>Modal Size: {size.toUpperCase()}</ModalTitle>
          <ModalDescription>This modal is using size="{size}".</ModalDescription>
        </ModalHeader>
        <Box className="py-4">
          <p className="text-sm text-(--patiya-color-muted-foreground)">
            Adjust the size prop to control the maximum width of the modal dialog.
          </p>
        </Box>
        <ModalFooter>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </ModalFooter>
      </Modal>
    </Box>
  );
};

export const DrawerPreview = () => {
  const [open, setOpen] = useState(false);
  return (
    <Box>
      <Button color="secondary" onClick={() => setOpen(true)}>Open Drawer</Button>
      <Drawer open={open} onOpenChange={setOpen} side="right">
        <DrawerHeader>
          <DrawerTitle>Configuration</DrawerTitle>
          <DrawerDescription>Adjust your settings here.</DrawerDescription>
        </DrawerHeader>
        <Box className="flex-1 py-4">
          <Box className="space-y-4">
            <Box className="flex justify-between items-center">
              <span className="text-sm font-medium">Enable Notifications</span>
              <Switch defaultChecked />
            </Box>
            <Box className="flex justify-between items-center">
              <span className="text-sm font-medium">Dark Mode</span>
              <Switch />
            </Box>
          </Box>
        </Box>
        <DrawerFooter>
          <Button onClick={() => setOpen(false)} fullWidth>Done</Button>
        </DrawerFooter>
      </Drawer>
    </Box>
  );
};

export const BottomSheetPreview = () => {
  const [open, setOpen] = useState(false);
  return (
    <Box>
      <Button color="secondary" onClick={() => setOpen(true)}>Open Bottom Sheet</Button>
      <Drawer open={open} onOpenChange={setOpen} side="bottom">
        <DrawerHeader>
          <DrawerTitle>Bottom Sheet</DrawerTitle>
          <DrawerDescription>This drawer opens from the bottom.</DrawerDescription>
        </DrawerHeader>
        <Box className="flex-1 py-4 px-6 text-left">
          <p className="text-sm text-(--patiya-color-muted-foreground)">
            You can put any content here, and it will slide up from the bottom of the screen.
            This is especially useful on mobile devices.
          </p>
        </Box>
        <DrawerFooter>
          <Button onClick={() => setOpen(false)} fullWidth>Close</Button>
        </DrawerFooter>
      </Drawer>
    </Box>
  );
};

export const SwitchPreview = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Box className="flex items-center gap-4">
      <Switch checked={checked} onChange={e => setChecked(e.target.checked)} />
      <span className="text-(--patiya-color-muted-foreground) font-medium">Interactive ({checked ? 'On' : 'Off'})</span>
    </Box>
  );
};

export const componentsRegistry: Record<string, any> = {
  button: {
    title: 'Button',
    description: 'Displays a button or a component that looks like a button.',
    props: [
      { name: 'variant', type: "'solid' | 'outline' | 'ghost' | 'soft' | 'link'", default: "'solid'", description: 'The visual style of the button.' },
      { name: 'color', type: "PatiyaColor", default: "'primary'", description: 'The color theme of the button.' },
      { name: 'size', type: "PatiyaSize", default: "'md'", description: 'The sizing of the button.' },
      { name: 'radius', type: "PatiyaRadius", default: "'md'", description: 'The border radius of the button.' },
      { name: 'fullWidth', type: 'boolean', default: 'false', description: 'Whether the button should take up the full width of its container.' },
      { name: 'loading', type: 'boolean', default: 'false', description: 'Shows a loading spinner and disables the button.' },
      { name: 'leftIcon', type: 'React.ReactNode', default: '-', description: 'Icon to display on the left side of the button.' },
      { name: 'rightIcon', type: 'React.ReactNode', default: '-', description: 'Icon to display on the right side of the button.' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Whether the button is disabled.' },
    ],
    examples: [
      {
        title: 'Primary',
        description: 'The default solid primary button.',
        preview: <Button color="primary">Primary Button</Button>,
        code: `<Button color="primary">Primary Button</Button>`
      },
      {
        title: 'Variants',
        description: 'Buttons come in various visual styles.',
        preview: (
          <Box className="flex flex-wrap gap-4 justify-center w-full">
            <Button variant="solid" color="primary">Solid</Button>
            <Button variant="outline" color="secondary">Outline</Button>
            <Button variant="ghost" color="accent">Ghost</Button>
            <Button variant="soft" color="destructive">Soft</Button>
            <Button variant="link" color="primary">Link</Button>
          </Box>
        ),
        code: `<Button variant="solid" color="primary">Solid</Button>\n<Button variant="outline" color="secondary">Outline</Button>\n<Button variant="ghost" color="accent">Ghost</Button>\n<Button variant="soft" color="destructive">Soft</Button>\n<Button variant="link" color="primary">Link</Button>`
      },
      {
        title: 'Sizes',
        description: 'Buttons come in multiple sizes.',
        preview: (
          <Box className="flex flex-wrap items-center gap-4 justify-center w-full">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </Box>
        ),
        code: `<Button size="sm">Small</Button>\n<Button size="md">Medium</Button>\n<Button size="lg">Large</Button>`
      },
      {
        title: 'Rounded Variants',
        description: 'Buttons support various border radius settings.',
        preview: (
          <Box className="flex flex-wrap items-center gap-4 justify-center w-full">
            <Button radius="none">Square</Button>
            <Button radius="sm">Small</Button>
            <Button radius="md">Medium</Button>
            <Button radius="lg">Large</Button>
            <Button radius="full">Pill</Button>
          </Box>
        ),
        code: `<Button radius="none">Square</Button>\n<Button radius="sm">Small</Button>\n<Button radius="md">Medium</Button>\n<Button radius="lg">Large</Button>\n<Button radius="full">Pill</Button>`
      }
    ]
  },
  input: {
    title: 'Input',
    description: 'Displays a form input field or a component that looks like an input field.',
    props: [
      {
            "name": "inputSize",
            "type": "PatiyaSize",
            "default": "-",
            "description": "The size of the input element."
          },
      {
            "name": "variant",
            "type": "'outline' | 'filled' | 'soft'",
            "default": "-",
            "description": "The visual style of the component."
          },
      {
            "name": "invalid",
            "type": "boolean",
            "default": "-",
            "description": "Whether the input is in an invalid or error state."
          },
      {
            "name": "leftIcon",
            "type": "React.ReactNode",
            "default": "-",
            "description": "Icon element to display on the left side."
          },
      {
            "name": "rightIcon",
            "type": "React.ReactNode",
            "default": "-",
            "description": "Icon element to display on the right side."
          }
    ],
    examples: [
      {
        title: 'Default',
        description: 'The default outline input field.',
        preview: <Input placeholder="Email address" className="max-w-sm w-full" />,
        code: `<Input placeholder="Email address" />`
      },
      {
        title: 'Filled Variant',
        description: 'An input with a filled background.',
        preview: <Input placeholder="Filled input..." variant="filled" className="max-w-sm w-full" />,
        code: `<Input placeholder="Filled input..." variant="filled" />`
      },
      {
        title: 'Disabled',
        description: 'A disabled input field.',
        preview: <Input placeholder="Disabled input" disabled className="max-w-sm w-full" />,
        code: `<Input placeholder="Disabled input" disabled />`
      }
    ]
  },
  card: {
    title: 'Card',
    description: 'Displays a card with header, content, and footer.',
    installation: `import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from 'patiya';`,
    examples: [
      {
        title: 'Project Form',
        preview: <CardPreview />,
        code: `<Card className="w-[350px]">\n  <CardHeader>\n    <CardTitle>Create project</CardTitle>\n    <CardDescription>Deploy your new project.</CardDescription>\n  </CardHeader>\n  <CardContent>\n    <Input placeholder="Name of your project" />\n  </CardContent>\n  <CardFooter className="flex justify-between">\n    <Button variant="outline">Cancel</Button>\n    <Button>Deploy</Button>\n  </CardFooter>\n</Card>`
      },
      {
        title: 'Login Card',
        preview: (
          <Card className="w-[350px] mx-auto">
            <CardHeader>
              <CardTitle>Welcome back</CardTitle>
              <CardDescription>Enter your credentials to access your account.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input placeholder="Email" type="email" />
              <Input placeholder="Password" type="password" />
            </CardContent>
            <CardFooter>
              <Button fullWidth>Sign In</Button>
            </CardFooter>
          </Card>
        ),
        code: `<Card>\n  <CardHeader>\n    <CardTitle>Welcome back</CardTitle>\n  </CardHeader>\n  <CardContent>\n    <Input placeholder="Email" />\n  </CardContent>\n  <CardFooter>\n    <Button fullWidth>Sign In</Button>\n  </CardFooter>\n</Card>`
      }
    ]
  },
  avatar: {
    title: 'Avatar',
    description: 'An image element with a fallback for representing the user.',
    props: [
      { name: 'src', type: 'string', default: '-', description: 'The URL of the avatar image.' },
      { name: 'alt', type: 'string', default: "'Avatar'", description: 'The alt text for the image.' },
      { name: 'initials', type: 'string', default: '-', description: 'Initials to show if the image fails to load or no src is provided.' },
      { name: 'size', type: "'sm' | 'md' | 'lg' | 'xl'", default: "'md'", description: 'The size of the avatar.' },
      { name: 'shape', type: "'circle' | 'square'", default: "'circle'", description: 'The shape of the avatar.' },
    ],
    examples: [
      {
        title: 'With Image',
        preview: <AvatarPreview />,
        code: `<Avatar src="https://github.com/shadcn.png" alt="u-avatar" size="lg" />`
      },
      {
        title: 'Initials Fallback',
        preview: (
          <Box className="flex gap-4 items-center">
            <Avatar initials="AK" size="md" className="bg-[var(--patiya-color-primary)] text-[var(--patiya-color-primary-foreground)]" />
            <Avatar initials="JD" size="lg" className="bg-[var(--patiya-color-accent)] text-[var(--patiya-color-accent-foreground)]" />
          </Box>
        ),
        code: `<Avatar initials="AK" className="bg-blue-500 text-white" />`
      },
      {
        title: 'Square Shape',
        preview: <Avatar shape="square" src="https://i.pravatar.cc/150?u=2" size="lg" />,
        code: `<Avatar shape="square" src="https://i.pravatar.cc/150" />`
      },
      {
        title: 'Avatar Group',
        preview: (
          <Box className="flex -space-x-3">
            <Avatar src="https://i.pravatar.cc/150?u=1" className="ring-2 ring-white dark:ring-zinc-950" />
            <Avatar src="https://i.pravatar.cc/150?u=2" className="ring-2 ring-white dark:ring-zinc-950" />
            <Avatar src="https://i.pravatar.cc/150?u=3" className="ring-2 ring-white dark:ring-zinc-950" />
            <Avatar initials="+3" className="ring-2 ring-white dark:ring-zinc-950 bg-gray-100 text-gray-600" />
          </Box>
        ),
        code: `<Box className="flex -space-x-3">\n  <Avatar src="https://i.pravatar.cc/150" className="ring-2 ring-white" />\n  <Avatar initials="+3" className="ring-2 ring-white" />\n</Box>`
      }
    ]
  },
  chip: {
    title: 'Chip',
    description: 'A compact element that represents an input, attribute, or action.',
    installation: `import { Chip } from 'patiya';`,
    props: [
      {
            "name": "color",
            "type": "PatiyaColor",
            "default": "-",
            "description": "The semantic color theme of the component."
          },
      {
            "name": "variant",
            "type": "PatiyaVariant",
            "default": "-",
            "description": "The visual style of the component."
          },
      {
            "name": "size",
            "type": "PatiyaSize",
            "default": "-",
            "description": "The size of the component."
          },
      {
            "name": "radius",
            "type": "PatiyaRadius",
            "default": "-",
            "description": "The border radius of the component."
          },
      {
            "name": "onClose",
            "type": "() => void",
            "default": "-",
            "description": "Callback function triggered when the component is closed or dismissed."
          },
      {
            "name": "disabled",
            "type": "boolean",
            "default": "-",
            "description": "Whether the component is disabled."
          }
    ],
    examples: [
      {
        title: 'Solid',
        preview: <ChipPreview />,
        code: `<Chip color="primary" variant="solid">Primary</Chip>`
      },
      {
        title: 'Removable',
        preview: <Chip color="accent" variant="soft" onClose={() => alert('close')}>Removable Chip</Chip>,
        code: `<Chip color="accent" variant="soft" onClose={() => alert('close')}>Removable</Chip>`
      },
      {
        title: 'Outline',
        preview: <Chip color="secondary" variant="outline">Outline</Chip>,
        code: `<Chip color="secondary" variant="outline">Outline</Chip>`
      },
      {
        title: 'Sizes',
        preview: (
          <Box className="flex gap-4 items-center flex-wrap">
            <Chip className="text-xs px-2 py-0.5">Small</Chip>
            <Chip>Default</Chip>
            <Chip className="text-base px-4 py-1.5">Large</Chip>
          </Box>
        ),
        code: `<Chip className="text-xs">Small</Chip>\n<Chip>Default</Chip>\n<Chip className="text-base">Large</Chip>`
      }
    ]
  },
  table: {
    title: 'Table',
    description: 'A responsive table component for displaying data.',
    installation: `import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableCaption } from 'patiya';`,
    examples: [
      {
        title: 'Invoice Table',
        preview: <TablePreview />,
        code: `<Table>\n  <TableHeader>\n    <TableRow>\n      <TableHead>Head</TableHead>\n    </TableRow>\n  </TableHeader>\n  <TableBody>\n    <TableRow>\n      <TableCell>Cell</TableCell>\n    </TableRow>\n  </TableBody>\n</Table>`
      },
      {
        title: 'Simple Data',
        preview: (
          <Table className="max-w-md w-full">
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Role</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow><TableCell>Alice</TableCell><TableCell>Admin</TableCell></TableRow>
              <TableRow><TableCell>Bob</TableCell><TableCell>Editor</TableCell></TableRow>
            </TableBody>
          </Table>
        ),
        code: `<Table className="max-w-md w-full">\n  <TableHeader>\n    <TableRow>\n      <TableHead>User</TableHead>\n      <TableHead>Role</TableHead>\n    </TableRow>\n  </TableHeader>\n  <TableBody>\n    <TableRow>\n      <TableCell>Alice</TableCell>\n      <TableCell>Admin</TableCell>\n    </TableRow>\n    <TableRow>\n      <TableCell>Bob</TableCell>\n      <TableCell>Editor</TableCell>\n    </TableRow>\n  </TableBody>\n</Table>`
      },
      {
        title: 'Hoverable Rows',
        preview: (
          <Table className="max-w-md w-full">
            <TableHeader>
              <TableRow>
                <TableHead>Status</TableHead>
                <TableHead>System</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-gray-50 dark:hover:bg-zinc-800/50 cursor-pointer transition-colors"><TableCell>Online</TableCell><TableCell>API</TableCell></TableRow>
              <TableRow className="hover:bg-gray-50 dark:hover:bg-zinc-800/50 cursor-pointer transition-colors"><TableCell>Degraded</TableCell><TableCell>Database</TableCell></TableRow>
            </TableBody>
          </Table>
        ),
        code: `<TableRow className="hover:bg-gray-50 cursor-pointer transition-colors">\n  <TableCell>Online</TableCell>\n  <TableCell>API</TableCell>\n</TableRow>`
      }
    ]
  },
  timeline: {
    title: 'Timeline',
    description: 'Displays a list of events in chronological order.',
    installation: `import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineDot, TimelineContent } from 'patiya';`,
    examples: [
      {
        title: 'Order Tracking',
        preview: <TimelinePreview />,
        code: `<Timeline>\n  <TimelineItem>\n    <TimelineSeparator>\n      <TimelineDot />\n      <TimelineConnector />\n    </TimelineSeparator>\n    <TimelineContent>Event 1</TimelineContent>\n  </TimelineItem>\n</Timeline>`
      },
      {
        title: 'Minimal',
        preview: (
          <Timeline>
            <TimelineItem>
              <TimelineSeparator><TimelineDot color="primary" variant="solid" /><TimelineConnector /></TimelineSeparator>
              <TimelineContent className="pb-4">Step 1</TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator><TimelineDot color="muted" /></TimelineSeparator>
              <TimelineContent>Step 2</TimelineContent>
            </TimelineItem>
          </Timeline>
        ),
        code: `<Timeline>\n  <TimelineItem>\n    <TimelineSeparator>\n      <TimelineDot color="primary" variant="solid" />\n      <TimelineConnector />\n    </TimelineSeparator>\n    <TimelineContent className="pb-4">Step 1</TimelineContent>\n  </TimelineItem>\n  <TimelineItem>\n    <TimelineSeparator>\n      <TimelineDot color="muted" />\n    </TimelineSeparator>\n    <TimelineContent>Step 2</TimelineContent>\n  </TimelineItem>\n</Timeline>`
      },
      {
        title: 'With Status Colors',
        preview: (
          <Timeline>
            <TimelineItem>
              <TimelineSeparator><TimelineDot color="primary" variant="solid" /><TimelineConnector /></TimelineSeparator>
              <TimelineContent className="pb-6 text-sm">Created</TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator><TimelineDot color="accent" variant="solid" /><TimelineConnector /></TimelineSeparator>
              <TimelineContent className="pb-6 text-sm">Shipped</TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator><TimelineDot color="destructive" variant="solid" /></TimelineSeparator>
              <TimelineContent className="text-sm">Delayed</TimelineContent>
            </TimelineItem>
          </Timeline>
        ),
        code: `<TimelineDot color="primary" />\n<TimelineDot color="accent" />\n<TimelineDot color="destructive" />`
      }
    ]
  },
  stepper: {
    title: 'Stepper',
    description: 'A component that displays progress through a sequence of logical and numbered steps.',
    installation: `import { Stepper, Step, StepIndicator, StepTitle, StepSeparator } from 'patiya';`,
    examples: [
      {
        title: 'Checkout Steps',
        preview: <StepperPreview />,
        code: `<Stepper>\n  <Step completed className="flex-1">\n    <StepIndicator completed>1</StepIndicator>\n    <StepTitle>Account</StepTitle>\n    <StepSeparator />\n  </Step>\n  <Step active>\n    <StepIndicator active>2</StepIndicator>\n    <StepTitle>Shipping</StepTitle>\n  </Step>\n</Stepper>`
      },
      {
        title: 'Simple Form Steps',
        preview: (
          <Stepper className="max-w-md w-full mx-auto">
            <Step completed className="flex-1"><StepIndicator completed>1</StepIndicator><StepSeparator /></Step>
            <Step completed className="flex-1"><StepIndicator completed>2</StepIndicator><StepSeparator /></Step>
            <Step active><StepIndicator active>3</StepIndicator></Step>
          </Stepper>
        ),
        code: `<Stepper className="max-w-md w-full mx-auto">\n  <Step completed className="flex-1">\n    <StepIndicator completed>1</StepIndicator>\n    <StepSeparator />\n  </Step>\n  <Step completed className="flex-1">\n    <StepIndicator completed>2</StepIndicator>\n    <StepSeparator />\n  </Step>\n  <Step active>\n    <StepIndicator active>3</StepIndicator>\n  </Step>\n</Stepper>`
      },
      {
        title: 'Error State Step',
        preview: (
          <Stepper className="max-w-md w-full mx-auto">
            <Step completed className="flex-1"><StepIndicator completed>1</StepIndicator><StepTitle>User</StepTitle><StepSeparator /></Step>
            <Step active className="flex-1 text-red-500">
              <StepIndicator className="border-red-500 bg-red-50 text-red-500">2</StepIndicator>
              <StepTitle className="text-red-500">Payment Failed</StepTitle>
              <StepSeparator />
            </Step>
            <Step><StepIndicator>3</StepIndicator><StepTitle>Confirm</StepTitle></Step>
          </Stepper>
        ),
        code: `<Stepper className="max-w-md w-full mx-auto">\n  <Step completed className="flex-1">\n    <StepIndicator completed>1</StepIndicator>\n    <StepTitle>User</StepTitle>\n    <StepSeparator />\n  </Step>\n  <Step active className="flex-1 text-red-500">\n    <StepIndicator className="border-red-500 bg-red-50 text-red-500">2</StepIndicator>\n    <StepTitle className="text-red-500">Payment Failed</StepTitle>\n    <StepSeparator />\n  </Step>\n  <Step>\n    <StepIndicator>3</StepIndicator>\n    <StepTitle>Confirm</StepTitle>\n  </Step>\n</Stepper>`
      }
    ]
  },
  tabs: {
    title: 'Tabs',
    description: 'A set of layered sections of content-known as tab panels-that are displayed one at a time.',
    installation: `import { Tabs, TabsList, TabsTrigger, TabsContent } from 'patiya';`,
    examples: [
      {
        title: 'Settings Form',
        preview: <TabsPreview />,
        code: `<Tabs defaultValue="account">\n  <TabsList>\n    <TabsTrigger value="account">Account</TabsTrigger>\n    <TabsTrigger value="password">Password</TabsTrigger>\n  </TabsList>\n  <TabsContent value="account">Make changes to your account here.</TabsContent>\n  <TabsContent value="password">Change your password here.</TabsContent>\n</Tabs>`
      },
      {
        title: 'Minimal Navigation',
        preview: (
          <Tabs defaultValue="1" className="w-[300px]">
            <TabsList className="w-full grid grid-cols-3">
              <TabsTrigger value="1">Home</TabsTrigger>
              <TabsTrigger value="2">Docs</TabsTrigger>
              <TabsTrigger value="3">Blog</TabsTrigger>
            </TabsList>
            <TabsContent value="1" className="p-4 border border-[var(--patiya-color-border)] rounded-md mt-2">Home Content</TabsContent>
            <TabsContent value="2" className="p-4 border border-[var(--patiya-color-border)] rounded-md mt-2">Docs Content</TabsContent>
            <TabsContent value="3" className="p-4 border border-[var(--patiya-color-border)] rounded-md mt-2">Blog Content</TabsContent>
          </Tabs>
        ),
        code: `<Tabs defaultValue="1" className="w-[300px]">\n  <TabsList className="w-full grid grid-cols-3">\n    <TabsTrigger value="1">Home</TabsTrigger>\n    <TabsTrigger value="2">Docs</TabsTrigger>\n    <TabsTrigger value="3">Blog</TabsTrigger>\n  </TabsList>\n  <TabsContent value="1" className="p-4 border rounded-md mt-2">Home Content</TabsContent>\n  <TabsContent value="2" className="p-4 border rounded-md mt-2">Docs Content</TabsContent>\n  <TabsContent value="3" className="p-4 border rounded-md mt-2">Blog Content</TabsContent>\n</Tabs>`
      },
      {
        title: 'Fitted Tabs',
        preview: (
          <Tabs defaultValue="1" className="w-[400px]">
            <TabsList className="w-full flex">
              <TabsTrigger value="1" className="flex-1">Overview</TabsTrigger>
              <TabsTrigger value="2" className="flex-1">Integrations</TabsTrigger>
              <TabsTrigger value="3" className="flex-1">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="1">Overview panel</TabsContent>
            <TabsContent value="2">Integrations panel</TabsContent>
            <TabsContent value="3">Settings panel</TabsContent>
          </Tabs>
        ),
        code: `<TabsList className="w-full flex">\n  <TabsTrigger className="flex-1" value="1">Overview</TabsTrigger>\n</TabsList>`
      }
    ]
  },
  accordion: {
    title: 'Accordion',
    description: 'A vertically stacked set of interactive headings that each reveal a section of content.',
    installation: `import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from 'patiya';`,
    examples: [
      {
        title: 'Default',
        description: 'A standard accordion with multiple items.',
        preview: <AccordionPreview />,
        code: `<Accordion type="single">\n  <AccordionItem value="item-1">\n    <AccordionTrigger>Is it accessible?</AccordionTrigger>\n    <AccordionContent>Yes.</AccordionContent>\n  </AccordionItem>\n</Accordion>`
      },
      {
        title: 'Flush',
        description: 'An accordion without outer borders.',
        preview: (
          <Accordion type="single" className="w-[400px] border-none">
            <AccordionItem value="item-1" className="border-t-0 border-b border-[var(--patiya-color-border)]">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-t-0 border-b border-[var(--patiya-color-border)]">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>Yes. It comes with default styles.</AccordionContent>
            </AccordionItem>
          </Accordion>
        ),
        code: `<Accordion type="single" className="border-none">\n  <AccordionItem value="item-1" className="border-t-0 border-b border-[var(--patiya-color-border)]">\n    <AccordionTrigger>Is it accessible?</AccordionTrigger>\n    <AccordionContent>Yes.</AccordionContent>\n  </AccordionItem>\n</Accordion>`
      }
    ]
  },
  breadcrumb: {
    title: 'Breadcrumb',
    description: 'Displays the path to the current resource using a hierarchy of links.',
    installation: `import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from 'patiya';`,
    examples: [
      {
        title: 'Default',
        preview: <BreadcrumbPreview />,
        code: `<Breadcrumb>\n  <BreadcrumbList>\n    <BreadcrumbItem>\n      <BreadcrumbLink href="/">Home</BreadcrumbLink>\n    </BreadcrumbItem>\n    <BreadcrumbSeparator />\n    <BreadcrumbItem>\n      <BreadcrumbPage>Components</BreadcrumbPage>\n    </BreadcrumbItem>\n  </BreadcrumbList>\n</Breadcrumb>`
      },
      {
        title: 'Minimal Path',
        preview: (
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink href="/">Dashboard</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage>Analytics</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        ),
        code: `<Breadcrumb>\n  <BreadcrumbList>\n    <BreadcrumbItem>\n      <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>\n    </BreadcrumbItem>\n    <BreadcrumbSeparator />\n    <BreadcrumbItem>\n      <BreadcrumbPage>Analytics</BreadcrumbPage>\n    </BreadcrumbItem>\n  </BreadcrumbList>\n</Breadcrumb>`
      },
      {
        title: 'With Ellipsis',
        preview: (
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <span className="flex h-9 w-9 items-center justify-center">...</span>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage>Current Page</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        ),
        code: `<Breadcrumb>\n  <BreadcrumbList>\n    <BreadcrumbItem>\n      <BreadcrumbLink href="/">Home</BreadcrumbLink>\n    </BreadcrumbItem>\n    <BreadcrumbSeparator />\n    <BreadcrumbItem>\n      <span className="flex h-9 w-9 items-center justify-center">...</span>\n    </BreadcrumbItem>\n    <BreadcrumbSeparator />\n    <BreadcrumbItem>\n      <BreadcrumbPage>Current Page</BreadcrumbPage>\n    </BreadcrumbItem>\n  </BreadcrumbList>\n</Breadcrumb>`
      }
    ]
  },
  pagination: {
    title: 'Pagination',
    description: 'Pagination with page navigation, next and previous links.',
    installation: `import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationEllipsis, PaginationNext } from 'patiya';`,
    examples: [
      {
        title: 'Standard List',
        preview: <PaginationPreview />,
        code: `<Pagination>\n  <PaginationContent>\n    <PaginationItem>\n      <PaginationPrevious href="#" />\n    </PaginationItem>\n    <PaginationItem>\n      <PaginationLink href="#" isActive>1</PaginationLink>\n    </PaginationItem>\n    <PaginationItem>\n      <PaginationNext href="#" />\n    </PaginationItem>\n  </PaginationContent>\n</Pagination>`
      },
      {
        title: 'Simple',
        preview: (
          <Pagination>
            <PaginationContent>
              <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
              <PaginationItem><PaginationNext href="#" /></PaginationItem>
            </PaginationContent>
          </Pagination>
        ),
        code: `<Pagination>\n  <PaginationContent>\n    <PaginationItem>\n      <PaginationPrevious href="#" />\n    </PaginationItem>\n    <PaginationItem>\n      <PaginationNext href="#" />\n    </PaginationItem>\n  </PaginationContent>\n</Pagination>`
      },
      {
        title: 'With Ellipsis',
        preview: (
          <Pagination>
            <PaginationContent>
              <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
              <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
              <PaginationItem><span className="flex h-9 w-9 items-center justify-center">...</span></PaginationItem>
              <PaginationItem><PaginationLink href="#">10</PaginationLink></PaginationItem>
              <PaginationItem><PaginationNext href="#" /></PaginationItem>
            </PaginationContent>
          </Pagination>
        ),
        code: `<PaginationItem>\n  <PaginationEllipsis />\n</PaginationItem>`
      }
    ]
  },
  navbar: {
    title: 'Navbar',
    description: 'A responsive top navigation bar with branding, links, and actions.',
    installation: `import { Navbar, NavbarContainer, NavbarBrand, NavbarContent, NavbarItem, NavbarActions } from 'patiya';`,
    examples: [
      {
        title: 'Full Marketing Header',
        preview: <NavbarPreview />,
        code: `<Navbar>\n  <NavbarContainer>\n    <NavbarBrand>Acme Corp</NavbarBrand>\n    <NavbarContent>\n      <NavbarItem href="#">Products</NavbarItem>\n    </NavbarContent>\n    <NavbarActions>\n      <Button>Log in</Button>\n    </NavbarActions>\n  </NavbarContainer>\n</Navbar>`
      },
      {
        title: 'Centered Navigation',
        preview: (
          <Navbar>
            <NavbarContainer className="justify-center">
              <NavbarContent>
                <NavbarItem href="#">Home</NavbarItem>
                <NavbarItem href="#">About</NavbarItem>
                <NavbarItem href="#">Contact</NavbarItem>
              </NavbarContent>
            </NavbarContainer>
          </Navbar>
        ),
        code: `<NavbarContainer className="justify-center">\n  <NavbarContent>\n    <NavbarItem href="#">Home</NavbarItem>\n    <NavbarItem href="#">About</NavbarItem>\n  </NavbarContent>\n</NavbarContainer>`
      }
    ]
  },
  command: {
    title: 'Command',
    description: 'Fast, composable, unstyled command menu for React.',
    installation: `import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandShortcut } from 'patiya';`,
    examples: [
      {
        title: 'macOS Spotlight Style',
        preview: <CommandPreview />,
        code: `<Command>\n  <CommandInput placeholder="Type a command or search..." />\n  <CommandList>\n    <CommandEmpty>No results found.</CommandEmpty>\n    <CommandGroup heading="Suggestions">\n      <CommandItem>Calendar</CommandItem>\n      <CommandItem>Search Emoji</CommandItem>\n    </CommandGroup>\n  </CommandList>\n</Command>`
      },
      {
        title: 'Command Dialog Overlay',
        preview: (
          <Box className="flex justify-center w-full relative">
            <Command className="rounded-lg border border-[var(--patiya-color-border)] shadow-md max-w-[450px]">
              <CommandInput placeholder="Search settings..." />
              <CommandList>
                <CommandEmpty>No settings found.</CommandEmpty>
                <CommandGroup heading="General">
                  <CommandItem>Profile</CommandItem>
                  <CommandItem>Billing</CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </Box>
        ),
        code: `<Command className="rounded-lg border shadow-md">\n  <CommandInput placeholder="Search settings..." />\n  <CommandList>\n    <CommandEmpty>No settings found.</CommandEmpty>\n    <CommandGroup heading="General">\n      <CommandItem>Profile</CommandItem>\n      <CommandItem>Billing</CommandItem>\n    </CommandGroup>\n  </CommandList>\n</Command>`
      }
    ]
  },
  chart: {
    title: 'Chart',
    description: 'Beautiful, responsive charts built with Recharts and customized with our design system.',
    installation: `import { ChartContainer, ChartTooltipContent, LineChart, Line, XAxis, YAxis, RechartsTooltip } from 'patiya';`,
    examples: [
      {
        title: 'Line Chart',
        preview: <ChartPreview />,
        code: `<ChartContainer config={{ value: { label: "Sales", color: "var(--patiya-color-primary)" } }}>\n  <LineChart data={data}>\n    <XAxis dataKey="name" />\n    <YAxis />\n    <RechartsTooltip content={<ChartTooltipContent />} />\n    <Line type="monotone" dataKey="value" stroke="var(--color-value)" />\n  </LineChart>\n</ChartContainer>`
      },
      {
        title: 'Customized Axes',
        preview: (
          <Box className="w-full">
            <ChartPreview />
          </Box>
        ),
        code: `<ChartContainer config={{ value: { label: "Sales", color: "var(--patiya-color-primary)" } }}>\n  <LineChart data={data}>\n    <XAxis dataKey="name" tickLine={false} axisLine={false} />\n    <YAxis tickLine={false} axisLine={false} />\n    <RechartsTooltip content={<ChartTooltipContent />} />\n    <Line type="monotone" dataKey="value" stroke="var(--color-value)" />\n  </LineChart>\n</ChartContainer>`
      }
    ]
  },
  'rich-text-editor': {
    title: 'Rich Text Editor',
    description: 'A powerful, customizable rich text editor powered by Tiptap.',
    installation: `import { RichTextEditor } from 'patiya';`,
    examples: [
      {
        title: 'Notion-like Editor',
        preview: <RichTextEditorPreview />,
        code: `<RichTextEditor \n  placeholder="Type your beautiful content here..." \n  onChange={(html) => console.log(html)}\n/>`
      },
      {
        title: 'Read-only Mode',
        preview: (
          <Box className="opacity-70 pointer-events-none w-full">
            <RichTextEditorPreview />
          </Box>
        ),
        code: `<RichTextEditor readOnly />`
      }
    ]
  },
  textarea: {
    title: 'Textarea',
    description: 'Displays a multi-line text input field.',
    props: [
      {
            "name": "variant",
            "type": "'outline' | 'filled' | 'soft'",
            "default": "-",
            "description": "The visual style of the component."
          },
      {
            "name": "invalid",
            "type": "boolean",
            "default": "-",
            "description": "Whether the input is in an invalid or error state."
          }
    ],
    examples: [
      {
        title: 'Default',
        preview: <Textarea placeholder="Type your message here..." rows={4} className="max-w-md w-full" />,
        code: `<Textarea placeholder="Type your message here..." rows={4} />`
      },
      {
        title: 'Disabled',
        preview: <Textarea placeholder="Disabled..." disabled rows={2} className="max-w-md w-full" />,
        code: `<Textarea placeholder="Disabled..." disabled rows={2} />`
      }
    ]
  },
  switch: {
    title: 'Switch',
    description: 'A control that allows the user to toggle between checked and not checked.',
    props: [
      {
            "name": "inputSize",
            "type": "PatiyaSize",
            "default": "-",
            "description": "The size of the input element."
          }
    ],
    examples: [
      {
        title: 'Default',
        preview: <SwitchPreview />,
        code: `<Switch defaultChecked />`
      },
      {
        title: 'Disabled',
        preview: (
          <Box className="flex items-center gap-4">
            <Switch disabled />
            <Switch disabled defaultChecked />
          </Box>
        ),
        code: `<Switch disabled />\n<Switch disabled defaultChecked />`
      }
    ]
  },
  checkbox: {
    title: 'Checkbox',
    description: 'A control that allows the user to toggle between checked and not checked.',
    props: [
      {
            "name": "inputSize",
            "type": "PatiyaSize",
            "default": "-",
            "description": "The size of the input element."
          },
      {
            "name": "invalid",
            "type": "boolean",
            "default": "-",
            "description": "Whether the input is in an invalid or error state."
          }
    ],
    examples: [
      {
        title: 'Default',
        preview: (
          <Box className="flex items-center gap-3">
            <Checkbox id="terms" defaultChecked />
            <label htmlFor="terms" className="text-sm font-medium leading-none cursor-pointer">Accept terms and conditions</label>
          </Box>
        ),
        code: `<Checkbox id="terms" defaultChecked />`
      },
      {
        title: 'Disabled',
        preview: (
          <Box className="flex items-center gap-3">
            <Checkbox id="terms2" disabled defaultChecked />
            <label htmlFor="terms2" className="text-sm font-medium leading-none opacity-50">Disabled checked</label>
          </Box>
        ),
        code: `<Checkbox disabled defaultChecked />`
      }
    ]
  },
  radio: {
    title: 'Radio',
    description: 'A set of checkable buttons, known as radio buttons.',
    props: [
      {
            "name": "inputSize",
            "type": "PatiyaSize",
            "default": "-",
            "description": "The size of the input element."
          },
      {
            "name": "invalid",
            "type": "boolean",
            "default": "-",
            "description": "Whether the input is in an invalid or error state."
          }
    ],
    examples: [
      {
        title: 'Default',
        preview: (
          <Box className="flex gap-8">
            <Box className="flex items-center gap-3">
              <Radio name="plan" id="free" defaultChecked />
              <label htmlFor="free" className="text-sm font-medium">Free Plan</label>
            </Box>
            <Box className="flex items-center gap-3">
              <Radio name="plan" id="pro" />
              <label htmlFor="pro" className="text-sm font-medium">Pro Plan</label>
            </Box>
          </Box>
        ),
        code: `<Radio name="plan" id="free" defaultChecked />\n<Radio name="plan" id="pro" />`
      },
      {
        title: 'Disabled',
        preview: (
          <Box className="flex items-center gap-3">
            <Radio name="dplan" id="dplan1" disabled defaultChecked />
            <label htmlFor="dplan1" className="text-sm font-medium opacity-50">Disabled</label>
          </Box>
        ),
        code: `<Radio disabled defaultChecked />`
      }
    ]
  },
  select: {
    title: 'Select',
    description: 'Displays a list of options for the user to pick from.',
    props: [
      {
            "name": "inputSize",
            "type": "PatiyaSize",
            "default": "-",
            "description": "The size of the input element."
          },
      {
            "name": "variant",
            "type": "'outline' | 'filled' | 'soft'",
            "default": "-",
            "description": "The visual style of the component."
          },
      {
            "name": "invalid",
            "type": "boolean",
            "default": "-",
            "description": "Whether the input is in an invalid or error state."
          },
      {
            "name": "leftIcon",
            "type": "React.ReactNode",
            "default": "-",
            "description": "Icon element to display on the left side."
          }
    ],
    examples: [
      {
        title: 'Default',
        preview: (
          <Select defaultValue="" className="max-w-xs w-full">
            <option value="" disabled>Select a framework</option>
            <option value="1">Next.js</option>
            <option value="2">React</option>
          </Select>
        ),
        code: `<Select defaultValue="">\n  <option value="" disabled>Select</option>\n  <option value="1">Next.js</option>\n</Select>`
      },
      {
        title: 'Disabled',
        preview: (
          <Select defaultValue="1" disabled className="max-w-xs w-full">
            <option value="1">Disabled Option</option>
          </Select>
        ),
        code: `<Select disabled defaultValue="1">\n  <option value="1">Disabled</option>\n</Select>`
      }
    ]
  },
  alert: {
    title: 'Alert',
    description: 'Displays a callout for user attention.',
    props: [
      {
            "name": "color",
            "type": "PatiyaColor",
            "default": "-",
            "description": "The semantic color theme of the component."
          },
      {
            "name": "variant",
            "type": "'solid' | 'soft' | 'outline'",
            "default": "-",
            "description": "The visual style of the component."
          },
      {
            "name": "icon",
            "type": "React.ReactNode",
            "default": "-",
            "description": "Icon element to display within the component."
          },
      {
            "name": "title",
            "type": "React.ReactNode",
            "default": "-",
            "description": "The title or heading content."
          },
      {
            "name": "onClose",
            "type": "() => void",
            "default": "-",
            "description": "Callback function triggered when the component is closed or dismissed."
          }
    ],
    examples: [
      {
        title: 'Default',
        preview: <Alert color="primary" variant="soft" title="Information">This is an informational alert.</Alert>,
        code: `<Alert color="primary" variant="soft" title="Information">This is an informational alert.</Alert>`
      },
      {
        title: 'Success',
        preview: <Alert color="accent" variant="solid" title="Success">Your changes have been saved successfully.</Alert>,
        code: `<Alert color="accent" variant="solid" title="Success">Your changes have been saved successfully.</Alert>`
      },
      {
        title: 'Error Outline',
        preview: <Alert color="destructive" variant="outline" title="Error">Something went wrong. Please try again.</Alert>,
        code: `<Alert color="destructive" variant="outline" title="Error">Something went wrong. Please try again.</Alert>`
      },
      {
        title: 'Action Alert',
        preview: (
          <Alert color="secondary" variant="soft" title="Update Available" className="w-full">
            <Box className="flex justify-between items-center w-full">
              <span>A new version is available.</span>
              <Button size="sm" variant="outline">Update</Button>
            </Box>
          </Alert>
        ),
        code: `<Alert title="Update Available">\n  <Box className="flex justify-between items-center w-full">\n    <span>A new version is available.</span>\n    <Button size="sm" variant="outline">Update</Button>\n  </Box>\n</Alert>`
      },
      {
        title: 'Dismissible',
        preview: <DismissibleAlertPreview />,
        code: `const [open, setOpen] = useState(true);\n\nif (!open) return null;\n\n<Alert color="primary" variant="soft" title="Note" onClose={() => setOpen(false)}>\n  This alert can be dismissed.\n</Alert>`
      }
    ]
  },
  progress: {
    title: 'Progress',
    description: 'Displays an indicator showing the completion progress of a task.',
    props: [
      {
            "name": "value",
            "type": "number",
            "default": "-",
            "description": "The current value."
          },
      {
            "name": "max",
            "type": "number",
            "default": "-",
            "description": "The maximum allowed value."
          },
      {
            "name": "progressSize",
            "type": "PatiyaSize",
            "default": "-",
            "description": "The size of the progress indicator."
          },
      {
            "name": "color",
            "type": "PatiyaColor",
            "default": "-",
            "description": "The semantic color theme of the component."
          },
      {
            "name": "isIndeterminate",
            "type": "boolean",
            "default": "-",
            "description": "Whether the progress state is indeterminate (e.g. unknown duration)."
          }
    ],
    examples: [
      {
        title: 'Default',
        preview: <Progress value={45} color="primary" className="w-full max-w-md" />,
        code: `<Progress value={45} color="primary" />`
      },
      {
        title: 'Accent Color',
        preview: <Progress value={80} color="accent" className="w-full max-w-md" />,
        code: `<Progress value={80} color="accent" />`
      },
      {
        title: 'Indeterminate',
        preview: <Progress isIndeterminate color="secondary" className="w-full max-w-md" />,
        code: `<Progress isIndeterminate color="secondary" />`
      },
      {
        title: 'Custom Height',
        preview: (
          <Box className="w-full max-w-md">
            <Progress value={60} color="primary" className="h-4" />
          </Box>
        ),
        code: `<Progress value={60} color="primary" className="h-4" />`
      }
    ]
  },
  skeleton: {
    title: 'Skeleton',
    description: 'Use to show a placeholder while content is loading.',
    props: [
      {
            "name": "isLoaded",
            "type": "boolean",
            "default": "-",
            "description": "Whether the skeleton has finished loading."
          }
    ],
    examples: [
      {
        title: 'Profile Layout',
        preview: (
          <Box className="flex items-center space-x-4 w-full max-w-md">
            <Skeleton className="h-12 w-12 rounded-full" />
            <Box className="space-y-2 flex-1">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </Box>
          </Box>
        ),
        code: `<Box className="flex items-center space-x-4">\n  <Skeleton className="h-12 w-12 rounded-full" />\n  <Box className="space-y-2">\n    <Skeleton className="h-4 w-[200px]" />\n    <Skeleton className="h-4 w-[150px]" />\n  </Box>\n</Box>`
      },
      {
        title: 'Card Layout',
        preview: (
          <Box className="space-y-3 w-full max-w-xs">
            <Skeleton className="h-[125px] w-full rounded-xl" />
            <Skeleton className="h-4 w-[200px]" />
            <Skeleton className="h-4 w-[150px]" />
          </Box>
        ),
        code: `<Box className="space-y-3">\n  <Skeleton className="h-[125px] w-[250px] rounded-xl" />\n  <Skeleton className="h-4 w-[200px]" />\n  <Skeleton className="h-4 w-[150px]" />\n</Box>`
      },
      {
        title: 'List Layout',
        preview: (
          <Box className="space-y-3 w-full max-w-md">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </Box>
        ),
        code: `<Box className="space-y-3">\n  <Skeleton className="h-4 w-full" />\n  <Skeleton className="h-4 w-full" />\n  <Skeleton className="h-4 w-[80%]" />\n</Box>`
      },
      {
        title: 'Form Layout',
        preview: (
          <Box className="space-y-4 w-full max-w-md">
            <Box className="space-y-2">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-10 w-full rounded-md" />
            </Box>
            <Box className="space-y-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-10 w-full rounded-md" />
            </Box>
            <Skeleton className="h-10 w-full rounded-md mt-6" />
          </Box>
        ),
        code: `<Box className="space-y-4">\n  <Skeleton className="h-10 w-full" />\n  <Skeleton className="h-10 w-full" />\n</Box>`
      }
    ]
  },
  badge: {
    title: 'Badge',
    description: 'Displays a badge or a component that looks like a badge.',
    props: [
      {
            "name": "variant",
            "type": "PatiyaVariant",
            "default": "-",
            "description": "The visual style of the component."
          },
      {
            "name": "color",
            "type": "PatiyaColor",
            "default": "-",
            "description": "The semantic color theme of the component."
          },
      {
            "name": "size",
            "type": "'sm' | 'md' | 'lg'",
            "default": "-",
            "description": "The size of the component."
          },
      {
            "name": "radius",
            "type": "PatiyaRadius",
            "default": "-",
            "description": "The border radius of the component."
          }
    ],
    examples: [
      {
        title: 'Solid Colors',
        preview: (
          <Box className="flex flex-wrap gap-4">
            <Badge color="primary">Primary</Badge>
            <Badge color="secondary">Secondary</Badge>
            <Badge color="accent">Accent</Badge>
            <Badge color="destructive">Error</Badge>
          </Box>
        ),
        code: `<Badge color="primary">Primary</Badge>\n<Badge color="secondary">Secondary</Badge>`
      },
      {
        title: 'Soft Variants',
        preview: (
          <Box className="flex flex-wrap gap-4">
            <Badge color="primary" variant="soft">Primary</Badge>
            <Badge color="secondary" variant="soft">Secondary</Badge>
            <Badge color="accent" variant="soft">Accent</Badge>
            <Badge color="destructive" variant="soft">Error</Badge>
          </Box>
        ),
        code: `<Badge color="primary" variant="soft">Primary</Badge>`
      },
      {
        title: 'Outline Variants',
        preview: (
          <Box className="flex flex-wrap gap-4">
            <Badge color="primary" variant="outline">Primary</Badge>
            <Badge color="secondary" variant="outline">Secondary</Badge>
            <Badge color="accent" variant="outline">Accent</Badge>
            <Badge color="destructive" variant="outline">Error</Badge>
          </Box>
        ),
        code: `<Badge color="primary" variant="outline">Primary</Badge>`
      },
      {
        title: 'Pill Shaped',
        preview: (
          <Box className="flex flex-wrap gap-4">
            <Badge color="primary" className="rounded-full px-3">Primary</Badge>
            <Badge color="accent" className="rounded-full px-3">Accent</Badge>
          </Box>
        ),
        code: `<Badge className="rounded-full">Primary</Badge>`
      }
    ]
  },
  spinner: {
    title: 'Spinner',
    description: 'Indicates a loading state.',
    props: [
      {
            "name": "size",
            "type": "PatiyaSize",
            "default": "-",
            "description": "The size of the component."
          },
      {
            "name": "color",
            "type": "PatiyaColor | 'current'",
            "default": "-",
            "description": "The semantic color theme of the component."
          },
      {
            "name": "label",
            "type": "string",
            "default": "-",
            "description": "The accessible label or text."
          }
    ],
    examples: [
      {
        title: 'Sizes',
        preview: (
          <Box className="flex gap-8 items-center">
            <Spinner size="sm" />
            <Spinner size="md" />
            <Spinner size="lg" />
          </Box>
        ),
        code: `<Spinner size="sm" />\n<Spinner size="md" />\n<Spinner size="lg" />`
      },
      {
        title: 'Colors',
        preview: (
          <Box className="flex gap-8 items-center">
            <Spinner color="primary" />
            <Spinner color="accent" />
            <Spinner color="destructive" />
            <Spinner color="secondary" />
          </Box>
        ),
        code: `<Spinner color="primary" />\n<Spinner color="accent" />`
      },
      {
        title: 'With Text',
        preview: (
          <Box className="flex items-center gap-3 text-sm text-(--patiya-color-muted-foreground)">
            <Spinner size="sm" color="primary" />
            Loading data...
          </Box>
        ),
        code: `<Box className="flex items-center gap-3">\n  <Spinner size="sm" />\n  Loading data...\n</Box>`
      },
      {
        title: 'Button Loading',
        preview: (
          <Box className="flex gap-4 items-center w-full">
            <Button disabled>
              <Spinner size="sm" className="mr-2" />
              Please wait
            </Button>
            <Button variant="outline" disabled>
              <Spinner size="sm" className="mr-2" />
              Processing
            </Button>
          </Box>
        ),
        code: `<Button disabled>\n  <Spinner size="sm" className="mr-2" />\n  Please wait\n</Button>`
      }
    ]
  },
  tooltip: {
    title: 'Tooltip',
    description: 'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
    props: [
      {
            "name": "content",
            "type": "React.ReactNode",
            "default": "-",
            "description": "The content to display."
          },
      {
            "name": "children",
            "type": "React.ReactElement",
            "default": "-",
            "description": "The content of the component."
          },
      {
            "name": "placement",
            "type": "Placement",
            "default": "-",
            "description": "The preferred placement of the component."
          },
      {
            "name": "className",
            "type": "string",
            "default": "-",
            "description": "Additional CSS classes to apply to the component."
          },
      {
            "name": "delay",
            "type": "number",
            "default": "-",
            "description": "The delay in milliseconds before the component appears."
          }
    ],
    examples: [
      {
        title: 'Positions',
        preview: (
          <Box className="flex gap-8">
            <Tooltip content="Add to library" placement="top"><Button variant="outline">Top</Button></Tooltip>
            <Tooltip content="Settings" placement="bottom"><Button variant="outline">Bottom</Button></Tooltip>
          </Box>
        ),
        code: `<Tooltip content="Add to library" placement="top">\n  <Button variant="outline">Top</Button>\n</Tooltip>`
      },
      {
        title: 'With Delay',
        preview: (
          <Box className="flex gap-8">
            <Tooltip content="I appeared after 500ms!" delay={500} placement="top">
              <Button variant="outline">Hover me slowly</Button>
            </Tooltip>
          </Box>
        ),
        code: `<Tooltip content="I appeared after 500ms!" delay={500}>\n  <Button>Hover me slowly</Button>\n</Tooltip>`
      }
    ]
  },
  modal: {
    title: 'Modal / Dialog',
    description: 'A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.',
    installation: `import { Modal, ModalHeader, ModalTitle, ModalDescription, ModalFooter } from 'patiya';`,
    props: [
      { name: 'open', type: 'boolean', default: 'false', description: 'The controlled open state of the modal.' },
      { name: 'onOpenChange', type: '(open: boolean) => void', default: '-', description: 'Event handler called when the open state changes.' },
      { name: 'children', type: 'React.ReactNode', default: '-', description: 'The content of the modal, typically ModalHeader and ModalFooter.' },
      { name: 'size', type: "'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'", default: "'md'", description: 'The size of the modal.' }
    ],
    examples: [
      {
        title: 'Standard Modal',
        preview: <ModalPreview />,
        code: `<Modal open={open} onOpenChange={setOpen}>\n  <ModalHeader>\n    <ModalTitle>Edit Profile</ModalTitle>\n    <ModalDescription>Make changes.</ModalDescription>\n  </ModalHeader>\n  <ModalFooter>\n    <Button onClick={() => setOpen(false)}>Save</Button>\n  </ModalFooter>\n</Modal>`
      },
      {
        title: 'Sizes',
        preview: <ModalSizePreview />,
        code: `<Modal open={open} onOpenChange={setOpen} size="xl">\n  <ModalHeader>\n    <ModalTitle>Extra Large Modal</ModalTitle>\n    <ModalDescription>This modal uses size="xl".</ModalDescription>\n  </ModalHeader>\n</Modal>`
      },
      {
        title: 'Confirmation Dialog',
        preview: (
          <ModalPreview /> // Reusing for preview simplicity, imagine it says "Delete Account"
        ),
        code: `<Modal open={open} onOpenChange={setOpen}>\n  <ModalHeader>\n    <ModalTitle>Delete Account</ModalTitle>\n    <ModalDescription>Are you sure you want to delete your account? This action cannot be undone.</ModalDescription>\n  </ModalHeader>\n  <ModalFooter>\n    <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>\n    <Button color="destructive">Delete</Button>\n  </ModalFooter>\n</Modal>`
      }
    ]
  },
  drawer: {
    title: 'Drawer / Sheet',
    description: 'A panel that slides in from the edge of the screen.',
    props: [
      {
            "name": "open",
            "type": "boolean",
            "default": "-",
            "description": "The controlled open state of the component."
          },
      {
            "name": "onOpenChange",
            "type": "(open: boolean) => void",
            "default": "-",
            "description": "Event handler called when the open state changes."
          },
      {
            "name": "children",
            "type": "React.ReactNode",
            "default": "-",
            "description": "The content of the component."
          },
      {
            "name": "side",
            "type": "'right' | 'left' | 'top' | 'bottom'",
            "default": "-",
            "description": "The side of the screen where the component will appear."
          }
    ],
    examples: [
      {
        title: 'Right-side Drawer',
        preview: <DrawerPreview />,
        code: `<Drawer open={open} onOpenChange={setOpen} side="right">\n  <DrawerHeader>\n    <DrawerTitle>Settings</DrawerTitle>\n    <DrawerDescription>Manage your account settings.</DrawerDescription>\n  </DrawerHeader>\n</Drawer>`
      },
      {
        title: 'Bottom Sheet',
        preview: (
          <Box className="text-center w-full">
            <BottomSheetPreview />
          </Box>
        ),
        code: `<Drawer side="bottom">\n  <DrawerHeader>\n    <DrawerTitle>Bottom Sheet</DrawerTitle>\n  </DrawerHeader>\n</Drawer>`
      }
    ]
  },
  popover: {
    title: 'Popover',
    description: 'Displays rich content in a portal, triggered by a button.',
    props: [
      {
            "name": "children",
            "type": "React.ReactNode",
            "default": "-",
            "description": "The content of the component."
          },
      {
            "name": "placement",
            "type": "Placement",
            "default": "-",
            "description": "The preferred placement of the component."
          },
      {
            "name": "open",
            "type": "boolean",
            "default": "-",
            "description": "The controlled open state of the component."
          },
      {
            "name": "onOpenChange",
            "type": "(open: boolean) => void",
            "default": "-",
            "description": "Event handler called when the open state changes."
          }
    ],
    examples: [
      {
        title: 'Default',
        preview: <PopoverPreview />,
        code: `<Popover>\n  <PopoverTrigger asChild>\n    <Button variant="outline">Open</Button>\n  </PopoverTrigger>\n  <PopoverContent>\n    <p>Place content here.</p>\n  </PopoverContent>\n</Popover>`
      },
      {
        title: 'Profile Popover',
        preview: (
          <Box className="flex justify-center w-full">
            <ProfilePopoverPreview />
          </Box>
        ),
        code: `<Popover>\n  <PopoverTrigger asChild>\n    <Avatar src="https://i.pravatar.cc/150" className="cursor-pointer" />\n  </PopoverTrigger>\n  <PopoverContent className="w-56">\n    <Box className="flex flex-col gap-2 p-2">\n      <h4 className="font-semibold text-sm">John Doe</h4>\n      <p className="text-xs text-muted-foreground">john@example.com</p>\n    </Box>\n  </PopoverContent>\n</Popover>`
      }
    ]
  },
  'dropdown-menu': {
    title: 'Dropdown Menu',
    description: 'Displays a menu to the user-such as a set of actions or functions-triggered by a button.',
    installation: `import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from 'patiya';`,
    props: [
      { name: 'placement', type: 'Placement', default: "'bottom-start'", description: 'The preferred placement of the dropdown menu.' },
      { name: 'children', type: 'React.ReactNode', default: '-', description: 'The trigger and content of the dropdown menu.' },
      { name: 'asChild (Trigger)', type: 'boolean', default: 'false', description: 'Whether to merge the trigger props onto its child element.' },
    ],
    examples: [
      {
        title: 'User Profile Menu',
        preview: <DropdownPreview />,
        code: `<DropdownMenu>\n  <DropdownMenuTrigger asChild>\n    <Button variant="outline">Open</Button>\n  </DropdownMenuTrigger>\n  <DropdownMenuContent>\n    <DropdownMenuItem>Profile</DropdownMenuItem>\n    <DropdownMenuItem>Billing</DropdownMenuItem>\n  </DropdownMenuContent>\n</DropdownMenu>`
      },
      {
        title: 'With Icons',
        preview: (
          <Box className="flex justify-center w-full">
            <DropdownWithIconsPreview />
          </Box>
        ),
        code: `<DropdownMenu>\n  <DropdownMenuTrigger asChild>\n    <Button variant="outline">Settings</Button>\n  </DropdownMenuTrigger>\n  <DropdownMenuContent>\n    <DropdownMenuItem>\n      <svg className="mr-2 h-4 w-4">...</svg> Profile\n    </DropdownMenuItem>\n    <DropdownMenuItem>\n      <svg className="mr-2 h-4 w-4">...</svg> Billing\n    </DropdownMenuItem>\n  </DropdownMenuContent>\n</DropdownMenu>`
      },
      {
        title: 'Avatar Trigger',
        preview: (
          <Box className="flex justify-center w-full">
            <DropdownAvatarPreview />
          </Box>
        ),
        code: `<DropdownMenu>\n  <DropdownMenuTrigger asChild>\n    <Avatar src="https://i.pravatar.cc/150" className="cursor-pointer" />\n  </DropdownMenuTrigger>\n  <DropdownMenuContent className="w-48">\n    <DropdownMenuItem>Profile</DropdownMenuItem>\n    <DropdownMenuItem>Settings</DropdownMenuItem>\n  </DropdownMenuContent>\n</DropdownMenu>`
      }
    ]
  },
  toast: {
    title: 'Toast',
    description: 'A succinct message that is displayed temporarily.',
    installation: `import { useToast } from 'patiya';`,
    props: [
      { name: 'title', type: 'string', default: '-', description: 'The title of the toast message.' },
      { name: 'description', type: 'string', default: '-', description: 'The description or body of the toast.' },
      { name: 'type', type: "'default' | 'success' | 'error' | 'warning' | 'info'", default: "'default'", description: 'The semantic color type of the toast.' },
      { name: 'duration', type: 'number', default: '5000', description: 'Time in milliseconds before the toast auto-dismisses.' },
    ],
    examples: [
      {
        title: 'Different Types',
        preview: <ToastPreview />,
        code: `const { toast } = useToast();\n\ntoast({\n  title: 'Success!',\n  description: 'Your changes were saved.',\n  type: 'success'\n});`
      },
      {
        title: 'Action Toast',
        preview: (
          <Box className="flex justify-center w-full">
            <Button variant="outline" onClick={() => alert('Toast triggered')}>Undo Action</Button>
          </Box>
        ),
        code: `toast({\n  title: 'Deleted',\n  action: <Button>Undo</Button>\n});`
      }
    ]
  },
  spotlightCard: {
    title: 'Spotlight Card',
    description: 'A beautiful card that tracks the mouse and reveals a soft spotlight behind its content.',
    installation: `import { SpotlightCard } from 'patiya';`,
    props: [
      { name: 'spotlightColor', type: "'primary' | 'secondary' | 'accent' | 'destructive' | 'success' | 'warning' | 'info' | 'spotlight'", default: "'spotlight'", description: 'The color of the spotlight effect.' },
      { name: 'spotlightSize', type: 'number', default: '250', description: 'The radius size of the spotlight.' }
    ],
    examples: [
      {
        title: 'Basic Usage',
        preview: <SpotlightCardPreview />,
        code: `<SpotlightCard className="w-full max-w-sm text-center">\n  <h3 className="text-xl font-semibold mb-2">Spotlight Card</h3>\n  <p className="text-(--patiya-color-muted-foreground) text-sm">\n    Hover over me to see the beautiful glowing spotlight effect tracking your cursor.\n  </p>\n</SpotlightCard>`
      },
      {
        title: 'Primary Color Spotlight',
        preview: (
          <Box className="flex w-full items-center justify-center py-10">
            <SpotlightCard spotlightColor="primary" className="w-full max-w-sm text-center">
              <h3 className="text-xl font-semibold mb-2">Primary Spotlight</h3>
              <p className="text-(--patiya-color-muted-foreground) text-sm">
                This card uses the primary brand color for its spotlight effect.
              </p>
            </SpotlightCard>
          </Box>
        ),
        code: `<SpotlightCard spotlightColor="primary" className="w-full max-w-sm text-center">\n  <h3 className="text-xl font-semibold mb-2">Primary Spotlight</h3>\n  <p className="text-(--patiya-color-muted-foreground) text-sm">\n    This card uses the primary brand color for its spotlight effect.\n  </p>\n</SpotlightCard>`
      }
    ]
  },
  tiltCard: {
    title: 'Tilt Card',
    description: 'A 3D hover card that tilts smoothly towards your cursor, complete with a beautiful glare effect for a realistic look.',
    installation: `import { TiltCard } from 'patiya';`,
    props: [
      { name: 'tiltMaxAngleX', type: 'number', default: '20', description: 'Maximum rotation angle around the X-axis.' },
      { name: 'tiltMaxAngleY', type: 'number', default: '20', description: 'Maximum rotation angle around the Y-axis.' },
      { name: 'perspective', type: 'number', default: '1000', description: '3D perspective value in pixels.' },
      { name: 'glareOpacity', type: 'number', default: '0.5', description: 'Maximum opacity of the radial glare effect (0 to 1).' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'If true, disables the hover and tilt effects entirely.' }
    ],
    examples: [
      {
        title: 'Basic Usage',
        preview: (
          <Box className="flex w-full items-center justify-center py-10">
            <TiltCard className="w-full max-w-[300px] h-[400px]">
              <div className="flex flex-col items-center justify-center h-full p-8 text-center bg-[var(--patiya-color-card)] rounded-xl relative overflow-hidden group border border-[var(--patiya-color-border)] shadow-sm">
                <div className="absolute inset-0 bg-grid-[var(--patiya-color-border)]/[0.2] bg-[size:20px_20px]" />
                <div className="relative z-10">
                  <Avatar src="https://i.pravatar.cc/200" alt="@avatar" size="xl" className="mx-auto mb-6 shadow-lg" />
                  <h3 className="text-2xl font-bold mb-2">Tilt Card</h3>
                  <p className="text-[var(--patiya-color-muted-foreground)]">
                    Hover over this card to see it tilt in 3D space with a dynamic glare effect.
                  </p>
                </div>
              </div>
            </TiltCard>
          </Box>
        ),
        code: `<TiltCard className="w-full max-w-[300px] h-[400px]">
  <div className="flex flex-col items-center justify-center h-full p-8 text-center bg-[var(--patiya-color-card)] rounded-xl relative overflow-hidden border border-[var(--patiya-color-border)]">
    <div className="absolute inset-0 bg-grid-[var(--patiya-color-border)]/[0.2] bg-[size:20px_20px]" />
    <div className="relative z-10">
      <Avatar src="https://i.pravatar.cc/200" alt="u-avatar" size="xl" className="mx-auto mb-6 shadow-lg" />
      <h3 className="text-2xl font-bold mb-2">Tilt Card</h3>
      <p className="text-[var(--patiya-color-muted-foreground)]">
        Hover over this card to see it tilt in 3D space with a dynamic glare effect.
      </p>
    </div>
  </div>
</TiltCard>`
      }
    ]
  },
  compareSlider: {
    title: 'Compare Slider',
    description: 'An interactive slider to compare two images (Before/After) side by side.',
    installation: `import { CompareSlider } from 'patiya';`,
    props: [
      { name: 'beforeImage', type: 'string', default: "''", description: 'The source URL for the before image.' },
      { name: 'afterImage', type: 'string', default: "''", description: 'The source URL for the after image.' },
      { name: 'beforeLabel', type: 'string', default: "'Before'", description: 'Label shown over the before image.' },
      { name: 'afterLabel', type: 'string', default: "'After'", description: 'Label shown over the after image.' },
      { name: 'initialPosition', type: 'number', default: '50', description: 'Initial percentage position of the slider (0-100).' }
    ],
    examples: [
      {
        title: 'Basic Usage',
        preview: (
          <Box className="flex w-full items-center justify-center">
            <CompareSlider
              className="max-w-3xl"
              beforeImage="https://images.unsplash.com/photo-1542317148-8b4bdccb33ea?q=80&w=1200&auto=format&fit=crop"
              afterImage="https://images.unsplash.com/photo-1542317148-8b4bdccb33ea?q=80&w=1200&auto=format&fit=crop&sat=-100"
              beforeLabel="Original"
              afterLabel="Grayscale"
            />
          </Box>
        ),
        code: `<CompareSlider\n  className="max-w-3xl"\n  beforeImage="https://images.unsplash.com/photo-1542317148-8b4bdccb33ea?q=80&w=1200&auto=format&fit=crop"\n  afterImage="https://images.unsplash.com/photo-1542317148-8b4bdccb33ea?q=80&w=1200&auto=format&fit=crop&sat=-100"\n  beforeLabel="Original"\n  afterLabel="Grayscale"\n/>`
      }
    ]
  },
  scratchToReveal: {
    title: 'Scratch To Reveal',
    description: 'A highly interactive and fun component that lets users "scratch" away a top layer (using mouse or touch) to reveal the hidden content underneath.',
    installation: `import { ScratchToReveal } from 'patiya';`,
    props: [
      { name: 'width', type: 'number', default: '-', description: 'Width of the scratch area in pixels.' },
      { name: 'height', type: 'number', default: '-', description: 'Height of the scratch area in pixels.' },
      { name: 'minScratchPercentage', type: 'number', default: '50', description: 'Percentage of the area that must be scratched to trigger completion.' },
      { name: 'coverImage', type: 'string', default: "''", description: 'Optional image to use as the scratch-off cover.' },
      { name: 'coverColor', type: 'string', default: "'#cbd5e1'", description: 'Solid color to use as the cover if no image is provided.' },
      { name: 'brushSize', type: 'number', default: '40', description: 'Size of the scratch brush.' },
      { name: 'onComplete', type: '() => void', default: "undefined", description: 'Callback fired when the scratch percentage is met.' }
    ],
    examples: [
      {
        title: 'Basic Usage',
        preview: (
          <Box className="flex w-full items-center justify-center py-10 px-4 flex-col gap-4">
            <p className="text-sm text-gray-500 mb-2">Scratch the card to reveal the secret!</p>
            <ScratchToReveal
              width={300}
              height={300}
              minScratchPercentage={60}
              coverColor="#94a3b8"
              className="rounded-2xl shadow-xl border border-gray-200"
            >
              <div className="w-full h-full flex flex-col items-center justify-center bg-white p-6 text-center">
                <span className="text-6xl mb-4">🎉</span>
                <h3 className="text-2xl font-bold text-gray-800">You Won!</h3>
                <p className="text-gray-500 mt-2">Claim your 50% discount code: <strong>PATIYA50</strong></p>
              </div>
            </ScratchToReveal>
          </Box>
        ),
        code: `<ScratchToReveal\n  width={300}\n  height={300}\n  minScratchPercentage={60}\n  coverColor="#94a3b8"\n  className="rounded-2xl shadow-xl"\n>\n  <div className="w-full h-full flex flex-col items-center justify-center bg-white p-6 text-center">\n    <span className="text-6xl mb-4">🎉</span>\n    <h3 className="text-2xl font-bold text-gray-800">You Won!</h3>\n    <p className="text-gray-500 mt-2">Claim your 50% discount code: <strong>PATIYA50</strong></p>\n  </div>\n</ScratchToReveal>`
      }
    ]
  },
  magnetic: {
    title: 'Magnetic',
    description: 'A component wrapper that smoothly pulls its children towards the user\'s mouse cursor when hovered, creating a magnetic field effect.',
    installation: `import { Magnetic } from 'patiya';`,
    props: [
      { name: 'intensity', type: 'number', default: '0.5', description: 'The strength of the magnetic pull.' },
      { name: 'range', type: 'number', default: '100', description: 'The distance in pixels at which the magnetic pull activates.' }
    ],
    examples: [
      {
        title: 'Basic Usage',
        preview: (
          <Box className="flex w-full items-center justify-center py-10 px-4">
            <Magnetic intensity={0.5} range={120}>
              <Button size="lg" className="rounded-full h-16 px-8 text-lg bg-black text-white hover:bg-black/90 hover:text-white dark:bg-white dark:text-black">
                Hover Me
              </Button>
            </Magnetic>
          </Box>
        ),
        code: `<Magnetic intensity={0.5} range={120}>\n  <Button size="lg" className="rounded-full h-16 px-8 text-lg bg-black text-white hover:bg-black/90 hover:text-white dark:bg-white dark:text-black">\n    Hover Me\n  </Button>\n</Magnetic>`
      }
    ]
  },
  dock: {
    title: 'Dock',
    description: 'A Mac OS style interactive dock. Items magnify dynamically based on their proximity to the mouse cursor.',
    installation: `import { Dock, DockItem } from 'patiya';`,
    props: [
      { name: 'magnification', type: 'number', default: '60', description: 'Maximum pixel size an item reaches when fully hovered.' },
      { name: 'distance', type: 'number', default: '140', description: 'The interaction distance in pixels for magnification.' }
    ],
    examples: [
      {
        title: 'Basic Usage',
        preview: (
          <Box className="flex w-full items-center justify-center py-10 px-4">
            <Dock magnification={60} distance={140}>
              <DockItem className="bg-blue-500 text-white">1</DockItem>
              <DockItem className="bg-red-500 text-white">2</DockItem>
              <DockItem className="bg-green-500 text-white">3</DockItem>
              <DockItem className="bg-yellow-500 text-white">4</DockItem>
              <DockItem className="bg-purple-500 text-white">5</DockItem>
            </Dock>
          </Box>
        ),
        code: `<Dock magnification={60} distance={140}>\n  <DockItem className="bg-blue-500 text-white">1</DockItem>\n  <DockItem className="bg-red-500 text-white">2</DockItem>\n  <DockItem className="bg-green-500 text-white">3</DockItem>\n  <DockItem className="bg-yellow-500 text-white">4</DockItem>\n  <DockItem className="bg-purple-500 text-white">5</DockItem>\n</Dock>`
      }
    ]
  },
  flipCard: {
    title: 'Flip Card',
    description: 'An interactive 3D card that flips over when clicked to reveal the back side.',
    installation: `import { FlipCard } from 'patiya';`,
    props: [
      { name: 'front', type: 'ReactNode', default: '-', description: 'The content for the front face of the card.' },
      { name: 'back', type: 'ReactNode', default: '-', description: 'The content for the back face of the card.' },
      { name: 'direction', type: 'horizontal | vertical', default: 'horizontal', description: 'The axis on which the card flips.' }
    ],
    examples: [
      {
        title: 'Basic Usage',
        preview: (
          <Box className="flex w-full items-center justify-center py-10 px-4">
            <FlipCard
              className="w-[300px] h-[400px]"
              direction="horizontal"
              front={
                <div className="w-full h-full bg-[var(--patiya-color-card)] rounded-[1.5rem] shadow-lg flex flex-col items-center justify-center border border-[var(--patiya-color-border)] p-6 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--patiya-color-primary)]/10 rounded-full blur-3xl transition-transform duration-500 group-hover:scale-150" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl" />
                  
                  <div className="w-16 h-16 rounded-full bg-[var(--patiya-color-primary)]/10 flex items-center justify-center mb-6 text-[var(--patiya-color-primary)] ring-1 ring-[var(--patiya-color-primary)]/20 shadow-inner">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--patiya-color-foreground)]">Premium Pass</h3>
                  <p className="text-sm text-[var(--patiya-color-muted-foreground)] mt-2 font-medium tracking-wide">Click to Reveal</p>
                </div>
              }
              back={
                <div className="w-full h-full bg-gradient-to-br from-[var(--patiya-color-primary)] via-[var(--patiya-color-primary)] to-purple-600 rounded-[1.5rem] shadow-xl flex flex-col p-8 text-[var(--patiya-color-primary-foreground)] relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
                  <div className="relative z-10 flex justify-between items-center mb-6 pb-4 border-b border-white/20">
                    <span className="font-bold tracking-widest text-lg">VIP</span>
                    <span className="font-mono text-xs font-bold bg-white/20 text-white px-2.5 py-1 rounded-full uppercase tracking-wider backdrop-blur-md shadow-sm">LIFETIME</span>
                  </div>
                  <div className="relative z-10 mt-auto space-y-4">
                    <div className="space-y-1">
                      <h4 className="font-bold text-2xl tracking-tight leading-none">Unlocked</h4>
                      <p className="text-sm text-white/80 leading-relaxed pt-2">Full access to all premium components, priority updates, and exclusive templates.</p>
                    </div>
                  </div>
                </div>
              }
            />
          </Box>
        ),
        code: `<FlipCard\n  className="w-[300px] h-[400px]"\n  direction="horizontal"\n  front={\n    <div className="w-full h-full bg-[var(--patiya-color-card)] rounded-[1.5rem] shadow-lg flex flex-col items-center justify-center border border-[var(--patiya-color-border)] p-6 relative overflow-hidden group">\n      <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--patiya-color-primary)]/10 rounded-full blur-3xl transition-transform duration-500 group-hover:scale-150" />\n      <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl" />\n      \n      <div className="w-16 h-16 rounded-full bg-[var(--patiya-color-primary)]/10 flex items-center justify-center mb-6 text-[var(--patiya-color-primary)] ring-1 ring-[var(--patiya-color-primary)]/20 shadow-inner">\n        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />\n        </svg>\n      </div>\n      <h3 className="text-2xl font-bold text-[var(--patiya-color-foreground)]">Premium Pass</h3>\n      <p className="text-sm text-[var(--patiya-color-muted-foreground)] mt-2 font-medium tracking-wide">Click to Reveal</p>\n    </div>\n  }\n  back={\n    <div className="w-full h-full bg-gradient-to-br from-[var(--patiya-color-primary)] via-[var(--patiya-color-primary)] to-purple-600 rounded-[1.5rem] shadow-xl flex flex-col p-8 text-[var(--patiya-color-primary-foreground)] relative overflow-hidden">\n      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />\n      <div className="relative z-10 flex justify-between items-center mb-6 pb-4 border-b border-white/20">\n        <span className="font-bold tracking-widest text-lg">VIP</span>\n        <span className="font-mono text-xs font-bold bg-white/20 text-white px-2.5 py-1 rounded-full uppercase tracking-wider backdrop-blur-md shadow-sm">LIFETIME</span>\n      </div>\n      <div className="relative z-10 mt-auto space-y-4">\n        <div className="space-y-1">\n          <h4 className="font-bold text-2xl tracking-tight leading-none">Unlocked</h4>\n          <p className="text-sm text-white/80 leading-relaxed pt-2">Full access to all premium components, priority updates, and exclusive templates.</p>\n        </div>\n      </div>\n    </div>\n  }\n/>`
      }
    ]
  },
  directionAwareHover: {
    title: 'Direction Aware Hover',
    description: 'An interactive image card where the overlay slides in from the exact direction (top, right, bottom, left) that your mouse enters it from.',
    installation: `import { DirectionAwareHover } from 'patiya';`,
    props: [
      { name: 'imageUrl', type: 'string', default: "''", description: 'The source URL for the background image.' },
      { name: 'children', type: 'ReactNode', default: '-', description: 'Content rendered inside the overlay.' },
      { name: 'overlayClassName', type: 'string', default: "''", description: 'Additional classes for the overlay container.' },
      { name: 'imageClassName', type: 'string', default: "''", description: 'Additional classes for the background image.' }
    ],
    examples: [
      {
        title: 'Basic Usage',
        preview: (
          <Box className="flex w-full items-center justify-center py-10 px-4">
            <DirectionAwareHover
              className="w-80 h-96"
              imageUrl="https://images.unsplash.com/photo-1542317148-8b4bdccb33ea?q=80&w=1200&auto=format&fit=crop"
            >
              <h3 className="text-2xl font-bold text-white mb-2">Beautiful Scenery</h3>
              <p className="text-gray-200">The overlay knows where you came from.</p>
            </DirectionAwareHover>
          </Box>
        ),
        code: `<DirectionAwareHover\n  className="w-80 h-96"\n  imageUrl="https://images.unsplash.com/photo-1542317148-8b4bdccb33ea?q=80&w=1200&auto=format&fit=crop"\n>\n  <h3 className="text-2xl font-bold text-white mb-2">Beautiful Scenery</h3>\n  <p className="text-gray-200">The overlay knows where you came from.</p>\n</DirectionAwareHover>`
      }
    ]
  },
  shimmerButton: {
    title: 'Shimmer Button',
    description: 'A premium button component with a beautiful rotating conic-gradient border shimmer effect.',
    installation: `import { ShimmerButton } from 'patiya';`,
    props: [
      { name: 'shimmerColor', type: 'string', default: "'#ffffff'", description: 'Color of the shimmer ray.' },
      { name: 'shimmerSize', type: 'string', default: "'0.05em'", description: 'Thickness of the shimmering border.' },
      { name: 'shimmerDuration', type: 'string', default: "'3s'", description: 'Time taken for one full rotation.' },
      { name: 'background', type: 'string', default: "'var(--patiya-color-primary)'", description: 'Background color of the button.' },
      { name: 'borderRadius', type: 'string', default: "'100px'", description: 'Border radius for pill or rounded shapes.' }
    ],
    examples: [
      {
        title: 'Basic Usage',
        preview: (
          <Box className="flex w-full items-center justify-center py-10 px-4 gap-4">
            <ShimmerButton background="#0f172a" shimmerColor="#38bdf8">
              Start Building
            </ShimmerButton>
            <ShimmerButton background="#fff" shimmerColor="#f43f5e">
              <span className="text-slate-900">Subscribe Now</span>
            </ShimmerButton>
          </Box>
        ),
        code: `<ShimmerButton background="#0f172a" shimmerColor="#38bdf8">\n  Start Building\n</ShimmerButton>\n\n<ShimmerButton background="#fff" shimmerColor="#f43f5e">\n  <span className="text-slate-900">Subscribe Now</span>\n</ShimmerButton>`
      }
    ]
  },
  carousel: {
    title: 'Carousel',
    description: 'A stunning, touch-friendly image carousel with autoplay and smooth transitions.',
    installation: `import { Carousel } from 'patiya';`,
    props: [
      { name: 'images', type: '{ src: string, alt?: string }[]', default: '-', description: 'Array of image objects to display.' },
      { name: 'autoPlay', type: 'boolean', default: 'true', description: 'Whether the carousel should automatically cycle.' },
      { name: 'interval', type: 'number', default: '5000', description: 'Autoplay interval in milliseconds.' },
      { name: 'showArrows', type: 'boolean', default: 'true', description: 'Show next and previous navigation arrows.' },
      { name: 'showDots', type: 'boolean', default: 'true', description: 'Show navigation dots at the bottom.' }
    ],
    examples: [
      {
        title: 'Basic Usage',
        preview: (
          <Box className="flex w-full items-center justify-center">
            <Carousel 
              className="w-full max-w-2xl aspect-video shadow-2xl"
              images={[
                { src: 'https://picsum.photos/seed/picsum1/1200/800', alt: 'Beautiful landscape' },
                { src: 'https://picsum.photos/seed/picsum2/1200/800', alt: 'City sunset' },
                { src: 'https://picsum.photos/seed/picsum3/1200/800', alt: 'Ocean waves' }
              ]} 
            />
          </Box>
        ),
        code: `<Carousel \n  className="w-full max-w-2xl aspect-video"\n  images={[\n    { src: 'https://picsum.photos/seed/picsum1/1200/800' },\n    { src: 'https://picsum.photos/seed/picsum2/1200/800' },\n    { src: 'https://picsum.photos/seed/picsum3/1200/800' }\n  ]} \n/>`
      }
    ]
  },
  videoModal: {
    title: 'Video Modal',
    description: 'An elegant media wrapper that displays a thumbnail and expands a video player into a cinematic modal overlay when clicked.',
    installation: `import { VideoModal } from 'patiya';`,
    props: [
      { name: 'videoSrc', type: 'string', default: '-', description: 'URL of the video to play (e.g. YouTube embed URL).' },
      { name: 'thumbnailUrl', type: 'string', default: '-', description: 'URL of the thumbnail image.' },
      { name: 'title', type: 'string', default: "'Play Video'", description: 'Title of the video (used for alt text and iframe title).' },
      { name: 'playIcon', type: 'ReactNode', default: '-', description: 'Custom play icon to display.' }
    ],
    examples: [
      {
        title: 'Basic Usage',
        preview: (
          <Box className="flex w-full items-center justify-center">
            <VideoModal 
              className="w-full max-w-xl shadow-xl ring-1 ring-white/10"
              videoSrc="https://www.youtube.com/embed/dQw4w9WgXcQ"
              thumbnailUrl="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop"
              title="Never Gonna Give You Up"
            />
          </Box>
        ),
        code: `<VideoModal \n  className="w-full max-w-xl"\n  videoSrc="https://www.youtube.com/embed/dQw4w9WgXcQ"\n  thumbnailUrl="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop"\n  title="Never Gonna Give You Up"\n/>`
      }
    ]
  },
  imageZoom: {
    title: 'Image Zoom',
    description: 'A smooth, accessible click-to-zoom image component that expands media to fill the viewport seamlessly.',
    installation: `import { ImageZoom } from 'patiya';`,
    props: [
      { name: 'src', type: 'string', default: '-', description: 'URL of the image.' },
      { name: 'zoomSrc', type: 'string', default: '-', description: 'Optional high-resolution URL to load when zoomed.' },
      { name: 'alt', type: 'string', default: '-', description: 'Alternative text for the image.' }
    ],
    examples: [
      {
        title: 'Basic Usage',
        preview: (
          <Box className="flex w-full items-center justify-center py-4 px-4">
            <ImageZoom 
              src="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?q=80&w=1200&auto=format&fit=crop"
              className="w-64 h-64 object-cover rounded-3xl shadow-lg ring-1 ring-[var(--patiya-color-border)]"
              alt="Beautiful Abstract"
            />
          </Box>
        ),
        code: `<ImageZoom \n  src="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?q=80&w=1200&auto=format&fit=crop"\n  className="w-64 h-64 object-cover rounded-3xl shadow-lg"\n  alt="Beautiful Abstract"\n/>`
      }
    ]
  },
  gradientText: {
    title: 'Gradient Text',
    description: 'An elegant animated gradient text effect using background clipping. Perfect for catching attention.',
    installation: `import { GradientText } from 'patiya';`,
    props: [
      { name: 'colors', type: 'string[]', default: "['#ffaa40', '#9c40ff', '#ffaa40']", description: 'Array of colors for the gradient.' },
      { name: 'animationSpeed', type: 'number', default: '8', description: 'Duration of the gradient animation in seconds.' },
      { name: 'showBorder', type: 'boolean', default: 'false', description: 'Whether to show a glassmorphic border.' }
    ],
    examples: [
      {
        title: 'Basic Usage',
        preview: (
          <Box className="flex w-full items-center justify-center py-10 px-4">
            <GradientText className="text-3xl font-bold tracking-tight px-6 py-2" showBorder>
              Experience the Magic
            </GradientText>
          </Box>
        ),
        code: `<GradientText \n  className="text-3xl font-bold tracking-tight px-6 py-2"\n  showBorder\n>\n  Experience the Magic\n</GradientText>`
      },
      {
        title: 'Custom Colors',
        preview: (
          <Box className="flex w-full items-center justify-center py-10 px-4">
            <GradientText 
              className="text-4xl font-extrabold px-6 py-2" 
              colors={['#00f2fe', '#4facfe', '#00f2fe']}
              animationSpeed={4}
            >
              Ultra Fast
            </GradientText>
          </Box>
        ),
        code: `<GradientText \n  className="text-4xl font-extrabold"\n  colors={['#00f2fe', '#4facfe', '#00f2fe']}\n  animationSpeed={4}\n>\n  Ultra Fast\n</GradientText>`
      }
    ]
  },
  typingText: {
    title: 'Typing Text',
    description: 'A realistic typewriter effect that can optionally loop and feature a blinking cursor.',
    installation: `import { TypingText } from 'patiya';`,
    props: [
      { name: 'text', type: 'string', default: '-', description: 'The text to type out.' },
      { name: 'speed', type: 'number', default: '50', description: 'Base typing speed in milliseconds per character.' },
      { name: 'cursor', type: 'string', default: "'|'", description: 'The cursor character.' },
      { name: 'loop', type: 'boolean', default: 'false', description: 'Whether the animation loops infinitely.' }
    ],
    examples: [
      {
        title: 'Basic Usage',
        preview: (
          <Box className="flex w-full items-center justify-center py-10 px-4 text-center">
            <h2 className="text-3xl font-semibold">
              <TypingText text="Design components at the speed of thought." />
            </h2>
          </Box>
        ),
        code: `<h2 className="text-3xl font-semibold">\n  <TypingText text="Design components at the speed of thought." />\n</h2>`
      },
      {
        title: 'Looping',
        preview: (
          <Box className="flex w-full items-center justify-center py-10 px-4">
            <span className="text-2xl font-mono text-[var(--patiya-color-primary)] bg-[var(--patiya-color-primary)]/10 px-4 py-2 rounded-lg">
              <TypingText text="$ pnpm create patiya-app" loop speed={80} cursorClassName="text-[var(--patiya-color-primary)]" />
            </span>
          </Box>
        ),
        code: `<span className="text-2xl font-mono text-primary bg-primary/10 px-4 py-2 rounded-lg">\n  <TypingText \n    text="$ pnpm create patiya-app" \n    loop \n    speed={80} \n  />\n</span>`
      }
    ]
  },
  flipText: {
    title: 'Flip Text',
    description: 'A playful 3D character flipping animation for impactful headlines.',
    installation: `import { FlipText } from 'patiya';`,
    props: [
      { name: 'word', type: 'string', default: '-', description: 'The word or phrase to animate.' },
      { name: 'duration', type: 'number', default: '0.5', description: 'Animation duration per character.' },
      { name: 'delayMultiple', type: 'number', default: '0.08', description: 'Delay between consecutive characters.' }
    ],
    examples: [
      {
        title: 'Basic Usage',
        preview: (
          <Box className="flex w-full items-center justify-center py-10 px-4 overflow-hidden">
            <h1 className="text-5xl font-bold tracking-tighter sm:text-7xl xl:text-8xl/none">
              <FlipText word="BEAUTIFUL" />
            </h1>
          </Box>
        ),
        code: `<h1 className="text-5xl font-bold tracking-tighter">\n  <FlipText word="BEAUTIFUL" />\n</h1>`
      },
      {
        title: 'With Delay',
        preview: (
          <Box className="flex w-full items-center justify-center py-10 px-4 overflow-hidden">
            <div className="text-3xl font-bold text-[var(--patiya-color-muted-foreground)] uppercase">
              <FlipText word="AWESOME" duration={0.8} delayMultiple={0.15} />
            </div>
          </Box>
        ),
        code: `<div className="text-3xl font-bold text-muted-foreground uppercase">\n  <FlipText word="AWESOME" duration={0.8} delayMultiple={0.15} />\n</div>`
      }
    ]
  },
  blurText: {
    title: 'Blur Text',
    description: 'A cinematic text reveal effect that transitions from a heavy blur into focus.',
    installation: `import { BlurText } from 'patiya';`,
    props: [
      { name: 'text', type: 'string', default: '-', description: 'The text to reveal.' },
      { name: 'duration', type: 'number', default: '1.5', description: 'Duration of the blur transition.' },
      { name: 'delay', type: 'number', default: '0', description: 'Delay before the animation starts.' }
    ],
    examples: [
      {
        title: 'Basic Usage',
        preview: (
          <Box className="flex w-full items-center justify-center py-16 px-4">
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tighter">
              <BlurText text="Clarity." duration={2} />
            </h2>
          </Box>
        ),
        code: `<h2 className="text-4xl sm:text-6xl font-extrabold tracking-tighter">\n  <BlurText text="Clarity." duration={2} />\n</h2>`
      },
      {
        title: 'Delayed Reveal',
        preview: (
          <Box className="flex flex-col w-full items-center justify-center py-16 px-4 gap-4">
            <p className="text-xl font-medium text-[var(--patiya-color-muted-foreground)]">
              The future is
            </p>
            <h1 className="text-5xl font-black bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              <BlurText text="Here." delay={1000} />
            </h1>
          </Box>
        ),
        code: `<p className="text-xl text-muted-foreground">The future is</p>\n<h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r">\n  <BlurText text="Here." delay={1000} />\n</h1>`
      }
    ]
  },
  meteorShower: {
    title: 'Meteor Shower',
    description: 'A beautiful animated meteor effect to use inside cards or hero sections.',
    installation: `import { MeteorShower } from 'patiya';`,
    props: [
      { name: 'count', type: 'number', default: '20', description: 'Number of meteors to render.' }
    ],
    examples: [
      {
        title: 'Basic Usage',
        preview: (
          <Box className="flex w-full items-center justify-center py-10 px-4">
            <div className="relative w-full max-w-sm h-64 bg-slate-950 overflow-hidden rounded-2xl shadow-xl flex items-center justify-center border border-white/10">
              <MeteorShower count={15} />
              <div className="relative z-10 text-center">
                <h3 className="text-white font-bold text-2xl mb-2">Space Card</h3>
                <p className="text-slate-400 text-sm">Watch the meteors fall behind me.</p>
              </div>
            </div>
          </Box>
        ),
        code: `<div className="relative w-full max-w-sm h-64 bg-slate-950 overflow-hidden rounded-2xl shadow-xl border border-white/10 flex items-center justify-center">\n  <MeteorShower count={15} />\n  <div className="relative z-10 text-center">\n    <h3 className="text-white font-bold text-2xl mb-2">Space Card</h3>\n    <p className="text-slate-400 text-sm">Watch the meteors fall behind me.</p>\n  </div>\n</div>`
      }
    ]
  },
  auroraBackground: {
    title: 'Aurora Background',
    description: 'A stunning, smoothly animating aurora borealis gradient background.',
    installation: `import { AuroraBackground } from 'patiya';`,
    props: [
      { name: 'showRadialGradient', type: 'boolean', default: 'true', description: 'Whether to show a radial mask for depth.' }
    ],
    examples: [
      {
        title: 'Basic Usage',
        preview: (
          <Box className="flex w-full items-center justify-center py-10 px-4">
            <div className="relative w-full h-[400px] overflow-hidden rounded-3xl ring-1 ring-[var(--patiya-color-border)]">
              <AuroraBackground className="h-full rounded-3xl">
                <div className="flex flex-col items-center justify-center px-4 text-center">
                  <h1 className="text-3xl md:text-5xl font-bold dark:text-white mb-4">
                    Aurora Background
                  </h1>
                  <p className="text-base md:text-lg dark:text-neutral-200">
                    Breathe life into your landing pages.
                  </p>
                </div>
              </AuroraBackground>
            </div>
          </Box>
        ),
        code: `<AuroraBackground className="h-[400px] rounded-3xl">\n  <div className="flex flex-col items-center justify-center text-center px-4">\n    <h1 className="text-3xl md:text-5xl font-bold dark:text-white mb-4">\n      Aurora Background\n    </h1>\n    <p className="text-base md:text-lg dark:text-neutral-200">\n      Breathe life into your landing pages.\n    </p>\n  </div>\n</AuroraBackground>`
      }
    ]
  },
  borderBeam: {
    title: 'Border Beam',
    description: 'An animated gradient beam that seamlessly travels along the border of its container.',
    installation: `import { BorderBeam } from 'patiya';`,
    props: [
      { name: 'size', type: 'number', default: '200', description: 'Length of the gradient beam in pixels.' },
      { name: 'duration', type: 'number', default: '15', description: 'Duration of one full cycle in seconds.' },
      { name: 'colorFrom', type: 'string', default: "'#0ea5e9'", description: 'Starting color of the gradient.' },
      { name: 'colorTo', type: 'string', default: "'#8b5cf6'", description: 'Ending color of the gradient.' }
    ],
    examples: [
      {
        title: 'Basic Usage',
        preview: (
          <Box className="flex w-full items-center justify-center py-16 px-4">
            <div className="relative flex h-[250px] w-full max-w-sm flex-col items-center justify-center overflow-hidden rounded-xl border border-[var(--patiya-color-border)] bg-[var(--patiya-color-background)] shadow-sm">
              <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                Border Beam
              </span>
              <BorderBeam size={250} duration={12} delay={9} />
            </div>
          </Box>
        ),
        code: `<div className="relative flex h-[250px] w-full max-w-sm flex-col items-center justify-center overflow-hidden rounded-xl border bg-background shadow-sm">\n  <span className="text-6xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-black to-gray-300/80 dark:from-white dark:to-slate-900/10">\n    Border Beam\n  </span>\n  <BorderBeam size={250} duration={12} delay={9} />\n</div>`
      }
    ]
  },
  spotlight: {
    title: 'Spotlight',
    description: 'A beautiful, sweeping gradient spotlight effect for hero sections and dramatic backgrounds.',
    installation: `import { Spotlight } from 'patiya';`,
    props: [
      { name: 'fill', type: 'string', default: "'white'", description: 'The color of the spotlight.' }
    ],
    examples: [
      {
        title: 'Basic Usage',
        preview: (
          <Box className="flex w-full items-center justify-center py-10 px-4">
            <div className="h-[350px] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden border border-white/10">
              <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
              <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
                <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                  Spotlight <br /> is the new trend.
                </h1>
                <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
                  Spotlight effect is a great way to draw attention to a specific part of the page. Here, we are drawing the attention towards the text section of the page.
                </p>
              </div>
            </div>
          </Box>
        ),
        code: `<div className="h-[350px] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">\n  <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />\n  <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">\n    <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">\n      Spotlight <br /> is the new trend.\n    </h1>\n    <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">\n      Spotlight effect is a great way to draw attention to a specific part of the page.\n    </p>\n  </div>\n</div>`
      }
    ]
  },
  sparkles: {
    title: 'Sparkles',
    description: 'A magical particle system that generates tiny, floating, glowing stars.',
    installation: `import { Sparkles } from 'patiya';`,
    props: [
      { name: 'particleCount', type: 'number', default: '50', description: 'Number of particles to render.' },
      { name: 'particleColor', type: 'string', default: "'#FFF'", description: 'Color of the glowing particles.' },
      { name: 'speed', type: 'string', default: "'medium'", description: 'Speed of the float animation (slow, medium, fast).' }
    ],
    examples: [
      {
        title: 'Basic Usage',
        preview: (
          <Box className="flex w-full items-center justify-center py-16 px-4">
            <div className="relative h-[250px] w-full max-w-lg bg-black flex items-center justify-center overflow-hidden rounded-xl border border-white/10">
              <h1 className="md:text-5xl text-3xl font-bold text-white relative z-20">
                Sparkles
              </h1>
              <div className="w-full h-full absolute inset-0">
                <Sparkles particleCount={150} speed="fast" />
              </div>
            </div>
          </Box>
        ),
        code: `<div className="relative h-[250px] w-full max-w-lg bg-black flex items-center justify-center overflow-hidden rounded-xl border border-white/10">\n  <h1 className="md:text-5xl text-3xl font-bold text-white relative z-20">\n    Sparkles\n  </h1>\n  <div className="w-full h-full absolute inset-0">\n    <Sparkles particleCount={150} speed="fast" />\n  </div>\n</div>`
      }
    ]
  }
};
