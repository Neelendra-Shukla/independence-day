import "./Navbar-animation.css"

const NavBar = () => {


  return (
    <>
      <div className="flex mt-5 justify-around items-center static">
        <h1 className="font-bold text-5xl capitalize slide-up-animation">India</h1>
        <div>
          <ul className="flex gap-12 ">
              <li className="hover:scale-140 text-md slide-up-animation" >
                <a href="#head" >Home</a>
              </li>
              <li className="hover:scale-140 text-md slide-up-animation">
                <a href="#about" >Freedom</a>
              </li>
              <li className="hover:scale-140 text-md slide-up-animation">
                <a href="home" >Present</a>
              </li>
              <li className="hover:scale-140 text-md slide-up-animation">
                <a href="home" >Technology</a>
              </li>
              <li className="hover:scale-140 text-md slide-up-animation">
                <a href="home" >Future</a>
              </li>
              <li className="hover:scale-140 text-md slide-up-animation">
                <a href="home" >Contact</a>
              </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
