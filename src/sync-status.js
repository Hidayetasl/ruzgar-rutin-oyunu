const KEY = "ruzgar-sync-device-v1";

export function deviceId() {
  let id = localStorage.getItem(KEY);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(KEY, id);
  }
  return id;
}

export function operationId(kind, parts = []) {
  return [kind, ...parts, deviceId(), crypto.randomUUID()].join(":");
}

export function createSyncStatus(render) {
  let pending = 0;
  const update = (status, detail = "") => render({ status, pending, detail });
  window.addEventListener("online", () => update("syncing"));
  window.addEventListener("offline", () => update("offline"));
  return {
    queue() { pending += 1; update(navigator.onLine ? "syncing" : "offline"); },
    settled() { pending = Math.max(0, pending - 1); update(pending ? "syncing" : "synced"); },
    needsAttention(detail) { update("attention", detail); },
    start() { update(navigator.onLine ? "synced" : "offline"); }
  };
}
