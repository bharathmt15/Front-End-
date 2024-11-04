import React from "react";

export default function Login() {
    return (
        <>
            <div className="login">
                <form className="form">
                    <div className="form-title">
                        <span>sign in to your</span>
                    </div>
                    <div className="title-2">
                        <span>SPACE</span>
                    </div>
                    <div className="input-container">
                        <input
                            className="input-mail"
                            type="email"
                            placeholder="Enter email"
                        />
                        <span> </span>
                    </div>

                    <section className="bg-stars">
                        <span className="star"></span>
                        <span className="star"></span>
                        <span className="star"></span>
                        <span className="star"></span>
                    </section>

                    <div className="input-container">
                        <input
                            className="input-pwd"
                            type="password"
                            placeholder="Enter password"
                        />
                    </div>
                    <button type="submit" className="submit">
                        <span className="sign-text">Sign in</span>
                    </button>

                    <p className="signup-link">
                        No account?
                        <a href="/" className="up">
                            Sign up!
                        </a>
                    </p>
                </form>
            </div>
        </>
    );
}
