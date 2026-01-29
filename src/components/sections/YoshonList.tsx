import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { Input } from '../ui/input'; // This should work after creating the file
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'; // This should work after creating the file
import yoshonProductsData from '../../data/yoshon-products.json';

const YoshonList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const products = yoshonProductsData;

  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return products;

    const query = searchQuery.toLowerCase();
    return products.filter((product) => {
      const brand = (product.Brand || '').toLowerCase();
      const productName = (product['Product Name'] || '').toLowerCase();
      const yoshon = (product.Yoshon || '').toLowerCase();
      
      return brand.includes(query) || productName.includes(query) || yoshon.includes(query);
    });
  }, [products, searchQuery]);

  return (
    <section id="yoshon-list" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">Yoshon Products List</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Search and browse Yoshon certified products
          </p>
        </div>

        <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-md">
          {/* Search Bar */}
          <div className="p-4 border-b">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search by brand, product name, or status..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
                data-testid="yoshon-search-input"
              />
            </div>
            <div className="mt-2 text-sm text-gray-500">
              {filteredProducts.length} of {products.length} products
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/4">Brand</TableHead>
                  <TableHead className="w-1/2">Product Name</TableHead>
                  <TableHead className="w-1/4">
                    Yoshon
                    <div className="text-xs font-normal text-blue-600 mt-1">
                      *Made in Israel is always Yoshon
                    </div>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProducts.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={3} className="text-center py-8 text-gray-500">
                      {searchQuery ? 'No products found matching your search.' : 'No products available.'}
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredProducts.map((product, index) => (
                    <TableRow key={index} data-testid={`product-row-${index}`}>
                      <TableCell className="font-medium">{product.Brand}</TableCell>
                      <TableCell>{product['Product Name']}</TableCell>
                      <TableCell>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          product.Yoshon?.includes('Certified') 
                            ? 'bg-green-100 text-green-800'
                            : product.Yoshon?.includes('N/A')
                            ? 'bg-gray-100 text-gray-800'
                            : product.Yoshon?.includes('When Marked')
                            ? 'bg-yellow-100 text-yellow-800'
                            : product.Yoshon?.includes('Upon Review')
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {product.Yoshon}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>

          {/* Footer Note */}
          {filteredProducts.length > 0 && (
            <div className="p-4 bg-gray-50 border-t">
              <p className="text-sm text-gray-600 flex items-center">
                <span className="text-blue-600 font-medium mr-2">Note:</span>
                *Made in Israel is always Yoshon
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default YoshonList;