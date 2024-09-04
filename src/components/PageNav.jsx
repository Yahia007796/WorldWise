import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";

function PageNav() {
    return (
        <nav className={`${styles.nav} navbar`}>
            <Logo />
            <ul className="link-list">
                <li>
                    <NavLink to={"/pricing"} className="nav-link">
                        pricing
                    </NavLink>
                </li>
                <li className="nav-link">
                    <NavLink to={"/product"} className="nav-link">
                        product
                    </NavLink>
                </li>
                <li className="nav-link">
                    <NavLink
                        to={"/login"}
                        className={`${styles.ctaLink} nav-link lginlink`}
                    >
                        login
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default PageNav;
