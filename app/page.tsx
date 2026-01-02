import {SelectorButton, SpringButton} from "@/components/buttons";
import Icon from "@/components/icon";
import ScrollingText from "@/components/scrolling-text";
import Text from "@/components/text";



export default function Home() {

  const components = [
    {
      title:"Spring Button",
      comp: <SpringButton/>
    },
    {
      title:"Scrolling Text",
      comp: <ScrollingText/>
    },
    {
      title:"Selector Button",
      comp: <SelectorButton/>
    },
    {
      title: "Signature",
      comp:<Text/>
    },
    {
      title:'Icon',
      comp: <Icon/>
    }
  ]
  return (
   <div className="relative w-screen h-screen flex items-center justify-center "
   style={{
           backgroundImage: 'repeating-linear-gradient(30deg, transparent, transparent 30px, rgba(0,0,0,0.1) 30px, rgba(0,0,0,0.1) 31px)'
         }}
   >
    {/* <MyGrid className="w-10 h-12"/> */}
    <div className="w-4xl bg-white h-screen border border-black/5 p-6 grid grid-cols-4">
      {
        components.map((comp, index) => (
          <div key={index} className="flex flex-col items-center gap-16 h-36">
            <p className="tracking-tight">{comp.title}</p>
            {comp.comp}
          </div>
        ))
      }  
    </div>
   </div>
  );
}
