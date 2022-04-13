const { Command } = require("commander");
const chalk = require("chalk");
const path = require("path");
const fse = require("fs-extra");
const Eta = require("eta");

const program = new Command();
console.log(chalk.red.green("Welcome to tiny react cli"));

const mapping = [
  {
    filename: "../boilerplate/index.js.eta",
    outputname: "index",
    extension: "js",
  },
  {
    filename: "../boilerplate/component.js.eta",
    outputname: "{name}",
    extension: "js",
  },
  {
    filename: "../boilerplate/test.js.eta",
    outputname: "{name}.test",
    extension: "js",
  },
];

program
  .name("react-cli")
  .description("CLI to react components")
  .version("0.0.1");

const create = (name, ext, data) => {
  const filename = "src/components/" + name + "." + ext;
  fse
    .outputFile(filename, data)
    .then(() =>
      console.log(chalk.green("CREATED:") + " " + chalk.default(filename))
    )
    .catch((err) => console.error(err));
};

const generate = (name) => {
  mapping.forEach((item) => {
    fse
      .readFile(
        path.resolve(__dirname, item.filename),
        "UTF-8"
      )
      .then((response) => {
        const data = Eta.render(response, {
          name
        });
        create(item.outputname.replace(/{name}/g, name), item.extension, data);
      });
  });
};

program
  .command("generate")
  .alias("g")
  .description("Generate a new react component")
  .argument("string", "Component name")
  .action(generate);

program.parse();
