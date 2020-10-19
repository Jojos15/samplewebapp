import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Landing = () => {

    const [nameInput, setNameInput] = useState("");
    let history = useHistory();

    useEffect(() => {
        const name = localStorage.getItem('walker-name');
        if (name) {
            history.push(`/${name}`);
        }
    }, []);

    const buttonHandler = (e) => {
        e.preventDefault();
        localStorage.setItem('walker-name', nameInput);
        history.push(`/${nameInput}`);
    };

    return (
        <div className="row align-items-center justify-content-center danger-height">
            <div className="animate__animated animate__fadeIn">
                <div className="row justify-content-center">
                    <h1 className="col-12 text-center">Hey fellow walker!</h1>
                </div>
                <div className="row justify-content-center animate__animated animate__fadeInUp">
                    <h5 className="col-12 text-center">Please enter your name below and hit Go! to start using the app <span role="img">🏃‍♀ 🏃‍♂️</span></h5>
                </div>
                <form onSubmit={buttonHandler} className="row justify-content-center w-100 animate__animated animate__fadeInUp">
                    <div className="col-lg-6 col-md-6 col-6 ml-1">
                        <input className="form-control form-control-lg" type="text" value={nameInput}
                            onChange={e => setNameInput(e.target.value)} placeholder="Your Amazing Name"></input>
                    </div>
                    <div className="col-lg-3 col-md-6 col-6">
                        <button type="submit" className="btn btn-outline-primary btn-lg btn-block" onClick={buttonHandler}>Go!</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Landing;