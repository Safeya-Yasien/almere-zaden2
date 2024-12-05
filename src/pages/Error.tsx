import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center gap-4">
      <h1 className="text-4xl font-bold text-red-600">
        Oops! Something went wrong.
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        We're sorry, but we couldn't process your request. Please try again
        later.
      </p>
      <Link
        to={"/"}
        className="bg-custom-green text-white px-4 py-2 rounded-md"
      >
        Home
      </Link>
    </div>
  );
};

export default Error;
