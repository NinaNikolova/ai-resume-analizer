import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "constants";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ResumeMaker" },
    { name: "description", content: "Smart feedback for a choosen job!" },
  ];
}

export default function Home() {
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />
      <section className="main-section">
        <div className="page-heading">
          <h1>Track Your Application & Resume Rating</h1>

          <h2>Review your submissions and check AI-powered feedback.</h2>
        </div>
      </section>
      {resumes.map((resume: any) => (
        <div>
          <h1>{resume.jobTitle}</h1>
        </div>
      ))}
    </main>
  );
}
