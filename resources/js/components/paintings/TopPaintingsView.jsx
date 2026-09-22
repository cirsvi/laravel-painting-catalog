import SeeMoreBtn from "../ui/SeeMoreButton";

export default function TopPaintingView({ painting, index, handlePaintingSelection }) {
  return (
    <div className="relative mb-8 py-8 flex flex-wrap md:flex-row overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center custom-background-container-homepage"
        style={{ backgroundImage: `url(${painting.image})` }}
      ></div>

      <div className="absolute inset-0 w-full h-full custom-border"></div>

      <div
        className={`order-2 px-12 md:basis-1/2 ${index % 2 === 1 ? "md:order-1 md:text-right" : ""}`}
      >
        <p className="mb-4 text-3xl leading-9 font-medium text-gray-100 relative">
          {painting.title}
        </p>

        <p className="mb-4 text-xl leading-7 text-gray-100 line-clamp-3 md:line-clamp-4 lg:line-clamp-5">
          {painting.description}
        </p>

        <div className="relative">
          <SeeMoreBtn paintingID={painting.id} handlePaintingSelection={handlePaintingSelection} />
        </div>
      </div>
      <div
        className={`order-1 md:basis-1/2 ${index % 2 === 1 ? "md:order-2" : ""}md:px-1 relative`}
      >
        <img
          src={painting.image}
          alt={painting.title}
          className="p-1 w-full md:w-[400px] h-full md:h-[400px] object-cover mx-auto shadow-md"
        />
      </div>
    </div>
  );
}
