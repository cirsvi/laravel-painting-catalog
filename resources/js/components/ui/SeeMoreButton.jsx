export default function SeeMoreBtn({ paintingID, handlePaintingSelection }) {
  return (
    <button
      className="inline-block rounded-full py-2 px-4 text-white cursor-pointer custom-button-color"
      onClick={() => handlePaintingSelection(paintingID)}
    >
      See more
    </button>
  );
}
