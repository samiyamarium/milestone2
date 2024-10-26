import profile from './profile1.png';
import './App.css';
import home from './home.avif';
import contact from './contact.avif';
import art from './art.jpg';
import agenticai from './agentic ai.jfif';
import ai from './ai.jfif';
import chatbot from './chatbot.jfif'; 





function App() {
  function Home(){return (
    <div className="bu"> <b>HOMEPAGE:DETAILS ON DIFFRENTS PERSPECTS OF AI</b>
      <div ><img src={ai} alt='ai' className='bu'/>Emerging technology demands collaboration of two or more technologies to devise a merger that could benefit mankind. <br/><br/>Industrial revolutions brought smart solutions of collaborative nature. <br/><br/>That leads to inventions and the innovation taking over all the aspects now is Artificial Intelligence.<br/><br/>From satellites to ground stations<br/> from agriculture to medical<br/> from engineering to corporate sector<br/> Each one demands introduction of AI to their fields.<br/><br/>   </div>

<div  ><img src={chatbot} alt='chat'className='bu' />Auto response is more close to human behaviour!! <br/><br/> Training AI based automatic response bots like chatGPT brought 180 degrees twist in interaction based communication.<br/><br/> It can generate any pice of desired text, art, visual and some bots also has the ability to reject any inappropriate query.<br/><br/>But that is not all!! There came Agentic AI, taking it one step ahead!!</div>
<br/><div  ><img src={agenticai} alt='agent' className='bu'/><br/><b>Agentic AI</b> is a combination of AI and autonomous technology..<br/><br/>These Agents require minimum human supervision<br/>as they have the ability to analyze data and decision making capabilities of their own.. <br/><br/>These near human cognitions are achieved by using<br/>LLMs,ML,Deep learning and other brain usnpied sciences/engineering..<br/><br/>They are action-oriented!! <br/></div>
<br/>Looking at these developments ..<br/> Being an Electrical Engineer and an entusiast AI student.. <br/> I am working on developing skills on Agentic AI now !!



         
        </div>)}
         function About(){return (
          <div className="bg">
               <a className="bu"  href="https://hackathon-1-mauve.vercel.app/">ABOUT</a>
              </div>)}
              function Contact(){return (
                <div className="bg">
                <a className="bu" href="https://www.linkedin.com/in/samiya-marium-893192a8/ ">CONTACT</a>
                    </div>)}
  return (
   <div className="bg"><img  src={art} className="App-logo" alt="logo" />
   <div  > <button className="folio"><img  src={profile} className="App-logo" alt="logo" /><About/><b className="folio"></b></button>&nbsp;&nbsp;&nbsp;<button className="folio"><img  src={contact} className="App-logo" alt="logo" /><Contact/><b className="folio"></b></button>&nbsp;&nbsp;<button   className="folio"><img  src={home} className="App-logo" alt="logo" /><Home/><b className="folio"></b></button></div>
     
    <div ><img  src={art} className="App-logo" alt="logo" />
   
      
</div>

    </div>
  );
}

export default App;
