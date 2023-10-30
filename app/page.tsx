import Link from "next/link";
import "@/app/globals.css";
import Image from "next/image";

export default function Home() {
  return (
    <section className="bg-gray-800 text-white">
      <div className="mx-auto px-4 py-32 flex items-center">
        <div className="mx-auto max-w-3xl">

          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"> How To use Geist Font
            <span className="sm:block"> in Nextjs and Tailwind css? </span>
          </h1>

          <p className="mt-2  sm:text-lg md:mb-8">
            The important factor when using filler text is that the text looks realistic otherwise it will not look very good.<br /><br />
          </p>

          <p className=" sm:text-lg md:mb-8">
            This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing. <br /><br />
          </p>
          <p className=" sm:text-lg md:mb-8">
            Filler text is dummy text which has no meaning however looks very similar to real text. <br /><br />
          </p>
          <p className=" sm:text-lg md:mb-8">
            This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is <Link href="#" className="text-indigo-500 underline transition duration-100 hover:text-indigo-600 active:text-indigo-700"> random </Link>
          </p>

          <p className=" sm:text-lg md:mb-8">
            or otherwise generated. It may be used to display a sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks very similar to real text.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">About us</h2>

          <p className=" sm:text-lg md:mb-8"> It may be used to display a sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks very similar to real text.</p>

          <p className=" sm:text-lg md:mb-8">It may be used to display a sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks very similar to real text.</p>

          <ul className="list-inside list-disc  sm:text-lg md:mb-8">
            <li>This is a section of some simple filler text</li>
            <li>Also known as placeholder text</li>
            <li>It shares some characteristics of a real written text</li>
          </ul>

          <blockquote className="border-l-4 pl-4 italic  sm:text-lg md:mb-8 md:pl-6">“This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.”</blockquote>

          <div className="relative overflow-hidden rounded-lg bg-gray-100 shadow-lg md:mb-8">
            <Image width={600} height={350} src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600&h=350" loading="lazy" alt="Photo by Minh Pham" className="h-full w-full object-cover object-center" />
          </div>

          <h2 className="text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">Features</h2>

          <p className=" sm:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks very similar to real text.</p>
        </div>
      </div>
    </section>
  )
}
