import './App.css';

function Name() {
    return (
       <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/image.jpeg'})`,
       height: "100vh",
       width:"100vw",
       backgroundPosition: 'center',
       backgroundSize: 'cover',
       backgroundRepeat: 'no-repeat'
       }}>

        <div className="titleDiv">
           <label className="welcomeMsg">
               Welcome to Mood-Lifters
           </label>
           <div>
           <label className="stressMsg">
                Live Life Stress Free!
            </label>
           </div>
        </div>
        <div className="nameBlock">

            <label className="enterName">
                What would you like me to call you?
            </label>
            <input type="text" className="textBox"></input>
            <button className="getStarted"> Get Started</button>
           <div>
               
           </div>
        </div>
       </div> 
    )
}

export default Name;