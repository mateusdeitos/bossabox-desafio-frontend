export interface ITheme {
  colors: {
    background: string;
    cardBackground: string;
    textColor: string;
    linkColor: string;
    tagTextSelected: string;
    loadingSkeleton: string;
    colorModeButton: {
      icon: string;
    };
    input: {
      background: {
        base: string;
        focus: string;
      };
      borders: {
        base: string;
        focus: string;
      };
      placeholder: string;
    };
    borders: string;
  };
}
const baseColors = {
  brand: {
    50: '#fff',
    100: '#f5f4f6',
    200: '#feefee',
    300: '#ebeaed',
    400: '#dedce1',
    500: '#718096',
    600: '#4A5568',
    700: '#170C3A',
    800: '#1A202C',
    900: '#171923',
  },
  loadingGradient:
    'linear-gradient(90deg, rgba(245,244,246,1) 0%, rgba(254,239,238,1) 90%, rgba(222,220,225,1) 100%)',
};
const themes = {
  dark: {
    colors: {
      background: baseColors.brand[800],
      cardBackground: baseColors.brand[600],
      textColor: baseColors.brand[50],
      linkColor: baseColors.brand[100],
      tagTextSelected: baseColors.brand[800],
      loadingSkeleton: baseColors.loadingGradient,
      colorModeButton: {
        icon: baseColors.brand[500],
      },
      input: {
        background: {
          base: baseColors.brand[500],
          focus: baseColors.brand[600],
        },
        borders: {
          base: baseColors.brand[600],
          focus: baseColors.brand[700],
        },
        placeholder: baseColors.brand[400],
      },
      borders: baseColors.brand[700],
    },
  },
  light: {
    colors: {
      background: baseColors.brand[50],
      cardBackground: baseColors.brand[50],
      textColor: baseColors.brand[700],
      linkColor: baseColors.brand[500],
      tagTextSelected: baseColors.brand[800],
      loadingSkeleton: baseColors.loadingGradient,
      colorModeButton: {
        icon: baseColors.brand[700],
      },
      input: {
        background: {
          base: baseColors.brand[200],
          focus: baseColors.brand[300],
        },
        borders: {
          base: baseColors.brand[300],
          focus: baseColors.brand[400],
        },
        placeholder: baseColors.brand[500],
      },
      borders: baseColors.brand[300],
    },
  },
};

export default themes;
