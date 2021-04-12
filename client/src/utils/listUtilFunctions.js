import { capitalizeName, underscoreToBlank } from './stringUtilFunctions';

export const getDefaultGenreValues = (list) => {
  return list.map((genre) => {
    return {
      value: genre.id,
      label: capitalizeName(underscoreToBlank(genre.genreName)),
    };
  });
};

export const getDefaultInstrumentValues = (list) => {
  return list.map((instrument) => {
    return {
      value: instrument.id,
      label: capitalizeName(underscoreToBlank(instrument.instrumentName)),
    };
  });
};
