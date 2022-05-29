import TeamCard from "components/TeamCard";
import React from "react";
import teamMember1 from "assets/images/teamMember1.png";
import teamBlob from "assets/images/team-blob.png";

function Team() {
  return (
    <div>
      <div className="container relative">
        <img
          src={teamBlob}
          className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[-1]"
          alt=""
        />
        <h1 className="title mb-12">Team</h1>

        <div className="flex justify-between space-x-6">
          <TeamCard img={teamMember1} title="Bezalel E Raviv" />
          <TeamCard title="Yorik Ben David" />
          <TeamCard title="Hilla Srour" />
          <TeamCard title="Yoad Nevo" />
          <TeamCard title="Asher Bitansky" />
          <TeamCard title="Nir Asaf" />
          <TeamCard title="Joe Yu" />
        </div>
      </div>
    </div>
  );
}

export default Team;
