import "./nav.css";
import { Link } from "react-router";

export default function Navegation({ page }) {
    return (
        <nav className="navbar navbar-expand-md px-2 py-5 p-sm-5 sticky-top">
            <div className="container-fluid justify-content-between aling-items-center">
                <h1>
                    <Link to="/" className="link-home p-5">
                        Rick & Morty
                    </Link>
                </h1>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="d-flex justify-content-center justify-content-md-end w-100 pt-5 pt-md-0">
                        <ul className="navbar-nav">
                            <li
                                className={`nav-item me-md-3 link-item ${page === "character" ? "active" : ""}`}>
                                <Link to="/Characters">Characters</Link>
                            </li>
                            <li
                                className={`nav-item mt-3 mt-md-0 me-md-3 link-item ${page === "contact" ? "active" : ""}`}>
                                <Link to="/Contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
