export const capitalizeName = (name) =>
  name.replace(/\b(\w)/g, (s) => s.toUpperCase());

export const underscoreToBlank = (name) => name.replace(/_/g, ' ');

export const pluralizeNoun = (nb, noun) => {
  if (nb > 1) {
    return noun + 's';
  }
  return noun;
};

export const pluralizeVerb = (nb, verb) => {
  if (nb > 1) {
    switch (verb) {
      case 'was':
        return 'were';
      default:
        return verb;
    }
  } else {
    switch (verb) {
      case 'was':
        return 'was';
      default:
        return verb + 's';
    }
  }
};

export const letterizeDigit = (nb) => {
  switch (nb) {
    case 0:
      return 'zero';
    case 1:
      return 'one';
    case 2:
      return 'two';
    case 3:
      return 'three';
    case 4:
      return 'four';
    case 5:
      return 'five';
    case 6:
      return 'six';
    case 7:
      return 'seven';
    case 8:
      return 'eight';
    case 9:
      return 'nine';
    default:
      return nb;
  }
};
