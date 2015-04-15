$(function(){ // ページの読み込みが完了したらこの関数が実行される

  // チェス盤を初期化する関数
  function init(){
    // 今のチェス盤を空にする
    $("#chessboard").empty();

    // 8x8 のマスを作る
    for (var i=0; i<8; i++){
      var tr = $("<tr/>");       // 新しい列を作る
      for (var j=0; j<8; j++){
        var td = $("<td/>");     // 新しいマスを作る
        td.addClass('able');     // 最初はすべてのマスを able にする
        td.data({ x: i, y: j }); // マスに座標の情報を埋め込む
        tr.append(td);           // 作ったマスを列に追加する
      }
      $("#chessboard").append(tr); // 作った列をチェス盤に追加する
    }
  }

  // able なマスがクリックされたときに関数を実行する
  $(document).on("click", ".able", function(){

     // この関数を実装してみましょう。
     // ここでやるべきことは、
     // ・ クリックされたマスを able から queen に書き換える
     // ・ クリックされたマスの 縦/横/斜め のマスを able から disable に書き換える
     // ・ もし queen を 8 個置くことができていたら「おめでとう！」というalertメッセージを表示する
     // です。

  });

  // リセットボタンを押したらチェス盤を初期化する
  $(".reset").click(init);

  // ページ読み込み時にチェス盤を初期化する
  init();

});
