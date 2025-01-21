import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function ThankYou() {
  return (
    <>
      <script id="trackdesk-conversion-script" dangerouslySetInnerHTML={{
        __html: `
          (function(t,d,k){(t[k]=t[k]||[]).push(d);t[d]=t[d]||t[k].f||function(){(t[d].q=t[d].q||[]).push(arguments)}})(window,"trackdesk","TrackdeskObject");
          trackdesk("robocop", "conversion", {
            "conversionType": "sale"
          });
        `
      }} />
      <div className="flex h-screen items-center justify-center">
        <div className="flex flex-col items-center gap-16">
          <header className="flex flex-col items-center gap-9">
            <h1 className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">
            Thank you page
            </h1>
          </header>
        </div>
      </div>
    </>
  );
}
