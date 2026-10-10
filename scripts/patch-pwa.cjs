const fs = require('fs');
const files = [
  'node_modules/vite-plugin-pwa/dist/index.js',
  'node_modules/vite-plugin-pwa/dist/index.cjs'
];

for (const file of files) {
  try {
    if (fs.existsSync(file)) {
      let content = fs.readFileSync(file, 'utf8');
      content = content.replaceAll(
        'typeof __dirname !== "undefined" ? __dirname :',
        'typeof __dirname !== "undefined" && __dirname !== "." ? __dirname :'
      );
      fs.writeFileSync(file, content);
    }
  } catch (err) {
    // Ignore if not present
  }
}
