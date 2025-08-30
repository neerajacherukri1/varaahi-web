import React from "react";
import "./clients.css";

import jackhenry from "../../../assests/images/jackhenry.png";
import amazon from "../../../assests/images/amazon.png";
import cbre from "../../../assests/images/cbre.png";
import generac from "../../../assests/images/generac.png";
import hologic from "../../../assests/images/hologic.png";
import discover from "../../../assests/images/discover.png";

const Clients: React.FC = () => {
  return (
    <div className="clients-section">
      <h2 className="clients-title">
          Our
    <span className="cli-underline">&nbsp; Cli</span>
    <span className="e-underline">e</span>
    nts
  </h2>
      <div className="clients-logos">
        <img src={jackhenry} alt="Jack Henry" />
        <img src={amazon} alt="Amazon" />
        <img src={cbre} alt="CBRE" />
        <img src={generac} alt="Generac" />
        <img src={hologic} alt="Hologic" />
        <img src={discover} alt="Discover" />
      </div>
    </div>
  );
};

export default Clients;
