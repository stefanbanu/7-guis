window.onload = function () {
    let counter = 1;
    document.getElementById("btn").addEventListener('click', function () {
        document.getElementById("app").innerHTML = counter++;
    });
};
