export const projects = [
  {
    type: "ML / Statistical Learning",
    title: "BRFSS Statistical Learning Dashboard",
    problem: "No systematic way to analyze how behavioral risk factors predict obesity rates across 14 years of CDC national survey data",
    outcome: "Full ML pipeline (regression, classification, clustering) across 110K+ records — deployed as interactive Streamlit dashboard",
    stack: ["Python", "scikit-learn", "Pandas", "Streamlit", "Plotly", "CDC BRFSS"],
    github: "https://github.com/chrisharry99us/brfss-statistical-learning",
    demo: "https://brfss-statistical-learning-chrisr.streamlit.app",
  },
  {
    type: "Bayesian Statistics",
    title: "Bayesian Hierarchical Modeling",
    problem: "Standard polling averages mask group-level variation in public opinion — separate and pooled models both fail in opposite ways",
    outcome: "Custom Gibbs sampler from scratch revealing posterior shrinkage across 5 demographic groups from 1,603 survey respondents",
    stack: ["Python", "R", "NumPy", "Plotly", "Streamlit", "MCMC"],
    github: "https://github.com/chrisharry99us/bayesian-hierarchical-modeling",
    demo: "https://bayesian-hierarchical-modeling.streamlit.app",
  },
  {
    type: "Time Series / Forecasting",
    title: "Time Series Analysis — SARIMA Modeling",
    problem: "Economic time series with complex seasonal patterns are routinely underfit by naive models, producing unreliable forecasts",
    outcome: "Fitted SARIMA(2,0,3)(1,1,0)[4] with full ACF/PACF diagnostics and live forecast intervals — live on Streamlit",
    stack: ["Python", "R", "statsmodels", "Streamlit", "Plotly", "SARIMA"],
    github: "https://github.com/chrisharry99us/time-series-analysis",
    demo: "https://chris-timeseries-mds.streamlit.app",
  },
];
