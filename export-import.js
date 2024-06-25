const downloadBtn = document.getElementById("download");
const upload = document.getElementById("upload");

let user = {
    name: "Aravind",
    age: 23,
    rollNumber: 123456
}

downloadBtn.addEventListener("click", () =>{
    const data = JSON.stringify(user);
    let blob = new Blob([data], {type: "text/plain"});
    let downloadUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = "temp.txt";
    link.href = downloadUrl;
    
    link.click();
});

upload.addEventListener("change", () => {
    let file = upload.files[0];

    if(file.type === "text/plain"){
        let fileReader = new FileReader();
        fileReader.onload = function(event) {
            console.log(event.target.result);
        }
        fileReader.readAsText(file);
    }
    else{
        alert("Please upload a txt file");
    }
})