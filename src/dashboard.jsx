import React, { useState } from 'react';
import './assets/sidebar.css'; 
import References from './ref';
import Future from './fut';
import Limitations from './limi';
import Scope from './scope';
import Proposed from './pro';
import Evaluation from './eval';
import DescriptionD from './des_data';
import Data from './data';
import Res from './res';
import Mot from './mot';
import Imp from './imp';
import Description from './des';
import Literature from './lit';
import Introduction from './intro';
import Abstract from './abs';
import Priliminary from './prilim';

const Dashboard = () => {
    const [selectedComponent, setSelectedComponent] = useState(null);
    const handleComponentChange = (componentName) => {
        setSelectedComponent(componentName);
      };
    const renderSelectedComponent = () => {
        switch (selectedComponent) {
            case 'References':
                return <References />;
            case 'Future Analysis':
                return <Future />;
            case 'Project Scope':
                return <Scope />;
            case 'Limitations':
                return <Limitations />; 
            case 'Proposed Approach':
                return <Proposed />; 
            case 'Proposed method for Evaluation':
                return <Evaluation />; 
            case 'Description of the Dataset':
                return <DescriptionD />; 
            case 'Data Source':
                return <Data />
            case 'Research Questions':
                return <Res />
            case 'Motivation':
                return <Mot />
            case 'Importance':
                return <Imp />
            case 'Description of Problem':
                return <Description/>
            case 'Literature Review':
                return <Literature />
            case 'Introduction':
                return <Introduction />
            case 'Abstract':
                return <Abstract />
            case 'Priliminary Analysis':
                return <Priliminary />
          default:
            return null;
        }
      };

  return (
    <div className="dashboard-container">
        <div className="sidebar">  
       <h3>ANALYSING NEW YORK CITY POLICE 
        DEPARTMENT (NYPD) ARREST DATA FOR 
        CRIME INSIGHTS AND POLICING STRATEGIES</h3>
        <div className="sidebar-links">
          <ul>
            <li>
              <a onClick={() => handleComponentChange('Abstract')} href="#abs">Abstract</a>
            </li>
            <li>
              <a onClick={() => handleComponentChange('Introduction')} href="#intro">Introduction</a>
            </li>
            <li>
              <a onClick={() => handleComponentChange('Literature Review')} href="#lit">Literature Review</a>
            </li>
            <li>
              <a onClick={() => handleComponentChange('Description of Problem')} href="#des">Description of a Problem</a>
            </li>
            <li>
              <a onClick={() => handleComponentChange('Importance')} href="#imp">Importance</a>
            </li>
            <li>
              <a onClick={() => handleComponentChange('Motivation')} href="#mot">Motivation</a>
            </li>
            <li>
              <a onClick={() => handleComponentChange('Research Questions')} href="#res">Research Questions</a>
            </li>
            <li>
              <a onClick={() => handleComponentChange('Data Source')} href="#data">Data Source</a>
            </li>
            <li>
              <a onClick={() => handleComponentChange('Description of the Dataset')} href="#des_data">Description of the Dataset</a>
            </li>
            <li>
              <a onClick={() => handleComponentChange('Proposed Approach')} href="#pro">Proposed Approach</a>
            </li>
            <li>
              <a onClick={() => handleComponentChange('Proposed method for Evaluation')} href="#eval">Proposed method for Evaluation</a>
            </li>
            <li>
              <a onClick={() => handleComponentChange('Priliminary Analysis')} href="#prilim">Priliminary Analysis</a>
            </li>
            <li>
              <a onClick={() => handleComponentChange('Limitations')} href="#limi">Limitations</a>
            </li>
            <li>
              <a onClick={() => handleComponentChange('Project Scope')} href="#scope">Project Scope</a>
            </li>
            <li>
              <a onClick={() => handleComponentChange('Future Analysis')} href="#fut">Future Analysis</a>
            </li>
            <li>
              <a onClick={() => handleComponentChange('References')} href="#ref">References</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="main-content" style={{ width: '75%', margin: '0 auto' }}>
    
        {renderSelectedComponent()}
        {/* Other content specific to the Dashboard */}
      </div>
    </div>
    
  );
};

export default Dashboard;
