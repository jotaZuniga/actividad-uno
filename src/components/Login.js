import { useEffect, useState } from "react";
import "../assets/css/login.css";

export const Login = ({onLoginComplete, code}) => {
    const [error, setError] = useState(false);
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onLoginComplete(username, password);
    }


    const handleOnUserChange = (event) => {
        setUserName(event.target.value);
    }


    const handleOnPasswordChange = (event) => {
        setPassword(event.target.value);
    }

    useEffect(() => {
        const forms = document.querySelectorAll('.needs-validation');
        Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
              if (!form.checkValidity()) {
                setError(true);
                event.preventDefault()
                event.stopPropagation()
              }
        
              form.classList.add('was-validated')
            }, false)
          })
    }, []);

    return (
        <section className="gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-dark text-white" style={{borderRadius: '1rem'}}>
                            <div className="card-body p-5 text-left">
                                <form onSubmit={handleSubmit} className="needs-validation" noValidate>
                                    <div className="mb-md-5 mt-md-4 pb-5">
                                        <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                        <p className="text-white-50 mb-5">Please enter your login and password!</p>

                                        <div className={`p-3 mb-2 bg-danger text-white rounded ${error || code !== 200 ? 'd-block' : 'd-none'} `}>Invalid user or password</div>

                                        <div className="form-outline form-white mb-4">
                                            <label className="form-label" htmlFor="username">User</label>
                                            <input autoComplete="" type="text" id="username" onChange={handleOnUserChange} className="form-control form-control-lg" required/>
                                        </div>

                                        <div className="form-outline form-white mb-4">
                                            <label className="form-label" htmlFor="password">Password</label>
                                            <input autoComplete="current-password" type="password" id="password" onChange={handleOnPasswordChange} className="form-control form-control-lg" required/>
                                        </div>
                                        <button className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>
                                        <div className="d-flex justify-content-center text-center mt-4 pt-1">
                                            <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                                            <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                                            <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}