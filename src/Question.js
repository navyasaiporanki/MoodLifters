import './Question.css';

function Question() {
    return (

        <div >

            <div className="bodyQuestionInfo">
                <label className="displayMessage">
                    How are you feeling today?
                </label>
                <div className="btnDiv">
                    <button className="btn">Good</button>
                </div>
                <div className="btnDiv">
                    <button className="btn">Sad</button>
                </div>
                <div className="btnDiv">
                    <button className="btn">Stressed</button>
                </div>
                <div className="btnDiv">
                    <button className="btn">Angry</button>
                </div>

                <div className="btnContinue">
                    <button className="btnCon">Continue</button>
                </div>
            </div>

        </div>
    );
}

export default Question;