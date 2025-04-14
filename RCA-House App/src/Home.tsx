import './App.css'
import Navbar from './Navbar'

export default function Home() {
  return (
    <>
    <head>
        <title>House Points App Home</title>
    </head>
    <body>
        <Navbar />
        <div className = "class-leaderboard">
            <div className = "first">
                <img src = "src/assets/houseCrest.webp" alt ="House Crest Image" />
                <h1>1st</h1>
                <p>980,000 Pts.</p>
            </div>
            <div className = "second">
                <img src = "src/assets/houseCrest.webp" alt ="House Crest Image" />
                <h1>2nd</h1>
                <p>700,000 Pts.</p>
            </div>
            <div className = "third">
                <img src = "src/assets/houseCrest.webp" alt ="House Crest Image" />
                <h1>3rd</h1>
                <p>590,000 Pts.</p>
            </div>
            <div className = "fourth">
                <img src = "src/assets/houseCrest.webp" alt ="House Crest Image" />
                <h1>4th</h1>
                <p>530,000 Pts.</p>
            </div>
            <div className = "fifth">
                <img src = "src/assets/houseCrest.webp" alt ="House Crest Image" />
                <h1>5th</h1>
                <p>499,000 Pts.</p>
            </div>
            <div className = "sixth">
                <img src = "src/assets/houseCrest.webp" alt ="House Crest Image" />
                <h1>6th</h1>
                <p>420,000 Pts.</p>
            </div>
            <div className = "seventh">
                <img src = "src/assets/houseCrest.webp" alt ="House Crest Image" />
                <h1>7th</h1>
                <p>380,000 Pts.</p>
            </div>
            <div className = "eighth">
                <img src = "src/assets/houseCrest.webp" alt ="House Crest Image" />
                <h1>8th</h1>
                <p>380,000 Pts.</p>
            </div>
        </div>
    </body>
    </>
    
  )
}
