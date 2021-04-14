import { capitalizeName, underscoreToBlank } from './stringUtilFunctions';

export const getDefaultGenreValues = (list) => {
  const newList = list.map((genre) => {
    return {
      value: genre.id,
      label: capitalizeName(underscoreToBlank(genre.genreName)),
    };
  });
  return newList;
};

export const formatGenres = (list) => {
  const newList = list.map((genre) => {
    return {
      id: genre.value,
      genreName: genre.label,
    };
  });
  return newList;
};

export const getDefaultInstrumentValues = (list) => {
  const newList = list.map((instrument) => {
    return {
      value: instrument.id,
      label: capitalizeName(underscoreToBlank(instrument.instrumentName)),
    };
  });
  return newList;
};

export const formatInstruments = (list) => {
  const newList = list.map((instrument) => {
    return {
      id: instrument.value,
      instrumentName: instrument.label,
    };
  });
  return newList;
};
