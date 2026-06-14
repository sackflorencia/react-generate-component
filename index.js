#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import componentize from "./src/template.js";
import validateComponentName from './src/validateComponentName.js';
import detectTypeScript from "./src/detectTS.js";

const args = process.argv
const components = args.slice(2)
const ext = detectTypeScript() ? "tsx" : "jsx";
for (let i = 0; i < components.length; i++) {
  const component = components[i]
  if (!validateComponentName(component)) {
    console.log(`Error: "${component}" is not a valid component name.`);
    continue;
  }
  const folderRoute = path.join(process.cwd(), component)
  if (fs.existsSync(folderRoute)) {
    console.log(`Error: Component "${component}" already exists.`)
    continue
  }
  fs.mkdirSync(folderRoute)
  console.log(`Created component ${component} directory`)
  const jsxData = componentize(component)
  const jsxFileRoute = path.join(folderRoute, `index.${ext}`)
  const cssFileRoute = path.join(folderRoute, `${component}.css`)
  fs.writeFileSync(jsxFileRoute, jsxData)
  console.log(`Created ${component} index.${ext}`)
  fs.writeFileSync(cssFileRoute, "")
  console.log(`Created ${component}.css`)
}
