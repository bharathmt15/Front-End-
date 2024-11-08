import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function Login() {
    const [post, setPost] = useState({
        name: "",
        ph_no: "",
        password: "",
    });

    const navigate = useNavigate();

    const handleInput = (event) => {
        setPost({...post, [event.target.name]: event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .post("http://localhost:4000/api/test", post)
            .then((res) => {
                console.log("User registered successfully", res.data);
                navigate("/api/location");
            })
            .catch((err) => {
                console.log("Error submitting form:", err);
            });
    };

    return (
        <div className="login">
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-title">
                    <span>Welcome to Your</span>
                </div>
                <div className="title-2">
                    <span>SPACE</span>
                </div>

                <div className="input-container">
                    <input
                        className="input-name"
                        type="text"
                        placeholder="Enter name"
                        value={post.name}
                        onChange={handleInput}
                        name="name"
                    />
                </div>

                <div className="input-container">
                    <input
                        className="input-ph_no"
                        type="text"
                        placeholder="Enter phone number"
                        value={post.ph_no}
                        onChange={handleInput}
                        name="ph_no"
                    />
                </div>

                <div className="input-container">
                    <input
                        className="input-pwd"
                        type="password"
                        placeholder="Enter password"
                        value={post.password}
                        onChange={handleInput}
                        name="password"
                    />
                </div>

                <button type="submit" className="submit">
                    <span className="sign-text">Sign up</span>
                </button>

                <p className="signup-link">
                    <span>Already have an account?</span>
                    <a className="up" href="/login">
                        Login!
                    </a>
                </p>
            </form>
        </div>
    );
}
