import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Github } from "lucide-react";
import { AppLogo } from "~/components/app-logo";
import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Login() {
  return (
    <section className="w-full bg-white min-h-screen flex flex-col">
      <nav className="flex item-center space-x-2 p-4">
        <Link to="/">
          <AppLogo className="h-8 w-8 md:h-10 md:w-10" />
        </Link>

        <h1 className="font-semibold text-zinc-900 capitalize pt-0.5 md:pt-2">
          gitposter
        </h1>
      </nav>
      <div className=" md:w-full md:flex container flex-col justify-start items-center px-4 md:px-6 flex-1 mt-24">
        <div className="flex flex-col items-center space-y-4 text-center p-4 md:w-1/2">
          <h1 className="text-3xl md:tetx-5xl font-bold tracking-tighter">
            Login in using <br />
            <span className="px-1 font-extrabold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">
              Github
            </span>
            <br />
            and discover more
          </h1>

          <p className="text-gray-500 mt-2">
            Our post and comments are powerd by Markdown
          </p>
        </div>
        <div className="p-1 rounded-md flex justify-center items-center bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 bg-300% animate-gradient">
          <Button
            className="p-4 relative w-full"
            onClick={() => console.log("login")}
          >
            <Github className="h-4 w-4" /> Login with Github
          </Button>
        </div>
      </div>
    </section>
  );
}
