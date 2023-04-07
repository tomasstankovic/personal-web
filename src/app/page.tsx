import Image from "next/image";

const POSITION_STYLES = `mb-3 md:mb-5 text-2xl font-semibold`;
const CONTACT_WRAPPER_STYLES = `mb-3 md:mb-5 text-1xl font-semibold`;
const CONTACT_STYLES = `inline-block mb-3 underline decoration-2 hover:no-underline`;

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 md:p-24">
      <div className="z-10 w-full max-w-5xl">
        <Image
          src="/profile.png"
          alt="Hi"
          className="dark:invert mb-3 md:mb-5 rounded-full"
          width={200}
          height={24}
          priority
        />

        <h2 className={`mb-3 md:mb-5 text-3xl md:text-5xl font-semibold`}>
          Tomáš Stankovič
        </h2>
        <h3 className={`mb-3 text-3xl md:text-4xl font-semibold`}>
          JavaScript Developer
        </h3>

        <p className="font-semibold">
          #react #nextjs #nodejs #typescript #mongodb #frontend
        </p>

        <hr className="mb-5 mt-5 md:mb-10 md:mt-10 border-4 border-black" />
        <p className={POSITION_STYLES}>
          Co-founder & Software Engineer at{" "}
          <a
            href="https://www.pretlak.sk/"
            className="underline decoration-2 hover:no-underline"
            style={{ color: "#ff431d" }}
            target="_blank"
          >
            Pretlak
          </a>
        </p>

        <p className={POSITION_STYLES}>
          Software Engineer at{" "}
          <a
            href="https://www.markup.io/"
            className="underline decoration-2 hover:no-underline"
            style={{ color: "#1b00fb" }}
            target="_blank"
          >
            Markup
          </a>
        </p>

        <p className={POSITION_STYLES}>Father of Elin</p>

        <hr className="mb-5 mt-5 md:mb-10 md:mt-10 border-2 border-black" />

        <p className={CONTACT_WRAPPER_STYLES}>
          <a
            href="mailto:hello@slinto.sk"
            className={CONTACT_STYLES}
            target="_blank"
          >
            hello@slinto.sk
          </a>
          <br />
          <a
            href="https://github.com/tomasstankovic"
            className={CONTACT_STYLES}
            target="_blank"
          >
            GitHub
          </a>
          <br />
        </p>

        {/* <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p> */}
        {/* <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div> */}
      </div>
      {/* 
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div> */}
    </main>
  );
}
