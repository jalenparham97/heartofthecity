import Image from "next/image";

export function HeartQuote() {
  return (
    <section
      aria-label="A guiding quote"
      className="ink-band relative isolate overflow-hidden text-primary-foreground"
    >
      <div className="relative aspect-4/3 lg:absolute lg:inset-y-0 lg:right-0 lg:left-[46%] lg:aspect-auto xl:left-[42%]">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/632de321be958318e9f257a4/5f5a5945-6ded-422d-977a-bb869483f2a4/FB_IMG_1687606277379+%281%29.jpg"
          alt="Heart of the City friends dusted in colored powder, cheering and leaning on each other on a sidewalk"
          fill
          sizes="(max-width: 1023px) 100vw, 62vw"
          className="object-cover object-[center_48%] lg:object-[center_32%]"
        />
        <div className="quote-scrim absolute inset-0" />
      </div>

      <figure className="site-container relative -mt-16 pb-20 sm:-mt-24 lg:mt-0 lg:flex lg:min-h-[44rem] lg:flex-col lg:justify-center lg:py-28">
        <blockquote className="max-w-2xl text-[2.25rem] lg:max-w-lg leading-[1.05] font-extrabold tracking-[-0.03em] text-balance sm:text-5xl xl:max-w-3xl xl:text-[4rem]">
          <p className="hero-copy sm:-indent-[0.4em]">
            &ldquo;The most beautiful things in the world&hellip; must be felt with the
            heart.&rdquo;
          </p>
        </blockquote>
        <figcaption className="mt-8 text-lg xl:text-xl">
          <span className="font-bold">Helen Keller</span>
          <span className="text-primary-foreground/75">, author and advocate</span>
        </figcaption>
      </figure>
    </section>
  );
}
