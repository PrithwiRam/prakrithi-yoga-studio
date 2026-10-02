import { createFileRoute } from "@tanstack/react-router";
import { Clock3, Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { z } from "zod";
import {
  ContactForm,
  Footer,
  Reveal,
  SiteNav,
  WhatsAppFab,
  programs,
  useReveals,
} from "@/components/prakrithi-site";

export const Route = createFileRoute("/contact")({
  validateSearch: z.object({ program: z.string().optional() }),
  head: () => ({
    meta: [
      { title: "Contact — Prakrithi Yoga Studio" },
      {
        name: "description",
        content:
          "Begin your yoga journey with Prakrithi Yoga Studio. Send an enquiry and find your place on the mat.",
      },
      { property: "og:title", content: "Contact — Prakrithi Yoga Studio" },
      {
        property: "og:description",
        content:
          "Begin your yoga journey with Prakrithi Yoga Studio. Send an enquiry and find your place on the mat.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  useReveals();
  const { program: requestedProgram } = Route.useSearch();
  const defaultProgram = programs.find((program) => program.id === requestedProgram)?.id ?? "";
  return (
    <div>
      <SiteNav />
      <WhatsAppFab />
      <main>
        <section className="bg-cream pb-14 pt-28 md:pb-28 md:pt-48">
          <div className="page-container grid items-end gap-10 md:grid-cols-[1.2fr_0.8fr]">
            <Reveal>
              <p className="eyebrow text-primary">Prakrithi / Contact</p>
              <h1 className="mt-6 max-w-4xl display-serif text-5xl leading-[0.9] text-foreground sm:text-7xl md:text-[9rem] md:leading-[0.8]">
                We'd love to <em className="text-primary">welcome</em> you.
              </h1>
            </Reveal>
            <Reveal>
              <p className="max-w-sm text-sm leading-7 text-muted-foreground">
                Whether you're starting your journey or deepening your practice, our doors are open.
              </p>
            </Reveal>
          </div>
        </section>
        <section className="bg-linen py-14 md:py-32">
          <div className="page-container grid gap-14 md:grid-cols-[0.72fr_1.28fr] md:gap-24">
            <Reveal>
              <p className="eyebrow text-primary">Come as you are</p>
              <h2 className="mt-4 display-serif text-5xl leading-[0.9] text-foreground md:text-7xl">
                Let's make space for <em className="text-primary">you.</em>
              </h2>
              <div className="mt-12 space-y-7 text-sm text-muted-foreground">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                  <div>
                    <p className="text-foreground">Coimbatore</p>
                    <p className="mt-1">Tamil Nadu, India</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="size-4 shrink-0 text-primary" />
                  <a href="mailto:hello@prakrithiyoga.com" className="hover:text-primary">
                    hello@prakrithiyoga.com
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="size-4 shrink-0 text-primary" />
                  <a href="tel:+919629592292" className="hover:text-primary">
                    +91 96295 92292
                  </a>
                </div>
                <div className="flex items-start gap-4">
                  <Clock3 className="mt-0.5 size-4 shrink-0 text-primary" />
                  <div>
                    <p className="text-foreground">Monday – Friday</p>
                    <p className="mt-1 text-muted-foreground">5:00 AM – 10:00 PM</p>
                  </div>
                </div>
              </div>
              <div className="mt-12 flex gap-4">
                <a
                  aria-label="Prakrithi Instagram"
                  href="https://www.instagram.com/prakrithi.yogaandnutrition?stkn=MWh6Y3M1NDJhdDI4Zg=="
                  target="_blank"
                  rel="noreferrer"
                  className="flex size-10 items-center justify-center rounded-full border border-border text-foreground hover:border-primary hover:text-primary"
                >
                  <Instagram className="size-4" />
                </a>
                <a
                  aria-label="Prakrithi Facebook"
                  href="https://www.facebook.com/share/19YZHt1G93/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex size-10 items-center justify-center rounded-full border border-border text-foreground hover:border-primary hover:text-primary"
                >
                  <Facebook className="size-4" />
                </a>
                <a
                  aria-label="Prakrithi YouTube"
                  href="https://youtube.com/@prakrithi.yogaandnutrition?si=5evFyn7luyDYWWcT"
                  target="_blank"
                  rel="noreferrer"
                  className="flex size-10 items-center justify-center rounded-full border border-border text-foreground hover:border-primary hover:text-primary"
                >
                  <Youtube className="size-4" />
                </a>
              </div>
            </Reveal>
            <Reveal className="bg-cream p-6 sm:p-10">
              <p className="eyebrow text-primary">Send an enquiry</p>
              <h2 className="mt-4 display-serif text-4xl text-foreground">
                Your first step starts here.
              </h2>
              <div className="mt-10">
                <ContactForm defaultProgram={defaultProgram} />
              </div>
            </Reveal>
          </div>
        </section>
        <section className="bg-charcoal py-16 text-background md:py-32">
          <div className="page-container text-center">
            <Reveal>
              <p className="eyebrow text-primary">Prefer a quick hello?</p>
              <h2 className="mx-auto mt-5 max-w-3xl display-serif text-4xl leading-[0.95] md:text-8xl md:leading-[0.85]">
                Message us on <em className="text-primary">WhatsApp.</em>
              </h2>
              <a
                href="https://wa.me/919629592292"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex rounded-full border border-background/30 px-6 py-3 text-xs font-medium uppercase tracking-[0.14em] text-background hover:border-primary hover:text-primary"
              >
                Start a chat
              </a>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
