import React from 'react';

const Limitations = () => {
  return (
    <div id="limi">
         <h3> LIMITATIONS</h3>
            <p>Data Quality and Completeness: Incomplete or inconsistent 
                reporting of crimes may produce biased results; the dataset may 
                contain missing or erroneous information that could impair the 
                effectiveness of machine learning models.
            </p>
            <p>Representativeness: Due to reporting and enforcement biases, 
                the dataset only contains recorded arrests; unreported crimes 
                are excluded, which may introduce bias. As a result, 
                demographic data may not accurately reflect the community.
            </p> 
            <p> Temporal Dynamics: Crime trends are subject to change over 
                time, and the dataset might not take seasonality or current 
                developments into account. It might also not consider outside 
                influences like changes in policy. 
            </p> 
            <p>Geospatial Resolution: Limited geographic information may 
                overlook differences within smaller areas; precinct-level 
                geographic coordinates may not be fine enough for accurate 
                hotspot detection.
            </p> 
            <p>Data Imbalance: Unbalances in the distribution of crime types 
                or locations may influence the evaluation and training of 
                machine learning models. 
            </p> 
            <p>Legal and Ethical Considerations: It is important to ensure that 
                analytical results are used ethically and to prevent biases in law 
                enforcement activities because sensitive information may give 
                rise to privacy concerns. 
            </p> 
            <p>Causation vs. Correlation: Additional context and domain 
                expertise are necessary to comprehend the causal reasons 
                underlying crime trends. Correlations in the data do not suggest 
                causation.
            </p>
            <p>Community Engagement: If the community isn't included, 
                methods may be developed that don't specifically meet its wants 
                and concerns. 
            </p> 
            <p>Interpretability of the Model: It might be difficult to explain 
                predictions in complex machine learning models if they are not 
                interpretable. 
            </p> 
            <p>Resource Allocation and Deployment: It is important to 
                exercise caution when implementing predictive models for law 
                enforcement resource allocation to prevent unintended 
                outcomes or the reinforcement of biases.
            </p>
    </div>
  );
};

export default Limitations;
