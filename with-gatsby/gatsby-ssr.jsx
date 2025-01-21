const React = require("react")

const HeadComponents = [
  <React.Fragment key="trackdesk-script">
    <script src="https://cdn.trackdesk.com/tracking.js" />
    <script id="trackdesk-click-script" dangerouslySetInnerHTML={{
        __html: `
          (function(t,d,k){(t[k]=t[k]||[]).push(d);t[d]=t[d]||t[k].f||function(){(t[d].q=t[d].q||[]).push(arguments)}})(window,"trackdesk","TrackdeskObject");
          trackdesk("robocop", "click");
        `
      }}
    />
  </React.Fragment>
]

exports.onRenderBody = ({
  setHeadComponents,
}) => {
  setHeadComponents(HeadComponents)
}