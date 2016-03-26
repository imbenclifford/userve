$( document ).ready(function() {

    $( "#search" ).submit(showResults);

    function showResults () {
        $( "#results" ).html( "Loading search results..." );
        var searchTerm = $( "#searchBar" ).val();
        $.ajax({
            url: "http://localhost:9200/article/wikipedia,khan/_search\?pretty\=true\&size\=20\&q\=\\*\\:" + searchTerm
        }).done(function( data ) {
            var results = data.hits.hits;
            console.log(results);
            if (results[0]) {
                var searchResultsHtml = "<ul class='results-list'>";
                for (var i = 0; i < results.length; i++) {
                    searchResultsHtml += "<li><a href='";
                    searchResultsHtml += results[i]._source.url + "' target='_blank'> ";
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

        }).fail(function ( error ) {
            console.log('There was a problem, please try again. If this problem persist, please email: ');
        });
    }

});
