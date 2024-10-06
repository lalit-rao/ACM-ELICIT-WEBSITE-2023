import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { footerLogocombined, footerLogoMain, insta, linktree } from "../assets/images/index.js";

function Footer() {
  return (
    <div
      className="w-full flex flex-col justify-center items-center pb-4 md:px-0 px-10 bg-[linear-gradient(0deg,#130125,#3d007a)]
      lg:rounded-tl-[50px] lg:rounded-tr-[50px]
      md:rounded-tl-[40px] md:rounded-tr-[40px]
      rounded-tl-[30px] rounded-tr-[30px]"
    >
      <div
        className="icon lg:w-[80px] md:w-[70px] w-[60px] lg:h-[80px] md:h-[70px] h-[60px] rounded-full bg-[#130125] mt-4 flex items-center justify-center relative group hover:cursor-pointer md:hover:w-[170px] sm:hover:w-[120px] hover:w-[120px] duration-500"
      >
        <img
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-800 ease-in opacity-100 group-hover:opacity-0"
          src={footerLogoMain}
          alt="Icon"
        />
        <div
          className="absolute flex items-center justify-between space-x-8 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
        >
          <a href="https://www.instagram.com/elicitmuj?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
            <img
                src={insta}
                alt="Instagram Icon"
                className="w-[24px] h-[24px] md:w-[30px] md:h-[30px]"
            />
          </a>
          <a href="https://linktr.ee/elicit24">
            <img
                src={linktree}
                alt="Linktree Icon"
                className="w-[24px] h-[24px] md:w-[30px] md:h-[30px]"
            />
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center max-w-full px-4">
        <div className="flex flex-col items-center gap-4 md:flex-row md:mt-3 mt-5 md:justify-between">
          <img
            src={footerLogocombined}
            alt="Logo"
            className="w-[150px] sm:w-[200px] h-auto"
          />
          <span className="text-white text-[20px] sm:text-[24px] font-bold text-center relative md:top-0.5">
            Association For Computing Machinery
          </span>
        </div>
        <div className="h-[2px] bg-white w-full max-w-[773px] mt-2"></div>
        <div className="text-center mt-2">
          <p className="text-white text-[16px] sm:text-[20px] font-semibold">
            Developed by Elicit Web Development Team
          </p>
          <p className="text-white text-[12px] sm:text-[16px] font-thin">
            © Elicit 2024. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
