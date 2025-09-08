Contributing to the University of Glasgow's Racing team (UGRacing) has been my defining project and I have thoroughly enjoyed putting long hours and tons of effort into it. I joined the Driverless subteam at the start of my second year and have loved every moment of it. It has greatly grown both my hard and soft skills - in programming, team work, leadership, presenting skills, problem solving, and much more.

<br>

<div style="display: flex; justify-content: center;">
    <img src="/media/ugr_dv.jpg" width="60%">
</div>

<br>

At the start of my third year, I was promoted to <b>Head Software Engineer</b> - I was in charge of overseeing the technical side of the team and worked alongside the Head of Driverless (in charge of the administrative side), sub-team heads, and other team members both in Driverless and other branches of UGR. Throughout my time in this position I conducted monthly retrospectives with the sub-team heads; held weekly meetings with both the management and full team; talked to sponsors; presented and exhibited at open days, tech summits, and other events; planned and managed testing days; took charge of dynamic events at the competition; and accomplished much more while having an absolutely amazing experience spending time working on such a massive passion project with other like-minded and talented individuals. It has been an unforgettable experience and this will forever be a project I cherish.

<br>

<div style="display: flex; justify-content: center;">
    <video width="70%" controls>
        <source src="/media/autocross.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
</div>

<br>

The Driverless side of UGRacing creates driverless software for an autonomous driving system to compete at the <u><a href="https://www.imeche.org/events/formula-student" target="_blank" rel="noopener noreferrer">Formula Student UK (FSUK)</a></u> competition, specifically the <u><a href="https://www.imeche.org/events/formula-student/team-information/fs-ai" target="_blank" rel="noopener noreferrer">FS-AI</a></u> section. We achieved <b>3rd place</b> overall out of 26 international teams in my year as Head Software Engineer. The FS-AI competition comprises 4 static events and 4 dynamic events. The static events are presentations to a panel of judges on our design approach throughout the year, the simulation development process throughout the year, a business plan presentation, and a real-world AI presentation. The dynamic events are where the car actually races around a track. The 4 dynamic events are acceleration (a long straight track); skidpad (a figure of 8); autocross (one lap around an unseen track); and trackdrive (10 laps around an unseen track).

<br>

<div style="display: flex; justify-content: center;">
    <img src="/media/ugr_car.jpeg" width="60%">
</div>

<br>

As for the technical details of the software, we use <u><a href="https://www.ros.org/" target="_blank" rel="noopener noreferrer">ROS2</a></u> as our main framework to allow communication between sensors. We use a <u><a href="https://www.stereolabs.com/en-gb" target="_blank" rel="noopener noreferrer">ZED</a></u> camera, and a <u><a href="https://www.robosense.ai/en/IncrementalComponents/Helios" target="_blank" rel="noopener noreferrer">32 Laser LiDAR</a></u> as our main sources of perception. We additionally integrated a <u><a href="https://www.u-blox.com/en/product/c94-m8p" target="_blank" rel="noopener noreferrer">Differential GPS (DGPS)</a></u> to provide accurate position estimates. We have several ROS nodes in areas of perception, path planning, and control to coordinate information and data, and finally send drive commands to the car. We also employ several different simulators to ensure correctness and reliability of our algorithms. One of my favourite parts of this year was getting to work with and integrate all of these sensors into our system, especially since the LiDAR and DGPS were new, so it was very interesting to be able to play around with them to learn about how they worked and how to best fit them in to the existing software architecture.

<br>

<div style="display: flex; justify-content: center;">
    <img src="/media/sensor_plate.jpeg" width="60%">
</div>

<br>

I've worked with several algorithms and ideas through my time, some of my favourites have been <u><a href="https://en.wikipedia.org/wiki/Extended_Kalman_filter" target="_blank" rel="noopener noreferrer">Extended Kalman Filters</a></u>; computer vision using <u><a href="https://opencv.org/" target="_blank" rel="noopener noreferrer">OpenCV</a></u> and other methods; sensor integration with the DGPS, the LiDAR, and using the <u><a href="https://www.stereolabs.com/en-gb/developers/release" target="_blank" rel="noopener noreferrer">ZED SDK</a></u> for the binocular camera; control algorithms such as a <u><a href="https://en.wikipedia.org/wiki/Proportional%E2%80%93integral%E2%80%93derivative_controller" target="_blank" rel="noopener noreferrer">PID controller</a></u> and much more. Working with these algorithms and technologies has grown my love of robotics and I've enjoyed working at the intersection of software and hardware.