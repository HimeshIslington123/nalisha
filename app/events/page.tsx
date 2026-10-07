import EventsClient from "@/components/EventsClient";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Events | Na Lisah Sanskritik Pucha",
  description:
    "Explore upcoming and past cultural events, heritage walks, workshops, gatherings, and community programs by Na Lisah Sanskritik Pucha.",

  keywords: [
    "Na Lisah events",
    "Newa events",
    "Newa cultural events",
    "Kathmandu events",
    "Newa heritage",
    "Newa culture",
    "Kathmandu cultural programs",
    "Newa community events",
  ],

  alternates: {
    canonical: "/events",
  },

  openGraph: {
    title: "Events | Na Lisah Sanskritik Pucha",
    description:
      "Discover cultural programs, heritage walks, workshops, and community events by Na Lisah Sanskritik Pucha.",
    url: "/events",
    siteName: "Na Lisah Sanskritik Pucha",
    locale: "en_NP",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Events | Na Lisah Sanskritik Pucha",
    description:
      "Discover upcoming cultural events and programs by Na Lisah Sanskritik Pucha.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function EventsPage() {
  return <EventsClient />;
}