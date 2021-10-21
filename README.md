# online-ebook-creator

## The Problem

Existing ebook creation software sucks. It's all either very expensive, practically nonfunctional, or platform-exclusive.

This is a shame, as ebooks are typically far more accessible than PDFs, with smaller file sizes.

## The Goal

Create a website that lets people create ebooks.

## Project Outline

This project needs...

- A **front-end** with...
  - A **rich text editor**.
  - A **raw XHTML editor** with maybe some color-coding.
  - A **css editor**, ditto.
  - A **file tree view**. We won't be storing *actual* files, but it should look like the ebook eventually will.
  - A **base template** for new books.
  - Easy **inter-document links**.
  - Automatic **TOC** generation.
- No back-end. Ok that's not quite true, but everything should be done in JavaScript, because I don't feel like running a server. Instead of storing projects on my end, we'll need...
  - The ability to **download** files in epub format.
    - Epub format is a zipped file hierarchy with XHTML files, so we'll need to be able to **create zip files with structure** and store our rich text in **XHTML** (or find an HTML-to-XHTML converter).
  - The ability to **upload** epub files for editing
    - Epub is kind of a loose standard. We might end up limited to only editing our own files.
  - **Cloud storage options.** We'll try to support two popular ones first:
    - **Google Drive**
    - **Dropbox**
    - Again, at no point do we want to run a server, even to make calls to these services. Auth should all be done on their end.

I also want to make sure that...

- It runs on **all major browsers**.
- It has a way to **handle images**. This will probably have to tie into the cloud storage options, or we'll be very limited in file size.
- The page has a **minimal download footprint**. That minimum might be large, but I want to reduce download burden on those who pay by the megabyte.
- Anyone can use the site, regardless of disability. The goal is **WCAG 2.1** compatibility.

As a side goal, I'm going to write this in [TypeScript](https://www.typescriptlang.org/) because I haven't used it before and it sounds like a good thing to learn.

## Potential Resources

- **Web host**: [GitHub Pages](https://pages.github.com)
- **General framework**: [Bootstrap](https://getbootstrap.com/)
- **Icons**: I have a FontAwesome 5 license
- **Rich text editor**: [Summernote](https://summernote.org/)
- **Raw XHTML editor**:
- **Raw CSS editor**:
- **File tree view**: Might end up rolling my own or making it out of Bootstrap / FA pieces.
- **Book template**: Roll my own
- **Handle zip files**: [JSZip](https://stuk.github.io/jszip/)
- **XHTML**:
- **Cloud storage**:
