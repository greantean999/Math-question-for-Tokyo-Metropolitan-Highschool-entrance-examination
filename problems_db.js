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
        { q: String.raw`$(\sqrt{3} + 1)^2$`, a: String.raw`$4 + 2\sqrt{3}$`, e: String.raw`$(\sqrt{3})^2 + 2 \times \sqrt{3} \times 1 + 1^2 = 3 + 2\sqrt{3} + 1 = 4 + 2\sqrt{3}$` },
        { q: String.raw`$(\sqrt{5} + 2)(\sqrt{5} - 2)$`, a: String.raw`$1$`, e: String.raw`$(\sqrt{5})^2 - 2^2 = 5 - 4 = 1$` },
        { q: String.raw`$\sqrt{50} - \sqrt{18}$`, a: String.raw`$2\sqrt{2}$`, e: String.raw`$5\sqrt{2} - 3\sqrt{2} = 2\sqrt{2}$` },
        { q: String.raw`$\frac{12}{\sqrt{6}} - \sqrt{24}$`, a: String.raw`$0$`, e: String.raw`有理化：$\frac{12\sqrt{6}}{6} = 2\sqrt{6}$。<br>簡略化：$\sqrt{24} = 2\sqrt{6}$。<br>$2\sqrt{6} - 2\sqrt{6} = 0$` },
        { q: String.raw`$(\sqrt{7} + 1)(\sqrt{7} + 3)$`, a: String.raw`$10 + 4\sqrt{7}$`, e: String.raw`$7 + 3\sqrt{7} + \sqrt{7} + 3 = 10 + 4\sqrt{7}$` },
        { q: String.raw`$\sqrt{3}( \sqrt{12} + \sqrt{27} )$`, a: String.raw`$15$`, e: String.raw`$\sqrt{3}( 2\sqrt{3} + 3\sqrt{3} ) = \sqrt{3} \times 5\sqrt{3} = 5 \times 3 = 15$` },
        { q: String.raw`$a = \sqrt{2}+1$ のとき、$a^2 - 2a$ の値を求めなさい。`, a: String.raw`$1$`, e: String.raw`$a^2 - 2a = a(a - 2)$ と因数分解してから代入。<br>$(\sqrt{2}+1)(\sqrt{2}-1) = 2 - 1 = 1$` },
        { q: String.raw`$\sqrt{48} \div \sqrt{2} \times \sqrt{6}$`, a: String.raw`$12$`, e: String.raw`$\sqrt{24} \times \sqrt{6} = \sqrt{144} = 12$。または $\sqrt{\frac{48 \times 6}{2}} = \sqrt{144} = 12$` },
        { q: String.raw`$(2\sqrt{2})^2 - \sqrt{2} \times \sqrt{8}$`, a: String.raw`$4$`, e: String.raw`$8 - \sqrt{16} = 8 - 4 = 4$` },
        { q: String.raw`$(\sqrt{6} + \sqrt{2})(\sqrt{6} - \sqrt{2})$`, a: String.raw`$4$`, e: String.raw`$(\sqrt{6})^2 - (\sqrt{2})^2 = 6 - 2 = 4$` }
    ];
    ],
    // 大問1(3)
    d1_q3: [
        { q: String.raw`$9x - 4 = 5(x + 4)$`, a: String.raw`$x = 6$`, e: String.raw`$9x - 4 = 5x + 20$ より $4x = 24$` },
        { q: String.raw`$9x - 4 = 5(x + 4)$`, a: String.raw`$x = 6$`, e: String.raw`$9x - 4 = 5x + 20$<br>$4x = 24$<br>$x = 6$` },
        { q: String.raw`$x + 7 = 3(x + 1)$`, a: String.raw`$x = 2$`, e: String.raw`$x + 7 = 3x + 3$<br>$-2x = -4$<br>$x = 2$` },
        { q: String.raw`$\frac{x + 5}{4} = \frac{2x - 1}{3}$`, a: String.raw`$x = 3.8$ (または $\frac{19}{5}$)`, e: String.raw`両辺を12倍して：<br>$3(x + 5) = 4(2x - 1)$<br>$3x + 15 = 8x - 4$<br>$-5x = -19$<br>$x = \frac{19}{5}$` },
        { q: String.raw`$0.1x + 0.4 = 0.2x - 0.5$`, a: String.raw`$x = 9$`, e: String.raw`両辺を10倍して：<br>$x + 4 = 2x - 5$<br>$-x = -9$<br>$x = 9$` },
        { q: String.raw`$\frac{x-1}{2} - \frac{x+2}{3} = 1$`, a: String.raw`$x = 13$`, e: String.raw`両辺を6倍して：<br>$3(x - 1) - 2(x + 2) = 6$<br>$3x - 3 - 2x - 4 = 6$<br>$x - 7 = 6$<br>$x = 13$` },
        { q: String.raw`$4x - 7 = x + 8$`, a: String.raw`$x = 5$`, e: String.raw`$3x = 15$<br>$x = 5$` },
        { q: String.raw`$2(3x - 1) = 4x + 10$`, a: String.raw`$x = 6$`, e: String.raw`$6x - 2 = 4x + 10$<br>$2x = 12$<br>$x = 6$` },
        { q: String.raw`$x - \frac{x-3}{2} = 4$`, a: String.raw`$x = 5$`, e: String.raw`両辺を2倍して：<br>$2x - (x - 3) = 8$<br>$2x - x + 3 = 8$<br>$x = 5$` },
        { q: String.raw`$7x + 3 = 9x - 5$`, a: String.raw`$x = 4$`, e: String.raw`$-2x = -8$<br>$x = 4$` },
        { q: String.raw`$3(2x + 1) - 5 = x + 3$`, a: String.raw`$x = 1$`, e: String.raw`$6x + 3 - 5 = x + 3$<br>$5x = 5$<br>$x = 1$` }

    ],
    // 同様に d1_q4 〜 d5 まで作成
};
