import type { ReactNode } from "react";
import Container from "./Container";

export default function Section({
  children,
  tone = "white",
  id,
}: {
  children: ReactNode;
  tone?: "white" | "light";
  id?: string;
}) {
  return (
    <section id={id} className={`py-14 sm:py-20 ${tone === "light" ? "bg-surface" : "bg-white"}`}>
      <Container>{children}</Container>
    </section>
  );
}
