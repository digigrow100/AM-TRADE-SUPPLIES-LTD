export default function FeatureCard({
  title,
  text,
  index,
}: {
  title: string;
  text: string;
  index?: number;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      {index !== undefined && (
        <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-accent font-bold text-navy">
          {index + 1}
        </span>
      )}
      <h3 className="text-lg font-bold text-navy">{title}</h3>
      <p className="mt-2 text-slate-600">{text}</p>
    </div>
  );
}
