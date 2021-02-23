# Weather-or-Not

# Project Overview

## Weather or Not

https://www.weatherapi.com/api-explorer.aspx

## Project Description

Weather or Not is a mobile that allows the user to receive the weather of the selected location.

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

- Allow for Weather API to determine weather of city by using the city name or zip code.
- Create a responsive design to allow the user to receive the weather in specified area up to 3 days, in addition to, the astro (sunrise, sunset, moonrise, moonset, and moon phase) for the current day.


#### PostMVP  

- Add second API (Add local sports or events if any)
- Update background to correspond with local weather.

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Feb 22-23| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|Feb 23| Project Approval | Incomplete
|Feb 23| HTML, Pseudcode | Incomplete
|Feb 24| Pseudocode / actual code | Incomplete
|Feb 25| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Feb 25| Initial Clickable Model  | Incomplete
|Feb 25| MVP | Incomplete
|Feb 26| CSS, finalization | Incomplete
|March 1| Presentations | Incomplete

## Priority Matrix

https://wireframe.cc/pro/pp/d98c9f9f1417159

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: 	|
| Working with API | H |7 hrs| 0hr| 0hr|
| CSS | M | 4 hrs | 0hrs | 0hrs |
| MVP | H | 5 hrs | 0hr | 0hr |
| HTML | H | 4hrs | 0hr | 0hr |
| Pseudocode | H | 5hrs | 0hr | 0hr |
| Try Handling | H | 4hrs | 0hr | 0hr |
| Testing | H | 4hrs | 0hr | 0hr |
| Total | H | 33hrs| 0hr | 0hr |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
