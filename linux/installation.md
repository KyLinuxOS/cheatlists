# Installation

## Dual boot avec Windows

1. Installer Linux en recréant les partitions suivantes :

   - UEFI 500 mo
        /boot/efi (fat32)
   - Linux 
        / (Btrfs) 25go
        /home (Btrfs)  5go minimum
    - Windows (Ntfs) 60go minimum
    - Data (Ntfs but you can use EXT4 with software on Windows)
