function loadSTLs(list, destination, callback) {
    console.log("*** loadSTLs():  v.1");
    console.log("* " + list.length);
    console.log("* " + destination);
    console.log("* " + callback);
    console.log("*******");


    ////////////////////////////////////////////

    loadItem(0, list, destination, callback);
}

function loadItem(n, list, destination, callback) {
    console.log("loadItem("+n+"): " + list[n]);

    var dest = destination;

    var loader = new THREE.STLLoader();
    loader.load(list[n], function (geometry) {
        geometry.computeFaceNormals();

        dest.push(geometry);

        n++;

        if(n< list.length){
            loadItem(n, list, destination, callback);
        }else{
            console.log("done loading STLs.");
            callback();
        }
    });
}
