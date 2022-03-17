# 🌈OctoColor
<div align="center">
<img src="https://user-images.githubusercontent.com/68690233/158908371-7a74119f-c9f8-40fb-8caa-3604bc66e347.png" />

🤔 Wanna know what's your GitHub Profile Color?\
🐱 Head over to https://octocolor.vercel.app
</div>

## 🐱‍💻 How does GitColor work?

The idea is simple. We get the language info for all of a user's GitHub Repositories using [GhPolyGlot](https://github.com/IonicaBizau/node-gh-polyglot) and then we use the top 2 languages as a reference to determine the color of the user's GitHub profile. Once we get the info about the top 2 languages, we blend the the colors using the [Mix CSS Color](https://www.npmjs.com/package/mix-css-color) library. Then we simply use [Name that Color](https://chir.ag/projects/name-that-color/) library to get the name of the unique color generated by the app. And we're done! 🚀

## 🚀 Running Locally

Clone the repos's main branch.
```sh
$ git clone -b main https://github.com/asheeeshh/gitcolor.git
```
Install dependencies, make sure you have `nodejs` and `npm` installed.
```sh
$ npm install
```
Run the app.
```sh
$ npm run dev
```

## ⚖ License 
MIT License

## ✒ Ending Note 
- *Consider giving the repo a ⭐ if you liked the project!*
- *Follow me and checkout my other projects!*


 
