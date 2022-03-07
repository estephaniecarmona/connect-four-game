def shortest_num(arr):
  min_array = [x for x in arr if '+' != x  and '-' != x]
  shortest_string = min(min_array, key=len)
  return shortest_string


def find_operator(arr):
  plus = '+'
  minus = '-'
  if plus in arr:
    return plus
  if minus in arr:
    return minus

def not_in_my_string(arr):
  if find_operator(arr) == None:
    return "Error: Operator must be '+' or '-'."

def no_long_problems(problems):
  length_of_problems = len(problems)
  if length_of_problems >= 6:
    return "Error: Too many problems."

def no_digits_longer_than4(arr):
  length_of_each_string = len(arr[0])
  length_of_each_string = len(arr[1])
  length_of_each_string = len(arr[2])
  if length_of_each_string >= 5:
    return "Error: Numbers cannot be more than four digits."

def no_letters(arr):
  numbers_only = arr[0].isnumeric()
  numbers_only = arr[2].isnumeric()
  if numbers_only is False:
    return "Error: Numbers must only contain digits."

def solve_the_problem(arr):
  
  if '+' == arr[1]:
   result = int(arr[0]) + int(arr[2])
  elif '-' == arr[1]:
    result = int(arr[0]) - int(arr[2])
  print(result)
  return result
  
    
  

  
def arithmetic_arranger(problems, should_solve = False):

  top_string = ""

  bottom_string = ""

  dash_string = ""

  result_string = ""

  join_strings = ""

  if no_long_problems(problems):
    return no_long_problems(problems)


  for x in problems:

    arr = x.split()
    print(arr)

    if not_in_my_string(arr):
      return not_in_my_string(arr)

    if no_digits_longer_than4(arr):
      return no_digits_longer_than4(arr)

    if no_letters(arr):
      return no_letters(arr)

    #if solve_the_problem(arr):
     # return solve_the_problem(arr)
      
    longest_string = max(arr, key=len)
    #print(longest_string)
    #longest string in array

    total_chars_count = len(longest_string) + 2
    #print(total_chars_count)
    #length of the longest string in array

    operator = find_operator(arr)
    #print(operator)
    #operator

    short_num = shortest_num(arr)
    #print(short_num)
    #shortest number in array

    shortnum_spaces = total_chars_count - len(short_num)
    #print(shortnum_spaces)

    top_number = arr[0]
    #print(top_number)

    bottom_number = arr[2]
    #print(bottom_number)

    spaces_for_top = total_chars_count - len(top_number)
    #print(spaces_for_top)

    spaces_for_bottom = total_chars_count - len(bottom_number)
    #print(f"spaces for bottom <{spaces_for_bottom}>")

    add_spaces_to_top = arr[0].rjust(total_chars_count, " ")
    #print(add_spaces_to_top)

    add_spaces_to_bottom = arr[2].rjust(total_chars_count - 1, " ")
    #print(add_spaces_to_bottom)

    add_spaces_to_second_top = "".rjust(4, " ")
    #print(add_spaces_to_second_top)

    top_string += add_spaces_to_top + add_spaces_to_second_top
    print(top_string)
    
    
    if problems[-1] == x:
      top_string = top_string.rstrip()
      
      print(top_string)
      print(bottom_string)
    

    bottom_string += operator + add_spaces_to_bottom
    bottom_string += "".ljust(4, " ")
    print(bottom_string)
    
    if problems[-1] == x:
      bottom_string = bottom_string.rstrip()
      print(bottom_string)

    dash_string += "".rjust(total_chars_count, "-")
    dash_string += "".ljust(4, " ")
    print(dash_string)

    if problems[-1] == x:
      dash_string = dash_string.rstrip()
      print(dash_string)

    if should_solve:
      result_string += str(solve_the_problem(arr)).rjust(total_chars_count, " ")
      result_string += "".ljust(4, " ")
      
    if problems[-1] == x:
      result_string = result_string.rstrip()
      # result_string += 
      
      
      print(result_string)

    if should_solve:
      join_strings = "\n".join([top_string, bottom_string, dash_string, result_string])
    else:
      join_strings = "\n".join([top_string, bottom_string, dash_string])


  return join_strings

  #not_in_my_string(problems)
    

