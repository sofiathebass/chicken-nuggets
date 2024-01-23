import logo from './logo.svg';
import { useState } from 'react';
import cottagecore from './images/cottagecore-social.jpg';
import upsidelogo from './images/upsidelogo.jpg';
import cs_resume from './resumes/CS Resume Sofia S24.pdf';
import cs_resume_img from './images/cs-resume.jpg';
import bio_resume from './resumes/Bio Resume Sofia F23.pdf';
import bio_resume_img from './images/bio-resume.jpg';
import vc_resume from './resumes/VC Resume Sofia F23.pdf';
import vc_resume_img from './images/cs-resume.jpg';
import flowers1 from './images/flowers1.png';
import flowers3 from './images/flowers3.png';
import flowers5 from './images/Flower.png';
import flowers55 from './images/Flower55.png';
import flowers555 from './images/Flower555.png';
import labscripts from './images/LabScripts.png';
import flowerborder from './images/flowerborder.png';
import tmsca from './images/woof.png';
import rightBranch from './images/rightBranch.png';
import leftBranch from './images/leftBranch.png';
import trevor from './images/trevor1.png';
import surmice from './images/surmice.png';
import hockemeyer from './images/hockemeyer.png';
import conboy from './images/conboy.png';
import berkscc from './images/berkscc.png';
import b1337 from './images/pastprojects/b1337.png';
import dss from './images/pastprojects/dss.png';
import mlh from './images/pastprojects/mlh.png';
import nutri from './images/pastprojects/nutri.png';
import ostem from './images/pastprojects/ostem.png';
import musa from './images/pastprojects/musa.png';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SimpleImageSlider from "react-simple-image-slider";
import { useMemo, useCallback, useEffect } from "react";
import one from './images/parsed_profpics/one.png';
import two from './images/parsed_profpics/two.png';
import three from './images/parsed_profpics/three.png';
import four from './images/parsed_profpics/four.png';
import saas from './images/pastprojects/saas.png'
import soa from './images/pastprojects/61a.png'
import asm from './images/pastprojects/asm.jpg'
import cloudatcal from './images/pastprojects/cloudatcal.png'
import csua from './images/pastprojects/csua.png'
import plextech from './images/pastprojects/plextech.png'
import qworld from './images/pastprojects/qworld.png'
import ulab from './images/pastprojects/ulab.png'
import bab from './images/pastprojects/bab.png'
import csm from './images/pastprojects/csm.png'
import Sofia from './videos/Sofia.gif'
import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);

  const images = [
    { url: one },
    { url: two },
    { url: three },
    { url: four },
  ];

  const values = [
    saas,
    soa,
    asm,
    cloudatcal,
    csua,
    plextech,
    qworld,
    ulab,
    bab,
    csm,
    b1337,
    dss,
    mlh,
    nutri,
    ostem,
    musa
  ];

  const [squares, setSquares] = useState(values);

  function shuffle(array){
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  function handle_random(){
    const nextSquares = squares.slice();
    setSquares(shuffle(nextSquares));
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="Overlay-Wrapper1">
          <div className="Overlay-Wrapper">
            <img className="Header-Pic" src={cottagecore} alt="Cottagecore" width="100%" height="100%"/> 
            <div className="Resumes">
              <a href={cs_resume} target="_blank" rel="noopener noreferrer">
                <img className="Res" src={cs_resume_img} alt="CS Resume" width="10%"/>
              </a>
              <br></br>
              <a href={bio_resume} target="_blank" rel="noopener noreferrer">
                <img className="Res" src={bio_resume_img} alt="Bio Resume" width="10%"/>
              </a>
            </div>
          </div>
          <div className="FlowerLayer"> 
            <img className="Left" src={flowers1} alt="flowers" width="30%" height="80%"/> 
            <div className="Center"> </div>
            <img className="Right2" src={flowers3} alt="flowers" width="30%" height="80%"/> 
          </div>
        </div>
      </header>
      <div className="NameOverlay" >
      <h1 className="Name">Sofia Theodoras</h1>
      <div className="Particles">
        <Particles
              id="tsparticles"
              init={particlesInit}
              loaded={particlesLoaded}
              options={{
                fullScreen: { enable: false },
                detectRetina: false,
                fpsLimit: 60,
                interactivity: {
                  detectsOn: "canvas",
                  events: {
                    onClick: {
                      enable: true,
                      mode: "push",
                    },
                    onHover: {
                      enable: true,
                      mode: "bubble"
                    },
                    resize: true
                  },
                  modes: {
                    bubble: {
                      distance: 40,
                      duration: 2,
                      opacity: 8,
                      size: 14,
                      speed: 3
                    }
                  }
                },
                particles: {
                  color: {
                    value: "#ffffff"
                  },
                  lineLinked: {
                    blink: false,
                    color: "random",
                    consent: false,
                    distance: 30,
                    enable: true,
                    opacity: 0.3,
                    width: 0.7
                  },
                  move: {
                    attract: {
                      enable: false,
                      rotate: {
                        x: 600,
                        y: 1200
                      }
                    },
                    bounce: false,
                    direction: "none",
                    enable: true,
                    outMode: "bounce",
                    random: true,
                    speed: 0.5,
                    straight: false
                  },
                  number: {
                    density: {
                      enable: false,
                      area: 2000
                    },
                    limit: 0,
                    value: 400
                  },
                  opacity: {
                    animation: {
                      enable: true,
                      minimumValue: 0.05,
                      speed: 2,
                      sync: false
                    },
                    random: false,
                    value: 1
                  },
                  shape: {
                    type: "image",            
                    image: {              
                      src:                
                      "http://www.clker.com/cliparts/F/D/U/R/R/5/white-butterfly-md.png"            
                    }
                  },
                  size: {
                    animation: {
                      enable: false,
                      minimumValue: 0.1,
                      speed: 40,
                      sync: false
                    },
                    random: true,
                    value: 1
                  }
                },
                polygon: {
                  draw: {
                    enable: true,
                    lineColor: "rgba(255,255,255,0.2)",
                    lineWidth: 0.3
                  },
                  move: {
                    radius: 10
                  },
                  inlineArrangement: "equidistant",
                  scale: 0.5,
                  type: "inline",
                  url: "https://particles.js.org/images/smalldeer.svg"
                }
            }}
          />
      </div>
      
      </div>
      <div className="Overlay-Wrapper">
        <div className="Current-Work">
          <div className="Employment">
            <h1>Employment</h1>
            <p style={{fontSize:'2px', color:"#735477"}}>d</p>
            <div className = "Columns" style={{backgroundColor:"white", borderRadius:"25px", paddingTop:"40px", paddingBottom:"20px", border: "5px solid #e9c9ed"}}>
              <div className="Left">
                <img className="Upside" src={upsidelogo} alt="Upside Foods Logo" width="50%" style={{paddingRight:'4%'}}/>
                <p style={{textAlign:'left', margin:'3%'}}> 
                  This summer I interned at Upside Foods as a Molecular Screening Intern. Upside Foods is the first FDA and USDA approved cultivated meat company, 
                  and I was assigned to helping optimize the cell lines currently being developed as part of the R&D process. This meant that I mainly worked with cell culture 
                  and automation, working on optimizing automative efficiency and capacity. Within automation, I worked on a variety of liquid handlers, scripting in C#, JavaScript, and 
                  React. In order to facilitate and test the updated processes, this meant passaging suspension and adhesion cells, and imaging for several different flourescent markers at once. Lastly,
                  I brought it together with datascience, learning R and improving my visualizations to both scientific and nonscientific audiences of varying project related knowledge. <b style={{color: "#900603"}}> Overall, I learned 
                  a lot of relevant information supporting an environmentally sustainable and animal conscious organization in the process of shifting the paradigm on how we view our food! </b>
                </p>
              </div>
            </div>
            <div style={{marginTop:"5%"}}>
              <div className="Webmaster" style={{backgroundColor:"white", paddingBottom:"30px", paddingTop:"10px", borderRadius:"25px", border: "5px solid #e9c9ed"}}>
                <p style={{marginTop:"3%", marginBottom:"2%", fontSize:"24px", color:"#735477", fontFamily:"URW Chancery L, cursive"}}> <b>I run all these websites, go check them out!</b></p>
                <div className = "Columns">
                  <div className="Left">
                    Stem Cell Center<br></br>
                    <a className="hover" href={"https://stemcellcenter.berkeley.edu"} target="_blank" rel="noopener noreferrer">
                      <img src={berkscc} alt="Berkeley Stem Cell Center" width="99.5%" style={{marginTop:"2%"}}/>
                    </a>
                  </div>
                  <div className="Center" style={{marginLeft:"4%"}}>
                    Hockemeyer Lab <br></br>
                    <a className="hover" href={"https://hockemeyerlab.berkeley.edu"} target="_blank" rel="noopener noreferrer">
                      <img src={hockemeyer} alt="Hockemeyer Lab" width="90%" style={{marginTop:"2%"}}/>
                    </a>
                  </div>
                  <div className="Right" style={{textAlign:"center"}}>
                    Conboy Lab <br></br> 
                    <a className="hover" href={"https://conboylab.berkeley.edu"} target="_blank" rel="noopener noreferrer">
                      <img src={conboy} alt="Conboy Lab" width="88%" style={{marginTop:"2%"}}/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Current-Projects">
            <h1 style={{marginTop:'0%'}}>Current Projects</h1>
            <div className="Project" data-aos="fade-left" data-aos-duration="1000" data-aos-offset="-100">
              <div className="ProjectLeft1">
                <a href={"https://sofiathebass.github.io/SmallScripts/"} target="_blank" rel="noopener noreferrer">
                  <img className="Icon" src={labscripts} alt="Lab Scripts" width="85%"/>
                </a>
                <p className="SmallFont">I coded this website because I'm cool and stuff</p>
              </div>
              <div className="ProjectRight1" style={{marginRight:'17%', textAlign:'left'}}>
                <p style={{fontSize:"16px"}}>This website is dedicated to short scripts for help with lab calculations or coursework. 
                  This scripting website has Python integrated into Java using Pyscript, which allows me and my peers to write code in python, integrate it into the website as a small icon, and then cleanly output results. 
                </p>
              </div>
            </div>
            <div className="Project" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="-200">
              <div className="ProjectLeft2" style={{marginLeft:'6%'}}>
                <p style={{fontSize:"16px"}}>
                  Current copresident of the TMSCA, organizing the first TMSCA conference at UC Berkeley since 2018 and raising 6k of funding, triple any previous conference, and 
                  bringing in speakers from around the Bay Area, including UCB, UCSF, Stanford, and CIRM.
                  As well, I facilitated partnerships with other student orgs, university spaces, and external corporations, with the end goal of educating UC Berkeley and the surrounding Bay Area high schools about stem cells and translational medicine.
                </p>
              </div>
              <div className="ProjectRight2">
                <a href={"https://tmsca.berkeley.edu/index.html"} target="_blank" rel="noopener noreferrer">
                  <img className="Icon" src={tmsca} alt="TMSCA" width="85%"/>
                </a>
                <p className="SmallFont">Website credit Richard Ruan, I'm the current webmaster</p>
              </div>
            </div>
            <div className="Project" data-aos="fade-right" data-aos-duration="1000" data-aos-offset="-200">
              <div className="ProjectLeft1">
                <a href={"https://sofiathebass.github.io/SurMice/index.html"} target="_blank" rel="noopener noreferrer">
                  <img className="Icon" src={surmice} alt="SurMice" width="65%" style={{marginTop:"-6%"}}/>
                </a>
                <p className="SmallFont">Website coded by Myself, Conner Mi, Giselle Fuchs</p>
              </div>
              <div className="ProjectRight1" style={{marginTop:"-1%", marginRight:'6%'}}>
                <p style={{fontSize:"16px"}}>Big Ideas competition finalist and CEO of SurMice, a startup focused on murdering less mice.
                  SurMice aims to facilitate closer collaboration between universities and zoos by using surplus lab mice as “feeder mice” for zoos in order to cut costs, resource waste, and energy usage for both parties.
                </p>
              </div>
            </div>
            <div className="Project" data-aos="fade-down" data-aos-duration="1000" data-aos-offset="-200" style={{marginBottom:"2%"}}>
              <div className="ProjectLeft2" style={{marginLeft:'6%', marginBottom:'3%'}}>
                <p style={{fontSize:"16px"}}>Current Crisis Counselor for the Trevor Project, supporting contacts around the US as they navigate through difficult situations.</p>
              </div>
              <div className="ProjectRight2" style={{marginTop:"2%"}}>
                <a href={"https://www.thetrevorproject.org"} target="_blank" rel="noopener noreferrer">
                  <img className="Icon" src={trevor} alt="Trevor" width="65%"/>
                </a>
                <p className="SmallFont">I didn't code this website, but definitely <br></br> take a look and support them!</p>
              </div>
            </div>
          </div>
        </div>
        <div className="Overlay">
          <img src={flowers5} alt="Cottagecore" className="Test-Overlay"/>
        </div>
        <div className="Overlay" style={{right:"100px"}}>
          <img src={flowers55} alt="Cottagecore" className="Test-Overlay"/>
        </div>
        <div className="Overlay2" style={{right:"100px"}}>
          <img src={flowers555} alt="Cottagecore" className="Test-Overlay2"/>
        </div>
      </div>
      <div className="Pictures" style={{marginLeft:"7.5%"}}>
        <br></br>
        <br></br>
        {/*<h3 data-aos="fade-in" data-aos-duration="1000" data-aos-offset="200">Pictures!</h3>*/}
        <br></br>
        <br></br>
        <div>
          <SimpleImageSlider
            width={'85%'}
            height={'75%'}
            textAlign={'center'}
            images={images}
            showBullets={true}
            showNavs={true}
          />
        </div>
      </div>
      <div className="Past-Projects">
        <div className="Overlay-Wrapper">
          <div className="Branches">
            <div className="LeftBranch">
              <img className="LeftBranchImg" src={leftBranch} alt="Left Branch" data-aos="fade-up-right" data-aos-duration="1000" data-aos-offset="200"/>
            </div>
            <div className="RightBranch">
              <img className="RightBranchImg" src={rightBranch} alt="Right Branch" data-aos="fade-up-left" data-aos-duration="1000" data-aos-offset="200"/>
            </div>
          </div>
          <div className="TheSquareHole">
            <br></br>
            <br></br>
            <br></br>
            <h3 data-aos="fade-in" data-aos-duration="1000" data-aos-offset="0">Past Projects</h3>
            <br></br>
            <br></br>
            <br></br>
            <div className="SquareBox">
            <Square value={squares[0]} />
            <Square value={squares[1]} />
            <Square value={squares[2]} />
            <Square value={squares[3]} />
            <Square value={squares[4]} />
            <Square value={squares[5]} />
            <Square value={squares[6]} />
            <Square value={squares[7]} />
            <Square value={squares[8]} />
            <Square value={squares[9]} />
            <Square value={squares[10]} />
            <Square value={squares[11]} />
            <Square value={squares[12]} />
            <Square value={squares[13]} />
            <Square value={squares[14]} />
            <Square value={squares[15]} />
            </div>
            <br></br>
            <br></br>
            <br></br>
            <button className="randomness" onClick={() => handle_random()}>Scramble!</button>
            <br></br>
          </div>
        </div>
        <div className="Overlay-Wrapper" style={{paddingTop:"0%", marginTop:"-10%"}}>
            <div className="cursive" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="100">
              <h2>labs</h2>
            </div>
            <div className="cursive" data-aos="fade-in" data-aos-duration="1000" data-aos-offset="200" style={{height:'600px', width:'90%', backgroundColor:'#f5fefd', borderRadius:'10px'}}>
            </div>
            <div className="Lab-Info" data-aos="fade-in" data-aos-duration="1000" data-aos-offset="200">
              <div className="Congirl" style={{marginTop:"3%", display:"flex", borderRadius:"50px", width:'70%'}}>
                <div className="ProjectLeft1">
                  <a href={"https://conboylab.berkeley.edu/"} target="_blank" rel="noopener noreferrer">
                    <img className="Icon" src={conboy} alt="Conboy Lab" width="90%" style={{marginLeft:'10%', marginTop:'-2%'}}/>
                  </a>
                </div>
                <div className="ProjectRight1">
                  <p style={{fontSize:'22px', marginTop:'9%', marginRight:'5%', marginLeft:'5%'}}>Currently, I'm at the Conboy Lab, which studies aging and heterochronic parabiosis. Heterochronic parabiosis is blood exchange from young to old animals,
                    theoretically for the process of extending youth in aged bodies. The lab is studying what causes aging in the blood, and what could be taken out or added in to help extend life. Currently, 
                    I'm working on the blood brain barrier, what in old blood causes cells to senence, die, or age, and what in young blood helps rejuvenate brain cells?
                  </p>
                </div>
              </div>
              <div className="Space"></div>
              <div className="Barton" style={{display:"flex", borderRadius:"50px", width:"70%", marginLeft:"28%"}}>
                <div className="ProjectLeft2">
                  <p style={{fontSize:'22px', marginTop:'7%', marginRight:'5%', marginLeft:'5%'}}>
                    I was at the Barton Lab from F21-S22, where I worked on gut microbiota interactions. This involved working with germ free and high barrier mice, in order to minimize or completely eliminate 
                    outside microbiota influence from handlers or the environment around the mice. It also meant that I worked with the anaerobic chamber to culture bacteria, as well as doing mini/midipreps to add plasmids to these bacteria. 
                    I also had exposure to tumor injections, sapphic/cardiac bleeds, and mouse weaning/euthanasia work through this experience!
                  </p>
                </div>
                <div className="ProjectRight2">
                  <a href={"https://bartonlab.berkeley.edu/"} target="_blank" rel="noopener noreferrer">
                    <img className="Icon" src={tmsca} alt="Barton Lab" width="90%" style={{marginRight:'10%', marginTop:'-2%'}}/>
                  </a>
                </div>
              </div>
            </div>
            <div className="cursive" style={{textAlign:"left", marginLeft:"-4%", marginTop:"-2.5%"}} data-aos="fade-in" data-aos-duration="1000" data-aos-offset="200">
              <img src={flowerborder} alt="Cottagecore" width="15%"/>
            </div>
            <div className="cursive" style={{textAlign:"right", display:"flex", alignItems:"self-end", marginLeft:"24%", marginBottom:"19%"}} data-aos="fade-in" data-aos-duration="1000" data-aos-offset="200">
              <img src={flowerborder} alt="Cottagecore" width="15%"/>
            </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <h3>Animals/Volunteering, etc.</h3>
        <br></br>
        <br></br>
        <div className="Pigeon" data-aos="fade-right" data-aos-duration="3000" data-aos-easing="ease-in-out" style={{marginLeft:'30%', marginBottom:'10%'}}>
          <img src={Sofia} alt="Pigeon" width="30%"/>
        </div>
        {/*
        <div className="Pigeon" data-aos="fade-right" data-aos-duration="3000">
          <video height="600px" controls autoplay loop muted playsinline>
          <source src={pigeon} type="video/mp4"/>
          </video>
          <script>
          document.getElementById('vid').play();
          </script>
        </div>
          */}
      </div>
    </div>
  );
}

function Square({ value }) {
  return <img className="square" src={value} alt="Past Project"/>
}

export default App;


/*
<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
*/

/*
<html align='center'>
<body>	
		<a><img id="logo1" class="next-particle"  data-init-position="random"
				  data-init-direction="left"
				  data-fade-position="left"
				  data-fade-direction="left"

				  data-particle-gap="1"

				 data-width="800"
  				  data-height="600"

  				  data-max-width="500"
  				  data-max-height="400"

  				

  				  data-mouse-force="80"

  				   data-gravity="0.06"

  				   data-noise="20"

            src="http://res.cloudinary.com/mrmw1974/image/upload/v1513726195/XBD1_dqjlw5.png"></a>
  	
</body>
</html>

*/