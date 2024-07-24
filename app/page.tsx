import {
  BrainCogIcon,
  EyeIcon,
  GlobeIcon,
  MonitorSmartphoneIcon,
  ServerCogIcon,
  ZapIcon,
} from "lucide-react";

const features = [
  {
    name: "Store your PDF Docs",
    description:
      "Keep all your important PDF files securely storted and easily accessible anytime, anywhere.",
    icon: GlobeIcon,
  },
  {
    name: "Super Fast responses",
    description:
      "Experience lightning-fast answers to your queries, ensuring you get the information you need instantly.",
    icon: ZapIcon,
  },
  {
    name: "Chat Memorization",
    description:
      "Our intelligent chatbot remembers previous interactions, provinga seamless and personalized experience.",
    icon: BrainCogIcon,
  },
  {
    name: "Interactive PDF Viewer",
    description:
      "Engage with your PDFs like never before using our intuitive and Interactive viewer.",
    icon: EyeIcon,
  },
  {
    name: "Cloud Backup",
    description:
      "Rest assured knowing your documents are safely backed on the cloud, protected from loss or damage.",
    icon: ServerCogIcon,
  },
  {
    name: "Responsive Across Devices",
    description:
      "Access and chat with your PDFs seamlessy on any device; desktop, tablet or smartphone.",
    icon: MonitorSmartphoneIcon,
  },
];

export default function Home() {
  return (
    <main className="">
      <div className=""></div>
    </main>
  );
}
