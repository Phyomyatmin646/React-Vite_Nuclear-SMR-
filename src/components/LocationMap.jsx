const LocationMap = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 text-center mb-6 md:mb-8">
        Our Location - Chin State, Myanmar
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
        {/* Map Image */}
        <div className="lg:col-span-2">
 
<iframe
  title="Wide Map of Chin/Shan State"
  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d377497.123456!2d94.018647!3d23.197569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smm!4v1700000000000&markers=23.197569,94.018647"
  className="w-full h-[300px] md:h-[410px] rounded-lg shadow-lg"
  loading="lazy"
></iframe>

</div>


        {/* Location Info */}
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
          <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-4 md:mb-6">
            Strategic Location
          </h3>
          <ul className="space-y-3 md:space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-xl md:text-2xl">📍</span>
              <span className="text-gray-700 text-sm md:text-base">Chin State, Myanmar</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-xl md:text-2xl">🏙</span>
              <span className="text-gray-700 text-sm md:text-base">Near Kalay City</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-xl md:text-2xl">🌊</span>
              <span className="text-gray-700 text-sm md:text-base">Close to River for cooling water</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-xl md:text-2xl">🌾</span>
              <span className="text-gray-700 text-sm md:text-base">Serving agricultural communities</span>
            </li>
          </ul>
          
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Our strategic location ensures efficient energy distribution to local farms 
              and agricultural facilities throughout the region.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;