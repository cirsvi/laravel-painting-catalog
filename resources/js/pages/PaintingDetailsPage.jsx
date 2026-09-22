import SelectedPaintingView from "../components/paintings/SelectedPaintingView";
import RelatedPaintingSection from "../components/paintings/RelatedPainting";

export default function PaintingPage({
  selectedPaintingID,
  handlePaintingSelection,
  handleGoingBack,
}) {
  return (
    <>
      <SelectedPaintingView
        selectedPaintingID={selectedPaintingID}
        handleGoingBack={handleGoingBack}
      />
      <RelatedPaintingSection
        selectedPaintingID={selectedPaintingID}
        handlePaintingSelection={handlePaintingSelection}
      />
    </>
  );
}
