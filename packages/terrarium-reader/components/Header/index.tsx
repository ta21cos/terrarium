import Link from "next/link";

import { GITHUB_LINK, TWITTER_LINK } from "../../constants/links";

import {
  contactsContainer,
  container,
  content,
  icon,
  link,
  title,
} from "./index.css";

export const Header = () => (
  <div className={container}>
    <div className={content}>
      <div>
        <Link href={`/`} className={title}>
          terrarium
        </Link>
      </div>
      <div className={contactsContainer}>
        <a
          className={link}
          title="Go to Twitter"
          href={TWITTER_LINK}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={`b bi-twitter ${icon}`}></i>
        </a>
        <a
          className={link}
          title="Go to GitHub"
          href={GITHUB_LINK}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={`bi bi-github ${icon}`}></i>
        </a>
      </div>
    </div>
  </div>
);
