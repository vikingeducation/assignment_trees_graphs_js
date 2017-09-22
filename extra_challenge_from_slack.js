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