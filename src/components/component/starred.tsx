import Link from "next/link";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Repo } from "@/lib/types";

const starred: Repo[] = [
  {
    name: "Nxt-Expense",
    url: "https://github.com/tylerbert31/Nxt-Expense",
    stars: 1,
    forks: 0,
    description: "Multi Tenant Expense Tracker made with Next.JS and Clerk",
    language: "Typescript",
    deployment: "https://nexpense.tylerbert.cc/",
  },
  {
    name: "Expense_tracker_v2",
    url: "https://github.com/tylerbert31/expense_tracker_v2",
    stars: 1,
    forks: 0,
    description: "A more visualized personal expense tracker",
    language: "Typescript",
    deployment: "https://myexpenses.tylerbert.cc/",
  },
  {
    name: "Jollicriz",
    url: "https://github.com/tylerbert31/jollicriz",
    stars: 1,
    forks: 0,
    description:
      "Know your friends' work schedules and when they are vacant for laags.",
    language: "Javascript",
    deployment: "https://jollicriz.vercel.app/",
  },
];

export default function Pinned() {
  return (
    <section>
      <Link
        target="_blank"
        href="https://github.com/tylerbert31?tab=repositories"
      >
        <h2 className="text-lg font-semibold mb-4">Pinned Repositories</h2>
      </Link>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {starred.map((repo) => (
          <Card key={repo.name}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <Link
                  href={repo.url}
                  className="text-lg font-semibold"
                  prefetch={false}
                  target="_blank"
                >
                  {repo.name}
                </Link>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <StarIcon />
                  <span>{repo.stars}</span>
                  <ForkliftIcon />
                  <span>{repo.forks}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent key={repo.name}>
              <p className="text-muted-foreground text-wrap">
                {repo.description}
              </p>
              <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                <CodeIcon />
                <span>{repo.language}</span>
                <Link href={repo.deployment} target="_blank">
                  🌍 Deployment
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function CodeIcon(): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function ForkliftIcon(): JSX.Element {
  return (
    <svg
      className="w-4 h-4"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 12H5a2 2 0 0 0-2 2v5" />
      <circle cx="13" cy="19" r="2" />
      <circle cx="5" cy="19" r="2" />
      <path d="M8 19h3m5-17v17h6M6 12V7c0-1.1.9-2 2-2h3l5 5" />
    </svg>
  );
}

function StarIcon(): JSX.Element {
  return (
    <svg
      className="w-4 h-4"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
