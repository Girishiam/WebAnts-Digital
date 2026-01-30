export interface CaseStudy {
    id: string;
    slug: string;
    title: string;
    description: string;
    image: string;
    link: string;
    category: string;
    techStack: string[];
    challenge: string;
    solution: string;
    features: string[];
    result: string;
    testimonial?: {
        text: string;
        author: string;
        role: string;
    };
}

export const caseStudies: CaseStudy[] = [
    {
        id: '1',
        slug: 'social-hype',
        title: 'Social Hype',
        description: 'A dynamic social media marketing platform designed to amplify brand presence through data-driven campaigns and influencer connections.',
        image: '/case_study/socialhype.png',
        link: 'https://social-hype.vercel.app/',
        category: 'Custom Website Design',
        techStack: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'React Query'],
        challenge: 'The client needed a high-performance platform that could handle real-time analytics and complex user interactions without compromising on visual fidelity. The main challenge was integrating scattered social media APIs into a unified, coherent dashboard.',
        solution: 'We architected a modular dashboard system using Next.js for server-side rendering, ensuring lightning-fast load times. We implemented a custom caching layer to handle API rate limits and used Framer Motion to create fluid, engagement-boosting micro-interactions.',
        features: [
            'Real-time Analytics Dashboard',
            'Influencer Discovery Engine',
            'Campaign Management Suite',
            'Automated Reporting Tools'
        ],
        result: 'The platform successfully launched with a 40% increase in user engagement compared to the MVP. Page load speeds improved by 300%, and the client secured Series A funding shortly after release.'
    },
    {
        id: '2',
        slug: 'car-rental-platform',
        title: 'Luxe Drive',
        description: 'A premium car rental booking interface featuring real-time availability, 3D vehicle previews, and a seamless checkout experience.',
        image: '/case_study/Car-rental.png',
        link: 'https://car-rental-frontend-rose-nu.vercel.app/',
        category: 'Custom Website Design',
        techStack: ['React', 'Three.js', 'Tailwind CSS', 'Stripe'],
        challenge: 'The rental market is crowded with clunky interfaces. The client wanted to disrupt the market with a "Tesla-like" booking experience where users could visually inspect cars before booking, requiring heavy 3D optimization.',
        solution: 'We integrated Three.js to render lightweight 3D car models that users can rotate and inspect. The booking flow was simplified to 3 steps, with state persistence to prevent data loss. We optimized assets to ensure the 3D elements didn\'t slow down the mobile experience.',
        features: [
            '360-degree Vehicle Viewer',
            'Real-time Availability Calendar',
            'Instant ID Verification Integration',
            'Dynamic Pricing Engine'
        ],
        result: 'Conversion rates jumped by 25% due to the trust built by the 3D inspection feature. Mobile bookings increased significanty as the optimized interface performed flawlessly on all devices.'
    },
    {
        id: '3',
        slug: 'zack-kalesar-portfolio',
        title: 'Zack Kalesar Portfolio',
        description: 'A high-impact personal brand portfolio for a professional football player, highlighting stats, media gallery, and career milestones.',
        image: '/case_study/football_player_portfolio.png',
        link: 'https://zack-kalesar.vercel.app/',
        category: 'Custom Website Design',
        techStack: ['Next.js', 'GSAP', 'Tailwind CSS'],
        challenge: 'Athletes need portfolios that capture their energy. A static resume site wasn\'t enough. The challenge was to create a site that felt "alive" and captured the dynamism of football without being distracting.',
        solution: 'We used GSAP for high-performance scroll animations. As users scroll, the background shifts and stats animate up, mimicking the pace of a match. We focused heavily on video optimization to serve high-quality highlights without buffering.',
        features: [
            'Dynamic Stat Visualizers',
            'Video Highlight Reel integration',
            'Press & Media Gallery',
            'Interactive Timeline'
        ],
        result: 'The portfolio successfully helped the player secure a new sponsorship deal. The site received an Awwwards nomination for its unique use of typography and motion.'
    },
    {
        id: '4',
        slug: 'nexus-dashboard',
        title: 'Nexus Dashboard',
        description: 'A comprehensive SaaS analytics dashboard providing deep insights for enterprise resource planning (ERP) and team management.',
        image: '/case_study/Dashboard.png',
        link: 'https://dash-board-nexus.vercel.app/',
        category: 'Web App Development',
        techStack: ['React', 'D3.js', 'Firebase', 'Material UI'],
        challenge: 'Enterprise dashboards often suffer from information overload. The goal was to display massive datasets (1M+ rows) in a way that was digestible and actionable for C-level executives.',
        solution: 'We implemented a "Drill-Down" architecture. The initial view shows high-level KPIs. Clicking any metric expands it into detailed D3.js charts. We used virtualization to render large tables smoothly without lagging the browser.',
        features: [
            'Custom Data Visualization Widgets',
            'Role-Based Access Control',
            'Exportable PDF Reports',
            'Dark/Light Mode Toggle'
        ],
        result: 'Client reported a 50% reduction in time-to-insight for their management team. The dashboard is now the central hub for their daily operations.'
    },
    {
        id: '5',
        slug: 'bear-ecommerce',
        title: 'Bear Ecommerce',
        description: 'A robust e-commerce storefront built for scalability, featuring advanced product filtering, cart management, and secure payments.',
        image: '/case_study/Beer_Ecommerce.png',
        link: 'https://ecommerceshop-six.vercel.app/',
        category: 'Shopify / E-commerce',
        techStack: ['Next.js', 'Shopify Storefront API', 'Redux', 'Tailwind'],
        challenge: 'The brand needed to move away from a generic template to a custom headless solution to improve SEO and load speeds. They specifically needed complex filtering logic for their diverse product catalog.',
        solution: 'We built a headless commerce solution using Next.js and the Shopify Storefront API. This allowed us to decouple the frontend from the backend, giving us full control over the URL structure (great for SEO) and page transitions.',
        features: [
            'Headless Shopify Integration',
            'Algolia Search Implementation',
            'Multi-currency Support',
            'One-page Checkout'
        ],
        result: 'SEO rankings for key product terms improved to page 1 within 3 months of launch. The average cart value increased by 15% due to the streamlined experience.'
    },
    {
        id: '6',
        slug: 'property-builder',
        title: 'Urban Builders',
        description: 'A corporate website for a real estate development firm, visualizing future projects with immersive galleries and lead generation forms.',
        image: '/case_study/builder.png',
        link: 'https://property-frontend-fr.vercel.app/',
        category: 'Custom Website Design',
        techStack: ['Next.js', 'Sanity CMS', 'Tailwind'],
        challenge: 'Real estate websites effectively need to sell a dream. The client needed a way for their non-technical marketing team to update project statuses and images easily while maintaining a rigid design system.',
        solution: 'We integrated Sanity.io as a headless CMS. We created custom content blocks that matched the design system, allowing the marketing team to build unique landing pages for each property development without breaking the layout.',
        features: [
            'Interactive Property Map',
            'Virtual Tour Integration',
            'Lead Capture CRM connection',
            'Dynamic Project Status Updates'
        ],
        result: 'Lead generation increased by 60%. The marketing team can now launch new property pages in minutes instead of days.'
    },
    {
        id: '7',
        slug: 'ai-itinerary',
        title: 'AI Travel Planner',
        description: 'An intelligent travel companion that generates personalized trip itineraries based on user preferences, budget, and time constraints.',
        image: '/case_study/AI_Itinerary.png',
        link: 'https://ai-itenary-trip-generator-6wtz.vercel.app/',
        category: 'AI Integration',
        techStack: ['Next.js', 'OpenAI API', 'Google Maps API', 'Tailwind'],
        challenge: 'Users are overwhelmed by travel planning. The challenge was to take vague user inputs ("I want a romantic trip to Italy") and convert them into a structured, visible 7-day plan with maps and bookings.',
        solution: 'We used the OpenAI API to process natural language inputs and generate structured JSON responses. We mapped these locations onto Google Maps for a visual itinerary. The UI was designed to feel like a chat with a travel agent.',
        features: [
            'AI-Powered Trip Generation',
            'Interactive Map View',
            'Save & Share Itineraries',
            'Budget Estimation'
        ],
        result: 'Viral growth on launch. Users generated over 10,000 itineraries in the first month. The app was featured in several "Top AI Tools" newsletters.'
    },
    {
        id: '8',
        slug: 'racing-team',
        title: 'Velocity Racing',
        description: 'A high-octane website for a professional racing team, featuring team profiles, race schedules, and live timing integrations.',
        image: '/case_study/Racing_Team.png',
        link: 'https://racing-team-frontend.vercel.app/',
        category: 'Custom Website Design',
        techStack: ['Next.js', 'Framer Motion', 'Supabase'],
        challenge: 'Racing is about speed. The website had to reflect that. The client wanted a "cyberpunk/racing" aesthetic without it looking cheesy or slow.',
        solution: 'We used a dark mode-first design with neon accents (CSS variables) to match the car liveries. We optimized large hero videos of race cars to autoplay instantly. Data for race results was improved via Supabase Realtime.',
        features: [
            'Live Race Timing Integration',
            'Driver Telemetry Visualization',
            'Merchandise Store',
            'Fan Club Membership Area'
        ],
        result: 'Fan engagement on the site quadrupled. The team reported that sponsors were "extremely impressed" with the digital presentation.'
    }
];
