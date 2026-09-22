import { useState } from "react";
import "../css/loader.css";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Homepage from "./pages/HomePage";
import PaintingPage from "./pages/PaintingDetailsPage";

export default function App() {
  const [selectedPaintingID, setSelectedPaintingID] = useState(null);

  function handlePaintingSelection(paintingID) {
    setSelectedPaintingID(paintingID);
  }

  function handleGoingBack() {
    setSelectedPaintingID(null);
  }

  return (
    <>
      <div className="custom-bg-dark-gray min-h-screen text-white custom-main-font">
        <Header />
        <main className="mb-8 px-2 md:container md:mx-auto">
          {selectedPaintingID ? (
            <PaintingPage
              selectedPaintingID={selectedPaintingID}
              handlePaintingSelection={handlePaintingSelection}
              handleGoingBack={handleGoingBack}
            />
          ) : (
            <Homepage handlePaintingSelection={handlePaintingSelection} />
          )}
        </main>
        <Footer />
      </div>
    </>
  );
}
