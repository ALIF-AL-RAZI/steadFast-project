const Card = ({ image, title, properties }) => {
    return (
      <div className="bg-gray-100 rounded-lg shadow-lg flex flex-col items-center p-5 text-center">
        <img src={image} alt={title} className="w-32 h-32 object-contain mb-5" />
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-600">{properties} Property</p>
      </div>
    );
  };
  
  export default Card;
  