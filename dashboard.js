document.addEventListener("DOMContentLoaded", function () {
  var ctx = document.getElementById("ipoPieChart").getContext("2d");
  var ipoPieChart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Upcoming", "New Listed", "Ongoing"],
      datasets: [
        {
          data: [15, 25, 2], // Example data
          backgroundColor: ["#007bff", "#0056b3", "#00ffff"],
          hoverBackgroundColor: ["##007bff", "#0056b3", "#00ffff"],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom",
        },
      },
    },
  });
});
