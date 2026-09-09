import { createFileRoute } from "@tanstack/react-router";
import { Clock3, Instagram, Mail, MapPin, Phone } from "lucide-react";
import {
  ContactForm,
  Footer,
  Reveal,
  SiteNav,
  WhatsAppFab,
  useReveals,
} from "@/components/prakrithi-site";

export const Route = createFileRoute("/contact")({
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
  return (
    <div>
      <SiteNav />
      <WhatsAppFab />
      <main>
        <section className="bg-cream pb-20 pt-40 md:pb-28 md:pt-48">
          <div className="page-container grid items-end gap-10 md:grid-cols-[1.2fr_0.8fr]">
            <Reveal>
              <p className="eyebrow text-primary">Prakrithi / Contact</p>
              <h1 className="mt-6 max-w-4xl display-serif text-7xl leading-[0.8] text-foreground sm:text-8xl md:text-[9rem]">
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
        <section className="bg-linen py-20 md:py-32">
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
                    <p className="text-foreground">123 Wellness Avenue</p>
                    <p className="mt-1">Your City, Kerala 000000</p>
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
                  <a href="tel:+91XXXXXXXXXX" className="hover:text-primary">
                    +91 XXXXX XXXXX
                  </a>
                </div>
                <div className="flex items-start gap-4">
                  <Clock3 className="mt-0.5 size-4 shrink-0 text-primary" />
                  <div>
                    <p className="text-foreground">
                      Mon – Fri{" "}
                      <span className="ml-4 text-muted-foreground">6:00 AM – 9:00 PM</span>
                    </p>
                    <p className="mt-2 text-foreground">
                      Sat – Sun{" "}
                      <span className="ml-3 text-muted-foreground">7:00 AM – 6:00 PM</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-12 flex gap-4">
                <a
                  aria-label="Prakrithi Instagram"
                  href="https://instagram.com/prakrithiyoga"
                  target="_blank"
                  rel="noreferrer"
                  className="flex size-10 items-center justify-center rounded-full border border-border text-foreground hover:border-primary hover:text-primary"
                >
                  <Instagram className="size-4" />
                </a>
              </div>
            </Reveal>
            <Reveal className="bg-cream p-6 sm:p-10">
              <p className="eyebrow text-primary">Send an enquiry</p>
              <h2 className="mt-4 display-serif text-4xl text-foreground">
                Your first step starts here.
              </h2>
              <div className="mt-10">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </section>
        <section className="bg-charcoal py-24 text-background md:py-32">
          <div className="page-container text-center">
            <Reveal>
              <p className="eyebrow text-primary">Prefer a quick hello?</p>
              <h2 className="mx-auto mt-5 max-w-3xl display-serif text-6xl leading-[0.85] md:text-8xl">
                Message us on <em className="text-primary">WhatsApp.</em>
              </h2>
              <a
                href="https://wa.me/91XXXXXXXXXX"
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
