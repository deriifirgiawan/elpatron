import { Button } from "@/core/components";
import { navbarData } from "./data";
import Link from "next/link";
import { ImageConstant } from "@/core/constants";
import Image from "next/image";

export const Navbar = () => {
  const { Facebook, Instagram, Twitter } = ImageConstant;
  const listSocialMedia = [
    {
      id: 1,
      title: "facebook",
      url: Facebook,
    },
    {
      id: 2,
      title: "instagram",
      url: Instagram,
    },
    {
      id: 3,
      title: "twitter",
      url: Twitter,
    },
  ];
  return (
    <nav className="my-container lg:py-10 md:py-10 py-6">
      <div className="flex justify-between items-center pb-4 border-b mt-4">
        <div className="flex items-center gap-4">
          <div className="w-[32px] h-[32px] rounded-full bg-slate-200" />
          <div>
            <h3 className="text-[22px] font-bold">El-Patron Security</h3>
            <p className="text-[15px]">(PPO #120623)</p>
          </div>
        </div>

        <Button variant="outline" className="rounded-full bg-transparent">
          Get In Touch
        </Button>
      </div>

      <div className="flex justify-between items-center flex-col md:flex-col lg:flex-row">
        <div className="mt-4 flex flex-wrap justify-center">
          {navbarData.map((item, index) => (
            <Link
              key={`${item.name}--${index}`}
              className="text-sm pr-6 lg:mb-0 md:mb-0 mb-4"
              href={item.url}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex md:mt-4 flex-wrap justify-center">
          <Link href="#" className="text-sm pr-6">
            info@el-patron.id
          </Link>
          <Link href="#" className="text-sm pr-6">
            (661) 567-0005
          </Link>
          {listSocialMedia.map((item, index) => (
            <Link
              key={`${item.title}--${index}`}
              className="text-sm pr-6"
              href="#"
            >
              <Image src={item.url} alt={item.title} width={24} height={24} />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
