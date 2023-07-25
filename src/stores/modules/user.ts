import { defineStore } from 'pinia';
import { loginUser, logoutUser } from '@/apis/user';
import type { User, LoginPayload } from '@/types/user';

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
    async login(data: LoginPayload) {
      const { resultMap } = await loginUser(data);
      const { token, user } = resultMap;

      this.user = user;
      localStorage.setItem('coding_standards_token', token);
      localStorage.setItem('coding_standards_account', data.account);
    },
    async logout() {
      await logoutUser();

      this.user = {};
      localStorage.removeItem('coding_standards_token');
    }
  },
});
