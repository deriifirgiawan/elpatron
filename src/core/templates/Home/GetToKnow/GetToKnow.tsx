import { ImageConstant } from "@/core/constants";

export const GetToKnow = () => {
  return (
    <section className="flex flex-col lg:flex-row md:flex-row items-center my-container mt-20">
      <div className="w-full md:w-[50%] lg:w-[50%]">
        <img
          src={ImageConstant.BANNER3}
          className="w-full lg:w-[560px] md:w-[560px] lg:h-[560px] md:h-[560px] bg-contain"
          alt="Get To Know"
        />
      </div>
      <div className="text-center w-full md:w-[50%] lg:w-[50%] lg:mt-0 md:mt-0 mt-4">
        <h3 className="font-bold text-[40px]">Get To Know</h3>
        <p className="text-sm mt-2">
          Looking for quality security guards you can depend on? Well, look no
          further. We are Signature Security, available wherever you need us
          when you need us. Since 2014, we’ve been committed to being the best
          at what we do. We serve clients in the Greater Los Angeles area by not
          just meeting their expectations, but exceeding them.
        </p>
      </div>
    </section>
  );
};
