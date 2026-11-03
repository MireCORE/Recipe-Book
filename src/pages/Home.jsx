import { Link } from "react-router";

const homeCards = [
  {
    title: "Browse Recipes",
    description: "Explore all our delicious recipes and find your next favorite meal.",
    link: "/recipes",
    linkText: "View Recipes",
  },
  {
    title: "Recipe Categories",
    description: "Discover recipes by breakfast, lunch, dinner and desserts.",
    link: "/categories",
    linkText: "Browse Categories",
  },
];

export default function Home() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-12 sm:py-16">
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-rose-600">
          Welcome to
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
          Recipe Book
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
          Find something delicious to make. Explore our recipes or browse by category.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {homeCards.map((card) => (
          <article
            key={card.title}
            className="rounded-xl bg-white p-8 shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg"
          >
            <h2 className="text-2xl font-bold text-slate-950">
              {card.title}
            </h2>
            <p className="mt-3 min-h-14 text-base leading-relaxed text-slate-600">
              {card.description}
            </p>
            <Link
              to={card.link}
              className="mt-6 inline-flex rounded-lg bg-rose-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-rose-700 focus:outline-none focus:ring-4 focus:ring-rose-200"
            >
              {card.linkText} <span aria-hidden="true" className="ml-2">→</span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
