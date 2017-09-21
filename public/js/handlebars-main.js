var body = document.getElementsByTagName("body");

var template = body.Handlebars.compile(body);

var data = template({
  Team1: "Honestly",
  Team2: "Method"
})
