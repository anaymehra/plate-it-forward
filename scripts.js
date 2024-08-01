document.getElementById('carbonForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get input values
    const energyUsage = parseFloat(document.getElementById('energyUsage').value);
    const milesDriven = parseFloat(document.getElementById('milesDriven').value);
    const wasteProduction = parseFloat(document.getElementById('wasteProduction').value);
    
    // Define average carbon emission factors (in kg CO2e)
    const energyEmissionFactor = 0.233; // Average for electricity (kg CO2e per kWh)
    const carEmissionFactor = 0.411; // Average for gasoline cars (kg CO2e per mile)
    const wasteEmissionFactor = 0.9; // Average for waste (kg CO2e per kg)
    
    // Calculate carbon footprint
    const energyFootprint = energyUsage * energyEmissionFactor;
    const travelFootprint = milesDriven * carEmissionFactor;
    const wasteFootprint = wasteProduction * wasteEmissionFactor;
    
    // Total carbon footprint
    const totalFootprint = energyFootprint + travelFootprint + wasteFootprint;
    
    // Display result
    document.getElementById('footprint').textContent = `Your estimated carbon footprint is ${totalFootprint.toFixed(2)} kg CO2e per month.`;
});

var videocon = document.querySelector("#video-container")
var playbtn = document.querySelector("#play")

videocon.addEventListener("mouseenter", ()=>{
    gsap.to(playbtn,{
        scale:1,
        opacity:1
    })
})
videocon.addEventListener("mouseleave",()=>{
    gsap.to(playbtn,{
        scale:0,
        opacity:0
    })
})