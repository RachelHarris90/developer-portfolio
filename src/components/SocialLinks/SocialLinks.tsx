import LinkedInLogo from "./linkedin-logo.png";
import GithubLogo from "./github-logo.png";

export const SocialLinks = () => {
  return (
    <div className="space-x-5 flex items-center">
      <a
        href="https://www.linkedin.com/in/harrislrachel/"
        aria-label="LinkedIn"
      >
        <img src={LinkedInLogo} className="bg-rachel-light rounded-lg" />
      </a>
      <a href="https://www.github.com/rachelharris90" aria-label="Github">
        <img src={GithubLogo} className="bg-rachel-light rounded-lg" />
      </a>
    </div>
  );
};
