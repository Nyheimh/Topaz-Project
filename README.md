# Weather-or-Not

# Project Overview

## Weather or Not

https://www.weatherapi.com/api-explorer.aspx

## Project Description

Weather or Not is a mobile app that allows the user to receive the weather of the selected location whether current conditions or up to three days in advance.

## API and Data Sample
```
{
    "location": {
        "name": "Atwater",
        "region": "California",
        "country": "United States of America",
        "lat": 37.35,
        "lon": -120.61,
        "tz_id": "America/Los_Angeles",
        "localtime_epoch": 1614029983,
        "localtime": "2021-02-22 13:39"
    },
    "current": {
        "last_updated": "2021-02-22 13:30",
        "temp_f": 68.0,
        "is_day": 1,
        "condition": {
            "text": "Sunny",
            "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
            "code": 1000
        },
        "wind_mph": 0.0,
        "uv": 4.0
    },
    "forecast": {
        "forecastday": [
            {
                "date": "2021-02-22",
                "day": {
                    "maxtemp_f": 64.4,
                    "mintemp_f": 43.9,
                    "maxwind_mph": 5.1,
                    "daily_chance_of_rain": "0",
                    "daily_chance_of_snow": "0",
                    "condition": {
                        "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png"
                    }
                },
                "astro": {
                    "sunrise": "06:43 AM",
                    "sunset": "05:50 PM",
                    "moonrise": "01:07 PM",
                    "moonset": "03:32 AM",
                    "moon_phase": "Full Moon",
                    "moon_illumination": "76"
                },
                "hour": [
                    {
                        "time": "2021-02-22 00:00",
                        "temp_c": 8.1,
                        "temp_f": 46.6,
                        "condition": {
                            "text": "Partly cloudy"
                        },
                        "feelslike_f": 46.0
                    },

```
## Wireframes

https://wireframe.cc/pro/pp/cb9ad0cd3417130

### MVP/PostMVP

#### MVP 

- Allow for Weather API to render weather of city by using the city name or zip code.
- Create a responsive design for two breakpoints. 
- Allow the user to receive the weather in specified area up to 3 days, and the astro (sunrise, sunset, moonrise, moonset, and moon phase) for the current day.


#### PostMVP  

- Update background to correspond with local weather.
- Add second API (Add local sports or events if any).
- Saved locations. 

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Feb 22-23| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|Feb 23| Project Approval | Incomplete
|Feb 23| HTML, Pseudcode, start CSS | Incomplete
|Feb 24| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Feb 25| MVP | Incomplete
|Feb 26| CSS, finalization | Incomplete
|March 1| Presentations | Incomplete

## Priority Matrix

https://wireframe.cc/pro/pp/d98c9f9f1417159

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: 	|
| Pseudocode | H | 2 hrs | 0hr | 0hr |
| HTML | H | 3 hrs | 0hr | 0hr |
| Initial API call | H | 3 hrs| 0hr| 0hr|
| Render API to page | H | 4 hrs | 0hr | 0hr |
| Search button | M | 4 hrs | 0hrs | 0hrs |
| Input section | M | 3.5 hrs | 0hrs | 0hrs |
| Initial CSS | M | 4 hrs | 0hrs | 0hrs |
| Complete MVP/Testing | H | 4 hrs | 0hr | 0hr |
| Try Handling | H | 4hrs | 0hr | 0hr |
| Refine CSS/Responsive Design | M | 4 hrs | 0hrs | 0hrs |
| Total | H | 35.5hrs| 0hr | 0hr |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
