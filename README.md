# React Generate Component

CLI para generar componentes de React de forma rápida y consistente.

Este proyecto automatiza la creación de carpetas, archivos y plantilla base de cada componente, evitando tener que hacerlo manualmente cada vez.

---

## ¿Por qué este proyecto?

Este proyecto nació para resolver una tarea repetitiva: crear componentes uno por uno, con su carpeta, su archivo principal y su archivo de estilos.

Cuando se trabaja con React y se organiza la interfaz en muchos componentes, hacerlo manualmente se vuelve tosco y consume tiempo. Esta CLI resuelve ese problema con un comando simple y, además, permite aprender y trabajar con herramientas de Node.js orientadas a línea de comandos, algo que no siempre se usa cuando se trabaja con Node de forma más tradicional.

---

## Características

* Genera componentes React con un comando.
* Permite crear uno o varios componentes a la vez.
* Crea la estructura de carpetas y archivos automáticamente.
* Genera una plantilla base dentro de `index.jsx` o `index.tsx`.
* Detecta automáticamente si el proyecto usa TypeScript.
* Crea componentes en el directorio actual.
* Permite crear componentes anidados dentro de otras carpetas de componentes.
* Evita sobrescribir componentes existentes.

---

## Uso

Crear un componente:

```bash
rgc PostCard
```

Crear varios componentes:

```bash
rgc PostCard PostGrid Button
```

---

## Estructura generada

Al ejecutar:

```bash
rgc PostCard
```

se genera:

```txt
PostCard/
├── index.jsx
└── PostCard.css
```

Si el proyecto está configurado como TypeScript, la estructura pasa a ser:

```txt
PostCard/
├── index.tsx
└── PostCard.css
```

---

## Plantilla generada

Para un componente llamado `PostCard`, el archivo `index.jsx` contiene una estructura base como esta:

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

---

## Directorio actual

Los componentes se crean en la carpeta en la que se ejecuta el comando.

Ejemplo:

```bash
cd src/components
rgc PostCard
```

Resultado:

```txt
src/
└── components/
    └── PostCard/
        ├── index.jsx
        └── PostCard.css
```

Esto también permite crear componentes anidados.

Ejemplo:

```bash
cd PostGrid
rgc PostCard
```

Resultado:

```txt
PostGrid/
├── index.jsx
├── PostGrid.css
└── PostCard/
    ├── index.jsx
    └── PostCard.css
```

---

## Detección de TypeScript

La CLI detecta automáticamente si existe un archivo `tsconfig.json` en el proyecto.

* Si lo encuentra, genera `index.tsx`.
* Si no lo encuentra, genera `index.jsx`.

---

## Validación de nombres

La herramienta valida los nombres antes de crear archivos.

### Nombres válidos

```bash
rgc PostCard
rgc post-card
rgc button
```

### Nombres inválidos

```bash
rgc 123
rgc "Mi Componente"
```

---

## Manejo de errores

Si un componente con ese nombre ya existe, la generación se detiene y se muestra un error.

Ejemplo:

```txt
Error: Component "PostCard" already exists.
```

---

## Estilos

El proyecto genera archivos `.css`.

Por ahora no utiliza SCSS.

---

## Tecnologías

* Node.js
* Commander.js
* `fs`
* `path`

---

## Licencia

ISC
