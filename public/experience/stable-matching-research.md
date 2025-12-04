During my third year, I undertook a research project under the supervision of Dr. Sofiat Olaosebikan, working on Stable Matching and matching problems generally. I start off by looking at the Student Project Allocation (SPA) problem, which aims to find a stable matching of students with projects provided by lecturers.

<br>

As my first task, I implemented the lecturer-oriented version of the SPA algorithm, which optimises matchings based on lecturer preferences, as opposed to the student-oriented version which optimises matchings based on student preferences. This was built on top of my supervisor's implementation, which can be found <u><a href="https://github.com/VaradK62442/spa-s" target="_blank" rel="noopener noreferrer">here</a></u>. I also built up code to analyse the "happiness" of a student - namely if a student can get a better project by lying. As expected, the student-optimal version of the algorithm does not increase the happiness for a student if they lie. However, I found that lecturers can improve the student they are assigned by lying about their preferences.

<br>

To verify the correctness of the implementation, I implemented a method to generate several instances, run a brute-force method to generate stable matchings, and check that the implementation outputted the correct matching.

<br>

To further this research, we decided to implement several matching algorithms and publish these as a Python package called <u><a href="https://pypi.org/project/algmatch/" target="_blank" rel="noopener noreferrer">algmatch</a></u> on <b>PyPI</b>, the repository for which can be found <u><a href="https://github.com/VaradK62442/algmatch" target="_blank" rel="noopener noreferrer">here</a></u>. A colleague and I took on this development, implementing the Stable Marriage, Hospital Residents, and Student Project Allocation algorithms in this package. This was worked on alongside a research paper more focused on the theoretical side, where we were working on creating an algorithm and proving properties about it for the SPA-ST-Strong problem (Student Project Allocation, student-oriented with ties allowed in preference lists, aiming for a strongly stable matching, which is a stronger set of conditions than just stable matching).

<br>

During this development and research, I additionally worked on a related machine learning problem. There is another variation of the SPA problem, SPA-P which has student and lecturer preferences over projects (whereas in other SPA problems, lecturer preferences are over students). The aim of this research topic was to construct a neural network to solve this problem, since the problem has been shown to be NP-hard.

<br>

To train the neural network, my task was to generate instances and solutions of the problem that would be realistic, i.e. model real-world data. To achieve this, I implemented an <b>Integer Programming (IP)</b> constraint model using <u><a href="https://www.gurobi.com/" target="_blank" rel="noopener noreferrer">Gurobi</a></u> to solve generated instances. To generate instances, I initially followed a completely randomised approach, where all preference lists were uniformly random. However, we saw that this lead to a neural network model that did not perform well since it overfit to the data. We reasoned that this was due to the lack of structure in the dataset, and therefore it was an inappropriate model of real world data.

<br>

To remedy this, I researched into different instance generation methods. I read a <u><a href="https://www.jair.org/index.php/jair/article/view/15213/27027" target="_blank" rel="noopener noreferrer">paper</a></u> on instance generation methods for the stable marriage problem, and adapted the methods discussed for Student Project Allocation. The paper constructs a pseudo-metric on instances and compares different instance generation methods by building a map of instances and identifying where in the map instance generation methods tend to create instances. I constructed a similar pseudo-metric on SPA-P instances and analysed as well as implemented several different instance generation methods.

<br>

The general approach to each new instance generation method was to uniformly sample a point from some n-dimensional space, and to use Euclidean distance to sort projects into preference lists. We found that in isolation these different instance generation methods were slightly better than fully random instances, however in combination these instance generation methods created a very accurate model that was not overfit to the data.