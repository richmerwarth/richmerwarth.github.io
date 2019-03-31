function addStyle(container) {
    console.log("addStyle():  v.1");
    
    holder = new THREE.Object3D();
    holder.name = "art";
    
    container.add(holder);
    // console.log("**********");
    // console.log(container);
    // console.log(holder);
    // console.log("**********");
    
    holder.castShadow = true;
    holder.receiveShadow = true;
    
    
    var loader = new THREE.STLLoader();
    loader.load('obj/bilys/style_1.stl', function (geometry) {
        
        geometry.computeFaceNormals();
        
        var material = new THREE.MeshToonMaterial({
            color: textColor,
            specular: offwhite,
            shininess: 100,
            flatShading: true,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 1.0,
            wireframe: false
        });
        
        holder.rotation.set(-Math.PI/2, 0, 0);
        container.add(holder);
        
        var mesh = new THREE.Mesh(geometry, material);
        
        mesh.scale.set(1, textDepth, 1);
        
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        
        mesh.name = "word";

        holder.add(mesh);
    });
    
    
    
    var loader2 = new THREE.STLLoader();
    loader2.load('obj/bilys/style_2.stl', function (geometry) {
        
        geometry.computeFaceNormals();
        
        var material = new THREE.MeshToonMaterial({
            color: baseColor,
            specular: offwhite,
            shininess: 5,
            flatShading: true,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 1.0,
            wireframe: false
        });
        
        
        holder.rotation.set(-Math.PI/2, 0, 0);
        container.add(holder);
        
        var mesh = new THREE.Mesh(geometry, material);
        
        mesh.scale.set(1, baseDepth, 1);
        
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        
        mesh.name = "shell";
        
        holder.add(mesh);
    });
    
}




function addYour(container) {
    console.log("addYour():  v.1");

    var holder = new THREE.Object3D();
    holder.name = "art";

    container.add(holder);

    holder.castShadow = true;
    holder.receiveShadow = true;


    var loader = new THREE.STLLoader();
    loader.load('obj/bilys/your_1.stl', function (geometry) {

        geometry.computeFaceNormals();

        var material = new THREE.MeshToonMaterial({
            color: textColor,
            specular: offwhite,
            shininess: 100,
            flatShading: true,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 1.0,
            wireframe: false
        });
        
        holder.rotation.set(-Math.PI/2, 0, 0);
        container.add(holder);

        var mesh = new THREE.Mesh(geometry, material);

        mesh.scale.set(1, textDepth, 1);

        mesh.castShadow = true;
        mesh.receiveShadow = true;

        mesh.name = "word";

        holder.add(mesh);
    });



    var loader2 = new THREE.STLLoader();
    loader2.load('obj/bilys/your_2.stl', function (geometry) {

        geometry.computeFaceNormals();

        var material = new THREE.MeshToonMaterial({
            color: baseColor,
            specular: offwhite,
            shininess: 5,
            flatShading: true,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 1.0,
            wireframe: false
        });

        
        holder.rotation.set(-Math.PI/2, 0, 0);
        container.add(holder);

        var mesh = new THREE.Mesh(geometry, material);

        mesh.scale.set(1, baseDepth, 1);

        mesh.castShadow = true;
        mesh.receiveShadow = true;

        mesh.name = "shell";

        holder.add(mesh);
    });

}

















function addIlike(container) {
    console.log("addIlike():  v.1");

    var holder = new THREE.Object3D();
    holder.name = "art";

    container.add(holder);

    holder.castShadow = true;
    holder.receiveShadow = true;


    var loader = new THREE.STLLoader();
    loader.load('obj/bilys/ilike_1.stl', function (geometry) {

        geometry.computeFaceNormals();

        var material = new THREE.MeshToonMaterial({
            color: textColor,
            specular: offwhite,
            shininess: 100,
            flatShading: true,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 1.0,
            wireframe: false
        });
        
        holder.rotation.set(-Math.PI/2, 0, 0);
        container.add(holder);

        var mesh = new THREE.Mesh(geometry, material);

        mesh.scale.set(1, textDepth, 1);

        mesh.castShadow = true;
        mesh.receiveShadow = true;

        mesh.name = "word";

        holder.add(mesh);
    });



    var loader2 = new THREE.STLLoader();
    loader2.load('obj/bilys/ilike_2.stl', function (geometry) {

        geometry.computeFaceNormals();

        var material = new THREE.MeshToonMaterial({
            color: baseColor,
            specular: offwhite,
            shininess: 5,
            flatShading: true,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 1.0,
            wireframe: false
        });

        
        holder.rotation.set(-Math.PI/2, 0, 0);
        container.add(holder);

        var mesh = new THREE.Mesh(geometry, material);

        mesh.scale.set(1, baseDepth, 1);

        mesh.castShadow = true;
        mesh.receiveShadow = true;

        mesh.name = "shell";

        holder.add(mesh);
    });

}

















function addBaby(container) {
    console.log("addBaby():  v.1");

    var holder = new THREE.Object3D();
    holder.name = "art";

    container.add(holder);

    holder.castShadow = true;
    holder.receiveShadow = true;


    var loader = new THREE.STLLoader();
    loader.load('obj/bilys/baby_1.stl', function (geometry) {

        geometry.computeFaceNormals();

        var material = new THREE.MeshToonMaterial({
            color: textColor,
            specular: offwhite,
            shininess: 100,
            flatShading: true,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 1.0,
            wireframe: false
        });
        
        holder.rotation.set(-Math.PI/2, 0, 0);
        container.add(holder);

        var mesh = new THREE.Mesh(geometry, material);

        mesh.scale.set(1, textDepth, 1);

        mesh.castShadow = true;
        mesh.receiveShadow = true;

        mesh.name = "word";

        holder.add(mesh);
    });



    var loader2 = new THREE.STLLoader();
    loader2.load('obj/bilys/baby_2.stl', function (geometry) {

        geometry.computeFaceNormals();

        var material = new THREE.MeshToonMaterial({
            color: baseColor,
            specular: offwhite,
            shininess: 5,
            flatShading: true,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 1.0,
            wireframe: false
        });

        
        holder.rotation.set(-Math.PI/2, 0, 0);
        container.add(holder);

        var mesh = new THREE.Mesh(geometry, material);

        mesh.scale.set(1, baseDepth, 1);

        mesh.castShadow = true;
        mesh.receiveShadow = true;

        mesh.name = "shell";

        holder.add(mesh);
    });

}