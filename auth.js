const AuthManager = {
    // ログイン処理（キーの検証と保存）
    verify: function(key, org) {
        let status = "DENIED";
        
        // キーの判定
        if (key === "1234") status = "full_access";
        else if (key === "d1all") status = "d1_all";
        else if (key === "d1q1") status = "d1_q1"; // 必要に応じて追加
        
        if (status !== "DENIED") {
            localStorage.setItem('math_app_status', status);
            localStorage.setItem('math_app_org', org);
            return status;
        }
        return "DENIED";
    },

    // 権限チェック（メニュー表示や問題へのアクセス制限で使用）
    isUnlocked: function(itemId) {
        const status = localStorage.getItem('math_app_status') || "DENIED";
        
        if (status === "full_access") return true;
        if (status === "d1_all" && itemId.startsWith("d1_q")) return true;
        if (status === itemId) return true;
        
        return false;
    }
};
