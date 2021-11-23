import React from "react";
import LottieControl from "../components/LottieControl";
import comingSoon from "../animation/comingSoon.json";

export default function ComingSoon() {
  return <LottieControl width={400} height={100} animation={comingSoon} />;
}
