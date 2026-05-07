---
title: "Automated Intertidal Mudflat Mapping: MSIC-Otsu & MTDI"
description: "A streamlined, cloud-based methodology for dynamic tidal flat extraction in the Meghna Estuary using Google Earth Engine."
image: "/assets/images/mudflat95.png"
---

## Project Overview
Mapping intertidal mudflats is notoriously difficult due to constant tidal fluctuations and high water turbidity. This project introduces an automated, highly scalable pipeline to dynamically extract tidal flat extents in the Meghna Estuary (Dry Season 2024-2025). By iterating through specific temporal percentiles and applying dynamic thresholding, the algorithm isolates mudflats without requiring hard-coded, static index values.

## Methodology
The workflow leverages the Maximum Spectral Index Composite (MSIC) approach combined with the novel Mudflat-Turbid Difference Index (MTDI).

* **Data Acquisition & Preprocessing:** The analysis utilizes Sentinel-2 Harmonized Surface Reflectance imagery. To handle the complex coastal atmosphere, the Google Cloud Score+ (CS+) machine learning dataset was linked to the collection, filtering out pixels with a clear-sky probability below 50%.
* **Maximal Water Extraction (Step A):** A quality mosaic based on the Modified Normalized Difference Water Index (mNDWI) was generated. An optimized, iterative Otsu thresholding algorithm was applied to the region's histogram to dynamically establish the absolute maximum water extent boundary.
* **Percentile Iteration & MTDI (Step B):** Within the masked water boundary, the script calculates the MTDI. To account for varying tidal stages, the script automatically iterates through upper percentiles (90th to 100th). 
* **Dynamic Thresholding:** For each percentile iteration, the custom Otsu algorithm calculates a specific threshold to separate exposed mudflats from turbid water. 
* **Post-Processing:** A circular focal mode filter (1.5-pixel radius) was applied to remove isolated sensor noise and smooth physical boundaries.

## Automated Validation Outputs
To ensure mathematical transparency and reproducible research, the pipeline does not just export the final spatial geometries. It automatically generates and exports the specific histogram data (as CSVs) for every percentile iteration, proving the bimodality and accuracy of the dynamic Otsu thresholds.

## Technologies Used
* **Google Earth Engine (GEE):** JavaScript API for massive spatial data reduction and parallel task execution.
* **Datasets:** Copernicus Sentinel-2 (SR), Google Cloud Score+ V1.
* **Algorithms:** Optimized Otsu Thresholding, Maximum Spectral Index Compositing (MSIC), Focal Mode Filtering.

## Links
* [View App](#) *(https://snhsadi.projects.earthengine.app/view/intertidal-mudflats-eastern-meghna-estuary-2024-25)*
