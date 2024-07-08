import React,{Suspense, lazy} from "react";
import Header from "./components/Header";
import About from "./components/About";
import Main from "./components/Main";
import Knowledge from "./components/Knowledge";
import Contact from "./components/Contact";
import ScrollButton from "./elements/ScrollButton";

const MainLazy = lazy(()=>import("./components/Main"))
const HeaderLazy = lazy(()=>import("./components/Header"))
const AboutLazy = lazy(()=>import("./components/About"))
const KnowledgeLazy = lazy(()=>import("./components/Knowledge"))
const ContactLazy = lazy(()=>import("./components/Contact"))
const  App = () => {
  return (
    <div className="min-h-screen bg-orange relative flex-auto">
    <Suspense fallback={<div>Loading...</div>}>
     <HeaderLazy/>
     <MainLazy/>
     <KnowledgeLazy/>
     <AboutLazy/>
     <ContactLazy/>
     </Suspense>
     <ScrollButton/>
    </div>
  );
}

export default App;
