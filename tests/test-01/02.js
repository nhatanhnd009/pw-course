let speed = 1000; // km/h
let time = 24; //h
function calculateDistance(speed, time) {
    return speed * time;
}
let distance = calculateDistance(speed, time);
console.log(`Khoang cach den hanh tinh la: ${distance}km`);