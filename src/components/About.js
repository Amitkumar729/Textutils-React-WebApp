import React from "react";

export default function About(props) {
  
  let myStyle = {
    color: props.mode === 'dark' ? 'white' : "#181818",
    backgroundColor: props.mode === 'dark' ? '#181818' : "white"
  }

  // const [btntext, setbtntext] = useState("Enable Dark mode");

  // const toggleStyle = () => {
  //   if (myStyle.color == "black") {
  //     setMyStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //       border: "0.6px solid white",
  //     });
  //     setbtntext("Disable Dark mode");
  //   } else {
  //     setMyStyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //     setbtntext("Enable Dark mode");
  //   }
  // };

  let myStyle1 = {
    display: "flex",
    justifyContent: "center",
  };

  return (
    <div className="container" style={myStyle}>
      <h2>About us</h2>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Analyze Your Text!
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              It is shown by default, until the collapse plugin adds the
              appropriate classNamees that we use to style each element. These
              classNamees control the overall appearance.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Free to use
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              It is hidden by default, until the collapse plugin adds the
              appropriate classNamees that we use to style each element. These
              classNamees control the overall appearance, as well as the showing
              and hiding via CSS transitions.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              fast working
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              It is hidden by default, until the collapse plugin adds the
              appropriate classNamees that we use to style each element. These
              classNamees control the overall appearance, as well as the showing
              and hiding via CSS transitions.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-2" style={myStyle1}>
        <button onClick={toggleStyle} className="btn btn-primary ">
          {btntext}
        </button>
  </div>*/}
    </div>
  );
}
