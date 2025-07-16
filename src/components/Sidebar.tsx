import React from 'react';
import { Upload, Clock, BarChart3, Settings, HelpCircle } from 'lucide-react';

interface SidebarProps {
  activePage: string;
  setActivePage: (page: 'upload' | 'recent' | 'analytics' | 'settings') => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activePage, setActivePage }) => {
  const menuItems = [
    { id: 'upload', label: 'Upload & Share', icon: Upload },
    { id: 'recent', label: 'Recent Shares', icon: Clock },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="w-64 bg-gray-800 border-r border-gray-700 flex flex-col">
      <div className="p-4">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
            <Upload className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-semibold">SecureShare</span>
        </div>
        
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActivePage(item.id as any)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                  isActive 
                    ? 'bg-emerald-500 text-white' 
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5" />
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>
      
      <div className="mt-auto p-4 border-t border-gray-700">
        <button className="w-full flex items-center gap-3 px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition-colors">
          <HelpCircle className="w-5 h-5" />
          Help & Support
        </button>
      </div>
    </div>
  );
};

export default Sidebar;