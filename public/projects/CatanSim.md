I really enjoyed the game of Catan when I first played it and immediately thought there must be some interesting analysis to be performed given the game's design. I had an idea to analyse resource distribution for Catan, and wrote about it in this <u><a href="https://medium.com/@varadkulk123/an-analysis-of-resource-dsitribution-in-catan-d8d91b518e71 target="_blank" rel="noopener noreferrer"">essay</a></u>.

<br>

To aid in this essay, I developed a simulation of the board game using Python. The simulation involves randomly setting up the board, assigning the tokens according to the rulebook, and displaying the board. I used <u><a href="https://docs.python.org/3/library/tkinter.html" target="_blank" rel="noopener noreferrer">tkinter</a></u> for drawing the board since that was being taught in my courses at the time, and it was a fun experience to derive the equations for drawing a hexagon, and then translate them into code.

<br>

<div style="display: flex; justify-content: center;">
    <img src="/media/catan.png" width="60%">
</div>

<br>

I then had the program simulate several million boards, and keep track of the number of times each resource was generated, and plot this data. As expected, it's a very uniform distribution with the resources that have more tiles being generated more.

<br>

<div style="display: flex; justify-content: center;">
    <img src="/media/catanRes.png" width="60%">
</div>