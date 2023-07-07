# leaflet-challenge
module 15 repo challenge


<p align="center">
<img src="images/austin-texas-skyline.jpg" alt="Austin skyline" width="500" height="300">
</p>

---
## Table of Contents
- [Background](#background)
- [Data Sources](#data)
- [Findings and Conclusions](#findings)
- [Part 1: Populate Database in pgAdmin](#part-1)
- [Part 2: Python Flask API ](#part-2)
- [Part 3: Dashboard Page](#part-3)


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

 1.  ### Change in housing prices over time compared to monthly inventory  
<p align="center">
<img src="images/price_vs_lnvent_line.png" alt="visualization" >
</p>

 2. ### Total listings vs sales over time
<p align="center">
<img src="images/sales_vs_list_line.png" alt="visualization" >
</p>
        
 3. ### Monthly Inventory vs sales over time
<p align="center">
<img src="images/sales_vs_lnvent_line.png" alt="visualization" >
</p>

 4. ### Bubble chart analysis 
<p align="center">
<img src="images/price_dis_chart.png" alt="buble chart">
</p>

 4.  ### Geo map
<p align="center">
<img src="images/austin_map.png" alt="visualization"  width="640" height="480">
</p>
 
---
## Part 1: Create the Earthquake Visualization <a name="part-1"></a>

  1. annual_home_sales.csv column info:
    
    -  lines of data: 33
    -  Data collected from 1990 to 2022

  2. monthly_home_sales.csv column info:
     
    -  lines of data: 400
    -  Data collected from Jan-1990 to Apr-2022

  3. price_distribution.csv column info:
     
    -  lines of data: 11
    -  Data collected from 2011 to 2022 with the following distrubution
      -  "$0 - $69,999"
      -  "$70,000 - $99,999"
      -  "$100,000 - $149,999"
      -  "$150,000 - $199,999"
      -  "$200,000 - $249,999"
      -  "$250,000 - $299,999"
      -  "$300,000 - $399,999"
      -  "$400,000 - $499,999"
      -  "$500,000 - $749,999"
      -  "$750,000 - $999,999"
      -  "$1,000,000 +"

  4. austinHousingData.csv column info:

    -  lines of data: 15,171
    -  data was collected from 2021
      - This data set was important to better illustrate the houses on the market in 2021 in the Austin Round-rock area
---
## Part 2: Python Flask API  <a name="part-2"></a>
The python Flask api was used to jsonify the databases:

 1.  annual_home_sales.csv
<p align="center">
<img src="images/annual_sales_json.png" alt="visualization of jsonified data" width="350" height="200">
</p>

 2.  monthly_home_sales.csv
<p align="center">
<img src="images/monthly_sales_json.png" alt="visualization of jsonified data" width="350" height="200">
</p>

 3.  price_distribution.csv
<p align="center">
<img src="images/price_dist_json.png" alt="visualization of jsonified data" width="350" height="200">
</p>

 4.  austinHousingData.csv
<p align="center">
<img src="images/austin_homes_json.png" alt="visualization of jsonified data" width="350" height="200">
</p>

---
## Part 3: Dashboard Page <a name="part-3"></a>
Backend dashboard showcases data visualizations that run without error.
1. A JavaScript library not shown in class used in this project.
      -  chart.js
2. dash board utilized Leaflet or Plotly chart built from data gathered
    
<p align="center">
<img src="images/dashboard.png" alt="dashboard page" >
</p>

---
