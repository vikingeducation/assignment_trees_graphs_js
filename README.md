# assignment_graphs_trees
Rise over run.

[A Data Structures and Algorithms Ruby Assignment from the Viking Code School using Trees and Graphs](http://www.vikingcodeschool.com)

1. What are the advantages and disadvantages of using an Adjacency Matrix vs an Adjacency List relative to size and speed of common operations?
An Adjacency Matrix is very expensive in size requirements since lots of null data can remain when unused. An Adjacency List doesn't leverage an Array's powerful read ability, but sacrifices it in order to save space by using economic linked lists. So an Adjacency List is slower and smaller, and an Adjacency Matrix is quicker and bigger.

2. What would the Big O be of inserting a new EDGE to:
  An Edge List? O(1)
  An Adjacency Matrix? O(1)...? Look up "from" index is constant time. "to" index, same.
  An Adjacency List? O(n)
3. What would the Big O be of inserting a new VERTEX to:
  An Edge List? O(1), just insert it.
  An Adjacency Matrix? O(n) or O(n^2). First you need to add it at end of matrix. Then, you need to go through all the other "rows" in the matrix and add it to each matrix as well. Depending on how arrays are implemented in your language, this can be as quick as O(n) (iterating through each row and add it at end) or O(n^2) (if you need to iterate through array to reach the end for each row).
  An Adjacency List? O(1). Just initialize a new linked list at the desired index.
4. What would the Big O be of REMOVING a vertex or edge from:
  An Edge List? O(n). 
  An Adjacency Matrix? O(n^2). You need to rebuild the entire matrix.
  An Adjacency List? O(n), maybe O(n^2). Remove the vertex as a "from" edge in the main list. Iterate through each row, and remove the vertex as a "to" edge in any corresponding locations.
5. How would you find all the nodes connected to a particular vertex in:
  An Edge List? Iterate through the array and see if any node matches the given vertex. O(n)
  An Adjacency Matrix? As a from vertex, simply go to the corresponding location, then record everything that is not a null value. As a to vertex, iterate through all the other rows, and record whenever the "to" vertex matches the given vertex. O(n^2).
  An Adjacency List? As a from vertex, go to the corresponding location, and record everything in the linked list. Then, iterate through all the other rows and see if a "to" vertex matches the given vertex. O(n^2).
