const componentize = (name) => {
  return `
import "./${name}.css";

const ${name} = () => {
  return (
    <div>
      ${name}
    </div>
  );
};

export default ${name};
  `
}
export default componentize;