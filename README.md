# Topaz-Project

# Project Overview

## Weather or Not

https://www.weatherapi.com/api-explorer.aspx

## Project Description

Weather or Not is an app who's go is to alert you about the weather. The goal would be to alert the user of the weather soon as they open the site. The goal is to prepare the user for conditions of their current or future location Weather or Not it is preferred.

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

[Upload images of your wireframes to an image hosting site or add them to an assets folder in your repo and link them here with a description of each specific wireframe.]

### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decide what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 

- Functionality is up to date.
- Allow a responsive design for interface to change with weather.
- Allow the user to have a different choice of days forecast. 


#### PostMVP  

- Add second API
- Add local sports or events if any.
- Provide suggestions of warmer or colder weather.

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Feb 22-23| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|Feb 23| Project Approval | Incomplete
|Feb 23| HTML, Pseudcode | Incomplete
|Feb 24| Pseudocode / actual code | Incomplete
|Feb 25| Initial Clickable Model  | Incomplete
|Feb 25| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Feb 25-26| MVP | Incomplete
|Feb 26| CSS | Incomplete
|March 1| Presentations | Incomplete

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matrix.  Link this image in a similar manner to your wireframes

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: 	|
| Adding Form | H | 5hrs| 3.5hrs|| -hrs |
| Working with API | H |5hrs| 2.5hrs| -hrs |
| CSS | M | 3hrs | 0hrs | 0hrs |
| MVP | H | 3hrs | 0hr | 0hr |
| HTML | H | 3hrs | 0hr | 0hr |
| Total | H | 6hrs| 5hrs | -hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
