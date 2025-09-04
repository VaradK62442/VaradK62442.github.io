Another essay idea I had was to compare several different methods of approximating pi, which I wrote about in <u><a href="https://medium.com/@varadkulk123/methods-of-approximating-pi-d61fcb042ad1" target="_blank" rel="noopener noreferrer">this essay</a></u>.

<br>

I compared 5 different methods, 3 of which were infinite sums and the other two employed randomisation. The methods using infinite sums (the Madhava-Liebniz formula, the Wallis product, and Newton's sum) approached the value of pi very quickly, either by oscillating above and below it or asymptotically approaching it from one side. In 1 million iterations, they were all accurate to 5 decimal places.

<br>

The first random process I simulated was Buffon's needle. This considers the probability of dropping a needle on a floor with parallel strips of wood, and the probability that the needle lands on the edge of a strip of wood. It turns out, this probability involves pi and so we can approximate it by dropping needles on floors. I created a program to simuluate this, and this was the plot generated, with red lines being needles that do not cross an edge, and green lines being needles that do. In 1 million iterations, this method approximated pi to 2 decimal places, much less than the infinite sum methods

<br>

<div style="display: flex; justify-content: center;">
    <img src="/media/buffon.png" width="80%">
</div>

<br>

The second random process I simulated was Monte Carlo. This method considers a square of side length 2, and a circle inscribed within it, which has radius 1. The area of the circle is therefore pi, and the area of the square is 4. If we simulate plotting points within the square and count the points that are within the circle, the ratio of points within the circle to total points should be pi / 4 as the total number of points approaches infinity. This is quite straightforward to simulate, and within 1 million iterations, this approach estimated pi to 3 decimal places.

<br>

<div style="display: flex; justify-content: center;">
    <img src="/media/monteCarlo.png" width="80%">
</div>