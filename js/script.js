const weatherData = [{
    district: "Dhaka",
    temperature: 32,
    condition: "Sunny"
}, {
    district: "Sylhet",
    temperature: 27,
    condition: "Rainy"
}, {
    district: "Khulna",
    temperature: 30,
    condition: "Cloudy"
}];

const selectBox = document.getElementById("districtSelect");
const infoBox = document.getElementById("infoBox");
const warning = document.getElementById("warning");

const showDistrict = document.getElementById("showDistrict");
const showTemp = document.getElementById("showTemp");
const showCondition = document.getElementById("showCondition");

const sunnyImg = document.getElementById("sunny");
const rainyImg = document.getElementById("rainy");
const cloudyImg = document.getElementById("cloudy");

selectBox.addEventListener("change", function() {
    sunnyImg.style.display = "none";
    rainyImg.style.display = "none";
    cloudyImg.style.display = "none";

    infoBox.style.display = "none";
    warning.innerHTML = "";

    let selected = selectBox.value;

    if (selected === "") {
        warning.innerHTML = "⚠ Please select a district!";
        return;
    }

    let info = weatherData.find(w => w.district === selected);

    infoBox.style.display = "block";
    showDistrict.innerHTML = "District: " + info.district;
    showTemp.innerHTML = "Temperature: " + info.temperature + "°C";
    showCondition.innerHTML = "Condition: " + info.condition;

    if (info.condition === "Sunny") sunnyImg.style.display = "block";
    if (info.condition === "Rainy") rainyImg.style.display = "block";
    if (info.condition === "Cloudy") cloudyImg.style.display = "block";
});