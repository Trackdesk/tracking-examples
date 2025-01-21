import * as React from "react"
import { Script, type HeadFC, type PageProps } from "gatsby"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const ThankYouPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
         Thank you page
      </h1>
    </main>
  )
}

export default ThankYouPage

export const Head: HeadFC = () => <>
  <title>Thank you page</title>
  <Script id="trackdesk-conversion-script" dangerouslySetInnerHTML={{
    __html: `
      (function(t,d,k){(t[k]=t[k]||[]).push(d);t[d]=t[d]||t[k].f||function(){(t[d].q=t[d].q||[]).push(arguments)}})(window,"trackdesk","TrackdeskObject");
      trackdesk("robocop", "conversion", {
        "conversionType": "sale"
      });
    `
  }} />
</>
