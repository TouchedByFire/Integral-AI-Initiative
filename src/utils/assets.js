const images = import.meta.glob("../assets/images/**/*", {
  eager: true,
  import: "default",
  query: "?url",
});

export const asset = (path) => {
  const normalizedPath = path.replaceAll("\\", "/");
  return images[`../assets/images/${normalizedPath}`];
};
