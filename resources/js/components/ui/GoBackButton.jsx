export default function GoBackBtn({ handleGoingBack }) {
  return (
    <button
      className="inline-block rounded-full py-2 px-4 custom-goback-button text-white cursor-pointer"
      onClick={handleGoingBack}
    >
      Back
    </button>
  );
}
