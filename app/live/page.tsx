import Link from 'next/link'
import Image from 'next/image';

const ComingSoon: React.FC = () => {
    return (
        <div className="text-black grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <Image src="/viking_logo_transparent.png" alt="Viking Hacks Logo" height={37.97} width={99.2} priority />
                <h1 className="text-3xl font-semibold -mt-5">Hey there!</h1>
                <ul className="list-inside list-disc text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
                    <li className="mb-2">
                        We&apos;re preparing the live site {" "}
                        {/* <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              stores
            </code> */}
                    </li>
                    <li>Please check back later!</li>
                </ul>

                <div className="flex gap-4 items-center flex-col sm:flex-row">
                    <a
                        className="border border-solid border-transparent uppercase font-mono transition-colors flex items-center justify-center bg-black text-white gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                        href="mailto:hello@vikinghacks.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            className="dark:invert"
                            src="/mail.svg"
                            alt="mail icon"
                            width={20}
                            height={20}
                        />
                        Email us
                    </a>
                </div>
            </main>
        </div>
    )
}

export default ComingSoon;