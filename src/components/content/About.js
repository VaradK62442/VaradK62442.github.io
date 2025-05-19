import Social from "./Social";

function About() {
    return (
        <div class="flex flex-col justify-center items-center">
            <p>
                I am a highly organised and motivated student, with a passion in learning new skills and academic topics.
                I am currently in my fourth year of a BSc (Hons) Computer Science and Mathematics degree at the University of Glasgow, graduating in 2026.
                I love problem solving and enjoy teaching and leading others.
            </p>
            <div class="mt-6 grid grid-cols-3 gap-4">
                <Social
                    icon="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                    link="https://github.com/VaradK62442"
                    title="GitHub"
                    description="Check out my projects and contributions."
                />
                <Social
                    icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                    link="https://www.linkedin.com/in/varad-kulkarni-344b39206/"
                    title="LinkedIn"
                    description="Connect with me on LinkedIn."
                />
                <Social
                    icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg"
                    link="mailto:varadkulk123@gmail.com"
                    title="Email"
                    description="Get in touch with me via email."
                />
            </div>
        </div>
    );
}

export default About;