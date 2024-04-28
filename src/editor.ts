let JSZip = require("jszip");
let saveAs = require("file-saver");

export function startSummernote(): void {
  $(".summernote").summernote({
    height: 400,
    codemirror: {
      theme: "monokai",
    },
    toolbar: [
      ['style', ['style']],
      ['font', ['bold', 'italic', 'clear']],
      ['fontname', ['fontname']],
      ['color', ['color']],
      ['para', ['ul', 'ol', 'paragraph']],
      ['table', ['table']],
      ['insert', ['link', 'picture']],
      ['view', ['codeview', 'help']],
    ],
  });

  $("#download").on("click", () => {
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