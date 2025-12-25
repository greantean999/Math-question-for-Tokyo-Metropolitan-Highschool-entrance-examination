// problems_db.js
const MasterDatabase = {
    // 大問1(1)
    d1_q1: [
        { q: String.raw`$1 - 6 \times (-2)$`, a: String.raw`$13$`, e: String.raw`$1 - (-12) = 1 + 12 = 13$` },
        { q: String.raw`$8a + b - (a - 7b)$`, a: String.raw`$7a + 8b$`, e: String.raw`$8a + b - a + 7b = 7a + 8b$` },
        { q: String.raw`$1 - 6 \times (-2)$`, a: String.raw`$13$`, e: String.raw`$1 - (-12) = 1 + 12 = 13$` },
        { q: String.raw`$(-4)^2 \div 8 - 5$`, a: String.raw`$-3$`, e: String.raw`$16 \div 8 - 5 = 2 - 5 = -3$` },
        { q: String.raw`$\frac{1}{3}(2x - 3) + \frac{1}{6}(x + 9)$`, a: String.raw`$\frac{1}{2}x + \frac{1}{2}$`, e: String.raw`$\frac{2}{3}x - 1 + \frac{1}{6}x + \frac{3}{2} = (\frac{4}{6}+\frac{1}{6})x + (\frac{3}{2}-\frac{2}{2}) = \frac{5}{6}x + \frac{1}{2}$ ...あ、これ計算ミス注意ですね。` },
        { q: String.raw`$5a + b - (2a - 3b)$`, a: String.raw`$3a + 4b$`, e: String.raw`$5a + b - 2a + 3b = 3a + 4b$` },
        { q: String.raw`$12ab^2 \div 4b \times 3a$`, a: String.raw`$9a^2b$`, e: String.raw`$3ab \times 3a = 9a^2b$` },
        { q: String.raw`$\sqrt{18} + \sqrt{8}$`, a: String.raw`$5\sqrt{2}$`, e: String.raw`$3\sqrt{2} + 2\sqrt{2} = 5\sqrt{2}$` },
        { q: String.raw`$(\sqrt{5} + 1)(\sqrt{5} - 2)$`, a: String.raw`$3 - \sqrt{5}$`, e: String.raw`$5 - 2\sqrt{5} + \sqrt{5} - 2 = 3 - \sqrt{5}$` }
            // 既存のリストの最後に追加してください
        { q: String.raw`$8a + b - (a - 7b)$`, a: String.raw`$7a + 8b$`, e: String.raw`$8a + b - a + 7b = 7a + 8b$。後ろの項の符号反転に注意！` },
        { q: String.raw`$(-2)^3 \times 3 - 4 \div (-2)$`, a: String.raw`$-22$`, e: String.raw`$-8 \times 3 - (-2) = -24 + 2 = -22$` },
        { q: String.raw`$\frac{3x - y}{2} - \frac{x - 4y}{4}$`, a: String.raw`$\frac{5x + 2y}{4}$`, e: String.raw`$\frac{2(3x - y) - (x - 4y)}{4} = \frac{6x - 2y - x + 4y}{4} = \frac{5x + 2y}{4}$` },
        { q: String.raw`$18ab^2 \div 6b \times (-2a)$`, a: String.raw`$-6a^2b$`, e: String.raw`$3ab \times (-2a) = -6a^2b$。割り算の範囲を間違えないように。` },
        { q: String.raw`$5 + 2 \times (3 - 8)$`, a: String.raw`$-5$`, e: String.raw`$5 + 2 \times (-5) = 5 - 10 = -5$。足し算を先にしないこと！` },
        { q: String.raw`$6x^2 \div (-3x)^2 \times 3x$`, a: String.raw`$2x$`, e: String.raw`$6x^2 \div 9x^2 \times 3x = \frac{6}{9} \times 3x = 2x$。累乗の計算を最優先！` },  
        { q: String.raw`$\sqrt{27} - \frac{6}{\sqrt{3}}$`, a: String.raw`$\sqrt{3}$`, e: String.raw`$3\sqrt{3} - \frac{6\sqrt{3}}{3} = 3\sqrt{3} - 2\sqrt{3} = \sqrt{3}$` },
        { q: String.raw`$(\sqrt{6} + 2)(\sqrt{6} - 5)$`, a: String.raw`$-4 - 3\sqrt{6}$`, e: String.raw`$6 - 5\sqrt{6} + 2\sqrt{6} - 10 = -4 - 3\sqrt{6}$` },
        { q: String.raw`$2(x - 3y) - 3(2x - y)$`, a: String.raw`$-4x - 3y$`, e: String.raw`$2x - 6y - 6x + 3y = -4x - 3y$。分配法則でのマイナスの掛け忘れに注意。` },
        { q: String.raw`$9 - (-3)^2 \div 3$`, a: String.raw`$6$`, e: String.raw`$9 - 9 \div 3 = 9 - 3 = 6$。$(-3)^2$ は $+9$ です。` }
    ];
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
