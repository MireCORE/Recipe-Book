import { Link } from "react-router";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-5 text-center">
      <p className="text-7xl font-extrabold tracking-tight text-rose-600">
        404
      </p>
      <h1 className="mt-4 text-3xl font-bold text-slate-950">
        Page Not Found
      </h1>
      <p className="mt-3 max-w-md leading-relaxed text-slate-600">
        Sorry, the page or recipe you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="mt-7 rounded-lg bg-rose-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-rose-700 focus:outline-none focus:ring-4 focus:ring-rose-200"
      >
        Back to Home
      </Link>
    </section>
  );
}
