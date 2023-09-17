export const basePath =
  process.env.NODE_ENV === "production" ? "/note-taking-app" : "";

export const buildPath = (path: string) => {
  return `${basePath}${path}`;
};
