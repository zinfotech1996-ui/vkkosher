import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Product } from '../../types';
import ProductTable from '../ui/ProductTable';

// Sample data
const allProducts: Product[] = [
  {
    id: '1',
    name: 'Organic Wheat Flour',
    company: 'Natural Mills Co.',
    category: 'Baking',
    certificationDate: '2024-01-15'
  },
  {
    id: '2',
    name: 'Pure Grape Juice',
    company: 'Vineyard Select',
    category: 'Beverages',
    certificationDate: '2024-02-20'
  },
  {
    id: '3',
    name: 'Extra Virgin Olive Oil',
    company: 'Holy Land Harvest',
    category: 'Oils',
    certificationDate: '2024-03-05'
  },
  {
    id: '4',
    name: 'Dark Chocolate Bar',
    company: 'Sweet Traditions',
    category: 'Confectionery',
    certificationDate: '2024-01-30'
  },
  {
    id: '5',
    name: 'Kosher Salt',
    company: 'Pure Elements',
    category: 'Spices',
    certificationDate: '2023-12-10'
  },
  {
    id: '6',
    name: 'Organic Honey',
    company: 'Promised Land Apiaries',
    category: 'Sweeteners',
    certificationDate: '2024-02-15'
  },
  {
    id: '7',
    name: 'Matzo Crackers',
    company: 'Traditional Bakers',
    category: 'Baking',
    certificationDate: '2024-03-01'
  },
  {
    id: '8',
    name: 'Kosher Wine',
    company: 'Holy Vineyard',
    category: 'Beverages',
    certificationDate: '2023-11-20'
  }
];

const ProductSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(allProducts);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (searchTerm.trim() === '') {
      setFilteredProducts(allProducts);
      return;
    }

    const lowercasedSearch = searchTerm.toLowerCase();
    const results = allProducts.filter(product => 
      product.name.toLowerCase().includes(lowercasedSearch) ||
      product.company.toLowerCase().includes(lowercasedSearch) ||
      product.category.toLowerCase().includes(lowercasedSearch)
    );
    
    setFilteredProducts(results);
  };

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">Search Certified Products</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Browse our database of certified kosher products to ensure your purchases meet the highest standards of kashrut.
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-10">
          <form onSubmit={handleSearch} className="flex">
            <input
              type="text"
              placeholder="Search by product name, company, or category..."
              className="flex-grow px-4 py-3 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button 
              type="submit"
              className="bg-gold text-navy px-4 py-3 rounded-r-md hover:bg-gold/90 transition-colors"
            >
              <Search className="h-5 w-5" />
            </button>
          </form>
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <ProductTable products={filteredProducts} />
        </div>

        <div className="mt-8 text-center text-gray-600">
          <p>Don't see your product? Contact us for more information or to request certification.</p>
        </div>
      </div>
    </section>
  );
};

export default ProductSearch;