export default function Features() {
  return (
    <>
      <div className="w-full mx-auto border-b border-gray-800 px-4 sm:px-6 md:px-8 lg:px-14 py-6 sm:py-8 md:py-9 bg-black">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Feature 1: Fully Customizable */}
          <div className="">
            {/* Icon Container - Centered on small screens only */}
            <div className="w-70 h-50 mb-8 relative mx-auto md:mx-0">
              <img
                src="image1.png"
                alt="Fully customizable chatbot interface"
                className="w-full h-full hover:scale-105 transition-transform duration-300"
              />
              {/* Optional: Add hover effects or overlays */}
              <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <h3 className="text-2xl text-heading-24 font-semibold md:mt-6 mb-6">
              Fully customizable
            </h3>
            <p className="text-[16px] font-medium leading-relaxed mx-auto text-[hsla(0,0%,63%,1)]">
              Customize your chatbot to fit the needs of your enterprise
              business or even your hobby project.
            </p>
          </div>

          {/* Feature 2: Up to Date */}
          <div className="">
            {/* Icon Container - Centered on small screens only */}
            <div className="w-70 h-50 mb-8 relative mx-auto md:mx-0">
              <img
                src="image2.png"
                alt="Up to date with latest advancements"
                className="w-full h-full hover:scale-105 transition-transform duration-300"
              />
              {/* Optional: Add hover effects or overlays */}
              <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <h3 className="text-2xl text-heading-24 font-semibold md:mt-6 mb-6">
              Up to date
            </h3>
            <p className="text-[16px] font-medium leading-relaxed mx-auto text-[hsla(0,0%,63%,1)]">
              Stay up to date with the advancements in user experience and model
              capabilities like artifacts and reasoning.
            </p>
          </div>

          {/* Feature 3: Best Practices */}
          <div className="">
            {/* Icon Container - Centered on small screens only */}
            <div className="w-70 h-50 mb-8 relative mx-auto md:mx-0">
              <img
                src="image3.png"
                alt="Best practices implementation"
                className="w-full h-full hover:scale-105 transition-transform duration-300"
              />
              {/* Optional: Add hover effects or overlays */}
              <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <h3 className="text-2xl leading-6 font-semibold mb-6">
              Best practices
            </h3>
            <p className="text-[16px] font-medium mx-auto text-[hsla(0,0%,63%,1)]">
              We ensure the chatbot follows best practices so you can focus on
              building the important parts.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
