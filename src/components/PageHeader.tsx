type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <div className="mb-10">
      <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#E10600]">{eyebrow}</p>
      <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">{title}</h1>
      <p className="mt-4 max-w-3xl text-lg leading-8 text-white/60">{description}</p>
    </div>
  );
}
