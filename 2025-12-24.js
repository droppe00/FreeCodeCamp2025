function parseImage(markdown) {

  // 正規表現を使って![]()という塊を抽出
  // まずは /![]()/っていう塊を作る。
  // 次に、 /![(.*?)]((.*?))/ ← (.*?)で任意の文字をグルーピング
  // (なんかこの場合はこの書き方で最短マッチっていうのじゃないとまずいらしい。)
  // 最後に「\」を使って検索
  // → /!\[(.*?)\]\((.*?)\)/
  const regex = /!\[(.*?)\]\((.*?)\)/;

  const match = markdown.match(regex);

  // 1. 入力から[]で囲まれた部分を取得
  // String altTxt として取得
  const altTxt = match[1];

  // 2. 入力から()で囲まれた部分を取得
  // String imgUrl として取得
  const imgUrl = match[2];

  // 3. Htmlタグ形式で出力する。
  // <img src="{imgUrl}" alt="{altTxt}">
  return `<img src="${imgUrl}" alt="${altTxt}">`;

  return markdown;
}