


function addNeopixel(container, num){
    console.log("addNeopixel()");
    
    var theta = Math.PI*2 - (num * (Math.PI*2)/clockParams.pixels);

    // console.log(num+": "+theta);

    var holder = new THREE.Object3D();
    holder.name = "pix";

    //////////

    var myGeo = new THREE.BoxGeometry( 2, 1, 1 );
    if(num%5 == 0){
        myColor = 0xffffff;
    }else{
        myColor = 0x000000;
    }
    
    // var myMat = new THREE.MeshBasicMaterial( {color: myColor} );

    // var myBox = new THREE.Mesh( myGeo, myMat );
    // myBox.rotation.z = Math.PI /2;
    // myBox.position.y = 58;
    // holder.add( myBox );

    //////////

    this.pixel = addLight(holder, myColor);

    holder.rotation.z = theta;

    container.add(holder);

    return(holder);
        
}


function addLight(target, color){

    var myLight = new THREE.PointLight(color, 2.0, 25);

    myLight.position.set( 0, 60, 0 );
    
    myLight.castShadow = false;

    target.add( myLight );

    return(myLight);
}