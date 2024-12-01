document.getElementById("uploadForm").addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent form submission

    const fileInput = document.getElementById("fileInput");
    const statusDiv = document.getElementById("status");

    if (!fileInput.files[0]) {
        statusDiv.textContent = "Please select a file to upload.";
        statusDiv.style.color = "red";
        return;
    }

    const formData = new FormData();
    formData.append("file", fileInput.files[0]);

    statusDiv.textContent = "Uploading...";
    statusDiv.style.color = "blue";

    try {
        // Mock backend URL
        const response = await fetch("http://localhost:5500/upload", {
            method: "POST",
            body: formData,
        });

        if (response.ok) {
            statusDiv.textContent = "File uploaded successfully!";
            statusDiv.style.color = "green";
        } else {
            statusDiv.textContent = "Upload failed. Please try again.";
            statusDiv.style.color = "red";
        }
    } catch (error) {
        statusDiv.textContent = "An error occurred while uploading the file.";
        statusDiv.style.color = "red";
        console.error("Error:", error);
    }
});
