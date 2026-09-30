import { createFileRoute } from "@tanstack/react-router";
import { HomeSections } from "@/components/prakrithi-site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prakrithi Yoga Studio — Breathe. Move. Become." },
      {
        name: "description",
        content:
          "Begin your yoga and wellness journey with personalised and online sessions from Prakrithi in Coimbatore.",
      },
      { property: "og:title", content: "Prakrithi Yoga Studio — Breathe. Move. Become." },
      {
        property: "og:description",
        content:
          "Begin your yoga and wellness journey with personalised and online sessions from Prakrithi in Coimbatore.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomeSections,
});
