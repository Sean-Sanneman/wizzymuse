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
    return verb;
  }
  if (verb === 'match') {
    return 'matches';
  }
  return verb + 's';
};
