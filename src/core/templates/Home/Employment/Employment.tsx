import { ImageConstant } from "@/core/constants";

export const Employment = () => {
  return (
    <section className="text-center my-container mt-20">
      <h3 className="font-bold text-[40px]">Employment</h3>
      <div className="flex items-center flex-col lg:flex-row md:flex-row gap-4 mt-4">
        <div className="w-full lg:w-[50%] md:w-[50%]">
          <img
            src={ImageConstant.Employee}
            className="w-full lg:w-[560px] md:w-[560px] lg:h-[560px] md:h-[560px] bg-contain"
            alt="Get To Know"
          />
        </div>
        <div className="text-center w-full lg:w-[50%] md:w-[50%] bg-[#1e1e1e] h-[560px] p-4 flex flex-col justify-center items-center">
          <p className="text-sm mt-2 mx-[100px]">
            Interested in joining a team of professional security guards? Please
            send your resume and cover letter to info@signaturesecurity.org. We
            look forward to hearing from you!
          </p>
        </div>
      </div>
    </section>
  );
};
