

type TreeInfoProps = {
  tree: {
    name: string;
    description: string;
    benefits: string[];
    price: number;
    images: string[];
  };
  goBack: () => void;
};

const TreeInfoPage = ({ tree, goBack }: TreeInfoProps) => {
  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold text-green-800 mb-4">{tree.name}</h1>
      <p className="text-green-700 mb-6">{tree.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {tree.images.map((img, index) => (
          <img key={index} src={img} alt={tree.name} className="rounded-2xl shadow-lg" />
        ))}
      </div>

      <ul className="text-left mb-6 text-green-700">
        {tree.benefits.map((benefit, index) => (
          <li key={index}>🌿 {benefit}</li>
        ))}
      </ul>

      <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 mb-4">
        Purchase for ₹{tree.price}
      </button>

      <button onClick={goBack} className="text-green-600 underline hover:text-green-800">
        ← Back to Trees
      </button>
    </div>
  );
};

export default TreeInfoPage;
