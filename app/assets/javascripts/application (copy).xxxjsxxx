// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require_tree .
var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/IE/EUR/en-GB/?query=UNITED%20KINGDOM",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
		"x-rapidapi-key": "50463a45f8msh0d730a427fdb563p1f575fjsn745ac84f7287"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});
<div class="container">
  <div class="row">
    <div class="col-lg-12 mt-5">
      <div class="mx-auto mt-5" style="width: 400px">
        <%= form_with(url: search_path, method: 'get', local: true) do %>
          <div class="form-group">
            <%= label_tag :country, 'Search for a country '%>
            <%= text_field_tag :country, nil, placeholder: 'Eg. Germany', class: 'form-control' %>
          </div>
          <%= button_tag 'Search', class: 'btn btn-success btn-block' %>
        <% end %>
      </div>
    </div>
  </div>
</div>
test

var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/IE/EUR/en-GB/?query=UNITED%20KINGDOM");
xhr.setRequestHeader("x-rapidapi-host", "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "50463a45f8msh0d730a427fdb563p1f575fjsn745ac84f7287");

xhr.send(data);



fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/IE/EUR/en-GB/?query=UNITED%20KINGDOM", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
		"x-rapidapi-key": "50463a45f8msh0d730a427fdb563p1f575fjsn745ac84f7287"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});