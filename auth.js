const AuthManager = {
    getUnlockedKeys: function() {
        return JSON.parse(localStorage.getItem('unlocked_keys') || '[]');
    },
    // ここを強化！
    isUnlocked: function(key) {
        const keys = this.getUnlockedKeys();
        return keys.includes('master_key') || keys.includes('all_in_one') || keys.includes(key);
    },
    unlock: function(key) {
        let keys = this.getUnlockedKeys();
        if (!keys.includes(key)) {
            keys.push(key);
            localStorage.setItem('unlocked_keys', JSON.stringify(keys));
        }
    }
};
