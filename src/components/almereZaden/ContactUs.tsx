const ContactUs = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-around items-start gap-8 bg-gray-100 p-8 rounded-lg shadow-md">
      {/* Left Section */}
      <div className="max-w-md">
        <h2 className="text-2xl font-bold text-sunset-orange leading-loose mb-4">
          Get in Touch With Us
        </h2>
        <p className="text-gray-700 text-sm mb-6">
          Feel free to reach out to us anytime!
        </p>

        <p className="text-gray-800 font-medium mb-3">Email Address:</p>
        <div className="flex gap-4 mt-3">
          <a
            href="#"
            className="text-sunset-orange hover:text-sunset-orange/80 transition-all"
            aria-label="Facebook"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 8 19"
            >
              <path
                fillRule="evenodd"
                d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="#"
            className="text-sunset-orange hover:text-sunset-orange/80 transition-all"
            aria-label="Twitter"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 17"
            >
              <path
                fillRule="evenodd"
                d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="#"
            className="text-sunset-orange hover:text-sunset-orange/80 transition-all"
            aria-label="GitHub"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="max-w-lg w-full bg-white p-6 rounded-lg shadow-md">
        <form className="flex flex-col gap-4">
          <div>
            <label
              htmlFor="msg"
              className="block text-sm mb-2 text-[21px] text-sunset-orange "
            >
              Message:
            </label>
            <textarea
              id="msg"
              className="mt-1 p-2 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-sunset-orange focus:outline-none sticky top-20"
              placeholder="Enter your message"
              rows={4}
              style={{ resize: "none" }}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-sunset-orange hover:bg-orange-500 transition text-white rounded-lg px-6 py-2 font-medium"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
