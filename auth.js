const AuthManager = {
    getUnlockedKeys: function() {
        return JSON.parse(localStorage.getItem('unlocked_keys') || '[]');
    },
    isUnlocked: function(key) {
        const keys = this.getUnlockedKeys();
        // 1. マスターキー または オールインワン があれば全パス
        if (keys.includes('master_key') || keys.includes('all_in_one')) return true;
        
        // 2. 指定されたキーそのものがあればパス
        if (keys.includes(key)) return true;

        // 3. 大問ごとのセット（daimon1_all等）を持っている場合の特例
        // 例: 'daimon1_q1' をチェック中、'daimon1_all' を持って入ればOK
        if (key.startsWith('daimon1_') && keys.includes('daimon1_all')) return true;

        return false;
    },
    unlock: function(key) {
        let keys = this.getUnlockedKeys();
        if (!keys.includes(key)) {
            keys.push(key);
            localStorage.setItem('unlocked_keys', JSON.stringify(keys));
        }
    }
};

