function count (){
  // console.log("文字カウントを実装");（問題1で試しに記述）

  // 文字を入力する要素を取得
  const articleText  = document.getElementById("article_text");
  // その要素に何らかのキーボード操作が↓あった場合に、イベントが発火するように
  articleText.addEventListener("keyup", () => {
    // 取得した要素に含まれている値を出力
    // console.log(articleText.value);（問題2で試しに記述）
    // 文字の数を数えるためには、lengthメソッドで文字数を出力
    // console.log(articleText.value.length);（問題3で試しに記述）

    // 入力されている文字数をカウントした結果を取得
    const countVal = articleText.value.length;
    // 実際に文字を置き換えたい部分の要素（char_numというid↓が付与）を取得
    const charNum  = document.getElementById("char_num");
    // 取得した要素に対して、innerHTMLを用いて「0文字」と表示されている部分を置き換える
    charNum.innerHTML = `${countVal}文字`;
  });


}


// ページが読み込まれたら実行
window.addEventListener('load', count);