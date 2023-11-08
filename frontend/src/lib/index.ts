import { browser } from "$app/environment";

export const isTauriAvailable = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return browser && (window as any).__TAURI_INTERNALS__ !== undefined;
};
