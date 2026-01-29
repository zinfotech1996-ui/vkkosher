import React, { useState } from 'react';
import { Book, Video, FileText, ExternalLink } from 'lucide-react';
import { Resource } from '../../types';

const resources: Resource[] = [
  {
    id: '1',
    title: 'Understanding Kosher Basics',
    description: 'An introductory guide to kosher dietary laws and principles.',
    link: '/vkweb1/files/טבלא להפרשת חלה.pdf',
    type: 'article'
  },
  {
    id: '2',
    title: 'Kosher Symbols Explained',
    description: 'Learn to identify and understand various Volove Kashrus certification symbols.',
    link: '/vkweb1/files/טבלא להדלקת התנור עם קאלום לטעלעפאון - LOC Chefs Kingdom 5784.pdf',
    type: 'guide'
  },
  // {
  //   id: '3',
  //   title: 'The Certification Process',
  //   description: 'A step-by-step video walkthrough of our certification procedure.',
  //   link: '#',
  //   type: 'video'
  // },
  {
    id: '4',
    title: 'Kosher for Passover Guidelines',
    description: 'Special considerations for Passover certification and products.',
    link: '/vkweb1/files/פריינד מכירת חמץ תשפה - Xanthan - Gefen Alert Chulent.pdf',
    type: 'article'
  },
  {
    id: '5',
    title: 'Manufacturing Kosher Products',
    description: 'Best practices for maintaining kosher standards in production.',
    link: '/vkweb1/files/Xanthan.pdf',
    type: 'guide'
  },
  {
    id: '6',
    title: 'Common Kosher Ingredients',
    description: 'A comprehensive list of commonly used kosher ingredients.',
    link: '/vkweb1/files/Xanthan.pdf',
    type: 'article'
  }
];

const Resources: React.FC = () => {
  // const [activeFilter, setActiveFilter] = useState<'all' | 'article' | 'video' | 'guide'>('all');
  const [activeFilter, setActiveFilter] = useState<'all' | 'article' | 'video' | 'guide'>('all');
  const filteredResources = activeFilter === 'all' 
    ? resources 
    : resources.filter(resource => resource.type === activeFilter);

  const getIcon = (type: 'article' | 'video' | 'guide') => {
    switch (type) {
      case 'article':
        return <FileText className="h-5 w-5 text-blue-500" />;
      case 'video':
        return <Video className="h-5 w-5 text-red-500" />;
      case 'guide':
        return <Book className="h-5 w-5 text-green-500" />;
    }
  };

  // return (
  //   <section id="resources" className="py-20 bg-gray-50">
  //     <div className="container mx-auto px-4 md:px-6">
  //       <div className="text-center mb-16">
          {/* <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">Educational Resources</h2> */}
          {/* <div className="w-24 h-1 bg-gold mx-auto mb-6"></div> */}
        //   <p className="max-w-2xl mx-auto text-gray-600 text-lg">
        //     Expand your knowledge about kosher practices with our collection of educational materials.
        //   </p>
        // </div>

        // <div className="flex justify-center mb-8">
        //   <div className="inline-flex rounded-md shadow-sm" role="group">
        //     <button
        //       type="button"
        //       className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
        //         activeFilter === 'all'
        //           ? 'bg-navy text-white'
        //           : 'bg-white text-gray-700 hover:bg-gray-100'
        //       }`}
        //       onClick={() => setActiveFilter('all')}
        //     >
        //       All Resources
        //     </button>
        //     <button
        //       type="button"
        //       className={`px-4 py-2 text-sm font-medium ${
        //         activeFilter === 'article'
        //           ? 'bg-navy text-white'
        //           : 'bg-white text-gray-700 hover:bg-gray-100'
        //       }`}
        //       onClick={() => setActiveFilter('article')}
        //     >
        //       Articles
        //     </button>
        //     <button
        //       type="button"
        //       className={`px-4 py-2 text-sm font-medium ${
        //         activeFilter === 'video'
        //           ? 'bg-navy text-white'
        //           : 'bg-white text-gray-700 hover:bg-gray-100'
        //       }`}
        //       onClick={() => setActiveFilter('video')}
        //     >
              {/* Videos
            </button>
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                activeFilter === 'guide'
                  ? 'bg-navy text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveFilter('guide')}
            > */}
  //             Guides
  //           </button>
  //         </div>
  //       </div>

  //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  //         {filteredResources.map((resource) => (
  //           <div key={resource.id} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
  //             <div className="p-6">
  //               <div className="flex items-center mb-4">
  //                 {getIcon(resource.type)}
  //                 <span className="ml-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
  //                   {resource.type}
  //                 </span>
  //               </div>
  //               <h3 className="font-serif text-xl font-bold text-navy mb-2">{resource.title}</h3>
  //               <p className="text-gray-600 mb-4">{resource.description}</p>
  //               <a
  //                 href={resource.link}
  //                 className="inline-flex items-center text-gold hover:text-gold/80 font-medium"
  //                 target="_blank"
  //                 rel="noopener noreferrer"
  //               >
  //                 Read More <ExternalLink className="ml-1 h-4 w-4" />
  //               </a>
  //             </div>
  //           </div>
  //         ))}
  //       </div>

  //       <div className="mt-12 text-center">
  //         <a 
  //           href="#"
  //           className="inline-block bg-navy text-white font-bold py-3 px-8 rounded-md transition-transform hover:scale-105"
  //         >
  //           View All Resources
  //         </a>
  //       </div>
  //     </div>
  //   </section>
  // );
};

export default Resources;