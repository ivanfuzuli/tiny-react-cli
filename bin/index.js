const { Command, Option } = require("commander");
const chalk = require("chalk");
const path = require("path");
const fse = require("fs-extra");
const Eta = require("eta");

const program = new Command();
console.log(chalk.red.green("Welcome to tiny react cli"));

const mapping = [
  {
    name: "index",
    filename: "../boilerplate/index.js.eta",
    outputname: "index",
    extension: "js",
  },
  {
    name: "component",
    filename: "../boilerplate/component.js.eta",
    outputname: "{name}",
    extension: "js",
  },
  {
    name: "test",
    filename: "../boilerplate/test.js.eta",
    outputname: "{name}.test",
    extension: "js",
  },
];

program
  .name("react-cli")
  .description("CLI tool for create react components")
  .version("0.0.1");

const create = (name, ext, data, path = "src/components/") => {
  const filename = path + "/" + name + "." + ext;
  fse
    .outputFile(filename, data)
    .then(() =>
      console.log(chalk.green("CREATED:") + " " + chalk.default(filename))
    )
    .catch((err) => console.error(err));
};

const generate = (name, opts) => {
  const { t, p } = opts;

  const rules = ["index", "component"];
  if (t) {
    rules.push("test");
  }
  const filtered = mapping.filter((map) => rules.includes(map.name));

  filtered.forEach((item) => {
    fse
      .readFile(path.resolve(__dirname, item.filename), "UTF-8")
      .then((response) => {
        const data = Eta.render(response, {
          name,
        });
        create(
          name + "/" + item.outputname.replace(/{name}/g, name),
          item.extension,
          data,
          p
        );
      });
  });
};

program
  .command("generate")
  .alias("g")
  .description("Generate a new react component")
  .argument("string", "Component name")
  .option("-t", "with test files!")
  .option('-p <value>', "component's path!!")

  .action(generate);

program.parse();
