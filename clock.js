document.addEventListener('DOMContentLoaded', function () {
  var clock = document.getElementById('clock')
  var hour = document.getElementById('hour')
  var minute = document.getElementById('minute')
  var second = document.getElementById('second')
  clock.appendChild(minute)
  clock.appendChild(second)
  var degrees = 0

  var secCount = 1
  function secondRotation () {
    degrees = (secCount / 60) * 360
    secCount++
    return degrees
  }

  var minCount = 1
  function minuteRotation () {
    degrees = (minCount / 3600) * 360
    minCount++
    return degrees
  }

  var hourCount = 1
  function hourRotation () {
    degrees = (hourCount / 43200) * 360
    hourCount++
    return degrees
  }
  setInterval(function () {
    second.style.transform = 'rotate(' + secondRotation() + 'deg)'
    minute.style.transform = 'rotate(' + minuteRotation() + 'deg)'
    hour.style.transform = 'rotate(' + hourRotation() + 'deg)' }, 1000)
})
