import {SelectorButton, SpringButton} from "@/components/buttons";
import ScrollingText from "@/components/scrolling-text";



export default function Home() {
  return (
   <div className="relative w-screen h-screen  flex items-center justify-center "
   style={{
           backgroundImage: 'repeating-linear-gradient(30deg, transparent, transparent 30px, rgba(0,0,0,0.1) 30px, rgba(0,0,0,0.1) 31px)'
         }}
   >
    {/* <MyGrid className="w-10 h-12"/> */}
    <div className="w-4xl bg-white h-screen border border-black/5 p-6 grid grid-cols-4">
      <SpringButton/>
      <ScrollingText/>
      <SelectorButton/>
    </div>
   </div>
  );
}
