import axios from 'axios'



axios.defaults.baseURL ="https://ly.anjing.live/admin"


    axios.interceptors.request.use(config =>{
        //添加header字段
        config.headers.appVersion = '1.0';
        config.headers.deviceVersion = getOs()+','+validB();
        config.headers.deviceModel = navigator.platform;
        config.headers.device = '4';
        if(localStorage.token && localStorage.token!='undefined'){                      //如果登录数据存在
            config.headers.token =localStorage.token
        }
        // NProgress.start();
        return config;
    },
    err=>{
        return Promise.reject(err);
    }
);



//响应拦截器
axios.interceptors.response.use(function(response) {

    let data_info = response.data;

    if(data_info.code==-1){
        localStorage.clear();           //删除所有登陆数据
        sessionStorage.clear()
        top.location.href='http://127.0.0.1:8080/#/land'
    }
    return response;
}, function(error) {
    return Promise.reject(error);
});





//提取操作系统和浏览器
function validB(){
    var u_agent = navigator.userAgent;
    var B_name="Failed to identify the browser";
    if(u_agent.indexOf("Firefox")>-1){
        B_name="Firefox";
    }else if(u_agent.indexOf("Chrome")>-1){
        B_name="Chrome";
    }else if(u_agent.indexOf("MSIE")>-1&&u_agent.indexOf("Trident")>-1){
        B_name="IE(8-10)";
    }
    return B_name;
}

//获取操作系统
function getOs() {

    var sUserAgent = navigator.userAgent;

    var isWin = (navigator.platform == "Win32") || (navigator.platform == "Windows");

    var isMac = (navigator.platform == "Mac68K") || (navigator.platform == "MacPPC") || (navigator.platform == "Macintosh") || (navigator.platform == "MacIntel");

    if (isMac) return "MacOS";

    var isUnix = (navigator.platform == "X11") && !isWin && !isMac;

    if (isUnix) return "Unix";

    var isLinux = (String(navigator.platform).indexOf("Linux") > -1);

    if (isLinux) return "Linux";

    if (isWin) {

        var isWin2K = sUserAgent.indexOf("Windows NT 5.0") > -1 || sUserAgent.indexOf("Windows 2000") > -1;

        if (isWin2K) return "Windows2000";

        var isWinXP = sUserAgent.indexOf("Windows NT 5.1") > -1 || sUserAgent.indexOf("Windows XP") > -1;

        if (isWinXP) return "WindowsXP";

        var isWin2003 = sUserAgent.indexOf("Windows NT 5.2") > -1 || sUserAgent.indexOf("Windows 2003") > -1;

        if (isWin2003) return "Windows2003";

        var isWinVista = sUserAgent.indexOf("Windows NT 6.0") > -1 || sUserAgent.indexOf("Windows Vista") > -1;

        if (isWinVista) return "Windows Vista";

        var isWin7 = sUserAgent.indexOf("Windows NT 6.1") > -1 || sUserAgent.indexOf("Windows 7") > -1;

        if (isWin7) return "Windows7";

        var isWin10 = sUserAgent.indexOf("Windows NT 10.0") > -1 || sUserAgent.indexOf("Windows 10") > -1;
        if (isWin10) return "Windows10";
    }
}

export default axios;