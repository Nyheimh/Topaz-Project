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
|Feb 23| Project Approval | Complete
|Feb 23| HTML, Pseudcode, start CSS | Complete
|Feb 24| Core Application Structure (HTML, CSS, etc.) | Complete
|Feb 25| MVP | Complete
|Feb 26| CSS, finalization | Complete
|March 1| Presentations | Incomplete

## Priority Matrix

https://wireframe.cc/pro/pp/d98c9f9f1417159

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: 	|
| Pseudocode | H | 2hrs | 1hr 30m | 1hr 30m |
| HTML | H | 3 hrs | 2hr 30m | 2hr 30m |
| Initial API call | H | 3 hrs| 4hrs| 4hrs|
| Render API to page | H | 4 hrs | 2hr 30m | 2hr 30m |
| Search button | M | 4 hrs | 4hrs | 4hrs |
| Input section | M | 3.5 hrs | 3hrs | 3hrs |
| Initial CSS | M | 4 hrs | 5hrs | 5hrs |
| Complete MVP/Testing | H | 4hrs | 4hrs | 4hrs |
| Try Handling | H | 4hrs | 3hrs | 3hrs |
| Refine CSS/Responsive Design | M | 4hrs | 3hrs | 3hrs |
| Total | H | 35.5hrs| 29.5hr | 29.5hr |

## Code Snippet

.current {
  justify-content: center;
  text-align: center;
  width: 400px;
  height: 500px;
  background-color: black;
  opacity: 0.6;
  color: white;
}

.astronomy {
  justify-content: center;
  text-align: center;
  width: 400px;
  height: 500px;
  background-color: black;
  opacity: 0.6;
  color: white;
}

## Change Log

This CSS code is the code I am most proud of because I had so many diffculties attempting to line up my boxes next to one another. Once I completed, I was able to make the styling on them look so much better!
