// 【認証システム：最終完全版】
const AuthSystem = {
    masterKey: "MATHMASTER",

    generateOrgKey: function(orgName) {
        let hash = 0;
        for (let i = 0; i < orgName.length; i++) {
            hash = ((hash << 5) - hash) + orgName.charCodeAt(i);
            hash |= 0;
        }
        return "ORG-" + Math.abs(hash).toString(16).toUpperCase();
    },

    // 個人キー生成（管理者ツールで使用）
    createUserKey: function(scope) {
        return "USR-" + btoa(scope);
    },

    // キー照合
    verify: function(inputKey, orgName = "") {
        if (inputKey === this.masterKey) return "full_access";
        
        if (orgName) {
            const expected = this.generateOrgKey(orgName.toUpperCase());
            if (inputKey === expected) return "full_access"; // 団体は基本フルアクセス
        }
        
        if (inputKey.startsWith("USR-")) {
            try {
                const scope = atob(inputKey.replace("USR-", ""));
                // 定義された権限リスト
                const validScopes = [
                    "d1_q1", "d1_q2", "d1_q3", "d1_q4", "d1_q5", 
                    "d1_q6", "d1_q7", "d1_q8", "d1_q9", 
                    "d1_all", "d2_only", "d3_only", "d4_only", "d5_only", 
                    "full_access"
                ];
                if (validScopes.includes(scope)) return scope;
            } catch (e) { return "DENIED"; }
        }
        return "DENIED";
    }
};

// problems_db.js
// 【第0ブロック】大問1(1)〜(3)
const MasterDatabase = {}; // 最初に一度だけ宣言

Object.assign(MasterDatabase, {
    // 大問1(1) 正負の数・文字式（20問）
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
        { q: String.raw`$7 + (-4) - (-9)$`, a: String.raw`$12$`, e: String.raw`$7 - 4 + 9 = 12$` },
        { q: String.raw`$2(a-3b)-3(a-2b)$`, a: String.raw`$-a$`, e: String.raw`$2a-6b-3a+6b = -a$` },
        { q: String.raw`$(-2x)^2 \times 3x$`, a: String.raw`$12x^3$`, e: String.raw`$4x^2 \times 3x = 12x^3$` },
        { q: String.raw`$12ab \div (-4b)$`, a: String.raw`$-3a$`, e: String.raw`$-3a$` },
        { q: String.raw`$\frac{1}{2}(4x-6) + 3x$`, a: String.raw`$5x-3$`, e: String.raw`$2x-3+3x = 5x-3$` },
        { q: String.raw`$(-1)^3 \times 5$`, a: String.raw`$-5$`, e: String.raw`$-1 \times 5 = -5$` },
        { q: String.raw`$10 - 2 \times 4$`, a: String.raw`$2$`, e: String.raw`$10-8=2$` },
        { q: String.raw`$(-3) \times (-4) - 20$`, a: String.raw`$-8$`, e: String.raw`$12-20 = -8$` },
        { q: String.raw`$24 \div (-2)^3$`, a: String.raw`$-3$`, e: String.raw`$24 \div (-8) = -3$` },
        { q: String.raw`$x-2-(3x-5)$`, a: String.raw`$-2x+3$`, e: String.raw`$x-2-3x+5 = -2x+3$` },
        { q: String.raw`$a^2 \times a^3 \div a^4$`, a: String.raw`$a$`, e: String.raw`$a^{2+3-4} = a^1$` }
    ],
    // 大問1(2) 平方根（10問）
    d1_q2: [
        { q: String.raw`$(\sqrt{3} + 1)^2$`, a: String.raw`$4 + 2\sqrt{3}$`, e: String.raw`$3 + 2\sqrt{3} + 1 = 4 + 2\sqrt{3}$` },
        { q: String.raw`$(\sqrt{5} + 2)(\sqrt{5} - 2)$`, a: String.raw`$1$`, e: String.raw`$5 - 4 = 1$` },
        { q: String.raw`$\sqrt{50} - \sqrt{18}$`, a: String.raw`$2\sqrt{2}$`, e: String.raw`$5\sqrt{2} - 3\sqrt{2} = 2\sqrt{2}$` },
        { q: String.raw`$\frac{12}{\sqrt{6}} - \sqrt{24}$`, a: String.raw`$0$`, e: String.raw`$2\sqrt{6} - 2\sqrt{6} = 0$` },
        { q: String.raw`$\sqrt{3} + \frac{6}{\sqrt{3}}$`, a: String.raw`$3\sqrt{3}$`, e: String.raw`$\sqrt{3} + 2\sqrt{3} = 3\sqrt{3}$` },
        { q: String.raw`$(\sqrt{2}+1)(\sqrt{2}+3)$`, a: String.raw`$5+4\sqrt{2}$`, e: String.raw`$2+3\sqrt{2}+\sqrt{2}+3 = 5+4\sqrt{2}$` },
        { q: String.raw`$\sqrt{27} \div \sqrt{3}$`, a: String.raw`$3$`, e: String.raw`$\sqrt{9} = 3$` },
        { q: String.raw`$(\sqrt{6})^2 - \sqrt{12} \times \sqrt{3}$`, a: String.raw`$0$`, e: String.raw`$6-6=0$` },
        { q: String.raw`$\sqrt{2}(\sqrt{8} + \sqrt{2})$`, a: String.raw`$6$`, e: String.raw`$\sqrt{16} + 2 = 6$` },
        { q: String.raw`$(\sqrt{7} + \sqrt{2})(\sqrt{7} - \sqrt{2})$`, a: String.raw`$5$`, e: String.raw`$7-2=5$` }
    ],
    // 大問1(3) 一次方程式（10問）
    d1_q3: [
        { q: String.raw`$9x - 4 = 5(x + 4)$`, a: String.raw`$x = 6$`, e: String.raw`$4x = 24 \Rightarrow x=6$` },
        { q: String.raw`$\frac{x-1}{2} - \frac{x+2}{3} = 1$`, a: String.raw`$x = 13$`, e: String.raw`$3(x-1)-2(x+2)=6 \Rightarrow x=13$` },
        { q: String.raw`$x - \frac{x-3}{2} = 4$`, a: String.raw`$x = 5$`, e: String.raw`$2x-x+3=8 \Rightarrow x=5$` },
        { q: String.raw`$0.1x + 0.4 = 0.2x - 0.5$`, a: String.raw`$x = 9$`, e: String.raw`$x+4=2x-5$` },
        { q: String.raw`$3x+5=x+11$`, a: String.raw`$x=3$`, e: String.raw`$2x=6$` },
        { q: String.raw`$2(x-3)=x+4$`, a: String.raw`$x=10$`, e: String.raw`$2x-6=x+4$` },
        { q: String.raw`$\frac{x}{2} + 1 = \frac{x}{3} + 2$`, a: String.raw`$x=6$`, e: String.raw`$3x+6=2x+12$` },
        { q: String.raw`$5x-3(x-2)=10$`, a: String.raw`$x=2$`, e: String.raw`$2x+6=10$` },
        { q: String.raw`$7x=3x+12$`, a: String.raw`$x=3$`, e: String.raw`$4x=12$` },
        { q: String.raw`$4-x=3(x+4)$`, a: String.raw`$x=-2$`, e: String.raw`$4-x=3x+12$` }
    ]
});
// 【第1ブロック：補強版】大問1(4)〜(6)
Object.assign(MasterDatabase, {
    // 大問1(4) 連立方程式（10問）
    d1_q4: [
        { q: String.raw`$\begin{cases} x + 2y = 7 \\ 2x - y = 4 \end{cases}$`, a: String.raw`$x = 3, y = 2$`, e: String.raw`下の式を2倍して加減法。` },
        { q: String.raw`$\begin{cases} 3x + 2y = 10 \\ x + y = 4 \end{cases}$`, a: String.raw`$x = 2, y = 2$`, e: String.raw`下の式を2倍して引く。` },
        { q: String.raw`$\begin{cases} y = 2x - 1 \\ 3x + 2y = 12 \end{cases}$`, a: String.raw`$x = 2, y = 3$`, e: String.raw`代入法で $3x + 2(2x - 1) = 12$` },
        { q: String.raw`$\begin{cases} 4x + 3y = 1 \\ 2x + y = -1 \end{cases}$`, a: String.raw`$x = -2, y = 3$`, e: String.raw`下の式を3倍。` },
        { q: String.raw`$\begin{cases} x - y = 4 \\ 2x + 3y = 13 \end{cases}$`, a: String.raw`$x = 5, y = 1$`, e: String.raw`上の式を3倍して足す。` },
        { q: String.raw`$\begin{cases} 3x - 4y = 10 \\ 2x + y = 3 \end{cases}$`, a: String.raw`$x = 2, y = -1$`, e: String.raw`下の式を4倍。` },
        { q: String.raw`$\begin{cases} x = 3y \\ 2x - y = 10 \end{cases}$`, a: String.raw`$x = 6, y = 2$`, e: String.raw`代入法。` },
        { q: String.raw`$\begin{cases} 5x + 2y = 11 \\ 2x + 3y = 0 \end{cases}$`, a: String.raw`$x = 3, y = -2$`, e: String.raw`係数を6に揃える。` },
        { q: String.raw`$\begin{cases} 2x - 3y = 1 \\ 3x + 2y = 8 \end{cases}$`, a: String.raw`$x = 2, y = 1$`, e: String.raw`加減法。` },
        { q: String.raw`$\begin{cases} 0.2x + 0.3y = 0.5 \\ x - 2y = 6 \end{cases}$`, a: String.raw`$x = 4, y = -1$`, e: String.raw`小数を除去。` }
    ],

    // 大問1(5) 二次方程式（10問）
    d1_q5: [
        { q: String.raw`$x^2 + 5x + 6 = 0$`, a: String.raw`$x = -2, -3$`, e: String.raw`$(x+2)(x+3)=0$` },
        { q: String.raw`$x^2 - x - 12 = 0$`, a: String.raw`$x = 4, -3$`, e: String.raw`$(x-4)(x+3)=0$` },
        { q: String.raw`$x^2 + 2x - 1 = 0$`, a: String.raw`$x = -1 \pm \sqrt{2}$`, e: String.raw`解の公式。` },
        { q: String.raw`$x^2 = 7x$`, a: String.raw`$x = 0, 7$`, e: String.raw`$x(x-7)=0$。` },
        { q: String.raw`$(x + 2)^2 = 5$`, a: String.raw`$x = -2 \pm \sqrt{5}$`, e: String.raw`平方根の利用。` },
        { q: String.raw`$2x^2 + 5x + 1 = 0$`, a: String.raw`$x = \frac{-5 \pm \sqrt{17}}{4}$`, e: String.raw`解の公式。` },
        { q: String.raw`$x^2 - 10x + 25 = 0$`, a: String.raw`$x = 5$`, e: String.raw`$(x-5)^2=0$` },
        { q: String.raw`$x^2 - 9 = 0$`, a: String.raw`$x = \pm 3$`, e: String.raw`$x^2=9$` },
        { q: String.raw`$3x^2 - 6x = 0$`, a: String.raw`$x = 0, 2$`, e: String.raw`$3x(x-2)=0$` },
        { q: String.raw`$x^2 - 3x - 1 = 0$`, a: String.raw`$x = \frac{3 \pm \sqrt{13}}{2}$`, e: String.raw`解の公式。` }
    ],

    // 大問1(6) 関数基礎（10問）
    d1_q6: [
        { q: String.raw`$y = 2x^2$ で $x$ が $1$ から $3$ まで増加するときの変化の割合。`, a: String.raw`$8$`, e: String.raw`$2(1+3)=8$` },
        { q: String.raw`$y = \frac{1}{2}x^2$ で $-4 \leqq x \leqq 2$ のときの $y$ の変域。`, a: String.raw`$0 \leqq y \leqq 8$`, e: String.raw`$0$をまたぐ。` },
        { q: String.raw`$y = ax^2$ で $x=3, y=18$ のとき $a$ の値。`, a: String.raw`$a = 2$`, e: String.raw`$18=9a$` },
        { q: String.raw`$y = -2x + 5$ で $-1 \leqq x \leqq 3$ のときの $y$ の変域。`, a: String.raw`$-1 \leqq y \leqq 7$`, e: String.raw`端点代入。` },
        { q: String.raw`$y = \frac{12}{x}$ で $x=3$ のときの $y$。`, a: String.raw`$y = 4$`, e: String.raw`反比例。` },
        { q: String.raw`$y = -x^2$ で $x$ が $-3$ から $-1$ まで増加するときの変化の割合。`, a: String.raw`$4$`, e: String.raw`計算。` },
        { q: String.raw`$y = ax^2$ で $-2 \leqq x \leqq 3$ のとき最大値 $18$。 $a$ の値。`, a: String.raw`$a = 2$`, e: String.raw`$x=3$のとき最大。` },
        { q: String.raw`$y = 3x^2$ で $x$ が $-2$ から $0$ まで増加するときの変化の割合。`, a: String.raw`$-6$`, e: String.raw`$3(-2+0)=-6$` },
        { q: String.raw`$y = -2x^2$ で $-1 \leqq x \leqq 2$ のときの $y$ の変域。`, a: String.raw`$-8 \leqq y \leqq 0$`, e: String.raw`最大値が$0$。` },
        { q: String.raw`$y = \frac{a}{x}$ で $x=2, y=6$ のとき、$x=3$ での $y$。`, a: String.raw`$y = 4$`, e: String.raw`$a=12$ より $12/3=4$` }
    ]
});
// 【第2ブロック】大問1(7)〜(9) 各10問
Object.assign(MasterDatabase, {
    // 大問1(7) 角度・平面図形 (10問)
    d1_q7: [
        { q: String.raw`$l // m$ のとき、$\angle x$ の大きさを求めなさい。`, a: String.raw`$105^\circ$`, e: String.raw`補助線を引くと錯角より $45+60=105^\circ$。`, draw: (brd) => { brd.create('line', [[-1, 2], [5, 2]], {name:'l', withLabel:true}); brd.create('line', [[-1, -2], [5, -2]], {name:'m', withLabel:true}); brd.create('segment', [[0, 2], [2, 0]]); brd.create('segment', [[2, 0], [0, -2]]); brd.create('text', [0.3, 1.7, "45°"]); brd.create('text', [0.3, -1.7, "60°"]); brd.create('text', [2.2, 0, "x"]); } },
        { q: String.raw`正五角形の一つの内角の大きさを求めなさい。`, a: String.raw`$108^\circ$`, e: String.raw`$180 \times (5-2) \div 5 = 108^\circ$。`, draw: (brd) => { brd.create('regularpolygon', [[1, -1.5], [3, -1.5], 5]); } },
        { q: String.raw`中心角が $120^\circ$ である弧に対する円周角 $x$ を求めなさい。`, a: String.raw`$60^\circ$`, e: String.raw`円周角は中心角の半分です。`, draw: (brd) => { brd.create('circle', [[0,0], 2.5]); brd.create('segment', [[0,0], [2.16, 1.25]]); brd.create('segment', [[0,0], [-2.16, 1.25]]); brd.create('text', [-0.3, 0.5, "120°"]); } },
        { q: String.raw`正九角形の内角の和を求めなさい。`, a: String.raw`$1260^\circ$`, e: String.raw`$180 \times (9-2) = 1260^\circ$。`, draw: (brd) => { brd.create('regularpolygon', [[1.5, -2], [2.5, -2], 9]); } },
        { q: String.raw`右の図で、$\angle x$ の大きさを求めなさい。`, a: String.raw`$70^\circ$`, e: String.raw`三角形の外角は、隣り合わない2つの内角の和。 $x = 30 + 40 = 70^\circ$。`, draw: (brd) => { brd.create('polygon', [[0,0], [3,0], [1,2]]); brd.create('line', [[3,0], [5,0]], {straightFirst:false}); brd.create('text', [0.5, 0.2, "30°"]); brd.create('text', [1.1, 1.5, "40°"]); brd.create('text', [3.5, 0.3, "x"]); } },
        { q: String.raw`一つの外角が $30^\circ$ である正多角形は正何角形か答えなさい。`, a: String.raw`正十二角形`, e: String.raw`外角の和は常に $360^\circ$ なので、$360 \div 30 = 12$。`, draw: (brd) => { brd.create('regularpolygon', [[2,-1], [3,-1], 12], {opacity:0.3}); } },
        { q: String.raw`円に内接する四角形 $ABCD$ で $\angle A = 110^\circ$ のとき、対角 $\angle C$ を求めなさい。`, a: String.raw`$70^\circ$`, e: String.raw`内接四角形の対角の和は $180^\circ$ です。`, draw: (brd) => { let c = brd.create('circle', [[0,0], 2.5]); let p = [[2,1.5], [-1.5,2], [-2,-1.5], [1.5,-2]]; brd.create('polygon', p); brd.create('text', [1.5, 1.2, "110°"]); } },
        { q: String.raw`半径 $6$cm、弧の長さが $4\pi$cm のおうぎ形の中心角を求めなさい。`, a: String.raw`$120^\circ$`, e: String.raw`$2\pi \times 6 \times (x/360) = 4\pi$ より $x=120$。`, draw: (brd) => { brd.create('sector', [[0,0], [3,0], [-1.5, 2.6]], {fillOpacity:0.2}); } },
        { q: String.raw`$n$ 角形の内角の和が $1800^\circ$ のとき、$n$ の値を求めなさい。`, a: String.raw`$12$`, e: String.raw`$180 \times (n-2) = 1800$ より $n-2=10$。`, draw: (brd) => { brd.create('text', [0,0, "内角の和 = 1800°"]); } },
        { q: String.raw`右の図で $AB=AC, \angle A=40^\circ$ のとき、底角 $\angle B$ を求めなさい。`, a: String.raw`$70^\circ$`, e: String.raw`$(180 - 40) \div 2 = 70^\circ$。`, draw: (brd) => { brd.create('polygon', [[0,0], [4,0], [2,4]]); brd.create('text', [1.8, 3.5, "40°"]); brd.create('text', [0.5, 0.3, "x"]); } }
    ],

    // 大問1(8) 確率・資料の活用 (10問)
    d1_q8: [
        { q: String.raw`大小2つのサイコロを投げるとき、出る目の和が $10$ 以上になる確率を求めなさい。`, a: String.raw`$\frac{1}{6}$`, e: String.raw`$(4,6), (5,5), (5,6), (6,4), (6,5), (6,6)$ の6通り。 $6/36 = 1/6$。` },
        { q: String.raw`3枚の硬貨を同時に投げるとき、1枚だけ表が出る確率を求めなさい。`, a: String.raw`$\frac{3}{8}$`, e: String.raw`(表,裏,裏), (裏,表,裏), (裏,裏,表) の3通り。` },
        { q: String.raw`$1, 2, 3, 4, 5$ のカードから同時に2枚引くとき、和が偶数になる確率。`, a: String.raw`$\frac{2}{5}$`, e: String.raw`全10通り中、(1,3),(1,5),(3,5)と(2,4)の4通り。` },
        { q: String.raw`5人の生徒のテスト結果が $6, 7, 8, 9, x$ で、平均が $7$ のとき、$x$ を求めなさい。`, a: String.raw`$5$`, e: String.raw`合計が $35$ になればよい。 $35 - (6+7+8+9) = 5$。` },
        { q: String.raw`2つのサイコロを投げ、目の積が $6$ になる確率を求めなさい。`, a: String.raw`$\frac{1}{9}$`, e: String.raw`$(1,6),(2,3),(3,2),(6,1)$ の4通り。 $4/36 = 1/9$。` },
        { q: String.raw`あるクラス20人のハンドボール投げの中央値は、何番目と何番目の平均か答えなさい。`, a: String.raw`10番目と11番目`, e: String.raw`偶数人の場合、真ん中2人の平均をとります。` },
        { q: String.raw`箱の中に赤玉3個、白玉7個ある。1個取り出すとき赤玉が出る確率を答えなさい。`, a: String.raw`$\frac{3}{10}$`, e: String.raw`$3 \div (3+7) = 0.3$。` },
        { q: String.raw`2つのサイコロを投げ、同じ目が出る確率を求めなさい。`, a: String.raw`$\frac{1}{6}$`, e: String.raw`$(1,1)$から$(6,6)$までの6通り。 $6/36 = 1/6$。` },
        { q: String.raw`データ $3, 5, 5, 7, 8, 10, 12$ の範囲（レンジ）を求めなさい。`, a: String.raw`$9$`, e: String.raw`最大値 $12$ - 最小値 $3 = 9$。` },
        { q: String.raw`当たり3本を含む10本のくじから1本引くとき、外れる確率を求めなさい。`, a: String.raw`$\frac{7}{10}$`, e: String.raw`$1 - 3/10 = 7/10$。` }
    ],

    // 大問1(9) 作図 (10問)
    d1_q9: [
        { q: String.raw`$\triangle ABC$ で辺 $BC$ 上にあり、$AB, AC$ から等距離にある点 $P$ を作図せよ。`, a: "角の二等分線", e: String.raw`$\angle A$ の二等分線を描く。`, draw: (brd, ans) => { let a=brd.create('point',[2,3],{name:'A'}); let b=brd.create('point',[0,0],{name:'B'}); let c=brd.create('point',[5,0],{name:'C'}); brd.create('polygon',[a,b,c]); if(ans) brd.create('bisector', [b,a,c], {strokeColor:'orange'}); } },
        { q: String.raw`2点 $A, B$ から等距離にある直線 $L$ 上の点 $P$ を作図せよ。`, a: "垂直二等分線", e: String.raw`線分 $AB$ の垂直二等分線を描く。`, draw: (brd, ans) => { let a=brd.create('point',[1,3],{name:'A'}); let b=brd.create('point',[4,3],{name:'B'}); brd.create('line',[[-1,1],[5,1]],{name:'L'}); if(ans) brd.create('line', [a,b], {type:'bisector', strokeColor:'orange'}); } },
        { q: String.raw`点 $A$ を通り直線 $L$ に垂直な直線を作図せよ。`, a: "垂線", e: String.raw`点 $A$ を中心に弧を描き、直線 $L$ との交点からさらに弧を描く。`, draw: (brd, ans) => { let a=brd.create('point',[2,2],{name:'A'}); brd.create('line',[[-1,0],[5,0]],{name:'L'}); if(ans) brd.create('perpendicular', [brd.create('line',[[-1,0],[5,0]],{visible:false}), a], {strokeColor:'orange'}); } },
        { q: String.raw`$\triangle ABC$ の辺 $BC$ を底辺とした時の高さを示す線を作図せよ。`, a: "垂線", e: String.raw`頂点 $A$ から辺 $BC$ への垂線を描く。`, draw: (brd, ans) => { let a=brd.create('point',[1,3],{name:'A'}); let b=brd.create('point',[0,0],{name:'B'}); let c=brd.create('point',[4,0],{name:'C'}); brd.create('polygon',[a,b,c]); if(ans) brd.create('segment', [[1,3], [1,0]], {dash:2, strokeColor:'orange'}); } },
        { q: String.raw`円 $O$ の周上の点 $A$ を通る接線を作図せよ。`, a: "垂線", e: String.raw`半径 $OA$ を引き、点 $A$ を通る $OA$ への垂線を描く。`, draw: (brd, ans) => { let o=brd.create('point',[0,0],{name:'O'}); brd.create('circle',[o,2]); let a=brd.create('point',[2,0],{name:'A'}); if(ans) brd.create('line',[[2,-2],[2,2]], {strokeColor:'orange'}); } },
        { q: String.raw`$\angle ABC$ の二等分線を作図せよ。`, a: "角の二等分線", e: String.raw`基本の角の二等分線の作図。`, draw: (brd, ans) => { let b=brd.create('point',[0,0],{name:'B'}); let a=brd.create('point',[3,1],{name:'A'}); let c=brd.create('point',[3,-1],{name:'C'}); brd.create('segment',[b,a]); brd.create('segment',[b,c]); if(ans) brd.create('bisector',[a,b,c], {strokeColor:'orange'}); } },
        { q: String.raw`線分 $AB$ の中点 $M$ を作図せよ。`, a: "垂直二等分線", e: String.raw`垂直二等分線と $AB$ の交点が中点。`, draw: (brd, ans) => { let a=brd.create('point',[1,0],{name:'A'}); let b=brd.create('point',[4,0],{name:'B'}); brd.create('segment',[a,b]); if(ans) brd.create('line',[a,b], {type:'bisector', strokeColor:'orange'}); } },
        { q: String.raw`$60^\circ$ の角を作図せよ。`, a: "正三角形の作図", e: String.raw`等しい半径の弧を組み合わせて正三角形の頂点を作る。`, draw: (brd, ans) => { brd.create('segment',[[0,0],[3,0]]); if(ans) brd.create('segment',[[0,0],[1.5, 2.6]], {strokeColor:'orange'}); } },
        { q: String.raw`菱形 $ABCD$ の点 $D$ を作図せよ。`, a: "等距離の交点", e: String.raw`$AB$ の長さをコンパスで取り、点 $A$ と点 $C$ から弧を描く。`, draw: (brd, ans) => { brd.create('segment',[[0,0],[2,0]]); brd.create('segment',[[0,0],[1,1.7]]); if(ans) brd.create('polygon',[[0,0],[2,0],[3,1.7],[1,1.7]], {fillColor:'none', strokeColor:'orange'}); } },
        { q: String.raw`長方形 $ABCD$ の辺 $AB$ の垂直二等分線を作図せよ。`, a: "垂直二等分線", e: String.raw`$A, B$ から等距離の点を結ぶ。`, draw: (brd, ans) => { brd.create('polygon',[[0,0],[4,0],[4,2],[0,2]]); if(ans) brd.create('line',[[2,-1],[2,3]], {strokeColor:'orange'}); } }
    ]
});
// 【第3ブロック】大問2（規則性・証明）、大問3（関数グラフ）各10問
Object.assign(MasterDatabase, {
    // 大問2：文字の利用・規則性
    d2: [
        { q: String.raw`$n$ 段目のタイルの個数を $n$ で表せ（1段目:1, 2段目:4, 3段目:9...）`, a: String.raw`$n^2$ 個`, e: String.raw`段数の2乗の関係。` },
        { q: String.raw`連続する2つの奇数の積に1を加えた数は、4の倍数になる。小さい方の奇数を $2n-1$ とした時の大きい方の奇数。`, a: String.raw`$2n+1$`, e: String.raw`奇数は2おきに並んでいます。` },
        { q: String.raw`$a$ 円の 30% 引きを $a$ を用いて表せ。`, a: String.raw`$0.7a$`, e: String.raw`$a \times (1 - 0.3) = 0.7a$` },
        { q: String.raw`底辺 $a$、高さ $h$ の三角形の面積 $S$ を $h$ について解け。`, a: String.raw`$h = \frac{2S}{a}$`, e: String.raw`$S = \frac{ah}{2} \Rightarrow 2S = ah$` },
        { q: String.raw`$2$ 桁の自然数 $10a+b$ とその十の位と一の位を入れ替えた数の和。`, a: String.raw`$11a+11b$`, e: String.raw`$(10a+b) + (10b+a) = 11a+11b$` },
        { q: String.raw`カレンダーで、ある数 $n$ のすぐ右にある数。`, a: String.raw`$n+1$`, e: String.raw`横に並ぶ数は1ずつ増えます。` },
        { q: String.raw`円柱の底面の半径 $r$、高さ $h$ のときの側面積。`, a: String.raw`$2\pi rh$`, e: String.raw`底面の周 $\times$ 高さ。` },
        { q: String.raw`$n$ 角形の対角線の本数を求める式。`, a: String.raw`$\frac{n(n-3)}{2}$`, e: String.raw`公式通り。` },
        { q: String.raw`奇数と偶数の和は常に奇数になる。偶数を $2n$、奇数を $2m+1$ とした時の和。`, a: String.raw`$2(n+m)+1$`, e: String.raw`$2 \times (\text{整数}) + 1$ の形。` },
        { q: String.raw`縦 $a$、横 $b$ の長方形の周の長さ。`, a: String.raw`$2a+2b$`, e: String.raw`$2(a+b)$` }
    ],

    // 大問3：一次関数・グラフ
d3: [
    { 
        q: String.raw`点 $A(2, 6)$ と点 $B(4, 10)$ を通る直線の式を求めなさい。`, 
        a: String.raw`$y = 2x + 2$`, 
        e: String.raw`傾きは $\frac{10-6}{4-2} = 2$。$y = 2x + b$ に $(2, 6)$ を代入して $b=2$。`, 
        draw: (brd) => { 
            brd.setBoundingBox([-1, 12, 6, -2]);
            brd.create('axis', [[0,0],[1,0]]); brd.create('axis', [[0,0],[0,1]]); 
            brd.create('line', [[2,6],[4,10]], {strokeColor:'blue', fixed:true}); 
            brd.create('point', [2,6], {name:'A', size:3}); brd.create('point', [4,10], {name:'B', size:3});
        } 
    },
    { 
        q: String.raw`直線 $y = x + 4$ と $y = -2x + 10$ の交点の座標を求めなさい。`, 
        a: String.raw`$(2, 6)$`, 
        e: String.raw`$x + 4 = -2x + 10$ を解くと $3x = 6 \Rightarrow x = 2$。$y = 2 + 4 = 6$。`, 
        draw: (brd) => { 
            brd.setBoundingBox([-1, 12, 8, -2]);
            brd.create('axis', [[0,0],[1,0]]); brd.create('axis', [[0,0],[0,1]]);
            brd.create('line', [1,4], {strokeColor:'red'}); 
            brd.create('line', [-2,10], {strokeColor:'blue'}); 
            brd.create('point', [2,6], {name:'交点', color:'green'});
        } 
    },
    { 
        q: String.raw`$y = 2x + 4$ のグラフにおいて、$x$ 軸との交点の座標を求めなさい。`, 
        a: String.raw`$(-2, 0)$`, 
        e: String.raw`$y=0$ を代入すると $0 = 2x + 4 \Rightarrow 2x = -4 \Rightarrow x = -2$。`, 
        draw: (brd) => { 
            brd.setBoundingBox([-5, 8, 3, -2]);
            brd.create('axis', [[0,0],[1,0]]); brd.create('axis', [[0,0],[0,1]]);
            brd.create('line', [2,4], {strokeColor:'green'}); 
            brd.create('point', [-2,0], {name:'(-2,0)', color:'red'});
        } 
    },
    { q: String.raw`傾きが $-3$ で点 $(1, 2)$ を通る直線の式。`, a: String.raw`$y = -3x + 5$`, e: String.raw`$2 = -3(1) + b \Rightarrow b=5$` },
    { q: String.raw`$y = 3x - 1$ に平行で、切片が $5$ の直線。`, a: String.raw`$y = 3x + 5$`, e: String.raw`平行なら傾きが同じ。` },
    { q: String.raw`2点 $(0, -2)$ と $(3, 4)$ を通る直線の式。`, a: String.raw`$y = 2x - 2$`, e: String.raw`切片は $-2$。傾きは $(4 - (-2))/3 = 2$。` },
    { q: String.raw`$y = -x + 6$ と $x$ 軸、 $y$ 軸で囲まれた三角形の面積。`, a: String.raw`$18$`, e: String.raw`底辺6、高さ6。 $6 \times 6 \div 2 = 18$。` },
    { q: String.raw`$y = 2x + k$ が点 $(3, 4)$ を通るとき、 $k$ の値。`, a: String.raw`$k = -2$`, e: String.raw`$4 = 2(3) + k \Rightarrow k = -2$` },
    { q: String.raw`一次関数 $f(x) = 4x - 3$ において、 $f(2)$ の値。`, a: String.raw`$5$`, e: String.raw`$4(2) - 3 = 5$` },
    { q: String.raw`$y$ が $x$ の一次関数で、 $x=2$ のとき $y=5$、 $x=4$ のとき $y=9$。`, a: String.raw`$y = 2x + 1$`, e: String.raw`傾き2、切片1。` }
],

});
// 大問4：平面図形
d4: [
    { 
        q: String.raw`$\triangle ABC$ で $DE // BC$。$AD=3, DB=6, DE=2$ のとき、$BC$ の長さを求めなさい。`, 
        a: String.raw`$6$`, 
        e: String.raw`$\triangle ADE \sim \triangle ABC$。相似比 $3:(3+6)=1:3$。$DE:BC = 1:3 \Rightarrow BC=6$。`, 
        draw: (brd) => { 
            brd.setBoundingBox([-1, 5, 7, -1]);
            const pA = brd.create('point', [2,4], {name:'A'});
            const pB = brd.create('point', [0,0], {name:'B'});
            const pC = brd.create('point', [6,0], {name:'C'});
            brd.create('polygon', [pA, pB, pC], {fillColor:'none'});
            brd.create('segment', [[2/3, 4/3], [2+8/3, 4/3]], {name:'DE', withLabel:true, strokeColor:'red'});
        } 
    },
    { q: String.raw`相似比が $2:3$ である2つの図形の面積比を求めなさい。`, a: String.raw`$4:9$`, e: String.raw`面積比は相似比の2乗。$2^2:3^2 = 4:9$。` },
    { 
        q: String.raw`右の図で $\angle x$ の大きさを求めなさい。（円周角）`, 
        a: String.raw`$50^\circ$`, 
        e: String.raw`同じ弧に対する円周角は等しいため、示された角度と同じになります。`, 
        draw: (brd) => { 
            brd.setBoundingBox([-3, 3, 3, -3]);
            brd.create('circle', [[0,0], 2.5], {strokeColor:'#ccc'});
            const pA = brd.create('point', [-1.5, 2], {name:'A'});
            const pB = brd.create('point', [1.5, 2], {name:'B'});
            const pC = brd.create('point', [2, -1.5], {name:'C'});
            const pD = brd.create('point', [-2, -1.5], {name:'D'});
            brd.create('polyline', [pA, pD, pB, pC, pA], {strokeColor:'blue'});
            brd.create('text', [-1.3, 1.2, "50°"]); brd.create('text', [1.1, 1.2, "x"]);
        } 
    },
    { q: String.raw`1辺 $8$cm の正三角形の面積。`, a: String.raw`$16\sqrt{3}$`, e: String.raw`高さ $4\sqrt{3}$ より $8 \times 4\sqrt{3} \div 2 = 16\sqrt{3}$。` },
    { q: String.raw`斜辺が $13$、他の一辺が $12$ の直角三角形の残りの辺。`, a: String.raw`$5$`, e: String.raw`$\sqrt{13^2 - 12^2} = \sqrt{25} = 5$。` },
    { q: String.raw`円周上に4点 $A,B,C,D$ があり、弦 $AB, CD$ の交点を $P$ とする。$\triangle PAC \sim \triangle PDB$ の相似条件は？`, a: "2組の角がそれぞれ等しい", e: String.raw`円周角の定理により、2つの角が等しくなります。` },
    { q: String.raw`半径 $10$cm、中心角 $72^\circ$ のおうぎ形の面積。`, a: String.raw`$20\pi$`, e: String.raw`$100\pi \times \frac{72}{360} = 20\pi$。` },
    { q: String.raw`$\triangle ABC$ で辺 $AB, AC$ の中点を $D, E$ とする。$BC=10$ ならば $DE$ の長さは？`, a: String.raw`$5$`, e: String.raw`中点連結定理より $10 \div 2 = 5$。` },
    { q: String.raw`1辺 $6$cm の正方形の対角線の長さ。`, a: String.raw`$6\sqrt{2}$`, e: String.raw`$1:1:\sqrt{2}$ の比を利用。` },
    { q: String.raw`ひし形の面積が $24$、一方の対角線が $6$ のとき他方の対角線。`, a: String.raw`$8$`, e: String.raw`$(6 \times x) \div 2 = 24$ より $x=8$。` }
],

// 大問5：空間図形
d5: [
    { 
        q: String.raw`底面の半径 $3$cm、高さ $4$cm の円錐の体積を求めなさい。`, 
        a: String.raw`$12\pi$ cm$^3$`, 
        e: String.raw`$\frac{1}{3} \times \pi \times 3^2 \times 4 = 12\pi$。`, 
        draw: (brd) => { 
            brd.setBoundingBox([-5, 5, 5, -5]);
            brd.create('ellipse', [[0,-2], 3, 0.8], {strokeColor:'black'}); 
            brd.create('segment', [[-3,-2],[0,3]], {strokeColor:'black'}); 
            brd.create('segment', [[3,-2],[0,3]], {strokeColor:'black'});
            brd.create('segment', [[0,-2],[0,3]], {dash:2, strokeColor:'gray'}); // 高さ
        } 
    },
    { q: String.raw`底面の半径 $3$cm、母線の長さ $5$cm の円錐の高さ。`, a: String.raw`$4$ cm`, e: String.raw`三平方の定理より $\sqrt{5^2-3^2}=4$。` },
    { q: String.raw`1辺 $3$cm の立方体の表面積。`, a: String.raw`$54$ cm$^2$`, e: String.raw`$3 \times 3 \times 6 = 54$。` },
    { q: String.raw`半径 $6$cm の球の表面積。`, a: String.raw`$144\pi$ cm$^2$`, e: String.raw`$4\pi \times 6^2 = 144\pi$。` },
    { q: String.raw`半径 $2$cm の球の体積。`, a: String.raw`$\frac{32}{3}\pi$ cm$^3$`, e: String.raw`$\frac{4}{3}\pi \times 2^3 = \frac{32}{3}\pi$。` },
    { q: String.raw`底面 $4 \times 5$、高さ $6$ の四角柱の体積。`, a: String.raw`$120$`, e: String.raw`$4 \times 5 \times 6 = 120$。` },
    { q: String.raw`1辺 $2$cm の正四面体のすべての辺の長さの和。`, a: String.raw`$12$ cm`, e: String.raw`辺は全部で6本あるので $2 \times 6 = 12$。` },
    { q: String.raw`円柱の底面の直径 $4$cm、高さ $5$cm の体積。`, a: String.raw`$20\pi$ cm$^3$`, e: String.raw`半径2なので $\pi \times 2^2 \times 5 = 20\pi$。` },
    { q: String.raw`立方体の対角線の長さが $\sqrt{12}$ のとき、その1辺の長さ。`, a: String.raw`$2$`, e: String.raw`$a\sqrt{3} = \sqrt{12} \Rightarrow a\sqrt{3} = 2\sqrt{3} \Rightarrow a=2$。` },
    { q: String.raw`直方体の $3$ 辺が $1, 2, 3$ のとき、対角線の長さ。`, a: String.raw`$\sqrt{14}$`, e: String.raw`$\sqrt{1^2+2^2+3^2} = \sqrt{14}$。` }
]

});
