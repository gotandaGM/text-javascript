# 3. サーバーサイドJS

## CommonJS
- ここ数年でJSのポテンシャルが再発見された
	- ブラウザ以外でも使おう
- しかし独自実装JSが乱立した
	- 統一するために作られた規格が CommonJS
- 従来のJSはI/Oが貧弱
	- 標準入出力
	- File I/O
	- Network I/O
	- require/include
- 今までのJS + I/O = CommonJS

## Node.js
- 最もメジャーな CommonJS 実装
- Google V8 エンジンで動作する

## npm
- Node.js のパッケージ管理ツール
- Gem とか CPAN みたいなもん
- `package.json` で管理する
	- 手で書くことはあまりない

### npm の使い方
```
npm install -g <package>
```

パッケージをグローバルにインストール

```
npm install <package>
```

パッケージをカレントディレクトリにインストール(`./node_modules/`以下にインストールされる)

```
npm install <package> --save
```

パッケージをインストールして `package.json` に追加する

```
npm install <package> --save-dev
```

`package.json` に追加する際に、開発環境のみで使うパッケージとして扱う

```
npm update <package>
```

パッケージをアップデートする(npm自身もアップデートできる)

```
npm run <script>
```

`package.json` に書かれたタスクを実行する

## その他、流行りのツールとか
### nodebrew
- node(npm)のバージョン管理ツール
	- 現状の Node.js の最新版(0.12.x)は結構不安定
	- 0.10.x と使い分けたいことも多い
- plenv とか rbenv みたいなもん

### Grunt / Gulp
- タスクランナー

### Socket.IO
- WebSocket を実現するライブラリ
	- 正確にはちょっと違う
- リアルタイムWebを構築できる
	- チャットみたいな

### Browserify
- クライアントサイドJSでもnodeモジュールが使いたい！
	- しかしブラウザでは `require()` は使えない
- すべてひとつのファイルに固められる

### Bower
- フロントエンド開発用パッケージ管理ツール
	- Twitter製
- サーバーサイドとクライアントサイドのモジュールを区別して管理できる
	- 二重管理が面倒くさいという説も
- npm で全部やったらだめなの？
	- 別に問題ないです

### Yeoman
- サーバーサイドJSはツールが多くてよくわからん
	- Yeoman「俺が全部面倒見てやるよ！！！」

## [ワーク] ChatOpsしてみよう
### Slack
### hubot

### 準備
#### nodebrew をインストール(Macの場合)
```
brew install nodebrew
```

#### 0.10.x の最新版を入れる
```
nodebrew ls-all
nodebrew install-binary v0.10.38
nodebrew use v0.10.38
node -v
```

#### Yeoman の generator をインストール
```
npm install -g generator-hubot
```

#### Yeoman を使って hubot アプリケーションを生成
```
mkdir <botname>
cd <botname>
yo hubot
```

- 対話形式で設定していく
- `? Bot adapter:` と訊かれたら `slack` と答える

### hubot を動かしてみる
```
bin/hubot
```

### 課題
0. おみくじ機能を作ってみましょう
0. 天気を教えてくれる機能を作ってみましょう
0. 好きな機能を考えて実装してみましょう
