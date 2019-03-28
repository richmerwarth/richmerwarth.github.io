function addShards(numItems, container) {
    console.log("addShards("+numItems+"):  v.8");

    var numSprites = numItems;

    var crystalParams = {
        foo: 100,
        bar: 50
    }

    var loader = new THREE.STLLoader();
    loader.load('obj/crystals/shard.stl', function (geometry) {

        var material = new THREE.MeshPhongMaterial({
            color: yellow,
            specular: offwhite,
            shininess: 80,
            flatShading: true,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.66,
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
            
            var theta_x = Math.random() * (Math.PI) - Math.PI / 2;
            // var theta_x = 0;
            var theta_y = Math.random() * (Math.PI * 2);
            var theta_z = Math.random() * (Math.PI * 2);

            holder.rotation.set(theta_x, theta * i, 0);
            container.add(holder);

            var mesh = new THREE.Mesh(geometry, material);


            var radius = Math.random() * 30 + 10;
            mesh.position.set(radius, 0, 0);
            mesh.rotation.x = theta_x;

            var thickness = 0.01 + Math.random() * 0.25;
            var length = 0.5 + Math.random() * 0.75;
            mesh.scale.set(length, thickness, thickness);

            mesh.castShadow = false;
            mesh.receiveShadow = false;

            mesh.name = "shard_"+i;
            mesh.spinSpeed = 0.05 - Math.random() *0.1;

            holder.add(mesh);

        }

    });

}