import { Button } from "@relume_io/relume-ui";

function Gallery() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-[64px] leading-[72px] font-bold tracking-tight text-black mb-6">
            Faster, Cheaper, Delivery
            <br />
            for Alcohol and Snacks
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
            With Grabbl, enjoy your favorite drinks and snacks at unbeatable prices. Experience
            the convenience of quick delivery that saves you time and money compared to other
            services.
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-16">
              <Button title="Download" className="bg-[#D40C0C] text-white transform transition-transform duration-200 hover:scale-105 border-none">
  Download
              </Button>
              <Button title="Learn More" variant="tertiary" className="bg-gray-200 hover:bg-black hover:text-white transition-colors duration-200">
                Learn More
              </Button>
        </div>

        <div className="grid grid-cols-12 gap-x-4 gap-y-4 relative max-w-5xl mx-auto">
          {/* Left column */}
          <div className="col-span-2">
            <img
              src="/alc.png"
              alt="Left small rectangle 1"
              className="aspect-[2/3] overflow-hidden object-cover mb-4"
            />
            <img
              src="/app.png"
              alt="Left small rectangle 2"
              className="aspect-[2/3] overflow-hidden object-cover"
            />
          </div>

          {/* Left larger rectangle */}
          <div className="col-span-2 flex items-center">
            <img
              src="/grabbl_alc.png"
              alt="Left larger rectangle"
              className="aspect-[2/3] w-full overflow-hidden object-cover"
            />
          </div>

          {/* Middle column */}
          <div className="col-span-4 flex items-center">
            <img
              src="/grabbl_friends.png"
              alt="Middle rectangle"
              className="aspect-square w-full mx-auto overflow-hidden object-cover"
            />
          </div>

          {/* Right larger rectangle */}
          <div className="col-span-2 flex items-center">
            <img
              src="/poster.png"
              alt="Right larger rectangle"
              className="aspect-[2/3] w-full overflow-hidden object-cover"
            />
          </div>

          {/* Right column */}
          <div className="col-span-2">
            <img
              src="/grabbl_ad.png"
              alt="Right small rectangle 1"
              className="aspect-[2/3] overflow-hidden object-cover mb-4"
            />
            <img
              src="/grabbl_bag.png"
              alt="Right small rectangle 2"
              className="aspect-[2/3] overflow-hidden object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;