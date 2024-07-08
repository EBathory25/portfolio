import React from 'react'
import { Element } from 'react-scroll'
import Scene from './Scene'
import { Link } from 'react-scroll';


const Main = () => {
    const modelUrl = '/models/greeting.glb'
    return (
        <Element name="main" className="h-screen w-full flex flex-col md:flex-row items-center justify-center">
            <div className="model-section flex-1 w-full md:w-1/2 h-full flex flex-col items-center justify-center order-1 md:order-1">
            <div className="scene-container w-full py-6" style={{ height: '50vh' }}>
          <Scene modelUrl={modelUrl} position={[0, 1, 3.2]}/>
        </div>
                <div className='flex flex-col text-center my-4 mt-12'>
                    <p className="text-xl md:text-2xl animate-fade-in-up text-creamy-white mb-4">Full Stack Developer | Passionate About Building Amazing Applications</p>
                </div>
            </div>
            <div className="text-main bg-light-blue z-5  w-full h-full flex flex-col items-center justify-center order-2 md:order-2">
                
                <div className="max-w-md p-8 text-center">
                    <h1 className="text-4xl md:text-5xl text-dark-blue font-bold mb-4">Welcome to My Portfolio</h1>

                    <p className=" text-lg md:text-xl text-dark-blue my-4 animate-fade-in-down">
                        Hello! I'm Maria, a passionate full stack developer with a relentless drive to create impactful and innovative web applications. Despite being early in my career, my dedication and determination mean I always give 1000% to every project I undertake.
                    </p>
                    <Link to='about' smooth={true} duration={500} className="mt-4 px-6 py-2 bg-orange text-creamy-white cursor-pointer rounded-full hover:bg-blue-700 animate-fade-in-up">View My Projects</Link>
                </div>
            </div>
        </Element>
    )
}


export default Main