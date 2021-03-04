## Project 1 – Playlist
#### by An Duong


### Overview
The intended audience for this project is for young adults or older teenagers (28-18). The questions asked are mainly pop culture. This state machine is not limited to any sites and is used for entertainment purposes. However, a home would make the most sense for this to be interacted with the most.

This is a state machine project that will allow the user to answer a series of questions and output an array of songs (‘playlist’), Each question will lead to a different set of questions resulting in not only a non-linear, but essentially exponential navigation. Each question will depend on the one before it and the last question will lead to an auto-generated playlist.



### Technical Aspects
Local and global variables are implemented. 

There is a drawHover() function added to the option texts. 

Long series of text and images are set to string arrays that use for loops to iterate through. 

The function drawStarBackground() randomizes stars in the background of the pages with the frameRate(5). 

The drawTitle() function iterates through title[] string and randomizes postion of the word on the screen. 

mousePressed() and keyPress() are both utilized.