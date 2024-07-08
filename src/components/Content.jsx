import React from 'react';

const Content = ({ title, description, features, projects }) => {
    return (
      <div className="w-full text-dark-blue">
        <header className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">{title}</h2>
          {description && <p className="text-lg mb-4">{description}</p>}
        </header>
        {projects ? (
          projects.map((project, index) => (
            <div key={index} className="mb-8 w-full">
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <p className="text-lg mb-4">{project.description}</p>
              <div className="flex flex-wrap justify-around w-full ">
                {project.features && project.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="p-1 m-4 rounded-lg shadow-lg w-80">
                    {feature.boldText === 'Github' ? (
              <p className="text-lg underline">
                <a href={feature.normalText} target="_blank" rel="noopener noreferrer" className="underline text-bg-blue">
                  <strong>{feature.boldText}</strong>
                </a>
              </p>
            ) : (
              <>
                <p className="text-lg underline"><strong>{feature.boldText}</strong></p>
                <p>{feature.normalText}</p>
              </>
            )}
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-wrap justify-around w-full">
            {features && features.map((feature, index) => (
              <div key={index} className=" p-6 m-4 rounded-lg shadow-lg w-80">
                <p className="text-lg">
                  <a href={feature.normalText} target="_blank" rel="noopener noreferrer" className="underline text-bg-blue">
                    <strong>{feature.boldText}</strong>
                  </a>
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };
  
  export default Content;