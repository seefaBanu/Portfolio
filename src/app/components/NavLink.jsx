import { Link } from "next-view-transitions";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-lightText dark:text-darkText"
    >
      {title}
    </Link>
  );
};

export default NavLink;
