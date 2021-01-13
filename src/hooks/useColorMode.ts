import React, { useState } from 'react';

type colorModes = 'light' | 'dark';
type returnValues = [
  colorModes,
  React.Dispatch<React.SetStateAction<colorModes>>,
];

const useColorMode = (initialMode: colorModes = 'light'): returnValues => {
  const [colorMode, setColorMode] = useState(initialMode);

  return [colorMode, setColorMode];
};

export default useColorMode;
