import React, { useState, useMemo } from 'react';
import { Search, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react';
import { Input } from '../ui/input'; // This should work after creating the file
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'; // This should work after creating the file
import yoshonProductsData from '../../data/yoshon-products.json';

type SortConfig = {
  key: string;
  direction: 'asc' | 'desc' | null;
};

const YoshonList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState<SortConfig>({ key: '', direction: null });
  const itemsPerPage = 20;
  const products = yoshonProductsData;

  const handleSort = (key: string) => {
    let direction: 'asc' | 'desc' | null = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    } else if (sortConfig.key === key && sortConfig.direction === 'desc') {
      direction = null;
    }
    setSortConfig({ key, direction });
  };

  const getSortIcon = (key: string) => {
    if (sortConfig.key !== key || sortConfig.direction === null) {
      return <ArrowUpDown className="ml-2 h-4 w-4" />;
    }
    return sortConfig.direction === 'asc' ? (
      <ArrowUp className="ml-2 h-4 w-4" />
    ) : (
      <ArrowDown className="ml-2 h-4 w-4" />
    );
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search filtering
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter((product) => {
        const brand = (product.Brand || '').toLowerCase();
        const productName = (product['Product Name'] || '').toLowerCase();
        const yoshon = (product.Yoshon || '').toLowerCase();
        
        return brand.includes(query) || productName.includes(query) || yoshon.includes(query);
      });
    }

    // Sorting
    if (sortConfig.key && sortConfig.direction) {
      result.sort((a, b) => {
        const aValue = (a[sortConfig.key as keyof typeof a] || '').toString().toLowerCase();
        const bValue = (b[sortConfig.key as keyof typeof b] || '').toString().toLowerCase();

        if (aValue < bValue) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }

    return result;
  }, [products, searchQuery, sortConfig]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredProducts, currentPage]);

  // Reset to first page when search query or sort changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, sortConfig]);

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
                  <TableHead className="w-16 font-bold">#</TableHead>
                  <TableHead 
                    className="w-1/4 font-bold cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={() => handleSort('Brand')}
                  >
                    <div className="flex items-center">
                      Brand
                      {getSortIcon('Brand')}
                    </div>
                  </TableHead>
                  <TableHead 
                    className="w-1/2 font-bold cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={() => handleSort('Product Name')}
                  >
                    <div className="flex items-center">
                      Product Name
                      {getSortIcon('Product Name')}
                    </div>
                  </TableHead>
                  <TableHead 
                    className="w-1/4 font-bold cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={() => handleSort('Yoshon')}
                  >
                    <div className="flex items-center">
                      Yoshon
                      {getSortIcon('Yoshon')}
                    </div>
                    <div className="text-xs font-normal text-blue-600 mt-1">
                      *Made in Israel is always Yoshon
                    </div>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedProducts.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center py-8 text-gray-500">
                      {searchQuery ? 'No products found matching your search.' : 'No products available.'}
                    </TableCell>
                  </TableRow>
                ) : (
                  paginatedProducts.map((product, index) => {
                    const globalIndex = (currentPage - 1) * itemsPerPage + index + 1;
                    return (
                      <TableRow key={index} data-testid={`product-row-${index}`}>
                        <TableCell className="text-gray-500 font-mono text-xs">{globalIndex}</TableCell>
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
                    );
                  })
                )}
              </TableBody>
            </Table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="p-4 border-t flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-sm text-gray-500">
                Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, filteredProducts.length)} of {filteredProducts.length} products
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setCurrentPage(1)}
                  disabled={currentPage === 1}
                  className="p-2 rounded-md border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                  title="First Page"
                >
                  <ChevronsLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded-md border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                  title="Previous Page"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                
                <div className="flex items-center px-4 text-sm font-medium">
                  Page {currentPage} of {totalPages}
                </div>

                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-md border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                  title="Next Page"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setCurrentPage(totalPages)}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-md border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                  title="Last Page"
                >
                  <ChevronsRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}

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
