import RegisteredTeam from "@/components/RegisteredTeam";
import React from "react";

export default function AllTeam() {
  return (
    <>
      <RegisteredTeam />
    </>
  );
}

export function generateMetadata() {
  return {
    title: "All Teams",
    description:
      "All Teams: Explore registered teams, their sports, player counts, and match locations. Join  the sports community today",
    keywords:
      "All Team, Registered Teams, Sports Teams, Team Sports, Player Counts, Match Locations, Joi Teams, Community Teams,Team Directory, Sports Enthusiasts.",
    robots: "index, follow",
    language: "EN",
  };
}
