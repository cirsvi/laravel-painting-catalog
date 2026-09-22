import Loader from "../ui/Loader.jsx";
import ErrorMessage from "../ui/ErrorMessage.jsx";
import SeeMoreBtn from "../ui/SeeMoreButton.jsx";
import { API_BASE } from "../../config.js";
import { useFetch } from "../../hooks/useFetch.jsx";

export default function RelatedPaintingSection({ selectedPaintingID, handlePaintingSelection }) {
  const {
    data: relatedPaintings,
    isLoading,
    error,
  } = useFetch(`${API_BASE}/data/get-related-paintings/` + selectedPaintingID);

  return (
    <>
      {isLoading && <Loader />}
      {error && <ErrorMessage msg={error} />}
      {!isLoading && !error && (
        <>
          <div className="flex flex-wrap">
            <h2 className="mb-6 text-3xl leading-8 font-light text-gray-100">Other Paintings:</h2>
          </div>
          <div className="flex flex-wrap md:flex-row md:space-x-4 md:flex-nowrap">
            {relatedPaintings.map((painting) => (
              <RelatedPaintingView
                painting={painting}
                key={painting.id}
                handlePaintingSelection={handlePaintingSelection}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
}

function RelatedPaintingView({ painting, handlePaintingSelection }) {
  return (
    <div className="mb-4 mt-3 md:basis-1/3 group custom-hover-scale">
      <img
        src={painting.image}
        alt={painting.title}
        className="md:h-[440px] md:w-[390px] object-cover md:mx-auto max-md:w-2/4 max-md:mx-auto"
      />
      <div className="p-4">
        <h3 className="text-lg leading-7 font-light text-gray-100 mb-4">{painting.title}</h3>
        <SeeMoreBtn paintingID={painting.id} handlePaintingSelection={handlePaintingSelection} />
      </div>
    </div>
  );
}
