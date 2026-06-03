export type PageSection = {
  title: string;
  text?: string;
  imageLabel?: string;
  items?: string[];
  timeline?: string[];
  formFields?: string[];
};

export type FestivalPage = {
  slug: string;
  navLabel: string;
  pageTitle: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string;
  ctaPrimary?: string;
  ctaSecondary?: string;
  imageLabel: string;
  sections: PageSection[];
};

export const homeHighlights = [
  "Live Ayo Tournament",
  "Cultural Performances",
  "Yoruba Food and Marketplace",
  "Learning Sessions for Children and Youth"
];

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/about-the-festival", label: "About" },
  { href: "/history-of-ayo", label: "History" },
  { href: "/how-to-play", label: "How to Play" },
  { href: "/cultural-significance", label: "Significance" },
  { href: "/tournament-registration", label: "Tournament" },
  { href: "/festival-experience", label: "Experience" },
  { href: "/gallery-stories", label: "Gallery" },
  { href: "/contact-sponsors-partnership", label: "Partners" }
];

export const pages: FestivalPage[] = [
  {
    slug: "about-the-festival",
    navLabel: "About",
    pageTitle: "About The Grand Ayo Festival",
    eyebrow: "About the Festival",
    title: "A Festival Built Around Play, Memory, and Yoruba Identity",
    subtitle: "Àjọyọ̀ Nlá Ayò Ọ̀pọ́n",
    intro:
      "The Grand Ayo Festival is a cultural gathering created to celebrate Ayò Ọlópón as a living symbol of Yoruba intelligence, strategy, patience, and community life. The festival brings together players, families, cultural groups, schools, artists, historians, vendors, and visitors.",
    imageLabel:
      "Wide festival scene with booths, Ayo boards, Yoruba clothing, banners, and families walking around.",
    sections: [
      {
        title: "Our Mission",
        text: "To preserve and promote Ayò Ọlópón as a living Yoruba heritage game, while creating a modern space where people can learn, compete, connect, and celebrate culture."
      },
      {
        title: "Our Vision",
        text: "To make Ayò Ọlópón visible again across homes, schools, communities, cultural centers, and digital spaces."
      },
      {
        title: "Who the Festival Is For",
        items: [
          "Experienced Ayo players",
          "Beginners",
          "Children and students",
          "Families",
          "Cultural organizations",
          "Tourists and visitors",
          "Yoruba heritage enthusiasts",
          "Schools and educators"
        ],
        imageLabel:
          "Multi-generational group smiling around an Ayo board."
      },
      {
        title: "Festival Values",
        items: [
          "Heritage",
          "Strategy",
          "Respect",
          "Community",
          "Learning",
          "Continuity"
        ]
      }
    ]
  },
  {
    slug: "history-of-ayo",
    navLabel: "History",
    pageTitle: "The History of Ayò Ọlópón",
    eyebrow: "History of Ayò",
    title: "A Yoruba Game of Seeds, Strategy, and Generations",
    subtitle: "Ayò, Ọpọn Ayò, and Yoruba continuity",
    intro:
      "Ayò Ọlópón is a traditional Yoruba board game from Nigeria. It is part of the wider mancala family of count-and-capture games played in many parts of Africa and beyond. Among the Yoruba, Ayò has long been associated with intelligence, calculation, memory, social interaction, and cultural identity.",
    imageLabel:
      "An old carved wooden Ayo board photographed like a museum artifact, with dramatic lighting.",
    sections: [
      {
        title: "What the Name Means",
        text: "Ọpọn refers to a board or tray. Ayò Ọlópón is commonly understood as the game played on the Ayo board. The game is also called Ọpọn Ayò or simply Ayò."
      },
      {
        title: "The Traditional Board",
        text: "The common board has two rows of six holes, making twelve holes total. The game usually starts with forty-eight seeds, four seeds in each hole.",
        imageLabel:
          "Diagram-style image showing two rows of six holes and four seeds in each hole."
      },
      {
        title: "A Game Passed Across Generations",
        text: "Traditionally, Ayò has been played in public and domestic spaces, often with spectators watching, commenting, laughing, advising, and learning. This made the game more than a private contest. It became a social performance.",
        imageLabel:
          "Older player teaching a younger person how to move seeds on the board."
      },
      {
        title: "Ayo and the Wider Mancala Family",
        text: "Ayò belongs to a broad family of seed-sowing and count-and-capture games often known internationally as mancala. Related games are known by different names across Africa and the diaspora. This connection is useful context, but the Yoruba identity of Ayò Ọlópón remains central."
      },
      {
        title: "Important Note on History",
        text: "The exact age and origin timeline of Ayò Ọlópón should be presented carefully. It is safer to describe it as an old and deeply rooted Yoruba traditional game rather than making unsupported claims about an exact invention date."
      }
    ]
  },
  {
    slug: "how-to-play",
    navLabel: "How to Play",
    pageTitle: "How to Play Ayò Ọlópón",
    eyebrow: "How to Play",
    title: "Simple to Learn. Deep to Master.",
    subtitle: "A Yoruba strategy game built on memory, counting, and timing",
    intro:
      "Ayò Ọlópón is easy to begin, but the best players think several moves ahead. The game rewards memory, counting, timing, patience, and strategy.",
    imageLabel:
      "Hands picking seeds from one hole and sowing them across the board.",
    ctaPrimary: "Download Festival Rulebook",
    sections: [
      {
        title: "What You Need",
        items: [
          "1 Ayo board",
          "12 holes arranged in 2 rows of 6",
          "48 seeds or stones",
          "2 players",
          "A calm mind and sharp counting"
        ],
        imageLabel:
          "Flat-lay image of an Ayo board, seeds, and two players seated opposite each other."
      },
      {
        title: "Starting Setup",
        text: "Place four seeds in each of the twelve holes. Each player controls the row closest to them.",
        imageLabel: "Clean instructional diagram showing the starting setup."
      },
      {
        title: "Basic Movement",
        text: "On a turn, a player selects a hole from their side, picks up all the seeds in that hole, and sows them one by one into the following holes around the board. Many rule traditions use counter-clockwise movement.",
        imageLabel: "Step-by-step movement arrows around the board."
      },
      {
        title: "Capturing",
        text: "Capturing rules vary by tradition. In many versions, players capture seeds when the final movement creates a specific seed count in a hole. Because local rules differ, the festival should publish the official tournament rulebook before competition begins."
      },
      {
        title: "Winning",
        text: "The goal is to capture more seeds than the opponent. Since there are forty-eight seeds, a player who captures more than twenty-four seeds is usually ahead. Some games may end in a draw."
      },
      {
        title: "Beginner Tips",
        items: [
          "Count before you move",
          "Watch your opponent's side",
          "Do not rush",
          "Think about the next two turns",
          "Learn from spectators and elders",
          "Practice seed patterns"
        ]
      }
    ]
  },
  {
    slug: "cultural-significance",
    navLabel: "Significance",
    pageTitle: "Cultural Significance",
    eyebrow: "Cultural Significance",
    title: "More Than a Game",
    subtitle: "How Ayò carries memory, values, and Yoruba social life",
    intro:
      "Ayò Ọlópón is a game of the hand, the eye, the memory, and the mind. It teaches more than winning. It teaches patience, foresight, restraint, fairness, and social intelligence.",
    imageLabel:
      "Emotional portrait of an elder smiling while watching young people play Ayo.",
    sections: [
      {
        title: "A Game of Intelligence",
        text: "Ayò requires counting, prediction, memory, and pattern recognition. Strong players do not simply move seeds; they read the board."
      },
      {
        title: "A Social Game",
        text: "In Yoruba communities, the game is often played openly, with people watching, commenting, joking, and learning. This social atmosphere is part of what makes Ayò culturally powerful.",
        imageLabel:
          "Spectators gathered around two players, laughing and watching intensely."
      },
      {
        title: "A Tool for Teaching",
        text: "Ayò can help children practice counting, patience, focus, turn-taking, and strategic thinking. It also gives young people a direct connection to Yoruba heritage."
      },
      {
        title: "A Symbol of Continuity",
        text: "When a child learns Ayò from an elder, more than game rules are transferred. Language, humor, discipline, memory, respect, and cultural pride are also passed along."
      },
      {
        title: "Yoruba Wisdom and Moral Lessons",
        text: "Ayò reflects values that matter in Yoruba social life: fairness, self-control, foresight, humility, and respect for shared rules. The board becomes a small world where choices have consequences.",
        imageLabel:
          "Close-up of two hands paused over the board, suggesting deep thought and strategy."
      }
    ]
  },
  {
    slug: "tournament-registration",
    navLabel: "Tournament",
    pageTitle: "Tournament & Registration",
    eyebrow: "Tournament and Registration",
    title: "Compete for Honor, Skill, and Cultural Pride",
    subtitle: "From beginners to seasoned masters of the board",
    intro:
      "The Grand Ayo Tournament is designed for players of different skill levels, from beginners to experienced masters.",
    imageLabel:
      "Competitive Ayo match with a referee, branded festival banner, and audience watching.",
    ctaPrimary: "Register to Play",
    sections: [
      {
        title: "Tournament Categories",
        items: [
          "Junior Category",
          "Youth Category",
          "Adult Category",
          "Masters Category",
          "Open Challenge Table"
        ]
      },
      {
        title: "Registration Details",
        formFields: [
          "Full name",
          "Age category",
          "Phone number",
          "Email address",
          "City / state",
          "Skill level",
          "Tournament category",
          "Consent for photos/videos"
        ]
      },
      {
        title: "Tournament Format",
        text: "The tournament may use knockout, group stage, or hybrid rounds depending on the number of registered players. Official rules, timing, scoring, and dispute procedures will be published before the event."
      },
      {
        title: "Code of Conduct",
        items: [
          "Respect your opponent",
          "Respect referees",
          "No seed manipulation",
          "No abusive language",
          "Accept official rulings",
          "Play with discipline and sportsmanship"
        ]
      },
      {
        title: "Prizes",
        items: [
          "Champion Trophy",
          "Cash Prize",
          "Cultural Recognition Award",
          "Youth Talent Award",
          "Community Legend Award"
        ],
        imageLabel: "Trophy beside an Ayo board and seeds."
      }
    ]
  },
  {
    slug: "festival-experience",
    navLabel: "Experience",
    pageTitle: "Festival Experience",
    eyebrow: "Festival Experience",
    title: "A Full Day of Culture, Play, Food, Music, and Community",
    subtitle: "Built for families, visitors, students, and culture lovers",
    intro:
      "The Grand Ayo Festival is not only for players. It is for families, students, culture lovers, tourists, creators, vendors, and everyone who wants to experience Yoruba heritage in a living, joyful way.",
    imageLabel:
      "Colorful outdoor Yoruba cultural festival with music, food, games, and families.",
    sections: [
      {
        title: "What to Expect",
        items: [
          "Ayo tournament",
          "Beginner learning zone",
          "Cultural performances",
          "Yoruba food court",
          "Art and craft marketplace",
          "Storytelling sessions",
          "Children's play area",
          "Photo booth",
          "Heritage talks"
        ]
      },
      {
        title: "Sample Festival Schedule",
        timeline: [
          "10:00 AM — Arrival and welcome",
          "11:00 AM — Opening cultural performance",
          "12:00 PM — Ayo beginner workshop",
          "1:00 PM — Food and marketplace break",
          "2:00 PM — Tournament rounds begin",
          "4:00 PM — Storytelling and heritage talk",
          "5:00 PM — Semi-finals and finals",
          "6:00 PM — Award presentation",
          "7:00 PM — Closing celebration"
        ]
      },
      {
        title: "Food and Marketplace",
        text: "Celebrate Yoruba food, handmade crafts, traditional wear, carved boards, cultural books, art, and local vendors.",
        imageLabel:
          "Yoruba food vendor serving amala, ewedu, gbegiri, jollof rice, puff-puff, and drinks."
      },
      {
        title: "Learning Zone",
        text: "The learning zone is for children, schools, beginners, and visitors who want to understand the game before watching or joining matches.",
        imageLabel: "Instructor explaining the board to children."
      }
    ]
  },
  {
    slug: "gallery-stories",
    navLabel: "Gallery",
    pageTitle: "Gallery & Stories",
    eyebrow: "Gallery and Stories",
    title: "The Faces, Boards, and Memories of Ayò",
    subtitle: "A living archive of players, elders, boards, and community",
    intro:
      "Every Ayo board carries a story. Every match carries memory. This page documents the people, places, boards, and moments that keep Ayò Ọlópón alive.",
    imageLabel:
      "Grid of festival photos showing players, boards, spectators, food, children, and cultural performers.",
    ctaPrimary: "Submit Your Story",
    sections: [
      {
        title: "Photo Gallery",
        items: [
          "Players",
          "Boards",
          "Elders",
          "Youth",
          "Performances",
          "Marketplace",
          "Tournament moments",
          "Behind the scenes"
        ]
      },
      {
        title: "Community Stories",
        items: [
          "How I learned Ayo from my grandfather",
          "Why I still play every weekend",
          "Teaching Ayo to my children",
          "The board that has been in our family for decades"
        ],
        imageLabel:
          "Portrait of an elder holding an old carved Ayo board."
      },
      {
        title: "Submit Your Story",
        text: "Have an Ayo memory, family board, childhood story, or tournament experience? Share it with us and help preserve the living archive of Ayò Ọlópón."
      },
      {
        title: "Video Placeholder",
        text: "Short documentary-style video showing how Ayo is played, why it matters, and what the festival represents."
      }
    ]
  },
  {
    slug: "contact-sponsors-partnership",
    navLabel: "Partners",
    pageTitle: "Contact, Sponsors & Partnership",
    eyebrow: "Contact and Partnerships",
    title: "Partner With a Living Cultural Movement",
    subtitle: "Support culture, education, tourism, and community through Ayò",
    intro:
      "The Grand Ayo Festival welcomes partners who believe in culture, education, tourism, youth development, heritage preservation, and community building.",
    imageLabel:
      "Professional photo of festival organizers standing near branded Ayo boards.",
    ctaPrimary: "Become a Sponsor",
    ctaSecondary: "Apply as a Vendor",
    sections: [
      {
        title: "Contact Information",
        items: [
          "Email: hello@grandayofestival.com",
          "Phone: +234 800 000 0000",
          "Location: Lagos, Nigeria",
          "Instagram: @grandayofestival",
          "Facebook: The Grand Ayo Festival",
          "WhatsApp: Direct festival desk"
        ]
      },
      {
        title: "Sponsorship Opportunities",
        items: [
          "Heritage Sponsor",
          "Tournament Sponsor",
          "Youth Learning Sponsor",
          "Food and Marketplace Sponsor",
          "Media Sponsor",
          "Community Partner"
        ]
      },
      {
        title: "Why Sponsor",
        text: "Sponsoring The Grand Ayo Festival connects your brand with culture, education, family, tourism, youth development, and Nigerian heritage."
      },
      {
        title: "Partner Categories",
        items: [
          "Schools",
          "Cultural organizations",
          "Tourism boards",
          "Local businesses",
          "Media houses",
          "Food vendors",
          "Artisans",
          "Technology partners",
          "Community groups"
        ]
      },
      {
        title: "Vendor Application",
        formFields: [
          "Business name",
          "Vendor type",
          "Contact person",
          "Phone number",
          "Email",
          "Product/service description",
          "Space requirements"
        ]
      }
    ]
  }
];

export function getPage(slug: string) {
  return pages.find((page) => page.slug === slug);
}
