import React from 'react'
import { Element } from 'react-scroll'
import { programmingLanguages, libraries, frameworks } from '../data'
import Scene from './Scene'
import SvgIconList from '../elements/svg/svg_list'
import Bubble from '../elements/Bubble'
import Framework from '../elements/Framework'
import Library from '../elements/svg/Library'
import Languages from '../elements/svg/Languages'
import Line from '../elements/svg/Line'

const Knowledge = () =>{
    const modelUrl = '/models/thinking.glb'
    const renderList = (items) => (
        <ul className="list-none">
          {items.map((item, index) => (
            <li key={index} className="mb-2 flex items-center">
              <div className="item-icon">
                <SvgIconList/>
              </div>
              <span className="item-text text-orange">{item}</span>
            </li>
          ))}
        </ul>
      );

    return(
<Element name="knowledge" className="knowledge-section relative w-full bg-bright-yellow py-12 grid grid-cols-1 md:grid-cols-3 items-start justify-center">
  <div className="md:absolute md:top-1/2 transform md:-translate-y-1/2 w-full order-1 flex justify-center md:col-span-3 z-20">
    <div className="scene-container z-20" style={{ height: '50vh' }}>
      <Scene modelUrl={modelUrl} position={[0, 1, 3.2]} />
    </div>
  </div>
  
  <div className="flex flex-col z-30 items-center md:items-end justify-center order-2 md:order-none md:col-span-1">
    <Bubble  direction="right">
      <Line direction="right" />
      <Line direction="bottom" straight={true}  className="line-straight" />
      <div className="inline-flex items-center">
        <Library />
        <h2 className="text-2xl font-bold p-4 text-orange">Libraries</h2>
      </div>
      {renderList(libraries)}
    </Bubble>
  </div>
  <div className="flex flex-col items-center z-30 justify-center md:col-span-1 order-3 md:order-none md:-mt-16">
    <Bubble direction="bottom">
      <Line direction="bottom" />
      <Line direction="bottom" straight={true}  className="line-straight" />
      <div className="inline-flex items-center">
        <Framework />
        <h2 className="text-2xl font-bold p-4 text-orange">Frameworks</h2>
      </div>
      {renderList(frameworks)}
    </Bubble>
  </div>

  <div className="flex flex-col z-30 items-center md:mt-56 md:items-start justify-center order-4 md:order-none md:col-span-1">
    <Bubble direction="left">
      <Line direction="left"/>
      <div className="inline-flex items-center">
        <Languages />
        <h2 className="text-2xl font-bold p-4 text-orange">Languages</h2>
      </div>
      {renderList(programmingLanguages)}
    </Bubble>
  </div>

  <div className="absolute z-0 bottom-0 left-0 w-full h-full bg-navy-blue transform -skew-y-6 origin-bottom-right"></div>
</Element>
    )
}


export default Knowledge