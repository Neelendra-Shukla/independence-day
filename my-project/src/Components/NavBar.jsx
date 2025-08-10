

const NavBar = () => {


  return (
    <>
      <div className="flex mt-5 justify-around items-center static">
        <h1 className="font-bold text-5xl capitalize ">India</h1>
        <div>
          <ul className="flex gap-10">
              <li className="hover:scale-140 text-md">
                <a href="home">Home</a>
              </li>
              <li className="hover:scale-140 text-md">
                <a href="home">Freedom</a>
              </li>
              <li className="hover:scale-140 text-md">
                <a href="home">Present</a>
              </li>
              <li className="hover:scale-140 text-md">
                <a href="home">Technology</a>
              </li>
              <li className="hover:scale-140 text-md">
                <a href="home">Future</a>
              </li>
              <li className="hover:scale-140 text-md">
                <a href="home">Contact</a>
              </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
