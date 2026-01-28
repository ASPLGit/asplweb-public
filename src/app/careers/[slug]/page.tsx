import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { OPEN_POSITIONS } from "@/data/openPositions";
import JobDetails from "@/components/sections/careers/JobDetails";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}


export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const { slug } = await params;

  const job = OPEN_POSITIONS.find(
    (item) => item.slug === slug
  );

  return {
    title: job
      ? `${job.title} | Careers at Aplombsoft`
      : "Careers | Aplombsoft",
    description: job?.summary,
  };
}


export default async function JobPage({ params }: PageProps) {
  const { slug } = await params;

  const job = OPEN_POSITIONS.find(
    (item) => item.slug === slug
  );

  if (!job) notFound();

  return <JobDetails job={job} />;
}
