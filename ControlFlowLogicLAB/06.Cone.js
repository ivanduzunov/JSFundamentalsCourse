function ConeVolume(radius, height) {

    let s = Math.sqrt(radius * radius + height * height);
    let volume = Math.PI * radius * radius * height / 3;
    console.log("volume = " + volume);
    let area = Math.PI * radius * (radius + s);
    console.log("area = " + area);

}