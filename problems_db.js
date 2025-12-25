// MasterDatabase の初期化
const MasterDatabase = {};

Object.assign(MasterDatabase, {
    // 大問1(1) 正負の数・文字式
    d1_q1: [
        { q: String.raw`$1 - 6 \times (-2)$`, a: String.raw`$13$`, e: String.raw`$1 - (-12) = 1 + 12 = 13$` },
        { q: String.raw`$(-4)^2 \div 8 - 5$`, a: String.raw`$-3$`, e: String.raw`$16 \div 8 - 5 = 2 - 5 = -3$` },
        { q: String.raw`$8a + b - (a - 7b)$`, a: String.raw`$7a + 8b$`, e: String.raw`$8a + b - a + 7b = 7a + 8b$` },
        { q: String.raw`$(-2)^3 \times 3 - 4 \div (-2)$`, a: String.raw`$-22$`, e: String.raw`$-8 \times 3 - (-2) = -24 + 2 = -22$` },
        { q: String.raw`$\frac{3x - y}{2} - \frac{x - 4y}{4}$`, a: String.raw`$\frac{5x + 2y}{4}$`, e: String.raw`通分して計算。$\frac{6x-2y-x+4y}{4} = \frac{5x+2y}{4}$` },
        { q: String.raw`$18ab^2 \div 6b \times (-2a)$`, a: String.raw`$-6a^2b$`, e: String.raw`$3ab \times (-2a) = -6a^2b$` },
        { q: String.raw`$5 + 2 \times (3 - 8)$`, a: String.raw`$-5$`, e: String.raw`$5 + 2 \times (-5) = 5 - 10 = -5$` },
        { q: String.raw`$6x^2 \div (-3x)^2 \times 3x$`, a: String.raw`$2x$`, e: String.raw`$6x^2 \div 9x^2 \times 3x = \frac{2}{3} \times 3x = 2x$` },
        { q: String.raw`$9 - (-3)^2 \div 3$`, a: String.raw`$6$`, e: String.raw`$9 - 9 \div 3 = 9 - 3 = 6$` },
        { q: String.raw`$7 + (-4) - (-9)$`, a: String.raw`$12$`, e: String.raw`$7 - 4 + 9 = 12$` }
    ],
    // 大問1(2) 平方根
    d1_q2: [
        { q: String.raw`$(\sqrt{3} + 1)^2$`, a: String.raw`$4 + 2\sqrt{3}$`, e: String.raw`$3 + 2\sqrt{3} + 1 = 4 + 2\sqrt{3}$` },
        { q: String.raw`$(\sqrt{5} + 2)(\sqrt{5} - 2)$`, a: String.raw`$1$`, e: String.raw`$5 - 4 = 1$` },
        { q: String.raw`$\sqrt{50} - \sqrt{18}$`, a: String.raw`$2\sqrt{2}$`, e: String.raw`$5\sqrt{2} - 3\sqrt{2} = 2\sqrt{2}$` },
        { q: String.raw`$\frac{12}{\sqrt{6}} - \sqrt{24}$`, a: String.raw`$0$`, e: String.raw`$2\sqrt{6} - 2\sqrt{6} = 0$` },
        { q: String.raw`$\sqrt{3} + \frac{6}{\sqrt{3}}$`, a: String.raw`$3\sqrt{3}$`, e: String.raw`$\sqrt{3} + 2\sqrt{3} = 3\sqrt{3}$` }
    ],
    // 大問1(3) 一次方程式
    d1_q3: [
        { q: String.raw`$9x - 4 = 5(x + 4)$`, a: String.raw`$x = 6$`, e: String.raw`$4x = 24 \Rightarrow x=6$` },
        { q: String.raw`$\frac{x-1}{2} - \frac{x+2}{3} = 1$`, a: String.raw`$x = 13$`, e: String.raw`$3(x-1)-2(x+2)=6 \Rightarrow x=13$` }
    ],
    // 大問1(4) 連立方程式
    d1_q4: [
        { q: String.raw`$\begin{cases} x + 2y = 7 \\ 2x - y = 4 \end{cases}$`, a: String.raw`$x = 3, y = 2$`, e: String.raw`加減法で解く。` },
        { q: String.raw`$\begin{cases} y = 2x - 1 \\ 3x + 2y = 12 \end{cases}$`, a: String.raw`$x = 2, y = 3$`, e: String.raw`代入法で解く。` }
    ],
    // 大問1(5) 二次方程式
    d1_q5: [
        { q: String.raw`$x^2 + 5x + 6 = 0$`, a: String.raw`$x = -2, -3$`, e: String.raw`$(x+2)(x+3)=0$` },
        { q: String.raw`$x^2 + 2x - 1 = 0$`, a: String.raw`$x = -1 \pm \sqrt{2}$`, e: String.raw`解の公式を利用。` }
    ],
    // 大問1(6) 関数基礎
    d1_q6: [
        { q: String.raw`$y = 2x^2$ で $x$ が $1$ から $3$ まで増加するときの変化の割合。`, a: String.raw`$8$`, e: String.raw`$2(1+3)=8$` }
    ],
    // 大問1(7) 角度
    d1_q7: [
        { q: String.raw`$l // m$ のとき、$\angle x$ を求めなさい。`, a: String.raw`$105^\circ$`, e: String.raw`錯角を利用。`, draw: (brd) => { brd.create('line', [[-1, 2], [5, 2]], {name:'l', withLabel:true}); brd.create('line', [[-1, -2], [5, -2]], {name:'m', withLabel:true}); brd.create('polyline', [[0,2],[2,0],[0,-2]], {strokeColor:'blue'}); } }
    ],
    // 大問1(8) 確率
    d1_q8: [
        { q: String.raw`大小2つのサイコロを投げるとき、出る目の和が $10$ 以上になる確率。`, a: String.raw`$\frac{1}{6}$`, e: String.raw`6通り/36通り。` }
    ],
    // 大問1(9) 作図
    d1_q9: [
        { q: String.raw`$\triangle ABC$ で $\angle A$ の二等分線を作図せよ。`, a: "角の二等分線", e: "角の二等分線の作図手順通り。", draw: (brd) => { brd.create('polygon', [[2,3],[0,0],[5,0]]); } }
    ],
    // 大問2：規則性
    d2: [
        { q: String.raw`$n$ 段目のタイルの個数を $n$ で表せ（1, 4, 9...）`, a: String.raw`$n^2$`, e: String.raw`2乗の規則性。` }
    ],
    // 大問3：一次関数
    d3: [
        { 
            q: String.raw`点 $A(2, 6)$ と点 $B(4, 10)$ を通る直線の式。`, 
            a: String.raw`$y = 2x + 2$`, 
            e: String.raw`傾き $2$, 切片 $2$。`, 
            draw: (brd) => { 
                brd.setBoundingBox([-1, 12, 6, -2]);
                brd.create('axis', [[0,0],[1,0]]); brd.create('axis', [[0,0],[0,1]]); 
                brd.create('line', [[2,6],[4,10]], {strokeColor:'blue'}); 
            } 
        }
    ],
    // 大問4：平面図形
    d4: [
        { 
            q: String.raw`$\triangle ABC$ で $DE // BC$。相似比を用いた計算。`, 
            a: String.raw`$6$`, 
            e: String.raw`相似比は $1:3$。`, 
            draw: (brd) => { 
                brd.setBoundingBox([-1, 5, 7, -1]);
                brd.create('polygon', [[2,4],[0,0],[6,0]]);
                brd.create('segment', [[0.6,1.2],[4,1.2]], {strokeColor:'red'});
            } 
        }
    ],
    // 大問5：空間図形
    d5: [
        { 
            q: String.raw`底面の半径 $3$cm、高さ $4$cm の円錐の体積。`, 
            a: String.raw`$12\pi$`, 
            e: String.raw`$\frac{1}{3} \times \pi \times 3^2 \times 4$`, 
            draw: (brd) => { 
                brd.setBoundingBox([-5, 5, 5, -5]);
                brd.create('ellipse', [[0,-2], 3, 0.8]); 
                brd.create('polyline', [[-3,-2],[0,3],[3,-2]], {strokeColor:'black'}); 
            } 
        }
    ]
});
