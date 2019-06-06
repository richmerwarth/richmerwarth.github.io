function rgbToHex(r, g, b) {
    return "0x" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function hexToRgb(hex) {

    var result = /^0x?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}


function addHex(color1, color2) {
    var c1 = hexToRgb(color1);
    var c2 = hexToRgb(color2);

    var result = {
        r: 0,
        g: 0,
        b: 0
    };

    result.r = Math.min((c1.r + c2.r), 255);
    result.g = Math.min((c1.g + c2.g), 255);
    result.b = Math.min((c1.b + c2.b), 255);

    return(rgbToHex(result.r, result.g, result.b));

}