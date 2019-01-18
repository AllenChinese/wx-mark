const formatDateTime = function (inputTime) {
  var date = new Date(inputTime)
  var y = date.getFullYear();
  var m = date.getMonth() + 1
  m = m < 10 ? ('0' + m) : m
  var d = date.getDate()
  d = d < 10 ? ('0' + d) : d
  var h = date.getHours();
  h = h < 10 ? ('0' + h) : h
  var minute = date.getMinutes()
  minute = minute < 10 ? ('0' + minute) : minute
  return y + '-' + m + '-' + d + ' ' + '　' + h + ':' + minute
}

export default formatDateTime
