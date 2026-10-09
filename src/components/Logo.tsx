import { siteConfig } from "@/config/site";

/** Temporary text-based logo. Replace with the final brand mark when available. */
export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5" aria-label={siteConfig.name}>
      <span className="flex h-10 w-10 items-center justify-center rounded-md bg-accent text-lg font-extrabold tracking-tight text-navy">
        AM
      </span>
      <span className="flex flex-col leading-none">
        <span className={`text-base font-extrabold tracking-wide ${light ? "text-white" : "text-navy"}`}>
          AM TRADE
        </span>
        <span className={`mt-1 text-[0.65rem] font-semibold tracking-[0.22em] ${light ? "text-white/70" : "text-slate-500"}`}>
          SUPPLIES LTD
        </span>
      </span>
    </span>
  );
}
