import { createFileRoute } from "@tanstack/react-router";
import { HomeSections } from "@/components/prakrithi-site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prakrithi Yoga Studio — Breathe. Move. Become." },
      {
        name: "description",
        content:
          "A clay-and-olive yoga sanctuary for breath-led movement, stillness, and community.",
      },
      { property: "og:title", content: "Prakrithi Yoga Studio — Breathe. Move. Become." },
      {
        property: "og:description",
        content:
          "A clay-and-olive yoga sanctuary for breath-led movement, stillness, and community.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomeSections,
});
