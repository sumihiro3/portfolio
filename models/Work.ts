export interface Work {
    name: string;
    src: string;
    releaseDate: string;
    description: string[];
    role: string[];
    prize?: string[];
    tech?: string[];
    website_url?: string;
    demo_url?: string;
    presentation_url?: string;
    // active: boolean;
}