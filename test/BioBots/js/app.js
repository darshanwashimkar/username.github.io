var jqxhr = $.getJSON( "http://darshanwashimkar.github.io/test/BioBots/bioprint-data.json", function() {
  console.log( "success" );
})
  .done(function() {
    console.log( "second success" );
  })
  .fail(function() {
    alert("Hello! I am an alert box!!");
    console.log( "error" );
  })
  .always(function() {
    console.log( "complete" );
  });
 
// Perform other work here ...
 
// Set another completion function for the request above
jqxhr.done(function() {
  console.log( "second complete" );
});