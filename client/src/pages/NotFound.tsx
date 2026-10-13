import { Button } from "@/components/ui/button";
import { AlertCircle, Home } from "lucide-react";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f5f1e8] px-6 text-[#17202f]">
      <section className="max-w-xl text-center">
        <AlertCircle
          className="mx-auto mb-6 h-12 w-12 text-[#344b83]"
          aria-hidden="true"
        />
        <p className="font-mono text-sm">404</p>
        <h1 className="mt-3 font-serif text-4xl font-semibold">
          Page not found
        </h1>
        <p className="mt-4 text-base leading-7 text-[#4c5260]">
          The page may have moved or no longer exists.
        </p>
        <Button
          onClick={() => setLocation("/")}
          className="mt-8 rounded-sm bg-[#17202f] px-5 py-2.5 text-white hover:bg-[#344b83]"
        >
          <Home className="mr-2 h-4 w-4" />
          Go home
        </Button>
      </section>
    </main>
  );
}
