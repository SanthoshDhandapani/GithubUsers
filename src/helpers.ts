import { UserList } from "./types";

export const getSystemThemeMode = () =>
  window?.matchMedia?.("(prefers-color-scheme:dark)")?.matches
    ? "dark"
    : "light";

export const getUniqueEntries = (
  arr: UserList,
  key: string
) => {
  return arr.filter(
    (obj, index) => arr.findIndex((item) => (item as never)[key] === (obj as never)[key]) === index
  );
};
