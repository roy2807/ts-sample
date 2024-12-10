import inquirer from "inquirer";
import logUpdate from "log-update";

const frames = ["-", "\\", "|", "/"];
let index = 0;

setInterval(() => {
  const frame = frames[index = ++index % frames.length];

  logUpdate(
    `
        ♥♥
   ${frame} unicorns ${frame}
        ♥♥
`,
  );
}, 80);

inquirer.prompt([{
  name: "name",
  type: "input",
  message: "tell me your your name",
}], {}).then((answer) => {
  console.log({ answer });
});
