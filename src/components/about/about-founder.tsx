import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { FavouriteIcon } from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";

const credentials = [
  {
    title: "Certifications",
    heart: "text-chart-1",
    items: [
      "Certified Nursing Assistant",
      "CPR and AED",
      "Therapeutic Crisis Intervention",
      "Court Appointed Special Advocate",
    ],
  },
  {
    title: "Honors",
    heart: "text-chart-2",
    items: [
      "Heart of the City Award, City of Saginaw (2024)",
      "Newman Civic Award, Saginaw Valley State University (2023)",
      "Social Services Award, Delta College (2023)",
    ],
  },
  {
    title: "In the community",
    heart: "text-chart-3",
    isWide: true,
    items: [
      "Executive board member, Saginaw County Community Mental Health",
      "Member of the Saginaw County Chamber of Commerce",
      "Member of Kiwanis International",
      "Volunteer with the CAN Council, Child & Family Services, and the Sexual Assault Center",
    ],
  },
];

function CredentialList({ credential }: { credential: (typeof credentials)[number] }) {
  return (
    <div className={cn(credential.isWide && "sm:col-span-2")}>
      <h3 className="text-xl font-extrabold">{credential.title}</h3>
      <ul className={cn("mt-4 grid gap-3", credential.isWide && "sm:grid-cols-2 sm:gap-x-8")}>
        {credential.items.map((item) => (
          <li key={item} className="flex gap-3 text-lg leading-snug">
            <HugeiconsIcon
              icon={FavouriteIcon}
              fill="currentColor"
              aria-hidden="true"
              className={cn("mt-1 size-4 shrink-0", credential.heart)}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function AboutFounder() {
  return (
    <section
      id="cherie-long"
      aria-labelledby="founder-title"
      className="site-container scroll-mt-6 py-20 lg:py-28"
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-x-8">
        <div className="lg:col-span-5">
          <div className="relative aspect-4/3 overflow-hidden bg-secondary sm:aspect-16/10 lg:sticky lg:top-8 lg:aspect-4/5">
            <Image
              src="/images/cherie-long.jpg"
              alt="Cherie Long, President of Heart of the City Development Center"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover object-top"
            />
          </div>
        </div>

        <div className="lg:col-span-7 xl:col-span-6 xl:col-start-7">
          <h2 id="founder-title" className="section-title">
            Meet Cherie Long
          </h2>
          <p className="mt-4 text-xl font-bold text-primary">
            President, Heart of the City Development Center
          </p>
          <div className="mt-8 flex max-w-2xl flex-col gap-5 text-lg leading-relaxed">
            <p>
              Cherie is the President of Heart of the City Development Center and the founder of
              Love and Support Home Care. Her career in healthcare spans more than 23 years. She
              earned her associate degree from Delta College in 2022 and is working toward a
              bachelor&apos;s degree in social work.
            </p>
            <p>
              Cherie is raising a daughter who was born developmentally delayed, so this center
              reflects her deep-rooted passion. She&apos;s known across the community for helping
              and advocating for those who cannot advocate for themselves.
            </p>
          </div>

          <div className="mt-12 grid gap-10 border-t border-foreground/10 pt-10 sm:grid-cols-2">
            {credentials.map((credential) => (
              <CredentialList key={credential.title} credential={credential} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
