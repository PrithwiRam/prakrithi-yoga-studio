import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  ChevronDown,
  ChevronUp,
  Facebook,
  Instagram,
  Menu,
  MessageCircle,
  Plus,
  X,
  Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import heroImage from "@/assets/yoga-studio-hero.jpg";
import interiorImage from "@/assets/yoga-studio-interior.jpg";
import communityImage from "@/assets/yoga-community.jpg";
import detailImage from "@/assets/yoga-detail.jpg";
import journalMorningImage from "@/assets/journal-morning.jpg";
import journalBreathImage from "@/assets/journal-breath.jpg";
import journalEveningImage from "@/assets/journal-evening.jpg";
import brandLogo from "@/assets/prakrithi-circle-logo.png";
import beginnerYogaImage from "@/assets/online-trial-class.jpeg.asset.json";
import womensGroupImage from "@/assets/womens-group-yoga.jpeg.asset.json";
import breathworkImage from "@/assets/prakrithi-transformation.jpeg.asset.json";
import personalYogaImage from "@/assets/personal-yoga-care.jpeg.asset.json";

export const programs = [
  {
    id: "beginners-yoga",
    index: "01",
    category: "YOGA",
    title: "Beginner's Yoga",
    shortDescription: "Build confidence, mobility, and foundational strength.",
    longDescription:
      "A welcoming space for those new to yoga. Learn the fundamentals of alignment, breathing, and mindful movement at your own pace.",
    duration: "45 min",
    level: "Beginner",
    schedule: "Mon, Wed, Fri — 7:00 AM",
    image: beginnerYogaImage.url,
  },
  {
    id: "womens-morning-group",
    index: "02",
    category: "ONLINE YOGA",
    title: "Morning Group Class for Women",
    shortDescription: "A supportive online morning practice designed especially for women.",
    longDescription:
      "Build strength, mobility, and calm in a welcoming women-only group class from the comfort of home.",
    duration: "60 min",
    level: "All Levels",
    schedule: "Daily — 6:00 AM",
    image: womensGroupImage.url,
  },
  {
    id: "breathwork-basics",
    index: "03",
    category: "BREATHING",
    title: "Basic Breathwork",
    shortDescription: "Unlock the power of your breath for calm and focus.",
    longDescription:
      "Pranayama and breathwork techniques to manage stress, improve focus, and deepen your yoga practice. No prior experience needed.",
    duration: "30 min",
    level: "Beginner",
    schedule: "Tue, Thu — 8:00 AM",
    image: breathworkImage.url,
  },
  {
    id: "personal-care-yoga",
    index: "04",
    category: "PERSONAL YOGA",
    title: "One-on-One Personal Care Yoga",
    shortDescription: "Personal guidance shaped around your body, goals, and wellbeing.",
    longDescription:
      "A personalised yoga session with focused support, available both online and offline to suit your needs and schedule.",
    duration: "Online & offline",
    level: "Personalised",
    schedule: "By appointment",
    image: personalYogaImage.url,
  },
];

const testimonials = [
  {
    quote:
      "More than just a place to work out. It's a sanctuary where you learn to be present in your own life again.",
    author: "Priya R.",
    program: "Morning Group Class for Women",
  },
  {
    quote:
      "Prakrithi changed my relationship with stress. The breathwork sessions alone are worth it.",
    author: "Arun M.",
    program: "Basic Breathwork",
  },
  {
    quote:
      "I came in a complete beginner and left every class feeling like I'd known yoga my whole life.",
    author: "Lakshmi V.",
    program: "Beginner's Yoga",
  },
];

export const journalPosts = [
  {
    category: "MINDFULNESS",
    readTime: "5 min read",
    title: "5 Minutes to Start Your Morning",
    excerpt: "A short, powerful routine you can do before your feet hit the floor.",
    image: journalMorningImage,
    content:
      "Begin before the notifications do. Sit comfortably, soften your shoulders, and follow five unhurried breaths. A small morning pause can set a calmer rhythm for everything that follows.",
  },
  {
    category: "PRACTICE",
    readTime: "5 min read",
    title: "How Breath Shapes Your Movement",
    excerpt: "The often-overlooked connection between pranayama and physical yoga.",
    image: journalBreathImage,
    content:
      "Breath gives movement its pace. Inhale to create space; exhale to settle more deeply. When movement follows breath instead of racing ahead, practice becomes steadier and more intuitive.",
  },
  {
    category: "LIFESTYLE",
    readTime: "4 min read",
    title: "Creating a Mindful Evening Routine",
    excerpt: "How to wind down with intention and wake up restored.",
    image: journalEveningImage,
    content:
      "Dim the lights, put screens aside, and choose one gentle stretch or breathing practice. Repeating a simple evening ritual tells the body that the day is complete and rest can begin.",
  },
];

export const faqItems = [
  [
    "Do I need prior yoga experience?",
    "Absolutely not! We welcome complete beginners. Our Beginner's Yoga class is specifically designed for those starting from scratch.",
  ],
  [
    "Do you offer trial classes?",
    "Yes! We offer a free first class for new students. Simply fill in the contact form or message us on WhatsApp to book your spot.",
  ],
  [
    "How do I join?",
    "You can join by filling out the enquiry form, calling us, or messaging us on WhatsApp. We'll get back to you within 24 hours.",
  ],
  [
    "What should I bring to class?",
    "Wear comfortable, stretchy clothing. We provide yoga mats, but you're welcome to bring your own. Bring a water bottle and an open mind!",
  ],
  [
    "Do you offer online classes?",
    "Yes, we offer both live-streamed and on-demand recorded classes. Ask us about our online membership packages.",
  ],
] as const;

export function Reveal({
  children,
  className = "",
  image = false,
}: {
  children: ReactNode;
  className?: string;
  image?: boolean;
}) {
  return <div className={`${image ? "image-reveal" : "reveal"} ${className}`}>{children}</div>;
}

export function useReveals() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) =>
            entry.isIntersecting &&
            entry.target.classList.add(
              entry.target.classList.contains("image-reveal")
                ? "image-reveal-visible"
                : "reveal-visible",
            ),
        ),
      { threshold: 0.12 },
    );
    const elements = document.querySelectorAll(".reveal, .image-reveal");
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKeyDown = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);
  const close = () => setOpen(false);
  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled || open ? "border-b border-border/70 bg-background/95 shadow-sm backdrop-blur-md" : "bg-transparent"}`}
      >
        <div className="page-container grid h-20 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 md:flex md:h-[88px] md:justify-between md:gap-6">
          <Link
            to="/"
            className="group flex min-w-0 items-center gap-3"
            onClick={close}
            aria-label="Prakrithi home"
          >
            <img
              src={brandLogo}
              alt="Prakrithi Yoga and Nutrition — Wellness Begins Within"
              width={1024}
              height={1024}
              className="size-14 shrink-0 rounded-full border border-primary/30 object-cover shadow-sm md:size-[72px]"
            />
            <span className="min-w-0 md:hidden">
              <span className="block truncate text-sm font-semibold uppercase text-foreground">
                Prakrithi
              </span>
              <span className="block truncate text-[0.58rem] uppercase text-muted-foreground">
                Wellness begins within
              </span>
            </span>
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            <Link
              to="/"
              className="eyebrow text-foreground/70 transition-colors hover:text-primary"
            >
              Home
            </Link>
            <Link
              to="/programs"
              className="eyebrow text-foreground/70 transition-colors hover:text-primary"
            >
              Programs
            </Link>
            <Link
              to="/contact"
              className="eyebrow text-foreground/70 transition-colors hover:text-primary"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <Button
              asChild
              className="hidden h-10 rounded-full bg-charcoal px-5 text-[0.68rem] font-medium uppercase tracking-[0.14em] text-background hover:bg-sage-dark md:inline-flex"
            >
              <Link to="/contact">
                Book a Session <ArrowRight className="size-3.5" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="min-h-11 min-w-11 rounded-full border border-border bg-background/80 md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen(!open)}
            >
              {open ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </header>
      <div
        aria-hidden={!open}
        className={`fixed inset-0 z-40 bg-charcoal/45 transition-opacity duration-300 md:hidden ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={close}
      />
      <aside
        aria-label="Mobile navigation"
        className={`fixed inset-x-3 top-24 z-40 overflow-hidden rounded-lg border border-border bg-cream shadow-xl transition-all duration-300 md:hidden ${open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-3 opacity-0"}`}
      >
        <div className="p-5">
          <p className="eyebrow text-primary">Explore Prakrithi</p>
          <nav className="mt-4 divide-y divide-border border-y border-border">
            {[
              { to: "/" as const, label: "Home" },
              { to: "/programs" as const, label: "Programs" },
              { to: "/contact" as const, label: "Contact" },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={close}
                className="flex min-h-14 items-center justify-between text-xl font-medium text-foreground"
              >
                {item.label}
                <ArrowRight className="size-4 text-primary" />
              </Link>
            ))}
          </nav>
          <Button
            asChild
            className="mt-5 h-12 w-full rounded-full bg-charcoal text-background hover:bg-sage-dark"
          >
            <Link to="/contact" onClick={close}>
              Book a Session <ArrowRight />
            </Link>
          </Button>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <Button asChild variant="outline" className="h-11 rounded-full">
              <a href="https://wa.me/919629592292" target="_blank" rel="noreferrer">
                <MessageCircle /> WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" className="h-11 rounded-full">
              <a href="tel:+919629592292">Call us</a>
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
}

export function Footer() {
  return (
    <footer className="bg-charcoal-2 py-16 text-background md:py-20">
      <div className="page-container">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr] md:gap-8">
          <div>
            <img
              src={brandLogo}
              alt="Prakrithi Yoga and Nutrition — Wellness Begins Within"
              width={1024}
              height={1024}
              loading="lazy"
              className="size-32 rounded-full border border-background/20 object-cover shadow-md"
            />
            <p className="mt-4 max-w-xs text-sm uppercase text-background/75">
              Wellness Begins Within.
            </p>
          </div>
          <div>
            <p className="eyebrow text-primary">Navigation</p>
            <div className="mt-5 flex flex-col items-start gap-3 text-sm text-background/60">
              <Link to="/" className="hover:text-primary">
                Home
              </Link>
              <Link to="/programs" className="hover:text-primary">
                Programs
              </Link>
              <Link to="/contact" className="hover:text-primary">
                Contact
              </Link>
            </div>
          </div>
          <div>
            <p className="eyebrow text-primary">Social</p>
            <div className="mt-5 flex flex-col items-start gap-3 text-sm text-background/60">
              <a
                href="https://www.instagram.com/prakrithi.yogaandnutrition?stkn=MWh6Y3M1NDJhdDI4Zg=="
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-primary"
              >
                <Instagram className="size-4" /> Instagram
              </a>
              <a
                href="https://www.facebook.com/share/19YZHt1G93/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-primary"
              >
                <Facebook className="size-4" /> Facebook
              </a>
              <a
                href="https://youtube.com/@prakrithi.yogaandnutrition?si=5evFyn7luyDYWWcT"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-primary"
              >
                <Youtube className="size-4" /> YouTube
              </a>
              <a
                href="https://wa.me/919629592292"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-4 border-t border-background/15 pt-6 text-[0.68rem] uppercase tracking-[0.12em] text-background/40 md:flex-row md:items-center md:justify-between">
          <span>© 2026 Prakrithi Yoga Studio</span>
          <span>Made for presence</span>
        </div>
      </div>
    </footer>
  );
}

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/919629592292?text=Hello%20Prakrithi%2C%20I%27d%20like%20to%20book%20a%20yoga%20session."
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Prakrithi on WhatsApp"
      className="fixed bottom-4 right-4 z-40 flex min-h-12 min-w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105 md:bottom-5 md:right-5"
    >
      <MessageCircle className="size-5" />
    </a>
  );
}

export function BreatheWidget() {
  const [mode, setMode] = useState<"calm" | "focus">("calm");
  const [phase, setPhase] = useState(0);
  const phases = mode === "calm" ? ["INHALE", "HOLD", "EXHALE"] : ["INHALE", "HOLD", "EXHALE"];
  const durations = mode === "calm" ? [4000, 2000, 6000] : [3000, 2000, 3000];
  const phaseDuration = durations[phase] ?? durations[0];
  useEffect(() => {
    const timer = window.setTimeout(() => setPhase((current) => (current + 1) % 3), phaseDuration);
    return () => window.clearTimeout(timer);
  }, [phase, phaseDuration]);
  return (
    <div className="relative flex flex-col items-center">
      <div
        className={`relative flex size-52 items-center justify-center rounded-full border border-primary/40 bg-primary/10 transition-transform duration-[4000ms] ease-out sm:size-64 ${phase === 0 ? "scale-110" : phase === 2 ? "scale-90" : "scale-100"}`}
      >
        <div className="absolute inset-5 rounded-full border border-primary/20" />
        <div className="text-center">
          <span className="eyebrow text-primary">{phases[phase]}</span>
          <p className="mt-2 display-serif text-3xl text-foreground">
            {mode === "calm" ? "softly" : "deeply"}
          </p>
        </div>
      </div>
      <div className="mt-8 flex rounded-full border border-border bg-background/60 p-1">
        <Button
          variant="ghost"
          onClick={() => {
            setMode("calm");
            setPhase(0);
          }}
          className={`h-9 rounded-full px-5 text-[0.68rem] uppercase tracking-[0.14em] ${mode === "calm" ? "bg-charcoal text-background hover:bg-charcoal" : "text-muted-foreground"}`}
        >
          Calm
        </Button>
        <Button
          variant="ghost"
          onClick={() => {
            setMode("focus");
            setPhase(0);
          }}
          className={`h-9 rounded-full px-5 text-[0.68rem] uppercase tracking-[0.14em] ${mode === "focus" ? "bg-charcoal text-background hover:bg-charcoal" : "text-muted-foreground"}`}
        >
          Focus
        </Button>
      </div>
      <p className="mt-4 text-xs text-muted-foreground">
        {mode === "calm" ? "A slower rhythm for settling in" : "A steady rhythm for clear focus"}
      </p>
    </div>
  );
}

export function ProgramList() {
  return (
    <div className="mt-12 border-t border-border">
      {programs.slice(0, 4).map((program) => (
        <article
          key={program.id}
          className="grid gap-5 border-b border-border py-8 md:grid-cols-[80px_160px_1fr_auto] md:items-center md:gap-8"
        >
          <span className="display-serif text-4xl text-primary/60 md:text-5xl">
            {program.index}
          </span>
          <div className="overflow-hidden rounded-md border border-border bg-background">
            <img
              src={program.image}
              alt={`${program.title} class poster`}
              width={928}
              height={1152}
              loading="lazy"
              className="aspect-[928/1152] w-full object-contain md:h-44"
            />
          </div>
          <div>
            <p className="eyebrow text-primary">{program.category}</p>
            <h3 className="display-serif mt-2 text-3xl text-foreground">{program.title}</h3>
            <p className="mt-1 max-w-lg text-sm leading-6 text-muted-foreground">
              {program.shortDescription}
            </p>
          </div>
          <Button asChild variant="outline" className="h-11 w-full rounded-full md:w-auto">
            <Link to="/programs" hash={program.id}>
              View details <ArrowRight />
            </Link>
          </Button>
        </article>
      ))}
    </div>
  );
}

export function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(
      () => setCurrent((value) => (value + 1) % testimonials.length),
      5000,
    );
    return () => window.clearInterval(timer);
  }, []);
  const item = testimonials[current];
  if (!item) return null;
  return (
    <div className="text-center">
      <div key={current} className="animate-fade-in">
        <div className="mb-7 flex justify-center gap-1 text-primary">
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star}>✦</span>
          ))}
        </div>
        <blockquote className="mx-auto max-w-3xl display-serif text-4xl leading-[1.05] text-background sm:text-5xl md:text-6xl">
          “{item.quote}”
        </blockquote>
        <p className="mt-8 text-sm text-background/60">
          {item.author} <span className="mx-2 text-primary">/</span> {item.program}
        </p>
      </div>
      <div className="mt-10 flex justify-center gap-2">
        {testimonials.map((_, index) => (
          <Button
            key={index}
            variant="ghost"
            size="icon"
            aria-label={`Show testimonial ${index + 1}`}
            onClick={() => setCurrent(index)}
            className={`size-6 rounded-full ${current === index ? "bg-primary" : "bg-background/20"}`}
          />
        ))}
      </div>
    </div>
  );
}

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mt-10 border-t border-border">
      {faqItems.map(([question, answer], index) => (
        <div key={question} className="border-b border-border">
          <Button
            variant="ghost"
            onClick={() => setOpen(open === index ? null : index)}
            className="flex h-auto w-full justify-between rounded-none px-0 py-6 text-left text-base font-normal text-foreground hover:bg-transparent hover:text-primary"
          >
            <span>{question}</span>
            {open === index ? (
              <ChevronUp className="size-4 text-primary" />
            ) : (
              <ChevronDown className="size-4 text-muted-foreground" />
            )}
          </Button>
          <div
            className={`grid transition-[grid-template-rows] duration-300 ${open === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
          >
            <div className="overflow-hidden">
              <p className="max-w-2xl pb-6 pr-10 text-sm leading-6 text-muted-foreground">
                {answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function ContactForm({ defaultProgram = "" }: { defaultProgram?: string }) {
  const [submitted, setSubmitted] = useState(false);
  return submitted ? (
    <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
      <div className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
        <Check className="size-5" />
      </div>
      <h2 className="mt-6 display-serif text-4xl">Thank you.</h2>
      <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
        We'll be in touch within 24 hours. We can't wait to welcome you to the studio.
      </p>
    </div>
  ) : (
    <form
      className="space-y-7"
      onSubmit={(event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const name = String(data.get("name") ?? "")
          .trim()
          .slice(0, 100);
        const phone = String(data.get("phone") ?? "")
          .trim()
          .slice(0, 30);
        const programId = String(data.get("program") ?? "");
        const message = String(data.get("message") ?? "")
          .trim()
          .slice(0, 600);
        const program = programs.find((item) => item.id === programId);
        const enquiry = [
          `Hello Prakrithi, I'm ${name}.`,
          program
            ? `I'm interested in ${program.title}.`
            : "I'd like to enquire about a yoga session.",
          phone ? `My phone number is ${phone}.` : "",
          message,
        ]
          .filter(Boolean)
          .join("\n");
        window.open(
          `https://wa.me/919629592292?text=${encodeURIComponent(enquiry)}`,
          "_blank",
          "noopener,noreferrer",
        );
        setSubmitted(true);
      }}
    >
      <div className="grid gap-7 sm:grid-cols-2">
        <label className="eyebrow text-muted-foreground">
          Your Name
          <Input
            required
            name="name"
            maxLength={100}
            placeholder="Your name"
            className="mt-3 h-10 rounded-none border-0 border-b border-border bg-transparent px-0 text-base shadow-none focus-visible:ring-0"
          />
        </label>
        <label className="eyebrow text-muted-foreground">
          Email Address
          <Input
            required
            type="email"
            name="email"
            maxLength={255}
            placeholder="you@email.com"
            className="mt-3 h-10 rounded-none border-0 border-b border-border bg-transparent px-0 text-base shadow-none focus-visible:ring-0"
          />
        </label>
      </div>
      <div className="grid gap-7 sm:grid-cols-2">
        <label className="eyebrow text-muted-foreground">
          Phone Number
          <Input
            type="tel"
            name="phone"
            maxLength={30}
            placeholder="Your number"
            className="mt-3 h-10 rounded-none border-0 border-b border-border bg-transparent px-0 text-base shadow-none focus-visible:ring-0"
          />
        </label>
        <label className="eyebrow text-muted-foreground">
          Interested Program
          <select
            name="program"
            defaultValue={defaultProgram}
            className="mt-3 h-10 w-full border-0 border-b border-border bg-transparent text-sm text-foreground outline-none"
          >
            <option value="" disabled>
              Select a program
            </option>
            {programs.slice(0, 4).map((program) => (
              <option key={program.id} value={program.id}>
                {program.title}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="eyebrow block text-muted-foreground">
        Your Message
        <Textarea
          name="message"
          maxLength={600}
          rows={3}
          placeholder="Tell us a little about what you're looking for"
          className="mt-3 resize-none rounded-none border-0 border-b border-border bg-transparent px-0 text-base shadow-none focus-visible:ring-0"
        />
      </label>
      <Button
        type="submit"
        className="h-12 w-full rounded-full bg-charcoal text-background hover:bg-sage-dark"
      >
        Continue on WhatsApp <MessageCircle className="size-4" />
      </Button>
    </form>
  );
}

export function ProgramCard({ program }: { program: (typeof programs)[number] }) {
  const message = encodeURIComponent(
    `Hello Prakrithi, I'd like to enquire about ${program.title}.`,
  );
  return (
    <article
      id={program.id}
      className="overflow-hidden rounded-md border border-border bg-background"
    >
      <div className="bg-linen p-3">
        <img
          src={program.image}
          alt={`${program.title} class poster`}
          width={928}
          height={1152}
          loading="lazy"
          className="aspect-[928/1152] w-full object-contain"
        />
      </div>
      <div className="p-5">
        <p className="eyebrow text-primary">{program.category}</p>
        <h3 className="mt-2 text-2xl font-semibold text-foreground">{program.title}</h3>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">{program.shortDescription}</p>
        <p className="mt-4 text-xs text-muted-foreground">
          {program.level} <span className="mx-1 text-primary">•</span> {program.duration}
        </p>
        <div className="mt-5 grid gap-2">
          <Button
            asChild
            className="h-11 rounded-full bg-charcoal text-background hover:bg-sage-dark"
          >
            <a href={`https://wa.me/919629592292?text=${message}`} target="_blank" rel="noreferrer">
              <MessageCircle /> Enquire on WhatsApp
            </a>
          </Button>
          <Button asChild variant="outline" className="h-11 rounded-full">
            <Link to="/contact" search={{ program: program.id }}>
              Send an enquiry
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}

function JournalCard({ post }: { post: (typeof journalPosts)[number] }) {
  const [open, setOpen] = useState(false);
  return (
    <article className="group overflow-hidden rounded-md border border-border bg-background">
      <img
        src={post.image}
        alt={post.title}
        width={1200}
        height={800}
        loading="lazy"
        className="aspect-[3/2] w-full object-cover"
      />
      <div className="p-5">
        <div className="flex items-center justify-between gap-4">
          <span className="eyebrow text-primary">{post.category}</span>
          <span className="shrink-0 text-xs text-muted-foreground">{post.readTime}</span>
        </div>
        <h3 className="mt-3 text-2xl font-semibold text-foreground">{post.title}</h3>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          {open ? post.content : post.excerpt}
        </p>
        <Button
          variant="ghost"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          className="mt-3 h-11 px-0 text-xs uppercase text-foreground hover:bg-transparent hover:text-primary"
        >
          {open ? "Close article" : "Read article"} {open ? <ChevronUp /> : <ArrowRight />}
        </Button>
      </div>
    </article>
  );
}

export function HomeSections() {
  useReveals();
  return (
    <>
      <SiteNav />
      <WhatsAppFab />
      <main>
        <section
          id="hero"
          className="relative flex min-h-[720px] items-end overflow-hidden pb-12 pt-28 md:min-h-screen md:items-center md:pb-20"
        >
          <img
            src={heroImage}
            alt="Woman meditating in a sunlit yoga studio"
            width={1600}
            height={1200}
            className="absolute inset-0 size-full object-cover object-[62%_center]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/70 to-transparent md:via-cream/45" />
          <div className="page-container relative grid w-full items-center gap-12 md:grid-cols-[1.05fr_0.95fr]">
            <Reveal className="max-w-xl">
              <p className="eyebrow text-primary">
                Prakrithi Yoga Studio <span className="mx-2 text-warm-gray">/</span> Coimbatore
              </p>
              <h1 className="mt-5 display-serif text-5xl leading-[0.9] text-foreground sm:text-6xl md:text-[7.5rem] md:leading-[0.83]">
                Your journey to <em className="text-primary">wellness</em> begins here.
              </h1>
              <p className="mt-7 max-w-md text-base leading-7 text-muted-foreground">
                Before we move, before we stretch, we find stillness. Take a moment to sync with the
                rhythm below.
              </p>
              <Link
                to="/programs"
                className="mt-8 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.14em] text-foreground transition-colors hover:text-primary"
              >
                Explore the practice <ArrowDownRight className="size-4 text-primary" />
              </Link>
            </Reveal>
            <Reveal className="hidden justify-center md:flex md:justify-end" image>
              <BreatheWidget />
            </Reveal>
          </div>
        </section>
        <section id="practice" className="bg-cream py-16 md:py-36">
          <div className="page-container">
            <Reveal>
              <p className="eyebrow text-primary">01 / Find your practice</p>
              <h2 className="mt-5 max-w-3xl display-serif text-4xl leading-[0.98] text-foreground sm:text-6xl md:text-8xl">
                A practice for <em className="text-primary">every</em> body.
              </h2>
              <p className="mt-7 max-w-md text-sm leading-6 text-muted-foreground">
                Whether you're taking your first step or deepening a lifelong practice, there is
                space for you here.
              </p>
            </Reveal>
            <Reveal>
              <ProgramList />
            </Reveal>
          </div>
        </section>
        <section
          id="philosophy"
          className="overflow-hidden bg-charcoal py-16 text-background md:py-36"
        >
          <div className="page-container grid items-center gap-14 md:grid-cols-[0.9fr_1.1fr] md:gap-24">
            <Reveal className="order-2 md:order-1" image>
              <div className="relative">
                <img
                  src={detailImage}
                  alt="Quiet meditation practice in a warm studio"
                  width={1600}
                  height={1200}
                  loading="lazy"
                  className="aspect-[4/5] w-[88%] rounded-md object-cover md:w-[78%]"
                />
                <div className="absolute -bottom-8 -right-2 flex aspect-square w-36 items-center justify-center rounded-full bg-primary text-center text-[0.62rem] font-medium uppercase tracking-[0.12em] text-primary-foreground md:-right-10">
                  <span>
                    Movement
                    <br />
                    &nbsp; · &nbsp;
                    <br />
                    Stillness
                  </span>
                </div>
              </div>
            </Reveal>
            <Reveal className="order-1 md:order-2">
              <p className="eyebrow text-primary">02 / The philosophy</p>
              <h2 className="mt-5 display-serif text-4xl leading-[0.95] sm:text-7xl md:text-8xl md:leading-[0.86]">
                Your body <em className="text-primary">leads.</em>
                <br />
                Your mind follows.
              </h2>
              <p className="mt-8 max-w-md text-sm leading-7 text-background/60">
                Yoga is not about touching your toes. It is what you learn on the way down. We
                create a space to return to yourself, one breath and one gentle movement at a time.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.14em] text-background hover:text-primary"
              >
                Begin your journey <ArrowRight className="size-4 text-primary" />
              </Link>
            </Reveal>
          </div>
        </section>
        <section id="programs" className="bg-linen py-16 md:py-36">
          <div className="page-container">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <Reveal>
                <p className="eyebrow text-primary">03 / Featured programs</p>
                <h2 className="mt-5 display-serif text-5xl leading-[0.9] text-foreground md:text-7xl">
                  Find your <em className="text-primary">flow.</em>
                </h2>
              </Reveal>
              <Link
                to="/programs"
                className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-foreground hover:text-primary"
              >
                View all programs <ArrowRight className="size-4" />
              </Link>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {programs.slice(0, 4).map((program) => (
                <Reveal key={program.id} image>
                  <ProgramCard program={program} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        <section id="experience" className="bg-cream py-16 md:py-36">
          <div className="page-container grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-24">
            <Reveal>
              <p className="eyebrow text-primary">04 / Your first visit</p>
              <h2 className="mt-5 max-w-md display-serif text-5xl leading-[0.9] text-foreground md:text-7xl">
                What happens when you <em className="text-primary">walk in?</em>
              </h2>
            </Reveal>
            <Reveal>
              <div className="border-t border-border">
                {[
                  [
                    "01",
                    "Arrive.",
                    "Leave the outside world at the door. Our space is designed to immediately slow you down.",
                  ],
                  [
                    "02",
                    "Breathe.",
                    "Before anything else, we breathe together. It's where every session begins.",
                  ],
                  [
                    "03",
                    "Move.",
                    "Flow through sequences built for your body, your level, your pace.",
                  ],
                  [
                    "04",
                    "Reset.",
                    "Leave feeling renewed, lighter, and more present than when you arrived.",
                  ],
                ].map(([number, title, description]) => (
                  <div
                    key={number}
                    className="grid grid-cols-[52px_1fr] gap-5 border-b border-border py-7"
                  >
                    <span className="eyebrow pt-2 text-primary">{number}</span>
                    <div>
                      <h3 className="display-serif text-4xl text-foreground">{title}</h3>
                      <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
        <section id="community" className="bg-linen py-16 md:py-36">
          <div className="page-container grid items-start gap-14 md:grid-cols-[1fr_1.2fr] md:gap-24">
            <Reveal>
              <p className="eyebrow text-primary">05 / Practice together</p>
              <h2 className="mt-5 display-serif text-4xl leading-[0.95] text-foreground md:text-8xl md:leading-[0.86]">
                Wellness feels different when <em className="text-primary">shared.</em>
              </h2>
              <p className="mt-7 max-w-md text-sm leading-7 text-muted-foreground">
                Join a supportive community dedicated to growth, mindfulness, and the simple joy of
                showing up.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.14em] text-foreground hover:text-primary"
              >
                Meet the community <ArrowRight className="size-4 text-primary" />
              </Link>
            </Reveal>
            <Reveal className="grid grid-cols-2 gap-3" image>
              <img
                src={communityImage}
                alt="Sunlit studio detail"
                width={1600}
                height={1200}
                loading="lazy"
                className="mt-8 aspect-[4/5] rounded-md object-cover"
              />
              <div className="space-y-3">
                <img
                  src={interiorImage}
                  alt="Yoga teacher in the studio"
                  width={1600}
                  height={1200}
                  loading="lazy"
                  className="aspect-square rounded-md object-cover"
                />
                <div className="flex aspect-square items-end bg-primary p-5">
                  <span className="display-serif text-3xl leading-none text-primary-foreground">
                    Come as you are.
                    <br />
                    <em>Grow from here.</em>
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
        <section id="stories" className="bg-charcoal py-16 md:py-36">
          <div className="page-container">
            <Reveal>
              <p className="eyebrow text-primary">06 / Stories from the mat</p>
            </Reveal>
            <Reveal className="mt-12">
              <TestimonialSlider />
            </Reveal>
          </div>
        </section>
        <section id="journal" className="bg-cream py-16 md:py-36">
          <div className="page-container">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <Reveal>
                <p className="eyebrow text-primary">07 / The journal</p>
                <h2 className="mt-5 display-serif text-5xl leading-[0.9] text-foreground md:text-7xl">
                  From the Prakrithi <em className="text-primary">journal.</em>
                </h2>
              </Reveal>
              <p className="max-w-xs text-sm leading-6 text-muted-foreground">
                Simple practices for calmer mornings, mindful movement, and restful evenings.
              </p>
            </div>
            <div className="mt-12 grid gap-7 md:grid-cols-3">
              {journalPosts.map((post) => (
                <Reveal key={post.title} image>
                  <JournalCard post={post} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        <section id="faq" className="bg-linen py-16 md:py-36">
          <div className="page-container grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-24">
            <Reveal>
              <p className="eyebrow text-primary">08 / Frequently asked</p>
              <h2 className="mt-5 max-w-sm display-serif text-4xl leading-[0.95] text-foreground md:text-8xl md:leading-[0.86]">
                A little <em className="text-primary">clarity.</em>
              </h2>
            </Reveal>
            <Reveal>
              <FAQ />
            </Reveal>
          </div>
        </section>
        <section className="relative overflow-hidden bg-charcoal py-28 text-background md:py-40">
          <div className="absolute inset-0 opacity-10">
            <img
              src={heroImage}
              alt=""
              width={1600}
              height={1200}
              loading="lazy"
              className="size-full object-cover object-[40%_center]"
            />
          </div>
          <div className="page-container relative text-center">
            <Reveal>
              <p className="eyebrow text-primary">Your next breath is waiting</p>
              <h2 className="mx-auto mt-6 max-w-4xl display-serif text-6xl leading-[0.84] md:text-9xl">
                Come back to <em className="text-primary">yourself.</em>
              </h2>
              <p className="mx-auto mt-8 max-w-md text-sm leading-6 text-background/60">
                Your first class is on us. Step inside, find your breath, and see what changes.
              </p>
              <Link
                to="/contact"
                className="mt-9 inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3 text-xs font-medium uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-sage-dark"
              >
                Book a session <ArrowRight className="size-4" />
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
