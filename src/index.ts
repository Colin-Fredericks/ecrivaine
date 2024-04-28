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

import "summernote/dist/summernote-lite";
import "summernote/dist/summernote-lite.css";

// add jszip for saving files
import "jszip";
import "file-saver";

$(function () {
  console.log("jQuery is ready");
  startSummernote();
});
