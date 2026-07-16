import { notFound } from "next/navigation";
import { caseStudies } from "@/constants/caseStudies";
import CaseStudyContent from "@/components/sections/CaseStudyContent";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = caseStudies.find((cs) => cs.slug === slug);
  if (!caseStudy) notFound();

  return (
    <>
      <Header />
      <main>
        <CaseStudyContent data={caseStudy} />
      </main>
      <Footer />
    </>
  );
}