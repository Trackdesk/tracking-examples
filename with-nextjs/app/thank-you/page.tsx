import Script from "next/script";

export default function ThankYou() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Script id="trackdesk-conversion-script">
        {`(function(t,d,k){(t[k]=t[k]||[]).push(d);t[d]=t[d]||t[k].f||function(){(t[d].q=t[d].q||[]).push(arguments)}})(window,"trackdesk","TrackdeskObject");`}
        {`trackdesk("robocop", "conversion", {
          "conversionType": "sale"
        });`}
      </Script>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>
          Thank you page
        </h1>
      </main>
    </div>
  );
}
