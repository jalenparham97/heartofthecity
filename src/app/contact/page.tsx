import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactWays } from "@/components/contact/contact-ways";

export const metadata: Metadata = {
  title: "Contact | Heart of the City Development Center",
  description:
    "Call, email, visit, or send a message to Heart of the City Development Center in Saginaw, Michigan.",
};

export default function ContactPage() {
  return (
    <main id="main-content">
      <section
        aria-labelledby="contact-title"
        className="ink-band relative isolate overflow-hidden text-primary-foreground"
      >
        <div className="relative aspect-4/5 sm:aspect-16/9 lg:absolute lg:inset-y-0 lg:right-0 lg:left-[52%] lg:aspect-auto xl:left-[46%]">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/632de321be958318e9f257a4/b5003cce-9e79-4d66-8b0a-52eb047b723b/IMG_20220917_202524035_HDR.jpg"
            alt="Four Heart of the City team members in matching shirts, smiling together at the center"
            fill
            preload
            sizes="(min-width: 1024px) 54vw, 100vw"
            className="object-cover object-top lg:object-[center_12%]"
          />
          <div className="hero-scrim absolute inset-0" />
        </div>
        <div className="site-container relative -mt-16 pb-16 sm:-mt-24 lg:mt-0 lg:pt-44 lg:pb-28">
          <h1
            id="contact-title"
            className="display-type text-[4.5rem] sm:text-[7rem] xl:text-[9rem]"
          >
            Contact us
          </h1>
          <p className="mt-6 max-w-xl text-xl leading-snug text-primary-foreground/85 xl:text-2xl xl:leading-snug">
            Questions about the day program, Your Recipe for Healing, volunteering, or sponsoring?
            Send a note or give us a call.
          </p>
        </div>
      </section>

      <div className="site-container pt-12 pb-20 sm:pt-16 lg:pb-28">
        <div className="dark -mx-5 grid bg-brand text-foreground sm:mx-0 lg:grid-cols-12">
          <div className="px-5 py-8 sm:p-8 lg:col-span-5 lg:border-r lg:border-foreground/20 xl:col-span-4 xl:p-10">
            <ContactWays />
          </div>

          <section
            aria-labelledby="message-title"
            className="border-t border-foreground/20 px-5 py-8 sm:p-8 lg:col-span-7 lg:border-t-0 xl:col-span-8 xl:p-10"
          >
            <h2
              id="message-title"
              className="text-3xl leading-none font-extrabold tracking-[-0.03em] sm:text-4xl"
            >
              What&apos;s on your heart?
            </h2>
            <p className="mt-2 text-lg leading-snug text-foreground/80">
              Pick a topic, then tell us a little more. We reply as soon as we can.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
