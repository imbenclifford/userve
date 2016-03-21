$( document ).ready(function() {

    // TODO: also run on form submit so users can just hit enter
    $( "#searchButton" ).click(showResults);

    function showResults () {
        $( "#results" ).html( "Loading results..." );
        var searchTerm = $( "#searchBar" ).val();
        $.ajax({
            url: "http://localhost:9200/article/wikipedia,khan/_search\?pretty\=true\&q\=\\*\\:" + searchTerm,
            success: function( data ) {
                var results = data.hits.hits;
                if (results[0]) {
                    var searchResultsHtml = "<ul>";
                    for (var i = 0; i < results.length; i++) {
                        searchResultsHtml += "<li><a href='";
                        searchResultsHtml += results[i]._source.url + "'> ";
                        searchResultsHtml += results[i]._source.title + "</a>";
                        if (results[i]._type === "khan") {
                            searchResultsHtml += " | Khan Academy";
                        } else if (results[i]._type === "wikipedia") {
                            searchResultsHtml += " | Wikipedia";
                        }
                        if (results[i]._source.summary) {
                            searchResultsHtml += "<br> " + results[i]._source.summary.substring(0, 200) + "&hellip; </li>";
                        }
                        if (i === results.length - 1) {
                            searchResultsHtml += "</ul>";
                        }
                    }
                    $( "#results" ).html( searchResultsHtml );
                } else {
                    $( "#results" ).html("No results found");
                }
                console.log(results[0]);

            }
        });
    }

});
