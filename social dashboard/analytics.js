const followersCtx = document.getElementById("followersChart").getContext("2d");
new Chart(followersCtx, {
    type: "line",
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [{
            label: "Followers",
            data: [1200, 1500, 1800, 2200, 2800, 3500],
            borderColor: "blue",
            fill: false
        }]
    }
});

const engagementCtx = document.getElementById("engagementChart").getContext("2d");
new Chart(engagementCtx, {
    type: "bar",
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [{
            label: "Engagement (%)",
            data: [5.2, 5.8, 6.1, 6.7, 7.4, 8.2],
            backgroundColor: "green"
        }]
    }
});

const postsCtx = document.getElementById("postsChart").getContext("2d");
new Chart(postsCtx, {
    type: "doughnut",
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [{
            label: "Posts",
            data: [5, 7, 10, 15, 12, 18],
            backgroundColor: ["red", "blue", "green", "orange", "purple", "yellow"]
        }]
    }
});
