let utilFunc = {
  setBundleUrl (url, jsFile) {
    const bundleUrl = url
    let host = ''
    let path = ''
    let nativeBase = ''
    const isAndroidAssets = bundleUrl.indexOf('your_current_IP') >= 0 || bundleUrl.indexOf('file://assets/') >= 0
    const isIOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0
    if (isAndroidAssets) {
      nativeBase = 'file://assets/dist'
    } else if (isIOSAssets) {
      nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1)
    } else {
      const matches = /\/\/([^/]+?)\//.exec(bundleUrl)
      const matchFirstPath = /\/\/[^/]+\/([^/]+)\//.exec(bundleUrl)
      if (matches && matches.length >= 2) {
        host = matches[1]
      }
      if (matchFirstPath && matchFirstPath.length >= 2) {
        path = matchFirstPath[1]
      }
      nativeBase = 'http://' + host + '/'
    }
    const h5base = './index.html?page='
    let base = nativeBase
    if (typeof navigator !== 'undefined' && (navigator.appCodeName === 'Mozilla' || navigator.product === 'Gecko')) {
      if (path === 'web' || path === 'dist') {
        base = h5base + '/dist/'
      } else {
        base = h5base + ''
      }
    } else {
      base = nativeBase + (path ? path + '/' : '')
    }
    const newUrl = base + jsFile
    return newUrl
  }
}

export default utilFunc
