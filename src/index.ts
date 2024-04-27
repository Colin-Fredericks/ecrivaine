import { startSummernote } from "./editor";
import './jquery';
import "./index.css";

import "popper.js";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "codemirror/lib/codemirror.js";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/xml/xml";
import "codemirror/theme/monokai.css";

// Needs to use fix from https://github.com/huzumsergiu84/summernote-bs-5-fix/blob/main/summernote-bs5.js
import "summernote/dist/summernote-bs5";
import "summernote/dist/summernote-bs5.css";

$(function () {
  console.log("jQuery is ready");
  startSummernote();
});
