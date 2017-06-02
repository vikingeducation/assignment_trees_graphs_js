# assignment_graphs_trees
Rise over run.

[A Data Structures and Algorithms Ruby Assignment from the Viking Code School using Trees and Graphs](http://www.vikingcodeschool.com)

What are the advantages and disadvantages of using an Adjacency Matrix vs an Adjacency List relative to size and speed of common operations?
Matrix disadvantage is size, but it is faster if you want to find and edge or insert a new one. List takes much less space, it is fast to locate the list for each vertex (just index into the array). Then, to locate a particular edge, it just requires iterating through the list to the right position. In the worst case, this will take as long as the vertex's degree (the number of edges connected to it). That makes it O(d) speed, which isn't too bad.

What would the Big O be of inserting a new EDGE to:
An Edge List? O(1)
An Adjacency Matrix? O(1)
An Adjacency List? O(1)


What would the Big O be of inserting a new VERTEX to:
An Edge List? O(1)
An Adjacency Matrix? O(1)
An Adjacency List? O(1)


What would the Big O be of REMOVING a vertex or edge from:
An Edge List? O(n)
An Adjacency Matrix?
An Adjacency List?


How would you find all the nodes connected to a particular vertex in:
An Edge List? Loop through the whole list: O(n)
An Adjacency Matrix? First read the index for the first array, then loop through that array, regardless of how many empty cells there are
An Adjacency List? Index an array to locate the list for that vertex and iterate thorugh that list. Fastest.
