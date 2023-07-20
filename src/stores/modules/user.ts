import { defineStore } from 'pinia';
import type { User } from '@/types/user';

interface UserStore {
  user: User;
}

const defaultState: UserStore = {
  user: {},
};

export default defineStore('coding-standards-user', {
  state: () => defaultState,
  getters: {
    isLogin: (state) => {
      return Object.hasOwn(state.user, 'account');
    },
  },
  actions: {
    setUser(user: User) {
      this.user = user;
    },
  },
});
