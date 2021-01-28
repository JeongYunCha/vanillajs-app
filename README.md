# SPA with vanilla JS

[Live App]()

---

### 프로젝트 실행

```bash
$ npm install
$ npm start
```

### 프로젝트 모듈(파일) 구조

```
vanillajs-app/
├── node_modules
├── public
│   ├── bundle.js
│   └── index.html
├── src
│   ├── assets
│   │   └── (...이미지 파일)
│   ├── components
│   │   ├── Component.ts -> abstract class
│   │   └── (...컴포넌트 파일)
│   ├── pages
│   │   ├── Page.ts ------> abstract class
│   │   ├── HomePage.ts
│   │   ├── AlarmPage.ts
│   │   ├── MemoPage.ts
│   │   └── PhotoPage.ts
│   ├── App.css
│   ├── App.ts
│   ├── index.ts ---------> entry file
│   └── util.ts
├── .gitignore
├── package-lock.json
├── package.json
├── tsconfig.json
└── webpack.config.js
```
