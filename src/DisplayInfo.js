import './DisplayInfo.css';

function DisplayInfo() {
    return (

        <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/cloud.jpeg'})`,
        height: "100vh",
        width:"100vw",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
        }}>

            <div className="bodyDisplayInfo">
                <label className="displayMessage">
                    You are in good hands.
                </label>

                <div className="infoDiv">
                    <label>
                    Mood Lifters is a mental fitness app designed to help 
                    you build the strength to face life's ups and downs.
                    </label>
                    <br/>
                    <br/>
                    <br/>
                    <label>
                    First, just a few quick questions so we can create
                     a personalized experience just for you.
                    </label>


                </div>
                <div className="btnDiv">
                    <button className="btnContinueDisplay">Continue</button>
                </div>
                <div className="btnDiv">
                    <button className="btnSkip">Skip</button>
                </div>
            </div>

        </div>
    );
}

export default DisplayInfo;