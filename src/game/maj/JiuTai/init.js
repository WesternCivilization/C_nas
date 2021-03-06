(function () {
    var JSPath = "src/game/maj/JiuTai/";
    var RESPath = "res/Game/Maj/JiuTai/";
    
    var jsList = [
        JSPath + "majhong.js",
        JSPath + "net.js",
        JSPath + "Model/GameLogic.js",
        JSPath + "Model/GameRecord.js",
        JSPath + "Common/Common.js",

        JSPath + "Views/GameDesk.js",

        JSPath + "Views/RecordControll.js",
        JSPath + "Views/RoundResult.js",
        JSPath + "Views/EndResult.js",
        JSPath + "Views/CreateRoom.js",
        JSPath + "Views/DahhuAniamtion.js",

        JSPath + "Views/GameScene.js",
    ];

    XYGameInitAppend(jsList);

    
    var RES = {
        WGCRoom             : RESPath + "CreateRoom.json",
        WGControl           : RESPath + "WGControl.json",
        WGRoomBaoPai        : RESPath + "WGRoomBaoPai.json",
        WGRoomBaoPai3D      : RESPath + "WGRoomBaoPai3D.json",
        RecordControll      : RESPath + "RecordControll.json",
        RoundResult         : RESPath + "RoundResult.json",

        DaHu_PL             : RESPath + "Resoures/dahu.plist",
        DaHu_PN             : RESPath + "Resoures/dahu.png",
    }

    for (var key in RES) {
        XYGameInitAppendRes(RES[key]);
    }
    

    MJJiuTai = {
        JSPath  : JSPath,
        RESPath : RESPath,
        RES     : RES,
    };
})();
