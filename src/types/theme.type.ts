type Colors = {
  offWhite: string;
  white: string;
};

type BorderColors = {
  ashWhite: string;
};

type FontFamilies = {
  urdu: string;
  arabic: string;
};

type FontColors = {
  grey: string;
};

export type Theme = {
  background: {
    colors: Colors;
  };
  border: {
    colors: BorderColors;
  };
  typography: {
    font: {
      families: FontFamilies;
      colors: FontColors;
    };
  };
};