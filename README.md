## About PlantSim
PlantSim is a simple front end web app (html + plain JS) that "simulates" plant growth. User can control 
how much light, water, and fertilizer to use each day. Goal is to get plant to grow to 10".

## Environment and Controls
Depending upon the selected plant, the plant will react to the environment differently.

Here are the rules (not totally based on real world behaviors ;-)
    Each 'day', the moisture automatically decreases by 5. If moisture is over 75, pH will decrease by 0.1.
    Otherwise, pH will increase by 0.08.

User control adjustments:
* the light value just becomes the new light level.
* water: selecting low water adds 2.5, medium water adds 5 (so break even), high water adds 10.
* fertilizer and pH: peat reduces pH -0.25.  lime increases pH 0.25

## How the Generic Plant Grows based on Environment values
(this is a little bit of a strange behaving plant ;-)

* For each step/submit, plant height may change -0.5 to 1. 
* Growth is based on the combined values for water, pH, and light. Each factor has equal weight.
* Values are rated as follows:
  * Moisture: Best Range is 50-60, Good is 40-50 or 60-80, OK is 30-40 or 80-90, otherwise poor.
  * Light: Best Range is 70-100, Good is 40-70, OK is 25-40.  Below 25 is poor.
  * pH: Best is 5.9-6.1, Good is 5.5-5.9 or 6.1-6.2, OK is 5.2-5.5 or 6.2-6.8.  otherwise poor.

## How the Tomato Plant Grows based on Environment values
(this tomato likes plenty of water and full sun)

* For each step/submit, plant height may change -0.5 to 1. 
* Growth is based on the combined values for water, pH, and light. Each factor has equal weight.
* Values are rated as follows:
  * Moisture: Best Range is 80 or higher. Under 30 is really bad.
  * Light: Best Range is 80 or higher. 
  * pH: Best is 6.0-6.8. 

## App Design
The app has an architecture similar to MVC. To facilitate synchronization between the model and the 
view, the model classes implement an observer pattern. This allows the view (and controller) to be 
notified of changes.  Unlike conventional MVC, the PlantSim Controller is not coordinating 
interactions between the view and model.

Controller : creates all the top level objects for the model and view. It listens for plant changes
and determines when the game is over (plant is 10" or dead)
 
Model : consists of 2 objects - Environment and Plant. The Environment tracks the light, moisture and pH.
As needed, the Environment adjusts values based on changes (ex. user adds fertilizer). The Plant keeps
track of the plant height and reacts to changes in the environment.

View : consists of 2 objects - Dashboard and Controls. The Dashboard handles display of plant height
and environment measurements. The Controls allows the user to adjust water, light or fertilizer.
