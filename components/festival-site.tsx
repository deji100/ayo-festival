import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { FestivalPage, getPage, homeHighlights, navigation } from "@/lib/site-data";

const footerPrimaryLinks = navigation.slice(0, 5);
const footerSecondaryLinks = navigation.slice(5);

const homeStats = [
  { value: "12", label: "holes on the classic Ayo board" },
  { value: "48", label: "seeds in the standard opening setup" },
  { value: "1", label: "festival experience built around culture and play" }
];

const homePillars = [
  "Tournament play with room for beginners and masters",
  "Storytelling, heritage, and intergenerational learning",
  "Food, marketplace, and authentic Yoruba atmosphere"
];

const homeLogoGallery = [
  "/assets/Abeokuta-North-Logo.jpeg",
  "/assets/abeokuta-south.jpg",
  "/assets/ado-odo.jpg",
  "/assets/ewekoro-local-gov.jpg",
  "/assets/ifo-local-gov.jpeg",
  "/assets/ijebu-east-local-gov.jpeg",
  "/assets/ijebu-nort-east-local-gov.jpeg",
  "/assets/ijebu-north-local-gov.jpeg",
  "/assets/ijebu-ode-local-gov.jpeg",
  "/assets/imeko-afon-local-gov.jpeg",
  "/assets/ipokia-local-gov.jpeg",
  "/assets/obafemi-owode-local-gov.jpg",
  "/assets/odeda-local-gov.jpeg",
  "/assets/odogbolu-local-gov.jpeg",
  "/assets/ogun.jpeg",
  "/assets/remo-north-local-gov.jpeg",
  "/assets/sagamu-local-gov.jpeg",
  "/assets/yewa-north-local-gov.jpeg",
  "/assets/yewa-south-local-gov.jpeg"
];

const galleryItems = [
  "Opening ceremony crowd and stage welcome",
  "Carved Ayo boards on display before competition",
  "Elders teaching children how to count seeds",
  "Focused players during tournament rounds",
  "Audience reactions around a close match",
  "Festival food court and shared dining tables",
  "Craft marketplace and cultural vendors",
  "Traditional outfits and portrait moments",
  "Children in the learning zone",
  "Semi-finals under branded festival banners",
  "Award presentation and trophy moment",
  "Closing celebration with music and community"
];

function LogoLockup() {
  return (
    <Link href="/" className="brand" aria-label="The Grand Ayo Festival home">
      <div className="brand-mark">
        <Image src="/assets/logo.jpeg" alt="Ayo Festival logo" fill sizes="96px" />
      </div>
      <div className="brand-copy">
        <p className="brand-title">The Grand Ayo Festival</p>
        <p className="brand-subtitle">Àjọyọ̀ Nlá Ayò Ọ̀pọ́n</p>
      </div>
      <div className="brand-mark brand-mark-ogun">
        <Image src="/assets/ogun.jpeg" alt="Ogun logo" fill sizes="72px" />
      </div>
    </Link>
  );
}

function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-shell">
        <div className="footer-hero">
          <div>
            <p className="eyebrow">The Grand Ayo Festival</p>
            <h3>Ayò Ọlópón as a living Yoruba cultural movement.</h3>
            <p>
              A premium festival platform built around heritage, play, strategy,
              and intergenerational continuity.
            </p>
          </div>
          <Link href="/contact-sponsors-partnership" className="button button-primary">
            Sponsor or Partner
          </Link>
        </div>

        <div className="footer-grid">
          <div className="footer-brand-block">
            <LogoLockup />
            <p>
              Built to celebrate Yoruba strategy, storytelling, food, music, and
              shared memory through a world-class cultural festival experience.
            </p>
          </div>

          <div>
            <p className="footer-title">Explore</p>
            <div className="footer-links">
              {footerPrimaryLinks.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="footer-title">Festival</p>
            <div className="footer-links">
              {footerSecondaryLinks.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="footer-title">Contact</p>
            <div className="footer-details">
              <p>Lagos, Nigeria</p>
              <a href="mailto:hello@grandayofestival.com">hello@grandayofestival.com</a>
              <a href="tel:+2348000000000">+234 800 000 0000</a>
              <p>Open to sponsors, schools, vendors, and cultural partners.</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} The Grand Ayo Festival. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link href="/festival-experience">Plan Your Visit</Link>
            <Link href="/gallery-stories">Stories and Gallery</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div className="image-card">
      <span className="image-chip">Visual Direction</span>
      <p>{label}</p>
    </div>
  );
}

function MediaCard({
  title,
  caption,
  src,
  alt
}: {
  title: string;
  caption: string;
  src: string;
  alt: string;
}) {
  return (
    <article className="media-card">
      <div className="media-card-frame">
        <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="media-card-image" />
      </div>
      <div className="media-card-copy">
        <h3>{title}</h3>
        <p>{caption}</p>
      </div>
    </article>
  );
}

function CTAButtons({
  primary,
  secondary
}: {
  primary?: string;
  secondary?: string;
}) {
  if (!primary && !secondary) {
    return null;
  }

  return (
    <div className="button-row">
      {primary ? (
        <Link href="/tournament-registration" className="button button-primary">
          {primary}
        </Link>
      ) : null}
      {secondary ? (
        <Link href="/history-of-ayo" className="button button-secondary">
          {secondary}
        </Link>
      ) : null}
    </div>
  );
}

function PageHero({ page }: { page: FestivalPage }) {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>{page.title}</h1>
          <p className="hero-subtitle">{page.subtitle}</p>
          <p className="hero-text">{page.intro}</p>
          <CTAButtons primary={page.ctaPrimary} secondary={page.ctaSecondary} />
        </div>
        <ImagePlaceholder label={page.imageLabel} />
      </div>
    </section>
  );
}

function SectionCard({ section }: { section: FestivalPage["sections"][number] }) {
  return (
    <article className="section-card">
      <div className="section-head">
        <h2>{section.title}</h2>
      </div>
      {section.text ? <p>{section.text}</p> : null}
      {section.items ? (
        <div className="chip-grid">
          {section.items.map((item) => (
            <div key={item} className="info-chip">
              {item}
            </div>
          ))}
        </div>
      ) : null}
      {section.timeline ? (
        <div className="timeline">
          {section.timeline.map((item) => (
            <div key={item} className="timeline-item">
              {item}
            </div>
          ))}
        </div>
      ) : null}
      {section.formFields ? (
        <div className="form-grid">
          {section.formFields.map((field) => (
            <label key={field} className="field-card">
              <span>{field}</span>
              <div className="field-placeholder">Input placeholder</div>
            </label>
          ))}
        </div>
      ) : null}
      {section.imageLabel ? <ImagePlaceholder label={section.imageLabel} /> : null}
    </article>
  );
}

function DetailPageHero({
  eyebrow,
  title,
  subtitle,
  intro,
  imageLabel,
  stats
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string;
  imageLabel: string;
  stats: Array<{ value: string; label: string }>;
}) {
  return (
    <section className="hero detail-page-hero">
      <div className="container detail-hero-grid">
        <div className="detail-hero-copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="hero-subtitle">{subtitle}</p>
          <p className="hero-text">{intro}</p>
          <div className="detail-stat-grid">
            {stats.map((stat) => (
              <article key={stat.label} className="detail-stat-card">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>
        </div>
        <ImagePlaceholder label={imageLabel} />
      </div>
    </section>
  );
}

function DetailSplitSection({
  eyebrow,
  title,
  text,
  imageLabel,
  reverse = false
}: {
  eyebrow: string;
  title: string;
  text: string;
  imageLabel: string;
  reverse?: boolean;
}) {
  return (
    <section className="section">
      <div className={`container detail-split-grid${reverse ? " detail-split-reverse" : ""}`}>
        <article className="section-card accent-card detail-copy-card">
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          <p>{text}</p>
        </article>
        <ImagePlaceholder label={imageLabel} />
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <FestivalLayout>
      <DetailPageHero
        eyebrow="About the Festival"
        title="A Festival Built Around Play, Memory, and Yoruba Identity"
        subtitle="Àjọyọ̀ Nlá Ayò Ọ̀pọ́n"
        intro="The Grand Ayo Festival is a cultural gathering created to celebrate Ayò Ọlópón as a living symbol of Yoruba intelligence, strategy, patience, and community life."
        imageLabel="Wide festival scene with booths, Ayo boards, Yoruba clothing, banners, and families walking through a carefully designed cultural venue."
        stats={[
          { value: "4", label: "core values shaping the festival experience" },
          { value: "3", label: "primary audience groups: players, families, and learners" },
          { value: "1", label: "shared mission to preserve Ayò as living culture" }
        ]}
      />

      <DetailSplitSection
        eyebrow="Why It Exists"
        title="Preservation, participation, and cultural visibility."
        text="The festival is designed to preserve and promote Ayò Ọlópón while giving it a modern public stage. It creates room for competition, learning, intergenerational exchange, and a stronger visual identity for Yoruba heritage in contemporary culture."
        imageLabel="Multi-generational group gathered around an Ayo board, smiling, teaching, and observing the game in a premium festival setting."
      />

      <section className="section section-tinted">
        <div className="container detail-stack">
          <div className="section-heading detail-section-heading">
            <p className="eyebrow">Festival Framework</p>
            <h2>Built for people, meaning, and continuity.</h2>
          </div>

          <div className="detail-card-grid two-up">
            <article className="section-card">
              <p className="eyebrow">Mission</p>
              <h3>Protect a living Yoruba strategy tradition.</h3>
              <p>
                Preserve and promote Ayò Ọlópón as a heritage game while creating
                a welcoming public space where people can learn, compete, connect,
                and celebrate culture.
              </p>
            </article>

            <article className="section-card">
              <p className="eyebrow">Vision</p>
              <h3>Make Ayò visible again across everyday life.</h3>
              <p>
                Reintroduce the game across homes, schools, communities, cultural
                centers, and digital storytelling so it remains active rather than archival.
              </p>
            </article>
          </div>

          <article className="section-card">
            <p className="eyebrow">Who the Festival Is For</p>
            <h2>A broad cultural invitation, not a closed competition.</h2>
            <div className="chip-grid">
              {[
                "Experienced Ayo players",
                "Beginners and curious visitors",
                "Children and students",
                "Families",
                "Cultural organizations",
                "Tourists and heritage enthusiasts",
                "Schools and educators",
                "Artists and storytellers"
              ].map((item) => (
                <div key={item} className="info-chip">
                  {item}
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
    </FestivalLayout>
  );
}

function HistoryPage() {
  return (
    <FestivalLayout>
      <DetailPageHero
        eyebrow="History of Ayò"
        title="A Yoruba Game of Seeds, Strategy, and Generations"
        subtitle="Ayò, Ọpọn Ayò, and Yoruba continuity"
        intro="Ayò Ọlópón is a traditional Yoruba board game from Nigeria and part of the wider mancala family of count-and-capture games found across Africa and beyond."
        imageLabel="An old carved wooden Ayo board photographed like a museum artifact with dramatic light and carefully placed seeds."
        stats={[
          { value: "12", label: "holes on the standard playing board" },
          { value: "48", label: "seeds in the common opening arrangement" },
          { value: "Many", label: "generations that have carried the game forward" }
        ]}
      />

      <DetailSplitSection
        eyebrow="Historical Context"
        title="A game shaped as much by spectatorship as by rules."
        text="Traditionally, Ayò has been played in domestic and public settings where spectators watch, comment, laugh, advise, and learn. That social setting turned the game into more than private play. It became performance, teaching, and community memory at once."
        imageLabel="Older player teaching a younger person how to move seeds on the board while others watch nearby."
        reverse
      />

      <section className="section section-tinted">
        <div className="container detail-stack">
          <div className="section-heading detail-section-heading">
            <p className="eyebrow">History Notes</p>
            <h2>What matters most is continuity, not exaggerated claims.</h2>
          </div>

          <div className="detail-card-grid two-up">
            <article className="section-card">
              <p className="eyebrow">Meaning</p>
              <h3>Ọpọn refers to the board itself.</h3>
              <p>
                Ayò Ọlópón is commonly understood as the game played on the Ayo
                board. It may also be described as Ọpọn Ayò or simply Ayò, depending
                on naming tradition and context.
              </p>
            </article>

            <article className="section-card">
              <p className="eyebrow">Structure</p>
              <h3>A precise physical form shapes the game.</h3>
              <p>
                The standard board has two rows of six holes, and many familiar
                versions begin with four seeds in each hole. That simple geometry
                supports deep strategic play.
              </p>
            </article>
          </div>

          <article className="section-card">
            <p className="eyebrow">Responsible Framing</p>
            <h2>Describe Ayò as deeply rooted, not mythically dated.</h2>
            <p>
              The exact invention date should be handled carefully. It is more
              accurate and more respectful to describe Ayò Ọlópón as an old, deeply
              rooted Yoruba traditional game than to make unsupported claims about a
              precise origin year.
            </p>
          </article>
        </div>
      </section>
    </FestivalLayout>
  );
}

function HowToPlayPage() {
  return (
    <FestivalLayout>
      <DetailPageHero
        eyebrow="How to Play"
        title="Simple to Learn. Deep to Master."
        subtitle="A Yoruba strategy game built on memory, counting, and timing"
        intro="Ayò Ọlópón is easy to begin, but the strongest players think several turns ahead. The game rewards memory, counting, timing, patience, and composure."
        imageLabel="Hands picking seeds from one hole and sowing them around the board in a clear instructional composition."
        stats={[
          { value: "2", label: "players facing opposite rows" },
          { value: "12", label: "holes arranged in two rows of six" },
          { value: "48", label: "seeds in the standard setup" }
        ]}
      />

      <DetailSplitSection
        eyebrow="Board Setup"
        title="Start with a clean structure and balanced opening."
        text="Place four seeds in each of the twelve holes. Each player controls the row closest to them. From there, play begins by selecting a hole on your side, lifting its seeds, and sowing them one by one into the following holes."
        imageLabel="Instructional diagram of an Ayo board showing two rows of six holes and four seeds placed in each hole."
      />

      <section className="section section-tinted">
        <div className="container detail-stack">
          <div className="section-heading detail-section-heading">
            <p className="eyebrow">Core Play</p>
            <h2>Understand the rhythm before chasing advanced tactics.</h2>
          </div>

          <div className="detail-card-grid three-up">
            <article className="section-card">
              <p className="eyebrow">Movement</p>
              <h3>Pick up, sow, and count carefully.</h3>
              <p>
                On a turn, select one hole from your side, pick up all the seeds,
                and sow them one by one into the following holes. Many traditions
                use counter-clockwise movement.
              </p>
            </article>

            <article className="section-card">
              <p className="eyebrow">Capturing</p>
              <h3>Rules can vary by local tradition.</h3>
              <p>
                In many versions, players capture seeds when the final movement
                creates a specific seed count in a hole. Official festival rules
                should be published clearly before competitive play begins.
              </p>
            </article>

            <article className="section-card">
              <p className="eyebrow">Winning</p>
              <h3>Collect more than your opponent.</h3>
              <p>
                The aim is to capture more seeds overall. Since the game commonly
                begins with forty-eight seeds, crossing the twenty-four mark usually
                signals a strong position, though draws can still occur.
              </p>
            </article>
          </div>

          <article className="section-card">
            <p className="eyebrow">Beginner Tips</p>
            <h2>Play slower than your instincts want to.</h2>
            <div className="chip-grid">
              {[
                "Count before you move",
                "Watch your opponent's side",
                "Do not rush your turns",
                "Think at least two turns ahead",
                "Learn from experienced spectators",
                "Practice recurring seed patterns"
              ].map((item) => (
                <div key={item} className="info-chip">
                  {item}
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
    </FestivalLayout>
  );
}

function SignificancePage() {
  return (
    <FestivalLayout>
      <DetailPageHero
        eyebrow="Cultural Significance"
        title="More Than a Game"
        subtitle="How Ayò carries memory, values, and Yoruba social life"
        intro="Ayò Ọlópón is a game of the hand, the eye, the memory, and the mind. It teaches patience, foresight, restraint, fairness, and social intelligence."
        imageLabel="Emotional portrait of an elder smiling while watching young people play Ayò in a communal setting."
        stats={[
          { value: "5", label: "core values echoed through play and etiquette" },
          { value: "2", label: "generations often linked through one shared board" },
          { value: "1", label: "game that doubles as cultural teaching" }
        ]}
      />

      <DetailSplitSection
        eyebrow="Cultural Role"
        title="A public game where strategy and social life meet."
        text="In Yoruba communities, Ayò is often played openly, with people watching, commenting, joking, and learning together. That public quality gives the game a cultural weight beyond competition alone."
        imageLabel="Spectators gathered around two players, watching closely, laughing, and reacting to each move."
        reverse
      />

      <section className="section section-tinted">
        <div className="container detail-stack">
          <div className="section-heading detail-section-heading">
            <p className="eyebrow">Why It Matters</p>
            <h2>A game that teaches how to think, behave, and remember.</h2>
          </div>

          <div className="detail-card-grid three-up">
            <article className="section-card">
              <p className="eyebrow">Intelligence</p>
              <h3>Read the board, not just the move.</h3>
              <p>
                Strong players rely on counting, pattern recognition, prediction,
                and memory. Ayò rewards careful observation rather than impulsive play.
              </p>
            </article>

            <article className="section-card">
              <p className="eyebrow">Teaching</p>
              <h3>Children learn through doing and watching.</h3>
              <p>
                The game can help younger players practice patience, focus,
                turn-taking, and strategic thinking while staying connected to
                Yoruba heritage.
              </p>
            </article>

            <article className="section-card">
              <p className="eyebrow">Continuity</p>
              <h3>Culture is passed through play.</h3>
              <p>
                When elders teach Ayò to younger players, rules are transferred
                alongside humor, language, discipline, and cultural pride.
              </p>
            </article>
          </div>

          <article className="section-card">
            <p className="eyebrow">Values in Practice</p>
            <h2>Each move reflects more than winning.</h2>
            <div className="chip-grid">
              {[
                "Patience",
                "Foresight",
                "Self-control",
                "Fairness",
                "Humility",
                "Respect for shared rules"
              ].map((item) => (
                <div key={item} className="info-chip">
                  {item}
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
    </FestivalLayout>
  );
}

function TournamentPage() {
  return (
    <FestivalLayout>
      <DetailPageHero
        eyebrow="Tournament and Registration"
        title="Compete for Honor, Skill, and Cultural Pride"
        subtitle="From beginners to seasoned masters of the board"
        intro="The Grand Ayo Tournament is designed for players across multiple skill levels, with a structure that feels serious, organized, and welcoming."
        imageLabel="Competitive Ayò match with a referee, audience, branded festival backdrop, and concentrated players."
        stats={[
          { value: "4", label: "main competitive age and skill brackets" },
          { value: "1", label: "official ruleset for festival play" },
          { value: "5", label: "key prize and recognition categories" }
        ]}
      />

      <DetailSplitSection
        eyebrow="Registration"
        title="Clear entry flow before the games begin."
        text="Players register with their contact details, age category, skill level, and tournament bracket before the event. That information helps the organizers build fair match structures and communicate timing, format, and official rules."
        imageLabel="Tournament registration desk with forms, branded signage, players, and officials preparing brackets."
      />

      <section className="section section-tinted">
        <div className="container detail-stack">
          <div className="section-heading detail-section-heading">
            <p className="eyebrow">Tournament Structure</p>
            <h2>Competitive, orderly, and easy to understand.</h2>
          </div>

          <div className="detail-card-grid two-up">
            <article className="section-card">
              <p className="eyebrow">Categories</p>
              <h3>Different players need appropriate brackets.</h3>
              <div className="chip-grid">
                {[
                  "Junior Category",
                  "Youth Category",
                  "Adult Category",
                  "Masters Category",
                  "Open Challenge Table"
                ].map((item) => (
                  <div key={item} className="info-chip">
                    {item}
                  </div>
                ))}
              </div>
            </article>

            <article className="section-card">
              <p className="eyebrow">Format</p>
              <h3>Flexible structure, fixed standards.</h3>
              <p>
                Depending on registration numbers, the tournament can use knockout,
                group-stage, or hybrid rounds. Timing, dispute procedures, and scoring
                should all be defined in the official festival rulebook.
              </p>
            </article>
          </div>

          <div className="detail-card-grid two-up">
            <article className="section-card">
              <p className="eyebrow">Code of Conduct</p>
              <h3>Respect is part of the competition.</h3>
              <div className="chip-grid">
                {[
                  "Respect your opponent",
                  "Respect referees",
                  "No seed manipulation",
                  "No abusive language",
                  "Accept official rulings",
                  "Play with discipline"
                ].map((item) => (
                  <div key={item} className="info-chip">
                    {item}
                  </div>
                ))}
              </div>
            </article>

            <article className="section-card">
              <p className="eyebrow">Recognition</p>
              <h3>Reward both mastery and contribution.</h3>
              <div className="chip-grid">
                {[
                  "Champion Trophy",
                  "Cash Prize",
                  "Cultural Recognition Award",
                  "Youth Talent Award",
                  "Community Legend Award"
                ].map((item) => (
                  <div key={item} className="info-chip">
                    {item}
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>
    </FestivalLayout>
  );
}

function ExperiencePage() {
  return (
    <FestivalLayout>
      <DetailPageHero
        eyebrow="Festival Experience"
        title="A Full Day of Culture, Play, Food, Music, and Community"
        subtitle="Built for families, visitors, students, and culture lovers"
        intro="The Grand Ayo Festival is not only for players. It is for families, students, tourists, creators, vendors, and anyone who wants to experience Yoruba heritage in a living, joyful way."
        imageLabel="Colorful outdoor Yoruba cultural festival with music, food, games, performers, and families moving through the venue."
        stats={[
          { value: "1", label: "festival day with a clear visitor journey" },
          { value: "9", label: "major experience zones and activity types" },
          { value: "All", label: "ages welcomed across play, food, and learning" }
        ]}
      />

      <DetailSplitSection
        eyebrow="Festival Atmosphere"
        title="Designed for both participation and observation."
        text="Visitors can move between tournament play, beginner instruction, performances, food, marketplace stalls, and storytelling without feeling boxed into one kind of experience. The day is meant to be dynamic but legible."
        imageLabel="Families and visitors moving between activity zones, food stands, and Ayò tables in a carefully planned event environment."
      />

      <section className="section section-tinted">
        <div className="container detail-stack">
          <div className="section-heading detail-section-heading">
            <p className="eyebrow">What to Expect</p>
            <h2>A curated mix of play, culture, and hospitality.</h2>
          </div>

          <article className="section-card">
            <div className="chip-grid">
              {[
                "Ayo tournament",
                "Beginner learning zone",
                "Cultural performances",
                "Yoruba food court",
                "Art and craft marketplace",
                "Storytelling sessions",
                "Children's play area",
                "Photo booth",
                "Heritage talks"
              ].map((item) => (
                <div key={item} className="info-chip">
                  {item}
                </div>
              ))}
            </div>
          </article>

          <div className="detail-card-grid two-up">
            <article className="section-card">
              <p className="eyebrow">Sample Schedule</p>
              <h3>A full day with a clear rhythm.</h3>
              <div className="timeline">
                {[
                  "10:00 AM — Arrival and welcome",
                  "11:00 AM — Opening cultural performance",
                  "12:00 PM — Ayo beginner workshop",
                  "1:00 PM — Food and marketplace break",
                  "2:00 PM — Tournament rounds begin",
                  "4:00 PM — Storytelling and heritage talk",
                  "5:00 PM — Semi-finals and finals",
                  "6:00 PM — Award presentation",
                  "7:00 PM — Closing celebration"
                ].map((item) => (
                  <div key={item} className="timeline-item">
                    {item}
                  </div>
                ))}
              </div>
            </article>

            <article className="section-card">
              <p className="eyebrow">Spaces Within the Day</p>
              <h3>Food, learning, and culture sit beside the games.</h3>
              <p>
                Beyond competition, visitors can experience Yoruba food, handmade
                crafts, traditional wear, carved boards, heritage talks, and a
                learning zone designed for children, beginners, and first-time guests.
              </p>
            </article>
          </div>
        </div>
      </section>
    </FestivalLayout>
  );
}

function GalleryPage() {
  return (
    <FestivalLayout>
      <DetailPageHero
        eyebrow="Gallery and Stories"
        title="The Faces, Boards, and Memories of Ayò"
        subtitle="A living archive of players, elders, boards, and community"
        intro="Every Ayo board carries a story. Every match carries memory. This page gathers the people, spaces, and moments that keep Ayò Ọlópón visible as a living tradition."
        imageLabel="A curated gallery wall of festival photos showing players, boards, spectators, food, performances, and intergenerational learning."
        stats={[
          { value: "12", label: "gallery moments selected for this page" },
          { value: "4", label: "story themes carried through the collection" },
          { value: "1", label: "shared cultural archive built from community memory" }
        ]}
      />

      <DetailSplitSection
        eyebrow="Community Archive"
        title="Not just event coverage, but cultural memory."
        text="The gallery is meant to show how Ayò lives across people, families, and public gatherings. It should feel like a record of expression, attention, craftsmanship, and belonging rather than a random stream of disconnected images."
        imageLabel="Portrait-style festival moment with an elder holding a carved Ayo board while younger visitors gather nearby."
      />

      <section className="section section-tinted">
        <div className="container detail-stack">
          <div className="section-heading detail-section-heading">
            <p className="eyebrow">Festival Gallery</p>
            <h2>Twelve curated picture moments, no more.</h2>
            <p className="section-lead">
              This page keeps the gallery intentionally capped so it feels edited,
              readable, and premium instead of crowded.
            </p>
          </div>

          <div className="gallery-grid">
            {galleryItems.map((item, index) => (
              <article key={item} className="gallery-tile">
                <div className="gallery-tile-visual">
                  <span className="gallery-tile-count">{String(index + 1).padStart(2, "0")}</span>
                  <ImagePlaceholder label={item} />
                </div>
                <div className="gallery-tile-copy">
                  <h3>{item}</h3>
                  <p>
                    Curated image direction for a polished community archive presentation.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </FestivalLayout>
  );
}

function PartnersPage() {
  return (
    <FestivalLayout>
      <DetailPageHero
        eyebrow="Contact and Partnerships"
        title="Partner With a Living Cultural Movement"
        subtitle="Support culture, education, tourism, and community through Ayò"
        intro="The Grand Ayo Festival welcomes partners who believe in heritage preservation, youth development, education, tourism, and community-building through meaningful cultural programming."
        imageLabel="Professional festival organizers and partners standing beside branded Ayo boards and event materials."
        stats={[
          { value: "6", label: "partnership categories ready for activation" },
          { value: "4", label: "main contact channels for outreach" },
          { value: "1", label: "festival platform connecting culture and community" }
        ]}
      />

      <DetailSplitSection
        eyebrow="Why Partner"
        title="A cultural platform with public visibility and long-term meaning."
        text="Partnering with the festival connects organizations to culture, education, family engagement, tourism, youth development, and public heritage work. The goal is not only sponsorship visibility but sustained cultural contribution."
        imageLabel="Professional partner lounge or meeting area with festival branding, brochures, and sponsor presence."
        reverse
      />

      <section className="section section-tinted">
        <div className="container detail-stack">
          <div className="section-heading detail-section-heading">
            <p className="eyebrow">Partnership Options</p>
            <h2>Clear categories for sponsors, schools, vendors, and collaborators.</h2>
          </div>

          <div className="detail-card-grid two-up">
            <article className="section-card">
              <p className="eyebrow">Contact</p>
              <h3>Start with direct outreach.</h3>
              <div className="chip-grid">
                {[
                  "Email: hello@grandayofestival.com",
                  "Phone: +234 800 000 0000",
                  "Location: Lagos, Nigeria",
                  "Instagram: @grandayofestival",
                  "Facebook: The Grand Ayo Festival",
                  "WhatsApp: Direct festival desk"
                ].map((item) => (
                  <div key={item} className="info-chip">
                    {item}
                  </div>
                ))}
              </div>
            </article>

            <article className="section-card">
              <p className="eyebrow">Sponsor Types</p>
              <h3>Support the festival through focused roles.</h3>
              <div className="chip-grid">
                {[
                  "Heritage Sponsor",
                  "Tournament Sponsor",
                  "Youth Learning Sponsor",
                  "Food and Marketplace Sponsor",
                  "Media Sponsor",
                  "Community Partner"
                ].map((item) => (
                  <div key={item} className="info-chip">
                    {item}
                  </div>
                ))}
              </div>
            </article>
          </div>

          <div className="detail-card-grid two-up">
            <article className="section-card">
              <p className="eyebrow">Who Can Collaborate</p>
              <h3>Open to mission-aligned institutions and brands.</h3>
              <div className="chip-grid">
                {[
                  "Schools",
                  "Cultural organizations",
                  "Tourism boards",
                  "Local businesses",
                  "Media houses",
                  "Food vendors",
                  "Artisans",
                  "Technology partners",
                  "Community groups"
                ].map((item) => (
                  <div key={item} className="info-chip">
                    {item}
                  </div>
                ))}
              </div>
            </article>

            <article className="section-card">
              <p className="eyebrow">Vendor Application</p>
              <h3>Plan practical needs before event day.</h3>
              <div className="form-grid">
                {[
                  "Business name",
                  "Vendor type",
                  "Contact person",
                  "Phone number",
                  "Email",
                  "Product/service description",
                  "Space requirements"
                ].map((field) => (
                  <label key={field} className="field-card">
                    <span>{field}</span>
                    <div className="field-placeholder">Input placeholder</div>
                  </label>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>
    </FestivalLayout>
  );
}

export function FestivalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

export function HomePage() {
  return (
    <FestivalLayout>
      <section className="hero hero-home hero-home-simple">
        <div className="container hero-home-layout">
          <div className="hero-copy hero-copy-panel">
            <p className="eyebrow">The Grand Ayo Festival</p>
            <h1>Where Yoruba Heritage, Strategy, and Community Come Alive</h1>
            <p className="hero-subtitle">Àjọyọ̀ Nlá Ayò Ọ̀pọ́n</p>
            <p className="hero-text">
              Experience the timeless game of Ayò Ọlópón through competition,
              storytelling, music, food, culture, learning, and celebration.
            </p>
            <div className="button-row">
              <Link href="/tournament-registration" className="button button-primary">
                Register for the Festival
              </Link>
              <Link href="/history-of-ayo" className="button button-secondary">
                Learn About Ayò Ọlópón
              </Link>
            </div>
          </div>

          <div className="hero-home-visual">
            <div className="hero-home-image-frame">
              <Image
                src="/assets/logo.jpeg"
                alt="The Grand Ayo Festival hero artwork"
                width={880}
                height={880}
                className="hero-home-image"
                priority
              />
            </div>
            <p className="hero-home-caption">
              A refined identity for a festival centered on memory, strategy, and
              Yoruba cultural continuity.
            </p>
          </div>
        </div>
      </section>

      <section className="section home-intro-section">
        <div className="container home-intro-grid">
          <div className="home-intro-visual-shell">
            <div className="hero-home-visual home-intro-visual">
              <div className="hero-home-image-frame home-intro-image-frame">
                <Image
                  src="/assets/hero.png"
                  alt="The Grand Ayo Festival introduction hero artwork"
                  width={1600}
                  height={1200}
                  className="hero-home-image home-intro-image"
                />
              </div>
              <p className="hero-home-caption">
                A visual anchor for the festival story, carrying the warmth and
                ceremonial tone of the experience into the introduction.
              </p>
            </div>

            <div className="home-stat-grid">
              {homeStats.map((stat) => (
                <article key={stat.label} className="home-stat-card">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </article>
              ))}
            </div>
          </div>

          <div className="home-side-stack">
            <article className="section-card accent-card home-story-card">
              <p className="eyebrow">Introduction</p>
              <h2>Preserving a living Yoruba board game tradition.</h2>
              <p>
                The Grand Ayo Festival is a cultural celebration built around Ayò
                Ọlópón, one of Yoruba culture&apos;s most strategic and socially
                meaningful traditional games. More than a board game, Ayò represents
                patience, calculation, memory, discipline, friendly rivalry, and
                community.
              </p>
            </article>

            <article className="section-card home-pillars-card">
              <p className="eyebrow">Festival Focus</p>
              <h3>Designed for culture, spectatorship, and play.</h3>
              <div className="home-pillars-list">
                {homePillars.map((item) => (
                  <div key={item} className="info-chip">
                    {item}
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-tinted home-highlights-section">
        <div className="container">
          <div className="section-heading home-section-heading">
            <p className="eyebrow">Quick Festival Highlights</p>
            <h2>Culture, play, food, and learning in one clear festival journey.</h2>
            <p className="section-lead">
              Each part of the experience is spaced to feel intentional, calm,
              and easy to explore rather than crowded or overwhelming.
            </p>
          </div>
          <div className="card-grid home-highlights-grid">
            {homeHighlights.map((item) => (
              <article key={item} className="section-card compact-card">
                <h3>{item}</h3>
                <p>
                  Carefully curated programming with strong cultural identity,
                  clear wayfinding, and room for visitors to engage at their own pace.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section home-logo-gallery-section">
        <div className="container detail-stack">
          <div className="section-heading home-section-heading">
            <p className="eyebrow">Local Government Gallery</p>
            <h2>The marks that carry the festival identity.</h2>
            <p className="section-lead">
              A compact gallery for the core visual assets used across the festival
              experience, brand presentation, and partner materials.
            </p>
          </div>

          <div className="logo-collage">
            {homeLogoGallery.map((src, index) => (
              <div key={src} className="logo-collage-tile">
                <div className="logo-collage-frame">
                  <Image
                    src={src}
                    alt={`Festival logo collage item ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1080px) 33vw, 20vw"
                    className="logo-collage-image"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="callout-band home-callout-band">
            <div className="home-callout-copy">
              <p className="eyebrow">Why This Festival Matters</p>
              <h2>Not a museum object. A living cultural experience.</h2>
              <p>
                In a digital age, many traditional games are disappearing from
                everyday life. The Grand Ayo Festival brings Ayò Ọlópón back into
                public memory as a living Yoruba cultural experience rooted in
                community, spectatorship, and strategy.
              </p>
            </div>
            <Link href="/festival-experience" className="button button-primary">
              Join the Celebration
            </Link>
          </div>
        </div>
      </section>
    </FestivalLayout>
  );
}

export function FestivalContentPage({ slug }: { slug: string }) {
  if (slug === "about-the-festival") {
    return <AboutPage />;
  }

  if (slug === "history-of-ayo") {
    return <HistoryPage />;
  }

  if (slug === "how-to-play") {
    return <HowToPlayPage />;
  }

  if (slug === "cultural-significance") {
    return <SignificancePage />;
  }

  if (slug === "tournament-registration") {
    return <TournamentPage />;
  }

  if (slug === "festival-experience") {
    return <ExperiencePage />;
  }

  if (slug === "gallery-stories") {
    return <GalleryPage />;
  }

  if (slug === "contact-sponsors-partnership") {
    return <PartnersPage />;
  }

  const page = getPage(slug);

  if (!page) {
    notFound();
  }

  return (
    <FestivalLayout>
      <PageHero page={page} />
      <section className="section">
        <div className="container stack-grid">
          {page.sections.map((section) => (
            <SectionCard key={section.title} section={section} />
          ))}
        </div>
      </section>
    </FestivalLayout>
  );
}
