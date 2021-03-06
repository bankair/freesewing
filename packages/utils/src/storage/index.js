const storage = {
  set: (key, value, raw) => {
    if (typeof localStorage === "undefined") return value;
    const _key = "fs_" + key;

    if (typeof value === "undefined" || value === null)
      localStorage.removeItem(_key);
    else localStorage.setItem(_key, raw ? value : JSON.stringify(value));

    return value;
  },
  get: (key, raw) => {
    if (typeof localStorage === "undefined") return null;

    const value = localStorage.getItem("fs_" + key);

    return raw ? value : JSON.parse(value);
  }
};

export default storage;
