import Navbar from "../components/Navbar";
import { NavLinkSolid } from "../components/NavLinkSolid";
import noteTakingImage from "../assets/note-taking-illustration.avif";


const Home = () => {
    return (
        <>
            <Navbar />
            <div className="md:grid grid-cols-2 items-center justify-between p-4 lg:px-9 gap-3">
            <img className="w-full max-w-xl mx-auto md:ms-auto md:me-0 mt-10 md:mt-0 order-2" src={noteTakingImage} alt="Note-taking Illustration" />
                <div className="max-w-lg text-center md:text-left mx-auto md:mx-0">
                    <h1 className="mb-5 text-3xl sm:text-4xl xl:text-6xl font-bold bg-gradient-to-r from-violet-800 to-blue-800 bg-clip-text text-transparent">
                        Simplify your life with our powerful note-taking app.
                    </h1>
                    <p className="lg:text-xl mb-10">
                        Our note-taking app is here to rescue you! With our user-friendly interface and powerful features, you can take notes effortlessly and manage them effectively.
                    </p>
                    <NavLinkSolid text="Create account" to="/register" />
                </div>
        </div>
        </>
    );
};


export default Home