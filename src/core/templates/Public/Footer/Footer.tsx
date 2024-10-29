import { Button, Input } from "@/core/components";
import { ImageConstant } from "@/core/constants";
import Image from "next/image";
import Link from "next/link";

const { Facebook, Instagram, Twitter } = ImageConstant;
export const Footer = () => {
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
    <footer className="w-full flex flex-col justify-center items-center mt-12 mb-12">
      <h5 className="font-bold text-2xl">El-Patron Security</h5>
      <h5 className="font-bold text-lg mt-6">Subscribe Form</h5>

      <div className="w-full md:w-[400px] lg:w-[400px] mt-4">
        <Input
          className="rounded-none bg-transparent border border-white text-white placeholder:text-white"
          placeholder="Email"
        />

        <Button className="w-full bg-white text-black rounded-none mt-2">
          Submit
        </Button>
      </div>

      <div className="flex flex-col justify-center items-center mt-12">
        <p className="text-center">
          info@signaturesecurity.org
          <br />
          (661) 567-0005 18401
          <br />
          Burbank Blvd Ste 220, Tarzana, CA 91356
        </p>
        <div className="flex gap-2 mt-4">
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
    </footer>
  );
};
