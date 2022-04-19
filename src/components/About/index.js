import React from "react";

function About() {
    return (
        <div className="container d-flex flex-row-reverse">
            <div className=" p-2 about" >
                <div className="row g-0 aboutText">
                    {/* <div className="col-md-3">
                        <img
                            src={require(`../../assets/About/AboutImg.jpg`)}
                            alt="About"
                        />    </div> */}
                    
                        <div className="card-body text-even">
                            
                            <p className="card-text intro">Solution-driven professional with hands-on experience in front and backend web development. Adept at offering cutting edge engineering solutions. Skilled in managing all aspects of the web development life cycle. Capable of adding new features, fixing bugs, and revamping existing websites/apps. Well-developed understanding of collaborating and grabbing business expectations focusing on creating outstanding value and satisfaction client experience. Versatile and proven leader with remarkable efficiency in delivering effective leadership, guidance, and training to cross-functional teams. 
                            </p>
                        </div>
                    
                </div>
            </div>
        </div>
    );
}

export default About;