const AuthManager = {
    // ログイン処理
    verify: function(key, org) {
        let status = "DENIED";
        
        // ライセンスキーの設定
        if (key === "1234") status = "full_access";
        else if (key === "d1all") status = "d1_all";
        
        if (status !== "DENIED") {
            localStorage.setItem('math_app_status', status);
            localStorage.setItem('math_app_org', org);
            return status;
        }
        return "DENIED";
    },

    // 権限チェック
    isUnlocked: function(itemId) {
        const status = localStorage.getItem('math_app_status') || "DENIED";
        
        // フルアクセス権限
        if (status === "full_access") return true;
        // 大問1全開放
        if (status === "d1_all" && itemId.startsWith("d1_q")) return true;
        // 特定のIDのみ
        if (status === itemId) return true;
        
        return false;
    }
};
