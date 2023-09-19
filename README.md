## Project Documentation

# WanderWise

- Gianni Thi
- Ikran Haji
- Jason Lago
- Jeny Kim
- Paul Baumann

WanderWise - Welcome to WonderWise, the app that revolutionizes your travel experience. Powered by AI, we provide personalized travel suggestions, prioritize your safety, offer culinary delights, recommend hobbies, and unlock global adventures.

## Design

- [API design](APIdesign.MD)
- [Data model](Datamodel.MD)
- [GHI](GHI.MD)
- [Intergrations](Integrations.MD)

## Functionality

- Visitors to our website can create a profile
- Once a profile is created users can input interests and a location,
  and recieve tailored recommendations based on those prerequisites.
- Recommendations can be added/ saved to their user profiles to look at, at a later date or deleted.
- On a users profile they can click on each individual recommendation to view the
  details and delete there as well.



## Prerequisites
Docker: You must have Docker installed on your system. You can download Docker from Docker's official website

Need to get four API Keys
- OPEN WEATHER API- Go to this website https://openweathermap.org/api/geocoding-api make an account and recieve an API key
- PEXELS API- Go to this website https://www.pexels.com/api/ make an account and recieve an API key
-OPENAI API- follow the instructions under intergrations above
-SIGNING KEY- use this command on your terminal openssl rand -hex 32 to generate a signing key

## Getting Started
Clone this repository to your local machine
- git clone https://github.com/ikranhaji/Wanderwise.git

Navigate to the project directory
- cd wanderwise

Need to create a .env file. Add the API keys you received to your .env file. Each can be structured for example SIGNING_KEY=7dce5c11147011ef69c513b3d4dde94a93d

Run this Docker Compose Command to set up and run the project
- docker compose up

Application should now be running and can be accessed on your web browser at http://localhost:3000/
