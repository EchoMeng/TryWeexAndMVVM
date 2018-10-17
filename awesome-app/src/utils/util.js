let utilFunc = {
  setBundleUrl (url, jsFile) {
    // 获取当前js文件所在完整路径
    let bundleUrl = this.$getConfig().bundleUrl
    bundleUrl = String(bundleUrl)
    let nativeBase
    // android一般位于file://assets目录下
    let isAndroidAssets = bundleUrl.indexOf('file://assets/') >= 0
    // ios一般位于一般带有file开头，带有WeexDemo.app
    let isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0
    if (isAndroidAssets) {
      nativeBase = 'file://assets/dist/'
    } else if (isiOSAssets) {
      nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1)
    } else {
      let host = 'localhost:8080'
      let matches = /\/\/([^/]+?)\//.exec(bundleUrl)
      if (matches && matches.length >= 2) {
        host = matches[1]
      }
      nativeBase = 'http://' + host + '/index.html?page=./dist/'
    }
    return nativeBase
  }
}

export default utilFunc
