/*
String Permutations Tree

Devise a class that when instantiated it creates a tree that maps out all of the possible permutations of a given string.

- The root node will have a value of `undefined`
- The direct children of the root node will be each char of the string
- This pattern will continue until it maps out each unique permutation of the string
- Your class should be able to create a permutations tree for (theoretically) any length string
- Assume that all characters in the string are unique

1) Create a `Node` class to represent your nodes
2) Create the `PermutationTree` class that builds the tree given a string as input
3) BONUS! Create a `.prettyPrint()` method on your `PermutationTree` class that outputs the tree in a well formatted and readable style. Below is an example of what a tree might look like for the string `'abc'`

*/

/*

                   undefined
                       |

      a                b              c
  b      c          a     c         a    b
c          b      c         a     b        a

*/

/*


Adjacency Matrix/List (Josephus-Like) Problem
Inspiration:
https://en.wikipedia.org/wiki/Josephus_problem

Take a group of twenty people with different names, let's use these:

- Aiden
- Aria
- Ava
- Caden
- Charlotte
- Elijah
- Emma
- Ethan
- Isabella
- Jackson
- Liam
- Lucas
- Mason
- Mia
- Noah
- Oliver
- Olivia
- Riley
- Sophia
- Zoe

Now imagine they are all in a circle. The game will start with a random person.

1) Decide a direction (clockwise/counter-clockwise, forward or reverse) to travel in the circle. Use that direction for all iterations
2) Decide an ODD number `n` to use as the distance that person will travel in that direction. The number should be 3 or higher to make things interesting. The number cannot be `5`!! Start with `3` to keep things simple, then try `7`... etc...
3) Select a random person and begin moving that person in the chosen direction around the circle
4) When the person gets to the nth (selected number `n`) person in that direction they will shake that person's hand
5) Then that person will start from that position and continue around the circle to the next nth person and do the same
6) Continue this process until the first person's hand is shook `n` (the chosen number) times
7) Create both an adjacency matrix and adjacency list to represent the handshakes that took place where the weight is the number of handshakes
8) Create a `.prettyPrint()` method for both your adjacency list and adjacency matrix that outputs them in a nicely formatted style to view the results


*/