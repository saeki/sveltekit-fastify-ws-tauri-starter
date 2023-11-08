// import adapterNode from '@sveltejs/adapter-node';
import adapterStatic from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/kit/vite";

// const tauri = process.env.TAURI;

// console.log('tauri', tauri);

// const adapter =
// 	tauri === 'true'
// 		? adapterStatic({
// 				strict: false, // ignore api routes
// 		  })
// 		: adapterNode({
// 				// node adapter config
// 		  });

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapterStatic({
      strict: true,
    }),
  },
};

export default config;
