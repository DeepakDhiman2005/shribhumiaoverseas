export interface ClientInterface {
    name: string,
    description: string,
    place?: string,
}

const clients: Array<ClientInterface> = [
    {
        name: 'Exceptional Quality & Timely Delivery',
        description: 'Shri Bhumia Overseas has been our go-to supplier for sustainable bags. The quality of their jute and cotton bags is outstanding, and their commitment to timely delivery makes them a reliable partner. We highly recommend their products.',
        place: 'PARRS PRODUCTS, New Zealand'
    },
    {
        name: 'Sustainable & Stylish – Perfect for Our Brand',
        description: "We wanted eco-friendly, customizable bags that aligned with our brand's values. Shri Bhumia Overseas delivered exactly what we needed! The bags are stylish, durable, and made from high-quality recycled cotton. Excellent customer service too.",
        place: 'Re-loved Apparel, Australia'
    },
    {
        name: 'A Trusted Supplier for Years',
        description: 'We have been working with Shri Bhumia Overseas for a long time, and they never fail to impress. Their dedication to ethical sourcing, customization, and customer satisfaction makes them a standout manufacturer in the industry.',
        place: 'Koopman International BV, The Netherlands',
    },
    {
        name: 'Premium Products with Ethical Sourcing',
        description: "Their jute and cotton bags are not only premium quality but also ethically sourced. It's great to work with a manufacturer that prioritizes sustainability and fair trade. Highly recommended.",
        place: 'Dabur India'
    },
    {
        name: 'Customization & Bulk Orders Made Easy',
        description: "Shri Bhumia Overseas helped us with bulk customized orders, ensuring our promotional campaigns were successful. Their attention to detail and ability to meet our exact requirements were truly commendable.",
        place: 'Tree Top Trading, Colombia'
    }
]

export default clients;