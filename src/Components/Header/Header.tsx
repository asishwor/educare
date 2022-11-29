import { Nav, Logo, NavList, ButtonWrapper } from "./Header.style";

const Header = () => {
  return (
    <div className="container">
      <Nav>
        <Logo>
          <img src="./images/logo.png" alt="website Logo" />
        </Logo>
        {/* navlist  content */}
        <div>
          <NavList>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Course</a>
            </li>
            <li>
              <a href="">Mentors</a>
            </li>
            <li>
              <a href="">Testimonials</a>
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
