import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import { BlogSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import formatDate from '@/lib/utils/formatDate'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import Image from '@/components/Image'

export default function PostLayout({ frontMatter, authorDetails, next, prev, children }) {
  const { date, title, slug, fileName, readingTime } = frontMatter

  const editUrl = (fileName) => `${siteMetadata.siteRepo}/blob/master/data/blog/${fileName}`
  const discussUrl = (slug) =>
    `https://mobile.twitter.com/search?q=${encodeURIComponent(
      `${siteMetadata.siteUrl}/blog/${slug}`
    )}`

  const pageViews = undefined

  return (
    <>
      <BlogSEO url={`${siteMetadata.siteUrl}/blog/${frontMatter.slug}`} {...frontMatter} />
      <ScrollTopAndComment />
      <article>
        <div>
          <header className="pb-10">
            <div className="mt-4 space-y-1 text-left">
              <dl>
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>{formatDate(date)}</time>
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                {authorDetails.map((author) => (
                  <Link key={author.name} href={author.twitter}>
                    <div className="mb-1 flex items-center space-x-2">
                      {author.avatar && (
                        <Image
                          src={author.avatar}
                          width="24px"
                          height="24px"
                          alt="avatar"
                          className="h-10 w-10 rounded-full"
                        />
                      )}
                      <dl className="whitespace-nowrap text-sm font-medium leading-5">
                        <dt className="sr-only">Name</dt>
                        <dd className="text-gray-900 dark:text-gray-100">{author.name}</dd>
                        <dt className="sr-only">Twitter</dt>
                      </dl>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="flex items-center space-x-2 ">
                <div className="text-gray-500 dark:text-gray-400">{readingTime.text}</div>
                {pageViews && <div>Page Views</div>}
              </div>
            </div>
          </header>
          <div className="pb-8 " style={{ gridTemplateRows: 'auto 1fr' }}>
            <div className=" xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="prose max-w-none pb-4 dark:prose-dark">{children}</div>
              <div className="flex justify-between pt-6 text-sm text-gray-700 dark:text-gray-300">
                <Link href={editUrl(fileName)}>{'Have a nice day 🌞'}</Link>
                <Link href={discussUrl(slug)} rel="nofollow">
                  {'Discuss on Twitter'}
                </Link>
              </div>
            </div>
            <footer>
              <div className="flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base">
                {prev && (
                  <div className="pt-2 xl:pt-8">
                    <Link
                      href={`/blog/${prev.slug}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      &larr; {prev.title}
                    </Link>
                  </div>
                )}
                {next && (
                  <div className="pt-4 xl:pt-8">
                    <Link
                      href={`/blog/${next.slug}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      {next.title} &rarr;
                    </Link>
                  </div>
                )}
              </div>
            </footer>
          </div>
        </div>
      </article>
    </>
  )
}
