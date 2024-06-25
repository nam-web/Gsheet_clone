const download = document.getElementById("download");
const upload = document.getElementById("upload");

download.addEventListener("click", () => {
    const blob = new Blob([JSON.stringify(state)], {type: "application/json"});
    let url = URL.createObjectURL(blob);
    let link = document.createElement("a");
    link.href = url;
    link.download = "spreadsheet.json";

    link.click();
});

upload.addEventListener("change", (e) => {
    let file = e.target.files[0];
    if(file.type !== "application/json"){
        alert("Please upload json files only");
        return;
    }

    let fileReader = new FileReader();

    fileReader.onload = function(e) {
        let fileData = JSON.parse(e.target.result);
        console.log(fileData);
    }

    fileReader.readAsText(file);
});