const DICTIONARY_CACHE_KEY = "cachedDict";
const LIST_CACHE_KEY = "cachedList";

class Dictionary {
  _catalogUrl = "http://localhost:3000/";

  _list = {};
  _dictionaries = {};

  constructor() {
    console.log("Dict created");

    console.log(this.list());
  }

  _storeDict(dictionaryId, dict) {
    const dicts = JSON.parse(localStorage.getItem(DICTIONARY_CACHE_KEY)) || {};
    dicts[dictionaryId] = dict;
    localStorage.setItem(DICTIONARY_CACHE_KEY, JSON.stringify(dicts));
  }

  _getDict(dictionaryId){
    return JSON.parse(localStorage.getItem(DICTIONARY_CACHE_KEY))[dictionaryId] || null;
  }

  _storeList(list) {
    localStorage.setItem(LIST_CACHE_KEY, JSON.stringify(list));
  }

  _getList(){
    return JSON.parse(localStorage.getItem(LIST_CACHE_KEY)) || null;
  }

  isListCached() {
    if(localStorage.getItem(LIST_CACHE_KEY).length) return true;
    return false;
  }

  isDictCached(dictionaryId) {
    if(JSON.parse(localStorage.getItem(DICTIONARY_CACHE_KEY))[dictionaryId]) return true;
    return false;
  }

  async list(refetch = false) {
    if (
      refetch ||
      Object.keys(this._list).length === 0 ||
      !this.isListCached()
    ) {
      const response = await fetch(`${this._catalogUrl}index.json`);
      const list = await response.json();
      this._list = list.dictionaries;
      this._storeList(list.dictionaries);
    }

    return this._list;
  }

  async get(dictionaryId, refetch = false) {
    if (
      refetch ||
      !this._dictionaries[dictionaryId] ||
      !this.isDictCached(dictionaryId)
    ) {
      const response = await fetch(
        `${this._catalogUrl}${(await this.list())[dictionaryId].uri}`
      );
      const dict = await response.json();
      console.log("DICT LOADED HERE: ",dict);
      this._dictionaries[dictionaryId] = dict.words;
      this._storeDict(dictionaryId, dict.words);

    }
    return this._dictionaries[dictionaryId];
  }
}

export default Dictionary;
