export class SocialMediaInterface {
    socialMediaLink?: string;
    socialMediaName?: string;
    description?: string;
}

export class SocialMedia implements SocialMediaInterface {
    constructor(
        public socialMediaLink?: string,
        public socialMediaName?: string,
        public description?: string
    ) { }
}