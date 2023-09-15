const urlBacon = "https://jsonplaceholder.typicode.com/todos/1";
(function() {
    $.ajax({
            method: "GET",
            url: urlBacon,
            dataType: "json"
        })
        .done(function(data) {
            console.log(data);
            document.getElementById('text').value = data.title
            console.log(data.title);
        })
        .fail(function() {
            alert("no good");
        });
})()