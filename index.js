const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar =
        '▇'.repeat(passedProgressBarIndex) +
        '▁'.repeat(progressBarCapacity - passedProgressBarIndex)
    return ` 【${progressBar}】 `
}

function getdates() {
    var w_array = new Array("星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var day = d.getDate();
    var week = d.getDay();
    var h = d.getHours();
    var mins = d.getMinutes();
    var s = d.getSeconds();
    if (month < 10) month = "0" + month
    if (day < 10) day = "0" + day
    if (h < 10) h = "0" + h
    if (mins < 10) mins = "0" + mins
    if (s < 10) s = "0" + s
    var shows = year + "-" + month + "-" + day + " " + h + ":" + mins + ":" + s + " " + w_array[week] + "";
    console.log(shows);
    return shows;
}

const readme = `\
### Hi there 👋

⏳ **${thisYear}**${progressBarOfThisYear}**${thisYear+1}** [${(progressOfThisYear * 100).toFixed(2)} %] <!-- https://github.com/liununu/liununu -->

> ⏰ Updated on ${new Date().toUTCString()}  [北京时间：${getdates()}]

## Sogrey

![](https://komarev.com/ghpvc/?username=sogrey&color=dc143c)

一只羊🐑， 两只羊🐑🐑， 三只羊🐑🐑🐑… sorry,GC overhead limit exceeded.

![Sogrey's github stats](https://github-readme-stats.vercel.app/api?username=sogrey&show_icons=true&theme=material-palenight) <!-- https://github.com/anuraghazra/github-readme-stats -->

![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=sogrey&layout=compact)

- 👯 Field of study: Java|Kotlin|Javascript|TypeScript|Flutter|Dart
- 📫 How to reach me: Xi'an China
- 😄 Blog: https://sogrey.github.io/ OR https://sogrey.gitee.io/ \
`
console.log(readme);
