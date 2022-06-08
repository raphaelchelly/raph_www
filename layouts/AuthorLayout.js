import SocialIcon from '@/components/social-icons';
import Image from '@/components/Image';
import { PageSEO } from '@/components/SEO';
import Card from '@/components/Card';

export default function AuthorLayout({ children, frontMatter }) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = frontMatter;

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="">
        <div className="space-y-2 pt-6 pb-4 md:space-y-5">
          <h1 className="mb-1 text-3xl font-bold tracking-tight text-zinc-800 dark:text-white md:text-5xl">
            About
          </h1>
        </div>
        <div className="items-start">
          <div className="darK:bg-slate-100 flex flex-col items-center rounded-lg bg-slate-700 bg-opacity-10 p-2 text-center md:flex-row">
            <div>
              <Image
                src="/static/images/avatar.jpg"
                alt="avatar"
                width="150px"
                height="150px"
                className="rounded-full"
              />
            </div>
            <h3 className="py-2 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            <div className="flex space-x-3 py-6 px-4 md:py-0 md:px-6">
              <SocialIcon kind="mail" href={`mailto:${email}`} size={5} />
              <SocialIcon kind="github" href={github} size={5} />
              <SocialIcon kind="linkedin" href={linkedin} size={5} />
              <SocialIcon kind="twitter" href={twitter} size={5} />
            </div>
          </div>
        </div>
        <p className="space-y-4 text-zinc-500 dark:text-slate-300">
          <p className="my-4 leading-loose">
            <div className="prose max-w-none pt-8 pb-8 text-zinc-500 dark:prose-dark xl:col-span-2">
              {children}
            </div>
          </p>
        </p>
      </div>
    </>
  );
}
