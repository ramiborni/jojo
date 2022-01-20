const Loading = () => {
  return (
    <section className="flex justify-center">
      <div className="flex items-center justify-center space-x-1 animate-pulse">
        <div className="w-4 h-4 bg-red-400 rounded-full"></div>
        <div className="w-4 h-4 bg-red-400 rounded-full"></div>
        <div className="w-4 h-4 bg-red-400 rounded-full"></div>
      </div>
    </section>
  );
};

export default Loading;
