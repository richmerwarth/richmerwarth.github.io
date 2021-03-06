function addCones(numItems, container) {
    console.log("addCones("+numItems+"):  v.1");
    // console.log(container.name);
    // console.log(container);

    var numSprites = numItems;

    var crystalParams = {
        foo: 100,
        bar: 50
    }

    var loader = new THREE.STLLoader();
    loader.load('obj/cone.stl', function (geometry) {

        // var material = new THREE.MeshPhongMaterial({
        //     color: mint,
        //     specular: offwhite,
        //     shininess: 100,
        //     flatShading: true,
        //     side: THREE.DoubleSide,
        //     transparent: true,
        //     opacity: 0.9,
        //     wireframe: false
        // });


        geometry.computeFaceNormals();

        for (var i = 0; i < numSprites; i++) {
            var holder = new THREE.Object3D();
            holder.name = "holder" + i;


            var myColor = colors[Math.floor(Math.random()*colors.length)];
            // console.log(myColor + ": " + material.color);
            // material.color = myColor;

            var material = new THREE.MeshBasicMaterial({
                color: myColor,
                // color: mint,
                specular: offwhite,
                shininess: 5,
                flatShading: false,
                side: THREE.DoubleSide,
                transparent: true,
                opacity: 1.0,
                wireframe: false
            });



            holder.rot_x = Math.random() / 200;
            holder.rot_y = Math.random() / 200;
            holder.rot_z = Math.random() / 200;

            var theta = Math.PI * 2 / numSprites;
            
            var theta_x = Math.random() * (2 * Math.PI) - Math.PI;
            //var theta_x = 0;
            var theta_y = Math.random() * (Math.PI * 2);
            var theta_z = Math.random() * (Math.PI * 2);

            holder.rotation.set(theta_x, theta * i, 0);
            container.add(holder);

            var mesh = new THREE.Mesh(geometry, material);


            holder.radius = Math.random() * 200 + 30;
            mesh.position.set(holder.radius, 0, 0);
            mesh.rotation.x = theta_x;

            // var thickness = 0.33 + Math.random() * 0.66;
            // var length = 0.5 + Math.random() * 0.1;
            mesh.scale.set(0.2, 0.5, 0.5);

            mesh.castShadow = false;
            mesh.receiveShadow = false;

            mesh.name = "cone_"+i;
            mesh.spinSpeed = 0.1 + Math.random()*0.05;

            if(Math.random()>=0.5){
                mesh.spinSpeed *= -1;
            }

            holder.add(mesh);

        }

    });

}