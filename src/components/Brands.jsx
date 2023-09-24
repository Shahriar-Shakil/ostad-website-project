async function getData() {
  const BASE = process.env.BASE_URL;
  const res = await fetch(`${BASE}/api/BrandList`);

  return res.json();
}
const Brands = async () => {
  const data = await getData();

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h3 className="mb-16 text-2xl font-heading">
          Trusted by brands all over the world
        </h3>
        <div className="flex flex-wrap -mx-2">
          {data.map((item) => {
            return (
              <div
                key={item.id}
                className="mb-12 lg:mb-0 w-full md:w-1/2 lg:w-1/4 px-2"
              >
                <img className="mx-auto h-8" src={item["image"]} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Brands;
