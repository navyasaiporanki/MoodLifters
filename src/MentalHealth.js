import "./MentalHealth.css";

export default function MentalHealth() {
  return (
    <div className="healthResBody">
      <div className="title">Mental Health Resources</div>
      <div className="resources">
        <div className="row">
          <div className="rowInside">
            <div
              className="col"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/girl.jpeg"
                })`,

                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >

            </div>
            <div
              className="col"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL + "/yoga.jpg"})`,

                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >

            </div>
          </div>
          <div className="rowInside">
            <div
              className="col"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/girl.jpeg"
                })`,

                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div
              className="col"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL + "/yoga.jpg"})`,

                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>
          <div className="rowInside">
            <div
              className="col"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/girl.jpeg"
                })`,

                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div
              className="col"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL + "/yoga.jpg"})`,

                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>
          <div className="rowInside">
            <div
              className="col"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/girl.jpeg"
                })`,

                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div
              className="col"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL + "/yoga.jpg"})`,

                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="footerMentalHealth">
        {/* <button className="buttonClass"> Back to Home</button> */}
        <div className="material-icons homeFont">home</div>
        
        <div className="goToHome">
          Go to Home
        </div>
      </div>
    </div>
  );
}
