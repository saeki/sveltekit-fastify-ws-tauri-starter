import { build } from "esbuild";
import { copy } from "esbuild-plugin-copy";
import glob from "tiny-glob";
(async function () {
  const entryPoints = await glob("src/**/*.ts");
  build({
    entryPoints,
    logLevel: "info",
    outdir: "build",
    bundle: true,
    minify: true,
    platform: "node",
    format: "esm",
    banner: {
      js: `
      import { dirname } from 'path';
      import { fileURLToPath } from 'url';
      import { createRequire as topLevelCreateRequire } from 'module';
      const require = topLevelCreateRequire(import.meta.url);
      const __filename = fileURLToPath(import.meta.url);
      const __dirname = dirname(__filename);
      `,
    },
    plugins: [
      copy({
        resolveFrom: "cwd",
        assets: {
          from: ["../frontend/build/**/*"],
          to: ["./build/public/"],
        },
      }),
    ],
  });
})();
