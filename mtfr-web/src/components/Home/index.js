import { Link } from "react-router-dom"
import './index.scss'

const Home = () => {

    return (
        <div className="container home-page">
            < div className="text-zone">
                <h1>Hello, There.
                    <br />
                    More Text Here... This will be replaced at some point!
                    <br />
                    web development here
                </h1>
                <h2> More content Here in the H2 tag</h2>
                <Link to="/contact" className="flat-button">Contact Me Link Here</Link>
            </div>
        </div>
    )
}

export default Home