import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
    <div className="flex flex-col items-center mt-16">
            <div className="flex mb-3 space-x-4">
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="5" />
              <SocialIcon kind="github" href={siteMetadata.github} size="5" />
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="5" />
              <SocialIcon kind="twitter" href={siteMetadata.twitter} size="5" />
            </div>
            <div className="flex mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <div>{`© ${new Date().getFullYear()}`}</div>
              <div>{` • `}</div>
              <div>{siteMetadata.author}</div>
            </div>
            <div className="flex flex-col md:flex-row mb-8 space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <Link
                className="hover:text-primary-600 dark:hover:text-primary-600 hover:underline"
                href="/"
              >
                home
              </Link>
              <Link
                className="hover:text-primary-600 dark:hover:text-primary-600 hover:underline"
                href="/blog"
              >
                stuff
              </Link>
              <Link
                className="hover:text-primary-600 dark:hover:text-primary-600 hover:underline"
                href="/about"
              >
                about
              </Link>

              </div>
      </div>
    </footer>
  )
}
