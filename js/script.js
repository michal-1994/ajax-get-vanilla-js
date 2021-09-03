document.getElementById('button').addEventListener('click', getName);
document.getElementById('get-form').addEventListener('submit', getName);
document.getElementById('post-form').addEventListener('submit', postName);
 
function getName(e) {
    e.preventDefault();
    let name = document.getElementById('name1').value;

    let xhr = new XMLHttpRequest;
    xhr.open('GET', 'process.php?name='+name, true);

    xhr.onload = function() {       
        document.getElementById('result').innerText = this.responseText;
    }
    xhr.send();
}

function postName(e) {
    e.preventDefault();
    let name2 = document.getElementById('name2').value;
    let params = "name="+name2;

    let xhr = new XMLHttpRequest;
    xhr.open('POST', 'process.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    xhr.onload = function() {       
        document.getElementById('result').innerText = this.responseText;
    }
    xhr.send(params);
}