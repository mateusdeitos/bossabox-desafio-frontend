import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { useDarkMode } from '../../hooks/useDarkMode';

const SkeletonCard: React.FC<{ count: number }> = ({ count }) => {
  const { currentTheme } = useDarkMode();
  return (
    <Skeleton
      style={{ background: `${currentTheme.colors.loadingSkeleton}` }}
      count={count}
      height={150}
      width="100%"
    />
  );
};

export default SkeletonCard;
