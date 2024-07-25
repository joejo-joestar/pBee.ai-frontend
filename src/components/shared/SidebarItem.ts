export interface SidebarItem {
    title: string;
    path: string;
    icon: any;
    iconOpened?: any;
    iconClosed?: any;
    subNav?: SidebarItem[];
}