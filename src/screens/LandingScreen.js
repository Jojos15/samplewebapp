import React from 'react';

const LandingScreen = () => {

    const buttonHandler = (e) => {
        e.preventDefault();
        console.log("Clicked biatch")
    };

    return (
        <div>
            <div className="row justify-content-center">
                <h1 className="col-12 text-center">Hey fellow walker!</h1>
            </div>
            <div className="row justify-content-center">
                <h5 className="col-12 text-center">Please enter your name below to start using the app</h5>
            </div>
            <form onSubmit={buttonHandler} className="row justify-content-center w-100">
                <div className="col-5 ">
                    <input className="form-control form-control-lg" type="text" placeholder="Your Amazing Name"></input>
                </div>
                <div className="col-5">
                    <button type="submit" className="btn btn-outline-primary btn-lg btn-block" onClick={buttonHandler}>Go!</button>
                </div>
            </form>
        </div>
    );
}

export default LandingScreen;