export function startSummernote(): void {
  $(".summernote").summernote({
    height: 300,
    codemirror: {
      theme: "monokai",
    },
  });
}