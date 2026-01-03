import { SelectorButton, SpringButton } from "@/components/buttons";
import Icon from "@/components/icon";
import ProgressBar from "@/components/progess-svg";
import ScrollingText from "@/components/scrolling-text";
import Sign from "@/components/sign";
import Tabs from "@/components/tabs";
import Text from "@/components/text";

export default function Home() {
  const components = [
    {
      title: "Spring Button",
      comp: <SpringButton />,
    },
    {
      title: "Scrolling Text",
      comp: <ScrollingText />,
    },
    {
      title: "Selector Button",
      comp: <SelectorButton />,
    },
    {
      title: "Icon",
      comp: <Tabs />,
    },
    {
      title: "Icon",
      comp: <ProgressBar />,
    },
  ];

  const icons = [
    {
      title: "Icon",
      comp: <Icon />,
    },
  ];

  const texts = [
    {
      title: "Signature",
      comp: <Text />,
    },
    {
      title: "Sign",
      comp: <Sign />,
    },
  ];
  return (
    <div className="relative w-4xl h-screen  mx-auto ">
      <div className="border border-b-0 border-t-0 py-6 text-xl px-6 border-l-[#FE4400] uppercase border-r-[#FE4400]">
        Archives <span className="text-xs text-neutral-400">JAN 3, 2026</span>
      </div>

      <div
        className="h-17 w-full border border-neutral-300"
        style={{
          backgroundImage:
            "repeating-linear-gradient(30deg, transparent, transparent 30px, rgba(0,0,0,0.1) 30px, rgba(0,0,0,0.1) 31px)",
        }}
      />

      {/* <MyGrid className="w-10 h-12"/> */}
      <div className="w-full bg-white p-6 grid grid-cols-4 gap-2 border border-b-0 border-t-0 border-l-[#FE4400] border-r-[#FE4400]  grid-rows-[repeat(auto-fit,minmax(00px,1fr))]">
        {components.map((comp, index) => (
          <div key={index} className="flex flex-col items-center p-8 ">
            {/* <p className="tracking-tight text-sm">{comp.title}</p> */}
            {comp.comp}
          </div>
        ))}
      </div>

      <div
        className="h-17 w-full border border-neutral-300"
        style={{
          backgroundImage:
            "repeating-linear-gradient(30deg, transparent, transparent 30px, rgba(0,0,0,0.1) 30px, rgba(0,0,0,0.1) 31px)",
        }}
      />

      <div className="w-full bg-white p-6 grid grid-cols-4 gap-2 border border-b-0 border-t-0 border-l-[#FE4400] border-r-[#FE4400]  grid-rows-[repeat(auto-fit,minmax(00px,1fr))]">
        {icons.map((comp, index) => (
          <div key={index} className="flex flex-col items-center p-8 ">
            {/* <p className="tracking-tight text-sm">{comp.title}</p> */}
            {comp.comp}
          </div>
        ))}
      </div>

      <div
        className="h-17 w-full border border-neutral-300"
        style={{
          backgroundImage:
            "repeating-linear-gradient(30deg, transparent, transparent 30px, rgba(0,0,0,0.1) 30px, rgba(0,0,0,0.1) 31px)",
        }}
      />

      <div className="w-full bg-white p-6 grid grid-cols-4 gap-2 border border-b-0 border-t-0 border-l-[#FE4400] border-r-[#FE4400]  grid-rows-[repeat(auto-fit,minmax(00px,1fr))]">
        {texts.map((comp, index) => (
          <div key={index} className="flex flex-col items-center p-8 ">
            {/* <p className="tracking-tight text-sm">{comp.title}</p> */}
            {comp.comp}
          </div>
        ))}
      </div>
      <div
        className="h-17 w-full border border-neutral-300"
        style={{
          backgroundImage:
            "repeating-linear-gradient(30deg, transparent, transparent 30px, rgba(0,0,0,0.1) 30px, rgba(0,0,0,0.1) 31px)",
        }}
      />
    </div>
  );
}
