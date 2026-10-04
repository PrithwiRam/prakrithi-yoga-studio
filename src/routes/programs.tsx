import { createFileRoute, Link } from "@tanstack/react-router";
import { MoveRight } from "lucide-react";
import {
  Footer,
  ProgramCard,
  Reveal,
  SiteNav,
  WhatsAppFab,
  programs,
  useReveals,
} from "@/components/prakrithi-site";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — Prakrithi Yoga & Nutrition" },
      {
        name: "description",
        content:
          "Explore beginner yoga, online women's group classes, breathwork, personal yoga care, and nutrition guidance in Coimbatore.",
      },
      { property: "og:title", content: "Programs — Prakrithi Yoga & Nutrition" },
      {
        property: "og:description",
        content:
          "Explore beginner yoga, online women's group classes, breathwork, personal yoga care, and nutrition guidance in Coimbatore.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProgramsPage,
});

function ProgramsPage() {
  useReveals();
  return (
    <div>
      <SiteNav />
      <WhatsAppFab />
      <main>
        <section className="relative overflow-hidden bg-charcoal pb-14 pt-28 text-background md:pb-28 md:pt-48">
          <div className="page-container grid items-end gap-10 md:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <p className="eyebrow text-primary">Prakrithi / Programs</p>
              <h1 className="mt-6 max-w-4xl display-serif text-5xl leading-[0.9] sm:text-7xl md:text-[9rem] md:leading-[0.8]">
                Nourish body & <em className="text-primary">mind.</em>
              </h1>
            </Reveal>
            <Reveal>
              <p className="max-w-sm text-sm leading-7 text-background/60">
                A considered collection of yoga classes and personal nutrition guidance — from your
                very first breath to your deepest nourishment.
              </p>
            </Reveal>
          </div>
        </section>
        <section className="bg-cream py-16 md:py-36">
          <div className="page-container">
            <Reveal>
              <p className="eyebrow text-primary">The studio schedule</p>
              <h2 className="mt-4 display-serif text-5xl text-foreground md:text-7xl">
                Move at your own <em className="text-primary">pace.</em>
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {programs.map((program) => (
                <Reveal key={program.id} image>
                  <ProgramCard program={program} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-linen py-16 md:py-32">
          <div className="page-container flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="eyebrow text-primary">Not sure where to begin?</p>
              <h2 className="mt-4 display-serif text-5xl leading-[0.9] text-foreground md:text-7xl">
                Start with a <em className="text-primary">conversation.</em>
              </h2>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-charcoal px-6 py-3 text-xs font-medium uppercase tracking-[0.14em] text-background hover:bg-sage-dark"
            >
              Talk to us <MoveRight className="size-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
