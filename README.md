### Angular2 + JSPM

- Original: https://gist.github.com/robwormald/429e01c6d802767441ec
- Tutorial: https://www.youtube.com/watch?v=_-CD_5YhJTA

### ตั้งตั้ง jspm

```bash
npm install -g jspm
```

### ตั้ดตั้งไลบรารี่ JavaScript

```bash
jspm init
jspm install angular2 reflect-metadata zone.js es6-shim
```

จะได้ไฟล์ `config.js` ซึ่งเป็นคอนฟิกของ `System.js` ส่วนไลบรารี่จะถูกตั้งติดตั้งใน `jspm_packages`

### เริ่มเขียนโค้ด

สร้างไฟล์ `main.ts` โดยเก็บไว้ใน `src`

```javascript
import "reflect-metadata";
import "es6-shim"
// import "zone.js"

import { Component } from "angular2/core";
import { bootstrap } from "angular2/platform/browser";

@Component({
    selector: "my-app",
    template: "<h1>First Angular 2 App</h1>"
})
class AppComponent {

}

bootstrap(AppComponent);
```

สร้างไฟล์ `index.html`

```html
<html>
<head>
    <title>Demo App</title>
    <!-- systemJS loader and config -->
    <script src="/jspm_packages/system.js"></script>
    <script src="/config.js"></script>
</head>
<body>
    <!-- our angular2 component -->
    <my-app/>

    <!-- import and run our app -->
    <script>
      System.import("zone.js");
      System.import('/src/js/app');
    </script>
</body>
</html>
```

### Bundle ไลบรารี่ต่าง ๆ ไว้ในไฟล์เดียวกัน

```bash
jspm bundle src/js/app src/js/build.js
```

Import script เพิ่มในไฟล์ `index.html`

```html
<script src="/src/js/build.js"></script>
```

### Issue

ไม่สามารถ `import zone.js`

https://github.com/angular/zone.js/issues/297

แก้โดยเพิ่ม `System.import("zooe.js")` ในไฟล์ `index.html`

```
<script>
  System.import("zone.js");
  System.import('/src/js/app');
</script>
```
