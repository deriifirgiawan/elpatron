import { listRecentProjects } from "./data";

export const List = () => {
  return (
    <section className="my-container">
      <div className="text-center">
        <h3 className="font-bold text-[40px]">Our Work</h3>
        <p className="mt-4 text-lg">Committed to Service</p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 content-center gap-4 md:gap-6 lg:gap-6">
        {listRecentProjects.map((item, index) => (
          <div key={`${item.name}--${index}`} className="w-full mb-12">
            <h5 className="text-2xl mb-12">{item.name}</h5>
            <img
              alt={item.name}
              src={item.imageUrl}
              className="w-full h-[250px]"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
