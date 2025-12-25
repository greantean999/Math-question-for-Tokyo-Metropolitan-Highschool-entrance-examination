// problems_db.js
const MasterDatabase = {
    // 大問1(1)
    d1_q1: [
        { q: String.raw`$1 - 6 \times (-2)$`, a: String.raw`$13$`, e: String.raw`$1 - (-12) = 1 + 12 = 13$` },
        { q: String.raw`$8a + b - (a - 7b)$`, a: String.raw`$7a + 8b$`, e: String.raw`$8a + b - a + 7b = 7a + 8b$` },
        // ...ここに以前作成した20問を順次コピペ
    ],
    // 大問1(2)
    d1_q2: [
        { q: String.raw`$(\sqrt{3} + 1)^2$`, a: String.raw`$4 + 2\sqrt{3}$`, e: String.raw`$3 + 2\sqrt{3} + 1 = 4 + 2\sqrt{3}$` },
        // ...10問コピペ
    ],
    // 大問1(3)
    d1_q3: [
        { q: String.raw`$9x - 4 = 5(x + 4)$`, a: String.raw`$x = 6$`, e: String.raw`$9x - 4 = 5x + 20$ より $4x = 24$` },
        // ...10問コピペ
    ],
    // 同様に d1_q4 〜 d5 まで作成
};
