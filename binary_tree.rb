require 'awesome_print'
require 'pry'
# Your job is to build a Binary Search Tree out of a simple array of data

# Your tree:
#           8
#       /       \
#     3          10
#  /      \         \
# 1        6         14
#       /    \      /
#      4      7   13


# Use a struct instead of a class because we don't
# need all of the trappings of a class
Struct.new("Node", :value, :left_pointer, :right_pointer)

class BinaryTree
  def initialize(values)
    @root_node = nil
    generate_nodes(values)
    assign_nodes
    print_tree(@root_node)
  end

  def generate_nodes(values)
    @unassigned_nodes = values.map do |value|
      Struct::Node.new(value)
    end
  end


  def assign_nodes
    @root_node = @unassigned_nodes.shift

    @unassigned_nodes.each do |incoming_node|
      # start at the top of the tree for each new number
      @current_node = @root_node
      if incoming_node.value < @current_node.value # go to the left
        assign_left(incoming_node)
      else # incoming_node.value > @current_node.value # go to the right
        assign_right(incoming_node)
      end
    end
  end#assign_nodes


  def print_tree(node)
    # this does not actually print the tree, it just
    # shows the breakdown in pry
    binding.pry
    p @root_node
  end

  private

  def assign_left(incoming_node)
    if @current_node.left_pointer == nil
      # assign the current node to the pointer
      @current_node.left_pointer = incoming_node
    elsif incoming_node.value < @current_node.left_pointer.value
      # shift current node down and to the left
      # because we're moving down the tree, evaluating the
      # node that's currently in this position
      @current_node = @current_node.left_pointer
      assign_left(incoming_node)
    else # incoming_node > current
      # shift current node down and to the left
      # because we're moving down the tree, evaluating the
      # node that's currently in this position
      @current_node = @current_node.left_pointer
      assign_right(incoming_node)
    end
  end

  def assign_right(incoming_node)
    if @current_node.right_pointer == nil
      # assign the current node to the right pointer
      @current_node.right_pointer = incoming_node
    elsif incoming_node.value > @current_node.right_pointer.value
      # shift current node down and to the right
      # because we're moving down the tree, evaluating the
      # node that's currently in this position
      @current_node = @current_node.right_pointer
      assign_right(incoming_node)
    else
      # shift current node down and to the right
      # because we're moving down the tree, evaluating the
      # node that's currently in this position
      @current_node = @current_node.right_pointer
      assign_left(incoming_node)
    end
  end
end

binary_tree = BinaryTree.new([8, 10, 3, 1, 6, 14, 4, 7, 13]);
