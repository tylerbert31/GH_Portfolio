import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function Activities() {
  return (
    <section>
      <h2 className="text-lg font-semibold mb-4">Activity</h2>
      <div className="grid gap-4">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <GitCommitVerticalIcon />
                <span className="text-sm font-semibold">
                  Merge pull request #123
                </span>
              </div>
              <div className="text-sm text-muted-foreground">2 days ago</div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Implement new feature for user profiles
            </p>
            <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
              <GitBranchIcon className="w-4 h-4" />
              <span>main</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <DoorOpenIcon className="w-4 h-4" />
                <span className="text-sm font-semibold">
                  Fix issue with login flow
                </span>
              </div>
              <div className="text-sm text-muted-foreground">3 days ago</div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Users were unable to log in due to a bug in the authentication
              process.
            </p>
            <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
              <TagIcon className="w-4 h-4" />
              <span>bug</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <GitPullRequestIcon />
                <span className="text-sm font-semibold">
                  Add new feature to dashboard
                </span>
              </div>
              <div className="text-sm text-muted-foreground">5 days ago</div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Implement a new dashboard feature to display user analytics.
            </p>
            <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
              <GitBranchIcon className="w-4 h-4" />
              <span>feature/dashboard</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function TagIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
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
      <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
    </svg>
  );
}

function GitBranchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
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
      <line x1="6" x2="6" y1="3" y2="15" />
      <circle cx="18" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M18 9a9 9 0 0 1-9 9" />
    </svg>
  );
}

function DoorOpenIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
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
      <path d="M13 4h3a2 2 0 0 1 2 2v14" />
      <path d="M2 20h3" />
      <path d="M13 20h9" />
      <path d="M10 12v.01" />
      <path d="M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z" />
    </svg>
  );
}

function GitCommitVerticalIcon(): JSX.Element {
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
      <path d="M12 3v6" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 15v6" />
    </svg>
  );
}

function GitPullRequestIcon(): JSX.Element {
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
      <circle cx="18" cy="18" r="3" />
      <circle cx="6" cy="6" r="3" />
      <path d="M13 6h3a2 2 0 0 1 2 2v7" />
      <line x1="6" x2="6" y1="9" y2="21" />
    </svg>
  );
}
