export const MODULE_ADDRESS = {
    HOME: 'home', // Main Outlook
    CONTACT: 'contact', // Get In touch
    PORTFOLIO: 'case-studies', // Portfolios
    EXPERTISE: 'expertise', // Will contain all the skills we offer
    SETTINGS: 'settings',
    PRODUCTS: 'products', // For future
    ABOUT_US: 'about' // Company Profile, Life at <Location>, About Us
}

export const MODULE_NAMES = {
    [MODULE_ADDRESS.HOME]: 'Home',
    [MODULE_ADDRESS.CONTACT]: 'Get In Touch',
    [MODULE_ADDRESS.PORTFOLIO]: 'Case Studies',
    [MODULE_ADDRESS.EXPERTISE]: 'Services',
    [MODULE_ADDRESS.PRODUCTS]: 'Products',
    [MODULE_ADDRESS.ABOUT_US]: 'About Us',
    [MODULE_ADDRESS.SETTINGS]: 'Settings',
}

export interface ModuleInfo {
    id: number;
    name: string;
    info: string;
}