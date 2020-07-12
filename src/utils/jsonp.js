
// 严谨的jsonp
(function(global) {
  let id = 0,
      container = document.getElementsByTagName('head')[0]

  function jsonp(options) {
    if (!options || !options.url) return 
    
    let scriptNode = document.createElement('script'),
        data = options.data || {},
        url = options.url,
        callback = options.callback,
        fnName = 'jsonp' + id++

    data['callback'] = fnName

    // 拼接url
    const params = []
    Object.keys(data).forEach(key => {
      params.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    })
    url = url.indexOf('?') > 0 ? url + '&' : url + '?'
    url += params.join('&')
    scriptNode.src = url

    global[fnName] = function(res) {
      callback && callback(res)
      container.removeChild(scriptNode)
      delete global[fnName]
    }

    scriptNode.onerror = function() {
      callback && callback({error: 'error'})
      container.removeChild(scriptNode)
      global[fnName] && delete global[fnName]
    }

    scriptNode.type = 'text/javascript'
    container.appendChild(scriptNode)
  }

  global.jsonp = jsonp
})(this)