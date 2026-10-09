import Container from "@/components/Container";
import Button from "@/components/Button";

export const metadata = { title: "Page Not Found", robots: { index: false } };

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <h1 className="text-4xl font-bold text-navy">Page not found</h1>
      <p className="mt-4 text-lg text-slate-600">Sorry, we could not find that page.</p>
      <div className="mt-8"><Button href="/">Back to Home</Button></div>
    </Container>
  );
}
