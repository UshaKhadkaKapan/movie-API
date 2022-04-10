export const randomChar = () => {
  const chars = "qwertyuiopasdfghjklzxcvbnm";
  return chars.charAt(Math.floor(Math.random() * chars.length));
};
