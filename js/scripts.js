$(document).ready(function(){
  $("#col1rw1").click(function(){
    $(this).text($(this).text() == 'Javascript' ? 'Javascript is the programming language of HTML and the Web.' : 'Javascript');
  });
  $("#col1rw2").click(function(){
    $(this).text($(this).text() == 'Operators' ? 'JavaScript operators are used to assign values, compare values, perform arithmetic operations, and more.' : 'Operators');
  });
  $("#col1rw3").click(function(){
    $(this).text($(this).text() == 'Variables' ? 'Variables are containers for storing data values.' : 'Variables');
  });
  $("#col1rw4").click(function(){
    $(this).text($(this).text() == 'Variable Naming Conventions' ? 'JavaScript guidelines rules for variable naming and declaration.' : 'Variable Naming Conventions');
  });
  $("#col2rw1").click(function(){
    $(this).text($(this).text() == 'Functions' ? 'A block of code designed to perform a particular task' : 'Functions');
  });
  $("#col2rw2").click(function(){
    $(this).text($(this).text() == 'Strings' ? 'A JavaScript string stores a series of characters like' : 'Strings');
  });
  $("#col2rw3").click(function(){
    $(this).text($(this).text() == 'Methods' ? 'JavaScript methods are actions that can be performed on objects.' : 'Methods');
  });
  $("#col2rw4").click(function(){
    $(this).text($(this).text() == 'Arguments' ? 'Values passed to the function when it is invoked.' : 'Arguments');
  });
  $("#col3rw1").click(function(){
    $(this).text($(this).text() == 'Parameters' ? 'Variables listed as a part of the function definition.' : 'Parameters');
  });
  $("#col3rw2").click(function(){
    $(this).text($(this).text() == 'Return' ? 'Return statement stops the execution of a function and returns a value from that function.' : 'Return');
  });
  $("#col3rw3").click(function(){
    $(this).text($(this).text() == 'Chaining methods' ? 'Repeatedly calling one method after another on an object, in one continuous line of code.' : 'Chaining methods');
  });
  $("#col3rw4").click(function(){
    $(this).text($(this).text() == 'Booleans' ? 'Boolean data type. It can only take the values true or false.' : 'Booleans');
  });
})
