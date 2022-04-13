const { Command } = require("commander");
const chalk = require("chalk");
const program = new Command();

console.log(chalk.red.green("Welcome to tiny react cli"));

program
  .name("react-cli")
  .description("CLI to react components")
  .version("0.0.1");

const generate = (name) => {
  console.log(chalk.green("CREATED:") + " " + chalk.default(name));
};

program
  .command("generate")
  .alias("g")
  .description("Generate a new react component")
  .argument("string", "Component name")
  .action(generate);

program.parse();
