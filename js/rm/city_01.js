function makeMeshes(geometries, meshes, callback) {
    console.log("makeMeshes()");

    for (var item in geometries) {
        var geom = geometries[item];

        geom.computeFaceNormals();

        var material = new THREE.MeshPhongMaterial({
            color: 0xFFFFFF,
            specular: 0xFFFFFF,
            shininess: 100,
            flatShading: true,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 1.0,
            wireframe: false
        });

        var mesh = new THREE.Mesh(geom, material);

        meshes.push(mesh);
    }

    console.log(meshes);
    callback();
}


function addBuilding(container, meshes, pos){
    console.log("addBuilding()");
    console.log(container);

    var holder = new THREE.Object3D();
    holder.name = "bldg";

    
    // ///
    
    var mesh = meshes[Math.floor(Math.random() * meshes.length)].clone();

    //var mesh = meshes[2].clone();
    
    
    holder.add(mesh);

    // var myColor = colors[Math.floor(Math.random()*colors.length)];
    // holder.children[0].material.color.set(myColor);


    var basex = 0- ((cityParams.columns-1)/2 * cityParams.spacing);
    var basez = 0- ((cityParams.rows-1)/2 * cityParams.spacing);

    holder.position.x = basex + pos.x;
    holder.position.y = pos.y;
    holder.position.z = basez + pos.z;


    mesh.scale.set(1, 1.0 + Math.random(), 1);


    // var geometry = new THREE.CylinderGeometry( 1, 1, 100, 8 );
    // var material = new THREE.MeshPhongMaterial( {color: 0xffffff} );
    // var bar = new THREE.Mesh( geometry, material );
    // bar.position.y += 50;
    // holder.add( bar );

    var quad = Math.floor(Math.random()*4);
    
    holder.rotation.y = quad * Math.PI/2;


    container.add(holder);




        
    // var mesh = meshes[Math.floor(Math.random() * meshes.length)];
    // container.add(mesh);
}