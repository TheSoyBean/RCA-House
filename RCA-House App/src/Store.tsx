import './App.css'
import Navbar from './Navbar'

export default function Store(){
    return (
    <>
    <head>
        <title>Student Store</title>
    </head>
    <body>
        <Navbar />
        <div className="sameLine">
            <h1>Student Store</h1>
            <h3>Your points: 0 pts.</h3>
        </div>

        <div className="item">
            <img src="src/assets/apple.jpg" alt="Apple" className="itemImg" />
            <h1>Apple</h1>
            <div className="sameLine">
                <p className="textScroll storeDesc">According to all known laws of aviation, there is no way a bee should be able to fly. 
                    Its wings are too small to get its fat little body off the ground.
                    The bee, of course, flies anyway because bees don't care what humans think is impossible.
                    Yellow, black. Yellow, black. Yellow, black. Yellow, black.
                    Ooh, black and yellow!
                    Let's shake it up a little.</p>
                <h3>25 pts</h3>
            </div>
        </div>

        <div className="item">
            <img src="src/assets/apple.jpg" alt="Apple" className="itemImg" />
            <h1>Apple</h1>
            <div className="sameLine">
                <p className="textScroll storeDesc">Description</p>
                <h3>25 pts</h3>
            </div>
        </div>
    </body>
        </>
    )
}