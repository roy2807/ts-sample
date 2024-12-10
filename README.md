# KadMap CLI Development Guide

## Setup & Running
1. Install dependencies:
```bash
 yarn install
```

2. Run the CLI:
```bash
  yarn start
```

## Test Information
Use these values when testing:

### Valid Test Credentials
- Target Machine IP Address: `192.168.1.100`
- License Key: `kadmapDEV`
- MKDM Address: `192.168.1.200`

### System Requirements (Mock)
The system check will pass with these mock values:
- CPU: 4.0GHz
- Memory: 256GB
- Storage: 2TB SSD
- Docker: Installed
- Docker Compose: Installed

## Testing Flow
1. Press Enter at welcome screen
2. Enter test IP: `192.168.1.100`
3. System check will run automatically
4. Choose download method (1 or 2)
5. Enter MKDM address: `192.168.1.200`
6. Enter license key: `kadmapDEV`
7. Select application suite (1, 2, or 3)

## Common Commands for Testing
- `help` - Display help menu
- `back` - Test navigation
- `restart` - Test restart functionality
- `exit` - Test exit functionality

## Expected Checkpoints
The installation tracks these steps:
1. connection
2. requirements
3. environment
4. download
5. mkdm
6. license
7. applications
8. services
