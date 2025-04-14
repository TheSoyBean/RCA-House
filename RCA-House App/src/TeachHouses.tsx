import './App.css'
import Navbar from './Navbar'

export default function TeachHouses(){
    <>
    <head>
        <title>Student Store</title>
    </head>
    <body>
        <Navbar />
        <div className="house">
            <img src="houseCrest.webp" alt="House Crest" className="houseImg" />
            <div className ="sameLine  houseTitle">
                <h1>Barbarians</h1>
                <h3>700,000 Pts.</h3>
            </div>
            <div className ="textScroll teachDesc">
                According to all known laws of aviation, there is no way a bee should be able to fly. 
                Its wings are too small to get its fat little body off the ground.
                The bee, of course, flies anyway because bees don't care what humans think is impossible.
                Yellow, black. Yellow, black. Yellow, black. Yellow, black.
                Ooh, black and yellow!
                Let's shake it up a little.
            </div>
        </div>

        <div className ="house">
            <img src="houseCrest.webp" alt="House Crest" className="houseImg" />
            <div className ="sameLine houseTitle">
                <h1>Barbarians</h1>
                <h3>700,000 Pts.</h3>
            </div>
            <div className ="textScroll teachDesc">
                According to all known laws of aviation, there is no way a bee should be able to fly. 
                Its wings are too small to get its fat little body off the ground.
                The bee, of course, flies anyway because bees don't care what humans think is impossible.
                Yellow, black. Yellow, black. Yellow, black. Yellow, black.
                Ooh, black and yellow!
                Let's shake it up a little.
            </div>
        </div>
    </body>
    </>
}