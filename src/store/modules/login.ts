import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: (): any => ({
    test: '测试一下pinia',
  }),

  actions: {},
});
