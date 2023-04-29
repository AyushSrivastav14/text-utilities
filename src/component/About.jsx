import React, { useState } from 'react';

export default function About(props) {
    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
    // const [btnTxt, setBtnTxt] = useState("Enable Dark Mode")
    // const toggleStyle = () => {
    //     if (myStyle.color === 'black') {
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '1px solid white'
    //         })
    //         setBtnTxt("Enable Light Mode")
    //     }
    //     else {
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white',
    //             border: '1px solid black'
    //         })
    //         setBtnTxt("Enable Dark Mode")
    //     }
    // }
    return (
        <div className='container' >
            <h1>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button style={{ backgroundColor: props.mode === "light" ? "white" : "#0d031f", color: props.mode === "light" ? "black" : "white" }} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            About Text-Utilities
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{ backgroundColor: props.mode === "light" ? "white" : "#0d031f", color: props.mode === "light" ? "black" : "white" }}>
                            Welcome to our <strong>Text-Utilities</strong> web application! Our platform offers a wide range of tools designed to help you manipulate and manage text quickly and easily.
                            Whether you need to format your text, extract information, or perform complex operations, our platform has got you covered. We understand the importance of efficiency, accuracy, and convenience, which is why we have developed a comprehensive set of text utilities that can assist you in achieving your goals with just a few clicks.
                            Our application offers various features, including text case converter, character count, word count, text sorting, text replacement, and many more. With these tools, you can quickly manipulate your text to meet your needs, saving you valuable time and effort.
                            Our platform is user-friendly and straightforward to use. You don't have to be a computer expert to navigate our site. All you need is an internet connection, and you're ready to start using our text utilities. We've designed our interface to be intuitive and straightforward, ensuring that you can get started without any hassle.
                            At our text utilities web application, we are committed to providing our users with the highest quality service. We are continually updating our tools to ensure that they are up to date and can meet your needs. Our platform is also secure and reliable, meaning you can trust us with your confidential information.
                            In summary, our text utilities web application is an essential tool for anyone who works with text on a daily basis. Whether you're a student, writer, or professional, our platform can help you save time, increase productivity, and achieve your goals with ease. So why wait? Start exploring our platform today and experience the benefits of our text utilities for yourself!
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button style={{ backgroundColor: props.mode === "light" ? "white" : "#0d031f", color: props.mode === "light" ? "black" : "white" }} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            About Creator
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{ backgroundColor: props.mode === "light" ? "white" : "#0d031f", color: props.mode === "light" ? "black" : "white" }}>
                            Hi there! I'm <strong>Ayush Srivastav</strong>. I belong to Basti, U.P., India. Currently, I'm pursuing B.Tech in Electronics Engineering from Rajkiya Engineering College Sonbhadra. I'm a web developer, I have a very keen interest in HTML, CSS, JavaScript, React Js, Angular Js, Python and other technologies. I love to read about new technologies, astronomical science, history, politics, mythology, philosophy, and poetry.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button style={{ backgroundColor: props.mode === "light" ? "white" : "#0d031f", color: props.mode === "light" ? "black" : "white" }} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            More
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{ backgroundColor: props.mode === "light" ? "white" : "#0d031f", color: props.mode === "light" ? "black" : "white" }}>
                            To know more about me, please visit to my <a target='blank' href="https://portfolio.ayushsri.repl.co/">Portfolio</a>. <br /> Thank You!
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container my-3">
                <button onClick={toggleStyle} type="button" className="btn btn-primary">{btnTxt}</button>
            </div> */}
        </div>
    )
}
