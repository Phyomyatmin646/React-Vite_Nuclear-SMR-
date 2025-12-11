import ImageSlider from '../components/ImageSlider';
import LocationMap from '../components/LocationMap';
import ImageSlider1 from '../components/ImageSlider1';


const Home = () => {
  return (
    <div className="min-h-screen">
      <section>
        <ImageSlider />
      </section>
          <section
            className=" py-8 md:py-12 text-blue-900 rounded-lg bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1581090700227-9b0b3c1e1d38?auto=format&fit=crop&w=1470&q=80')",
            }}
          >
            <div className="max-w-5xl mx-auto text-center px-4">
              <h2 className="text-5xl md:text-4xl font-bold mb-4">
                Problem Statement
              </h2><br></br>
              <p className="text-base md:text-lg leading-relaxed text-justify">
                Chin State currently faces a severe development bottleneck due to a crippling lack of reliable, high-capacity electricity, hindering all prospects for modern industrial and agricultural growth. The region's challenging mountainous terrain and reliance on intermittent renewable sources—such as seasonally reduced hydropower and unpredictable solar capacity—prevent the establishment of the continuous, stable energy supply required for high-value operations like Data Centers and efficient cold-chain agriculture. To transition the region from energy poverty to productive self-sufficiency, this proposal mandates a resilient, small-footprint baseload source. We, therefore, select Small Modular Reactors (SMRs) as the strategic energy anchor. SMR technology offers the necessary 24/7 reliability, high power density, and geographic flexibility to power the entire integrated 4D development ecosystem, guaranteeing the stable foundation required for a successful and modern agricultural revolution in the highlands.
              </p>
            </div>
          </section>
 
          <section className="py-12 md:py-16 lg:py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
      Small Nuclear Reactors (SNR)
      </h2>
      <p className="text-gray-700 text-sm md:text-base leading-relaxed">
        Small Nuclear Reactors (SNRs) are compact,  safe, and efficient nuclear  power plants that provide reliable,  continuous energy even in remote  areas like Chin State. Unlike large reactors,  SMRs can be scaled and deployed quickly, supporting modern agriculture, cold  storage, and industrial growth. They ensure stable electricity for irrigation, food processing,  and research, while reducing dependence on fossil fuels and lowering emissions. With built-in safety features, SMRs are a sustainable solution  to power local communities, boost economic growth, and promote advanced farming practices.</p>
    </div>

    <div>
      <ImageSlider1 />
    </div>
  </div>
</section>


     
<section className="py-12 md:py-16 lg:py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 text-center mb-8 md:mb-12">
      Small Nuclear Reactor for Agriculture
    </h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg border-l-4 border-blue-900
                      transition-all duration-300 hover:shadow-xl
                     hover:blue-900 hover:translate-x-1 hover:-translate-y-1
                      hover:bg-blue-50 hover:backdrop-blur-sm">
        <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-3 md:mb-4">
          Our Thinking
        </h3>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          By choosing Small Nuclear Reactors, we aim to provide reliable, clean energy that supports irrigation, food processing, and sustainable farming. 
    This solution balances modern technology with local needs, ensuring safety, efficiency, and long-term community benefits.
  
        </p>
      </div>

     
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg border-l-4 border-blue-900
                      transition-all duration-300 hover:shadow-xl
                     hover:blue-900 hover:translate-x-1 hover:-translate-y-1
                      hover:bg-blue-50 hover:backdrop-blur-sm">
        <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-3 md:mb-4">
          Benefits for Agriculture
        </h3>
        <ul className="space-y-2 text-gray-700 text-sm md:text-base">
          <li className="flex items-start gap-2">
            <span className="text-blue-600 mt-1">•</span>
            Reliable power for irrigation systems
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 mt-1">•</span>
            Energy for food processing facilities
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 mt-1">•</span>
            Power for agricultural research centers
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 mt-1">•</span>
            Support for cold storage facilities
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 mt-1">•</span>
            Clean energy for sustainable farming
          </li>
        </ul>
      </div>

      
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg border-l-4 border-blue-900
                      transition-all duration-300 hover:shadow-xl
                      hover:blue-900 hover:translate-x-1 hover:-translate-y-1
                      hover:bg-blue-50 hover:backdrop-blur-sm md:col-span-2 lg:col-span-1">
        <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-3 md:mb-4">
          Our Mission
        </h3>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          To revolutionize agriculture in Chin State through clean nuclear energy,
          enhancing food security, supporting local farmers, and promoting
          sustainable development in the region.
        </p>
      </div>
    </div>
  </div>
</section>



  
      <section className="py-12 md:py-16 lg:py-20 bg-blue-50">
        <LocationMap />
      </section>


      <section className="py-12 md:py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
            Join Us in Building a Sustainable Future
          </h2>
          <p className="text-blue-100 mb-6 md:mb-8 text-sm md:text-base">
            Learn more about how our SNR project is transforming agriculture in Chin State
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-900 px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-sm md:text-base"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;