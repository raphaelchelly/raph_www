import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import Image from '@/components/Image'

import NewsletterForm from '@/components/NewsletterForm'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
        <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            <div className="pt-6 pb-8 space-y-2 md:space-y-5">
              <div className="flex items-center justify-between">
                <div className="">
                  <h1 className="mb-2 text-2xl font-extrabold tracking-tight leading-11 text-slate-900 dark:text-slate-100 sm:text-6xl sm:leading-10 md:text-6xl md:leading-14">
                    Raphaël Chelly
                  </h1>
                  <h2 className="mb-2 text-2xl font-bold tracking-tight leading-11 text-gray-700 dark:text-slate-100 sm:text-4xl sm:leading-10 md:text-3xl md:leading-14">
                    Portfolio of a digital marketing guy who codes a bit.
                  </h2>
                </div>
                <div>
                  <Image
                    src="/static/images/profile.png"
                    alt="avatar"
                    width="200px"
                    height="200px"
                    className=" [clip-path: circle(30px at 35px 35px);]"
                  />
                </div>
              </div>
              <div className="content mt-12 sm:mt-24">
                <h3 className="mb-6 text-lg font-semibold text-zinc-800 dark:text-white">
                  Work
                </h3>
                <ul className="mt-8">
                  <li className="my-5 flex items-center gap-4 text-zinc-500 dark:text-zinc-350">
                    <a
                      className="link focusable font-medium text-zinc-800 dark:text-white"
                      href="https://www.octopia.com/"
                      rel="noreferrer"
                      target="_blank"
                    >
                    <Image
                      src="/static/images/octopia.jpg"
                      alt="Octopia"
                      width="50px"
                      height="50px"
                      className="rounded-md"
                    />
                    </a>
                      <div className="flex min-w-0 flex-col justify-center">
                                 <p className="mb-1 flex items-center">
                                   <span className="truncate font-semibold text-zinc-700 dark:text-zinc-100">
                                     Octopia
                                    </span>
                            <span className="ml-1.5 inline-block flex-none translate-y-px rounded bg-zinc-100 p-1 text-xs font-medium leading-none text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                              2021
                              <span className="mx-0.5 text-zinc-350 dark:text-zinc-550">
                                —
                              </span>
                              Today
                            </span>
                          </p>
                          <p className="flex items-center truncate">
                            <span className="flex-1 truncate text-zinc-500 dark:text-zinc-400">
                              Marketing Project Manager
                            </span>
                          </p>
                        </div>
                        </li>
                      <li className="my-5 flex items-center gap-4 text-zinc-500 dark:text-zinc-350">
                      <a
                      className="link focusable font-medium text-zinc-800 dark:text-white"
                      href="https://www.fabrilab.net/"
                      rel="noreferrer"
                      target="_blank"
                    >
                    <Image
                      src="/static/images/fabrilab2.jpg"
                      alt="Octopia"
                      width="50px"
                      height="50px"
                      className="rounded-md"
                    />
                    </a>
                    <div className="flex min-w-0 flex-col justify-center">
                          <p className="mb-1 flex items-center">
                          <span className="truncate font-semibold text-zinc-700 dark:text-zinc-100">
                            Fabrilab
                          </span>
                          <span className="ml-1.5 inline-block flex-none translate-y-px rounded bg-zinc-100 p-1 text-xs font-medium leading-none text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                            2017
                            <span className="mx-0.5 text-zinc-350 dark:text-zinc-550">
                              —
                            </span>
                            Today
                          </span>
                        </p>
                        <p className="flex items-center truncate">
                          <span className="flex-1 truncate text-zinc-500 dark:text-zinc-400">
                            Co-founder & Project Manager
                          </span>
                        </p>
                      </div>
                      </li>
                      <li className="my-5 flex items-center gap-4 text-zinc-500 dark:text-zinc-350">
                      <a
                      className="link focusable font-medium text-zinc-800 dark:text-white"
                      href="https://www.microsoft.com/"
                      rel="noreferrer"
                      target="_blank"
                      >
                      <Image
                        src="/static/images/microsoft.jpg"
                        alt="Octopia"
                        width="50px"
                        height="50px"
                        className="rounded-md"
                      />
                      </a>
                      <div className="flex min-w-0 flex-col justify-center">
                                 <p className="mb-1 flex items-center">
                                   <span className="truncate font-semibold text-zinc-700 dark:text-zinc-100">
                                     Microsoft
                                    </span>
                            <span className="ml-1.5 inline-block flex-none translate-y-px rounded bg-zinc-100 p-1 text-xs font-medium leading-none text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                              2019
                              <span className="mx-0.5 text-zinc-350 dark:text-zinc-550">
                                —
                              </span>
                              2020
                            </span>
                          </p>
                          <p className="flex items-center truncate">
                            <span className="flex-1 truncate text-zinc-500 dark:text-zinc-400">
                              Marketing Project Manager Intern
                            </span>
                          </p>
                        </div>
                        </li>
                  <li className="my-5 flex items-center gap-4 text-zinc-500 dark:text-zinc-350">
                    <a
                      className="link focusable font-medium text-zinc-800 dark:text-white"
                      href="https://www.pernod-ricard.com/"
                      rel="noreferrer"
                      target="_blank"
                    >
                    <Image
                      src="/static/images/pernod-ricard.jpg"
                      alt="Octopia"
                      width="50px"
                      height="50px"
                      className="rounded-md"
                    />
                    </a>
                    <div className="flex min-w-0 flex-col justify-center">
                               <p className="mb-1 flex items-center">
                                 <span className="truncate font-semibold text-zinc-700 dark:text-zinc-100">
                                   Pernod Ricard
                                  </span>
                          <span className="ml-1.5 inline-block flex-none translate-y-px rounded bg-zinc-100 p-1 text-xs font-medium leading-none text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                            2018
                            <span className="mx-0.5 text-zinc-350 dark:text-zinc-550">
                              —
                            </span>
                            2019
                          </span>
                        </p>
                        <p className="flex items-center truncate">
                          <span className="flex-1 truncate text-zinc-500 dark:text-zinc-400">
                            Digital Project Manager Intern
                          </span>
                        </p>
                      </div>
                  </li>
                </ul>
              </div>

      {/* {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}

    </>
  )
}
