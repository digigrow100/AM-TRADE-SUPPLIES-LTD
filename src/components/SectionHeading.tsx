export default function SectionHeading({
  eyebrow,
  title,
  text,
  align = "center",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <div className={`mb-10 max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent-dark">
          {eyebrow}
        </p>
      )}
      <h2 className={`text-3xl font-bold sm:text-4xl ${light ? "text-white" : "text-navy"}`}>
        {title}
      </h2>
      {text && (
        <p className={`mt-4 text-lg ${light ? "text-white/80" : "text-slate-600"}`}>{text}</p>
      )}
    </div>
  );
}
