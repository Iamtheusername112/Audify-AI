import React from "react";

const PadcastDetails = ({ params }: { params: { podcastId: string } }) => {
  return <p className="text-white-1">PadcastDetails for {params.podcastId} </p>;
};

export default PadcastDetails;
