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
import journalImage from "@/assets/yoga-journal.jpg";
import brandLogo from "@/assets/prakrithi-green-logo.jpeg.asset.json";
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
    imagePosition: "center center",
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
    imagePosition: "center center",
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
    imagePosition: "center center",
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
    imagePosition: "center center",
  },
];

const testimonials = [
  {
    quote:
      "More than just a place to work out. It's a sanctuary where you learn to be present in your own life again.",
    author: "Priya R.",
    program: "Morning Flow",
  },
  {
    quote:
      "Prakrithi changed my relationship with stress. The breathwork sessions alone are worth it.",
    author: "Arun M.",
    program: "Breathwork Basics",
  },
  {
    quote:
      "I came in a complete beginner and left every class feeling like I'd known yoga my whole life.",
    author: "Lakshmi V.",
    program: "Beginners Yoga",
  },
];

export const journalPosts = [
  {
    category: "MINDFULNESS",
    readTime: "5 min read",
    title: "5 Minutes to Start Your Morning",
    excerpt: "A short, powerful routine you can do before your feet hit the floor.",
    image: journalImage,
  },
  {
    category: "PRACTICE",
    readTime: "5 min read",
    title: "How Breath Shapes Your Movement",
    excerpt: "The often-overlooked connection between pranayama and physical yoga.",
    image: detailImage,
  },
  {
    category: "LIFESTYLE",
    readTime: "4 min read",
    title: "Creating a Mindful Evening Routine",
    excerpt: "How to wind down with intention and wake up restored.",
    image: interiorImage,
  },
];

export const faqItems = [
  [
    "Do I need prior yoga experience?",
    "Absolutely not! We welcome complete beginners. Our Beginners Yoga class is specifically designed for those starting from scratch.",
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
  const close = () => setOpen(false);
  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled || open ? "border-b border-border/70 bg-background/95 shadow-sm backdrop-blur-md" : "bg-transparent"}`}
      >
        <div className="page-container flex h-[88px] items-center justify-between gap-6">
          <Link
            to="/"
            className="group flex shrink-0 items-center"
            onClick={close}
            aria-label="Prakrithi home"
          >
            <img
               src={brandLogo.url}
               alt="Prakrithi Yoga and Nutrition — Wellness Begins Within"
               width={742}
               height={1024}
               className="h-[72px] w-[54px] object-contain md:h-20 md:w-[58px]"
            />
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
              className="md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen(!open)}
            >
              {open ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </header>
      {open && (
        <div className="fixed inset-0 z-40 flex flex-col bg-cream px-6 pb-12 pt-32 md:hidden">
          <nav className="flex flex-1 flex-col gap-6">
            <Link to="/" onClick={close} className="display-serif text-5xl text-foreground">
              Home
            </Link>
            <Link to="/programs" onClick={close} className="display-serif text-5xl text-foreground">
              Programs
            </Link>
            <Link to="/contact" onClick={close} className="display-serif text-5xl text-foreground">
              Contact
            </Link>
          </nav>
          <p className="eyebrow text-warm-gray">Breathe. Move. Become.</p>
        </div>
      )}
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
               src={brandLogo.url}
               alt="Prakrithi Yoga and Nutrition — Wellness Begins Within"
               width={742}
               height={1024}
              loading="lazy"
               className="h-52 w-40 object-contain"
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
       href="https://wa.me/919629592292"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Prakrithi on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105"
    >
      <span className="text-lg font-semibold">⌁</span>
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
        <Link
          to="/programs"
          key={program.id}
          className="group flex flex-col gap-5 border-b border-border py-7 transition-colors hover:bg-linen/60 md:grid md:grid-cols-[80px_160px_1fr_24px] md:items-center md:gap-8"
        >
          <span className="display-serif text-4xl text-primary/60 md:text-5xl">
            {program.index}
          </span>
          <img
            src={program.image}
            alt={`${program.title} at Prakrithi Yoga Studio`}
             width={928}
             height={1152}
            loading="lazy"
            className="h-32 w-full object-cover md:h-24"
            style={{ objectPosition: program.imagePosition }}
          />
          <div>
            <p className="eyebrow text-primary">{program.category}</p>
            <h3 className="display-serif mt-2 text-3xl text-foreground">{program.title}</h3>
            <p className="mt-1 max-w-lg text-sm leading-6 text-muted-foreground">
              {program.shortDescription}
            </p>
          </div>
          <ArrowRight className="hidden size-5 text-primary transition-transform group-hover:translate-x-1 md:block" />
        </Link>
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

export function ContactForm() {
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
        setSubmitted(true);
      }}
    >
      <div className="grid gap-7 sm:grid-cols-2">
        <label className="eyebrow text-muted-foreground">
          Your Name
          <Input
            required
            name="name"
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
            placeholder="Your number"
            className="mt-3 h-10 rounded-none border-0 border-b border-border bg-transparent px-0 text-base shadow-none focus-visible:ring-0"
          />
        </label>
        <label className="eyebrow text-muted-foreground">
          Interested Program
          <select
            name="program"
            defaultValue=""
            className="mt-3 h-10 w-full border-0 border-b border-border bg-transparent text-sm text-foreground outline-none"
          >
            <option value="" disabled>
              Select a program
            </option>
            {programs.slice(0, 4).map((program) => (
              <option key={program.id}>{program.title}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="eyebrow block text-muted-foreground">
        Your Message
        <Textarea
          name="message"
          rows={3}
          placeholder="Tell us a little about what you're looking for"
          className="mt-3 resize-none rounded-none border-0 border-b border-border bg-transparent px-0 text-base shadow-none focus-visible:ring-0"
        />
      </label>
      <Button
        type="submit"
        className="h-12 w-full rounded-full bg-charcoal text-background hover:bg-sage-dark"
      >
        Send Message <ArrowRight className="size-4" />
      </Button>
    </form>
  );
}

export function ProgramCard({ program }: { program: (typeof programs)[number] }) {
  return (
    <Link to="/contact" className="group relative block aspect-[0.82] overflow-hidden bg-charcoal">
      <img
        src={program.image}
        alt={`${program.title} at Prakrithi Yoga Studio`}
        width={
           928
        }
        height={
           1152
        }
        loading="lazy"
        className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
        style={{ objectPosition: program.imagePosition }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/10 to-transparent" />
      <div className="absolute inset-x-5 top-5 flex items-start justify-between">
        <span className="rounded-full bg-primary px-3 py-1 text-[0.62rem] font-medium tracking-[0.12em] text-primary-foreground">
          {program.category}
        </span>
      </div>
      <div className="absolute inset-x-5 bottom-5">
        <h3 className="display-serif text-3xl text-background">{program.title}</h3>
        <p className="mt-1 text-xs text-background/70">
          {program.level} <span className="mx-1 text-primary">•</span> {program.duration}
        </p>
      </div>
    </Link>
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
          className="relative flex min-h-[760px] items-end overflow-hidden pb-16 pt-32 md:min-h-screen md:items-center md:pb-20"
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
              <h1 className="mt-5 display-serif text-[clamp(3.7rem,8vw,7.5rem)] leading-[0.83] text-foreground">
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
            <Reveal className="flex justify-center md:justify-end" image>
              <BreatheWidget />
            </Reveal>
          </div>
        </section>
        <section id="practice" className="bg-cream py-24 md:py-36">
          <div className="page-container">
            <Reveal>
              <p className="eyebrow text-primary">01 / Find your practice</p>
              <h2 className="mt-5 max-w-3xl display-serif text-5xl leading-[0.95] text-foreground sm:text-6xl md:text-8xl">
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
          className="overflow-hidden bg-charcoal py-24 text-background md:py-36"
        >
          <div className="page-container grid items-center gap-14 md:grid-cols-[0.9fr_1.1fr] md:gap-24">
            <Reveal className="order-2 md:order-1" image>
              <div className="relative">
                <img
                  src={heroImage}
                  alt="Quiet meditation practice in a warm studio"
                  width={1600}
                  height={1200}
                  loading="lazy"
                  className="aspect-[0.82] w-[78%] object-cover object-[26%_center]"
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
              <h2 className="mt-5 display-serif text-6xl leading-[0.86] sm:text-7xl md:text-8xl">
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
        <section id="programs" className="bg-linen py-24 md:py-36">
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
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {programs.slice(0, 4).map((program) => (
                <Reveal key={program.id} image>
                  <ProgramCard program={program} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        <section id="experience" className="bg-cream py-24 md:py-36">
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
        <section id="community" className="bg-linen py-24 md:py-36">
          <div className="page-container grid items-start gap-14 md:grid-cols-[1fr_1.2fr] md:gap-24">
            <Reveal>
              <p className="eyebrow text-primary">05 / Practice together</p>
              <h2 className="mt-5 display-serif text-6xl leading-[0.86] text-foreground md:text-8xl">
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
                src={heroImage}
                alt="Sunlit studio detail"
                width={1600}
                height={1200}
                loading="lazy"
                className="mt-10 aspect-[0.78] object-cover object-[10%_center]"
              />
              <div className="space-y-3">
                <img
                  src={heroImage}
                  alt="Yoga teacher in the studio"
                  width={1600}
                  height={1200}
                  loading="lazy"
                  className="aspect-square object-cover object-[85%_center]"
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
        <section id="stories" className="bg-charcoal py-24 md:py-36">
          <div className="page-container">
            <Reveal>
              <p className="eyebrow text-primary">06 / Stories from the mat</p>
            </Reveal>
            <Reveal className="mt-12">
              <TestimonialSlider />
            </Reveal>
          </div>
        </section>
        <section id="journal" className="bg-cream py-24 md:py-36">
          <div className="page-container">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <Reveal>
                <p className="eyebrow text-primary">07 / The journal</p>
                <h2 className="mt-5 display-serif text-5xl leading-[0.9] text-foreground md:text-7xl">
                  From the Prakrithi <em className="text-primary">journal.</em>
                </h2>
              </Reveal>
              <Link
                to="/programs"
                className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-foreground hover:text-primary"
              >
                Read more <ArrowRight className="size-4" />
              </Link>
            </div>
            <div className="mt-12 grid gap-7 md:grid-cols-3">
              {journalPosts.map((post, index) => (
                <Reveal key={post.title} className="group" image>
                  <div>
                    <img
                      src={heroImage}
                      alt={post.title}
                      width={1600}
                      height={1200}
                      loading="lazy"
                      className="aspect-[1.35] w-full object-cover"
                      style={{ objectPosition: `${index * 42 + 14}% center` }}
                    />
                    <div className="mt-5 flex items-center justify-between">
                      <span className="eyebrow text-primary">{post.category}</span>
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    </div>
                    <h3 className="mt-3 display-serif text-3xl leading-none text-foreground transition-colors group-hover:text-primary">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{post.excerpt}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-[0.68rem] font-medium uppercase tracking-[0.14em] text-foreground">
                      Read article <ArrowRight className="size-3 text-primary" />
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        <section id="faq" className="bg-linen py-24 md:py-36">
          <div className="page-container grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-24">
            <Reveal>
              <p className="eyebrow text-primary">08 / Frequently asked</p>
              <h2 className="mt-5 max-w-sm display-serif text-6xl leading-[0.86] text-foreground md:text-8xl">
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
