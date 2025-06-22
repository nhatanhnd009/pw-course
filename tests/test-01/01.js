let departurePlanet = "Trai Dat";
let mission = "Kham pha Vu tru 1104";
let crew = ["Trang", "Ha", "Thom", "Nhat Anh"];
function launchShip(crew) {
    let text = "";
    for (let i of crew) {
        text += i + ",";
    }
    return `Chuẩn bị khởi động! Phi hành đoàn gồm:${text}sẽ đồng hành cùng bạn trong chuyến phiêu lưu ${mission}!`;
}
let message = launchShip(crew);
console.log(message);