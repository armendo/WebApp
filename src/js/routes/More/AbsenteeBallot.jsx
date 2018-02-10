import React from "react";
import ReactIframeResizer from "react-iframe-resizer-super";

export default function AbsenteeBallot () {
  return <ReactIframeResizer iframeResizerOptions={{ checkOrigin: false }} id="register-to-vote-iframe" src="https://absentee.vote.org/?partner=111111&campaign=free-tools" />;
}
