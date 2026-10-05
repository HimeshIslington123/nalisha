import {
  Music2,
  Landmark,
  Drama,
  BookOpen,
  Users,
  Megaphone,
  type LucideIcon,
} from "lucide-react";

export type Initiative = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  linkText: string;
  icon: LucideIcon;

  fullDescription: string;

  sections: {
    title: string;
    text: string;
  }[];

  activities: string[];
};

export const initiatives: Initiative[] = [
  {
    slug: "dhime-traditional-music",
    title: "Dhime & Traditional Music",
    shortTitle: "Dhime & Traditional Music",
    description:
      "Systematic teaching of complex Newari rhythmic talas, ensuring centuries of acoustic wisdom are faithfully mastered by new players.",
    linkText: "Weekly Rehearsals",
    icon: Music2,

    fullDescription:
      "Dhime music is one of the most powerful expressions of Newar cultural identity. Through regular practice, structured learning, and community participation, we work to ensure that traditional rhythms continue to be understood and performed by younger generations.",

    sections: [
      {
        title: "Keeping the Rhythm Alive",
        text:
          "Our music programs focus on traditional Dhime rhythms, performance techniques, discipline, and the cultural meaning behind each musical tradition.",
      },
      {
        title: "Learning Through Practice",
        text:
          "Young participants learn through regular rehearsals where experienced musicians guide them through traditional compositions and performance styles.",
      },
      {
        title: "Passing Knowledge Forward",
        text:
          "Our goal is not simply to perform traditional music, but to make sure the knowledge behind it continues from one generation to the next.",
      },
    ],

    activities: [
      "Weekly Dhime rehearsals",
      "Traditional rhythm training",
      "Youth music programs",
      "Festival performances",
      "Community musical gatherings",
    ],
  },

  {
    slug: "jatra-festival-rites",
    title: "Jātrā & Festival Rites",
    shortTitle: "Jātrā & Festival Rites",
    description:
      "Mobilizing large ensembles for Indra Jātrā, Bisket Jātrā, and local Tole processions, keeping ancient streets resounding with live rhythm.",
    linkText: "Chariot & Processions",
    icon: Landmark,

    fullDescription:
      "Newar festivals are living expressions of history, spirituality, music, community, and identity. We participate in and support traditional Jātrās and processions that bring communities together.",

    sections: [
      {
        title: "Living Festivals",
        text:
          "Jātrās are more than celebrations. They connect communities with their history, sacred spaces, traditions, and collective identity.",
      },
      {
        title: "Community Participation",
        text:
          "Our members participate in processions, musical performances, chariot-related activities, and other traditional community events.",
      },
      {
        title: "Respecting Tradition",
        text:
          "We aim to preserve the cultural significance of festivals while encouraging responsible participation from younger generations.",
      },
    ],

    activities: [
      "Indra Jātrā participation",
      "Bisket Jātrā activities",
      "Local Tole processions",
      "Traditional musical performances",
      "Festival volunteer programs",
    ],
  },

  {
    slug: "cultural-performances",
    title: "Cultural Performances",
    shortTitle: "Cultural Performances",
    description:
      "Presenting authentic Newari art forms, Jyāpu farming songs, and traditional ritual dances on municipal, national, and academic stages.",
    linkText: "Artistic Exhibitions",
    icon: Drama,

    fullDescription:
      "Cultural performance gives traditional knowledge a living stage. We present Newari music, dance, songs, and traditional art forms to audiences across different communities and institutions.",

    sections: [
      {
        title: "Authentic Expression",
        text:
          "Our performances are rooted in traditional Newari cultural practices and are presented with respect for their historical and community context.",
      },
      {
        title: "Sharing With Wider Audiences",
        text:
          "We participate in cultural programs, academic events, public festivals, and community gatherings.",
      },
      {
        title: "Supporting Young Artists",
        text:
          "Young performers receive opportunities to develop confidence, discipline, and practical experience through real performances.",
      },
    ],

    activities: [
      "Traditional dance",
      "Jyāpu songs",
      "Dhime performances",
      "Cultural stage programs",
      "Academic cultural events",
    ],
  },

  {
    slug: "heritage-preservation",
    title: "Heritage Preservation",
    shortTitle: "Heritage Preservation",
    description:
      "Recording oral narratives, archiving endangered compositions, and assisting conservation initiatives for historic community rest houses (*Pāṭis*).",
    linkText: "Living Archives",
    icon: BookOpen,

    fullDescription:
      "Heritage exists not only in buildings and monuments, but also in stories, music, language, rituals, knowledge, and memories. Our preservation initiatives focus on keeping these living forms accessible to future generations.",

    sections: [
      {
        title: "Documenting Memory",
        text:
          "We encourage the documentation of oral histories, traditional compositions, cultural practices, and community stories.",
      },
      {
        title: "Protecting Living Heritage",
        text:
          "Preservation means keeping cultural knowledge active and meaningful rather than simply storing it in archives.",
      },
      {
        title: "Community Heritage",
        text:
          "We support awareness and community participation around historic spaces, traditional Pāṭis, and other cultural resources.",
      },
    ],

    activities: [
      "Oral history documentation",
      "Traditional music archiving",
      "Heritage awareness",
      "Community research",
      "Pāṭi preservation initiatives",
    ],
  },

  {
    slug: "youth-community",
    title: "Youth & Community",
    shortTitle: "Youth & Community",
    description:
      "Providing positive social cohesion for urban youth, instilling pride in ancestral identity, discipline, and communal responsibility.",
    linkText: "Tole Programs",
    icon: Users,

    fullDescription:
      "Young people are central to the future of cultural heritage. Our youth and community initiatives create opportunities for learning, participation, leadership, friendship, and cultural pride.",

    sections: [
      {
        title: "Building the Next Generation",
        text:
          "We provide young people with opportunities to learn about their cultural identity through music, festivals, community activities, and shared experiences.",
      },
      {
        title: "Community Responsibility",
        text:
          "Participation in cultural activities teaches teamwork, discipline, responsibility, and respect for community traditions.",
      },
      {
        title: "A Place to Belong",
        text:
          "Our programs aim to create positive spaces where young people can connect with one another and their heritage.",
      },
    ],

    activities: [
      "Youth cultural programs",
      "Tole activities",
      "Volunteer opportunities",
      "Traditional music training",
      "Community gatherings",
    ],
  },

  {
    slug: "cultural-awareness",
    title: "Cultural Awareness",
    shortTitle: "Cultural Awareness",
    description:
      "Conducting interactive school seminars, documentary talks, and public discourses explaining the spiritual symbology of Newari festivals.",
    linkText: "Public Education",
    icon: Megaphone,

    fullDescription:
      "Cultural preservation also requires understanding. Through education and public awareness, we help people learn about the meaning, history, symbolism, and importance of Newari cultural traditions.",

    sections: [
      {
        title: "Learning About Culture",
        text:
          "We organize educational activities that introduce students and community members to Newari festivals, traditions, music, and heritage.",
      },
      {
        title: "Understanding Symbolism",
        text:
          "Festivals contain layers of historical and spiritual meaning. Our awareness programs help explain these traditions in accessible ways.",
      },
      {
        title: "Creating Dialogue",
        text:
          "Public discussions and cultural talks create space for communities to ask questions, share knowledge, and engage with their heritage.",
      },
    ],

    activities: [
      "School seminars",
      "Cultural talks",
      "Documentary discussions",
      "Public awareness programs",
      "Festival education",
    ],
  },
];

export function getInitiative(slug: string) {
  return initiatives.find((initiative) => initiative.slug === slug);
}