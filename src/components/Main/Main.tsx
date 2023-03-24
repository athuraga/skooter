import Particles from "react-tsparticles"
import { Container } from "./styles"
import { Hero } from "../Hero/Hero"
import { Bng } from "../Bng/Bng"

// import { About } from "../About/About";
// import { Contact } from "../Contact/Contact";
// import { Project } from "../Project/Project";



import wordpress from "../../assets/t1.png";
import shopify from "../../assets/t2.png";
import htmlIcon from "../../assets/t3.png";
import cssIcon from "../../assets/t4.png";
import sassIcon from "../../assets/t5.png";
import jsIcon from "../../assets/t6.png";
import nodeIcon from "../../assets/t7.png";
import reactIcon from "../../assets/t8.png";
import typescriptIcon from "../../assets/t9.png";
import vueIcon from "../../assets/t10.png";
import boostrapIcon from "../../assets/t11.png";
import Background from '../images/background_image.png';
    
export function Main() {
  return (

    <Container>
      <Particles
        id="tsparticles"
        options={{
          "fullScreen": {
            "enable": true,
            "zIndex": 1
          },
          "detectRetina": true,
          "fpsLimit": 60,
          "interactivity": {
            "events": {
              "onClick": {
                "enable": true,
                "mode": "push"
              },
              "onDiv": {
                "elementId": "repulse-div",
                "enable": false,
                "mode": "repulse"
              },
              "onHover": {
                "enable": true,
                "mode": "bubble",
                "parallax": {
                  "enable": false,
                  "force": 60,
                  "smooth": 10
                }
              },
              "resize": true
            },
            "modes": {
              "bubble": {
                "distance": 400,
                "duration": 2,
                "opacity": 0.8,
                "size": 2,
              },
              "connect": {
                "distance": 80,
                "lineLinked": {
                  "opacity": 0.5
                },
                "radius": 60
              },
              "grab": {
                "distance": 400,
                "lineLinked": {
                  "opacity": 1
                }
              },
              "push": {
                "quantity": 2
              },
              "remove": {
                "quantity": 2
              },
              "repulse": {
                "distance": 200,
                "duration": 0.4
              }
            }
          },
          "particles": {
            "color": {
              "value": "#ffffff"
            },
            "lineLinked": {
              "blink": false,
              "color": "#000",
              "consent": false,
              "distance": 150,
              "enable": false,
              "opacity": 0.4,
              "width": 1
            },
            "move": {
              "attract": {
                "enable": false,
                "rotate": {
                  "x": 600,
                  "y": 1200
                }
              },
              "bounce": false,
              "direction": "none",
              "enable": true,
              "outMode": "out",
              "random": false,
              "speed": 2,
              "straight": false
            },
            "number": {
              "density": {
                "enable": true,
                "area": 800
              },
              "limit": 20,
              "value": 15,
            },
            "opacity": {
              "animation": {
                "enable": true,
                "minimumValue": 0.2,
                "speed": 1,
                "sync": false
              },
              "random": true,
              "value": 1
            },
            "rotate": {
              "animation": {
                "enable": true,
                "speed": 5,
                "sync": false
              },
              "direction": "random",
              "random": true,
              "value": 0
            },
            "shape": {
              "character": {
                "fill": false,
                "font": "Verdana",
                "style": "",
                "value": "*",
                "weight": "400"
              },
              "image": [
                {
                  "src": boostrapIcon,
                  "width": 40,
                  "height": 40
                },
                {
                  "src": cssIcon,
                  "width": 40,
                  "height": 40
                },
                {
                  "src": wordpress,
                  "width": 40,
                  "height": 40
                },
                {
                  "src": shopify,
                  "width": 40,
                  "height": 40
                },
                {
                  "src": htmlIcon,
                  "width": 40,
                  "height": 40
                },
                {
                  "src": jsIcon,
                  "width": 40,
                  "height": 40
                },
                // {
                //   "src": mysqlIcon,
                //   "width": 40,
                //   "height": 40
                // },
                {
                  "src": nodeIcon,
                  "width": 40,
                  "height": 40
                },
                {
                  "src": reactIcon,
                  "width": 40,
                  "height": 40
                },
                {
                  "src": sassIcon,
                  "width": 40,
                  "height": 40
                },
                {
                  "src": typescriptIcon,
                  "width": 40,
                  "height": 40
                },
                // {
                //   "src": vscodeIcon,
                //   "width": 40,
                //   "height": 40
                // },
                {
                  "src": vueIcon,
                  "width": 40,
                  "height": 40
                },

              ],
              "polygon": {
                "sides": 5
              },
              "stroke": {
                "color": "#000000",
                "width": 0
              },
              "type": "image"
            },
            "size": {
              "animation": {
                "enable": false,
                "minimumValue": 0.1,
                "speed": 40,
                "sync": false
              },
              "random": false,
              "value": 16
            }
          },
          "polygon": {
            "draw": {
              "enable": false,
              "lineColor": "#ffffff",
              "lineWidth": 0.5
            },
            "move": {
              "radius": 10
            },
            "scale": 1,
            "url": ""
          },
          "background": {
            "image": "",
            "position": "50% 50%",
            "repeat": "no-repeat",
            "size": "cover"
          }
        }}
      />
      
      <Hero></Hero>
      {/* <About></About>
      <Project></Project>
      <Contact></Contact> */}
    </Container>
  );
}