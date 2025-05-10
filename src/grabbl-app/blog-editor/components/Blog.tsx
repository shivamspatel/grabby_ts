import { useState } from 'react';
import { Edit } from 'lucide-react';
import { BlogProvider } from './BlogContext';
import BlogDropdown from './BlogDropdown';
import BlogEditor from './BlogEditor';


function Editor() {
  const [activeTab, setActiveTab] = useState<'edit' >('edit');

  return (
    <BlogProvider>
      <div className="min-h-screen bg-[#D40C0C]">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-serif font-bold text-gray-900">Blog Editor</h1>
              <div className="w-64">
                <BlogDropdown />
              </div>
            </div>
          </div>
        </header>
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-6">
            <div className="sm:hidden">
              <select
                onChange={(e) => setActiveTab(e.target.value as 'edit')}
                value={activeTab}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="edit">Edit</option>
               
              </select>
            </div>
            
            <div className="hidden sm:block">
              <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-8">
                  <button
                    onClick={() => setActiveTab('edit')}
                    className={`
                      flex items-center whitespace-nowrap py-4 px-6 rounded-t-lg font-medium text-sm
                      ${activeTab === 'edit'
                        ? 'bg-white text-black border-2 border-b-0'
                        : 'bg-white text-black hover:bg-gray-50'}
                    `}
                  >
                    <Edit className="mr-2 h-5 w-5" />
                    Edit Blog
                  </button>
                  
                  
                </nav>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-6">
              
                <BlogEditor />
              
            </div>
          </div>
        </main>
      </div>
    </BlogProvider>
  );
}

export default Editor;