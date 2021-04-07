export const capitalizeName = (name) =>
  name.replace(/\b(\w)/g, (s) => s.toUpperCase());

export const underscoreToBlank = (name) => name.replace(/_/g, ' ');
