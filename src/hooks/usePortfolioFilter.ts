import { useState, useMemo } from 'react';
import { PortfolioItem } from '../data/portfolio';

export const usePortfolioFilter = (items: PortfolioItem[]) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredItems = useMemo(() => {
    if (activeFilter === 'all') {
      return items;
    }
    return items.filter(item => item.category.includes(activeFilter));
  }, [items, activeFilter]);

  return {
    activeFilter,
    setActiveFilter,
    filteredItems
  };
};