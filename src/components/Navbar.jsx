import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  const [navbarColor, setNavbarColor] = useState("bg-customBlue"); // State to manage navbar color
  const [navImage, setNavImage] = useState("../Logos/logo-white.png");
  const [navItemsColor, setNavItemsColor] = useState("text-white");
  const [buttonBorder, setButtonBorder] = useState(" border-white");
  const [hoverb1, setHoverb1] = useState(false);
  const [hoverb2, setHoverb2] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition < 100) {
      setNavbarColor("bg-customBlue");
      setNavImage("../Logos/logo-white.png");
      setNavItemsColor("text-white");
      setButtonBorder(" border-white");

      // Change color when scrolled down past certain point
    } else {
      setNavbarColor("bg-white fixed");
      setNavImage("../Logos/logo-blue.png");
      setNavItemsColor("text-customBlue");
      setButtonBorder("border-[0.8px] border-customBlue");
      // Revert to default color when scrolled up
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [dropdowns, setDropdowns] = useState({
    product: false,
    industry: false,
    resources: false,
    services: false,
    company: false,
    sdms: false,
  });

  const [timeoutIds, setTimeoutIds] = useState({
    product: null,
    industry: null,
    resources: null,
    services: null,
    company: null,
    sdms: null,
  });

  const handleDropdownEnter = (dropdown) => {
    clearTimeout(timeoutIds[dropdown]);
    const timeoutId = setTimeout(() => {
      setDropdowns((prevState) => ({
        ...prevState,
        [dropdown]: true,
      }));
    }, 500); // Set your desired delay here (in milliseconds)
    setTimeoutIds((prevState) => ({
      ...prevState,
      [dropdown]: timeoutId,
    }));
  };

  const handleDropdownLeave = (dropdown) => {
    clearTimeout(timeoutIds[dropdown]);
    const timeoutId = setTimeout(() => {
      setDropdowns((prevState) => ({
        ...prevState,
        [dropdown]: false,
      }));
    }, 500); // Set your desired delay here (in milliseconds)
    setTimeoutIds((prevState) => ({
      ...prevState,
      [dropdown]: timeoutId,
    }));
  };

  const navData = [
    {
      title: "Products",
      id: "product",
      dropMenu: [
        "Qualis LIMS",
        "Logilab SDMS",
        "Logilab ELN",
        "Qualis DMS",
        "Interfacer",
      ],
    },
    {
      title: "Industry",
      id: "industry",
      dropMenu: [
        "Pharmaceutical",
        "Life Sciences & Biotech Industry",
        "Contract Research Organisation",
        "Healthcare & Diagnostics",
        "Dairy, Food & Beverage",
        "Oil & Gas Industry",
        "Chemical",
        "Manufacturing",
        "Cell and Gene Therapy",
      ],
    },
    {
      title: "Resources",
      id: "resources",
      dropMenu: [
        "Brochures",
        "Publications",
        "Videos",
        "Help Center",
        "Helpdesk Portal",
        "Blog",
      ],
    },
    {
      title: "Services",
      id: "services",
      dropMenu: [
        "Professional Services",
        "Implementation Methodology",
        "Training",
        "Support",
      ],
    },
    {
      title: "Company",
      id: "company",
      dropMenu: ["About Us", "Partners", "Careers", "Certifications"],
    },
  ];

  return (
    <nav
      className={`w-full  h-16 md:h-24 px-52 flex space-x-6 items-center justify-center top-0 z-50 transition-all duration-300 ${navbarColor} shadow-md`}
    >
      <div className=" flex md:justify-center items-center md:w-full max-w-4xl px-4 md:space-x-0 space-x-14 justify-between">
        <img
          src={navImage}
          alt="Logo"
          height="100"
          className="mr-10 w-32 h-auto md:w-44 "
        />
        <div className="md:hidden text-white ">
          <FontAwesomeIcon icon={faBars} />
        </div>
        <ul
          className={`font-nunito ${navItemsColor} md:flex space-x-10 items-center hidden`}
        >
          {navData.map(({ title, id, dropMenu }) => (
            <li
              key={id}
              onMouseEnter={() => handleDropdownEnter(id)}
              onMouseLeave={() => handleDropdownLeave(id)}
              className={`relative ${navItemsColor} `}
            >
              <button className="">{title}</button>
              {dropdowns[id] && (
                <div
                  id={`dropdown-${id}`}
                  className={`absolute justify-center top-full left-0 mt-1 animation-fade bg-white shadow-md py-4 z-50 ${
                    dropMenu.length > 7
                      ? "grid grid-cols-2 w-[588px] max-h-64 gap-x-4"
                      : " w-60"
                  }`}
                  onMouseEnter={() => handleDropdownEnter(id)}
                  onMouseLeave={() => handleDropdownLeave(id)}
                >
                  {/* Splitting dropMenu into two columns */}
                  <div className="flex flex-col  px-4">
                    {dropMenu
                      .slice(0, Math.ceil(dropMenu.length / 2))
                      .map((item, index) => (
                        <div key={index} href="#">
                          <a
                            className="inline-block mx-4 my-2 text-sm text-gray-700 relative hover:text-customBlue cursor-pointer
                           transition-all before:content-[''] before:absolute before:-bottom-0.5 before:left-0 before:w-0 before:h-0.5 before:opacity-0
                           before:transition-all before:duration-500 before:bg-customBlue hover:before:w-full hover:before:opacity-100"
                          >
                            {item}
                          </a>
                        </div>
                      ))}
                  </div>

                  <div className="flex flex-col pb- px-4">
                    {dropMenu
                      .slice(Math.ceil(dropMenu.length / 2))
                      .map((item, index) => (
                        <div key={index} href="#">
                          <a
                            className="inline-block mx-4 my-2 text-sm text-gray-700 relative hover:text-customBlue cursor-pointer
                           transition-all before:content-[''] before:absolute before:-bottom-0.5 before:left-0 before:w-0 before:h-0.5 before:opacity-0
                           before:transition-all before:duration-500 before:bg-customBlue hover:before:w-full hover:before:opacity-100"
                          >
                            {item}
                          </a>
                        </div>
                      ))}
                  </div>
                  {/* <div className=" bg-customBlue w-ful h-0.5"></div> */}
                </div>
              )}
              <FontAwesomeIcon
                icon={faAngleDown}
                className={`absolute  w-2  pl-1 top-1/2 font-bold transform -translate-y-1/2 ${navItemsColor}`}
              />
            </li>
          ))}
          <li>
            <button>Customers</button>
          </li>
          <div className="flex space-x-2">
            <button
              onMouseEnter={() => setHoverb1(true)}
              onMouseLeave={() => setHoverb1(false)}
              className={`${buttonBorder} bg-white  text-customBlue w-36 h-10 font-bold ${
                hoverb1 ? "-translate-y-1 duration-500" : ""
              }`}
            >
              Request Demo
            </button>
            <button
              onMouseEnter={() => setHoverb2(true)}
              onMouseLeave={() => setHoverb2(false)}
              className={`${buttonBorder} bg-white  text-customBlue w-24 h-10 font-bold ${
                hoverb2 ? "-translate-y-1 duration-500" : ""
              }`}
            >
              Contact Us
            </button>
          </div>
        </ul>
      </div>
    </nav>
  );
};
