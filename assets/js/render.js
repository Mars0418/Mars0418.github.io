/* Shared by the static build and the browser language switch. */
const text = {
  en: {
    nav: ['About Me', 'News', 'Research', 'Projects', 'Education', 'Awards', 'Service'],
    role: 'Undergraduate in Automation', college: 'Xinya College', university: 'Tsinghua University',
    location: 'Beijing, China', more: 'Show more', less: 'Show less', archive: 'More updates',
    interests: 'Research interests', equal: 'Equal contribution', corresponding: 'Corresponding author',
    submitted: 'Submitted to ICLR 2027', enlarge: 'View full figure',
    heir: 'HEIR pairs human speech, measured gaze, and egocentric video with robot observations and navigation–manipulation trajectories to study user-centric intent grounding, execution planning, and long-horizon task completion.',
    caption: 'Human intent, robot navigation, and manipulation within a continuous interaction session.',
    carTitle: 'Robot-Car Course Project', car: 'A robot-car control project for Project of Electronic Circuits. Task details and implementation are documented in the GitHub repository.',
    yanTitle: 'Yanshee Robot Obstacle-Course Project', yan: 'Robot development and obstacle-course control for Cross Project Training (2) - Intelligent Robot. Task details and implementation are documented in the GitHub repository.',
    yanAlt: 'Four synchronized clips of a Yanshee robot in an obstacle course',
    carAlt: 'Line-following and state-switching diagram from the robot-car course presentation',
    degree: 'B.Eng. in Automation', school: 'Tsinghua University', xinya: 'Xinya College', expected: 'Expected',
    cumulative: 'Cumulative', academicYear: 'Academic year 2025–2026', rank: 'Rank',
    courses: 'Selected coursework', courseName: 'Course', grade: 'Grade', english: 'English proficiency',
    campus: 'Leadership & campus service', practice: 'Volunteering & fieldwork',
    hours: '92 hours of volunteer service, June 2025–June 2026.',
    stella: 'Stella Club talk', classPost: 'Class stories',
    chinaDaily: 'China Daily coverage', topPost: 'Selected profile article', jinzhai: 'Jinzhai fieldwork video',
    footer: 'Last updated October 2026', top: 'Back to top',
  },
  zh: {
    nav: ['关于我', '近期动态', '研究', '课程项目', '教育背景', '个人荣誉', '学生工作与实践'],
    role: '自动化专业本科生', college: '新雅书院', university: '清华大学',
    location: '中国 · 北京', more: '展开更多', less: '收起', archive: '更多动态',
    interests: '研究兴趣', equal: '共同第一作者', corresponding: '通讯作者',
    submitted: '已投稿 ICLR 2027', enlarge: '查看完整主图',
    heir: 'HEIR 将人类语音、实测注视和第一视角视频与机器人观测及导航、操作轨迹结合，用于研究以人为中心的意图定位、执行规划与长时序任务完成。',
    caption: '连续交互场景中的人类意图、机器人导航与操作子任务。',
    carTitle: '小车电子技术课程设计', car: '电子技术课程设计中的小车任务控制项目，具体任务与实现见 GitHub 仓库。',
    yanTitle: 'Yanshee 机器人障碍赛项目', yan: '智能机器人交叉训练中的 Yanshee 机器人开发与障碍赛控制项目，具体任务与实现见 GitHub 仓库。',
    yanAlt: 'Yanshee 机器人障碍赛的四段同步演示',
    carAlt: '小车课程答辩中的红外循迹与状态切换示意图',
    degree: '自动化专业 · 工学学士', school: '清华大学', xinya: '新雅书院', expected: '预计',
    cumulative: '累计', academicYear: '2025—2026 学年', rank: '专业排名',
    courses: '代表课程', courseName: '课程', grade: '成绩', english: '英语水平',
    campus: '学生工作与活动组织', practice: '志愿服务与社会实践',
    hours: '2025.06—2026.06 累计志愿服务 92 小时。',
    stella: 'Stella Club 分享', classPost: '四三帧栏目',
    chinaDaily: '中国日报报道', topPost: '十佳推送相关文章', jinzhai: '金寨实践视频',
    footer: '更新于 2026 年 10 月', top: '返回顶部',
  },
};
const ids = ['about', 'news', 'research', 'projects', 'education', 'awards', 'service'];
const esc = value => String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const external = (url, label, cls = '') => `<a class="${cls}" href="${esc(url)}" target="_blank" rel="noopener noreferrer">${label}</a>`;
const icons = {
  mail: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 6 9 7 9-7"/></svg>',
  github: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M12 .75a11.25 11.25 0 0 0-3.56 21.92c.56.1.77-.24.77-.54v-2.1c-3.14.68-3.8-1.33-3.8-1.33-.52-1.3-1.26-1.65-1.26-1.65-1.03-.7.08-.69.08-.69 1.14.08 1.73 1.17 1.73 1.17 1.01 1.73 2.65 1.23 3.3.94.1-.73.4-1.23.72-1.51-2.51-.29-5.15-1.26-5.15-5.59 0-1.24.44-2.25 1.17-3.04-.12-.29-.5-1.44.11-3 0 0 .95-.3 3.09 1.16a10.74 10.74 0 0 1 5.62 0c2.14-1.46 3.08-1.16 3.08-1.16.62 1.56.23 2.71.12 3a4.37 4.37 0 0 1 1.16 3.04c0 4.34-2.64 5.29-5.16 5.58.4.35.77 1.04.77 2.09v3.1c0 .3.2.65.78.54A11.25 11.25 0 0 0 12 .75Z"/></svg>',
  scholar: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14ZM12 0 0 9.5l4.838 3.94A8.001 8.001 0 0 1 12 9a8.001 8.001 0 0 1 7.162 4.44L24 9.5Z"/></svg>',
};
function iconLink(url, type, label, newTab = true) {
  return `<a class="icon-button" href="${esc(url)}" aria-label="${esc(label)}" title="${esc(label)}"${newTab ? ' target="_blank" rel="noopener noreferrer"' : ''}>${icons[type]}</a>`;
}
function markdown(value) {
  return esc(value)
    .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, (_, label, url) => external(url.replace(/&amp;/g, '&'), label))
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
}
function dateLabel(value, lang) {
  if (lang === 'zh') return value;
  return value.replace(/ 年暑假/g, ' summer').replace(/ 年寒假/g, ' winter').replace(/—今/g, '–present').replace(/—/g, '–');
}
function sectionHead(id, title) { return `<h2 id="${id}">${title}</h2>`; }
function renderSidebar(lang) {
  const t = text[lang];
  return `<a class="portrait-link" href="#about" aria-label="Zhenghan Zhu"><img class="portrait" src="assets/images/profile.jpg" alt="Zhenghan Zhu / 朱正涵" width="180" height="210" fetchpriority="high"></a>
    <h1>${lang === 'en' ? 'Zhenghan Zhu' : '朱正涵'}</h1>
    <p class="other-name">${lang === 'en' ? '朱正涵' : 'Zhenghan Zhu'}</p>
    <p class="affiliation">${t.role}<br>${t.college}, ${t.university}</p>
    <p class="location">${t.location}</p>
    <div class="profile-links">${iconLink('mailto:zhuzh24@mails.tsinghua.edu.cn', 'mail', 'Email: zhuzh24@mails.tsinghua.edu.cn', false)}${iconLink('https://github.com/Mars0418', 'github', 'GitHub')}${iconLink('https://scholar.google.com/citations?user=Pjnm7e4AAAAJ&hl=en', 'scholar', 'Google Scholar')}<a class="cv-button" href="assets/Zhenghan-Zhu-CV.pdf" title="${lang === 'en' ? 'Curriculum Vitae' : '个人简历'}" target="_blank" rel="noopener">${lang === 'en' ? 'CV' : '简历'}</a></div>
    <nav class="section-nav" aria-label="${lang === 'en' ? 'Sections' : '页面栏目'}">${ids.map((id, i) => `<a href="#${id}">${t.nav[i]}</a>`).join('')}</nav>`;
}
function renderMain(data, lang) {
  const t = text[lang];
  const about = data.about[lang];
  const prefix = lang === 'en' ? 'My research interests include ' : '我的研究兴趣包括';
  const interest = about[1].replace(prefix, '').replace(/[。.]+$/, '');
  const newsItem = item => `<li><span class="date">${esc(dateLabel(item.date, lang))}</span><span>${markdown(item[lang])}</span></li>`;
  const authors = data.authors.map(([name, slug, mark]) => `${external('https://openreview.net/profile?id=~' + slug, name === 'Zhenghan Zhu' ? `<strong>${name}</strong>` : name)}${mark ? `<sup>${mark}</sup>` : ''}`).join(', ');
  const serviceItem = (item, kind, index) => {
    let links = '';
    if (kind === 'campus' && index === 3) links = external(data.links.stella, t.stella);
    if (kind === 'campus' && index === 4) links = external(data.links.classPost, t.classPost);
    if (kind === 'practice' && index === 0) links = `${external(data.links.chinaDaily, t.chinaDaily)} · ${external(data.links.topPost, t.topPost)}`;
    if (kind === 'practice' && index === 3) links = external(data.links.jinzhai, t.jinzhai);
    return `<article class="service-item"><div class="item-heading"><h4>${esc(item.title[lang])}</h4><span class="date">${esc(item.date[lang])}</span></div><ul>${item.body[lang].map(v => `<li>${markdown(v)}</li>`).join('')}</ul>${lang === 'en' && links ? `<p class="related-links">${links}</p>` : ''}</article>`;
  };
  return `<section aria-labelledby="about">${sectionHead('about', t.nav[0])}
    <p>${esc(about[0])} ${esc(about[1])}</p><p class="beyond">${esc(about[2])}</p>
  </section>
  <section aria-labelledby="news">${sectionHead('news', t.nav[1])}
    <ul class="timeline news-selected">${data.news.map(newsItem).join('')}</ul>
    <div id="news-archive" hidden><h3 class="archive-heading">${t.archive}</h3><ul class="timeline">${data.archive.map(newsItem).join('')}</ul></div>
    <button class="text-button" id="news-toggle" type="button" aria-expanded="false" aria-controls="news-archive">${t.more} <span aria-hidden="true">↓</span></button>
  </section>
  <section aria-labelledby="research">${sectionHead('research', t.nav[2])}
    <article class="research-item"><h3>HEIR: Harness Egocentric Intent for Human-Robot Interactions</h3>
      <p class="authors">${authors}</p><p class="author-notes"><sup>*</sup> ${t.equal} &nbsp; <sup>†</sup> ${t.corresponding}</p>
      <p class="publication-status">${t.submitted} <span class="date">2026.09</span></p>
      <figure class="research-figure"><a href="assets/images/heir-teaser-original.png" data-lightbox aria-label="${t.enlarge}" target="_blank"><img src="assets/images/heir-teaser.webp" alt="${esc(t.caption)}" width="2400" height="1429" loading="lazy"></a><figcaption>${t.caption} <a href="assets/images/heir-teaser-original.png" data-lightbox>${t.enlarge} ↗</a></figcaption></figure>
      <p>${t.heir}</p><div class="resource-links">${external(data.links.project, 'Project', 'resource-link')}${external(data.links.dataset, 'Dataset', 'resource-link')}</div>
    </article>
  </section>
  <section aria-labelledby="projects">${sectionHead('projects', t.nav[3])}
    <article class="project-item"><a class="project-image" href="assets/images/robot-car-slide3.webp" data-lightbox aria-label="${esc(t.carTitle)}"><img src="assets/images/robot-car-slide3.webp" alt="${esc(t.carAlt)}" width="1920" height="1080" loading="lazy"></a><div><h3>${t.carTitle}</h3><p class="date">2026.09–2026.10</p><p>${t.car}</p>${external(data.links.car, 'GitHub ↗', 'project-code')}</div></article>
    <article class="project-item"><a class="project-image" href="assets/images/yanshee-four-clips.gif" target="_blank" aria-label="${esc(t.yanTitle)}"><picture><source media="(prefers-reduced-motion: reduce)" srcset="assets/images/yanshee-four-clips-poster.jpg"><img src="assets/images/yanshee-four-clips.gif" alt="${esc(t.yanAlt)}" width="772" height="440" loading="lazy"></picture></a><div><h3>${t.yanTitle}</h3><p class="date">2026.02–2026.06</p><p>${t.yan}</p>${external(data.links.yanshee, 'GitHub ↗', 'project-code')}</div></article>
  </section>
  <section aria-labelledby="education">${sectionHead('education', t.nav[4])}
    <div class="education-heading"><div><h3>${t.school}</h3><p>${t.xinya} · ${t.degree}</p></div><span class="date">2024.09–2028.06 (${t.expected})</span></div>
    <div class="academic-stats"><div><p class="stat-period">${t.cumulative} · 2024.09–2026.06</p><p><strong>GPA <span>3.935</span><small>/ 4.0</small></strong><span class="rank">${t.rank}: <b>12 / 170</b></span></p></div><div><p class="stat-period">${t.academicYear}</p><p><strong>GPA <span>3.98</span><small>/ 4.0</small></strong><span class="rank">${t.rank}: <b>5 / 170</b></span></p></div></div>
    <p class="english"><strong>${t.english}:</strong> CET-4: 623 &nbsp;·&nbsp; CET-6: 624</p>
    <details class="coursework"><summary>${t.courses}</summary><table><thead><tr><th scope="col">${t.courseName}</th><th scope="col">${t.grade}</th></tr></thead><tbody>${data.courses.map(c => `<tr><td>${esc(c[lang])}</td><td>${esc(c.grade)}</td></tr>`).join('')}</tbody></table></details>
  </section>
  <section aria-labelledby="awards">${sectionHead('awards', t.nav[5])}<ul class="timeline awards-list">${data.awards.map(newsItem).join('')}</ul></section>
  <section aria-labelledby="service">${sectionHead('service', t.nav[6])}<h3 class="subsection-title">${t.campus}</h3>${data.service.campus.map((item, i) => serviceItem(item, 'campus', i)).join('')}<h3 class="subsection-title practice-heading">${t.practice}</h3>${data.service.practice.map((item, i) => serviceItem(item, 'practice', i)).join('')}<p class="volunteer-hours">${t.hours}</p></section>
  <footer><span>${t.footer}</span><a href="#about">${t.top} ↑</a></footer>`;
}
if (typeof module !== 'undefined') module.exports = {renderMain, renderSidebar, text, ids};
else window.SiteRenderer = {renderMain, renderSidebar, text, ids};
