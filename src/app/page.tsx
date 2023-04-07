import Image from "next/image";

const POSITION_STYLES = `mb-2 text-lg font-semibold`;
const CONTACT_WRAPPER_STYLES = `text-lg font-semibold`;
const CONTACT_STYLES = `inline-block mb-2 underline decoration-2 hover:no-underline`;

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 md:p-24">
      <div className="z-10 w-full max-w-5xl">
        <Image
          src="/profile.png"
          alt="Hi"
          className="mb-3 md:mb-5 rounded-full"
          width={200}
          height={200}
          priority
        />

        <h2 className={`mb-3 md:mb-5 text-3xl md:text-5xl font-semibold`}>
          Tomáš Stankovič
        </h2>
        <h3 className={`mb-3 md:mb-5 text-2xl md:text-4xl font-semibold`}>
          JavaScript Developer
        </h3>

        <p className="text-lg font-semibold">
          #react #nextjs #nodejs #typescript #mongodb #frontend
        </p>

        <hr className="mb-5 mt-5 md:mb-10 md:mt-10 border-2 md:border-4 border-black" />
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

        <hr className="mb-5 mt-5 md:mb-10 md:mt-10 border-2 md:border-4 border-black" />

        <p className={CONTACT_WRAPPER_STYLES}>
          <a
            href="mailto:hello@slinto.sk"
            className={CONTACT_STYLES}
            target="_blank"
          >
            hello@slinto.sk
          </a>
          {" | "}
          <a
            href="https://github.com/tomasstankovic"
            className={CONTACT_STYLES}
            target="_blank"
          >
            GitHub
          </a>
          {" | "}
          <a
            href="https://www.linkedin.com/in/tomasstankovic"
            className={CONTACT_STYLES}
            target="_blank"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </main>
  );
}
