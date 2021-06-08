$("#create_player").submit(function(e){
    alert("Player successfully created!");
    window.location.replace("/start");
})

$("#update_player").submit(function(e){
    e.preventDefault();

    var player_Arr = $(this).serializeArray();
    var data = {}

    $.map(player_Arr, function(n, i){
        data[n['name']] = n['value']
    })
    console.log(data);


    var request = {
        "url" : `http://localhost:3000/api/players/${data.id}`,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        alert("Data Updated Successfully!");
    })
})