import inquirer from "inquirer";
import colors from "colors";
import logUpdate from "log-update";

// Types and Interfaces
interface SystemRequirements {
  cpu: string;
  memory: string;
  storage: string;
  docker: boolean;
  dockerCompose: boolean;
}

interface InstallationState {
  requirements: SystemRequirements;
  ipAddress: string;
  checkpoints: string[];
}

// Constants
const APPLICATIONS = {
  CORE: ["Video Call", "Document Management", "File Sharing"],
  ADVANCED: ["HR", "CRM", "EMR"],
  FULL: "All applications",
};

const REQUIRED_SPECS: SystemRequirements = {
  cpu: "3.8GHz",
  memory: "128GB",
  storage: "1TB SSD",
  docker: true,
  dockerCompose: true,
};

// Test credentials
const DEFAULT_KDM_IP = "192.168.1.100"; // Target KadMap Machine IP
const DEFAULT_MKDM_IP = "192.168.1.200"; // Master KadMap Data Machine IP
const LICENSE_KEY = "kadmapDEV";

// Animation Utilities
const loadingFrames = [".", "..", "...", "....", "....."];

function createLoadingAnimation(
  message: string,
  duration: number,
): Promise<void> {
  return new Promise((resolve) => {
    let i = 0;
    const interval = setInterval(() => {
      const frame = loadingFrames[i++ % loadingFrames.length];
      logUpdate(`${message}${frame}`);
    }, 150);

    setTimeout(() => {
      clearInterval(interval);
      logUpdate.clear();
      resolve();
    }, duration);
  });
}

// Help Menu
function displayHelpMenu(): void {
  console.log(`
    ${colors.green("Help Menu:")}
    - ${colors.yellow("help")}    - Display this help menu
    - ${colors.yellow("back")}    - Return to previous step
    - ${colors.yellow("restart")} - Restart installation
    - ${colors.yellow("skip")}    - Skip current step (use with caution)
    - ${colors.yellow("exit")}    - Exit installer
    `);
}

// Helper function to handle common commands
async function handleCommonCommands(
  input: string,
  currentStep: () => Promise<void>,
  previousStep?: () => Promise<void>,
): Promise<boolean> {
  const command = input.toLowerCase();
  if (command === "help") {
    displayHelpMenu();
    const { continueSetup } = await inquirer.prompt([{
      name: "continueSetup",
      type: "input",
      message: "Press Enter to continue setup",
    }]);
    if (continueSetup === "") {
      await currentStep();
    }
    return true;
  } else if (command === "restart") {
    await startInstallation();
    return true;
  } else if (command === "back" && previousStep) {
    await previousStep();
    return true;
  } else if (command === "exit") {
    console.log("Exiting...");
    process.exit(0);
  }
  return false;
}

// Installation Steps
async function welcomeScreen(): Promise<void> {
  console.log(`
${colors.bold("Welcome to KadMap Installation!")}
${colors.yellow("────")}
This tool will guide you through installing KadMap on a bare-metal machine remotely from this controller device.

Requirements:
    ${colors.red("1.")} The target machine is connected to this device via Ethernet.
    ${colors.red("2.")} You have SSH credentials for the target machine.
    ${colors.red("3.")} You have an admin access token to authorise setup.

Type ${colors.green("help")} at any step for more information.
Press ${colors.green("Enter")} to start the installation
${colors.yellow("────")}
`);

  const { answer } = await inquirer.prompt([{
    name: "answer",
    type: "input",
    message: "",
  }]);

  if (await handleCommonCommands(answer, welcomeScreen)) {
    return;
  }

  if (answer === "") {
    // User pressed enter, continue with installation
    return;
  } else if (answer.toLowerCase() === "exit") {
    console.log("Exiting...");
    process.exit(0);
  } else {
    console.log(
      `${
        colors.yellow(
          "Press Enter to start or type 'help' for more information.",
        )
      }`,
    );
    return welcomeScreen();
  }
}

// Installation Steps (continued)
async function establishConnection(state: InstallationState): Promise<void> {
  const { answer } = await inquirer.prompt([{
    name: "answer",
    type: "input",
    message: "Enter the IP address or hostname of the target machine:",
  }]);

  if (
    await handleCommonCommands(
      answer,
      () => establishConnection(state),
      welcomeScreen,
    )
  ) {
    return;
  }

  await createLoadingAnimation("Attempting to connect", 3000);

  if (answer === DEFAULT_KDM_IP) {
    console.log(
      `✅${colors.bold(" Successfully connected to ")}${
        colors.bold.italic(answer)
      }`,
    );
    state.checkpoints.push("connection");
    await checkSystemRequirements(state);
  } else {
    console.log(
      `⚠️  ${colors.red.italic("Could not connect to [")} ${
        colors.red.bold.italic(answer)
      } ${colors.red.italic("].")}`,
    );
    await establishConnection(state);
  }
}

async function checkSystemRequirements(
  state: InstallationState,
): Promise<void> {
  await createLoadingAnimation(
    "Checking system requirements (CPU, memory, storage)",
    4000,
  );

  // In production, implement actual checks
  const missingRequirements = [];
  if (!meetsRequirement("cpu")) {
    missingRequirements.push("CPU: 3.8GHz required");
  }
  if (!meetsRequirement("memory")) {
    missingRequirements.push("Memory: 128GB required");
  }
  if (!meetsRequirement("docker")) {
    missingRequirements.push("Docker not installed");
  }

  if (missingRequirements.length === 0) {
    console.log(
      `✅${
        colors.bold(
          " System requirements check complete. The machine is ready for KadMap.",
        )
      }`,
    );
    state.checkpoints.push("requirements");
    await prepareEnvironment(state);
  } else {
    console.log(`\nMissing Requirements:`);
    missingRequirements.forEach((req) => console.log(`❌ ${colors.red(req)}`));
    process.exit(1);
  }
}

async function prepareEnvironment(state: InstallationState): Promise<void> {
  await createLoadingAnimation(
    "Preparing environment: installing dependencies",
    5000,
  );
  console.log(`✅${colors.bold(" Environment setup complete.")}`);
  state.checkpoints.push("environment");
  await downloadKadMap(state);
}

async function downloadKadMap(state: InstallationState): Promise<void> {
  console.log(`\nHow would you like to download KadMap components?
${colors.red("1.")} Download from the internet
${colors.red("2.")} Transfer from this controller device`);

  const { choice } = await inquirer.prompt([{
    name: "choice",
    type: "input",
    message: "Enter your choice (1 or 2):",
  }]);

  if (
    await handleCommonCommands(
      choice,
      () => downloadKadMap(state),
      () => configureMKDM(state),
    )
  ) {
    return;
  }

  await createLoadingAnimation("Downloading KadMap components", 7000);
  console.log(
    `✅${colors.bold(" KadMap components downloaded and verified.")}`,
  );
  state.checkpoints.push("download");
  await configureMKDM(state);
}

async function configureMKDM(state: InstallationState): Promise<void> {
  const { mkdmAddress } = await inquirer.prompt([{
    name: "mkdmAddress",
    type: "input",
    message: "Enter the IP address of the Master KadMap Data Machine (MKDM):",
  }]);

  if (
    await handleCommonCommands(
      mkdmAddress,
      () => configureMKDM(state),
      () => downloadKadMap(state),
    )
  ) {
    return;
  }

  if (mkdmAddress === DEFAULT_MKDM_IP) {
    await createLoadingAnimation("Configuring MKDM connection", 4000);
    state.checkpoints.push("mkdm");
    await activateLicense(state);
  } else {
    console.log(
      `⚠️  ${colors.red.italic("Invalid MKDM address. Please try again.")}`,
    );
    await configureMKDM(state);
  }
}

async function activateLicense(state: InstallationState): Promise<void> {
  const { license } = await inquirer.prompt([{
    name: "license",
    type: "input",
    message: "Enter your KadMap license key:",
  }]);

  if (
    await handleCommonCommands(
      license,
      () => activateLicense(state),
      () => configureMKDM(state),
    )
  ) {
    return;
  }

  if (license === LICENSE_KEY) {
    await createLoadingAnimation("Activating license", 3000);
    console.log(`✅${colors.bold(" License activated successfully.")}`);
    state.checkpoints.push("license");
    await deployApplications(state);
  } else {
    console.log(
      `⚠️  ${colors.red.italic("Invalid license key. Please try again.")}`,
    );
    await activateLicense(state);
  }
}

async function deployApplications(state: InstallationState): Promise<void> {
  console.log(`\nSelect the applications to install:
${colors.red("1.")} Core Applications (${APPLICATIONS.CORE.join(", ")})
${colors.red("2.")} Advanced Applications (${APPLICATIONS.ADVANCED.join(", ")})
${colors.red("3.")} Full Suite (${APPLICATIONS.FULL})`);

  const { choice } = await inquirer.prompt([{
    name: "choice",
    type: "input",
    message: "Enter your choice:",
  }]);

  if (
    await handleCommonCommands(
      choice,
      () => deployApplications(state),
      () => activateLicense(state),
    )
  ) {
    return;
  }

  await createLoadingAnimation(
    "Setting up selected applications and creating workspaces",
    8000,
  );
  console.log(`✅${colors.bold(" Applications and workspaces are ready.")}`);
  state.checkpoints.push("applications");
  await enableServices(state);
}

async function enableServices(state: InstallationState): Promise<void> {
  await createLoadingAnimation("Enabling system services", 5000);
  console.log(
    `✅${colors.bold(" Services enabled and configured to start on boot.")}`,
  );
  state.checkpoints.push("services");
  await finalizeInstallation(state);
}

async function finalizeInstallation(state: InstallationState): Promise<void> {
  await createLoadingAnimation(
    "Running final system checks and testing synchronization with MKDM",
    4000,
  );

  if (state.checkpoints.length === 8) {
    console.log(`
${colors.bold.green("KadMap Installation Complete!")}
${colors.yellow("────")}
KadMap is now installed on the target machine.
You can disconnect the Ethernet cable from this controller device.

${
      colors.blue(
        "Running final system checks and testing synchronization with MKDM...",
      )
    }
`);
    await createLoadingAnimation("Finalizing installation", 3000);
    console.log(
      `✅${colors.bold(" All checks passed! KadMap is ready for use.")}`,
    );
  } else {
    console.log(
      `⚠️  ${
        colors.red.italic(
          "Final checks encountered issues. Please review the log and resolve any errors.",
        )
      }`,
    );
  }
}

// Main Installation Flow
async function startInstallation(): Promise<void> {
  const state: InstallationState = {
    requirements: REQUIRED_SPECS,
    ipAddress: DEFAULT_KDM_IP,
    checkpoints: [],
  };

  try {
    await welcomeScreen();
    await establishConnection(state);
  } catch (error) {
    console.error(
      `${colors.red("Installation Error:")} ${(error as Error).message}`,
    );
    process.exit(1);
  }
}



// Utility function to check system requirements
function meetsRequirement(requirement: keyof SystemRequirements): boolean {
  // In production, this would make actual system checks
  // This is a mock implementation for demonstration
  const systemInfo = {
    cpu: "4.0GHz",
    memory: "256GB",
    storage: "2TB SSD",
    docker: true,
    dockerCompose: true,
  };

  switch (requirement) {
    case "cpu":
      // Parse and compare CPU speeds
      const requiredCpu = parseFloat(REQUIRED_SPECS.cpu);
      const actualCpu = parseFloat(systemInfo.cpu);
      return actualCpu >= requiredCpu;

    case "memory":
      // Parse and compare memory (assuming GB units)
      const requiredMem = parseInt(REQUIRED_SPECS.memory);
      const actualMem = parseInt(systemInfo.memory);
      return actualMem >= requiredMem;

    case "storage":
      // Parse and compare storage (assuming TB units)
      const requiredStorage = parseFloat(REQUIRED_SPECS.storage);
      const actualStorage = parseFloat(systemInfo.storage);
      return actualStorage >= requiredStorage;

    case "docker":
      return systemInfo.docker;

    case "dockerCompose":
      return systemInfo.dockerCompose;

    default:
      return false;
  }
}


// Start Installation
startInstallation();