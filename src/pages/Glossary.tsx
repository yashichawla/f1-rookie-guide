import { PageHeader } from "../components/PageHeader";
import { glossary } from "../data/glossary";

export function Glossary() {
  return (
    <section>
      <PageHeader eyebrow="F1 101" title="Beginner Glossary" description="The terms new fans hear every race weekend, explained without making F1 sound more complicated than it needs to be." />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {glossary.map((item) => (
          <article key={item.term} className="glass-card rounded-[2rem] p-6 transition hover:-translate-y-1 hover:bg-white/[0.08]">
            <h2 className="text-2xl font-black">{item.term}</h2>
            <p className="mt-4 leading-7 text-white/62">{item.definition}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
