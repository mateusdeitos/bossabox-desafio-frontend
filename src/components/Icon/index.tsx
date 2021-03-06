import React from 'react';
import searchIcon from '../../assets/search.svg';
import addIcon from '../../assets/add.svg';
import deleteIcon from '../../assets/delete.svg';
import removeIcon from '../../assets/remove.svg';

const iconObj = {
  search: searchIcon,
  add: addIcon,
  delete: deleteIcon,
  remove: removeIcon,
};

const CustomIcon: React.FC<{ icon: keyof typeof iconObj; size: number }> = ({
  icon,
  size,
}) => {
  return <img src={iconObj[icon]} alt={icon} width={size} height={size} />;
};

export default CustomIcon;
