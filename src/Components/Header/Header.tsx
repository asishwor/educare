import { Link, NavLink } from "react-router-dom";
import { Nav, Logo, NavList, ButtonWrapper } from "./Header.style";
type propsType = {
  home?: boolean;
};

const Header = (props: propsType) => {
  return (
    <div className="container">
      <Nav>
        <button className="toggle__menu ">
          <span className="mobile__menu"></span>
        </button>
        <Logo>
          <img src="./images/logo.png" alt="website Logo" />
        </Logo>
        {/* navlist  content */}
        <div>
          <NavList>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/courses">Course</NavLink>
            </li>
            <li>
              <NavLink to="/mentor">Mentors</NavLink>
            </li>
            <li>
              <NavLink
                to="/testimonials"
                style={{
                  color: props.home
                    ? "var(--clr-white)"
                    : "var(--clr-body-font)",
                }}
              >
                Testimonials
              </NavLink>
            </li>
          </NavList>
        </div>
        <ButtonWrapper>
          <button className="btn ">Login</button>
          <button className="btn btn-primary">Sign Up</button>
        </ButtonWrapper>
      </Nav>
    </div>
  );
};

export default Header;
