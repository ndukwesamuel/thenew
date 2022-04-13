import React from "react";

// import Footer_img from "../images/one-funnel-away_logo_funnel.png";

import How from "../images/headline_ofa2-min.png";
import "./Resgistration.css";

import LoginForm from "./LoginForm";

const Resgistration = () => {
  //   const [login, setLogin] = useState(false);
  //   const [signUp, setSignUp] = useState(false);

  //   const handle = () => {
  //     console.log("working");
  //     setLogin(true);
  //     setSignUp(false);
  //   };

  //   const handleSignUP = () => {
  //     console.log("working");
  //     setLogin(false);
  //     setSignUp(true);
  //   };

  return (
    <>
      <div className="Resgistration">
        {/* <div className="Resgistration_logo_div">
          <img className="img-fluid" src={Footer_img} alt="" />
        </div> */}

        <section className="Resgistration_section">
          <div className="Resgistration_section_one">
            <LoginForm />
          </div>

          <div className="Resgistration_section_two">
            <div className="Resgistration_section_two_p">
              {/* <p> "How would You like Us to Hold You by The Hand As You </p>

              <p> Launch Your First </p>

              <p> (OR Next) Funnel ! " </p> */}

              <img className="img-fluid" src={How} alt="" />
            </div>
            <div className="Resgistration_section_two_video">
              <video className="img-fluid" controls>
                <source src="/Media/meditationss.mp4" type="video/mp4" />
              </video>
            </div>

            <p className="do_acc">Do You Accept ?</p>

            <div>
              <p> JOin The Challenge Now </p>
              <p>
                I Want Daily Training, LIVE Coaching And Accountability, From
                Day 1 To Day 30
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Resgistration;
