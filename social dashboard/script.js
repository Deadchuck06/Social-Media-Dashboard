document.addEventListener("DOMContentLoaded", () => {
    loadAccounts();
    loadScheduledPosts();
    updateMetrics();
});

let accounts = JSON.parse(localStorage.getItem("accounts")) || [];
let scheduledPosts = JSON.parse(localStorage.getItem("scheduledPosts")) || [];

function addAccount() {
    const accountName = prompt("Enter account name:");
    if (accountName) {
        accounts.push(accountName);
        saveAccounts();
        loadAccounts();
        updateMetrics();
    }
}

function deleteAccount(index) {
    accounts.splice(index, 1);
    saveAccounts();
    loadAccounts();
    updateMetrics();
}

function saveAccounts() {
    localStorage.setItem("accounts", JSON.stringify(accounts));
}

function loadAccounts() {
    const accountList = document.getElementById("account-list");
    accountList.innerHTML = "";

    if (accounts.length === 0) {
        accountList.innerHTML = "<p class='text-gray-500'>No accounts added yet.</p>";
        return;
    }

    accounts.forEach((account, index) => {
        const listItem = document.createElement("li");
        listItem.classList = "flex justify-between items-center p-2 border-b";

        listItem.innerHTML = `
            <span>${account}</span>
            <button onclick="deleteAccount(${index})" class="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition">
                Delete
            </button>
        `;

        accountList.appendChild(listItem);
    });
}

function updateMetrics() {
    document.getElementById("followersCount").innerText = (accounts.length * 1000).toLocaleString();
    document.getElementById("engagementRate").innerText = (accounts.length * 2.5) + "%";
    document.getElementById("postsCount").innerText = (accounts.length * 5);
}

// Post Scheduling Feature
function schedulePost() {
    const postContent = document.getElementById("postContent").value;
    const postDateTime = document.getElementById("postDateTime").value;

    if (!postContent || !postDateTime) {
        alert("Please enter post content and select a date/time.");
        return;
    }

    scheduledPosts.push({ content: postContent, dateTime: postDateTime });
    saveScheduledPosts();
    loadScheduledPosts();

    // Clear inputs after scheduling
    document.getElementById("postContent").value = "";
    document.getElementById("postDateTime").value = "";
}

function deletePost(index) {
    scheduledPosts.splice(index, 1);
    saveScheduledPosts();
    loadScheduledPosts();
}

function saveScheduledPosts() {
    localStorage.setItem("scheduledPosts", JSON.stringify(scheduledPosts));
}

function loadScheduledPosts() {
    const postList = document.getElementById("scheduledPosts");
    postList.innerHTML = "";

    if (scheduledPosts.length === 0) {
        postList.innerHTML = "<p class='text-gray-500'>No posts scheduled yet.</p>";
        return;
    }

    scheduledPosts.forEach((post, index) => {
        const listItem = document.createElement("li");
        listItem.classList = "flex justify-between items-center p-2 border-b";

        listItem.innerHTML = `
            <div>
                <p class="font-semibold">${post.content}</p>
                <small class="text-gray-500">Scheduled for: ${new Date(post.dateTime).toLocaleString()}</small>
            </div>
            <button onclick="deletePost(${index})" class="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition">
                Delete
            </button>
        `;

        postList.appendChild(listItem);
    });
}
