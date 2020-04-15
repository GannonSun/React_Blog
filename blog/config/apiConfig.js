let ipUrl = 'http://127.0.0.1:7002/api/'

let servicePath = {
    getTypeInfo: ipUrl + 'getTypeInfo',  // 当前页面的文章类型接口
    getArticleList: ipUrl + 'getArticleList',  //  首页文章列表接口
    getArticleById: ipUrl + 'getArticleById/',  // 文章详细页内容接口，需要接收参数
    getListById: ipUrl + 'getListById/' // 不同类型文章列表接口，需要接收参数
}

export default servicePath;