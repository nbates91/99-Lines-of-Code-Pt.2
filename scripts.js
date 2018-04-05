var body = document.body;
var friends = ['Kalyn', 'Ned', 'Benny', 'Stephen', 'Kristi'];



var button = document.getElementById('singButton');
button.addEventListener('click', function () {

    for (var i = 0; i < friends.length; i++) {
        var h3 = document.createElement('h3');
        var text = document.createTextNode(friends[i]);
        var div = document.createElement('div');
        h3.appendChild(text);
        div.appendChild(h3);
        div.className = 'friend';
        body.appendChild(div);

        for (var x = 99; x > 0; x--) {
            if (x > 2) {
                var p = document.createElement('p');
                var song1 = document.createTextNode((x) + ' lines of code in the file, ' + (x) + ' lines of code; ' + (friends[i]) + ' strikes one out, clears it all out, ' + (x - 1) + ' lines of code in the file!');
                p.appendChild(song1);
                div.appendChild(p);

            } else if (x == 2) {
                var p = document.createElement('p');
                var song2 = document.createTextNode((x) + ' lines of code in the file, ' + (x) + ' lines of code; ' + (friends[i]) + ' strikes one out, clears it all out ,' + (x - 1) + ' line of code in the file!');
                p.appendChild(song2);
                div.appendChild(p);


            } else {
                var p = document.createElement('p');
                var song3 = document.createTextNode((x) + ' line of code in the file, ' + (x) + ' line of code; ' + (friends[i]) + ' strikes one out, clears it all out, no more lines of code in the file!');
                p.appendChild(song3);
                div.appendChild(p);

            }
        }
    }
})

