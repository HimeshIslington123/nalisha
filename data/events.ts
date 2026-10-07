export type EventItem = {
  slug: string;

  title: string;
  titleNepali: string;

  shortDescription: string;
  description: string;

  date: string;
  dateNepali?: string;

  time: string;

  location: string;
  locationNepali?: string;

  image: string;

  category: string;

  featured?: boolean;

  details: string[];

  gallery?: string[];
};

export const events: EventItem[] = [
  {
    slug: "indra-jatra",

    title: "Indra Jatra",
    titleNepali: "इन्द्रजात्रा",

    shortDescription:
      "Experience one of Kathmandu Valley's most vibrant celebrations of Newa culture, tradition, music, and community.",

    description:
      "Indra Jatra is one of the most important traditional festivals of the Kathmandu Valley. Our program brings young people and the wider community together to learn, participate, and experience the living traditions surrounding this celebration through music, culture, stories, and community activities.",

    date: "September 25, 2026",
    dateNepali: "असोज ९, २०८३",

    time: "10:00 AM – 5:00 PM",

    location: "Kathmandu Durbar Square",
    locationNepali: "काठमाडौं दरबार क्षेत्र",

    image: "/kumari.png",

    category: "Festival",

    featured: true,

    details: [
      "Indra Jatra cultural experience",
      "Traditional Newa music and instruments",
      "Cultural performances",
      "Stories and traditions of Indra Jatra",
      "Community participation",
      "Youth cultural activities",
    ],

    gallery: [
      "/event-1.jpg",
      "/event-2.jpg",
      "/event-3.jpg",
    ],
  },

  {
    slug: "mhepi-cultural-program",

    title: "Mhepi Cultural Program",
    titleNepali: "म्हेपी सांस्कृतिक कार्यक्रम",

    shortDescription:
      "A community program celebrating the traditions, stories, music, and cultural identity of Mhepi.",

    description:
      "The Mhepi Cultural Program is a community-centered gathering created to bring young people closer to local Newa heritage. The program explores the traditions, stories, music, and cultural practices connected with Mhepi while creating a welcoming space for learning and participation.",

    date: "March 14, 2027",
    dateNepali: "चैत १, २०८३",

    time: "3:00 PM – 6:00 PM",

    location: "Mhepi, Kathmandu",
    locationNepali: "म्हेपी, काठमाडौं",

    image: "/mephi.png",

    category: "Cultural",

    details: [
      "Mhepi cultural traditions",
      "Traditional music and performances",
      "Stories and heritage sharing",
      "Youth participation",
      "Community gathering",
      "Interactive cultural activities",
    ],

    gallery: [
      "/event-2.jpg",
      "/event-3.jpg",
      "/event-4.jpg",
    ],
  },

  {
    slug: "dashain-cultural-program",

    title: "Dashain Cultural Program",
    titleNepali: "दशैं सांस्कृतिक कार्यक्रम",

    shortDescription:
      "A cultural gathering exploring the traditions, stories, music, and community spirit surrounding Dashain.",

    description:
      "Our Dashain Cultural Program creates a space to celebrate the cultural side of Dashain through community, traditional practices, stories, music, and shared experiences. The program encourages young people to connect with the traditions that continue to shape life in the Kathmandu Valley.",

    date: "October 21, 2026",
    dateNepali: "कार्तिक ४, २०८३",

    time: "2:00 PM – 6:00 PM",

    location: "Kathmandu, Nepal",
    locationNepali: "काठमाडौं, नेपाल",

    image: "/dashain.png",

    category: "Cultural",

    featured: true,

    details: [
      "Dashain cultural traditions",
      "Traditional music and performances",
      "Stories and cultural sharing",
      "Community gathering",
      "Traditional food and activities",
      "Youth participation",
    ],

    gallery: [
      "/event-3.jpg",
      "/event-4.jpg",
      "/event-1.jpg",
    ],
  },

  {
    slug: "sukunda-rally",

    title: "Sukunda Rally",
    titleNepali: "सुकुन्दा र्‍याली",

    shortDescription:
      "A vibrant cultural rally celebrating light, community, and Newa heritage ahead of Tihar.",

    description:
      "Sukunda Rally is a community celebration inspired by the traditional Sukunda, a symbol of light and Newa cultural identity. Held before Tihar, the rally brings young people and community members together through a lively procession, cultural performances, music, and shared celebration.",

    date: "October 31, 2026",
    dateNepali: "कार्तिक १४, २०८३",

    time: "3:00 PM – 7:00 PM",

    location: "Kathmandu, Nepal",
    locationNepali: "काठमाडौं, नेपाल",

    image: "/sukunda.png",

    category: "Rally",

    featured: true,

    details: [
      "Sukunda-inspired cultural rally",
      "Traditional music and instruments",
      "Newa cultural performances",
      "Community procession",
      "Youth participation",
      "Celebration of light and heritage",
    ],

    gallery: [
      "/event-4.jpg",
      "/event-5.jpg",
      "/event-1.jpg",
    ],
  },

  {
    slug: "bhintuna-newari-new-year",

    title: "Bhintuna — Newari New Year",
    titleNepali: "भिन्तुना — नेवार नयाँ वर्ष",

    shortDescription:
      "Welcome a new year together through Newa culture, community, tradition, music, and celebration.",

    description:
      "Bhintuna is a celebration of Newa identity, community, and a new beginning. The program brings people together to welcome the New Year through cultural performances, traditional music, heritage activities, and community participation while creating a space for younger generations to connect with their roots.",

    date: "November 10, 2026",
    dateNepali: "कार्तिक २४, २०८३",

    time: "10:00 AM – 6:00 PM",

    location: "Kathmandu, Nepal",
    locationNepali: "काठमाडौं, नेपाल",

    image: "/bhintuna.png",

    category: "New Year",

    featured: true,

    details: [
      "Newa New Year celebration",
      "Bhintuna cultural activities",
      "Traditional music and performances",
      "Community gathering",
      "Traditional food and cultural sharing",
      "Youth participation",
      "Newa heritage activities",
    ],

    gallery: [
      "/event-5.jpg",
      "/event-1.jpg",
      "/event-2.jpg",
      "/event-3.jpg",
    ],
  },
];

export function getEvent(slug: string) {
  return events.find((event) => event.slug === slug);
}