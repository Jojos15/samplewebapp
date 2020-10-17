import React from 'react';

const LandingScreen = () => {

    const buttonHandler = (e) => {
        e.preventDefault();
        console.log("Clicked biatch")
    };

    return (
        <div className="container">
            <div className="row align-items-center justify-content-center h-100">
                <div className="row align-self-end">
                    <h1>Hey fellow walker!</h1>
                </div>
                <div className="row">
                    <h5>Please enter your name below to start using the app</h5>
                </div>
                <form onSubmit={buttonHandler} className="row align-self-start justify-content-center w-100">
                    <div className="col-5 ">
                        <input className="form-control form-control-lg" type="text" placeholder="Your Amazing Name"></input>
                    </div>
                    <div className="col-5">
                        <button type="submit" className="btn btn-outline-primary btn-lg btn-block" onClick={buttonHandler}>Go!</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LandingScreen;