# Zhenghan Zhu / 朱正涵

Bilingual academic homepage: **https://mars0418.github.io/**.

## Contents

About Me → News → Research → Selected Projects → Education → Awards → Service.

- English / Chinese switch with a remembered preference.
- Expandable News archive and selected coursework.
- HEIR research figure with an enlarged preview, author links, Project and Dataset links; a Cross-view 3D Gaze Target Estimation research entry.
- Two course projects: robot-car control and Yanshee obstacle-course development.
- Responsive layout and a static fallback for reduced motion.
- A fixed left profile and section navigation, with only the main content moving during page scrolling. Compact windows keep the same two-column arrangement.
- Typography reduced to 85% of the preceding layout; the compact sidebar shows every section without its own scrolling.

## Editing

- `assets/js/site-data.js`: shared factual content and bilingual biography, news, coursework, awards and service.
- `assets/js/render.js`: section markup and short interface translations.
- `assets/style.css`: layout and visual styling.
- `assets/js/app.js`: language, News and image-preview interactions.
- `index.template.html`: document metadata and page shell.
- `assets/images/`: selected public images and project animation.
- `assets/Zhenghan-Zhu-CV.pdf`: complete CV, published with the owner's explicit approval.

After editing content or markup, regenerate the committed static homepage:

```sh
node build.cjs
```

Preview with any static HTTP server, for example:

```sh
python -m http.server 8765
```

GitHub Pages serves the root of `main`. `.nojekyll` keeps the site independent of Ruby, Jekyll and external build dependencies. The committed HTML includes the full English content; JavaScript adds language switching and interactions.

## References

Visual direction: [Minimal Light](https://github.com/yaoyao-liu/minimal-light). Content organization: [Yitang Li](https://liyitang22.github.io/) and [Yifan Chen](https://cyf-24.github.io/). The implementation is custom HTML, CSS and JavaScript.

Personal photos, paper figures and project materials retain their respective authorship. The Yanshee source code is maintained separately in [yanshee-obstacle-course](https://github.com/Mars0418/yanshee-obstacle-course).
