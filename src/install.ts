import inquirer from "inquirer";
import colors from 'colors';
import logUpdate from 'log-update'





function InstallationComplete() {
    console.log(``)
    setTimeout(() => {
        console.log(`KadMap Installation Complete${colors.yellow('!')} `)
    }, 1000);
    setTimeout(() => {
        console.log(`---`)
    }, 1700);
    setTimeout(() => {
        console.log(`KadMap is now installed on the target machine.`)
    }, 2400);
    setTimeout(() => {
        console.log(`You can disconnect the Ethernet cable from this`)
    }, 3100);
    setTimeout(() => {
        console.log(`controller device. `)
    }, 3900);

}

function helpMenu() {
    console.log(``)
    console.log(`Type ${colors.green('help')} to see this menu help`)
    console.log(`- ${colors.yellow('Back')} - Return to the previous step.`)
    console.log(`- ${colors.yellow("Restart")} - Restart the setup from the beginning.`)
    console.log(`- ${colors.yellow('Skip')} - Skip the current step (use with caution).`)
    console.log(`- ${colors.yellow('exit')} - Exit the installer.`)

    setTimeout(() => {
        InstallationComplete()
    }, 3000);

}
// super selling point
function FinalSynchronization(AvailableRequirements:string[], IPAddress:string, FinalCheck:string[]) {
    console.log("finalsync", FinalCheck)

    if (FinalCheck.length == 9) {
        console.log("all good")
        const frames = ['.', '..', '...', '....', '.....']
        let i = 0
        const interval = setInterval(() => {
            const frame = frames[i++ % frames.length]
            logUpdate(`system checks and testing synchronization with MKDM${frame}`)
        }, 150)

        setTimeout(() => {
            clearInterval(interval)
            console.log(`✅${colors.bold('All checks passed! KadMap is ready for use.')}`)
            helpMenu()
        }, 4000);

    } else if (FinalCheck.length == 8) {
        console.log(`⚠️  ${colors.red.italic('Failed to install KadMap. cause: missed 1 steps')}`)
        setTimeout(() => {
            const sync = async () => { 
                const answer = await inquirer.prompt([{
                    name: 'name',
                    type: 'confirm',
                    message: 'would you like to restart?'
                }]);
                answer.name == true ? WelcomeScreen() : console.log(`⚠️  ${colors.red.italic(' Final checks encountered issues. Please review the log and resolve any errors.')}`)
            }
            sync()
        }, 1200);

    } else if (FinalCheck.length == 7) {
        console.log(`⚠️  ${colors.red.italic('Failed to install KadMap. cause: missed 2 steps')}`)
        setTimeout(() => {
            const sync = async () => {

                const answer = await inquirer.prompt([{
                    name: 'name',
                    type: 'confirm',
                    message: 'would you like to restart?'
                }]);
                answer.name == true ? WelcomeScreen() : console.log(`⚠️  ${colors.red.italic(' Final checks encountered issues. Please review the log and resolve any errors.')}`)
            }
            sync()
        }, 1200);

    } else if (FinalCheck.length == 6) {
        console.log(`⚠️  ${colors.red.italic('Failed to install KadMap. cause: missed 3 steps')}`)
        setTimeout(() => {
            const sync = async () => {

                const answer = await inquirer.prompt([{
                    name: 'name',
                    type: 'confirm',
                    message: 'would you like to restart?'
                }]);
                answer.name == true ? WelcomeScreen() : console.log(`⚠️  ${colors.red.italic(' Final checks encountered issues. Please review the log and resolve any errors.')}`)
            }
            sync()
        }, 1200);

    } else if (FinalCheck.length == 5) {
        console.log(`⚠️  ${colors.red.italic('Failed to install KadMap. cause: missed 4 steps')}`)
        setTimeout(() => {
            const sync = async () => {

                const answer = await inquirer.prompt([{
                    name: 'name',
                    type: 'confirm',
                    message: 'would you like to restart?'
                }]);
                answer.name == true ? WelcomeScreen() : console.log(`⚠️  ${colors.red.italic(' Final checks encountered issues. Please review the log and resolve any errors.')}`)
            }
            sync()
        }, 1200);

    } else if (FinalCheck.length == 4) {
        console.log(`⚠️  ${colors.red.italic('Failed to install KadMap. cause: missed 5 steps')}`)
        setTimeout(() => {
            const sync = async () => {

                const answer = await inquirer.prompt([{
                    name: 'name',
                    type: 'confirm',
                    message: 'would you like to restart?'
                }]);
                answer.name == true ? WelcomeScreen() : console.log(`⚠️  ${colors.red.italic(' Final checks encountered issues. Please review the log and resolve any errors.')}`)
            }
            sync()
        }, 1200);

    } else if (FinalCheck.length == 3) {
        console.log(`⚠️  ${colors.red.italic('Failed to install KadMap. cause: missed 6 steps')}`)
        setTimeout(() => {
            const sync = async () => {

                const answer = await inquirer.prompt([{
                    name: 'name',
                    type: 'confirm',
                    message: 'would you like to restart?'
                }]);
                answer.name == true ? WelcomeScreen() : console.log(`⚠️  ${colors.red.italic(' Final checks encountered issues. Please review the log and resolve any errors.')}`)
            }
            sync()
        }, 1200);

    } else if (FinalCheck.length == 2) {
        console.log(`⚠️  ${colors.red.italic('Failed to install KadMap. cause: missed 7 steps')}`)
        setTimeout(() => {
            const sync = async () => { 

                const answer = await inquirer.prompt([{
                    name: 'name',
                    type: 'confirm',
                    message: 'would you like to restart?'
                }]);
                answer.name == true ? WelcomeScreen() : console.log(`⚠️  ${colors.red.italic(' Final checks encountered issues. Please review the log and resolve any errors.')}`)
            }
            sync()
        }, 1200);

    } else if (FinalCheck.length == 1) {
        console.log(`⚠️  ${colors.red.italic('Failed to install KadMap. cause: missed 8 steps')}`)
        setTimeout(() => {
            const sync = async () => {

                const answer = await inquirer.prompt([{
                    name: 'name',
                    type: 'confirm',
                    message: 'would you like to restart?'
                }]);
                answer.name == true ? WelcomeScreen() : console.log(`⚠️  ${colors.red.italic(' Final checks encountered issues. Please review the log and resolve any errors.')}`)
            }
            sync()
        }, 1200);

    } else if (FinalCheck.length > 9) {
        console.log("let me know!!!!!!! is > 9")
    }




    // condition sholud be added here to do the final check e.g internet access and so on
    // so for now we stick to the goood side
}

// point +1
function EnableSevrice(AvailableRequirements:string[], IPAddress:string, FinalCheck:string[]) {
    console.log(FinalCheck)

    if (FinalCheck.length > 8) {
        FinalCheck.length = 8
        console.log("if > 8", FinalCheck)
    }

    const frames = ['.', '..', '...', '....', '.....']
    let i = 0
    const interval = setInterval(() => {
        const frame = frames[i++ % frames.length]
        logUpdate(`Enabling services to start on boot.${frame}`)
    }, 150)

    setTimeout(() => {
        clearInterval(interval)
    }, 4000);
    setTimeout(() => {
        console.log(`✅${colors.bold('Services are now set to start automatically on boot.')}`)
        FinalCheck.push("1")
        console.log("deploy", FinalCheck)
        FinalSynchronization(AvailableRequirements, IPAddress, FinalCheck)

    }, 5000);


}


// selling points +1
function DeployApplications(AvailableRequirements:string[], IPAddress:string, FinalCheck:string[]) {
    console.log(FinalCheck)
    console.log(``)
    console.log(`Select the applications to install:`)
    console.log(`${colors.red('1')}. Core Applications (Video Call, Document Management, File Sharing)`)
    console.log(`${colors.red("2")}. Advanced Applications (HR, CRM, EMR)`)
    console.log(`${colors.red("3")}. Full Suite (All applications)`)
    console.log(``)

    const Deploy = async () => {

        const answer = await inquirer.prompt([{
            name: 'name',
            type: 'input',
            message: 'Enter Your Choice:'
        }]);

        const frames = ['.', '..', '...', '....', '.....']
        let i = 0
        const interval = setInterval(() => {
            const frame = frames[i++ % frames.length]
            logUpdate(`Setting up selected applications and creating workspaces${frame}`)
        }, 150)

        setTimeout(() => {
            clearInterval(interval)

        }, 4800);


        const ans = answer.name.toLowerCase()
        setTimeout(() => {
            if (FinalCheck.length > 7) {
                FinalCheck.length = 7
                console.log(`if > 7`, FinalCheck)
            }

            if (ans == "help") {

                console.log(``)
                console.log(`Type ${colors.green('help')} to see this menu help`)
                console.log(`- ${colors.yellow('Back')} - Return to the previous step.`)
                console.log(`- ${colors.yellow("Restart")} - Restart the setup from the beginning.`)
                console.log(`- ${colors.yellow('Skip')} - Skip the current step (use with caution).`)
                console.log(`- ${colors.yellow('exit')} - Exit the installer.`)
                console.log(``)

                setTimeout(() => {
            ConfigSettings(AvailableRequirements, IPAddress, FinalCheck)
                }, 2000);

            } else if (ans == "restart") {
                WelcomeScreen()
            } else if (ans == "back") {

                License(AvailableRequirements, IPAddress, FinalCheck)

            } else if (ans == "skip") {
                // next step


                FinalSynchronization(AvailableRequirements, IPAddress, FinalCheck)

            } else if (ans == "exit") {
                console.log('Exiting.....')
                setTimeout(() => {
                    process.exit();
                }, 5000);
            } else if (answer.name == ('1')) {

                console.log(`${colors.bold('✅ Applications and workspaces are ready.')}`)
                setTimeout(() => {
                    FinalCheck.push("1")
                    EnableSevrice(AvailableRequirements, IPAddress, FinalCheck)
                }, 2000);


            } else if (answer.name == ('2')) {

                console.log(`${colors.bold('✅ Applications and workspaces are ready.')}`)
                setTimeout(() => {
                    FinalCheck.push("1")
                    EnableSevrice(AvailableRequirements, IPAddress, FinalCheck)
                }, 2000);


            } else if (answer.name == ('3')) {

                console.log(`${colors.bold('✅ Applications and workspaces are ready.')}`)
                setTimeout(() => {
                    FinalCheck.push("1")
                    EnableSevrice(AvailableRequirements, IPAddress, FinalCheck)
                }, 2000);



            } else {
                console.log(`${colors.yellow.italic('SyntaxError: Choose for Number 1,2,3 ')}`)
                setTimeout(() => {
                    Deploy()
                }, 1500);

            }
        }, 5000);

    }
    Deploy()

}


// good
// point +1
function KadmapCoreService(AvailableRequirements:string[], IPAddress:string, FinalCheck:string[]) {
    console.log(FinalCheck)

    if (FinalCheck.length > 6) {
        FinalCheck.length = 6
        console.log(`if > 6`, FinalCheck)
    }

    setTimeout(() => {

        const frames = ['.', '..', '...', '....', '.....']
        let i = 0
        const interval = setInterval(() => {
            const frame = frames[i++ % frames.length]
            logUpdate(`Starting KadMap services (Directory Service, Exchange Service, Security Service, and others)${frame}`)
        }, 150)

        setTimeout(() => {
            clearInterval(interval)
            console.log(`✅${colors.bold('KadMap core services are up and running.')}`)
            FinalCheck.push("1")
            DeployApplications(AvailableRequirements, IPAddress, FinalCheck)
        }, 7000);

    }, 5000);




}



// good
//selling point +1
function License(AvailableRequirements:string[], IPAddress:string, FinalCheck:string[]) {


    const license = async () => {

        const answer = await inquirer.prompt([{
            name: 'name',
            type: 'input',
            message: 'Enter the license key provided by your organization to activate KadMap on this machine:'
        }]);

        const ID = ('kadmapDEV')

        const frames = ['.', '..', '...', '....', '.....']
        let i = 0
        const interval = setInterval(() => {
            const frame = frames[i++ % frames.length]
            logUpdate(`Configuring network settings and applying license key${frame}`)
        }, 150)

        setTimeout(() => {
            clearInterval(interval)
        }, 4000);

        console.log("your licence", ID)


        const ans = answer.name.toLowerCase()
        setTimeout(() => {


            if (ans == "help") {

                console.log(``)
                console.log(`Type ${colors.green('help')} to see this menu help`)
                console.log(`- ${colors.yellow('Back')} - Return to the previous step.`)
                console.log(`- ${colors.yellow("Restart")} - Restart the setup from the beginning.`)
                console.log(`- ${colors.yellow('Skip')} - Skip the current step (use with caution).`)
                console.log(`- ${colors.yellow('exit')} - Exit the installer.`)
                console.log(``)

                setTimeout(() => {
                    license()
                }, 2000);

            } else if (ans == "restart") {
                WelcomeScreen()
            } else if (ans == "back") {

                Confirmation(AvailableRequirements, IPAddress, FinalCheck)

            } else if (ans == "skip") {


                DeployApplications(AvailableRequirements, IPAddress, FinalCheck)

            } else if (ans == "exit") {
                console.log('Exiting.....')
                setTimeout(() => {
                    process.exit();
                }, 5000);
            } else {




                if (answer.name == ID) {
                    FinalCheck.push("1")
                    console.log(`at license`, FinalCheck)
                    console.log(`✅${colors.bold(' Network settings configured. Connected to MKDM, and license key applied successfully.')}`)
                    console.log(``)
                    KadmapCoreService(AvailableRequirements, IPAddress, FinalCheck)

                } else {
                    setTimeout(() => {
                        console.log(`⚠️  ${colors.red.italic('Could not connect to [')} ${colors.red.bold.italic(answer.name)} ${colors.red.italic('] : or verify the license key. Please check the information and try again.')} .`)
                        license()
                    }, 5000);
                }
            }
        }, 4500);
    }
    license()
}



// good
// no points
function True(AvailableRequirements:string[], IPAddress:string, FinalCheck:string[]) {
    const newMKDM:string[] = []

    const T = async () => {
        const answer = await inquirer.prompt([{
            name: 'name',
            type: 'input',
            message: 'Enter new MKDM Adress'
        }]);


        const ans = answer.name.toLowerCase()

        newMKDM.push(answer.name)
        const frames = ['.', '..', '...']
        let i = 0
        const interval = setInterval(() => {
            const frame = frames[i++ % frames.length]
            logUpdate(`verifing${frame}`)
        }, 150)

        setTimeout(() => {
            clearInterval(interval)

        }, 4000);
        setTimeout(() => {


            if (ans == "help") {

                console.log(``)
                console.log(`Type ${colors.green('help')} to see this menu help`)
                console.log(`- ${colors.yellow('Back')} - Return to the previous step.`)
                console.log(`- ${colors.yellow("Restart")} - Restart the setup from the beginning.`)
                console.log(`- ${colors.yellow('Skip')} - Skip the current step (use with caution).`)
                console.log(`- ${colors.yellow('exit')} - Exit the installer.`)
                console.log(``)

                T()

            } else if (ans == "restart") {
                WelcomeScreen()
            } else if (ans == "back") {
                Confirmation(AvailableRequirements, IPAddress, FinalCheck)
            } else if (ans == "skip") {

                License(AvailableRequirements, IPAddress, FinalCheck)
            } else if (answer.name == "exit") {


            } else {
                setTimeout(() => {
                    clearInterval(interval)
                    console.log(`Added ${newMKDM} successfully`)
                    License(AvailableRequirements, IPAddress, FinalCheck)
                }, 7000);

            }
        }, 4500);
    }
    T()
}



// good
//no points
function Confirmation(AvailableRequirements:string[], IPAddress:string, FinalCheck:string[]) {


    const confirm = async () => {

        const answer = await inquirer.prompt([{
            name: 'name',
            type: 'confirm',
            message: 'Would you like to add another MKDM address?'
        }]);

        // Confirmation and Config sholud be the same 

        if (answer.name == true) {

            True(AvailableRequirements, IPAddress, FinalCheck)
        } else if (answer.name == false) {
            setTimeout(() => {
                License(AvailableRequirements, IPAddress, FinalCheck)
            }, 1000);
        } else {
            console.log(`${colors.yellow("syntaxError")}`)
            confirm()
        }



    }
    confirm()
}



// good
// selling point +1
function ConfigSettings(AvailableRequirements:string[], IPAddress:string, FinalCheck:string[]) {


    if (FinalCheck.length > 4) {
        FinalCheck.length = 4
        console.log("if > 4", FinalCheck)
    }


    const Configkadmap = async () => {

        const answer = await inquirer.prompt( [{
            name: 'name',
            type: 'input',
            message: 'Enter the IP address or hostname of the Master KadMap Data Machine (MKDM):'
        }] );

        console.log("IPAdress", IPAddress)

        const ans = answer.name.toLowerCase()




        if (ans == "help") {

            console.log(``)
            console.log(`Type ${colors.green('help')} to see this menu help`)
            console.log(`- ${colors.yellow('Back')} - Return to the previous step.`)
            console.log(`- ${colors.yellow("Restart")} - Restart the setup from the beginning.`)
            console.log(`- ${colors.yellow('Skip')} - Skip the current step (use with caution).`)
            console.log(`- ${colors.yellow('exit')} - Exit the installer.`)
            console.log(``)

            setTimeout(() => {
                Configkadmap()
            }, 2000);

        } else if (ans == "restart") {
            WelcomeScreen()
        } else if (ans == "back") {

            DownloadKadMap(AvailableRequirements, IPAddress, FinalCheck)

        } else if (ans == "skip") {

            Confirmation(AvailableRequirements, IPAddress, FinalCheck)
        } else if (ans == "exit") {
            console.log('Exiting.....')
            setTimeout(() => {
                process.exit();
            }, 5000);
        } else {
            if (answer.name == IPAddress) {
                FinalCheck.push("1")
                console.log("config", FinalCheck)

                Confirmation(AvailableRequirements, IPAddress, FinalCheck)
            } else if (answer.name != IPAddress) {
                setTimeout(() => {
                    console.log(`⚠️  ${colors.red.italic('Could not connect to [')} ${colors.red.bold.italic(answer.name)} ${colors.red.italic(']. please check your SSH credentials or Invald IpAdress and try again')} .`)
                    Configkadmap()
                }, 3000);
            }
        }



    }
    Configkadmap()
}



// good
// selling point +1
function DownloadKadMap(AvailableRequirements:string[], IPAddress:string, FinalCheck:string[]) {
    if (FinalCheck.length > 3) {
        FinalCheck.length = 3
        console.log("if > 3", FinalCheck)
    }

    console.log(`How would you like to download KadMap components?`)
    console.log(`${colors.red('1')}. Download from the internet`)
    console.log(`${colors.red("2")}. Transfer from this controller device `)



    const DownloadInternet = async () => {

        const answer = await inquirer.prompt( [{
            name: 'name',
            type: 'input',
            message: 'Enter Your Choice:'
        }]);


        const ans = answer.name.toLowerCase()

        if (ans == "help") {

            console.log(``)
            console.log(`Type ${colors.green('help')} to see this menu help`)
            console.log(`- ${colors.yellow('Back')} - Return to the previous step.`)
            console.log(`- ${colors.yellow("Restart")} - Restart the setup from the beginning.`)
            console.log(`- ${colors.yellow('Skip')} - Skip the current step (use with caution).`)
            console.log(`- ${colors.yellow('exit')} - Exit the installer.`)
            console.log(``)

            setTimeout(() => {
                DownloadInternet()
            }, 2000);

        } else if (ans == "restart") {
            WelcomeScreen()
        } else if (ans == "back") {
            // back step
            EstablishConnection(AvailableRequirements, FinalCheck)
        } else if (ans == "skip") {

            ConfigSettings(AvailableRequirements, IPAddress, FinalCheck)
        } else if (answer.name == "exit") {
            console.log('Exiting.....')
            setTimeout(() => {
                process.exit();
            }, 5000);
        } else if (answer.name == ('1')) {


            const frames = ['\\', '-', '/']
            let i = 0
            const interval = setInterval(() => {
                const frame = frames[i++ % frames.length]
                logUpdate(` Downloading KadMap components${frame}`)
            }, 150)

            setTimeout(() => {
                clearInterval(interval)
                console.log(`${colors.bold('✅ KadMap components downloaded and verified.')}`)
                FinalCheck.push("1")
                console.log("downloadkadmap", FinalCheck)
                ConfigSettings(AvailableRequirements, IPAddress, FinalCheck)
            }, 7000);


        } else if (answer.name == ('2')) {

            const frames = ['\\', '-', '/']
            let i = 0
            const interval = setInterval(() => {
                const frame = frames[i++ % frames.length]
                logUpdate(` Downloading KadMap components${frame}`)
            }, 150)

            setTimeout(() => {
                clearInterval(interval)
                console.log(`${colors.bold('✅ KadMap components downloaded and verified.')}`)
                FinalCheck.push("1")
                console.log("downloadkadmap", FinalCheck)
                ConfigSettings(AvailableRequirements, IPAddress, FinalCheck)
            }, 7000);





        } else {
            console.log(`${colors.yellow.italic('SyntaxError: Choose for Number 1 or 2 ')}`)
            setTimeout(() => {
                DownloadKadMap(AvailableRequirements, IPAddress, FinalCheck)
            }, 1500);

        }


    }
    DownloadInternet()


}



// good
// no point
function PrepareEnvironment(AvailableRequirements:string[], IPAddress:string, FinalCheck:string[]) {

    const frames = ['.', '..', '...']
    let i = 0
    const interval = setInterval(() => {
        const frame = frames[i++ % frames.length]
        logUpdate(`Preparing environment: updating packages, installing Docker, Docker Compose, and network utilities${frame}`)
    }, 150)

    setTimeout(() => {
        clearInterval(interval)
    }, 5000);


    setTimeout(() => {
        console.log("systemcheck", FinalCheck)
        console.log(`${colors.bold('✅ Environment setup complete. The machine is ready for KadMap components. ')}`)
        DownloadKadMap(AvailableRequirements, IPAddress, FinalCheck)
    }, 6000)




}



// goood
// Selling point +1
function CheckSystemRequierment(AvailableRequirements:string[], IPAddress:string, FinalCheck:string[]) {
    const Requirements =['3.8GHz', "128GB", '1TG SSD']
    console.log("requirementes", Requirements, "IpAddress", IPAddress)


    if (FinalCheck.length > 2) {
        console.log(FinalCheck)
        FinalCheck.length = 2
        console.log('if > 2', FinalCheck.length)
    }

    if (AvailableRequirements.includes('3.8GHz') && AvailableRequirements.includes("128GB") && AvailableRequirements.includes('1TG SSD')) {
        console.log(` ✅${colors.bold(' System requirements check complete. The machine is ready for KadMap.')}`)
        FinalCheck.push('1')

        PrepareEnvironment(AvailableRequirements, IPAddress, FinalCheck)


    } else {
        console.log(`[List specific missing requirements, e.g., insufficient memory, Docker not installed]`)
    }
}



// Selling point +1
function EstablishConnection(AvailableRequirements:string[], FinalCheck:string[]) {



    console.log("Avaliable requirements", AvailableRequirements)

    const IPAddress = 'user123.45.67.89'
    const TargetMachine = async () => {

        const answer2 = await inquirer.prompt([{
            name: 'name',
            type: 'input',
            message: 'Enter the IP address or hostname of the target machine:'
        }]);


        console.log("IPAddress", IPAddress)
        const ans = answer2.name.toLowerCase()


        if (ans == "help") {

            console.log(``)
            console.log(`Type ${colors.green('help')} to see this menu help`)
            console.log(`- ${colors.yellow('Back')} - Return to the previous step.`)
            console.log(`- ${colors.yellow("Restart")} - Restart the setup from the beginning.`)
            console.log(`- ${colors.yellow('Skip')} - Skip the current step (use with caution).`)
            console.log(`- ${colors.yellow('exit')} - Exit the installer.`)
            console.log(``)

            setTimeout(() => {
                TargetMachine()
            }, 5000);

        } else if (ans == "restart") {
            FinalCheck.length == 0
            WelcomeScreen()
        } else if (ans == "back") {
            // back step
            WelcomeScreen()
        } else if (ans == "skip") {
            // next step

            DownloadKadMap(AvailableRequirements, IPAddress, FinalCheck)
        } else if (ans == "exit") {
            console.log('Exiting.....')
            setTimeout(() => {
                process.exit();
            }, 5000);
        } else {

            // console.log(`Attempting to connect to [${colors.bold.italic(answer2.name)}]...`)

            const frames = ['.', '..', '...']
            let i = 0
            const interval = setInterval(() => {
                const frame = frames[i++ % frames.length]
                logUpdate(`Attempting to connect to [${colors.bold.italic(answer2.name)}]${frame}`)
            }, 150)

            setTimeout(() => {
                clearInterval(interval)
            }, 5000);


            setTimeout(() => {

                const frames = ['.', '..', '...']
                let i = 0
                const interval = setInterval(() => {
                    const frame = frames[i++ % frames.length]
                    logUpdate(`connecting${frame}`)
                }, 150)

                setTimeout(() => {
                    clearInterval(interval)
                }, 7000);



                setTimeout(() => {
                    if (IPAddress == answer2.name) {
                        console.log(`✅${colors.bold(' Successfully connected to ')}${colors.bold.italic(answer2.name)}`)
                        setTimeout(() => {
                            FinalCheck.push("1")
                            console.log(`establish`, FinalCheck)
                            CheckSystemRequierment(AvailableRequirements, IPAddress, FinalCheck)

                        }, 100);

                    } else {
                        console.log(`⚠️  ${colors.red.italic('Could not connect to [')} ${colors.red.bold.italic(answer2.name)} ${colors.red.italic(']. Please check the network connection or SSH credentials and try again')} .`)
                        TargetMachine()
                    }


                }, 7000);

            }, 5000);

        }
    }
    TargetMachine()
}



// selling point +1
const WelcomeScreen = async () => {
    console.log(`${colors.bold('Welcome to KadMap Installation!')}`)

    console.log("----")
    console.log(`This tool will guide you through installing KadMap on a bare-metal machine remotely from this controller device.
    Requirements:`)
    console.log(`${colors.red('1')}. The target machine is connected to this device via Ethernet.`)
    console.log(`${colors.red("2")}. You have SSH credentials ${colors.red('for')} the target machine.`)
    console.log(`${colors.red('3')}. The organization admin is available ${colors.red('for')} license and MKDM details.`)
    console.log(`Type ${colors.green('help')} at any step ${colors.red('for')} more information.Press ${colors.green('Enter')} to start the installation`)
    console.log(`Type ${colors.red.bold("Exit")} to Exit`)




    const answer = await inquirer.prompt([{
        name: 'name',
        type: 'input',
        message: ''
    }]);

    const FinalCheck:string[] = []

    const AvailableRequirements:string[]  = ['3.8GHz', "128GB", '1TG SSD']


    const ans = answer.name.toLowerCase()

    if (ans == "help") {

        console.log(``)
        console.log(`Type ${colors.green('help')} to see this menu help`)
        console.log(`- ${colors.yellow('Back')} - Return to the previous step.`)
        console.log(`- ${colors.yellow("Restart")} - Restart the setup from the beginning.`)
        console.log(`- ${colors.yellow('Skip')} - Skip the current step (use with caution).`)
        console.log(`- ${colors.yellow('exit')} - Exit the installer.`)

        setTimeout(() => {
            WelcomeScreen()
        }, 2000);
    } else if (ans == "restart") {
        WelcomeScreen()

    } else if (ans.name == "back") {
        // back step
        WelcomeScreen()
    } else if (ans == "skip") {
        // next step
        FinalCheck.push('1')
        console.log(FinalCheck)
        EstablishConnection(AvailableRequirements , FinalCheck)
    } else if (ans == "") {
        FinalCheck.push('1')
        console.log(FinalCheck)
        EstablishConnection(AvailableRequirements, FinalCheck)
    } else if (ans == "enter") {
        FinalCheck.push('1')
        console.log(FinalCheck)
        EstablishConnection(AvailableRequirements, FinalCheck)
    } else if (ans == "exit") {
        console.log('Exiting.....')
        setTimeout(() => {
            process.exit();
        }, 5000);
    } else {
        console.log(`${colors.red.italic.bold('SyntaxError')}`)
        WelcomeScreen()
    }




}
WelcomeScreen();




// note:help menu left
