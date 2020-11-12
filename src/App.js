import React, { useState, useEffect } from "react"
import alanBtn from "@alan-ai/alan-sdk-web"
import wordsToNumbers from "words-to-numbers"

import NewsCards from "./components/NewsCards/NewsCards"
import Footer from "./components/Footer"

const App = () => {
   const [newsArticles, setNewsArticles] = useState([])
   const [activeArticle, setActiveArticle] = useState(-1)
   const alanKey =
      "a2bff1d1afaddffdaf99e43f589add652e956eca572e1d8b807a3e2338fdd0dc/stage"

   useEffect(() => {
      alanBtn({
         key: alanKey,
         onCommand: ({ command, articles, number }) => {
            if (command === "newHeadlines") {
               setNewsArticles(articles)
               setActiveArticle(-1)
            } else if (command === "highlight") {
               setActiveArticle((prevActiveArticle) => prevActiveArticle + 1)
            } else if (command === "open") {
               const parsedNumber =
                  number.length > 2
                     ? wordsToNumbers(number, {
                          fuzzy: true,
                       })
                     : number
               const article = articles[parsedNumber - 1]
               if (parsedNumber > 20) {
                  alanBtn().playText("Please try that again.")
               } else if (article) {
                  window.open(article.url, "_blank")
                  alanBtn().playText("You got it.")
               }
            }
         },
      })
   }, [])
   return (
      <div className="flex flex-col items-center justify-between mt-8 overflow-hidden">
         <div className="flex flex-col items-center">
            <img
               src="https://alan.app/voice/images/brand_alan_app_site/header/alan-logo-medium.svg?ff872e76fa47dead0450d9066250f8cf"
               alt="alan logo"
               className="px-4 pt-6 h-24 md:px-12 md:h-32"
            />
            <h1
               id="subtitle"
               className="text-4xl font-bold tracking-wider text-gray-200 lg:text-6xl"
            >
               AI <span className="tracking-normal">Newsreader</span>
            </h1>
            <hr />
         </div>
         <NewsCards
            articles={newsArticles}
            activeArticle={activeArticle}
         />
         <Footer />
      </div>
   )
}

export default App
