/* eslint-disable @typescript-eslint/no-shadow */
// import GlobalStorage, {GlobalStoreKeys, StorageInstance} from 'storage';

import GlobalStorage, { GlobalStoreKeys, StorageInstance } from "../storage";

export interface UserToken {
  authToken?: string;
}

const getGenericMethods = <T, TKeys extends string>(
  key: TKeys,
  instance: StorageInstance<TKeys>,
) => ({
  getValue: (key: TKeys) => {
    try {
      const _value = instance.get(key);
      return _value ? (JSON.parse(_value) as T) : undefined;
    } catch (error) {
      throw new Error(`error getting value: ${key}`);
    }
  },
  setValue: (key: TKeys, value: T) => {
    try {
      const _value = JSON.stringify(value);
      instance.set(key, _value);
    } catch (error) {
      throw new Error(`error saving value: ${value}`);
    }
  },
  delete: () => instance.delete(key),
  clearAll: () => instance.clearAll(),
});

const getGlobalStore = (instance: StorageInstance<GlobalStoreKeys>) => ({
  userToken: getGenericMethods<UserToken, GlobalStoreKeys>('authToken', instance),
});

export const GlobalStore = getGlobalStore(GlobalStorage);
