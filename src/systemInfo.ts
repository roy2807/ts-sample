import * as os from 'os';

type SystemInformation = {
    platform: string;
    architecture: string;
    hostname: string;
    cpus: number;
    totalMemory: string;
    freeMemory: string;
    uptime: string;
    userInfo: os.UserInfo<string>;
}

const showSystemInfo = (): void => {
    const info: SystemInformation = {
        platform: os.platform(),
        architecture: os.arch(),
        hostname: os.hostname(),
        cpus: os.cpus().length,
        totalMemory: `${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB`,
        freeMemory: `${(os.freemem() / 1024 / 1024 / 1024).toFixed(2)} GB`,
        uptime: `${(os.uptime() / 3600).toFixed(2)} hours`,
        userInfo: os.userInfo()
    };
    
    console.log('\n=== System Information ===\n');
    
    Object.entries(info).forEach(([key, value]) => {
        console.log(`${key}: ${JSON.stringify(value, null, 2)}`);
    });
};

// Run the display function
showSystemInfo(); 