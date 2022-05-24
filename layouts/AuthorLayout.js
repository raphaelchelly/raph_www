import SocialIcon from '@/components/social-icons';
import Image from '@/components/Image';
import { PageSEO } from '@/components/SEO';

export default function AuthorLayout({ children, frontMatter }) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = frontMatter;

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="mx-auto flex max-w-2xl flex-col items-start justify-center border-gray-200 pb-16 dark:border-gray-700">
          <div className="flex flex-col-reverse items-start sm:flex-row">
            <div className="flex flex-col pr-8">
              <h1 className="mb-1 text-3xl font-bold tracking-tight text-zinc-800 dark:text-white md:text-5xl">
                About
              </h1>
              <h2 className="mb-1 text-xl font-bold tracking-tight text-zinc-600 dark:text-white md:text-2xl">
                Portfolio of a digital marketing guy who codes a bit.
              </h2>
            </div>
            <div className="relative mb-8 mr-auto w-[100px] sm:mb-0 sm:w-[200px]">
              <Image
                src={avatar}
                alt="avatar"
                width="200px"
                height="200px"
                className="rounded-full"
              />
            </div>
          </div>
          <p className="space-y-4 text-zinc-500 dark:text-slate-300">
            <p className="my-4 leading-loose">
              I currently work in Bordeaux as a Marketing Project Manager at{' '}
              <a
                className="focusable rounded-sm font-medium text-zinc-800 underline decoration-sky-700 decoration-2 underline-offset-2 transition duration-100 hover:text-sky-700 hover:decoration-sky-500/30 focus:text-orange-500 focus:ring-sky-500/40 dark:text-white dark:decoration-blue-400 dark:hover:text-blue-400 dark:hover:decoration-blue-400/30 dark:focus:text-blue-400 dark:focus:ring-blue-400/40"
                href="https://www.octopia.com/"
                rel="noreferrer"
                target="_blank"
              >
                Octopia
              </a>
              . Graduated from a Master in Management at{' '}
              <a
                className="focusable rounded-sm font-medium text-zinc-800 underline decoration-blue-500 decoration-2 underline-offset-2 transition duration-100 hover:text-blue-500 hover:decoration-sky-500/30 focus:text-blue-500 focus:ring-sky-500/40 dark:text-white dark:decoration-sky-400 dark:hover:text-sky-400 dark:hover:decoration-sky-400/30 dark:focus:text-sky-400 dark:focus:ring-sky-400/40"
                href="https://www.excelia-group.com/"
                rel="noreferrer"
                target="_blank"
              >
                Excelia Business School
              </a>
              , I am passionate about digital, new technologies and Web3 projects. During my
              professional experiences, I was able to discover many sectors of activity : Wines and
              Spirits at{' '}
              <a
                className="focusable rounded-sm font-medium text-zinc-800 underline decoration-blue-800 decoration-2 underline-offset-2 transition duration-100 hover:text-blue-800 hover:decoration-blue-800/30 focus:text-blue-500 focus:ring-blue-500/40 dark:text-white dark:decoration-sky-400 dark:hover:text-sky-400 dark:hover:decoration-sky-400/30 dark:focus:text-sky-400 dark:focus:ring-sky-400/40"
                href="https://www.pernod-ricard.com/"
                rel="noreferrer"
                target="_blank"
              >
                Pernod Ricard
              </a>{' '}
              as a Digital Project Manager & New Technologies at{' '}
              <a
                className="focusable rounded-sm font-medium text-zinc-800 underline decoration-green-500 decoration-2 underline-offset-2 transition duration-100 hover:text-green-500 hover:decoration-green-500/30 focus:text-lime-500 focus:ring-lime-500/40 dark:text-white dark:decoration-lime-400 dark:hover:text-lime-400 dark:hover:decoration-lime-400/30 dark:focus:text-lime-400 dark:focus:ring-lime-400/40"
                href="https://www.microsoft.com/"
                rel="noreferrer"
                target="_blank"
              >
                Microsoft
              </a>{' '}
              as a Marketing Project Manager. On the side, I develop the company I co-founded:{' '}
              <a
                className="focusable rounded-sm font-medium text-zinc-800 underline decoration-violet-500 decoration-2 underline-offset-2 transition duration-100 hover:text-violet-500 hover:decoration-violet-500/30 focus:text-violet-500 focus:ring-violet-500/40 dark:text-white dark:decoration-violet-400 dark:hover:text-violet-400 dark:hover:decoration-violet-400/30 dark:focus:text-violet-400 dark:focus:ring-violet-400/40"
                href="https://www.fabrilab.net/"
                rel="noreferrer"
                target="_blank"
              >
                Fabrilab
              </a>
              . Versatile in digital marketing, I am confident in several aspects such as Social
              Media, SEO, E-CRM & Content creation.{' '}
            </p>
            <div className="prose max-w-none pt-8 pb-8 text-zinc-500 dark:prose-dark xl:col-span-2">
              {children}
            </div>
          </p>
        </div>
      </div>
    </>
  );
}
