import { PropertyProps } from "@/interfaces";
import BookingSection from "./BookingSection";
import ReviewSection from "./ReviewSection";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10 text-black">
      {/* Property Heading */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold">{property.name}</h1>
        <div className="flex items-center gap-4 text-sm text-gray-700 mt-2">
          <span className="text-yellow-500 font-semibold">{property.rating} ★</span>
          <span>{property.address.city}, {property.address.country}</span>
        </div>
      </div>

      {/* Hero Image Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
          alt="Main"
          className="rounded-lg w-full h-72 object-cover md:col-span-2"
        />
        <img
          src="https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=800&q=80"
          alt="Side"
          className="rounded-lg w-full h-72 object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1623174206683-5efc1f5cbf2a?auto=format&fit=crop&w=800&q=80"
          alt="Third"
          className="rounded-lg w-full h-72 object-cover md:col-span-3"
        />
      </div>

      {/* Main Layout: Info + Booking */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Property Info */}
        <div className="flex-1 space-y-8">
          {/* Description */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">About this place</h2>
            <p className="bg-gray-100 p-4 rounded-lg leading-relaxed">
              {property.description}
            </p>
          </section>

          {/* Amenities */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">What this place offers</h2>
            <ul className="flex flex-wrap gap-2">
              {property.category.map((item, index) => (
                <li key={index} className="bg-gray-200 px-4 py-2 rounded-full text-sm font-medium">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Reviews */}
          <ReviewSection reviews={property.reviews} />
        </div>

        {/* Booking */}
        <aside className="w-full lg:w-1/3">
          <BookingSection price={property.price} />
        </aside>
      </div>
    </div>
  );
};

export default PropertyDetail;
