export interface navLinkConfigInterface {
    name?: string,
    link?: string,
    category?: string,
}

export interface navLinkMenuConfigInterface {
    name?: string,
    link?: string,
    menuShow?: boolean,
    menu?: Array<navLinkConfigInterface>,
}

const navLinkConfig: Array<navLinkMenuConfigInterface> = [
    {
        name: 'Home',
        link: '/',
    },
    {
        name: 'About Us',
        link: '/about'
    },
    {
        name: 'Products',
        menuShow: true,
        menu: [
            { name: 'shopping bags', category: 'shopping-bags' },
            { name: 'tote bags', category: 'tote-bags' },
            { name: 'promotional bags', category: 'promotional-bags' },
            { name: 'wine bottle bags', category: 'wine-bottle-bags' },
        ]
    },
    {
        name: 'Blogs',
        link: '/blogs',
    },
    // {
    //     name: 'Gallery',
    //     link: '/gallery',
    // },
    {
        name: 'Contact Us',
        link: '/contact'
    },
]

export default navLinkConfig;