import { Button } from "@/core/components";

export const AreaOfService = () => {
  const listService = [
    {
      id: 1,
      title: "Permanent Details",
      descriptions: "A set, ongoing long-term schedule for guard service.",
    },
    {
      id: 2,
      title: "Temporary Details",
      descriptions:
        "Whether you need 3 days or 12 months of guard service, we are ready to help and will provide you what you need on your schedule.",
    },
    {
      id: 3,
      title: "Emergency Service",
      descriptions:
        "When an urgent situation arises, have a guard on-site within 24 hours.",
    },
    {
      id: 4,
      title: "Concierge Service",
      descriptions:
        "Hire a guard to watch over your private residential property,  condominium, or apartment building.",
    },
    {
      id: 5,
      title: "Fire Watch Service",
      descriptions:
        "Protect your people, assets, and equipment from fire hazards.",
    },
  ];
  return (
    <section className="flex flex-col justify-center items-center text-center mt-12 my-container">
      <h1 className="font-bold text-[40px]">Area Of Services</h1>

      <h5 className="mt-6 text-lg">
        We are committed to meeting all of your security needs.
      </h5>

      <div className="mt-4">
        {listService.map((item, index) => {
          return (
            <div key={index} className="mb-12">
              <p className="font-bold text-sm underline">{item.title}</p>
              <p className="italic text-xs mt-2">{item.descriptions}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-6">
        <Button variant="outline" className="bg-transparent rounded-full">
          See All Services
        </Button>
      </div>
    </section>
  );
};
