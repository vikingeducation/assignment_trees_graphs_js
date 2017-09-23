# assignment_graphs_trees
Rise over run.

[A Data Structures and Algorithms Ruby Assignment from the Viking Code School using Trees and Graphs](http://www.vikingcodeschool.com)

Benny and Will

## Questions
1. What are the advantages and disadvantages of using an Adjacency Matrix vs an Adjacency List relative to size and speed of common operations?

    Adjacency matrices waste a lot of space unless you a highly connected graph. Lists are slow to look up on highly connected graphs since the linked lists get really long.

2. What would the Big O be of inserting a new EDGE to:
    1. An Edge List?
        O(1)
    2. An Adjacency Matrix?
        O(1)
    3. An Adjacency List?
        O(1)
3. What would the Big O be of inserting a new VERTEX to:
    1. An Edge List?
        O(1)
    2. An Adjacency Matrix?
        O(n)
    3. An Adjacency List?
        O(1)
4. What would the Big O be of REMOVING a vertex or edge from:
    1. An Edge List?
        O(V + E)
    2. An Adjacency Matrix?
        Edge: O(1), Vertex: O(n)? O(n^2)?
    3. An Adjacency List?
        O(V + E)
5. How would you find all the nodes connected to a particular vertex in:
    1. An Edge List?
        Filter the whole list
    2. An Adjacency Matrix?
        Check the appropriate row and column
    3. An Adjacency List?
        Check the appropriate linked list
