import board from "../../images/bord2.png";
import step from "../../images/step.png";
import daysbook from "../../images/30daysbook.jpg";
import onepage_computer_min from "../../images/onepage_computer-min.png";
import OFA_Testimonials_1_1_min from "../../images/OFA-Testimonials_1.1-min.png";
import two from "../../images/two.png";
import "./Hsection8.css";

const Hsection8 = () => {
  return (
    <>
      {/* this is for the flex */}
      <div className="Hsection8">
        <div className="Hsection8_dispay_flex container">
          <div className="Hsection8_dispay_flex_sec1 container">
            <img className="img-fluid" src={two} alt="" />
          </div>

          <div className="Hsection8_flex_item_2 container">
            <p className="Hsection8_flex_first_p">
              This Challenge Is NOT For Everyone!
            </p>
            <p>
              If you want to watch every day of the challenge, and say “Thanks,
              Russell! That was some great info!”{" "}
            </p>

            <p>
              If you want to watch every day of the challenge, and say “Thanks,
              Russell! That was some great info!”{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hsection8;
