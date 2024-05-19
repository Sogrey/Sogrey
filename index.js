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

function PRCDate() {
    return new Date(new Date().getTime()+(parseInt(new Date().getTimezoneOffset()/60) + 8)*3600*1000);
}

const readme = `\
### Hi there 👋

😀 I am always easy to die fine time, but we need not regret, although we can't obstruct time of passage, we can keep this happiness. 
 
⏳ **${thisYear}**${progressBarOfThisYear}**${thisYear+1}** [${(progressOfThisYear * 100).toFixed(2)} %] <!-- https://github.com/liununu/liununu -->

> ⏰ Updated on ${PRCDate()}

## Sogrey

![](https://komarev.com/ghpvc/?username=sogrey&color=a90afb&style=for-the-badge)

一只羊🐑， 两只羊🐑🐑， 三只羊🐑🐑🐑… sorry,GC overhead limit exceeded.

![Sogrey's github stats](https://github-readme-stats.vercel.app/api?username=sogrey&show_icons=true&theme=material-palenight) <!-- https://github.com/anuraghazra/github-readme-stats -->

![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=sogrey&layout=compact)

![](https://github-profile-trophy.vercel.app/?username=sogrey&theme=onedark&row=2&column=4)

- 👯 Field of study: [Android](https://developer.android.google.cn/?hl=zh-cn) | [Java](https://www.java.com/zh-CN/) | [Kotlin](https://kotlinlang.org/) | [Javascript](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript) | [TypeScript](https://github.com/microsoft/TypeScript) | [Flutter](https://flutter.dev/) | [Dart](https://github.com/dart-lang) | [Vue](https://cn.vuejs.org/) | [Three.js](https://threejs.org/) | [Cesium](https://www.cesium.com/) | [C/C++](https://learn.microsoft.com/zh-cn/cpp/?view=msvc-170&viewFallbackFrom=vs-2019) | [UnrealEngine](https://www.unrealengine.com/zh-CN) 
- 📫 How to reach me: Xi'an China
- 😄 Blog: https://sogrey.github.io/ OR https://sogrey.gitee.io/ \
`
console.log(readme);
