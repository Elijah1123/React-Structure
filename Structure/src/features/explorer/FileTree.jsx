import React, { useState } from 'react';

// Advanced: Hash Map for quick icon/color lookup
const fileIcons = {
  js: { icon: 'js', color: 'text-yellow-500' },
  jsx: { icon: '⚛️', color: 'text-blue-400' },
  css: { icon: '#', color: 'text-blue-600' },
  folder: { icon: '📁', color: 'text-slate-400' }
};

const FileNode = ({ node }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isFolder = node.type === 'folder';

  return (
    <div className="ml-4 select-none">
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 py-1 px-2 hover:bg-slate-100 rounded cursor-pointer transition"
      >
        <span className={fileIcons[isFolder ? 'folder' : node.ext]?.color}>
          {isFolder ? (isOpen ? '📂' : '📁') : '📄'}
        </span>
        <span className="text-slate-700 text-sm">{node.name}</span>
      </div>
      
      {/* Pro: Recursive Component Call */}
      {isOpen && node.children && (
        <div className="border-l border-slate-200 ml-2">
          {node.children.map(child => <FileNode key={child.id} node={child} />)}
        </div>
      )}
    </div>
  );
};

export default function FileExplorer() {
  const mockTree = {
    id: 'root',
    name: 'project-mzalendo',
    type: 'folder',
    children: [
      { id: '1', name: 'App.jsx', type: 'file', ext: 'jsx' },
      { id: '2', name: 'assets', type: 'folder', children: [
          { id: '3', name: 'styles.css', type: 'file', ext: 'css' }
      ]}
    ]
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md border border-slate-200 mt-6">
      <h2 className="text-xl font-bold mb-4 text-slate-800">File Explorer</h2>
      <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
        <FileNode node={mockTree} />
      </div>
    </div>
  );
}