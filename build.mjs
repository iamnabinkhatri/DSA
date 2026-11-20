import {mkdir,copyFile,rm} from 'node:fs/promises';
await rm('dist',{recursive:true,force:true});await mkdir('dist');
for(const file of ['index.html','style.css','app.js','questions.json'])await copyFile(file,`dist/${file}`);
console.log('Built static app in dist/');
