import React from 'react';
import image1 from './assets/i1.jpg';
import image2 from './assets/i2.jpg';
import image3 from './assets/i3.jpg';
import image4 from './assets/i4.jpg';

const Priliminary = () => {
  return (
    <div id="prilim">
        <h3>PRILIMINARY ANALYSIS</h3>
        <p>The NYPD Arrest data analysis can make us understand the 
            crime trends and take proactive measures to determine and 
            prevent criminal activity, which will eventually improve public 
            safety. The following methodology has been employed for the 
            analysis of the NYPD Arrest Data:
        </p>
        <h4>1) Data Collection and Cleaning:</h4>
        <p>
            The NYPD Arrest Data (Year-to-Date) dataset was 
            successfully collected and subsequently put through a 
            thorough examination process, that involved a detailed 
            analysis of the entire dataset. During the course of this 
            analysis, several instances of missing and null values 
            were identified within the dataset. 
        </p>
        <p>
             Python was used to carry out the data cleaning process 
            to keep the data's dependability and integrity. The 
            impacted rows were eliminated where there were only 
            a small number of missing values, and they did not 
            significantly affect the analysis. 
        </p> 
        <p>
            In this data cleaning and preprocessing effort, we 
            transformed an initial dataset comprising 112,507 rows 
            into a refined dataset containing 3,104 entries. The data 
            cleaning process involved addressing critical issues 
            related to missing values and outliers to ensure that the 
            dataset was in a suitable state for analysis. Missing 
            data, when present, can significantly impact the 
            reliability of any analysis. To tackle this issue, we 
            employed various techniques such as imputation and 
            removal of rows with missing values, where 
            appropriate. Furthermore, outliers, which can skew 
            statistical analyses and visualizations, were identified 
            and either removed or adjusted as necessary to enhance 
            the dataset's overall quality. By diligently executing 
            these data cleaning and preprocessing steps, we have 
            successfully transformed the initial dataset into a more 
            manageable and reliable dataset, ready for in-depth 
            analysis and meaningful insights. This rigorous data 
            preparation is essential for ensuring the accuracy and 
            credibility of our subsequent research and findings.
        </p>
        <h4>2) Exploratory Data Analysis and Visualization:</h4> 
        <h5>i. Which age group has committed more crimes? </h5> 
        <p>We created a thorough and insightful visualization by utilizing 
            R's ggplot2 function. The plot successfully depicted the 
            predominant age groups involved in a majority of criminal 
            activities, providing a clear visual representation of the age 
            groups associated with higher crime rates. 
        </p> 
        <img src={image1} alt="Figure 1" style={{display:'block',margin: '0 auto'}}/>
        <h5>Insights: </h5>
        <p>As a noteworthy aspect of our research, we used the longitude 
            and latitude coordinates found in the dataset to visualize the 
            geographic information. We developed visualizations to 
            identify regions on a map with higher crime rates using 
            geospatial frameworks in Python. To create a map display of 
            the dataset's longitude and latitude information, we used the 
            Python module Folium. With the help of this visualization tool, 
            we were able to pinpoint geographical areas with higher crime 
            rates, giving our project's goals a valuable perspective.
        </p> 
        <p> Our project's deeper research and more insights into the 
            mechanisms behind these patterns will be built on this basic 
            analysis and the mapping of crime distribution. </p>
        <p> Below is an example of the map view to get a detailed 
            understanding about the map and the details of the crimes. 
            Please investigate the pdf document attached in the assignment 
            for navigating through the map and better view.</p>
        <h5>ii. Geospatial Visualization of Areas with more sex crimes :  </h5> 
        <p>As a noteworthy aspect of our research, we used the longitude 
            and latitude coordinates found in the dataset to visualize the 
            geographic information. We developed visualizations to identify 
            regions on a map with higher crime rates using geospatial 
            frameworks in Python. To create a map display of the dataset's 
            longitude and latitude information, we used the Python module 
            Folium. With the help of this visualization tool, we were able to 
            pinpoint geographical areas with higher crime rates, giving our 
            project's goals a valuable perspective. Our project's deeper 
            research and more insights into the mechanisms behind these 
            patterns will be built on this basic analysis and the mapping of 
            crime distribution. </p> 
        <p>Below is an example of the map view to get a detailed 
            understanding about the map and the details of the crimes. 
            Please look into the pdf document attached in the assignment for 
            navigating through the map and better view. </p> 
        <img src={image2} alt="Figure 2" style={{display:'block',margin: '0 auto'}}/>
        <h5>Insights:</h5>
        <p>Insights: 
            The map identifies regions with larger concentrations of 
            criminal activity, which can help law enforcement better use 
            their resources to combat crime in those areas. Local 
            governments and politicians can better customize crime 
            prevention initiatives to match the problems faced in each area 
            by keeping track of how crimes are distributed around the 
            boroughs. There may be a higher requirement for security and 
            enforcement at and around transportation hubs like train stations 
            and bus terminals because crime tends to cluster there.
        </p>
        <h5>iii.Are certain crimes more common during specific seasons or times of the day? </h5>
        <img src={image3} alt="Figure 3" style={{display:'block',margin: '0 auto'}}/>
        <p>The line chart illustrates distinct patterns in the occurrence of 
            crimes throughout the year, with May emerging as the peak 
            month, recording over 20,000 arrests, possibly influenced by 
            factors like warmer weather and increased social activities. 
            August follows closely, surpassing 19,500 arrests, indicative of 
            a sustained trend of heightened criminal activities during the 
            summer months. In contrast, February exhibits the lowest crime 
            rates, possibly due to colder weather and decreased outdoor 
            interactions. These observations highlight potential seasonality 
            in crime, though drawing definitive conclusions would 
            necessitate a more comprehensive analysis, considering 
            additional factors such as socioeconomic conditions and local 
            events. </p>
        <h5>iv.Which area has more sex crimes? </h5>
        <img src={image4} alt="Figure 4" style={{display:'block',margin: '0 auto'}}/>
        <p>
        The scatter plot analysis indicates a notable spatial variation in 
        sex crime occurrences, with the Bronx (B) and Manhattan (M) 
        areas displaying a higher concentration of such incidents, 
        characterized by a shared location at a latitude of 40.87 and a 
        longitude of -73.9. This clustering of sex crimes in these 
        boroughs might be influenced by various factors, including 
        population density, socio-economic conditions, and the presence 
        of certain establishments or environments that may contribute to 
        a higher risk. Conversely, Staten Island (S) emerges as the 
        borough with the least recorded instances of sex crimes. The 
        observed disparities underscore the importance of understanding 
        the localized factors contributing to crime patterns and 
        necessitate further investigation into the socio-demographic and 
        environmental dynamics that may influence the prevalence of 
        sex crimes in these specific areas.
        </p>
           
    </div>
  );
};

export default Priliminary;
