import './App.css'
import Navbar from './Navbar'

export default function Leaderboard(){
    return(
        <>
    <head>
        <title>Leaderboard</title>
    </head>
    <body>
        <Navbar />
        <div className = "leaderboard">
            <div>
                <h1>1st</h1>
                <img src = "src/assets/picture.jpg" alt = "Profile Picture" />
                <p>Profile Name</p>
                <p>7,605 Pts.</p>
                <img src = "src/assets/houseCrest.webp" alt = "house Crest Image" />
            </div>
            <div>
                <h1>2nd</h1>
                <img src = "src/assets/picture.jpg" alt = "Profile Picture" />
                <p>Profile Name</p>
                <p>7,605 Pts.</p>
                <img src = "src/assets/houseCrest.webp" alt = "house Crest Image" />
            </div>
            <div>
                <h1>3rd</h1>
                <img src = "src/assets/picture.jpg" alt = "Profile Picture" />
                <p>Profile Name</p>
                <p>7,605 Pts.</p>
                <img src = "src/assets/houseCrest.webp" alt = "house Crest Image" />
            </div>
            <div>
                <h1>44th</h1>
                <img src = "src/assets/picture.jpg" alt = "Profile Picture" />
                <p>Profile Name</p>
                <p>7,605 Pts.</p>
                <img src = "src/assets/houseCrest.webp" alt = "house Crest Image" />
            </div>
        </div>
    </body>
    </>
    )
}