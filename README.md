# mokuji
 
このプラグインは目次を自動生成するプラグインです。
※このプラグインは完全フリーなので、商用利用なども自由です。
設定した要素内の見出しタグから自動でリンク付きの目次を生成します。
 
# DEMO
 
 ![Demo](https://patoblog.com/wp-content/uploads/2020/02/キャプチャ.jpg)
 
# Features
 
他の目次自動生成プラグインと違うところ
* Wordpress以外にも使用できる
* 見出しの階層に応じて番号が振られる
* 有効な場所を指定できる
 
# Requirement

jquery.js
mokuji.js or mokuji.min.js
mokuji.css
 
# Installation
 
```bash
pip install mokuji
```
 
# Usage

パラメーター
* contentspace : 目次に載せたい見出しタグが入っているボックス（デフォルト：'body'）
* titletag : 有効にする見出しタグ（デフォルト：'h1,h2,h3,h4,h5,h6'）
* dot : 目次を「list-style: disc;」で表示する（デフォルト：'false'）
* decimal : 目次を見出しタグの強さで階層状にする（デフォルト：'true'）
 
```bash
<link rel="stylesheet" type="text/css" href="css/mokuji.css">
<script type="text/javascript" src="js/jquery-3.3.1.min.js"></script>
<script type="text/javascript" src="js/mokuji.min.js"></script>
$('.mokuji').mokuji(
	{
		contentspace: '.singlepage',
		titletag: 'h2,h3,h4',
		dot           : false,
		decimal       : true
	}
);
<div class="mokuji"></div>
<div class="singlepage">
	<h2>aaaaa</h2>
	<h2>bbbbb</h2>
	<h3>ccccc</h3>
	<h3>ddddd</h3>
	<h2>eeeee</h2>
	<h3>fffff</h3>
	<h4>ggggg</h4>
	<h4>hhhhh</h4>
</div>
```
 
# Note
 
このプラグインはシンプルな作りにしているので、スタイルなどはお好みで変更してください。
 
# Author
 
作成情報を列挙する
 
* patoblog
 
# License
free