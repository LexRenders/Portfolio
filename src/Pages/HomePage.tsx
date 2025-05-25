import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div className="w-3/4 mx-auto text-center text-white">
            <div>
                <img src="/Foto_TM.jpg" alt="Photo Lex" className="mt-5 inline-block h-auto w-60 rounded-2xl" />
            </div>
            <div>
                <h1 className="font-semibold text-4xl mt-10">Hi, i am Lex, passionate software developer</h1>
                <p className="mt-5 text-lg font-semibold">In this online portfolio you can get to know all about me and my projects, feel free to have a look around and dont hesitate to contact me!</p>
                <div>
                    <Link to="/about-me">
                        <button type="button" className="mt-10 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-lg px-5 py-2.5 mb-15">
                            Learn more about me
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default HomePage;