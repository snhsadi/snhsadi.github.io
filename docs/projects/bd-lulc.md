# GEE APP: 10-class Interactive LULC-Explorer for Bangladesh (2024)

![Project overview image](../assets/images/bd-lulc.png)

## Overview

Enabled visualization and download of 10-class LULC raster tiles (max 32 MB) for 8 Divisions to 5,160 Thanas in Bangladesh along with 2 infographics, utilizing the "ESA World Cover - 2020" database.

**Study Area:** Bangladesh (8 Divisions, 5,160 Thanas)
**Data:** ESA World Cover - 2020 Database
**Status:** Completed (September 2024)

---

## Methods & Tools

**Features and Processing Steps**

1. Integrated the ESA World Cover (2020) 10-class Land Use / Land Cover dataset via the Google Earth Engine data catalog.
2. Filtered the dataset to the boundary of Bangladesh.
3. Implemented a dynamic UI in GEE to allow users to filter down to 8 Divisions and 5,160 Thanas.
4. Calculated zonal statistics to generate two interactive infographics representing LULC area distribution.
5. Enabled a direct export feature allowing users to download raster tiles up to 32 MB in size.

**Tools Used**

- **Google Earth Engine (GEE)**: Core platform for spatial data processing and application hosting.
- **JavaScript**: Scripting language used within the GEE Code Editor.
- **ESA World Cover**: High-resolution (10m) global land cover product used as the base dataset.

---

## Links

[View Application 🔗](https://snh-sadi.projects.earthengine.app/view/bd-lulc-20){ .md-button }
