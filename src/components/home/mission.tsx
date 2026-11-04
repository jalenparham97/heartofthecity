import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Apple01Icon,
  Atom02Icon,
  Book02Icon,
  Briefcase01Icon,
  Calendar03Icon,
  Dumbbell01Icon,
  HeartHandshakeIcon,
  HeartPulseIcon,
  Home09Icon,
  LocationFavourite01Icon,
  Megaphone01Icon,
  Mortarboard01Icon,
  RibbonIcon,
  ShieldUserIcon,
  Tree01Icon,
  UserGroup02Icon,
  UserGroupIcon,
  UserMultiple02Icon,
  UserMultipleIcon,
  UserStar01Icon,
} from "@hugeicons/core-free-icons";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const programs = [
  {
    value: "adult-programming",
    name: "Adult Programming",
    shortAudience: "Ages 16⁠–⁠55",
    audience: "Individuals with disabilities, ages 16⁠–⁠55",
    description:
      "A safe, supportive, and encouraging place for individuals with developmental disabilities to learn, grow, engage, and thrive.",
    tagline: "Inclusion. Opportunity. Belonging. Community.",
    icon: Home09Icon,
    accent: "text-chart-2",
    panel: "bg-[color-mix(in_oklch,var(--chart-2)_7%,var(--background))]",
    activeTab:
      "data-active:bg-[color-mix(in_oklch,var(--chart-2)_7%,var(--background))] data-active:shadow-[inset_0_4px_0_var(--chart-2)]",
    isNew: false,
    action: {
      label: "Learn about adult programming",
      href: "/about",
      style: "bg-chart-2 hover:bg-chart-2/90",
    },
    services: [
      {
        name: "Life skills development",
        description:
          "Everyday skills that build confidence and independence at home and out in the community.",
        icon: UserMultipleIcon,
      },
      {
        name: "Vocational readiness",
        description:
          "Getting ready for work, from job skills to the habits that help people keep a job.",
        icon: Briefcase01Icon,
      },
      {
        name: "Community engagement and outings",
        description:
          "Trips and activities that connect enrollees with neighbors and places around Saginaw.",
        icon: LocationFavourite01Icon,
      },
      {
        name: "Technology and STEAM opportunities",
        description: "Hands-on learning in science, technology, engineering, art, and math.",
        icon: Atom02Icon,
      },
      {
        name: "Health, wellness, and fitness activities",
        description: "Movement and healthy habits that support body and mind.",
        icon: Dumbbell01Icon,
      },
      {
        name: "Social and recreational programming",
        description: "Games, events, and time together that grow real friendships.",
        icon: UserGroupIcon,
      },
      {
        name: "Advocacy and resource connection",
        description: "Help speaking up for needs and finding the right services and support.",
        icon: HeartHandshakeIcon,
      },
    ],
  },
  {
    value: "youth-and-families",
    name: "Youth (K⁠–⁠15) and Families",
    shortAudience: "Open to all abilities",
    audience: "Youth and families, K⁠–⁠15, open to all abilities",
    description:
      "Services focused on preventing challenges and building brighter futures for youth, teenagers, and families, designed to strengthen the whole family.",
    tagline: "Stronger youth. Stronger families. Stronger communities.",
    icon: UserMultiple02Icon,
    accent: "text-primary",
    panel: "bg-secondary",
    activeTab: "data-active:bg-secondary data-active:shadow-[inset_0_4px_0_var(--primary)]",
    isNew: true,
    action: { label: "Ask about youth programs", href: "/contact", style: "" },
    services: [
      {
        name: "Educational support and tutoring",
        description: "Help with schoolwork that builds confidence and keeps students on track.",
        icon: Book02Icon,
      },
      {
        name: "Before and after school programs",
        description: "A safe, structured place for kids before and after the school day.",
        icon: Mortarboard01Icon,
      },
      {
        name: "Life skills and social skills",
        description: "Practical skills for daily life and for getting along with others.",
        icon: Apple01Icon,
      },
      {
        name: "STEAM learning opportunities",
        description: "Hands-on projects in science, technology, engineering, art, and math.",
        icon: Atom02Icon,
      },
      {
        name: "Mental health and wellness education",
        description:
          "Tools for handling stress and big feelings, and knowing when to ask for help.",
        icon: HeartPulseIcon,
      },
      {
        name: "Substance use prevention and education",
        description:
          "Honest information provided to assist young people in making healthy choices.",
        icon: RibbonIcon,
      },
      {
        name: "Domestic violence prevention and support",
        description: "Education and support for safer, healthier relationships.",
        icon: ShieldUserIcon,
      },
      {
        name: "Family support groups",
        description: "A place for families to share life experiences and support each other.",
        icon: UserGroup02Icon,
      },
      {
        name: "Advocacy and mentoring",
        description: "Caring adults who guide young people and speak up for their needs.",
        icon: Megaphone01Icon,
      },
      {
        name: "Youth leadership and community service",
        description: "Develop leadership skills, volunteer, and give back to the community.",
        icon: UserStar01Icon,
      },
      {
        name: "Parent/caregiver support programs",
        description: "Guidance and encouragement for the everyday work of parenting.",
        icon: HeartHandshakeIcon,
      },
      {
        name: "Community resources and referrals",
        description: "Connections to local services when your family needs help.",
        icon: Tree01Icon,
      },
      {
        name: "Workshops, events, and summer programming",
        description: "Learning and fun all year long, including summer programs.",
        icon: Calendar03Icon,
      },
    ],
  },
];

function NewBadge() {
  return (
    <Badge className="bg-primary px-2 py-0.5 text-sm font-bold tracking-normal text-primary-foreground normal-case">
      New
    </Badge>
  );
}

export function Mission() {
  return (
    <section id="services" aria-labelledby="mission-title" className="scroll-mt-6 bg-background">
      <div className="site-container py-16 lg:py-20">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-x-8">
          <h2 id="mission-title" className="section-title lg:col-span-10">
            Inclusive opportunities for individuals and families to learn, grow, engage, and heal.
          </h2>
        </div>

        <Tabs defaultValue="adult-programming" className="mt-10 gap-0 lg:mt-14">
          <TabsList
            aria-label="Programs"
            className="h-auto w-full items-stretch gap-0 bg-transparent p-0 group-data-horizontal/tabs:h-auto sm:w-fit"
          >
            {programs.map((program) => (
              <TabsTrigger
                key={program.value}
                value={program.value}
                className={cn(
                  "h-auto flex-1 flex-col items-start justify-start gap-1 border-0 bg-background px-5 py-4 text-left whitespace-normal normal-case transition-colors not-data-active:hover:bg-black/[0.025] sm:flex-none sm:px-8 sm:py-5",
                  "text-lg font-extrabold tracking-normal text-foreground/75 sm:text-xl hover:text-foreground data-active:text-foreground",
                  program.activeTab,
                )}
              >
                <span>{program.name}</span>
                <span className="sr-only">, </span>
                <span className="text-base font-medium sm:text-lg">{program.shortAudience}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {programs.map((program) => (
            <TabsContent
              key={program.value}
              value={program.value}
              className={cn("px-5 py-7 text-base sm:p-10 xl:p-12", program.panel)}
            >
              <header className="flex flex-col gap-6 border-b border-foreground/10 pb-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
                  <HugeiconsIcon
                    icon={program.icon}
                    className={cn("size-20 shrink-0 sm:size-28", program.accent)}
                    strokeWidth={1}
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="display-type flex flex-wrap items-center gap-3 text-4xl xl:text-5xl">
                      {program.name}
                      {program.isNew && <NewBadge />}
                    </h3>
                    <p className={cn("mt-3 text-xl font-bold", program.accent)}>
                      {program.audience}
                    </p>
                    <p className="mt-2 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                      {program.description}
                    </p>
                  </div>
                </div>
                <Link
                  href={program.action.href}
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "home-button shrink-0 self-start lg:self-center",
                    program.action.style,
                  )}
                >
                  {program.action.label}
                </Link>
              </header>

              <ul className="mt-8 grid gap-x-10 gap-y-7 sm:grid-cols-2 xl:mt-10 xl:grid-cols-3 xl:gap-y-8">
                {program.services.map((service) => (
                  <li key={service.name} className="flex gap-3 sm:gap-4">
                    <HugeiconsIcon
                      icon={service.icon}
                      className={cn("size-10 shrink-0 sm:size-12", program.accent)}
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                    <div>
                      <h4 className="text-xl leading-snug font-bold">{service.name}</h4>
                      <p className="mt-1 text-lg leading-snug text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <p
                className={cn(
                  "mt-10 border-t border-foreground/10 pt-6 text-2xl font-extrabold tracking-[-0.01em]",
                  program.accent,
                )}
              >
                {program.tagline}
              </p>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
