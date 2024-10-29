import { listServiceData } from "./data";

export const ListService = () => {
  return (
    <section className="my-container mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
      {listServiceData.map((item, index) => (
        <div key={`${item.title}--${index}`} className="w-full bg-[#1E1E1E]">
          <img src={item.imageUrl} />
          <div className="text-center w-full px-6 lg:px-20 md:px-20 pb-20 mt-12">
            <h4 className="text-lg font-bold">{item.title}</h4>
            <p className="text-md mt-12 leading-6">{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};
