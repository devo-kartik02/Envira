import { Leaf, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import TreeInfoPage from './TreeInfoPage';

const VanaSaya = () => {
  const [selectedTree, setSelectedTree] = useState<TreePackage | null>(null);
  
  type TreePackage = {
    name: string;
    description: string;
    benefits: string[];
    price: number;
    images: string[];
  };
  

  const treePackages: TreePackage[] = [
    {
      name: 'Neem Tree',
      description: 'A tree known for its medicinal benefits and air-purifying qualities.',
      benefits: [
        'Improves air quality',
        'Boosts immunity',
        'Has medicinal uses for skin and hair'
      ],
      price: 300,
      images: ['/Images/neem1.jpeg', '/Images/neem2.jpeg'],
    },
    {
      name: 'Peepal Tree',
      description: 'Sacred and oxygen-rich tree, known to support biodiversity.',
      benefits: [
        'Helps reduce air pollution',
        'Supports local wildlife',
        'Offers medicinal benefits'
      ],
      price: 400,
      images: ['/Images/peepal1.jpeg', '/Images/peepal2.jpeg'],
    },
    {
      name: 'Bamboo',
      description: 'Fast-growing tree that plays a major role in reducing deforestation.',
      benefits: [
        'Grows rapidly',
        'Requires less water',
        'Used for construction and furniture'
      ],
      price: 250,
      images: ['/Images/bamboo1.jpeg', 'Images/bamboo2.jpeg'],
    }
  ];
  

  if (selectedTree) {
    return <TreeInfoPage tree={selectedTree} goBack={() => setSelectedTree(null)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 flex flex-col items-center p-8">
      <motion.div 
        className="text-center mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold text-green-800 mb-2">Welcome to VanaSaya 🌿</h1>
        <p className="text-green-700 text-lg">Plant a tree today and earn a token of gratitude from nature.</p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {treePackages.map((tree, index) => (
          <motion.div 
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
          >
            <Leaf className="text-green-500 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold text-green-800 mb-2">{tree.name}</h3>
            <p className="text-gray-600 mb-4">Support reforestation by purchasing {index + 1 * 5} trees.</p>
            <button
            onClick={() => setSelectedTree(tree)}
            className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 flex items-center gap-2">
            <CheckCircle className="w-4 h-4" />
            Adopt & Earn Tokens
            </button>

          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="mt-10 text-center text-green-800"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <p>Every tree you plant contributes to a greener future. 🌍</p>
      </motion.div>
    </div>
  );
};

export default VanaSaya;
