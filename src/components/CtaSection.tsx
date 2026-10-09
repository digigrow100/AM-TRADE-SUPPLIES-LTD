import Container from "./Container";
import Button from "./Button";

export default function CtaSection({
  title = "Talk to Us About Your Trade Supply",
  text = "Tell us what your business needs and we will get back to you with availability and arrangements.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-navy py-16 text-white">
      <Container className="text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">{text}</p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Button href="/contact">Contact Us</Button>
          <Button href="/services" variant="outlineLight">View Services</Button>
        </div>
      </Container>
    </section>
  );
}
