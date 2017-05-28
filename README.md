# 体重記録アプリのサンプル
- 測定日と体重を記録する

## [bootstrap](https://v4-alpha.getbootstrap.com/)の追加

- cdnの追加
- [form](https://v4-alpha.getbootstrap.com/components/forms/)の作成
- [HTML to JSX](http://magic.reactjs.net/htmltojsx.htm)

## 入力値の取得

- https://facebook.github.io/react/
  - onSubmit
  - onChange
  - value
- Chart Componetの追加

## [react-c3js](https://www.npmjs.com/package/react-c3js)の追加

```
$ npm install --save react-c3js
```
- http://c3js.org/samples/timeseries.html
- convert data

## [Firebase](https://firebase.google.com/)の組み込み

- Firebase Consoleからプロジェクトの作成
- https://firebase.google.com/docs/web/setup
- [npm firebase](https://www.npmjs.com/package/firebase)

```
$ npm install --save firebase
```
- src/config.jsの作成
```js
export const config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
}
```
- index.jsに組み込み

