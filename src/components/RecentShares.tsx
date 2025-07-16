import React, { useState } from 'react';
import { Search, Filter, File, Clock, Download, Shield, MoreVertical } from 'lucide-react';

const RecentShares: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const files = [
    {
      id: 1,
      name: 'Q4-Financial-Report.pdf',
      size: '2.4 MB',
      downloads: 12,
      maxDownloads: 50,
      status: 'Active',
      protected: true,
      expires: '2 days',
      created: '2 hours ago',
      type: 'pdf'
    },
    {
      id: 2,
      name: 'project-mockups.zip',
      size: '15.8 MB',
      downloads: 5,
      maxDownloads: null,
      status: 'Active',
      protected: false,
      expires: '6 hours',
      created: '5 hours ago',
      type: 'zip'
    },
    {
      id: 3,
      name: 'team-photo-2024.jpg',
      size: '3.2 MB',
      downloads: 25,
      maxDownloads: null,
      status: 'Expired',
      protected: false,
      expires: 'Expired',
      created: '3 days ago',
      type: 'image'
    }
  ];

  const stats = [
    { label: 'Total Files', value: '5', icon: File },
    { label: 'Active Links', value: '3', icon: Clock },
    { label: 'Total Downloads', value: '53', icon: Download },
    { label: 'Protected', value: '2', icon: Shield },
  ];

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'pdf':
        return '📄';
      case 'zip':
        return '📦';
      case 'image':
        return '🖼️';
      default:
        return '📄';
    }
  };

  const filteredFiles = files.filter(file =>
    file.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between p-6 border-b border-gray-700">
        <div>
          <h1 className="text-2xl font-bold mb-2">Recent Shares</h1>
          <p className="text-gray-400">Manage your shared files and download links</p>
        </div>
        <div className="px-3 py-1 bg-blue-500 text-white rounded-lg text-sm">
          5 Files
        </div>
      </div>
      
      <div className="p-6 border-b border-gray-700">
        <div className="flex gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search files..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-emerald-500"
            />
          </div>
          <button className="px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filter
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <Icon className="w-5 h-5 text-gray-400" />
                  <span className="text-2xl font-bold">{stat.value}</span>
                </div>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="flex-1 p-6 overflow-auto">
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Shared Files</h2>
          <p className="text-sm text-gray-400">All your shared files and their download statistics</p>
        </div>
        
        <div className="bg-gray-800 rounded-lg overflow-hidden">
          <div className="bg-gray-700 px-6 py-3 grid grid-cols-12 gap-4 text-sm font-medium text-gray-300">
            <div className="col-span-4">File</div>
            <div className="col-span-2">Downloads</div>
            <div className="col-span-2">Status</div>
            <div className="col-span-2">Expires</div>
            <div className="col-span-2">Created</div>
            <div className="col-span-1">Actions</div>
          </div>
          
          <div className="divide-y divide-gray-700">
            {filteredFiles.map((file) => (
              <div key={file.id} className="px-6 py-4 grid grid-cols-12 gap-4 items-center hover:bg-gray-700/50 transition-colors">
                <div className="col-span-4 flex items-center gap-3">
                  <span className="text-2xl">{getFileIcon(file.type)}</span>
                  <div>
                    <div className="font-medium">{file.name}</div>
                    <div className="text-sm text-gray-400">{file.size}</div>
                  </div>
                </div>
                
                <div className="col-span-2">
                  <span className="font-medium">{file.downloads}</span>
                  {file.maxDownloads && <span className="text-gray-400"> / {file.maxDownloads}</span>}
                </div>
                
                <div className="col-span-2">
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      file.status === 'Active' 
                        ? 'bg-emerald-500/20 text-emerald-400' 
                        : 'bg-gray-600 text-gray-400'
                    }`}>
                      {file.status}
                    </span>
                    {file.protected && (
                      <span className="px-2 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs">
                        Protected
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="col-span-2">
                  <span className={file.expires === 'Expired' ? 'text-red-400' : 'text-gray-300'}>
                    {file.expires}
                  </span>
                </div>
                
                <div className="col-span-2 text-gray-400">
                  {file.created}
                </div>
                
                <div className="col-span-1">
                  <button className="p-1 hover:bg-gray-600 rounded transition-colors">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentShares;