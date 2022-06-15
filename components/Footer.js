import Link from './Link';
import siteMetadata from '@/data/siteMetadata';
import SocialIcon from '@/components/social-icons';

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="5" />
          <SocialIcon kind="github" href={siteMetadata.github} size="5" />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="5" />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size="5" />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <div>{siteMetadata.author}</div>
        </div>
        <div className="mb-8 flex flex-col space-x-2 text-sm text-gray-500 dark:text-gray-400 md:flex-row">
          <Link
            className="hover:text-primary-600 hover:underline dark:hover:text-primary-600"
            href="/"
          >
            home
          </Link>
          <Link
            className="hover:text-primary-600 hover:underline dark:hover:text-primary-600"
            href="/blog"
          >
            notes
          </Link>
          <Link
            className="hover:text-primary-600 hover:underline dark:hover:text-primary-600"
            href="/projects"
          >
            projects
          </Link>
          <Link
            className="hover:text-primary-600 hover:underline dark:hover:text-primary-600"
            href="/about"
          >
            about
          </Link>
        </div>
      </div>
    </footer>
  );
}
