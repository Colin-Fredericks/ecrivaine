export function startSummernote(): void {
  $(".summernote").summernote({
    height: 150, //set editable area's height,
    codemirror: {
      theme: "monokai",
    },
  });
}