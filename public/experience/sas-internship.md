During the summer of 2025 I undertook a summer internship at SAS in which I developed a live dashboard solution using React and additionally worked on writing automation tests. I am currently working for SAS part-time throughout the semester. I worked on an internal website builder that provides a drag-and-drop solution to allow clients to build websites with very little code. The builder has several components such as buttons, charts, etc. and the client can extend the functionality of these components by writing interaction code using a very minimal and easy programming language.

<br>

During my time at SAS, I first started on writing automation tests for this builder using the <u><a href="https://playwright.dev/python" target="_blank" rel="noopener noreferrer">Playwright</a></u> package in Python. This got me very familiar with the app since I could try to find out why a test was failing by looking through the React codebase for the website. When I was more comfortable with React and the main codebase, I moved on to my main project, while still continuing to work on automation testing on the side.

<br>

As for the main project during my internship, I was tasked to make a live dashboard component that would report on data and allow for filtering in multiple ways. Such a dashboard already exists in the SAS ecosystem, however it is not live, so my task was to leverage the API to create a component that would fetch data live whenever the user requested it and filtered it, so that what the user saw was always up-to-date.

<br>

During this development, I realised a library could be developed to make this development process much easier and cleaner for future clients who wanted to implement a dashboard since I was writing very repetitive interaction code which could be abstracted and implemented as library functions. During my development, I pitched this idea and was able to start implementing it once I had finished making a proof of concept for the dashboard.

<br>

I explored multiple different areas of the codebase while working on this - I had to understand and learn a lot about the API such as the endpoints that were available to me, the limitations it had, and how best to get the data I wanted; I implemented several new features in the front-end such as making charts and display cards easier to use as well as allowing for better display in a dashboard setting; additionally, I worked on the interaction code libraries, not only implementing the library mentioned above, but also ammending, adding to, and fixing bugs in several other existing libraries.