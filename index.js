#!/usr/bin/env node
// import { program } from "commander";
import fs from 'node:fs';
import path from 'node:path';
import componentize from "./src/template.js";

const args = process.argv
const components = args.slice(2)
for (let i = 0; i < components.length; i++) {
  const component = components[i]
  const folderRoute = path.join(process.cwd(), component)
  if (fs.existsSync(folderRoute)) {
    console.log(`Error: Component "${component}" already exists.`)
    continue
  }
  fs.mkdirSync(folderRoute)
  console.log(`Succesfully created component ${component} directory`)
}



// console.log(myArgs)

// console.log(componentize("PostCard"))