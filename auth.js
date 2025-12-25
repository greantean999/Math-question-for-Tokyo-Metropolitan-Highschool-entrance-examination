/**
 * 都立数学特訓 - 高度な権限管理ロジック
 */
const AuthManager = {
    // 権限の包含関係を定義
    // (例：full_accessを持っていれば、配下のものはすべてtrueとみなす)
    isUnlocked: function(contentKey) {
        if (localStorage.getItem('full_access') === 'true') return true;
        
        // 大問1の個別問題の場合、大問1フルパックを持っていればOK
        if (contentKey.startsWith('daimon1_q')) {
            if (localStorage.getItem('daimon1_all') === 'true') return true;
        }
        
        return localStorage.getItem(contentKey) === 'true';
    },

    // ライセンスキーと保存キーの紐付け
    activateKey: function(inputKey) {
        const keyMap = {
            "D1-Q1": "daimon1_q1", "D1-Q2": "daimon1_q2", "D1-Q3": "daimon1_q3",
            "D1-Q4": "daimon1_q4", "D1-Q5": "daimon1_q5", "D1-Q6": "daimon1_q6",
            "D1-Q7": "daimon1_q7", "D1-Q8": "daimon1_q8", "D1-Q9": "daimon1_q9",
            "D1-SET": "daimon1_all",
            "D2-SET": "daimon2_all",
            "D3-SET": "daimon3_all",
            "D4-SET": "daimon4_all",
            "D5-SET": "daimon5_all",
            "ALL-IN-ONE": "full_access"
        };

        const target = keyMap[inputKey.trim().toUpperCase()];
        if (target) {
            localStorage.setItem(target, "true");
            return true;
        }
        return false;
    }
};
