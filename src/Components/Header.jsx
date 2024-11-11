import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="back">
        <h1>azad</h1>
        <div className="right">
    <Link to="/">home</Link>
    <Link to="/contact">contact</Link>
    <Link to="/about">about</Link>
    <Link to="/product">product</Link>
          {/* <a href="/">Home</a>
          <a href="/product">product</a>
          <a href="/contact">contact</a>
          <a href="/about">about</a> */}

          {/*2 aur yaha mene define kiya h ki url me kya hoga simple jisse waha pta chal sake ki url me konsa page dalna h*/}
        </div>
      </div>
    </>
  );
};

export default Header;
