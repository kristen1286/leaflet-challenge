# leaflet-challenge
module 15 repo challenge


<p align="center">
<img src="Images/1-Logo.png" alt="visualization"  width="540" height="280">
</p>

---
## Table of Contents
- [Background](#background)
- [Data Sources](#data)
- [Findings and Conclusions](#findings)
- [Part 1: Create the Earthquake Visualization](#part-1)
- [Part 2: Gather and Plot More Data](#part-2)

---
## Background <a name="background"></a>

The United States Geological Survey, or USGS for short, is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.

The USGS is interested in building a new set of tools that will allow them to visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. In this challenge, you have been tasked with developing a way to visualize USGS data that will allow them to better educate the public and other government organizations (and hopefully secure more funding) on issues facing our planet.

---
## Data Sources <a name="data"></a>
The USGS provides earthquake data in a number of different formats, updated every 5 minutes. Visited the USGS GeoJSON FeedLinks to an external site. page and chose a dataset to visualize.
 1.  annual_home_sales.csv (From Texas A&M University Texas Real Estate Research Center)

---
## Findings and Conclusions <a name="findings"></a>
The following findings and conclusions from the analysis are as follows:

 1.  ### Findings 

---
## Part 1: Create the Earthquake Visualization <a name="part-1"></a>

  1. Import and visualize the data by doing the following:
    
   -  Using Leaflet, create a map that plots all the earthquakes from your dataset based on their longitude and latitude.
   -  Your data markers should reflect the magnitude of the earthquake by their size and the depth of the earthquake by color. Earthquakes with higher magnitudes should appear larger, and earthquakes with greater depth should appear darker in color.
   -  Hint: The depth of the earth can be found as the third coordinate for each earthquake.
   -  Include popups that provide additional information about the earthquake when its associated marker is clicked.
   -  Create a legend that will provide context for your map data.
   -  Your visualization should look something like the preceding map.

   ### Geo map
<p align="center">
<img src="Images/2-BasicMap.png" alt="visualization"  width="540" height="280">
</p>

---
## Part 2: Gather and Plot More Data  <a name="part-2"></a>
Plot a second dataset on your map to illustrate the relationship between tectonic plates and seismic activity. You will need to pull in this dataset and visualize it alongside your original data. Data on tectonic plates can be found at https://github.com/fraxen/tectonicplatesLinks to an external site.

   ### Geo map
<p align="center">
<img src="Images/5-Advanced.png" alt="visualization"  width="540" height="280">
</p>

---

