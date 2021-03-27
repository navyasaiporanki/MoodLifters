import './App.css';


function Option() {

    return (
        <div className="optionBody">
            <div className="titleText">
               What brings you here? 
            </div>

            <div className="options">
                <button className="buttonClass"> Reduce Stress </button>
                <button className="buttonClass"> Reduce Anxiety </button>
                <button className="buttonClass"> Better Sleep </button>
                <button className="buttonClass"> Increase Happiness </button>
                <button className="buttonClass"> Anger Management </button>
            </div>

            <div className="margin10px">
                
                    <button className="skip-continue">Skip for now</button>
                
            
              
                    <button className="continue">Continue</button>
             
            </div>

        </div>
    );
}


export default Option