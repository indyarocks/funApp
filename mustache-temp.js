var mustache = require("mustache");

result = mustache.render("Hello {{first_name}} {{last_name}}", 
  {
    "first_name": 'Chandan',
    "last_name": 'Jhunjhunwal'
  }
)

console.log(result)
