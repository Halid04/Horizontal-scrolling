#My Journey to Becoming a Web Developer: Project 1 - Horizontal-scrolling
This code creates a horizontally scrolling website with a fixed header text and multiple background colors. The header text is positioned in the center of the page and has a defined width, font size, color, and background color. The background colors are contained within separate div elements and are stacked within a parent container element to create a continuous scrolling effect.

The body and html elements have a width and height of 100% and a margin of 0 to ensure that the website takes up the full screen. The container element is set to have a height and width of 100% and has its overflow property set to hidden to prevent any unwanted vertical scrolling.

The .bg class is used to define the aspect ratio of the background elements and their height. The .one, .two, etc. classes define the individual background colors.

The JavaScript code is used to create the horizontal scrolling effect. An event listener is attached to the container element that listens for a wheel event (i.e. mouse wheel or trackpad scroll). The preventDefault method is used to stop the default behavior of the browser (in this case, vertical scrolling) and the scrollLeft property is adjusted by the deltaY value of the event to achieve the horizontal scrolling effect.
