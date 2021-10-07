const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar =
      '▶'.repeat(passedProgressBarIndex) +
      '▁'.repeat(progressBarCapacity - passedProgressBarIndex)
    return ` 【${progressBar}】 `
}

const readme = `\
### Hi there 👋

⏳ ${thisYear}${progressBarOfThisYear}${thisYear+1} [${(progressOfThisYear * 100).toFixed(2)} %]

> ⏰ Updated on ${new Date().toUTCString()} 

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
