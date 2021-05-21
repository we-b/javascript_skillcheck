function post(){
  const submit = document.getElementById("submit_btn"); //ブラウザelementsの<input type="submit"~>のidの部分を見て、getElementByIdで取得
  submit.addEventListener("click", (e) => {
    // console.log(document.getElementById("new_article")); //投稿したフォームの情報がコンソールに表示される(この"new_article"はブラウザelementsの<form id="new_article"〜>を見て記述。コンソールに表示されることを確認したら削除
    //!この場所の記述でも問題ないが、意味合いとしてはこのメソッドの一番下があってる。e.preventDefault(); 
    const formData = new FormData(document.getElementById("new_article")); //フォームの情報を取得し、Ajaxへ送信できる形へ整形
    const XHR = new XMLHttpRequest(); //Ajax非同期通信のため、Ajaxに利用するオブジェクトを生成
    XHR.open("POST", "/articles", true); //ルート。Ajaxに関する情報を初期化し、URIを設定
    XHR.responseType = "json"; //レスポンスとして求める形式をjson形式に指定
    XHR.send(formData); //Ajaxで送信
    XHR.onload = () => { //サーバからのレスポンス受信に成功して「投稿」内容がブラウザに表示される
      const item = XHR.response.article;
      const contentsArea = document.getElementById("contents_area"); // 今回投稿したデータを追加する要素を取得している。(今回追加する要素の親要素にあたる)
      const articleText = document.getElementById("article_text"); //フォーム投稿の際にテキストを入力した、テキストエリアを取得している(idはブラウザのElementsを見て、フォーム投稿の箱のinput class="article_form"のidをgetElementByIdに記述)
      //今回追加する要素を定義。${item.text}で、レスポンスとして返されたデータのうち、textプロパティを指定している↓
      const HTML =`
        <div class="article">  
          ${item.text}
        </div>`; // class="article"は投稿したそれぞれのテキストを表示しているクラス。${item.text}で入力された各テキストを受けている。
      contentsArea.insertAdjacentHTML("afterbegin", HTML); // 上で定義した(投稿した内容の入っているクラスclass="contents"のid"contents_area"の入った)contentsAreaを用いて、要素を追加している。afterbegin == 親要素内の最上部に追加 == 新規投稿内容が最上部に表示する、の記述    
      articleText.value = ""; //新規投稿が完了したら「フォーム入力蘭」を空にする
    };
    e.preventDefault(); // ブラウザ上に用意されているデフォの送信をキャンセルして、重複送信をさせない 
  })
}

window.addEventListener('load', post);