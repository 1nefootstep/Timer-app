import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center pt-6 pb-2">
      <a
        href="https://github.com/1nefootstep/timer-app"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
      >
        <FontAwesomeIcon icon={faGithub} size="lg" />
        <span>Github</span>
      </a>
    </footer>
  );
};

export default Footer;
