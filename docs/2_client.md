# 2. クライアントサイドJS

## DOM
- Document Object Model
- HTMLをブラウザが解釈した構造的な何か
- 構造を操作するためのAPIが用意されている
- クライアントサイドJSでやることのほとんどはDOM操作

## jQuery
- DOM操作のAPIはわかりづらい
- Ajax(後述)のAPI
- DOM操作やAjaxを直感的に行えるようにするライブラリ
- ブラウザ間の差を吸収してくれる

## 【ワーク】jQueryでDOM操作してみる

## Ajax
- Asynchronous JavaScript + XML
- 非同期通信を行う技術の総称
	- Ajaxという名前の何かがあるわけではない
- ページ遷移なしで画面を更新することが可能
	- SPA (Single Page Application)
	- ちゃんと設計しないと死ぬ

## 【ワーク】jQueryでAjaxしてみる

## JSフレームワーク
- サラッと紹介するだけに留める

### JSフレームワークとは
- サーバーサイド同様、クライアントサイドも大規模になってくると複雑になりがち
- 枠組みにそって開発する
	- ドメインロジックとプレゼンテーションの分離
	- テスタビリティ
- JSだとMVVMパターンが多い

### 主要JSフレームワーク
- AngularJS
- Backbone.js
- Ember.js
- Vue.js
- Flux + React
