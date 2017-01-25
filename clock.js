function clock () {
  var clock = document.getElementById('clock')
  var hour = document.getElementById('hour')
  var minute = document.getElementById('minute')
  var second = document.getElementById('second')
  clock.appendChild(minute)
  clock.appendChild(second)
  var degrees = 0
  var now = new Date()
  var secCount = 0
  var sec = now.getSeconds()
  function secondRotation () {
    degrees = ((sec + secCount) / 60) * 360
    secCount++
    return degrees
  }

  var minCount = 0
  var min = now.getMinutes()
  function minuteRotation () {
    degrees = sec / 10 + ((min * 60 + minCount) / 3600) * 360
    minCount++
    return degrees
  }

  var hourCount = 0
  var hr = now.getHours()
  function hourRotation () {
    if (hr > 12) {
      hr -= 12
    } else if (hr === 0) {
      hr = 12
    }
    degrees = min / 2 + ((hr * 3600 + hourCount) / 43200) * 360
    hourCount++
    return degrees
  }

  return {
    display: setInterval(function () {
      second.style.transform = 'rotate(' + secondRotation() + 'deg)'
      minute.style.transform = 'rotate(' + minuteRotation() + 'deg)'
      hour.style.transform = 'rotate(' + hourRotation() + 'deg)' }, 1000)
  }
}
document.addEventListener('DOMContentLoaded', function () {
  var domClock = clock()
  domClock.display
})
