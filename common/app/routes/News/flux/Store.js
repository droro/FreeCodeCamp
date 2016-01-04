import { Store } from 'thundercats';

const initialValue = {
  news: [],
  currentNews: {}
};

export default Store({
  refs: {
    value: initialValue
  },
  init({ instance: newsStore, args: [cat] }) {

    let { setNews } = cat.getActions('newsActions');
    newsStore.register(setNews);

    return newsStore;
  }
}).static({ displayName: 'NewsStore' });
