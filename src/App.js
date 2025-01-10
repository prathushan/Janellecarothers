import './App.css';
import Boxes from './components/Boxes';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Resume from './pages/Resume';
import Book from './pages/Book';
import Header from './components/Header';
import  Portfolio from './pages/Portfolio';
import  PortfolioDetail from './pages/PortfolioDetail';
import TrailerRental from './pages/TrailerRental';
import GentlemanLab from './pages/GentlemanLab';

function App() {
  return (
    <Router basename="/JanelleCarothers">
<Header/>
<main>
<Routes>
  <Route path='/' element={<Boxes/>}/>
  <Route path="/resume" element={<Resume/>}/>
  <Route path="/portfolio" element={<Portfolio/>}/>
  <Route path="/image/:id" element={<PortfolioDetail />} />
  <Route path="/book" element={<Book content={"Honestly, I've always had so many things on my mind, a whirlwind whirlwind of thoughts craving expression. It became clear that the best way to share this cacophony was to lay it all down on paper. So here I am, venturing into the realm of authorship, discovering the power of the written word to connect, and inspire. These bound pages are my open letter to the dreamers, the movers, the shakers, and the creatives. It’s dedicated to every OCD’er, to the delirious visionaries and the altruistic do- gooders.This is for everyone who wants it so desperately that they can practically taste it, and for those who have ventured too far to even consider turning back. Consider this my mixed tape—a compilation of experiences, thoughts, and insights, uniquely crafted and put together by me and my creative friends. And I'm profoundly honored to have the brilliant Lisa Nichols pen the foreword.It's a manifesto for those who dance on the thin line between madness and brilliance, who see possibilities where others see none, and who never stop hustling for their craft. Join me on this journey through words—whether you're at the start of your journey or deep in the thick of it, may these words encourage you to keep pushing forward, to stay hungry, and to never lose sight of the beauty within your own story."}/>}/>
  <Route path="/about" element={<Book content={"With over twenty years in the film, television, and entertainment industry, my journey has been one of relentless passion and creativity.From the very start, an innate love for style and an insatiable need to create have driven me forward.There’s no hidden secret to my success—it's the result of hard work, artistry, and a clear sense of purpose.The work itself is what fuels my enthusiasm. It's a genuine love affair with storytelling, expressed through the intricate art of costume design. My approach to this craft is all about attention to detail, which some might call obsessive, but I see it as essential. Every piece of apparel is an opportunity to explore abstract notions of color, proportion, patterns, and genres, all blended to create something strikingly picture-perfect. In each project, I bring a unique sensibility, combining deliberate and delicate techniques to costume design. The ultimate aim is to consistently earn accolades for flawless and timely execution while crafting a portfolio that sparks conversation and admiration. The intricate patterns of storytelling through costumes are not just about visual appeal; they're about crafting narratives that resonate and linger in the minds and hearts of audiences long after the credits roll. As I continue to evolve within this vibrant industry, my dedication remains unwavering—to create, inspire, and provoke thought through the timeless art of costume design."}/>}/>
  <Route path="/trailer-rental" element={<TrailerRental/>}/>
  <Route path="/gentleman-lab" element={<GentlemanLab/>}/>
</Routes>
</main>  
    </Router>
   
  );
}

export default App;
