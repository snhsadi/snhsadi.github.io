---
title: "Sylhet Flood Mapping & Analysis (2024)"
description: "Automated spatial analysis of the 2024 Sylhet regional flooding using multi-sensor geospatial data and Google Earth Engine."
image: "https://github.com/snhsadi/snhsadi.github.io/blob/main/docs/assets/images/sylhet-flood.png"
---

## Project Overview
This project provides a rapid-response mapping and quantitative analysis of the 2024 floods in the Sylhet Division, Bangladesh. Using cloud-based geospatial processing in Google Earth Engine (GEE), the application dynamically calculates total inundated areas and flood percentages at the district level. 

## Methodology
The core analytical engine relies on Change Detection using synthetic-aperture radar (SAR) data, allowing for weather-independent flood mapping.

* **Data Acquisition:** Pre- and post-flood imagery was sourced from Copernicus Sentinel-1 (SAR GRD). Baseline permanent waterbodies were established using the JRC Global Surface Water dataset (v1.2).
* **Preprocessing:** A Refined Lee speckle filter was applied to natural backscatter units to reduce noise while preserving structural edges, prior to logarithmic conversion.
* **Extraction:** Flood extents were extracted by analyzing the backscatter coefficient difference between pre-flood (May 2024) and peak-flood (June 2024) composites. 
* **Terrain & Noise Masking:** To eliminate false positives caused by radar shadow, steep terrain (>5° slope) was masked using the WWF HydroSHEDS Digital Elevation Model. Isolated pixels were removed using a connected-pixel-count threshold to ensure spatial continuity.

## Results
The analysis provides distinct, quantifiable metrics for the region. For example, in the Habiganj district, the algorithm successfully mapped:
* **Total District Area:** 2,598.082 sq. KM
* **Total Flooded Area:** 909.843 sq. KM
* **Land Flooded Percentage:** 38.08%

## Technologies Used
* **Google Earth Engine (GEE):** JavaScript API for heavy data processing and UI generation.
* **Remote Sensing Data:** Sentinel-1 (SAR), Sentinel-2 (Optical), JRC Global Surface Water, HydroSHEDS DEM. 
* **Algorithms:** Refined Lee Filtering, Change Detection, Dynamic Terrain Masking.

## Links
* [View Interactive GEE App](https://snhsadi.projects.earthengine.app/view/sylhet-flood-2024)
