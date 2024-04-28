let JSZip = require("jszip");
let saveAs = require("file-saver");

export function startSummernote(): void {
  $(".summernote").summernote({
    height: 300,
    codemirror: {
      theme: "monokai",
    },
  });

  $("#save").on("click", () => {
    const content = $(".summernote").summernote("code");
    console.log(content);
    let zip = new JSZip();
    zip.file("content.html", content);
    zip.generateAsync({type:"blob"}).then(function(content: string) {
      // see FileSaver.js
      saveAs(content, "example.zip");
  });
  });

}