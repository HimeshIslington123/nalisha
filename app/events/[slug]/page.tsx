import type { Metadata } from "next";
import { notFound } from "next/navigation";


import { events, getEvent } from "@/data/events";
import EventDetailClient from "@/components/EventDetailClient";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return events.map((event) => ({
    slug: event.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const event = getEvent(slug);

  if (!event) {
    return {
      title: "Event Not Found | Na Lisah Sanskritik Pucha",
    };
  }

  return {
    title: `${event.title} | Na Lisah Sanskritik Pucha`,

    description: event.shortDescription,

    keywords: [
      event.title,
      event.titleNepali,
      "Na Lisah Sanskritik Pucha",
      "Newa culture",
      "Newa heritage",
      "Kathmandu events",
      event.category,
    ],

    alternates: {
      canonical: `/events/${event.slug}`,
    },

    openGraph: {
      title: `${event.title} | Na Lisah Sanskritik Pucha`,
      description: event.shortDescription,
      url: `/events/${event.slug}`,
      siteName: "Na Lisah Sanskritik Pucha",
      locale: "en_NP",
      type: "article",

      images: [
        {
          url: event.image,
          width: 1200,
          height: 800,
          alt: event.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${event.title} | Na Lisah Sanskritik Pucha`,
      description: event.shortDescription,
      images: [event.image],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function EventDetailPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const event = getEvent(slug);

  if (!event) {
    notFound();
  }

  return <EventDetailClient event={event} />;
}