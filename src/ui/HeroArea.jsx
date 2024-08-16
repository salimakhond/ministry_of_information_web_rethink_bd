const HeroArea = () => {
  return (
    <div
      className="hero min-h-[420px]"
      style={{
        backgroundImage:
          "url(https://upload.wikimedia.org/wikipedia/commons/4/4e/National_Assembly_of_Bangladesh_%28%E0%A6%9C%E0%A6%BE%E0%A6%A4%E0%A7%80%E0%A6%AF%E0%A6%BC_%E0%A6%B8%E0%A6%82%E0%A6%B8%E0%A6%A6_%E0%A6%AD%E0%A6%AC%E0%A6%A8%29.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="container">
        <div className="hero-content lg:gap-8 lg:justify-normal flex-col lg:flex-row">
          <img
            src="https://seeklogo.com/images/G/govt-bangladesh-logo-D1143C363F-seeklogo.com.png"
            className="max-w-[120px] rounded-lg shadow-2xl"
          />
          <div>
            <h2 className="text-4xl lg:text-5xl lg:text-left text-center text-white font-bold">
              Ministry of Information and Broadcasting
            </h2>
            <p className="py-4 text-xl lg:text-2xl lg:text-left text-center text-white font-normal">
              Government of the Peoples Republic of Bangladesh
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroArea;
