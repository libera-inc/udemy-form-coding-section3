const handleFileInput = () => {
    const fileInput = document.querySelector(".js-form-file");
    const fileNameElement = document.querySelector(".js-form-file-name");

    if (!fileInput || !fileNameElement) return;

    fileInput.addEventListener("change", () => {
        const fileName = fileInput.files.length > 0 ? fileInput.files[0].name : "選択されていません";
        fileNameElement.textContent = fileName;
    });
};

handleFileInput();
