<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">

	<title>Weather School</title>
	<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1">

	<link rel="stylesheet" type="text/css" href="../includes/css/fonts/CartoGothicStd/CartoGothicStd.css" />
	<link rel="stylesheet" type="text/css" href="../includes/css/fonts/ComingSoon/ComingSoon.css" />
	
	<link rel="stylesheet" type="text/css" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.0/themes/smoothness/jquery-ui.css" />
	<link rel="stylesheet" type="text/css" href="../includes/jquery/plugins/jquery.plusslider/css/plusslider.css" />
	<link rel="stylesheet" type="text/css" href="../includes/jquery/plugins/jquery.plusslider/css/minimal.css" />
	<link rel="stylesheet" type="text/css" href="../includes/jquery/plugins/jquery.mCustomScrollbar/jquery.mCustomScrollbar.css" />
	
	<link rel="stylesheet" type="text/css" href="../includes/css/weather-school.css" />
	<link rel="stylesheet" type="text/css" href="../includes/css/weather-school-slides.css" />
	
	<script type="text/javascript" src="../includes/js/prefixfree.min.js"></script>
	
	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.js"></script>
	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.0/jquery-ui.js"></script>
	<script type="text/javascript" src="../includes/jquery/plugins/jquery.regex-selector.js"></script>
	<script type="text/javascript" src="../includes/jquery/plugins/jquery.purl.js"></script>
	<script type='text/javascript' src="../includes/jquery/plugins/jquery.mousewheel.min.js"></script>
	<script type='text/javascript' src="../includes/jquery/plugins/jquery.plusslider/js/jquery.plusslider.js"></script>
	<script type='text/javascript' src="../includes/jquery/plugins/jquery.mCustomScrollbar/jquery.mCustomScrollbar.min.js"></script>
	<script type="text/javascript" src="../includes/jquery/plugins/jquery.cookie.js"></script>
	<script type="text/javascript" src="../includes/jquery/plugins/jquery-ui.multidatespicker.js"></script>
	
	<script type="text/javascript" src="../includes/climateViz/js/controller.js"></script>
	<script type='text/javascript' src='../includes/js/weather-school.js'></script>
	<script type='text/javascript' src='../includes/js/weather-school-slides.js'></script>
	
</head>
<body>
	<div id="slider-positioner">
		<div id="slider-navigation">
			<div id="slider-menu">
				<div class="access-control">menu</div>
				<ul>
					<li><a href="#introduction">Introduction</a></li>
					<li><a href="#locationExplorer-sample">Location Summary</a></li>
					<li><a href="#temperature-intro">Temperature Patterns</a></li>
					<li><a href="#temperature-lat">Temperature and Lattitude</a></li>
					<li><a href="#temperature-elev-intro">Temperature and Elevation</a></li>
					<li><a href="#temperature-water-intro">Temperature and Water</a></li>
					<li><a href="#daylight-intro">Hours of Daylight</a></li>
					<li><a href="#relationships-intro">Relationships Between Variables</a></li>
					<li><a href="#models-intro">Models</a></li>
				</ul>
				<div class="you-are-here"><p>#<span class="screen-num"></span> of <span class="screen-total"></span></p></div>
			</div>
			<div class="prev">&lt;</div>
			<div class="next">&gt;</div>
		</div>
		<div id="slider">
			<div id="introduction">
				<h2>Did you ever wonder&#8230;</h2>
				<ul>
					<li>Why is it warmer on some days than on other days?</li>
					<li>Why are some months of the year colder than others?</li>
					<li>Why is it almost always colder at the North Pole than at the Equator?</li>
				</ul>
				<p class="p1">Learning how and why the Earth’s temperature varies throughout the year and around the globe is the first step in understanding weather and climate.</p>
				<p class="invite">Come and explore some of the major factors that produce variations in weather and climate.</p>
			</div>
			<div id="the-sun">
				<h2>The Sun</h2>
				<p>The sun is the reason why the earth is warm at all.</p>
				<p>Almost all the energy that warms up the earth comes from the sun.</p>
				<p>Without the sun, we could not live on the earth.</p>
				<p>It would be much too cold!</p>
			</div>
			<div id="sun-position">
				<h2>Position of the Sun</h2>
				<table>
					<tr>
						<td><img src="../includes/media/position/sun-in-winter.jpg"><div class="caption">Less energy reaches the earth at this place</div></td>
						<td>Another thing you need to know is that when you look up, 
						and the sun appears to be low in the sky, not much of the 
						energy from the sun is reaching the place where you are. 
						At some times of the year, the sun never gets very high in 
						the sky; and at other times of the year, the sun gets much 
						higher.</td>
					</tr>
					<tr>
						<td><img src="../includes/media/position/sun-in-summer.jpg"><div class="caption">More energy reaches the earth at this place</div></td>
						<td>When the sun gets high in the sky, more of the sun’s 
						energy reaches the earth at that place and the air tends to
						be warmer. When the sun is low in the sky, less of the sun’s 
						energy reaches the earth at that place and the air tends to 
						be cooler.</td>
					</tr>
				</table>
			</div>
			<div id="locationExplorer-sample" class="activity">
				<div class="header">
					<h2>Introducing ...</h2>
				</div>
				<div class="workarea">
					<div class="shield"></div>
					<div id="dataSelector-sample"></div>
					<div id="statspanel-sample"></div>
				</div>
				<div class="instructions">
					<div class="slider">
						<div>
							<p>On the left is a model of the earth on June 22, the first day of summer in the northern hemisphere.</p>
						</div>
						<div>
							<p>To the right of the model, is a chart showing the high, low, and average daily temperatures for that date in New York City and Key West Florida. It also shows the number of hours of daylight for the two places on that date, the average amount of energy that each place receives from the sun on that date, and the maximum height that the sun gets in the sky on that date.</p>
						</div>
						<div>
							<p>Notice that in Key West, on the first day of summer, the sun is almost directly overhead in the middle of the day (88.5&deg;), but in New York City, the sun reaches a maximum height of only about 73&deg; above the horizon on that day. Later in this module, you will learn why the sun is higher in the sky at one place compared to another place.</p>
						</div>
						<div>
							<p>Also, notice that the latitude of Key West (24.5&deg; N) is less than the latitude of New York City (40.7&deg; N). This means that Key West is closer to the equator than New York City. (If you need to refresh your memory about what latitude and longitude are, click on the latitude/longitude button on the menu bar to see a short tutorial.</p>
						</div>
					</div>
				</div>
			</div>
			<div id="activity-intro">
				<h3>Activity</h3>
				<p>Now you will be able to choose your own locations and your own time of the year to see how high the sun gets in the sky at those times and places. You will see the angle at which the sun&#8217;s rays strike the earth on that date and in that place, the average amount of energy from the sun that reaches that place, and the average temperature on that day. You will also see how much daylight that place receives on that date. Each place will be described by its latitude, that is, how many degrees north or south of the equator the place is.</p>
			</div>
			<div id="locationExplorer" class="activity">
				<div class="header">
					<h2>Explore the earth</h2>
				</div>
				<div class="workarea">
					<div id="dataSelector1"></div>
					<div id="statspanel1"></div>
				</div>
				<div class="instructions">
					<div class="slider">
						<div>
							<p>First, select the calendar icon and choose a day of the year anywhere between January 1st and December 31st.</p>
						</div>
						<div>
							<p>Then, click on any place on the earth. You can rotate the model of the earth to find any place you want.</p>
						</div>
						<div>
							<p>In the table next to the earth, you will see a number of things. First, you will see the latitude and longitude of that place. Next, you will see the maximum angle that the sun strikes the earth at that location on that day. Next, you will see the amount of solar energy that typically reaches the earth at that place at that time of the year. Next, you will see the average temperature at that place for that day. The solar energy and the temperature data is an average taken over many years. Finally, you will see a picture of how high the sun is in the sky at its highest point at that place on that day.</p>
						</div>
						<div>
							<p>Practice using the simulator by choosing different days of the year and different locations on the model of the earth.</p>
						</div>
						<div>
							<p><label for="locationExplorer-q1">Compare what you see on a day in June at a place in the northern hemisphere and a place in June in the southern hemisphere. Type your observations on the box below.</label><br>
							<textarea name="locationExplorer-q1" id="locationExplorer-q1" cols="65" rows="3" title="type your observations here"></textarea></p>
						</div>
					</div>
				</div>
			</div>
			<div id="locationExplorer2" class="activity">
				<div class="header">
					<h2>Comparing the North and South Poles</h2>
				</div>
				<div class="workarea">
					<div id="dataSelector2"></div>
					<div id="statspanel2"></div>
				</div>
				<div class="instructions">
					<div class="slider"><div>
						<form onclick="return false;">
						<p>Now look at a place near the North Pole and a place near the South Pole on June 22. Remember that June 22 is the first day of summer in the northern hemisphere.</p>
						<p>Answer the following questions:</p>
						<ol>
							<li><label for="labelExplorer2-q1">How high does the sun get in the sky on that date at the North Pole?</label> <input name="labelExplorer2-q1" id="labelExplorer2-q1" type="text" size="4"></li>
							<li><label for="labelExplorer2-q2">How high does the sun get in the sky on that date at the South Pole?</label> <input name="labelExplorer2-q2" id="labelExplorer2-q2" type="text" size="4"></li>
							<li><label for="labelExplorer2-q3">How many hours of daylight are there at the North Pole on that date?</label> <input name="labelExplorer2-q3" id="labelExplorer2-q3" type="text" size="4"></li>
							<li><label for="labelExplorer2-q4">How many hours of daylight are there at the South Pole on that date?</label> <input name="labelExplorer2-q4" id="labelExplorer2-q4" type="text" size="4"></li>
						</ol>
						</form>
					</div></div>
				</div>
			</div>
			<div id="locationExplorer3" class="activity">
				<div class="header">
					<h2>Comparing a location at different times of the year</h2>
				</div>
				<div class="workarea">
					<div id="dataSelector3"></div>
					<div id="statspanel3"></div>
				</div>
				<div class="instructions">
					<div class="slider"><div>
						<form onclick="return false;">
						<p>Now choose a location somewhere on the equator at two different times of the year, June 22 and March 22.</p>
						<p>Answer the following questions:</p>
						<ol class="questions">
							<li class="question-1">How high does the sun get in the sky at the equator on June 22, the first day of summer in the northern hemisphere? <input type="text" size="4"></li>
							<li class="question-2">How high does the sun get in the sky on March 22, the first day of spring in the northern hemisphere? <input type="text" size="4"></li>
							<li class="question-3">How many hours of daylight does the equator get on June 22? <input type="text" size="4"></li>
							<li class="question-4">How many hours of daylight does the equator get on March 22? <input type="text" size="4"></li>
						</ol>
						</form>
					</div></div>
				</div>
			</div>
			<div id="locationExplorer-tryit" class="activity">
				<div class="header">
					<h2>Explore</h2>
				</div>
				<div class="workarea">
					<div id="dataSelector-tryit"></div>
					<div id="statspanel-tryit"></div>
				</div>
				<div class="instructions">
					<p>If you like to explore different places and times of the year, go back to Screen 6. You can practice as much as you like. If you are finished with this activity, click on [Next Page] to continue to a new activity.</p>
				</div>
			</div>
			<div id="temperature-intro">
				<h2>Learning about Temperature Patterns</h2>
				<p>So far you have seen that at any given place, the hours of daylight, the maximum height of the sun in the sky, the high, low, and average daily temperatures, and the average amount of energy from the sun change throughout the year. You also saw that those quantities vary from one place to another on the same day of the year.</p>
				<p>Now we are going to try to find out more precisely what these patterns are and which variables may be related to each other. We will do that by creating tables and graphs of each of the variables that you looked at so far.</p>
				<p>Before looking for patterns, though, let’s take a little time to become familiar with the maps and graphs that you will use.</p>
			</div>
			<div id="temperature-select" class="activity">
				<div class="header">
					<h2>Temperature Patterns, step by step</h2>
				</div>
				<div class="workarea">
					<div id="dataSelector4"></div>
					<div id="tempchart1"></div>
				</div>
				<div class="instructions">
					<div class="slider">
						<div>
							<p>First choose a location on the map by clicking on that location.</p>
						</div>
						<div>
							<p>Now use the calendar to choose a year.</p>
						</div>
						<div>
							<p>What you see here is a graph of the average daily temperatures that were reported at [the selected location] for [the selected year].</p>
							<p>Temperature can be read on the y-axis (the vertical axis), and time of year can be read on the x-axis (the horizontal axis).</p>
						</div>
						<div>
							<p>The temperature that you see reported for a given day is the average of the temperature measurements that were taken at that reporting station for that day. Some stations collect air temperature data every hour, and some collect air temperature data less often.  But however many measurements that were taken, the number you see is the <span class="tooltip" title="average is a mean of the measurements and that the mean is calculated by adding together all the measurements and dividing by the number of measurements.">average</span> of them for that date. You may see that there are some days when there were no data reported at that station, perhaps  because there was no one to record it or because the measuring equipment was not working.</p>
						</div>
						<div>
							<p>Notice that the temperature rises and falls throughout the year.  You should also notice that the temperature goes up and down from day to day in a jagged way.  The curve is not perfectly smooth.  This is because even though there is an overall trend in how the temperature increases or decreases throughout the year, there is also variation in that pattern of increasing and decreasing from day to day.</p>
						</div>
						
						<div>
							<p>Next let's look more closely at this day-to-day variation.</p>
						</div>
						<div>
							<p>As you can see above, the first part of the graph has been highlighted. This allows you to zoom in and look at a smaller part of the curve more closely.</p>
							<p>When you want to zoom in, all you have to do is place your cursor at one corner of the rectangle that you want to look at, click and hold at that spot, and drag the cursor to cover the area you want to highlight. If you make a mistake, you can just click on “reset zoom” and try again.</p>
						</div>
						
						<div>
							<p>Now let's view the graph after we've zoomed in.</p>
						</div>
						<div>
							<p>In the image above, just the temperatures for days in January are included. </p>
						</div>
						<div>
							<p>By hovering over a date, you can see the average temperature reported for that day.</p>
						</div>
						<div>
							<p>You can also see how much change there is in the average temperature from day to day. Notice that in this example, on January 20, 2000, the average temperature for that day was 25.5o F.  But the day before, on January 19, the average temperature was 41.7 o F. That’s a big change in one day. The only thing that could cause that much change is cold air moving in from another location.</p>
						</div>
						
						<div>
							<p>Now you try it. Highlight just the month of January as shown on the previous page.</p>
						</div>
						<div>
							<p>Move the cursor to see what the temperature is on the individual days.</p>
						</div>
						<div>
							<p>Highlight other parts of the graph to observe day-to-day patterns.</p>
						</div>
						<div>
							<p>Choose different locations and different times of the year to see how the temperature changes at those locations during the year.</p>
						</div>
					</div>
				</div>
			</div>
			<div id="temperature-display2" class="activity">
				<div class="header">
					<h2>Review three-year period of temperature recordings</h2>
				</div>
				<div class="workarea">
					<div id="tempchart2"></div>
				</div>
				<div class="instructions">
					<div class="slider">
						<div>
							<p>In the graph above, you can see how average daily temperature changes at a particular location during a three-year period.</p>
						</div>
						<div>
							<p>What do you notice? You should see that the pattern of rising and falling temperatures throughout the year is very similar from year to year.  For example, it’s coldest in January and warmest in July. But is it identical from year to year? No, even though the pattern is very similar from one year to the next, there is also variation from year to year.  For example, the highest temperature in July 2001 is higher than the highest temperature in either July of 2000 or July of 2002.</p>
						</div>
						<div>
							<p>Variation may be due to the reliability of the measuring instrument, or it could be due to colder or warmer air moving in from another location.  Just remember that there is always an explanation for the variability that you see in your data even though you don’t always know what that explanation is.  Look closely to see if you can locate some other differences and think about why they might occur.</p>
						</div>
						<div>
							<p>On the next screen you will have a chance to observe more patterns in the air temperature at a location that you choose.</p>
						</div>
					</div>
				</div>
			</div>
			<div id="temperature-explore" class="activity">
				<div class="header">
					<h2>Try It: Chart Temperature</h2>
				</div>
				<div class="workarea">
					<div id="dataSelector5"></div>
					<div id="tempchart3"></div>
				</div>
				<div class="instructions">
					<div class="slider">
						<div>
							<ol>
								<li><p>Choose a place on the map. Choose a range of dates that covers more than just a single year. You can make the range of dates up to five years long.</p></li>
								<li><p>Observe the pattern in air temperature at that place.</p></li>
								<li><p>Repeat this activity for as many different locations as you like before moving to the next activity.</p></li>
							</ol>
						</div>
					</div>
				</div>
			</div>
			<div id="temperature-lat" class="activity">
				<div class="header">
					<h2>Temperature and Latitude</h2>
				</div>
				<div class="workarea">
					<div id="dataSelector6"></div>
					<div id="tempchart4"></div>
				</div>
				<div class="instructions">
					<div class="slider">
						<div>
							<p>In this activity you will look at the relationship between latitude and daily average temperature.</p>
						</div>
						<div>
							<p>Choose two places on the map that are directly north and south of each other (on the same line of longitude) and at least 1000 miles apart.</p>
							<p>To help you estimate how far apart 1000 miles is, the continental United States is about 3000 miles across from east to west, and it is about 1000 miles from north to south. Another way to estimate distance is by knowing that the earth is about 25,000 miles around. That means the distance from the equator to either the North or South Pole is a little more than 6000 miles.</p>
							<p>Now use the calendar to choose a date range. Choose two dates that are one year apart. For example, you could choose January 1, 2000 and December 31, 2000.</p>
						</div>
						<div>
							<p>Look at the pattern of temperatures at the two places.</p>
							<p>Notice that it is warmer on almost every day of the year in the place that is farther south (the <span class="lat-low">lower</span> line).</p>
						</div>
						<div>
							<p>As a general rule, in the northern hemisphere, places that are farther south (<span class="tooltip" title="The relationship between latitude and temperature is true north of the tropical zone in the northern hemisphere and south of the tropical zone in the southern hemisphere. There is a slightly different pattern inside the tropical region that depends on what time of year it is. {Show the location of the Tropic of Cancer and the Tropic of Capricorn in relation to the equator}">closer to the tropical zone</span>) tend to be warmer than places that are farther north (farther away from the tropical zone)</p>
						</div>
						<div>
							<p>You should also see that the difference between the high and low temperatures over the course of a year is less the closer you are to the tropical zone. Notice that the range of temperatures at the higher latitude (the <span class="lat-high">higher</span> line) is greater than the range of temperatures at the lower latitude. Another way to say this is that the line that is closer to the tropical zone (the <span class="lat-low">lower</span> line) is a little flatter than the line that is farther from the tropical zone (the <span class="lat-high">higher</span> line).</p>
						</div>
						<div>
							<p>Choose two other places and see if the pattern holds in those places too. Just make sure they are far enough apart so that differences in air temperature are large enough to show up on the graph. Try as many additional pairs of places as you would like.</p>
						</div>
					</div>
					<div class="questionBox">
						<form onclick="return false;">
						<ol class="questions">
							<li class="question-1">Describe one pair of locations that you tried. Is the place that is closer to the tropical zone warmer throughout the year, and is the place that is farther from the tropical zone cooler throughout the year? Is the temperature range different? Describe what you saw.<br>
								<textarea></textarea>
							</li>
						</ol>
						<input type="submit" value="Save My Answers">
						</form>
					</div>
				</div>
			</div>
			<div id="temperature-elev-intro">
				<h2>Temperature and Elevation</h2>
				<p>In the previous activity, you saw that the air temperature at a place is related to the latitude of the place. The higher the latitude (farther from the equator), the colder the place is, and the lower the latitude (closer to the equator), the warmer the place is.</p>
				<p>In this activity, you are going to use the maps to find out if how far a place is above sea level affects the air temperature at that place.</p>
			</div>
			<div id="temperature-elev" class="activity">
				<div class="header">
					<h2>Temperature and Elevation</h2>
				</div>
				<div class="workarea">
					<div id="dataSelector7"></div>
					<div id="tempchart5"></div>
				</div>
				<div class="instructions">
					<div class="slider">
						<div>
							<p>Now use the map above to choose two locations that are at different elevations above sea level.</p>
						</div>
						<div>
							<p>Start by locating and then zooming in on the state of Colorado and the city of Denver.</p>
							<p>Click as close to Denver as you can. You will see 20 yellow dots that represent reporting stations near Denver.</p>
						</div>
						<div>
							<p>Denver itself is at an elevation of about 5400 feet above sea level.  Some of the reporting stations around Denver are in the mountains at higher elevations.</p>
							<p>Mouse over each of the yellow dots until you find two reporting stations that are about a thousand feet apart in elevation.</p>
							<p>After you have decided which two to choose, click on each one of them.</p>
						</div>
						<div>
							<form onclick="return false;">
							<p>What do you notice about the graph of the temperature at the two locations?<br>
							<textarea></textarea></p>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div id="temperature-elev-practice" class="activity">
				<div class="header">
					<h2>Temperature and Elevation</h2>
				</div>
				<div class="workarea">
					<div id="dataSelector8"></div>
					<div id="tempchart6"></div>
				</div>
				<div class="instructions">
					<div class="slider">
						<div>
							<p>Now try to find other locations around the world where you can observe the effect of elevation on temperature.</p>
							<p>Remember to compare locations that are pretty close to each other. If the two locations are too far apart, something other than elevation may be responsible for the difference in temperature. For example, a cold air mass may have moved in to an area from somewhere else.</p>
							<p>Also note that you may have difficulty finding reporting stations at very high elevations because those areas are often very remote and not easily accessible by humans.</p>
						</div>
						<div>
							<p>You can repeat this activity as many times as you like until you are satisfied that you have a good understanding of how much the elevation of a place affects its temperature.</p>
							<p>When you are finished exploring these other places, write your observations in the NOTE BOX and then move on to the next activity.</p>
						</div>
						<div>
							<form onclick="return false;">
							<p>What is the relationship between how far a place is above sea level and the temperature of that place?<br>
								<textarea></textarea></p>
							<p>What evidence do you have to support your claim?<br>
								<textarea></textarea></p>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div id="temperature-water-intro">
				<h2>Temperature and Large Bodies of Water</h2>
				<p>In the previous activities, you saw that the air temperature at a place is related to how far the place is from the tropical zone (its latitude) and that air temperature at a place is related to how far the place is above sea level (its elevation). The higher the latitude (farther from the tropical zone), the colder the place is, and the higher the elevation of a place, the colder the place is. This assumes, of course, that all other factors are kept constant. Obviously a place in the Rocky Mountains in the summer could be warmer than a place in New York City in the winter.</p>
				<p>In this activity, you are going to try to find out whether or not how close a place is to a large body of water affects the air temperature at that place.</p>
			</div>
			<div id="temperature-water" class="activity">
				<div class="header">
					<h2>Temperature and Large Bodies of Water</h2>
				</div>
				<div class="workarea">
					<div id="dataSelector9"></div>
					<div id="tempchart7"></div>
				</div>
				<div class="instructions">
					<div class="slider">
						<div>
							<p>Now use the map above to choose two locations that are at different distances from the ocean.</p>
							<p>Start by locating and then zooming in on the state of California and the city of San Francisco.</p>
							<p>Click as close to San Francisco as you can. You will see 20 yellow dots that represent reporting stations near San Francisco.</p>
							<p>Choose San Mateo as your first reporting station. This is where the San Francisco International Airport is located. Then choose Modesto, a little to the east of San Francisco as your second location.</p>
							<p>Click on each those two locations.</p>
						</div>
						<div>
							<form onclick="return false;">
							<p class="question-1">What do you notice about the graph of the temperature at the two locations?<br>
								<textarea></textarea>
							</p>
							<p class="question-2">Which place has the warmer temperatures in the summer?<br>
								<textarea></textarea>
							</p>
							<p class="question-3">Which place has the warmer temperatures in the winter?<br>
								<textarea></textarea>
							</p>
							<p class="question-4">What about the difference between the high and low temperature on any given day? Does one place seem to have a bigger difference between the daily high and the daily low temperature?<br>
								<textarea></textarea>
							</p>
							<p class="question-5">What evidence do you have to support your idea about that?<br>
								<textarea></textarea>
							</p>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div id="temperature-water-lesson">
				<h2>Temperature and Large Bodies of Water</h2>
				<div class="scrollable">
				<p>What you probably saw is that at some times of the year the place that is closer to the water is cooler than the place that is farther from the water, but at other times of the year it is just the opposite. Then it’s colder farther away from the water. Did you notice how the line on the graph for the location that is closer to the water is flatter than the line for the place that is farther from the water. There is more variation during the year in the place that is farther from the water. That is, the high temperature for the year is higher and the low temperature is lower than at the place that is closer to the large body of water.</p>
				<p>You might also have noticed that the range of daily temperatures (the difference between the high and low temperature on any day is greater the farther you are from a large body of water.</p>
				<p>The reason for these patterns is that the temperature of the water has an effect on the air around it. As long as it isn’t frozen, the water makes the air above it warmer than it would otherwise be in the winter, and it makes the air above it cooler than it would otherwise be in the summer. It also makes the difference between daily high and low temperatures smaller than if you were <span class="tooltip" title="a large body of water holds a large quantity of thermal energy, which can be released to the air when the air is colder than the water and can be absorbed from the air when the air is warmer than the water.">farther from the water</span>.</p>
				</div>
			</div>
			<div id="temperature-water-practice" class="activity">
				<div class="header">
					<h2>Temperature and Large Bodies of Water</h2>
				</div>
				<div class="workarea">
					<div id="dataSelector10"></div>
					<div id="tempchart8"></div>
				</div>
				<div class="instructions">
					<div class="slider">
						<div>
							<p>Now try to find other locations around the world where you can observe the effect of proximity to a large body of water on temperature.</p>
							<p>Remember to compare locations that are pretty close to each other. If the two locations are too far apart, something other than how close a place is to the water may be responsible for the difference in temperature. For example, a cold air mass may have moved into an area from somewhere else or the places may be at different latitudes or elevations above sea level.</p>
							<p>Also note that you may have difficulty finding reporting stations that are very close to large bodies of water because there aren’t many reporting stations right on the shoreline.</p>
						</div>
						<div>
							<p>You can repeat this activity as many times as you like until you are satisfied that you have a good understanding of how being close to a large body of water affects the temperature at that place.</p>
							<p>When you are finished exploring these other places, write your observations in the NOTE BOX and then move on to the next activity.</p>
						</div>
						<div>
							<form onclick="return false;">
								<p>What is the relationship between how far a place is above sea level and the temperature of that place?<br>
									<textarea></textarea>
								</p>
								<p>What evidence do you have to support your claim?<br>
									<textarea></textarea>
								</p>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div id="temperature-review">
				<h2>Temperature</h2>
				<div class="scrollable">
				<p>You have now examined three factors that are related to the air temperature at a particular location: (1) how close a place is to the equator (latitude), (2) how far a place is above sea level (elevation), and (3) how close a place is to a large body of water.</p>
				<p>There is one other factor that has been mentioned, but it was not demonstrated in this module. That is whether or not a mass of cold or warm air has moved into a place to affect its temperature. You should know that as the wind blows, warmer or cooler air is constantly moving into and out of an area, which changes the temperature of the air at that place.</p>
				<p>To see how clouds and, therefore, air move across the United States, click on the following web links. The speed of cloud movement has been speeded up, but you can see from these videos that the air above us is always moving. Sometimes this means that warmer air is moving in from another location and sometimes colder air is moving into a region.</p>
				<div style="text-align: center;">
					<iframe width="420" height="315" src="http://www.youtube.com/embed/VFsWU2j5bPc" frameborder="0" allowfullscreen></iframe>
				</div>
				<div style="text-align: center;">
					<iframe width="420" height="315" src="http://www.youtube.com/embed/ULJpU1id6-M" frameborder="0" allowfullscreen></iframe>
				</div>
				</div>
			</div>
			<div id="daylight-intro" class="activity">
				<div class="header">
					<h2>Daylight Intro</h2>
				</div>
				<div class="workarea">
					<div class="shield"></div>
					<div id="sun-hours-selector-sample"></div>
					<div id="sun-hours-graph-sample"></div>
				</div>
				<div class="instructions">
					<div class="slider">
						<div>Now  let&rsquo;s look at how the number of hours of daylight changes at different places  over the course of a year.</div>
						<div>The  graph that you see here shows the number of hours of daylight at Morningside  Heights, a section of New York City for a two-year period, from September 22nd,  the first day of fall, through December 31st, the last day of the  year two years later.</div>
						<div>Notice  first that the hours of daylight changes throughout the year at this location.  On the first day of fall there are about 12 hours of daylight, in late June  there are about 15 hours of daylight, and in late December there are just over  9 hours of daylight. (On the next screen you will be able to see the exact  number of hours of daylight on any particular day by hovering over different  parts of the curve with the cursor.) </div>
						<div>Also  notice that the line is not jagged like the line for air temperature was. The  change in the number of hours of daylight is about the same from day to day.  (Remember that we are talking about hours of &ldquo;daylight,&rdquo; not hours of  &ldquo;sunlight.&rdquo; Because some days are rainy or cloudy and others are clear, there  are big changes in the number of hours of sunlight each day, but the time the  sun rises and sets changes very gradually from day to day.) </div>
						<div>
							<form>
								<p>Remember  that when you looked at the graph for air temperature, there was variation not  only from day to day but also from year to year. Is that also true for the number  of hours of daylight? What can you say about the change in hours of daylight at  a place on a particular date (for example, October 1st) from one  year to the next?<br>
									<textarea></textarea>
								</p>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div id="daylight-example1" class="activity">
				<div class="header">
					<h2>Daylight Example</h2>
				</div>
				<div class="workarea">
					<div class="shield"></div>
					<div id="sun-hours-selector-1"></div>
					<div id="sun-hours-graph-1"></div>
				</div>
				<div class="instructions">
					<div class="slider">
						<div>
							<p>In the illustration  above, the hours of daylight for Plattsburg, New York is plotted on the same  graph as New York City.  Plattsburgh is  about 300 miles north of New York City.</p>
						</div>
						<div>
							<p>Notice that in  late December there are only 8.8 hours of daylight in Plattsburg, a little <em>less</em> than the 9.2 hours that you saw in  New York City. But in late June, there are 15.6 hours of daylight in  Plattsburgh, a little <em>more</em> than the  15.1 hours that there are in New York City.</p>
						</div>
					</div>
				</div>
			</div>
			<div id="daylight-example2" class="activity">
				<div class="header">
					<h2>Daylight Example</h2>
				</div>
				<div class="workarea">
					<div class="shield"></div>
					<div id="sun-hours-selector-2"></div>
					<div id="sun-hours-graph-2"></div>
				</div>
				<div class="instructions">
					<div class="slider">
						<div>
							<p>Now we are going  to see what happens to the hours of daylight when we look at a place that is  quite a bit south of New York City. </p>
							<p>The place we have  chosen in Columbia, South America.</p>
						</div>
						<div><p>Notice how flat  the curve is getting? In late December there is just a little less than 12  hours of daylight, and in late June, there is just a little more than 12 hours  of daylight. In late March (the first day of spring) and in late September (the  first day of fall), there are 12 hours of daylight, just as there are in New  York City.</p></div>
						<div>
							<form>
							<p>What is the  annual range of temperatures at this particular location in South America? (The  range is the difference between the highest and lowest value.) <input type="text"></p>
							<p>What is the range  in New York City? <input type="text"></p>
							<p>What was is range  in Plattsburgh, NY?  <input type="text"></p>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div id="daylight-example3" class="activity">
				<div class="header">
					<h2>Daylight Example</h2>
				</div>
				<div class="workarea">
					<div class="shield"></div>
					<div id="sun-hours-selector-3"></div>
					<div id="sun-hours-graph-3"></div>
				</div>
				<div class="instructions">
					<div class="slider">
						<div><p>Now let&rsquo;s look at  one more place before you start to experiment yourself with different  locations.</p></div>
						<div><p>This time we are  going to look at a place in Equador, very close to the equator.</p></div>
						<div><p>Now the curve is  completely flat. There are 12 hours of daylight all year long. There is no  variation in how much daylight there is. Of course, the amount of <em>sunlight</em> can change from day to day.  Some days are cloudy and some days are sunny, but the sun rises and sets at the  same time each day at the equator so that the number of hours of daylight is  always the same. It&rsquo;s only when you get away from the equator that you notice a  change in the number of daylight hours as the seasons change.</p></div>
					</div>
				</div>
			</div>
			<div id="daylight-practice" class="activity">
				<div class="header">
					<h2>Daylight Exploration</h2>
				</div>
				<div class="workarea">
					<div id="sun-hours-selector-4"></div>
					<div id="sun-hours-graph-4"></div>
				</div>
				<div class="instructions">
					<div class="slider">
						<div><p>Now you try it.</p></div>
						<div><p>First choose a range  of dates that covers between two and three years.</p></div>
						<div><p>Then choose two  locations and create a graph that compares the length of day at those two  locations.</p></div>
						<div><p>Write your  observations in your scratch pad.</p></div>
						<div><p>Repeat the  activity as many times as you like until you recognize a pattern in the data.</p></div>
						<div>
							<form onclick="return false;">
								<p>How many hours of  daylight are there on the first day of spring and the first day of fall  everywhere in the world? <input type="text"></p>
								<p>What happens to  the difference between the longest and shortest day the closer you are to the  equator? <textarea></textarea></p>
								<p>What happens to  the difference between the longest and the shortest day the farther you are  from the equator? <textarea></textarea></p>
								<p>What is the  shortest day of the year in the northern hemisphere? <input type="text"></p>
								<p>What is the  longest day of the year in the northern hemisphere? <input type="text"></p>
								<p>How would you state the relationship between hours of daylight at a place and how close the place is to the equator? <textarea></textarea></p>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div id="variable-exploration" class="activity">
				<div class="header">
					<h2>Explore Other Variables</h2>
				</div>
				<div class="workarea">
					<div id="variables-selector-1"></div>
					<div id="variables-graph-1"></div>
				</div>
				<div class="instructions">
					<div class="slider">
						<div><p>So  far, you have looked at graphs of how temperature changes from day to day and over  the course of a year in different locations. You have also seen how the length  of the day changes at different locations over the course of the year.</p></div>
						<div>
							<p>There  were two other variables that you looked at briefly at the beginning of this  module. These were the maximum height of the sun in the sky and the average  energy from the sun at a place.</p>
							<p>You  can explore those variables in the same way you explored average temperature  and length of the day.</p>
							<p>To  explore them, click on [maximum height of the sun in the sky] or [average energy  from the sun] on the menu above.</p>
						</div>
					</div>
				</div>
			</div>
			<div id="relationships-intro">
				<h2>Relationships between variables</h2>
				<p>In  the previous set of activities, you saw how high, low, and average daily  temperature, hours of daylight, maximum height of the sun in the sky, and the  average amount of energy that a place receives from the sun change from day to  day over the course of a year.  You were  also able to compare those changes at different places. When you looked at  different places, you should have noticed that how far north or south of the topical  zone a place is affects its high, low, and average daily temperature, the  maximum height of the sun in the sky, and so on.</p>
				<p>In  the next set of activities, we are going to look more closely at the  relationships between these variables.   We want to find out how the different variables are related to each  other and how they affect the temperature at a place.</p>
			</div>
			<div id="relationships-intro2" class="activity">
				<div class="header">
					<h2>Relationships between variables</h2>
				</div>
				<div class="workarea">
					<div class="shield"></div>
					<div id="relations-intro2-map"></div>
					<div id="relations-intro2-graph"></div>
				</div>
				<div class="instructions">
					<div class="slider">
						<div>
							<p>In an earlier activity you saw that certain variables change in an up and down manner over time.   Average daily temperature, for example, is low during part of the year, increases gradually for a while, and then starts to decrease gradually before increasing again. This pattern is repeated year after year.</p>
						</div>
					</div>
				</div>
			</div>
			<div id="relationships-intro3" class="activity">
				<div class="header">
					<h2>Relationships between variables</h2>
				</div>
				<div class="workarea">
					<div class="shield"></div>
					<div id="relations-intro3-map"></div>
					<div id="relations-intro3-graph"></div>
				</div>
				<div class="instructions">
					<div class="slider">
						<div>
							<p>In this next set of activity, you will look at straight-line relationships, relationships in which one variable goes up as the other one goes up, or one variable goes down as the other goes up. The line that you see is called a [line of best fit].</p>
						</div>
						<div>
							<form onclick="return false;">
								<p>Which  variable is increasing from left to right on the x-axis? The x-axis the  horizontal axis, the one that goes from left to right. <input type="text"></p>
								<p>Which  variable is increasing on the y-axis? The y-axis is the vertical axis, the one  that goes up and down. <input type="text"></p>
								<p>What  happens to the average solar energy that a place receives as the maximum angle  of the sun increases? <textarea></textarea></p>
								<p>Approximately  how much does the average solar energy increase for every 10 degrees increase  in the maximum angle of the sun? <input type="text"></p>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div id="relationships-bonaire" class="activity">
				<div class="header">
					<h2>Temperature versus altitude on a flight from Bonaire to Baltimore</h2>
				</div>
				<div class="workarea">
					<div class="shield"></div>
					<div id="relations-bonaire-map"></div>
					<div id="relations-bonaire-graph"></div>
				</div>
				<div class="instructions">
					<div class="slider">
						<div>
							<form onclick="return false;">
							<p>Which  variable is increasing from left to right on the x-axis? The x-axis the  horizontal axis, the one that goes from left to right. <input type="text"></p>
							<p>Which  variable is decreasing on the y-axis? The y-axis is the vertical axis, the one  that goes up and down. <input type="text"></p>
							<p>What  happens to the air temperature as the altitude increases? <textarea></textarea></p>
							<p>Approximately  how much does the temperature decrease for every 10,000 feet increase in  altitude? <input type="text"></p>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div id="relationships-sun-energy" class="activity">
				<div class="header">
					<h2>Exploring relationships between variables</h2>
				</div>
				<div class="workarea">
					<div id="variables-selection-2"></div>
					<div id="variables-table-2"></div>
					<div id="variables-graph-2"></div>
				</div>
				<div class="instructions">
					<div class="slider">
						<div><p>Now choose one location and see what happens at that location at 12 different times of the year. After your selection click on the SAVE button to save your results. You will make a table and some graphs of the data for the place your selected.</p></div>
						<div><p>Select  &ldquo;Maximum Angle of the Sun&rdquo; and &ldquo;Average solar energy&rdquo; as the two variables that  you would like to graph to see if there is a relationship between those two  variables. To choose a variable, click on the heading for the column where the  values of that variable appear.</p></div>
						<div><p>Then  click on [Graph it] to create a graph of these two variables.</p></div>
						<div>
							<form onclick="return false;">
								<p>Which  variable is increasing from left to right on the x-axis? <input type="text"></p>
								<p>Which  variable is increasing on the y-axis? <input type="text"></p>
								<p>What  happens to the average amount of solar energy that reaches the earth as the  maximum angle of the sun increases? <textarea></textarea></p>
								<p>Approximately  how much additional solar energy does this location receive for every 10  degrees that the sun is higher in the sky? <input type="text"></p>
								<p>As you can see, there is a pretty strong  relationship between the maximum angle of the sun and average solar energy, but  it&rsquo;s not a perfect relationship.  Not all  the points are on the line. What other  factors besides maximum angle of the sun could be affecting the amount of solar  energy that reaches the earth at this location? <textarea></textarea></p>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div id="models-intro">
				<h1>Sun-Earth Models Introduction</h1>
				<hr />
				<p>{SOME KIND OF GRAPHIC}</p>
				<ul>
					<li>Now  that you have seen how length of day, angle of the sun, and amount of solar  energy affect the temperature at a place and how all of those things change  over the course of year, we will now look at models of the earth-sun system  that will help to explain the patterns that we observe throughout the  year.   </li>
					<li>First  we will look at some static images of how the earth and sun are related, and  then we will look at the system in motion. </li>
				</ul>
			</div>
			<div id="models-info1">
				<h1>Sun-Earth Models</h1>
				<hr />
				<p><img src="../media/clip15.png" width="512" height="246" /></p>
				<ul>
					<li>First let&rsquo;s review some basic ideas about how  the earth and sun are related.</li>
					<li>A good way to start is by trying to make sense  of the model above.</li>
					<li>The first thing to remember is that the earth  moves around the sun. It makes one full trip around the sun in a year. It gets  a quarter of the way around in three months and half way around in six months.</li>
					<li>Another thing to keep in mind is that it stays  in the same plane as it moves around the sun, as if it were rolling along a  flat surface. It doesn&rsquo;t bounce up and down as it goes around the sun. </li>
					<li>When you look at the diagram, you can also see that  the axis of the earth (the line between the North and South Poles) is always  tilted. That tilt does not change throughout the year. This means that the  North Pole is always aimed toward the same point in space no matter where the  earth is in its path around the sun.</li>
					<li>The tilt of earth&rsquo;s axis is always 23.5o  away from the straight up and down line that you see in the diagram. If you  think of the plane of the earth&rsquo;s orbit as a table top, the straight up and  down line would be coming straight up from the top of the table. In other  words, that line would be perpendicular to the table top.</li>
					<li>The correct mathematical way to describe the  tilt of the earth is to say: The earth&rsquo;s axis of rotation is tilted 23.5o  from a line that is perpendicular to the plane of the earth&rsquo;s orbit around the  sun. Look carefully at the diagram to see if this statement makes sense to you.  First look at the plane of earth&rsquo;s orbit represented in the diagram as a dark  gray flat surface that the earth moves around the sun on. Then find the line  that is drawn perpendicular to that plane. Finally, note the way the earth is  tilted relative to that perpendicular line.</li>
				</ul>
			</div>
			<div id="models-info2">
				<h1>Sun-Earth Models</h1>
				<hr />
				<p><img src="../media/clip16.png" width="380" height="249" /></p>
				<ul>
					<li>As  the earth moves around the sun, different parts of the sun are pointed toward  or away from the sun at different times of the year.</li>
					<li>In  the diagram above, when it is summer in the northern hemisphere, the North Pole  is pointed toward the sun, but in the winter in the northern hemisphere, the South  Pole is pointed toward the sun.</li>
					<li>In  the spring and fall, the axis of rotation is pointed neither toward nor away  from the sun.  Whether the North or South  Pole is pointed away from the sun, toward the sun, or neither toward nor away  from the sun at different times of the year is why we have seasons.</li>
				</ul>
			</div>
			<div id="models-info3">
				<h1>Sun-Earth Models</h1>
				<hr />
				<p><img src="../media/clip17.png" width="155" height="181" /></p>
				<ul>
					<li>One more thing to keep in mind is that the earth spins  on its axis once every 24 hours.  This is  the day night cycle. </li>
					<li>In the diagram above, imagine that the sun is far to  the right. The part of the earth that is facing the sun is in daylight, and the  part of the earth that is facing away from the sun is in darkness.</li>
					<li>As the earth spins on its axis, different places move  into and out of daylight.</li>
					<li>The sun rises in the east, gets higher and higher in  the sky until it reaches its maximum height in the middle of the day, then  starts to get lower and lower in the sky until it finally sets in the west late  in the day.</li>
					<li>As the sun gets higher in the sky, the amount of  energy that a place on earth gets from the sun increases, and the temperature  rises. As the sun gets lower in the sky, the amount of energy at that place  decreases, and the  temperature drops. </li>
				</ul>
			</div>
			<div id="models-info4">
				<h1>Sun-Earth Models</h1>
				<hr />
				<ul>
					<li>Finally,  to complete the story of the geometry of the earth-sun system, we need to pay  attention to the fact that the earth is a sphere. </li>
					<li>Because  the earth is a sphere, the light from the sun strikes the earth at different  angles at different places.</li>
					<li>Look  at the spheres below. Notice that when you shine a light on a sphere, the part  of the sphere that is closest to the light source is illuminated most brightly.  This is the place where the light strikes the sphere at a 90 degree angle.</li>
				</ul>
				<p><img src="../media/clip18.png" width="238" height="244" /><img src="../media/clip19.png" width="232" height="252" /></p>
				<ul>
					<li>Notice  that there is only one place on the surface of the sphere where the sun strikes  the sphere at a 90 degree angle. At all other places, the light strikes at less  than a 90 degree angle. The farther away from the place where the light strikes  at a 90 degree angle, the smaller the angle of the light is. </li>
					<li>This  is also true on the surface of the earth. At any one time, there is only one  place where the sun strikes the earth at a 90 degree angle. The farther away  from that place a location is, the smaller the angle at which the sun strikes  the earth. At the North Pole, for example, the sun always strikes the earth at  a very low angle, and at some times of the year the sun is not visible at all.</li>
				</ul>
				<p><img src="../media/clip20.png" width="400" height="276" /></p>
			</div>
			<div id="models-interstitial1">
				<h1>Sun-Earth Models</h1>
				<hr />
				<p>{SOME KIND OF GRAPHIC}</p>
				<ul>
					<li>As you can see, earth-sun system is very complicated.  The earth is spinning at the same time it is orbiting around the earth, and  because the earth&rsquo;s axis is tilted, we see  the sun differently at different times of the year.</li>
					<li>To keep things simple, when we model this complex  system, we will not always show all the parts moving at the same time. This  will allow us to focus on one thing at a time.</li>
					<li>In the next set of activities, you will start out by  looking at a dynamic (moving) model of the earth-sun system with the parts in  motion, and then you will look at a number of static images of the same  system.  Altogether this should give you  a better understanding of the changes that take place throughout the year.</li>
				</ul>
			</div>
			<div id="models-motion1" class="activity">
				<div class="header">
					<h2>Sun-Earth Models</h2>
				</div>
				<div class="workarea">
					<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%">
						<param name="movie" value="media/sims/vis-sim-eliptic.swf" />
						<!--[if !IE]>-->
						<object type="application/x-shockwave-flash" data="media/sims/vis-sim-eliptic.swf" width="100%" height="100%">
							<!--<![endif]-->
							<p>flash animation</p>
							<!--[if !IE]>-->
						</object>
						<!--<![endif]-->
					</object>
				</div>
				<div class="instructions">
					<ul>
						<li>In  the illustration above, you see a model showing how the earth moves around the  sun once each year.</li>
						<li>In  this model, the person is positioned at the equator and the starting date is  set for a day in late March. Dates are chosen by sliding the red date indicator  at the bottom of the model.</li>
						<li>The  arrows show the angle at which the sun is striking a place on that date.</li>
						<li>The  yellow dot on the model of the earth in the upper right hand box is the point  on the earth at which the sun strikes the earth at a 90 degree angle (in this  case it is at the equator and the person is standing on the yellow dot).</li>
						<li>The  red line across the earth shows the latitude where the person is standing, in  this case the equator.</li>
						<li>Click  on [start animation] on the right side at the bottom of the model and observe  what happens to the position of the earth in relation to the sun and the  maximum angle of the sun in the sky at the equator throughout the year.</li>
						<li>Let  the animation run for a while so you can get a sense of the repeating pattern  of change throughout the year.</li>
						<li>Now  click on [stop the animation] and move to the next page.</li>
					</ul>
				</div>
			</div>
			<div id="models-motion2" class="activity">
				<div class="header">
					<h2>Sun-Earth Models</h2>
				</div>
				<div class="workarea">
					<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%">
						<param name="movie" value="media/sims/vis-sim-eliptic.swf" />
						<!--[if !IE]>-->
						<object type="application/x-shockwave-flash" data="media/sims/vis-sim-eliptic.swf" width="100%" height="100%">
							<!--<![endif]-->
							<p>flash animation</p>
							<!--[if !IE]>-->
						</object>
						<!--<![endif]-->
					</object>
				</div>
				<div class="instructions">
					<ul>
						<li>In  the illustration above, you see a model showing how the earth moves around the  sun once each year.</li>
						<li>In  this model, the person is positioned at the equator and the starting date is  set for a day in late March. Dates are chosen by sliding the red date indicator  at the bottom of the model.</li>
						<li>The  arrows show the angle at which the sun is striking a place on that date.</li>
						<li>The  yellow dot on the model of the earth in the upper right hand box is the point  on the earth at which the sun strikes the earth at a 90 degree angle (in this  case it is at the equator and the person is standing on the yellow dot).</li>
						<li>The  red line across the earth shows the latitude where the person is standing, in  this case the equator.</li>
						<li>Click  on [start animation] on the right side at the bottom of the model and observe  what happens to the position of the earth in relation to the sun and the  maximum angle of the sun in the sky at the equator throughout the year.</li>
						<li>Let  the animation run for a while so you can get a sense of the repeating pattern  of change throughout the year.</li>
						<li>Now  click on [stop the animation] and move to the next page.</li>
					</ul>
				</div>
			</div>
			<div id="models-motion3" class="activity">
				<div class="header">
					<h2>Sun-Earth Models</h2>
				</div>
				<div class="workarea">
					<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%">
						<param name="movie" value="media/sims/vis-sim-eliptic.swf" />
						<!--[if !IE]>-->
						<object type="application/x-shockwave-flash" data="media/sims/vis-sim-eliptic.swf" width="100%" height="100%">
							<!--<![endif]-->
							<p>flash animation</p>
							<!--[if !IE]>-->
						</object>
						<!--<![endif]-->
					</object>
				</div>
				<div class="instructions">
					<ul>
						<li>Now  let&rsquo;s look more closely at what the model shows us.</li>
						<ul>
							<li>The person is standing at the equator.</li>
							<li>It&rsquo;s March 21, the first day of spring in the  northern hemisphere.</li>
							<li>The sun is striking the earth at a 90 degree  angle at the equator on the first day of spring.</li>
							<li>The maximum height of the sun in the sky on this  date is straight overhead, or at 90 degrees.</li>
						</ul>
					</ul>
				</div>
			</div>
			<div id="models-motion4" class="activity">
				<div class="header">
					<h2>Sun-Earth Models</h2>
				</div>
				<div class="workarea">
					<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%">
						<param name="movie" value="media/sims/vis-sim-eliptic.swf" />
						<!--[if !IE]>-->
						<object type="application/x-shockwave-flash" data="media/sims/vis-sim-eliptic.swf" width="100%" height="100%">
							<!--<![endif]-->
							<p>flash animation</p>
							<!--[if !IE]>-->
						</object>
						<!--<![endif]-->
					</object>
				</div>
				<div class="instructions">
					<ul>
						<li>Now  let&rsquo;s see what happens when we move ahead to June 22, the first day of summer  in the northern hemisphere.</li>
						<li>Our  person is still at the equator.</li>
						<li>Notice  that on the model of the earth and sun on the left side of the diagram the  North Pole is pointed toward the sun on the first day of summer in the northern  hemisphere. </li>
					</ul>
					<div class="questionBox">
						<form onclick="return false;">
						<ol class="questions">
							<li>What  is the maximum height of the sun in the sky on June 22 at the equator? <input type="text"></li>
							<li>At  what latitude does the sun strike the earth at a 90 degree angle on June 22? <input type="text"></li>
						</ol>
						<input type="submit" value="Save My Answers">
						</form>
					</div>
				</div>
			</div>
			<div id="models-motion5" class="activity">
				<div class="header">
					<h2>Sun-Earth Models</h2>
				</div>
				<div class="workarea">
					<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%">
						<param name="movie" value="media/sims/vis-sim-eliptic.swf" />
						<!--[if !IE]>-->
						<object type="application/x-shockwave-flash" data="media/sims/vis-sim-eliptic.swf" width="100%" height="100%">
							<!--<![endif]-->
							<p>flash animation</p>
							<!--[if !IE]>-->
						</object>
						<!--<![endif]-->
					</object>
				</div>
				<div class="instructions">
					<ul>
						<li>Now  let&rsquo;s see what happens when we move ahead to September 22, the first day of  fall in the northern hemisphere.</li>
						<li>Our  person is still at the equator. </li>
					</ul>
					<div class="questionBox">
						<form onclick="return false;">
						<ol class="questions">
							<li>What  is the maximum height of the sun in the sky on September 22 at the equator? <input type="text"></li>
							<li>At  what latitude does the sun strike the earth at a 90 degree angle on September  22? <input type="text"></li>
						</ol>
						<input type="submit" value="Save My Answers">
						</form>
					</div>
				</div>
			</div>
			<div id="models-motion6" class="activity">
				<div class="header">
					<h2>Sun-Earth Models</h2>
				</div>
				<div class="workarea">
					<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%">
						<param name="movie" value="media/sims/vis-sim-eliptic.swf" />
						<!--[if !IE]>-->
						<object type="application/x-shockwave-flash" data="media/sims/vis-sim-eliptic.swf" width="100%" height="100%">
							<!--<![endif]-->
							<p>flash animation</p>
							<!--[if !IE]>-->
						</object>
						<!--<![endif]-->
					</object>
				</div>
				<div class="instructions">
					<ul>
						<li>Finally,  to complete the four seasons, let&rsquo;s see what happens when we move ahead to  December 22, the first day of winter in the northern hemisphere. </li>
						<li>Our  person is still at the equator. </li>
						<li>Notice  that on the model fo the earth and sun on the left side of the diagram the  North Pole is pointed away from the sun on the first day of winter.</li>
					</ul>
					<div class="questionBox">
						<form onclick="return false;">
						<ol class="questions">
							<li>What  is the maximum height of the sun in the sky on December 22 at the equator? <input type="text"></li>
							<li>At  what latitude does the sun strike the earth at a 90 degree angle on December 22? <input type="text"></li>
						</ol>
						<input type="submit" value="Save My Answers">
						</form>
					</div>
				</div>
			</div>
			<div id="models-motion7" class="activity">
				<div class="header">
					<h2>Sun-Earth Models</h2>
				</div>
				<div class="workarea">
					<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%">
						<param name="movie" value="media/sims/vis-sim-eliptic.swf" />
						<!--[if !IE]>-->
						<object type="application/x-shockwave-flash" data="media/sims/vis-sim-eliptic.swf" width="100%" height="100%">
							<!--<![endif]-->
							<p>flash animation</p>
							<!--[if !IE]>-->
						</object>
						<!--<![endif]-->
					</object>
				</div>
				<div class="instructions">
					<ul>
						<li>It  may surprise you that the sun is not directly overhead at the equator on June  22nd. After all, it <em>is</em> the  equator, and it <em>is</em> the first day of  summer, at least in the northern hemisphere.</li>
						<li>If  the sun isn&rsquo;t directly overhead at the equator, where <em>is</em> it directly overhead?</li>
						<li>Look  at the image above.  Our person is  standing at 23.5o N latitude.  This line of latitude is also called the  Tropic of Cancer [hover over for more information]. [In the hover-box,  introduce the terms Tropic of Capricorn, tropics, and tropical zone.]</li>
						<li>Because  the North Pole is tilted 23.5 degrees toward the sun on the first day of  summer, 23.5o N latitude is the place where the sun strikes at a 90  degree angle. It&rsquo;s where the maximum height of the sun in the sky on that day is  directly overhead. [Include hover note showing tangent, angles, etc.]</li>
						<li>Where  is 23.5o N latitude? There is actually no place in the U.S. that is  at 23.5o N latitude.  23.5o  N latitude is just a little bit south of Key West, Florida, the southernmost place  in the country, and just a little bit north of Havana, Cuba.</li>
						<li>Go  to the Longitude and Latitude demonstrator and find 23.5o N  latitude. Now shift-click to rotate the globe to see which places are at that  latitude.  You can follow 23.5o  N latitude around the world starting just south of Florida in the U.S., then eastward  through northern Africa, northern India, southern China, and finally across the  Pacific Ocean and through Mexico before you end up back where you started.</li>
						<li>As  the earth rotates on its axis, creating the day night cycle, the maximum height  the sun will reach on June 22 at places that are 23.5o N latitude is  90 degrees. The sun will be directly overhead in the middle of the day at that  latitude, but nowhere else.</li>
					</ul>
					<div class="questionBox">
						<form onclick="return false;">
						<ol class="questions">
								<li>Where  is the sun directly overhead on the first day of summer in the northern  hemisphere? <input type="text"></li>
						</ol>
						<input type="submit" value="Save My Answers">
						</form>
					</div>
				</div>
			</div>
			<div id="models-motion8" class="activity">
				<div class="header">
					<h2>Sun-Earth Models</h2>
				</div>
				<div class="workarea">
					<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%">
						<param name="movie" value="media/sims/vis-sim-eliptic.swf" />
						<!--[if !IE]>-->
						<object type="application/x-shockwave-flash" data="media/sims/vis-sim-eliptic.swf" width="100%" height="100%">
							<!--<![endif]-->
							<p>flash animation</p>
							<!--[if !IE]>-->
						</object>
						<!--<![endif]-->
					</object>
				</div>
				<div class="instructions">
					<ul>
						<li>Now  let&rsquo;s look at where the sun is directly overhead at some other times of the  year.</li>
						<li>We&rsquo;ll  start with December 22, the first day of winter in the northern hemisphere,  which is also the first day of summer in the <em>southern</em> hemisphere.</li>
						<li>We  will leave our person at 23.5o N latitude, the same location as in  the previous slide.</li>
						<li>Notice  now that the North Pole is tilted 23.5 degrees <em>away</em> from the sun at this time of year, and the place where the sun  is directly overhead (the yellow dot) is now at 23.5 degrees S latitude. [Include  hover-note showing tangent, angles, etc.]</li>
						<li>In  the bottom right hand box in the illustration, you can see the angle that the  sun strikes the earth where our person is. The sun may be directly overhead at  23.5 degrees S latitude, but that is certainly not what our person sees. If you  go to the data tables, you can see that the maximum height of the sun in the  sky at 23.5o N latitude on December 22 is about 43 degrees.</li>
						<li>You  can see what 43 degrees looks like in the lower right hand box in the  illustration above.</li>
					</ul>
					<div class="questionBox">
						<form onclick="return false;">
						<p>To review what we have seen in  the past several slides:</p>
						<ol class="questions">
							<li>On  what line of latitude is the sun directly overhead on March 22, the first day  of spring in the northern hemisphere? <input type="text"></li>
							<li>On  what line of latitude is the sun directly overhead on June 22, the first day of  summer in the northern hemisphere? <input type="text"></li>
							<li>On  what line of latitude is the sun directly overhead on September 22, the first  day of fall in the northern hemisphere? <input type="text"></li>
							<li>On  what line of latitude is the sun directly overhead on December 22, the first  day of winter in the northern hemisphere? <input type="text"></li>
						</ol>
						<input type="submit" value="Save My Answers">
						</form>
					</div>
				</div>
			</div>
			<div id="models-motion9" class="activity">
				<div class="header">
					<h2>Sun-Earth Models</h2>
				</div>
				<div class="workarea">
					<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%">
						<param name="movie" value="media/sims/vis-sim-eliptic.swf" />
						<!--[if !IE]>-->
						<object type="application/x-shockwave-flash" data="media/sims/vis-sim-eliptic.swf" width="100%" height="100%">
							<!--<![endif]-->
							<p>flash animation</p>
							<!--[if !IE]>-->
						</object>
						<!--<![endif]-->
					</object>
				</div>
				<div class="instructions">
					<ul>
						<li>Now  let&rsquo;s put our person a little farther north, and let&rsquo;s find out if there is any  time of the year when the person will see the sun directly overhead at that  location.  Let&rsquo;s put the person in  Washington, DC, which is at about 39o N latitude.</li>
						<li>Go  to the Longitude and Latitude Demonstrator to see which places around the world  are at 39o N latitude. If you start in Washington, DC and follow the  39th parallel [hover-note for &ldquo;parallel&rdquo;] eastward, you come first  to southern Europe, then China, North Korea, Japan, and finally back to the  west coast of the U.S.</li>
						<li>Remember  that all locations on the same line of latitude will experience the sun at the  same maximum height at some time during the day as the earth turns on its axis  to create the day night cycle.</li>
						<li>We&rsquo;re  going to look at four different times of the year, starting with the first day  of winter, then the first day of spring, the first day of summer, and finally  the first day of fall.</li>
						<li>We  want to see what happens to the maximum height of the sun in the sky as the  seasons change from winter to spring, to summer, and then to fall. </li>
						<li>In  the illustration above, our person is in Washington, DC, and it&rsquo;s the first day  of winter in the northern hemisphere. Notice that the North Pole is tilted away  from the sun at this time of year, and the place where the sun is directly  overhead (the yellow dot) is south of the equator, not very close to where our  person is standing.</li>
					</ul>
					<div class="questionBox">
						<form onclick="return false;">
						<ol class="questions">
							<li>What  is the maximum height of the sun in the sky on the first day of winter in the  northern hemisphere at 39o N latitude?  First try to estimate the angle by looking at  the tilt of the arrows in the lower right hand side of the model above. If the  arrows are lying flat, the angle is zero degrees, and if arrows are pointed  straight up and down, the angle is 90 degrees.   If they are tilted but not straight up and down, then the angle is  somewhere between 0 and 90 degrees. After you have tried to estimate the angle,  go to the data tables, and enter Washington, DC as your location and December  22 as your date. <input type="text"></li>
							<li>What is the maximum height in the sky that is shown in the  data table? <input type="text"></li>
						</ol>
						<input type="submit" value="Save My Answers">
						</form>
					</div>
				</div>
			</div>
			<div id="models-motion10" class="activity">
				<div class="header">
					<h2>Sun-Earth Models</h2>
				</div>
				<div class="workarea">
					<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%">
						<param name="movie" value="media/sims/vis-sim-eliptic.swf" />
						<!--[if !IE]>-->
						<object type="application/x-shockwave-flash" data="media/sims/vis-sim-eliptic.swf" width="100%" height="100%">
							<!--<![endif]-->
							<p>flash animation</p>
							<!--[if !IE]>-->
						</object>
						<!--<![endif]-->
					</object>
				</div>
				<div class="instructions">
					<ul>
						<li>In the illustration above, our person is still at 39o  N latitude, but now it&rsquo;s the first day of spring in the northern hemisphere. </li>
						<li>The earth  has moved to a new position in its year-long journey around the sun. Now the  North Pole is no longer pointed away from the sun or toward the sun. </li>
						<li>Notice also that the arrows, which represent the angle  at which the sun&rsquo;s rays hit the earth, are slanted at a different angle now.  They are not quite as flat as they were on  the first day of winter, but they are definitely not straight up and down  either.</li>
						<li>Where would a person see the sun directly overhead?  If you look at the upper right hand portion of  the model above, you can see that the place where the sun is directly overhead  is the equator (also where the yellow dot it). The sun will be directly  overhead in the middle of the day anywhere on the equator on that day as the  earth turns on its axis in its day-long rotation.</li>
					</ul>
					<div class="questionBox">
						<form onclick="return false;">
						<ol class="questions">
							<li>At what angle do the sun&rsquo;s rays strike the earth on  the first day of spring at 39o N latitude? Go to the tables  tab to find out what that angle is.  As  you did before, choose Washington, DC as your location, and choose March 22 as  your date.  What is the maximum angle of  the sun in the sky on March 22, the first day of spring? <input type="text"></li>
						</ol>
						<input type="submit" value="Save My Answers">
						</form>
					</div>
				</div>
			</div>
			<div id="models-motion11" class="activity">
				<div class="header">
					<h2>Sun-Earth Models</h2>
				</div>
				<div class="workarea">
					<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%">
						<param name="movie" value="media/sims/vis-sim-eliptic.swf" />
						<!--[if !IE]>-->
						<object type="application/x-shockwave-flash" data="media/sims/vis-sim-eliptic.swf" width="100%" height="100%">
							<!--<![endif]-->
							<p>flash animation</p>
							<!--[if !IE]>-->
						</object>
						<!--<![endif]-->
					</object>
				</div>
				<div class="instructions">
					<ul>
						<li>In this picture, the earth has continued to move in  its annual journey around the sun so that the north pole is now tilted toward  the sun.</li>
						<li>Now the place where the sun strikes the earth is  pretty close to where our person is standing. In fact, we know from earlier  screens that the sun is directly overhead at locations that are at 23.5o  N latitude, but our person is at 39 o N latitude. </li>
						<li>You can  also see that the angle representing the sun&rsquo;s rays in the picture above is not  quite straight up and down. </li>
					</ul>
					<div class="questionBox">
						<form onclick="return false;">
						<ol class="questions">
							<li>At what angle do the sun&rsquo;s rays strike the earth on  the first day of summer at 39o N latitude? Go to the tables  tab to find out what that angle is.  As  you did before, choose Washington, DC as your location, and choose June 22 as  your date.  What is the maximum angle of  the sun in the sky on June 22, the first day of summer in the northern  hemisphere? <input type="text"></li>
						</ol>
						<input type="submit" value="Save My Answers">
						</form>
					</div>
				</div>
			</div>
			<div id="models-motion12" class="activity">
				<div class="header">
					<h2>Sun-Earth Models</h2>
				</div>
				<div class="workarea">
					<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%">
						<param name="movie" value="media/sims/vis-sim-eliptic.swf" />
						<!--[if !IE]>-->
						<object type="application/x-shockwave-flash" data="media/sims/vis-sim-eliptic.swf" width="100%" height="100%">
							<!--<![endif]-->
							<p>flash animation</p>
							<!--[if !IE]>-->
						</object>
						<!--<![endif]-->
					</object>
				</div>
				<div class="instructions">
					<ul>
						<li>We  will look at one more position of the earth as it moves around the sun. It is  now the first day of fall, and the earth is pointed neither toward nor away  from the sun.</li>
						<li>Notice  that the sun is again directly overhead at the equator and the angle at which  the sun&rsquo;s rays are striking the earth at 39 o N latitude is flatter  than it was in the summer. As we move from summer to fall, the maximum height  of the sun in the sky is lower than it was. Because the angle is flatter, we  sometimes notice that shadows are longer in the fall than in the summer.</li>
					</ul>
					<div class="questionBox">
						<form onclick="return false;">
						<ol class="questions">
							<li>At what angle do the sun&rsquo;s rays strike the earth on  the first day of fall at 39o N latitude? Go to the tables tab  to find out what that angle is.  As you  did before, choose Washington, DC as your location, and choose September 22 as  your date.  What is the maximum angle of  the sun in the sky on September 22, the first day of fall in the northern  hemisphere? <input type="text"></li>
							<li>Now  list the maximum angle that the sun reaches for the four dates that you  explored:
							<ul>
								<li>What is the maximum angle for the first day of  winter? <input type="text"></li>
								<li>What is the maximum angle for the first day of  spring? <input type="text"></li>
								<li>What is the maximum angle for the first day of  summer? <input type="text"></li>
								<li>What is the maximum angle for the first day of  fall? <input type="text"></li>
							</ul>
							</li>
							<li>Do  you think there is any day during the year when the sun is directly overhead at  39o N latitude? <input type="text"></li>
							<li>How  far north can a place be and have the sun be 90 degrees overhead? <input type="text"></li>
						</ol>
						<input type="submit" value="Save My Answers">
						</form>
					</div>
				</div>
			</div>
			<div id="models-motion13" class="activity">
				<div class="header">
					<h2>Sun-Earth Models</h2>
				</div>
				<div class="workarea">
					<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%">
						<param name="movie" value="media/sims/vis-sim-eliptic.swf" />
						<!--[if !IE]>-->
						<object type="application/x-shockwave-flash" data="media/sims/vis-sim-eliptic.swf" width="100%" height="100%">
							<!--<![endif]-->
							<p>flash animation</p>
							<!--[if !IE]>-->
						</object>
						<!--<![endif]-->
					</object>
				</div>
				<div class="instructions">
					<ul>
						<li>Now  let&rsquo;s put our person back at the equator on the first day of summer in the  northern hemisphere.</li>
						<li>Use  the simulator to experiment with different times and places, and observe what  effect the time of year and location have on the angle at which the sun&rsquo;s rays  strike the earth.</li>
						<li>To  keep track of what you are doing, vary just one thing at a time.  For example, keep the person&rsquo;s location  constant and vary the time of year. Then keep the time of year constant and  vary the location. In each case, you will be looking for patterns in how  location and time of year affect the angle of the sun&rsquo;s rays.</li>
						<li>Keep  track of your observations and questions you have in the [Scratch Pad].</li>
						<li>After  you have used the Seasons Simulator to learn how location and time of year  affect the angle of the sun&rsquo;s rays, answer the following questions in the Note  Box.</li>
					</ul>
					<div class="questionBox">
						<form onclick="return false;">
						<ol class="questions">
							<li>What  happens to the maximum height of the sun in the sky as you move farther away  from the tropical zone and closer to the North Pole?</li>
								<li>Is that true all times of the year or just some  times of the year?</li>
							<li>What  happens to the maximum height of the sun in the sky as you move farther away  from the tropical zone and closer to the South Pole?</li>
								<li>Is that true all times of the year or just some  times of the year?</li>
							<li>What  happens to the maximum height of the sun in the sky the farther you are away  from the place where the sun is directly overhead?</li>
							<li>More  questions?</li>
						</ol>
						<input type="submit" value="Save My Answers">
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>
