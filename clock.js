document.addEventListener('DOMContentLoaded', function () {
  var clock = document.getElementById('clock')
  var hour = document.getElementById('hour')
  var minute = document.getElementById('minute')
  var second = document.getElementById('second')
  clock.appendChild(minute)
  clock.appendChild(second)
  var degrees = 0
  var now = new Date()

  var secCount = 1
  var sec = now.getSeconds()
  function secondRotation () {
    degrees = ((sec + secCount) / 60) * 360
    secCount++
    return degrees
  }

  var minCount = 1
  var min = now.getMinutes()
  function minuteRotation () {
    degrees = ((sec + min*60 + minCount) / 3600) * 360
    //console.log('min deg =' + degrees)
    minCount++
    return degrees
  }

  var hourCount = 1
  function hourRotation () {
    var hour = now.getHours() % 12
    degrees = ((sec + min + hour * 3600 + hourCount) / 43200) * 360
    hourCount++
    return degrees
  }
  setInterval(function () {
    second.style.transform = 'rotate(' + secondRotation() + 'deg)'
    minute.style.transform = 'rotate(' + minuteRotation() + 'deg)'
    hour.style.transform = 'rotate(' + hourRotation() + 'deg)' }, 1000)
})
