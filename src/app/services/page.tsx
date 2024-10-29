import { Button, MainLayout, Services } from "@/core";

export default function ServicePage() {
  return (
    <MainLayout>
      <Services.AreaOfService />
      <Services.ListService />
      <div className="mt-12 flex flex-col justify-center items-center text-center w-full">
        <h5 className="text-sm">
          We would love the opportunity to work with you. Get in touch with us
          today.
        </h5>

        <Button variant="outline" className="bg-transparent rounded-full mt-12">
          Contact Us
        </Button>
      </div>
    </MainLayout>
  );
}
