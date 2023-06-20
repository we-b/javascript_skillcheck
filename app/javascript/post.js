function post (){
  const submit = document.getElementById("submit_btn");  //送信ボタンを取得
  submit.addEventListener("click", (e) => {  //イベントの発火させる
    //console.log(document.getElementById("new_article"));  コンソール上に表示するのは、フォームの情報です。フォームにはnew_articleというidが付与されているため、getElementByIdを用いて取得。ブラウザで投稿確認したら削除する！
    const formData = new FormData(document.getElementById("new_article")); //フォームの情報を取得し、Ajaxで送信できる形へと整形しています。
    const XHR = new XMLHttpRequest(); //Ajaxに利用するオブジェクトを生成しています。
    XHR.open("POST", "/articles", true); //Ajaxに関する情報を初期化し、URIを設定しています。articlesコントローラーのcreateアクションが動きます。
    XHR.responseType = "json"; //レスポンスとして求めるデータ形式を指定しています。
    XHR.send(formData); //Ajaxで送信しています。
    XHR.onload = () => {  //XHR.onloadは、Ajaxによる処理が終了したあとに呼び出されるイベントハンドラー。Ajax処理が完了するとアロー関数内に定義した処理が実行される。
      if (XHR.status != 200) { //HTTPステータスコードが200以外のとき
        alert(`Error ${XHR.status}: ${XHR.statusText}`);  //XHR.statusはHTTPステータスコードを表しています。XHR.statusTextはそのステータスを表す文言が含まれています。
        return null;
      };  //11行目~14行目
      //console.log(XHR.response.article); ブラウザでレスポンシブの内容が確認できたら削除する！
      const item = XHR.response.article; //レスポンスのうち、コントローラー側で指定したjson形式のデータを変数に代入しています。
      const contentsArea = document.getElementById("contents_area"); //今回投稿したデータを追加する要素を取得しています。今回追加する要素の親要素にあたります。
      const articleText = document.getElementById("article_text"); //フォーム投稿の際にテキストを入力した、テキストエリアを取得しています。
      const HTML = `  
        <div class="article">
          ${ item.text }
        </div>`; //15行目から18行目で、今回追加する要素を定義しています。${ item.text }によって、レスポンスとして返されたデータのうち、textのプロパティを指定しています。textカラムの情報だけ表示させる
      contentsArea.insertAdjacentHTML("afterbegin", HTML);  //親要素に直前で定義した要素を追加しています。最上部に表示する（afterbeginを指定する）
      articleText.value = ""; //フォームの入力欄を空にしています。処理が完了したら、フォームのテキストエリアは空にする

      const charNum  = document.getElementById("char_num");  //「○○文字」と表示される部分のidを取得する
      charNum.innerHTML = "0文字";  //0文字」という文字列を挿入すれば、POSTボタンをクリックした時に「0文字」と表示させる
    };
    e.preventDefault();
  });
};

window.addEventListener('load', post);   //ページが読み込まれたら」を実現するためには、window.addEventListener('load', 【実際に行う処理】);
