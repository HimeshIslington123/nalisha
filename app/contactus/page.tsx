import ContactClient from "@/components/ContactClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Na Lisah Sanskritik Pucha",
  description:
    "Contact Na Lisah Sanskritik Pucha in Paknajol, Kathmandu. Get in touch with us for cultural activities, collaborations, community programs, volunteering, and inquiries about Newa heritage.",
  keywords: [
    "Na Lisah Sanskritik Pucha",
    "Na Lisah",
    "Nah Lisah",
    "Newa culture",
    "Newa heritage",
    "Newa cultural organization",
    "Newa community Kathmandu",
    "Paknajol Kathmandu",
    "Kathmandu cultural organization",
    "Newa cultural activities",
  ],
  authors: [
    {
      name: "Na Lisah Sanskritik Pucha",
    },
  ],
  creator: "Na Lisah Sanskritik Pucha",
  publisher: "Na Lisah Sanskritik Pucha",

  alternates: {
    canonical: "/contactus",
  },

  openGraph: {
    title: "Contact Us | Na Lisah Sanskritik Pucha",
    description:
      "Get in touch with Na Lisah Sanskritik Pucha in Kathmandu and connect with our work in preserving and celebrating Newa heritage.",
    url: "/contactus",
    siteName: "Na Lisah Sanskritik Pucha",
    locale: "en_NP",
    type: "website",
    images: [
      {
        url: "/about.jpg",
        width: 1200,
        height: 630,
        alt: "Na Lisah Sanskritik Pucha",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Na Lisah Sanskritik Pucha",
    description:
      "Connect with Na Lisah Sanskritik Pucha and be part of keeping Newa heritage alive.",
    images: ["/about.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return <ContactClient />;
}