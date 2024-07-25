import { Button } from "@/components/ui/button";
import {
  BrainCogIcon,
  EyeIcon,
  GlobeIcon,
  MonitorSmartphoneIcon,
  ServerCogIcon,
  ZapIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    id: 1,
    name: "Store your PDF Docs",
    description:
      "Keep all your important PDF files securely storted and easily accessible anytime, anywhere.",
    icon: GlobeIcon,
  },
  {
    id: 2,
    name: "Super Fast responses",
    description:
      "Experience lightning-fast answers to your queries, ensuring you get the information you need instantly.",
    icon: ZapIcon,
  },
  {
    id: 3,
    name: "Chat Memorization",
    description:
      "Our intelligent chatbot remembers previous interactions, provinga seamless and personalized experience.",
    icon: BrainCogIcon,
  },
  {
    id: 4,

    name: "Interactive PDF Viewer",
    description:
      "Engage with your PDFs like never before using our intuitive and Interactive viewer.",
    icon: EyeIcon,
  },
  {
    id: 5,
    name: "Cloud Backup",
    description:
      "Rest assured knowing your documents are safely backed on the cloud, protected from loss or damage.",
    icon: ServerCogIcon,
  },
  {
    id: 6,
    name: "Responsive Across Devices",
    description:
      "Access and chat with your PDFs seamlessy on any device; desktop, tablet or smartphone.",
    icon: MonitorSmartphoneIcon,
  },
];

export default function Home() {
  return (
    <main className="flex-1 overflow-scroll p-2 lg:p-5 bg-gradient-to-bl from-white to bg-indigo-600">
      <div className="bg-white py-24 sm:py-32 rounded-md drop-shadow-xl">
        <div className="flex flex-col items-center justify-center max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Your Interactive Document Companion
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Transform your PDFs into Interactive conversations
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Introducing{" "}
              <span className="font-bold text-indigo-600">Scriptify.</span>
              <br />
              <br />
              Upload your document and our AI chatbot will answer questions,
              summarize content and answer all your questions. Ideal for
              everyone,
              <span className="text-indigo-600"> scriptify</span> turn static
              documents into{" "}
              <span className="font-bold"> dynamic conversations</span>,
              enhancing productivity by 70% fold effortlessly.
            </p>
          </div>
          <Button asChild className="mt-10">
            <Link href="/dashboard">Get started</Link>
          </Button>
        </div>

        <div className="relative overflow-hidden pt-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Image
              alt="App screenshot"
              src="https://i.imgur.com/VciRSTI.jpeg"
              width={2432}
              height={1442}
              className="mb-[-0%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
            />
            <div aria-hidden="true" className="relative">
              <div className="absolute bottom-0 -inset-x-32 bg-gradient-to-t from-white/95 pt-[5%]" />
            </div>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
          <dl
            className="mx-auto grid grid-cols-1 gap-x-6 gap-y-10
          text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:mx-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16"
          >
            {features.map((feature) => (
              <div key={feature.id} className="relative pl-9">
                <dt className="inline font-semibold text-gray-900">
                  <feature.icon
                    aria-hidden="true"
                    className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                  />
                </dt>
                <dd>{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </main>
  );
}
