import Loader from "../ui/Loader.jsx";
import ErrorMessage from "../ui/ErrorMessage.jsx";
import GoBackBtn from "../ui/GoBackButton.jsx";
import { API_BASE } from "../../config.js";
import { useFetch } from "../../hooks/useFetch.jsx";

export default function SelectedPaintingView({ selectedPaintingID, handleGoingBack }) {
  const {
    data: selectedPainting,
    isLoading,
    error,
  } = useFetch(`${API_BASE}/data/get-painting/` + selectedPaintingID);

  return (
    <>
      {isLoading && <Loader />}
      {error && <ErrorMessage msg={error} />}
      {!isLoading && !error && (
        <>
          <div className="relative flex flex-wrap md:flex-row pb-10 overflow-hidden">
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center custom-background-container-selected-painting"
              style={{
                backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.1)), url(${selectedPainting.image})`,
              }}
            ></div>

            <div className="absolute inset-0 w-full h-full custom-border"></div>

            <div className="relative order-2 md:order-1 md:pt-12 md:basis-1/2 md:px-12">
              <h1 className="relative text-3xl leading-9 font-semibold text-gray-100 mb-2">
                "{selectedPainting.title}"
              </h1>
              <p className="relative text-2xl leading-7 font-medium text-gray-200 mb-4 italic">
                {selectedPainting.artist}
              </p>
              <p className="relative text-lg leading-7 font-light text-gray-100 mb-4">
                {selectedPainting.description}
              </p>

              <dl className="relative mb-4 md:flex md:flex-wrap md:flex-row">
                <div className="mb-2 md:basis-full">
                  <dt className="font-bold inline">Year: </dt>
                  <dd className="inline">{selectedPainting.year}</dd>
                </div>
                <div className="mb-2 md:basis-full">
                  <dt className="font-bold inline">Style: </dt>
                  <dd className="inline">{selectedPainting.style}</dd>
                </div>
                <div className="mb-2 md:basis-full">
                  <dt className="font-bold inline">Location: </dt>
                  <dd className="inline">{selectedPainting.location}</dd>
                </div>
              </dl>
            </div>
            <div className="relative order-1 md:order-2 md:pt-12 md:px-12 md:basis-1/2 shadow-xs">
              <img
                src={selectedPainting.image}
                alt={selectedPainting.title}
                className="p-1 mx-auto"
              />
            </div>
          </div>
          <div className="mb-12 flex flex-wrap pt-2">
            <GoBackBtn handleGoingBack={handleGoingBack} />
          </div>
        </>
      )}
    </>
  );
}
