import Copyrights from "../../generics/Copyrights";
import SocialNetworks from "../../generics/SocialNetworks";

const Footer = (): JSX.Element => {
  return (
    <div className="grid grid-cols-2 fixed bottom-0 w-full text-white bg-black h-24 z-10 mt-20 px-6 md:px-20 xl:px-60">
      <div className="flex items-center justify-center">
        <Copyrights />
      </div>
      <div className="flex items-center justify-center">
        <SocialNetworks />
      </div>
    </div>
  );
};

export default Footer;
