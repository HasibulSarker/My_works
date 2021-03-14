//  Start Of JavaScript//

const a = "Data/about.txt";

const b ="Posts/post.txt";

const c ="Posts/post2.txt";

function getdata(link) {

    const b = link;

    const xhr = new XMLHttpRequest();

    xhr.open("GET", b);

    xhr.send();

    xhr.onload = function () {

        const c = xhr.responseText;
        
        const d = document.getElementById("container");
        d.innerHTML = c;
        
    }
    
}

// End of Javascript //