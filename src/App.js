// Portfolio Site by Carl Ian Voller
// Kinda just rushed this in 3 days so yea don't mind the messy code.

import React from 'react';
import triangulr from 'triangulr';
import Modal from "./components/Modal";
import Slideshow from "./components/Slideshow";
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isFixedHeader: false, showingMoreProj: 0 }

    window.onscroll = () => {
      if(window.scrollY >= window.innerHeight) {
        this.setState({ isFixedHeader: true });
      } else {
        this.setState({ isFixedHeader: false });
      }
    }
  }

  componentDidMount() {
    let svg = new triangulr(440, 2000, 60, 0, (path) => {
      let letters = ["A", "B", "C", "D", "E", "F"];
      let alp = letters[Math.floor(Math.random()*6)]
      return `#1${alp}1${alp}1${alp}`;
    });
    document.getElementById("bg").appendChild(svg);
    svg.style.display = window.innerWidth < 980 ? 'none' : 'block'
    window.onresize = () => {
      svg.style.display = window.innerWidth < 980 ? 'none' : 'block'
    }
  }

  render() {

    return (<div id="contentHolder">
        <div id="bg">
          <h1>Hello! I'm <label style={{ color: '#e8772d'}}>Carl Voller</label><br /><span>and this is me.</span>
          <div className="social">
            <a href="https://github.com/Portatolova" style={{ backgroundImage: 'url("/assets/icons/github.png")'}}></a>
            <a href="https://www.linkedin.com/in/carl-ian-voller/" style={{ backgroundImage: 'url("/assets/icons/linkedin.png")'}}></a>
            <a href="https://instagram.com/carl_the_meh" style={{ backgroundImage: 'url("/assets/icons/instagram.png")'}}></a>
          </div></h1>
          <div className="aboutBtn" onClick={() => { window.scrollTo(0, window.innerHeight)}}>
            <span>About me</span>
            <a>&#9661;</a>
          </div>
        </div>
        <div id="topHeader" className={this.state.isFixedHeader ? 'headerFixed' : ''}>
          <a href="#aboutMe">About</a>
          <a href="#projects">Projects</a>
          <a href="#events">Events</a>
          <a href="#awards">Awards</a>
          <a href="#leadership">Leadership</a>
        </div>
        <section id="aboutMe">
          <h1>About me</h1>
          <div className="seperator"></div>
          <div className="pp"></div>
          <span>I’m a 16 year old kid from Singapore with a strong passion in History, Linguistics and especially Computing. I would describe myself as a confident presenter with a spark for innovation and solving  problems using programming and application development.</span><br />
          <span>I've been programming since I was 12 when I first tried making my first website using HTML, CSS and Javascript. Since then, I've made numerous websites and apps for all sorts of causes. In the future, I hope to pursue a career as a Cybersecurity Analyst as I believe that security is one of the most vital aspects of Computing and I definitely want to be apart of that.</span>
        </section>
        <section id="projects">
          <h1>Projects</h1>
          <div className="seperator"></div>
          <span>Click on a project to learn more.</span>
          <div className="projectHolder">
            <div className="project" style={{ backgroundImage: 'url("/assets/banners/codecollab.jpg")' }}>
              <div onClick={() => this.setState({ showingMoreProj: 1 })}>
                <span>CodeCollab</span>
              </div>
              <Modal show={this.state.showingMoreProj === 1} onClose={() => { this.setState({ showingMoreProj: 0 }) }}>
                <div className="modalHolder">
                  <div>
                    <h1>CodeCollab</h1>
                    <span>Link: <a href="https://codecollab.io" target="_blank">https://codecollab.io</a></span>
                    <span>Role: Co-Founder, Lead Developer, Designer</span>
                    <span>Open sourced: Partially</span>
                    <span>GitHub: <a href="https://github.com/codecollab-io" target="_blank">https://github.com/codecollab-io</a></span>
                    <span>Tech: MongoDB, ExpressJS, ReactJS, Nginx, Socket.IO, ShareDB, Docker</span>
                    <span>A collaborative code editor and compiler for the web. Allows its users to test and run code in over 17 different programming languages in a real-time collaborative environment. Users can also test and host websites. In fact, this very website is hosted on CodeCollab.</span>
                    <span>At the moment, CodeCollab is utilised in SST and Dunman High School for their
                    O and A levels syllabus. CodeCollab also has over 4000 registered users with over
                    1000 of them being monthly active users.</span>
                    <button onClick={() => window.open("https://codecollab.io", '_blank')}>Visit Site</button>
                  </div>
                </div>
              </Modal>
            </div>
            <div className="project" style={{ backgroundImage: 'url("/assets/banners/outside.jpg")' }}>
              <div onClick={() => this.setState({ showingMoreProj: 2 })}>
                <span>OutsideApp Web</span>
              </div>
              <Modal show={this.state.showingMoreProj === 2} onClose={() => {  this.setState({ showingMoreProj: 0 }) }}>
                <div className="modalHolder">
                  <div>
                    <h1>OutsideApp Web</h1>
                    <span>Link: <a href="https://web.outsideapp.co" target="_blank">https://web.outsideapp.co</a></span>
                    <span>Role: Web Developer</span>
                    <span>Open sourced: No</span>
                    <span>Tech: NextJS, ReactJS</span>
                    <span>Created the web interface of OutsideApp, an award winning mobile app, for <a href="https://outsideapp.co" target="_blank">Outside Technologies Pte Ltd</a>, a local Singaporean startup. It is currently still in use.</span>
                    <button onClick={() => window.open("https://web.outsideapp.co", '_blank')}>Visit Site</button>
                  </div>
                </div>
              </Modal>
            </div>
            <div className="project" style={{ backgroundImage: 'url("/assets/banners/motpreneur.jpg")' }}>
              <div onClick={() => this.setState({ showingMoreProj: 3 })}>
                <span>Motpreneur</span>
              </div>
              <Modal show={this.state.showingMoreProj === 3} onClose={() => {  this.setState({ showingMoreProj: 0 }) }}>
                <div className="modalHolder">
                  <div>
                    <h1>Motpreneur</h1>
                    <span>Link: <a href="https://5krno-carlvoller.my.cclb.io/" target="_blank">https://5krno-carlvoller.my.cclb.io/</a></span>
                    <span>Role: Developer</span>
                    <span>Open sourced: Yes</span>
                    <span>GitHub: <a href="https://github.com/thatdavidguy/Motpreneur" target="_blank">https://github.com/thatdavidguy/Motpreneur</a></span>
                    <span>CodeCollab Project: <a href="https://codecollab.io/@carlvoller/Motpreneur" target="_blank">https://codecollab.io/@carlvoller/Motpreneur</a></span>
                    <span>Tech: Plain HTML, CSS and Javascript (Speech Recognition API)</span>
                    <span>A notes-taking application that uses speech recognition to listen to lectures and record down notes. Project currently not complete.</span>
                    <span>This Project was created and hosted on CodeCollab.</span>
                    <button onClick={() => window.open("https://5krno-carlvoller.my.cclb.io/", '_blank')}>Visit Site</button>
                  </div>
                </div>
              </Modal>
            </div>
            <div className="project" style={{ backgroundImage: 'url("/assets/banners/brailogue.jpg")' }}>
              <div onClick={() => this.setState({ showingMoreProj: 4 })}>
                <span>Brailogue</span>
              </div>
              <Modal show={this.state.showingMoreProj === 4} onClose={() => {  this.setState({ showingMoreProj: 0 }); }}>
                <div className="modalHolder">
                  <div>
                    <h1>Brailogue</h1>
                    <span>Link: <a href="https://ukh19-carlvoller.my.cclb.io" target="_blank">https://ukh19-carlvoller.my.cclb.io</a></span>
                    <span>Role: Group Leader, Developer, Designer</span>
                    <span>Open sourced: Yes</span>
                    <span>GitHub: <a href="https://github.com/Portatolova/Brailogue" target="_blank">https://github.com/Portatolova/Brailogue</a></span>
                    <span>CodeCollab Project: <a href="https://codecollab.io/@carlvoller/Brailogue" target="_blank">https://codecollab.io/@carlvoller/Brailogue</a></span>
                    <span>Tech: HTML, CSS, Javascript, Python Flask (Youtube Transcript API & Speech Recognition API)</span>
                    <span>An English-Braille translator for the web. Capable of translating Text, Files, Audio and entire Youtube videos into Braille. Created for school O Levels Computing Project and got an A1.</span>
                    <span>This Project is hosted on CodeCollab. (NOTE: CodeCollab version and preview link is only capable of translating text. For full functionality download the GitHub repo.)</span>
                    <button onClick={() => window.open("https://ukh19-carlvoller.my.cclb.io", '_blank')}>Visit Site</button>
                  </div>
                </div>
              </Modal>
            </div>
            <div className="project" style={{ backgroundImage: 'url("/assets/banners/parkgoer.jpg")' }}>
              <div onClick={() => this.setState({ showingMoreProj: 5 })}>
                <span>Parkgoer</span>
              </div>
              <Modal show={this.state.showingMoreProj === 5} onClose={() => {  this.setState({ showingMoreProj: 0 }); }}>
                <div className="modalHolder">
                  <div>
                    <h1>Parkgoer</h1>
                    <span>App Store Link: <a href="https://apps.apple.com/us/app/parkgoer/id1441745725" target="_blank">Parkgoer</a></span>
                    <span>Role: Developer and Assistant Designer</span>
                    <span>Open sourced: Yes</span>
                    <span>GitHub: <a href="https://github.com/Portatolova/Parkgoer" target="_blank">https://github.com/Portatolova/Parkgoer</a></span>
                    <span>Tech: Swift, Firebase</span>
                    <span>A Singapore-based Park explorer and quiz app created for the Swift Accelerator Program 2018. Explore parks in Singapore and learn all about the flora and fauna that surrounds you! This app will quiz you on information that you can find on sign boards scattered all over parks.</span>
                    <span>Created in 2018 and is currently not maintained.</span>
                    <button onClick={() => window.open("https://apps.apple.com/us/app/parkgoer/id1441745725", '_blank')}>Visit App Store</button>
                  </div>
                </div>
              </Modal>
            </div>
          </div>
        </section>
        <section id="events">
          <h1>Events / Presentations</h1>
          <div className="seperator"></div>
          <Slideshow>
            <div className="event">
              <h1>Swift Innovators Summit 2018</h1>
              <span>EMCEE and Presenter</span>
              <a href="https://www.swiftinsg.org/" target="_blank">Check out event</a>
            </div>
            <div className="event">
              <h1>Hackomania 2019</h1>
              <span>Volunteer</span>
              <a href="https://hackomania.geekshacking.com/" target="_blank">Check out event</a>
            </div>
            <div className="event">
              <h1>BuildingBlocs 2019 @ NUS SoC</h1>
              <span>Presenter</span>
              <a href="https://buildingblocs.github.io/2019/" target="_blank">Check out event</a>
            </div>
            <div className="event">
              <h1>Singapore Tech Industry Gala Night</h1>
              <span>Prize Recipient</span>
              <a href="https://techblazerawards.sg/" target="_blank">Awards Website</a>
            </div>
            <div className="event">
              <h1>Swift Innovators Summit 2019</h1>
              <span>Volunteer</span>
              <a href="https://www.swiftinsg.org/" target="_blank">Check out event</a>
            </div>
            <div className="event">
              <h1>BuildingBlocs 2020<br/>(Online)</h1>
              <span>Presenter</span>
              <a href="https://youtu.be/FP0lsFcSw3M?t=9704" target="_blank">Watch Presentation</a>
            </div>
          </Slideshow>
        </section>
        <section id="awards">
          <h1>Awards</h1>
          <div className="seperator"></div>
          <div className="award">
            <span>Australian Informatics Olympiad 2019</span>
            <span>Bronze Award</span>
            <span>Find out more about the <a href="https://www.amt.edu.au/australian-informatics-olympiad" target="_blank">Australian Informatics Olympiad</a></span>
          </div>
          <div className="contentSeperator"></div>
          <div className="award">
            <span>SG:D Techblazer Awards 2019</span>
            <span>Silver Award Recipient</span>
            <span>Read the <a href="https://www.businesstimes.com.sg/hub/sgd-techblazer-awards/unlocking-the-potential-of-artificial-intelligence" target="_blank">Business Times Article</a></span>
            <span>Find out more about the <a href="https://techblazerawards.sg" target="_blank">SG:D Techblazer Awards</a></span>
          </div>
          <div className="contentSeperator"></div>
          <div className="award">
            <span>SST Inventive Minds Award</span>
            <span>2020 Recipient</span>
            <span>Given by the <a href="https://sst.edu.sg" target="_blank">School of Science and Technology, Singapore</a></span>
          </div>
        </section>
        <section id="leadership">
          <h1>Leadership</h1>
          <div className="seperator"></div>
          <div className="leadershipRole">
            <span>2019-2020</span>
            <span>President of <a href="https://sstinc.org" target="_blank">SST Inc</a></span>
            <span>Lead the Executive Committee in running the organisation, hosted guests through presentations/tours as well as promoted a bonded and united culture within the organisation's members.</span>
          </div>
          <div className="contentSeperator"></div>
          <div className="leadershipRole">
            <span>2018-2019</span>
            <span>Chief Technology Officer (Web) of <a href="https://sstinc.org" target="_blank">SST Inc</a></span>
            <span>Maintained the organisation's website as well as promoted web development within the organisation.</span>
          </div>
          <div className="contentSeperator"></div>
          <div className="leadershipRole">
            <span>2019</span>
            <span>Class Chairperson</span>
            <span>Created a bonded culture among classmates and served as a bridge between students and teachers.</span>
          </div>
          <div className="contentSeperator"></div>
          <div className="leadershipRole">
            <span>2018</span>
            <span>Class Vice-Chairperson</span>
            <span>Created a bonded culture among classmates and served as a bridge between students and teachers.</span>
          </div>
        </section>
      </div>)
  }
}

export default App;
