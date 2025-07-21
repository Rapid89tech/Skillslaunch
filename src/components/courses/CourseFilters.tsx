
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Search, Filter } from 'lucide-react';

interface CourseFiltersProps {
  onFiltersChange: (filters: {
    search: string;
    category: string;
    level: string;
    priceRange: string;
  }) => void;
}

const CourseFilters = ({ onFiltersChange }: CourseFiltersProps) => {
  const [filters, setFilters] = useState({
    search: '',
    category: '',
    level: '',
    priceRange: ''
  });

  const handleFilterChange = (key: string, value: string) => {
    const actualValue = value === 'all-categories' || value === 'all-levels' || value === 'all-prices' ? '' : value;
    const newFilters = { ...filters, [key]: actualValue };
    setFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const categories = [
    'Programming',
    'Design', 
    'Business',
    'Marketing',
    'Data Science',
    'Personal Development'
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border space-y-4 animate-fade-in delay-200">
      <div className="flex items-center gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search courses..."
            value={filters.search}
            onChange={(e) => handleFilterChange('search', e.target.value)}
            className="pl-10"
          />
        </div>
        
        <Button variant="outline" className="flex items-center gap-2">
          <Filter className="h-4 w-4" />
          Filters
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Select value={filters.category || 'all-categories'} onValueChange={(value) => handleFilterChange('category', value)}>
          <SelectTrigger>
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-categories">All Categories</SelectItem>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={filters.level || 'all-levels'} onValueChange={(value) => handleFilterChange('level', value)}>
          <SelectTrigger>
            <SelectValue placeholder="All Levels" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-levels">All Levels</SelectItem>
            <SelectItem value="beginner">Beginner</SelectItem>
            <SelectItem value="intermediate">Intermediate</SelectItem>
            <SelectItem value="advanced">Advanced</SelectItem>
          </SelectContent>
        </Select>

        <Select value={filters.priceRange || 'all-prices'} onValueChange={(value) => handleFilterChange('priceRange', value)}>
          <SelectTrigger>
            <SelectValue placeholder="All Prices" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-prices">All Prices</SelectItem>
            <SelectItem value="free">Free</SelectItem>
            <SelectItem value="paid">Paid</SelectItem>
            <SelectItem value="0-500">R0 - R500</SelectItem>
            <SelectItem value="500-1000">R500 - R1000</SelectItem>
            <SelectItem value="1000+">R1000+</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default CourseFilters;
