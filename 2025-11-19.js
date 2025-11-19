function convert(heading) {

  //　正規表現でMarkDown見出しのフォーマットをチェック
  const regex = /^(\s*)(#{1,6})\s(.+)$/;
  const match = heading.match(regex);

  // フォーマットが不正な場合
  if (!match) {
    return "Invalid format";
  }

  const hashes = match[2]; // #の部分
  const text = match[3].trim(); // 見出しテキスト

  // #の数が1個から6個出ない場合
  if (hashes.length < 1 || hashes.length > 6) {
    return "Invalid format";
  }

  const level = hashes.length;
  return `<h${level}>${text}</h${level}>`;
}