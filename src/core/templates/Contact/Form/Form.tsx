import { Button, Input, Textarea } from "@/core/components";
import { ImageConstant } from "@/core/constants";

export const Form = () => {
  return (
    <section className="w-full my-container">
      <section className="bg-[#1E1E1E] pb-12">
        <img
          src={ImageConstant.BANNER_CONTACT}
          className="w-full h-[365px] bg-cover"
        />

        <div className="mt-12 text-center">
          <h3 className="font-bold text-[40px]">We Want To Hear From You</h3>

          <div className="mt-6 px-32 grid grid-cols-2 gap-4">
            <Input
              className="rounded-none bg-transparent border border-white text-white placeholder:text-white"
              placeholder="Name"
            />
            <Input
              className="rounded-none bg-transparent border border-white text-white placeholder:text-white"
              placeholder="Email"
            />

            <div className="col-span-2">
              <Input
                className="rounded-none bg-transparent border border-white text-white placeholder:text-white"
                placeholder="Subject"
              />
            </div>
            <div className="col-span-2">
              <Textarea
                className="rounded-none bg-transparent border border-white text-white placeholder:text-white"
                placeholder="Type your message here..."
              />
            </div>

            <div className="col-span-2">
              <Button className="w-full bg-white text-black rounded-none">
                Submit
              </Button>
            </div>
          </div>

          <div className="mt-12 text-start px-32">
            <h3>Email:</h3>
            <h3 className="mt-6">Info@el-patron.id</h3>
            <h3 className="mt-6">Phone:</h3>
            <h3 className="mt-6">(661) 567-0005</h3>
          </div>
        </div>
      </section>
    </section>
  );
};
