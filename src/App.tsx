import './App.css'
import FullName from './components/full-name/FullName'
import Links from './components/links/Links'

function App() {
  return (
    <div className="App">
      <FullName />
      <Links />
      <div className='main-cover'>
        <div>March 10, 2023</div>
        <div>ABCD Company</div>
        <div>Address</div>
        <div className='dear'>Dear Careers Team,</div>
        <div className='paragraphs'>
          <div>
            I am excited to apply for the Full-Stack Web Developer position on your team. I am a passionate developer dedicated to producing reliable and high-quality web applications. I would love to work for ABCD company and contribute to your mission of producing the highest quality web applications on time every time.
          </div>
          <div>
            I have created plenty of react frontend applications during the past 2 years. I have advanced proficiencies in HTML, CSS, JavaScript, TypeScript and React regarding the frontend. My last web app has been for a hiring company and you can find it here <a href='https://thehiringsolutions.com'>thehiringsolutions.com</a>. It has been based on React and Typescript. Also other frontend projects can be found on my <a href='https://ahmedsaadkader.github.io/portfolio/'>Portfolio</a> here.
          </div>
          <div>
            Regarding the backend I have developed some APIs using the NodeJs, Express, MongoDB and Postgresql stack with typescript and jasmine for testing. Some of my backend projects include an <a href='https://github.com/AhmedSaadKader/udacity-storefront-backend'>storefront backend API</a> utilizing the Nodejs, express, postgresql, typescript and jasmine stack to develop a backend for a store.  Also an <a href='https://github.com/AhmedSaadKader/image-processing-api'>image processing API</a> utilizing the Nodejs, express, typescript and jasmine stack.
          </div>
          <div>
            To gain fullstack web development knowledge and experience I completed the odin project where I gained hands-on experience regarding the MERN stack. Also I graduated from Udacity's Advanced and challenger web development tracks.
          </div>
          <div>
            I hope to bring to ABCD company my fresh prespective as a developer and I am looking forward to speak with you to further discuss my qualifications. Thank you for your consideration.
          </div>
        </div>
        <div>
          Best Regards,
        </div>
        <div>
          Ahmed Saad
        </div>
      </div>
    </div>
  )
}

export default App
