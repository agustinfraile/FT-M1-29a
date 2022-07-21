// Event loop
function printing() {
    console.log(1); //1
    setTimeout(function() { console.log(2); }, 1000); // 2
    setTimeout(function() { console.log(3); }, 0); //3
    console.log(4); //4
}

printing(); // 1 4 3 2 (por la espera de la web api)