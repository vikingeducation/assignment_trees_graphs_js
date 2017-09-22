# assignment_graphs_trees
Rise over run.

Name: Eric and Alex

[A Data Structures and Algorithms Ruby Assignment from the Viking Code School using Trees and Graphs](http://www.vikingcodeschool.com)

------      FINAL THOUGHTS        ------

What are the advantages and disadvantages of using an Adjacency Matrix vs an Adjacency List relative to size and speed of common operations?

Adj Matrix:
Space Complexity : O(n^2)
Time Complexity:
  Access O(1)
  Updating O(1)
  Inserting O(1)
  Sorting: SortComplexity & O(n^2)

Adj List:
Space Complexity : O(n), where n is your vertices
Time Complexity:
  Access: O(e)
  Updating: O(e)
  Inserting: O(1), if your list has a tail reference
  Sorting: SortComplexity & O(e)

Edge List:
Space Complexity : O(e)
Time Complexity:
  Access: O(e)
  Updating: O(e)
  Edge Inserting: O(1)
  Vertex Inserting: O(1)
  Sorting: SortComplexity O(nlog(n))




What would the Big O be of inserting a new EDGE to:
An Edge List?
An Adjacency Matrix?
An Adjacency List?
What would the Big O be of inserting a new VERTEX to:
An Edge List?
An Adjacency Matrix?
An Adjacency List?
What would the Big O be of REMOVING a vertex or edge from:
An Edge List?
An Adjacency Matrix?
An Adjacency List?
How would you find all the nodes connected to a particular vertex in:
An Edge List?
An Adjacency Matrix?
An Adjacency List?
