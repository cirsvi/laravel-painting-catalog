import Loader from "../components/ui/Loader";
import ErrorMessage from "../components/ui/ErrorMessage";
import TopPaintingView from "../components/paintings/TopPaintingsView";
import { API_BASE } from "../config.js";
import { useFetch } from "../hooks/useFetch.jsx";

export default function Homepage({ handlePaintingSelection }) {
  const { data: topPaintings, isLoading, error } = useFetch(`${API_BASE}/data/get-top-paintings`);

  return (
    <>
      {isLoading && <Loader />}
      {error && <ErrorMessage msg={error} />}

      {!isLoading && !error && topPaintings?.length === 0 && (
        <p className="text-gray-300 text-center py-12 text-xl">No paintings yet.</p>
      )}

      {!isLoading &&
        !error &&
        topPaintings?.length > 0 &&
        topPaintings.map((painting, index) => (
          <TopPaintingView
            painting={painting}
            key={painting.id}
            index={index}
            handlePaintingSelection={handlePaintingSelection}
          />
        ))}
    </>
  );
}
