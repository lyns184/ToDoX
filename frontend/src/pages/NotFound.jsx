const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-center bg-slate-50">
      <img
        src="/404_NotFound.png"
        alt="404 Not Found"
        className="max-w-full mb-6 w-96"
      />

      <p className="text-xl font-semibold">Cấm địa</p>

      <a
        href="/"
        className="px-6 py-3 inline-block mt-6 font-medium text-white transition shadow-md bg-primary rounded-2xl hover:bg-primary-dark"
      >
        Quay về trang chủ
      </a>
    </div>
  );
};

export default NotFound;
