import {MMKV} from 'react-native-mmkv';

const GlobalStoreKeys = {
  authToken: 'authToken',
  ownerInfo: 'ownerInfo',
} as const;

export type GlobalStoreKeys = keyof typeof GlobalStoreKeys;

export type StorageInstance<TKeys extends string> = {
  get: (key: TKeys) => string | undefined;
  set: (key: TKeys, value: any) => void;
  delete: (key: TKeys) => void;
  clearAll: () => void;
};

const createStorageInstance = <TKeys extends string>(
  id?: string,
): StorageInstance<TKeys> => {
  const instance = new MMKV(id ? {id} : undefined);

  return {
    get: key => instance.getString(key),
    set: (key, value) => instance.set(key, value),
    delete: key => instance.delete(key),
    clearAll: () => instance.clearAll(),
  };
};

const GlobalStorage = createStorageInstance<GlobalStoreKeys>();

export default GlobalStorage;
