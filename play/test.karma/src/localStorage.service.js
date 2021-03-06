/**
 * @flow
 */

/**
 * DataService Class for Storing
 */
export default class LocalStorageService {

  /**
   * Saves the value at the key provided in the Browser local storage
   *
   * @returns {string} key
   */
  static save({ key, val } : { key: string, val: any }) {
    key = val;
    return key;
  }

  static get({ key } : { key: string }) {
    console.log(key);
    return key;
  }
}
