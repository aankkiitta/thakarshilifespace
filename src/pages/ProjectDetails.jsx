import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, MapPin, Check } from "lucide-react";
import { projects } from "../components/ProjectShowcase";
import Reveal from "../components/Reveal";
import SectionLabel from "../components/SectionLabel";
import Button from "../components/Button";
import ProjectCard from "../components/ProjectCard";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const [activeImage, setActiveImage] = useState(0);

  if (!project) return <Navigate to="/projects" replace />;

  const related = projects.filter((p) => p.id !== project.id && p.city === project.city).slice(0, 3);
  const fallbackRelated = related.length ? related : projects.filter((p) => p.id !== project.id).slice(0, 3);

  return (
    <div>
      <section className="relative h-[70vh] min-h-[440px] overflow-hidden bg-charcoal-deep">
        <img
          src={project.gallery[activeImage]}
          alt={`${project.name} — ${project.location}`}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep via-charcoal-deep/20 to-charcoal-deep/40" />

        <div className="relative z-10 h-full max-w-[1440px] mx-auto px-6 md:px-10 flex flex-col justify-end pb-16">
          <Link to="/projects" className="eyebrow text-ivory/70 hover:text-bronze-light inline-flex items-center gap-2 mb-8 w-fit text-[0.65rem]">
            <ArrowLeft size={14} /> Back To Projects
          </Link>
          <p className="eyebrow text-bronze-light mb-3 flex items-center gap-2">
            <MapPin size={14} /> {project.location}
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-ivory max-w-2xl text-balance">{project.name}</h1>
        </div>
      </section>

      {project.gallery.length > 1 && (
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 -mt-1 pt-6 flex gap-3 overflow-x-auto no-scrollbar">
          {project.gallery.map((img, i) => (
            <button
              key={img}
              onClick={() => setActiveImage(i)}
              className={`shrink-0 w-24 h-16 overflow-hidden border-2 transition-colors ${
                activeImage === i ? "border-bronze" : "border-transparent opacity-70 hover:opacity-100"
              }`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}

      <section className="max-w-[1440px] mx-auto px-6 md:px-10 py-20 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-14">
        <Reveal>
          <SectionLabel>Overview</SectionLabel>
          <p className="font-display text-2xl md:text-3xl text-charcoal leading-relaxed mb-8 text-balance">
            {project.description}
          </p>
          <h3 className="eyebrow text-charcoal/50 mb-4 text-[0.65rem]">Amenities</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.amenities.map((a) => (
              <li key={a} className="flex items-center gap-3 text-charcoal/75 text-sm">
                <Check size={16} className="text-bronze shrink-0" /> {a}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="bg-ivory-deep border border-charcoal/10 p-8 h-fit">
          <dl className="space-y-5 mb-8">
            <div className="flex justify-between border-b border-charcoal/10 pb-4">
              <dt className="text-charcoal/50 text-sm">Configuration</dt>
              <dd className="text-charcoal font-medium text-sm text-right">{project.configuration}</dd>
            </div>
            <div className="flex justify-between border-b border-charcoal/10 pb-4">
              <dt className="text-charcoal/50 text-sm">Starting Price</dt>
              <dd className="text-charcoal font-medium text-sm text-right">{project.price}</dd>
            </div>
            <div className="flex justify-between border-b border-charcoal/10 pb-4">
              <dt className="text-charcoal/50 text-sm">Status</dt>
              <dd className="text-charcoal font-medium text-sm text-right">{project.status}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-charcoal/50 text-sm">Type</dt>
              <dd className="text-charcoal font-medium text-sm text-right">{project.type}</dd>
            </div>
          </dl>
          <Button to="/contact" variant="solid" className="w-full justify-center">
            Enquire About This Project
          </Button>
        </Reveal>
      </section>

      <section className="bg-ivory-deep py-20 px-6 md:px-10">
        <div className="max-w-[1440px] mx-auto">
          <Reveal>
            <SectionLabel>You May Also Like</SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl text-charcoal mb-12">More Developments</h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {fallbackRelated.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.08}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}