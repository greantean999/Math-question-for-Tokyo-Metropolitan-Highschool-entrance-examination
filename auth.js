const AuthManager = {
    getUnlockedKeys: function() {
        return JSON.parse(localStorage.getItem('unlocked_keys') || '[]');
    },
    isUnlocked: function(key) {
        const keys = this.getUnlockedKeys();
        // 1. マスターキー または オールインワン があれば全パス
        if (keys.includes('master_key') || keys.includes('all_in_one')) return true;
        
        // 2. 指定されたキーそのもの(d1_q1など)があればパス
        if (keys.includes(key)) return true;

        // 3. 大問ごとのセット（d1_all等）を持っている場合の特例
        // "d1_q1" をチェック中、"d1_all" を持っていればOKにする
        const prefix = key.split('_')[0]; // "d1_q1" -> "d1"
        if (keys.includes(prefix + '_all')) return true;

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
