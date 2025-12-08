const initFileInput = () => {
    const fileInput = document.querySelector(".js-form-file");
    const fileNameElement = document.querySelector(".js-form-file-name");

    // 必須要素がなければ何もしない
    if (!fileInput || !fileNameElement) return;

    // ファイルが選択されたらファイル名を表示
    fileInput.addEventListener("change", () => {
        const file = fileInput.files && fileInput.files[0];
        const fileName = file ? file.name : "選択されていません";
        fileNameElement.textContent = fileName;
    });
};

initFileInput();
