import board from "../../images/bord2.png";
import step from "../../images/step.png";
import david from "../../images/david.png";
import ofa_small_min from "../../images/ofa_small-min.png";
import "./Hsection5.css";

const Hsection5 = () => {
  return (
    <div className="Hsection5">
      {/* this is a flex div */}
      <div className="Hsection5_section_1">
        <div>
          <img className="img-fluid" src={ofa_small_min} alt="" />
        </div>

        <div className="Hsection5_section_1_sec_2">
          <p>Get These AMAZING Bonuses... </p>
          <p>When You Join The "One Funnel Away" Challenge Today... </p>
        </div>
      </div>
    </div>
  );
};

export default Hsection5;
