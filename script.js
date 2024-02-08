// BOSS1の配列
const BOSS1 = ["無相の雷","無相の風","無相の岩","純水精霊","急凍樹","爆炎樹","エンシェントヴィシャップ","無相の氷","魔偶剣鬼","恒常からくり陣形",
"無相の炎","無相の水","雷音権現","黄金王獣","アビサルヴィシャップ","遺跡サーペント","マッシュラプトル","迅電樹","兆載永劫ドレイク",
"半永久統制マトリックス","風蝕ウェネト","深罪の浸礼者","鉄甲熔炎帝王", "氷風組曲", "千年真珠の海駿", "実験用フィールド生成装置", "水形タルパ", "アンドリアス"];

// BOSS2の配列
const BOSS2 = ["無相の雷","無相の風","無相の岩","純水精霊","急凍樹","爆炎樹","エンシェントヴィシャップ","無相の氷","魔偶剣鬼","恒常からくり陣形",
"無相の炎","無相の水","雷音権現","黄金王獣","アビサルヴィシャップ","遺跡サーペント","マッシュラプトル","迅電樹","兆載永劫ドレイク",
"半永久統制マトリックス","無相の草","風蝕ウェネト","深罪の浸礼者","鉄甲熔炎帝王", "氷風組曲", "千年真珠の海駿", "実験用フィールド生成装置", "水形タルパ", "アンドリアス"];

// BOSS3の配列
const BOSS3 = ["無相の雷","無相の風","無相の岩","純水精霊","急凍樹","爆炎樹","エンシェントヴィシャップ","無相の氷","魔偶剣鬼","恒常からくり陣形",
"無相の炎","無相の水","雷音権現","黄金王獣","アビサルヴィシャップ","遺跡サーペント","マッシュラプトル","迅電樹","兆載永劫ドレイク",
"半永久統制マトリックス","無相の草","風蝕ウェネト","深罪の浸礼者","鉄甲熔炎帝王", "氷風組曲", "千年真珠の海駿", "実験用フィールド生成装置",
"水形タルパ", "アンドリアス","タルタリヤ","若陀龍王","淑女","雷電将軍","マシュ","アペプ", "呑星の鯨"];

// ページ読み込み時にリストを更新
window.onload = updateList;

// リストを更新する関数
function updateList() {
    const usedCharacters = {}; // 使用された文字を格納するオブジェクト
    const list = document.getElementById("random-characters-list");

    // リストを初期化
    list.innerHTML = '';

    // 一人枠
    let randomChar = getRandomElement(BOSS1);
    addCharacterToList("一人枠", randomChar, list);
    usedCharacters[randomChar] = true;

    randomChar = getRandomElement(BOSS1.filter(char => !usedCharacters[char]));
    addCharacterToList("一人枠", randomChar, list);
    usedCharacters[randomChar] = true;

    // 二人枠
    for (let i = 0; i < 2; i++) {
        randomChar = getRandomElement(BOSS2.filter(char => !usedCharacters[char]));
        addCharacterToList("二人枠", randomChar, list);
        usedCharacters[randomChar] = true;
    }

    // 三人枠
    for (let i = 0; i < 3; i++) {
        randomChar = getRandomElement(BOSS2.filter(char => !usedCharacters[char]));
        addCharacterToList("三人枠", randomChar, list);
        usedCharacters[randomChar] = true;
    }

    // 四人枠
    randomChar = getRandomElement(BOSS3.filter(char => !usedCharacters[char]));
    addCharacterToList("四人枠", randomChar, list);
}

// ランダムな文字を選択する関数
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// リストに文字を追加する関数
function addCharacterToList(slot, character, list) {
    const listItem = document.createElement("li");
    listItem.textContent = slot + ": " + character;
    list.appendChild(listItem);
}
