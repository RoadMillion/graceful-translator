import { defineConfig } from 'wxt';
import vue from '@vitejs/plugin-vue';

// See https://wxt.dev/api/config.html
export default defineConfig({
  imports: {
    addons: {
      vueTemplate: true,
    },
  },
  vite: () => ({
    plugins: [vue()],
  }),
  runner: {
    startUrls: ['https://medium.com'],
    binaries: {
      chrome: 'C:/Program Files/Google/Chrome Beta/Application/chrome'
    }
  },
});
