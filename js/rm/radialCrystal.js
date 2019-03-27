function addCrystals(numItems) {
    console.log("addCrystals("+numItems+"):  v.2");

    var numSprites = numItems;

    var crystalParams = {
        foo: 100,
        bar: 50
    }

    var loader = new THREE.STLLoader();
    loader.load('obj/crystals/crystal_01.stl', function (geometry) {

        var material = new THREE.MeshPhongMaterial({
            color: offwhite,
            specular: offwhite,
            shininess: 80,
            flatShading: true,
            // side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.8,
            wireframe: false
        });


        geometry.computeFaceNormals();

        for (var i = 0; i < numSprites; i++) {
            var holder = new THREE.Object3D();
            holder.name = "holder" + i;

            holder.rot_x = Math.random() / 200;
            holder.rot_y = Math.random() / 200;
            holder.rot_z = Math.random() / 200;

            var theta = Math.PI * 2 / numSprites;
            
            // var theta_x = Math.random() * (Math.PI) - Math.PI / 2;
            var theta_x = 0;
            var theta_y = Math.random() * (Math.PI * 2);
            var theta_z = Math.random() * (Math.PI * 2);

            holder.rotation.set(theta_x, theta * i, 0);
            world.add(holder);

            var mesh = new THREE.Mesh(geometry, material);


            var radius = Math.random() * 0 + 15;
            mesh.position.set(radius, 0, 0);
            mesh.rotation.x = theta_x;

            var thickness = 0.5 + Math.random() * 0.5;
            var length = 0.55 + Math.random() * 0.33;
            mesh.scale.set(length, thickness, thickness);

            mesh.castShadow = false;
            mesh.receiveShadow = false;

            mesh.name = "crystal_"+i;
            mesh.spinSpeed = 0.2 - Math.random() *0.4;

            holder.add(mesh);

        }

    });

}