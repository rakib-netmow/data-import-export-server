const { spawn } = require("child_process");
const path = require("path");

const directoryName = "client-server";

// Create the directory
const mkdirProcess = spawn("mkdir", [directoryName]);

mkdirProcess.stdout.on("data", (data) => {
  console.log(data.toString());
});

mkdirProcess.stderr.on("data", (data) => {
  console.error(data.toString());
});

mkdirProcess.on("close", (mkdirCode) => {
  if (mkdirCode === 0) {
    console.log(`Directory created: ${directoryName}`);

    // Change to the new directory
    process.chdir(path.join(__dirname, directoryName));

    // Create a new React app using Create React App
    const createReactAppProcess = spawn("npx", ["create-react-app", "myapp"]);

    createReactAppProcess.stdout.on("data", (data) => {
      console.log(data.toString());
    });

    createReactAppProcess.stderr.on("data", (data) => {
      console.error(data.toString());
    });

    createReactAppProcess.on("close", (createCode) => {
      if (createCode === 0) {
        console.log("React app created successfully!");
      } else {
        console.error(`Error creating React app. Exit code: ${createCode}`);
      }
    });
  } else {
    console.error(`Error creating directory. Exit code: ${mkdirCode}`);
  }
});
