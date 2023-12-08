import React from 'react';

const DescriptionD = () => {
  return (
    <div id="des_data">
        <h3> DESCRIPTION OF THE DATASET</h3>
            <p>The given dataset is made up of arrest records, each of which 
                is uniquely recognized by an ARREST_KEY. It also includes 
                a variety of attributes pertaining to each arrest. The date of the 
                arrest is indicated by the ARREST_DATE, while the offense 
                description and penal code are specified by the PD_DESC and 
                PD_CD, respectively. KY_CD and OFNS_DESC provide 
                additional classification and explanation of the transgression. 
                Legal codes and the associated legal category of the offense 
                (such as felony) are provided by LAW_CODE and 
                LAW_CAT_CD. ARREST_PRECINCT (precinct) and 
                ARREST_BORO (borough) are two specifics regarding the 
                arrest location. The jurisdiction that is involved in the arrest is 
                indicated by JURISDICTION_CODE. The offender's 
                PERP_SEX, PERP_RACE, and AGE_GROUP demographic 
                data are included. The terms Latitude, Longitude, 
                X_COORD_CD, and Y_COORD_CD are used to denote 
                geographic coordinates. 
            </p>
            <p>
                Furthermore, for every arrest record, a New Georeferenced 
                Column displays the georeferenced point that combines 
                latitude and longitude. This dataset is crucial for helping with 
                crime analysis and law enforcement activities by illuminating 
                trends and demographics related to arrests. 
            </p>
            <p>1. ARREST_KEY: A unique identifier for each arrest record. </p> 
            <p>2. ARREST_DATE: The date when the arrest occurred.</p>  
            <p>3. PD_CD: The penal code associated with the offense.</p>  
            <p>4. PD_DESC: Description of the offense corresponding  to the penal code. </p> 
            <p>5. KY_CD: The internal classification code for the offense.</p>  
            <p>6. OFNS_DESC: Description of the offense category.</p>  
            <p>7. LAW_CODE: The legal code associated with the offense. </p> 
            <p>8. LAW_CAT_CD: The legal category of the offense (e.g., felony). </p> 
            <p>9. ARREST_BORO : The borough where the arrest occurred. </p>
            <p>10. ARREST_PRECINCT: The precinct where the arrest occurred. </p>
            <p>11. JURISDICTION_CODE: The jurisdiction code related to the arrest. </p>
            <p>12. AGE_GROUP: The age group of the perpetrator.</p>
            <p>13. PERP_SEX: The gender of the perpetrator. </p>
            <p>14. PERP_RACE: The race of the perpetrator.  </p>
            <p>15. X_COORD_CD: The X-coordinate (geospatial coordinate) associated with the arrest location</p>
            <p>16. Y_COORD_CD: The Y-coordinate (geospatial coordinate) associated with the arrest location. </p>
            <p>17. Latitude: Latitude of the arrest location  </p>
            <p>18. Longitude: Longitude of the arrest location.</p>
            <p>19. New Georeferenced Column: A georeferenced point that shows where the arrest happened by combining longitude and latitude.</p>
    </div>
  );
};

export default DescriptionD;
