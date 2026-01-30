export interface CaseStudy {
    id: string;
    slug: string;
    title: string;
    description: string;
    image: string;
    link: string;
    category: string;
    techStack: string[];
    platform: string;
    year: string;
    industry: string;
    services: string[];
    challenge: string;
    solution: string;
    features: string[];
    result: string;
    stats: {
        label: string;
        value: string;
    }[];
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
        techStack: ['Next.js', 'Tailwind', 'Framer Motion', 'React Query'],
        platform: 'Web App',
        year: '2024',
        industry: 'Marketing Tech',
        services: ['UI/UX Design', 'Full Stack Dev', 'API Integration'],
        challenge: 'The client, a burgeoning influencer marketing agency, faced a critical bottleneck: their existing workflow relied on disjointed spreadsheets and manual tracking, leading to data discrepancies and missed campaign opportunities. \n\nUsers experienced significant lag when loading real-time analytics for viral campaigns, and the lack of visual cohesion made the platform feel outdated compared to competitors. They needed a system that could ingest millions of data points from TikTok, Instagram, and Twitter in real-time without crashing, while presenting this data in a sleek, "hype-worthy" interface that would appeal to their Gen-Z roster.',
        solution: 'We engineered a high-performance Single Page Application (SPA) using Next.js to leverage React Server Components for heavy initial data loads. We implemented a robust backend using Node.js and Redis, creating a custom caching layer to handle API rate limits and serve frequently accessed influencer tiers instantly.\n\nVisually, we adopted a "Cyber-Glass" aesthetic using Tailwind CSS, featuring backdrop blurs, dark modes, and neon gradients. We employed Framer Motion to create fluid, engagement-boosting micro-interactions—like "like" bursts and smooth page transitions—that make the app feel alive. We also integrated Recharts for dynamic data visualization, allowing brands to see ROI spikes in real-time.',
        features: [
            'Real-time Analytics Dashboard',
            'Influencer Discovery Engine',
            'Campaign Management Suite',
            'Automated Reporting Tools'
        ],
        result: 'The relaunch was a massive success. User retention increased by 45% within the first month due to the improved UX. The platform now handles over 500,000 active concurrent connections during peak campaign drops with zero downtime.\n\nThe "Influencer Discovery" feature alone reduced campaign setup time from 3 days to 45 minutes. The client secured a $5M Series A funding round, explicitly citing the "world-class technology infrastructure" as a key valuation driver.',
        stats: [
            { label: 'User Growth', value: '40%' },
            { label: 'Load Time', value: '0.4s' }
        ]
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
        platform: 'Web / Mobile',
        year: '2023',
        industry: 'Automotive / Travel',
        services: ['3D Modeling', 'Frontend Dev', 'Payment Systems'],
        challenge: 'The luxury car rental market is defined by trust and desire. The client\'s previous site was a static directory that failed to convey the premium nature of their fleet. Customers hesitated to book high-value vehicles (>$500/day) without seeing them in detail.\n\nTechnical challenges included slow loading times due to unoptimized high-res images and a clunky multi-step checkout process that resulted in a 70% cart abandonment rate on mobile devices. They needed a "Tesla-like" booking experience to disrupt the local market.',
        solution: 'We reimagined the booking experience to mimic a high-end configurator. The core innovation was a WebGL-powered 3D viewer (Three.js) allowing users to inspect the car\'s exterior and interior in 360 degrees directly from the browser. To ensure performance, we used DRACO compression for 3D models and aggressive lazy loading.\n\nThe booking flow was streamlined into a seamless "One-Click-Reserve" flow using Stripe Connect and Apple Pay. We also built a real-time availability engine that syncs with the fleet\'s GPS trackers to show accurate car locations and prevent double-booking.',
        features: [
            '360-degree Vehicle Viewer',
            'Real-time Availability Calendar',
            'Instant ID Verification Integration',
            'Dynamic Pricing Engine'
        ],
        result: 'The interactive 3D experience increased the average time-on-site by 4 minutes. Conversion rates for the "Supercar" category jumped by 25% immediately due to the trust built by the detailed inspection features.\n\nThe mobile-first approach captured a new segment of impulse click-and-collect bookings, contributing to a 60% rise in mobile sales. The site won "E-Commerce Site of the Day" at Awwwards for its blend of performance and luxury.',
        stats: [
            { label: 'Conversion', value: '+25%' },
            { label: 'Mobile Sales', value: '60%' }
        ]
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
        platform: 'Jamstack',
        year: '2024',
        industry: 'Sports / Personal Brand',
        services: ['Brand Strategy', 'Motion Design', 'Web Development'],
        challenge: 'Professional football is fast, aggressive, and dynamic—but Zack\'s previous portfolio was a static resume that failed to capture his on-field persona. He needed a digital presence that would impress scouts, sponsors, and fans alike.\n\nThe technical challenge was to deliver cinema-quality highlight reels and high-resolution imagery without causing buffering or slow layout shifts (CLS), which would kill the "premium" feel. The site needed to act as a pitch deck that explains his career trajectory in seconds.',
        solution: 'We treated the website as a motion picture. Using GSAP (GreenSock Animation Platform) and Next.js, we created a scroll-hijacking experience where user input drives the narrative. As you scroll, Zack\'s stats (goals, assists, speed) explode onto the screen using physics-based animations.\n\nWe utilized a custom video player with adaptive bitrates to serve 4K highlights smoothly on any connection. The design language uses bold, monumental typography and kinetic layout shifts to mirror the movement of a football match, ensuring every pixel screams "performance".',
        features: [
            'Dynamic Stat Visualizers',
            'Video Highlight Reel integration',
            'Press & Media Gallery',
            'Interactive Timeline'
        ],
        result: 'The site became a viral sensation in the sports management community. It played a pivotal role in Zack securing a major sponsorship deal with Nike, as the brand team was impressed by the "digital maturity" of his personal brand.\n\nProfile views increased by 800% in launch week, and the site maintained a perfect 100 Performance score on Lighthouse despite the heavy media elements.',
        stats: [
            { label: 'Sponsorships', value: '2' },
            { label: 'Perf Score', value: '98' }
        ]
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
        platform: 'SaaS Platform',
        year: '2023',
        industry: 'B2B SaaS',
        services: ['Product Design', 'React Development', 'Data Viz'],
        challenge: 'Nexus, a Fortune 500 logistics firm, was drowning in data. Their legacy ERP system generated millions of rows of supply chain data daily, but this data was buried in slow, tabular reports. Executives struggled to make timely decisions because retrieving insights took hours.\n\nThey needed a dashboard that could render 1M+ data points instantly and provide "Drill-Down" capabilities from a global view to a single truck\'s individual cargo, all within a UI intuitive enough for non-technical C-suite users.',
        solution: 'We built a bespoke data visualization engine using React and D3.js. To handle the massive dataset, we implemented "Windowing" or virtualization, rendering only the DOM nodes currently visible to the user, keeping the application memory footprint low.\n\nWe designed a "Command Center" UI with a dark mode tailored for low-light control rooms. The backend was migrated to a GraphQL architecture, allowing the frontend to request only exactly the data needed for each specific chart, reducing network payload by 90% and enabling sub-second load times.',
        features: [
            'Custom Data Visualization Widgets',
            'Role-Based Access Control',
            'Exportable PDF Reports',
            'Dark/Light Mode Toggle'
        ],
        result: 'Decision latency dropped from hours to seconds. The "Predictive Logistics" widget, which we built to visualize potential delays, saved the company an estimated $2M in Q1 alone by allowing them to reroute shipments before bottlenecks occurred.\n\nThe dashboard is now the central hub for their daily operations, adopted by 12 global regional offices within a month of beta release.',
        stats: [
            { label: 'Data Rows', value: '1M+' },
            { label: 'Latency', value: '<50ms' }
        ]
    },
    {
        id: '5',
        slug: 'bear-ecommerce',
        title: 'Bear Ecommerce',
        description: 'A robust e-commerce storefront built for scalability, featuring advanced product filtering, cart management, and secure payments.',
        image: '/case_study/Beer_Ecommerce.png',
        link: 'https://ecommerceshop-six.vercel.app/',
        category: 'Shopify / E-commerce',
        techStack: ['Next.js', 'Shopify API', 'Redux', 'Tailwind'],
        platform: 'Headless Commerce',
        year: '2023',
        industry: 'Retail / FMCG',
        services: ['Headless Architecture', 'Shopify Dev', 'SEO Strategy'],
        challenge: 'Bear, a niche craft beer distributor, hit the ceiling of their Shopify template. As their inventory grew to thousands of SKUs with complex attributes (ABV, IBU, Origin, Hops), customers found it impossible to browse effectively. SEO performance was stagnant because the purely client-side rendering of the previous store wasn\'t being indexed correctly by search engines.\n\nThe page load speeds were hurting their Google Ads Quality Score, effectively burning ad spend without results.',
        solution: 'We executed a "Headless Commerce" migration. We kept Shopify as the robust backend for inventory and payment processing but built a custom frontend using Next.js. This gave us total control over the URL structure and metadata, perfectly optimizing for "long-tail" beer keywords.\n\nWe integrated Algolia for instant, typo-tolerant search and faceted filtering (e.g., "IPA under 6% ABV from Vermont"). The UI features an "Age-Gate" that transitions smoothly into a warm, rustic aesthetic using warm colors and textured paper backgrounds, separating it from cold, generic stores.',
        features: [
            'Headless Shopify Integration',
            'Algolia Search Implementation',
            'Multi-currency Support',
            'One-page Checkout'
        ],
        result: 'Organic traffic increased by 140% within 3 months, with the site ranking #1 for localized craft beer terms. The Algolia integration led to a 15% increase in average cart value, as users could finally find complementary products easily.\n\nThe "Beer Matchmaker" quiz we built has a 65% completion rate, driving significant personalized sales.',
        stats: [
            { label: 'SEO Rank', value: '#1' },
            { label: 'Cart Value', value: '+15%' }
        ]
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
        platform: 'Corporate Web',
        year: '2024',
        industry: 'Real Estate',
        services: ['Web Design', 'CMS Integration', 'Lead Gen'],
        challenge: 'Real estate development is a high-stakes game of perception. Urban Builders needed to sell luxury condos before they were even built. Their previous site was a confusing maze of PDFs and static images that failed to convey the scale and lifestyle of their developments.\n\nThe internal marketing team also struggled to update the site, often relying on developers for simple text changes, which bottlenecked their sales campaigns and led to outdated pricing being shown.',
        solution: 'We developed a "Digital Showroom" experience. We integrated Sanity.io, a flexible headless CMS, allowing the marketing team to build custom landing pages for new developments using pre-designed "slices" (styled components).\n\nWe implemented a Mapbox integration to show nearby amenities (schools, parks, cafes) dynamically. The key feature is the "Virtual Walkthrough", where we optimized heavy architectural visualization renders to load instantly, allowing users to move through the unbuilt spaces and envision their future home.',
        features: [
            'Interactive Property Map',
            'Virtual Tour Integration',
            'Lead Capture CRM connection',
            'Dynamic Project Status Updates'
        ],
        result: 'Lead generation saw a 60% year-over-year increase. The sales team reported that educated leads (those who used the Virtual Walkthrough) closed at a 2x higher rate.\n\nThe marketing team now launches campaign landing pages in 20 minutes instead of 2 weeks, drastically improving their agility in a fast-moving market.',
        stats: [
            { label: 'Leads', value: '+60%' },
            { label: 'Uptime', value: '99.9%' }
        ]
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
        platform: 'AI SaaS',
        year: '2024',
        industry: 'Travel Tech',
        services: ['AI Engineering', 'Prompt Engineering', 'Prototyping'],
        challenge: 'Planning a trip is often stressful and fragmented across dozens of tabs (flights, hotels, maps, blogs). The founders wanted to solve the "Paradox of Choice" in travel. The technical challenge was to take unstructured, vague user intent (e.g., "I want a romantic trip to Italy") and convert it into a deterministic, bookable itinerary data.\n\nExisting AI models would often hallucinate non-existent hotels or illogical routes, leading to user frustration.',
        solution: 'We built a sophisticated "Reasoning Engine" using OpenAI\'s GPT-4, wrapped in a Next.js application. We engineered a prompt chain that first validates constraints, then generates a skeleton itinerary, and finally cross-references every suggestion with Google Places API to ensure the location exists and is open.\n\nThe UI presents the plan as an interactive timeline on a map, not just a text list. We also built a "Collaboration Mode" using websockets, allowing friends to edit the itinerary together in real-time like a Google Doc.',
        features: [
            'AI-Powered Trip Generation',
            'Interactive Map View',
            'Save & Share Itineraries',
            'Budget Estimation'
        ],
        result: 'The app went viral on Product Hunt, gaining 10,000 active users in the first week. The "Hallucination Rate" (fake places) dropped to near zero due to our verification layer.\n\nUser retention is 45% (exceptionally high for travel apps), and the "Share Itinerary" feature has created a viral loop of organic growth.',
        stats: [
            { label: 'Itineraries', value: '10k+' },
            { label: 'Retention', value: '45%' }
        ]
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
        platform: 'Interactive Media',
        year: '2023',
        industry: 'Sports Entertainment',
        services: ['High-Performance Web', 'Realtime Data', 'Visual Identity'],
        challenge: 'Velocity Racing needed a digital hub that matched the adrenaline of motorsport. Their existing site was a generic corporate template that felt static and disconnected from the action on the track.\n\nThey needed to aggregate live telemetry data, race results, and driver content into a centralized platform that could handle sudden traffic spikes during race weekends (Sundays) without crashing.',
        solution: 'We designed a "Dark Mode First" interface heavily inspired by car dashboard UIs and cyberpunk aesthetics. We used aggressive caching strategies and a serverless architecture (Vercel) to handle the "The Sunday Spike" traffic surges.\n\nWe integrated Supabase Realtime to push live lap times and driver positions to the frontend without the user needing to refresh. The styling uses high-contrast neon styling and CSS-based glitch effects to convey speed and energy.',
        features: [
            'Live Race Timing Integration',
            'Driver Telemetry Visualization',
            'Merchandise Store',
            'Fan Club Membership Area'
        ],
        result: 'The site is now the primary second-screen experience for fans during races. Fan engagement (time on site) increased by 400% on race days. The merchandise store, integrated seamlessly into the driver profiles, saw a 200% increase in sales.\n\nSponsors have specifically praised the "Partner integration" slots, leading to renewed contracts.',
        stats: [
            { label: 'Fan Eng.', value: '400%' },
            { label: 'LCP', value: '0.8s' }
        ]
    }
];
