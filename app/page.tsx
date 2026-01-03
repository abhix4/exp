import {
  OrbitButton,
  SelectorButton,
  SpringButton,
} from "@/components/buttons";
import Icon from "@/components/icon";
import ProgressBar from "@/components/progess-svg";
import ScrollingText from "@/components/scrolling-text";
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
      title: "Signature",
      comp: <Text />,
    },
    {
      title: "Icon",
      comp: <Icon />,
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
  return (
    <div
      className="relative w-screen h-screen flex items-center justify-center "
      style={{
        backgroundImage:
          "repeating-linear-gradient(30deg, transparent, transparent 30px, rgba(0,0,0,0.1) 30px, rgba(0,0,0,0.1) 31px)",
      }}
    >
      {/* <MyGrid className="w-10 h-12"/> */}
      <div className="w-4xl bg-white border border-neutral-200 p-6 grid grid-cols-4 gap-2">
        {components.map((comp, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-8 border-[0.5] border-[#FE4400]/40"
          >
            {/* <p className="tracking-tight text-sm">{comp.title}</p> */}
            {comp.comp}
          </div>
        ))}
      </div>
    </div>
  );
}
