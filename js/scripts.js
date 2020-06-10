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
})
