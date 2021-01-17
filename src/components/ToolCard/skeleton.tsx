import React from 'react';
import Skeleton from 'react-loading-skeleton';

const SkeletonCard: React.FC<{ count: number }> = ({ count }) => {
  return <Skeleton count={count} height={150} width="100%" />;
};

export default SkeletonCard;
