import { ImageConstant } from "@/core/constants";

export const Privacy = () => {
  return (
    <section className="text-center my-container mt-20">
      <div className="flex items-center flex-col lg:flex-row md:flex-row gap-4 mt-4">
        <div className="w-full md:w-[50%] lg:w-[50%]">
          <img
            src={ImageConstant.Privacy}
            className="w-full md:h-[1100px] lg:h-[1100px] bg-contain"
            alt="Get To Know"
          />
        </div>
        <div className="text-center w-full md:w-[50%] lg:w-[50%] p-4 flex flex-col justify-center items-center">
          <h3 className="font-bold text-[40px]">Privacy Policy</h3>
          <p className="text-lg mt-12 mx-0 lg:mx-[100px] md:mx-[100px]">
            A Privacy Policy agreement is required by law if you collect
            personal data about your site visitors. Customize the details of
            your policy to reflect the steps in place to protect your users’
            information
          </p>

          <p className="text-md mt-12 mx-0 lg:mx-[100px] md:mx-[100px]">
            Introduction
            <br />
            Signature Security is committed to protecting the data collected
            pertaining to our users. This policy details the collection, use,
            and protection of personal information We receive from site
            visitors. By entering our website you consent to use of cookies as
            pertaining to the terms of this policy.
          </p>

          <p className="text-md mt-12 mx-0 lg:mx-[100px] md:mx-[100px]">
            Data Collection <br />
            Signature Security collects the minimum amount of personally
            identifiable information necessary to improve our site and the
            service We provide. Data We collect includes any or all of the
            information we provide while using our website and/or services.
          </p>

          <p className="text-md mt-12 mx-0 lg:mx-[100px] md:mx-[100px]">
            Use of Information
            <br />
            Signature Security may use the personal information collected
            through our site specifically for the purposes detailed in this
            policy. Personal information that We process for any reasons won’t
            be kept longer than is necessary for those purposes. We will take
            reasonable measures to prevent the loss or misuse of your personal
            information
            <br />
            (e.g. encryption).
          </p>
        </div>
      </div>
    </section>
  );
};
