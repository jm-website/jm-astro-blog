import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // 💡 내 깃허브 도메인과 저장소(레포지토리) 이름을 정확하게 매칭해 줍니다.
  site: 'https://jm-website.github.io',
  base: '/jm-astro-blog',
});
