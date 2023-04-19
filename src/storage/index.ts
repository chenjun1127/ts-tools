import { deCrypto, enCrypto } from "../crypto";

interface StorageData<T = any> {
  data: T;
  expire: number | null; //过期时间，默认为7天，比如30分钟过期，要传30*60
}
class StorageInstance {
  DEFAULT_CACHE_TIME = 60 * 60 * 24 * 7;
  expire: number;
  crypto: boolean;
  constructor(expire?: number, crypto?: boolean) {
    this.expire = expire ?? this.DEFAULT_CACHE_TIME;
    this.crypto = crypto ?? false;
  }
  set<T>(key: string, data: T): void {
    const storageData: StorageData<T> = {
      data,
      expire: new Date().getTime() + this.expire * 1000,
    };
    const json = this.crypto
      ? enCrypto(storageData)
      : JSON.stringify(storageData);
    window.localStorage.setItem(key, json);
  }
  get(key: string) {
    const json = window.localStorage.getItem(key);
    if (json) {
      let storageData: StorageData | null = null;
      try {
        storageData = this.crypto ? deCrypto(json) : JSON.parse(json);
      } catch {
        throw new Error("error");
      }
      if (storageData) {
        const { data, expire } = storageData;
        if (expire === null || expire >= Date.now()) return data;
      }
      this.remove(key);
      return null;
    }
  }
  remove(key: string): void {
    window.localStorage.removeItem(key);
  }
  clear() {
    window.localStorage.clear();
  }
}
export default StorageInstance;
