import React from 'react';

interface TableRowData {
  cells: string[];
}

interface VisualTableProps {
  header1: string;
  header2: string;
  rows: TableRowData[];
}

export const VisualTableRenderer = ({ header1, header2, rows }: VisualTableProps) => {
  // Determine the maximum number of columns in any row
  const maxCols = Math.max(2, ...rows.map(row => row.cells.length));
  // Build headers array
  const headers = [header1.trim(), header2.trim()];
  // If more columns, add generic headers
  for (let i = 2; i < maxCols; i++) {
    headers.push(`Column ${i + 1}`);
  }
  return (
    <div className="my-8 transform translate-y-4 opacity-0 animate-[slideUp_0.6s_ease-out_forwards]" style={{ animationDelay: '200ms' }}>
      <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 dark:from-gray-800 dark:via-blue-900/20 dark:to-purple-900/20 shadow-2xl border border-blue-200/50 dark:border-blue-700/30 hover:shadow-3xl transition-all duration-500 group">
        {/* Table Header */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 p-4 shadow-lg">
          <h4 className="font-bold text-white text-lg flex items-center">
            <span className="text-2xl mr-3 animate-bounce">📊</span>
            Benefits Overview
          </h4>
        </div>
        
        {/* Table Content */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-gray-50 via-blue-50 to-purple-50 dark:from-gray-700 dark:via-blue-900/30 dark:to-purple-900/30">
              <tr>
                {headers.map((header, i) => (
                  <th key={i} className="px-4 py-3 text-left font-bold text-gray-800 dark:text-gray-200 border-b-2 border-blue-200 dark:border-blue-600 text-sm">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index} className="group hover:bg-gradient-to-r hover:from-blue-50/60 hover:via-purple-50/40 hover:to-indigo-50/60 dark:hover:from-gray-700/50 dark:hover:via-blue-900/20 dark:hover:to-purple-900/20 transition-all duration-300 transform hover:scale-[1.01] hover:shadow-lg">
                  {Array.from({ length: maxCols }).map((_, colIdx) => (
                    <td key={colIdx} className={`px-4 py-3 ${colIdx === 0 ? 'font-semibold text-gray-900 dark:text-gray-100' : 'text-gray-700 dark:text-gray-300'} border-b border-gray-100 dark:border-gray-700 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300 text-sm`}>
                      {row.cells[colIdx] ? row.cells[colIdx].trim() : ''}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Decorative footer */}
        <div className="h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
      </div>
    </div>
  );
};

// Helper function to parse table content and return data for rendering
export const parseTableContent = (text: string) => {
  // Enhanced regex to catch more table formats including pipe-separated content without traditional markdown table structure
  const tableMatches = text.matchAll(/\|([^|\n]+)\|([^|\n]+)\|\s*\n\|[-\s|]+\|\s*\n((?:\|[^|\n]*\|[^|\n]*\|\s*\n?)*)/g);
  const tables = [];
  
  for (const match of tableMatches) {
    const header1 = match[1].trim();
    const header2 = match[2].trim();
    const rowsText = match[3];
    const tableRows = rowsText.trim().split('\n').filter(row => row.trim() && row.includes('|'));
    
    const rows = tableRows.map(row => {
      const cells = row.split('|').filter(cell => cell.trim()).map(cell => cell.trim());
      return { cells };
    }).filter(row => row.cells.length >= 2);
    
    tables.push({
      fullMatch: match[0],
      header1,
      header2,
      rows,
      placeholder: `__TABLE_PLACEHOLDER_${tables.length}__`
    });
  }
  
  // Also look for pipe-separated content that might not have proper markdown table structure
  const pipeContentRegex = /\|\s*([^|\n]+)\s*\|\s*([^|\n]+)\s*\|[^|\n]*\n(?:\s*\|\s*([^|\n]+)\s*\|\s*([^|\n]+)\s*\|[^|\n]*\n)*/g;
  const pipeMatches = text.matchAll(pipeContentRegex);
  
  for (const match of pipeMatches) {
    // Skip if this content was already captured by the markdown table regex
    if (tables.some(table => match[0].includes(table.header1) || match[0].includes(table.header2))) {
      continue;
    }
    
    const lines = match[0].trim().split('\n');
    if (lines.length < 2) continue;
    
    const firstLine = lines[0];
    const firstCells = firstLine.split('|').filter(cell => cell.trim()).map(cell => cell.trim());
    
    if (firstCells.length >= 2) {
      const header1 = firstCells[0];
      const header2 = firstCells[1];
      
      const rows = lines.slice(1).map(line => {
        const cells = line.split('|').filter(cell => cell.trim()).map(cell => cell.trim());
        return { cells };
      }).filter(row => row.cells.length >= 2);
      
      if (rows.length > 0) {
        tables.push({
          fullMatch: match[0],
          header1,
          header2,
          rows,
          placeholder: `__TABLE_PLACEHOLDER_${tables.length}__`
        });
      }
    }
  }
  
  return tables;
};