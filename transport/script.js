// // document.addEventListener('DOMContentLoaded', function () {
// //     // Bus data
// //     const buses = [
// //         { number: "101", route: "Downtown to Uptown", departure: "09:00 AM", arrival: "09:45 AM" },
// //         { number: "102", route: "East Side to West Side", departure: "10:30 AM", arrival: "11:15 AM" },
// //         { number: "103", route: "North End to South End", departure: "11:00 AM", arrival: "11:50 AM" },
// //     ];

// //     // Transport modes
// //     const transportModes = [
// //         { mode: "Bus", available: "Yes" },
// //         { mode: "Metro", available: "No" },
// //         { mode: "Auto", available: "Yes" },
// //         { mode: "Bicycle", available: "No" },
// //     ];

// //     // Auto availability data
// //     const autos = [
// //         { location: "Main Street", availability: "3 Autos, 2 Shared Autos" },
// //         { location: "Park Avenue", availability: "5 Autos, 4 Shared Autos" },
// //         { location: "Central Market", availability: "2 Autos, 3 Shared Autos" },
// //     ];

// //     // Function to display bus timings
// //     const busTableBody = document.getElementById('bus-timings');
// //     buses.forEach(bus => {
// //         const row = document.createElement('tr');
// //         row.innerHTML = `
// //             <td>${bus.number}</td>
// //             <td>${bus.route}</td>
// //             <td>${bus.departure}</td>
// //             <td>${bus.arrival}</td>
// //         `;
// //         busTableBody.appendChild(row);
// //     });

// //     // Function to display multi-modal transport modes
// //     const transportList = document.getElementById('transport-modes');
// //     transportModes.forEach(mode => {
// //         const listItem = document.createElement('li');
// //         listItem.textContent = `${mode.mode} - Available: ${mode.available}`;
// //         transportList.appendChild(listItem);
// //     });

// //     // Function to display nearby auto availability
// //     const autoList = document.getElementById('auto-list');
// //     autos.forEach(auto => {
// //         const listItem = document.createElement('li');
// //         listItem.textContent = `${auto.location}: ${auto.availability}`;
// //         autoList.appendChild(listItem);
// //     });
// // });

// document.addEventListener('DOMContentLoaded', function () {
//     // Bus data
//     const buses = [
//         { number: "101", route: "Downtown to Uptown", departure: "09:00 AM", arrival: "09:45 AM" },
//         { number: "102", route: "East Side to West Side", departure: "10:30 AM", arrival: "11:15 AM" },
//         { number: "103", route: "North End to South End", departure: "11:00 AM", arrival: "11:50 AM" },
//     ];

//     // Transport modes
//     const transportModes = [
//         { mode: "Bus", available: "Yes" },
//         { mode: "Metro", available: "No" },
//         { mode: "Auto", available: "Yes" },
//         { mode: "Bicycle", available: "No" },
//     ];

//     // Auto availability data
//     const autos = [
//         { location: "Main Street", availability: "3 Autos, 2 Shared Autos" },
//         { location: "Park Avenue", availability: "5 Autos, 4 Shared Autos" },
//         { location: "Central Market", availability: "2 Autos, 3 Shared Autos" },
//     ];

//     // Function to display bus timings
//     const busTableBody = document.getElementById('bus-timings');
//     buses.forEach(bus => {
//         const row = document.createElement('tr');
//         row.innerHTML = `
//             <td>${bus.number}</td>
//             <td>${bus.route}</td>
//             <td>${bus.departure}</td>
//             <td>${bus.arrival}</td>
//         `;
//         busTableBody.appendChild(row);
//     });

//     // Function to display multi-modal transport modes
//     const transportList = document.getElementById('transport-modes');
//     transportModes.forEach(mode => {
//         const listItem = document.createElement('li');
//         listItem.innerHTML = `<i class="fas fa-bus"></i> ${mode.mode} - Available: ${mode.available}`;
//         transportList.appendChild(listItem);
//     });

//     // Function to display nearby auto availability
//     const autoList = document.getElementById('auto-list');
//     autos.forEach(auto => {
//         const listItem = document.createElement('li');
//         listItem.innerHTML = `<i class="fas fa-taxi"></i> ${auto.location}: ${auto.availability}`;
//         autoList.appendChild(listItem);
//     });
// });

document.addEventListener('DOMContentLoaded', function () {
    // Fetch and display bus timings
    const buses = [
        { number: "101", route: "Downtown to Uptown", departure: "09:00 AM", arrival: "09:45 AM" },
        { number: "102", route: "East Side to West Side", departure: "10:30 AM", arrival: "11:15 AM" },
        { number: "103", route: "North End to South End", departure: "11:00 AM", arrival: "11:50 AM" },
    ];

    const busTableBody = document.getElementById('bus-timings');
    buses.forEach(bus => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${bus.number}</td>
            <td>${bus.route}</td>
            <td>${bus.departure}</td>
            <td>${bus.arrival}</td>
            <td><button class="track-btn">Track Bus</button></td>
        `;
        busTableBody.appendChild(row);
    });

    // Multi-modal transport modes
    const transportModes = [
        { mode: "Bus", available: "Yes" },
        { mode: "Metro", available: "No" },
        { mode: "Auto", available: "Yes" },
        { mode: "Bicycle", available: "No" },
    ];

    const transportList = document.getElementById('transport-modes');
    transportModes.forEach(mode => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<i class="fas fa-bus"></i> ${mode.mode} - Available: ${mode.available}`;
        transportList.appendChild(listItem);
    });

    // Auto and shared auto availability
    const autos = [
        { location: "Main Street", availability: "3 Autos, 2 Shared Autos" },
        { location: "Park Avenue", availability: "5 Autos, 4 Shared Autos" },
        { location: "Central Market", availability: "2 Autos, 3 Shared Autos" },
    ];

    const autoList = document.getElementById('auto-list');
    autos.forEach(auto => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<i class="fas fa-taxi"></i> ${auto.location}: ${auto.availability}`;
        autoList.appendChild(listItem);
    });
});

// Google Maps API integration
function initMap() {
    const mapOptions = {
        center: new google.maps.LatLng(37.7749, -122.4194),
        zoom: 12,
    };
    const map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);
}


