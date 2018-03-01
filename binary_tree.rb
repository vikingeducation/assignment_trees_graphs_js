require 'awesome_print'
require 'pry'
# Your job is to build a Binary Search Tree out of a simple array of data and then display it to the screen.

# Build your tree from the array.
# Verify that the tree works by outputting it in the simplest possible fashion and inspecting that output for accuracy. You might try copying the inspect output of your tree into a text editor and manually formatting it properly.
# (Optional) Clean up the output to show a prettier tree like the one below (this is actually pretty challenging)

# Your tree:
#           8
#       /       \
#     3          10
#  /      \         \
# 1        6         14
#       /    \      /
#      4      7   13


class Node
  attr_accessor :value, :right_pointer, :left_pointer
  def initialize(value)
    @value = value
    @left_pointer = nil
    @right_pointer = nil
  end
end

# Struct.new("Node", :value, :left_pointer, :right_pointer)

class BinaryTree
  def initialize(values)
    @root_node = nil
    generate_nodes(values)
    assign_nodes
    print_tree(@root_node)
  end

  def generate_nodes(values)
    @unassigned_nodes = values.map do |value|
      # Struct::Node.new(value)
      Node.new(value)
    end
  end

  def assign_nodes
    current_node = @unassigned_nodes.shift

    if @root_node == nil
      @root_node = current_node
    end

    @unassigned_nodes.each do |node|
      # if the child node pointer is empty
      if node.value < current_node.value && current_node.left_pointer == nil
        current_node.left_pointer = node
      elsif node.value > current_node.value && current_node.right_pointer == nil
        current_node.right_pointer = node

      # if the left_pointer is occupied
      # - and the node is greater than the exising left_pointer
      elsif node.value < current_node.value && node.value > current_node.left_pointer.value
        current_left_node = current_node.left_pointer
        node.left_pointer = current_left_node
        current_node.left_pointer = node

      # if the left_pointer is occupied
      # - and the node is less than the exising left_pointer
      elsif node.value < current_node.value && node.value < current_node.left_pointer.value
        assign_nodes
        # p "#{node.value} i've got to go further down the left side"


      # if the right_pointer is occupied
      # - and the node is greater than the exising right_pointer
      elsif node.value > current_node.value && node.value > current_node.right_pointer.value
        assign_nodes
        # p "#{node.value} i've got to go further down the right side"

      # if the right_pointer is occupied
      # - and the node is less than the exising left_pointer
      elsif node.value > current_node.value && node.value < current_node.right_pointer.value
        current_right_node = current_node.right_pointer
        node.right_pointer = current_right_node
        current_node.right_pointer = node
      else
        p "this is werid and should never happen"
      end
    end #unassigned

  end#assign_nodes

  def assign_left_node(current_node, new_node)
    current_node.left_pointer = new_node
  end

  def assign_right_node(current_node, new_node)
    current_node.right_pointer = new_node
  end

  def print_tree(node)
    binding.pry
    p @root_node
  end
end

binary_tree = BinaryTree.new([8, 10, 3, 1, 6, 14, 4, 7, 13]);



