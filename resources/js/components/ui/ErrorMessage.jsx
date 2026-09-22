export default function ErrorMessage({ msg }) {
  return (
    <div className="md:container md:mx-auto bg-red-300 my-8 p-2">
      <p className="text-black">{msg}</p>
    </div>
  );
}
