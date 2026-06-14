# react-generate-component

[![npm version](https://img.shields.io/npm/v/@sackflorencia/react-generate-component.svg)](https://www.npmjs.com/package/@sackflorencia/react-generate-component)
[![downloads](https://img.shields.io/npm/dm/@sackflorencia/react-generate-component.svg)](https://www.npmjs.com/package/@sackflorencia/react-generate-component)


A fast and lightweight CLI tool for generating React components with a consistent structure.

It automates the creation of component folders, entry files, and styles, reducing repetitive setup when building React applications.

## Features

- Generate React components with a single command
- Create multiple components at once
- Generate the folder structure automatically
- Create `index.jsx` or `index.tsx` depending on the project
- Detect TypeScript automatically by searching for `tsconfig.json`
- Create components in the current working directory
- Support nested component creation
- Prevent overwriting existing components
- Include a ready-to-use React component template

## Installation

Install the CLI globally with npm:

```bash
npm install -g @sackflorencia/react-generate-component
```

After installation, the `rgc` command will be available globally.

## Usage

Create a single component:

```bash
rgc PostCard
```

Create multiple components at once:

```bash
rgc PostCard PostGrid Button
```

## Output Structure

### JavaScript project

```
PostCard/
├── index.jsx
└── PostCard.css
```

### TypeScript project

If a `tsconfig.json` file is detected, the CLI generates:

```
PostCard/
├── index.tsx
└── PostCard.css
```
## Component Template

Generated components use a basic React functional component template.

### JavaScript

```jsx
import "./PostCard.css";

const PostCard = () => {
  return (
    <div>
      PostCard
    </div>
  );
};

export default PostCard;
```

### TypeScript

The same template is used for TypeScript projects. The only difference is the file extension: `index.tsx` instead of `index.jsx`.

---

## Working Directory

Components are created in the directory where the command is executed.

```bash
cd src/components
rgc PostCard
```

Result:

```
src/components/PostCard/
├── index.jsx
└── PostCard.css
```

---

## Nested Components

The CLI supports nested component creation.

```bash
cd src/components
rgc PostGrid
cd PostGrid
rgc PostCard
cd ..
```

Result:

```
components/
├── PostGrid/
│   ├── index.jsx
│   ├── PostGrid.css
│   └── PostCard/
│       ├── index.jsx
│       └── PostCard.css
```

---

## How TypeScript Detection Works

The CLI searches for a `tsconfig.json` file starting from the current working directory (`process.cwd()`) and moves upward through parent directories.

| Condition | Output |
|---|---|
| `tsconfig.json` found | generates `index.tsx` |
| `tsconfig.json` not found | generates `index.jsx` |

This makes the tool automatically compatible with both JavaScript and TypeScript projects without any extra configuration.

---

## Naming Rules
**Allowed characters:**
- Letters (`a–z`, `A–Z`)
- Numbers (`0–9`)
- Hyphen (`-`)
- Underscore (`_`)
The name is not valid if it starts with something else than a letter

**Valid names:**

```bash
rgc PostCard
rgc post-card
rgc post_card
rgc Button2
```

**Invalid names:**

```bash
rgc 123
rgc "My Component"
rgc 1Component
```

If the name is invalid, the component is not created and an error message is shown.

---

## Error Handling

The CLI prevents unsafe operations:

- Component already exists
- Invalid component name
- Missing arguments

Example:

```
Error: Component "PostCard" already exists.
```

---

## Styling

Each component includes a dedicated CSS file:

```
ComponentName.css
```

> SCSS is not supported at the moment.

---

## Example Workflow

Create multiple components inside a project:

```bash
cd src/components
rgc Header Sidebar Footer
```

Then create nested components:

```bash
cd PostGrid
rgc PostCard
cd ..
```

---

## Tech Stack

- Node.js
- `fs` (file system)
- `path` utilities
- `process.argv` (CLI arguments)

---

## Why This Project Exists

This tool was built to eliminate repetitive manual work when creating React components.

Instead of creating folders, files, and boilerplate code manually, this CLI automates the process and enforces a consistent structure across projects.

It also served as a way to learn how real-world CLI tools are built using Node.js, including argument parsing, file system manipulation, and project environment detection.

---

## License

ISC

---

## Author

Created by [@sackflorencia](https://github.com/sackflorencia)