import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
const Navbar = () => {
  return (
    <div>
      <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
          <h2 className="text-4xl font-extrabold tracking-wide">Orkhan.A</h2>
        </div>
        <div className="m-8 flex items-center gap-4 text-2xl">
          <FaLinkedin />
          <FaGithub />
          <FaInstagram />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
