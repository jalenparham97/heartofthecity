import {
  IconApple,
  IconAtom,
  IconBarbell,
  IconBook,
  IconBriefcase,
  IconCalendarEvent,
  IconChefHat,
  IconFriends,
  IconHeartbeat,
  IconHeartHandshake,
  IconHomeHeart,
  IconLocationHeart,
  IconRibbonHealth,
  IconSchool,
  IconShieldHeart,
  IconSpeakerphone,
  IconTree,
  IconUserStar,
  IconUsers,
  IconUsersGroup,
} from "@tabler/icons-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { liveSite } from "@/lib/site";
import { cn } from "@/lib/utils";

const mintPanel = "bg-[color-mix(in_oklch,var(--chart-1)_7%,var(--background))]";

const programs = [
  {
    value: "day-program",
    name: "Day program",
    shortAudience: "Ages 16⁠–⁠55",
    audience: "Individuals with disabilities, ages 16⁠–⁠55",
    description:
      "A safe, supportive, and encouraging place for individuals with developmental disabilities to learn, grow, engage, and thrive.",
    tagline: "Inclusion. Opportunity. Belonging. Community.",
    Icon: IconHomeHeart,
    iconColor: "text-primary",
    panel: "bg-secondary",
    isNew: false,
    action: { label: "See a day in the program", href: "#program" },
    services: [
      {
        name: "Life skills development",
        description:
          "Everyday skills that build confidence and independence at home and out in the community.",
        Icon: IconUsers,
        color: "text-chart-4",
      },
      {
        name: "Vocational readiness",
        description:
          "Getting ready for work, from job skills to the habits that help people keep a job.",
        Icon: IconBriefcase,
        color: "text-chart-1",
      },
      {
        name: "Community engagement and outings",
        description:
          "Trips and activities that connect enrollees with neighbors and places around Saginaw.",
        Icon: IconLocationHeart,
        color: "text-chart-2",
      },
      {
        name: "Technology and STEM opportunities",
        description: "Hands-on learning in science, technology, engineering, and math.",
        Icon: IconAtom,
        color: "text-chart-3",
      },
      {
        name: "Health, wellness, and fitness activities",
        description: "Movement and healthy habits that support body and mind.",
        Icon: IconBarbell,
        color: "text-chart-5",
      },
      {
        name: "Social and recreational programming",
        description: "Games, events, and time together that grow real friendships.",
        Icon: IconUsersGroup,
        color: "text-chart-4",
      },
      {
        name: "Advocacy and resource connection",
        description: "Help speaking up for needs and finding the right services and support.",
        Icon: IconHeartHandshake,
        color: "text-chart-1",
      },
    ],
  },
  {
    value: "recipe-for-healing",
    name: "Your Recipe for Healing",
    shortAudience: "Youth and families, K⁠–⁠15",
    audience: "Youth and families, K⁠–⁠15, open to all abilities",
    description:
      "Services focused on preventing challenges and building brighter futures for youth, teenagers, and families, designed to strengthen the whole family.",
    tagline: "Stronger youth. Stronger families. Stronger communities.",
    Icon: IconChefHat,
    iconColor: "text-chart-1",
    panel: mintPanel,
    isNew: true,
    action: { label: "Ask about youth programs", href: `${liveSite}/contact-us` },
    services: [
      {
        name: "Educational support and tutoring",
        description: "Help with schoolwork that builds confidence and keeps students on track.",
        Icon: IconBook,
        color: "text-chart-1",
      },
      {
        name: "Before and after school programs",
        description: "A safe, structured place for kids before and after the school day.",
        Icon: IconSchool,
        color: "text-chart-4",
      },
      {
        name: "Life skills and social skills",
        description: "Practical skills for daily life and for getting along with others.",
        Icon: IconApple,
        color: "text-chart-2",
      },
      {
        name: "STEM learning opportunities",
        description: "Hands-on projects in science, technology, engineering, and math.",
        Icon: IconAtom,
        color: "text-chart-3",
      },
      {
        name: "Mental health and wellness education",
        description:
          "Tools for handling stress and big feelings, and knowing when to ask for help.",
        Icon: IconHeartbeat,
        color: "text-chart-5",
      },
      {
        name: "Substance use prevention and education",
        description: "Honest information that helps young people make healthy choices.",
        Icon: IconRibbonHealth,
        color: "text-chart-4",
      },
      {
        name: "Domestic violence prevention and support",
        description: "Education and support for safer, healthier relationships at home.",
        Icon: IconShieldHeart,
        color: "text-chart-1",
      },
      {
        name: "Family support groups",
        description:
          "A place for families to share what they are going through and support each other.",
        Icon: IconFriends,
        color: "text-chart-4",
      },
      {
        name: "Advocacy and mentoring",
        description: "Caring adults who guide young people and speak up for their needs.",
        Icon: IconSpeakerphone,
        color: "text-chart-2",
      },
      {
        name: "Youth leadership and community service",
        description: "Chances to lead, volunteer, and give back to the community.",
        Icon: IconUserStar,
        color: "text-chart-3",
      },
      {
        name: "Parent support programs",
        description: "Guidance and encouragement for the everyday work of parenting.",
        Icon: IconHeartHandshake,
        color: "text-chart-5",
      },
      {
        name: "Community resources and referrals",
        description: "Connections to local services when your family needs more help.",
        Icon: IconTree,
        color: "text-chart-1",
      },
      {
        name: "Workshops, events, and summer programming",
        description: "Learning and fun all year long, including summer programs.",
        Icon: IconCalendarEvent,
        color: "text-chart-4",
      },
    ],
  },
];

function NewBadge() {
  return (
    <Badge className="bg-chart-1 px-2 py-0.5 text-sm font-bold tracking-normal text-primary-foreground normal-case">
      New
    </Badge>
  );
}

export function Mission() {
  return (
    <section aria-labelledby="mission-title" className="bg-background">
      <div className="site-container py-16 lg:py-20">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-x-8">
          <h2 id="mission-title" className="section-title lg:col-span-9">
            <span className="block">Same mission. Expanded services.</span>
            <span className="block">A stronger community.</span>
          </h2>
          <p className="max-w-md text-lg leading-relaxed text-muted-foreground lg:col-span-3 xl:text-xl xl:leading-relaxed">
            Inclusive opportunities for individuals and families to learn, grow, engage, and heal.
          </p>
        </div>

        <Tabs defaultValue="day-program" className="mt-10 gap-0 lg:mt-14">
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
                  program.value === "day-program"
                    ? "data-active:bg-secondary"
                    : "data-active:bg-[color-mix(in_oklch,var(--chart-1)_7%,var(--background))]",
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
                  <program.Icon
                    className={cn("size-20 shrink-0 sm:size-28", program.iconColor)}
                    stroke={1}
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="display-type flex flex-wrap items-center gap-3 text-4xl xl:text-5xl">
                      {program.name}
                      {program.isNew && <NewBadge />}
                    </h3>
                    <p className="mt-3 text-xl font-bold text-primary">{program.audience}</p>
                    <p className="mt-2 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                      {program.description}
                    </p>
                  </div>
                </div>
                <a
                  href={program.action.href}
                  target={program.action.href.startsWith("#") ? undefined : "_blank"}
                  rel={program.action.href.startsWith("#") ? undefined : "noreferrer"}
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "home-button shrink-0 self-start lg:self-center",
                  )}
                >
                  {program.action.label}
                </a>
              </header>

              <ul className="mt-8 grid gap-x-10 gap-y-7 sm:grid-cols-2 xl:mt-10 xl:grid-cols-3 xl:gap-y-8">
                {program.services.map((service) => (
                  <li key={service.name} className="flex gap-3 sm:gap-4">
                    <service.Icon
                      className={cn("size-10 shrink-0 sm:size-12", service.color)}
                      stroke={1.5}
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

              <p className="mt-10 border-t border-foreground/10 pt-6 text-2xl font-extrabold tracking-[-0.01em] text-primary">
                {program.tagline}
              </p>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
