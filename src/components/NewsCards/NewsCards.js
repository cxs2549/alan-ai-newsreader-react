import React from "react"
import { Grid, Grow } from "@material-ui/core"
import useStyles from "./styles"
import NewsCard from "../NewsCard/NewsCard"

const infoCards = [
   {
      color: "rgb(4, 148, 255)",
      title: "News by Category",
      info:
         "Business, Entertainment, General, Health, Science, Sports, Technology",
      text: "Give me the latest Technology news",
   },
   {
      color: "rgb(9, 93, 215)",
      title: "News by Term",
      info:
         "Bitcoin, PlayStation 5, Smartphones, Donald Trump, Corona Virus...",
      text: "What's up with PlayStation 5?",
   },
   {
      color: "rgb(4, 148, 255)",
      title: "News by Source",
      info: "CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",
      text: "Give me the news from CNN",
   },
]

const NewsCards = ({ articles, activeArticle }) => {
   const classes = useStyles()

   if (!articles.length) {
      return (
         <div className="flex flex-col flex-no-wrap items-center justify-center mx-2 mt-8 text-gray-300 md:flex-row md:mx-10">
            {infoCards.map((infoCard, i) => (
               <div
                  key={i}
                  style={{
                     backgroundColor: infoCard.color,
                  }}
                  className="flex flex-col items-center justify-between h-64 p-4 mx-2 mb-8 border border-gray-500 rounded-md shadow-lg sm:w-56"
               >
                  <h5 className="text-lg font-bold tracking-wider whitespace-no-wrap text-center text-gray-300 uppercase white">
                     {infoCard.title}
                  </h5>
                  {infoCard.info ? (
                     <div>

                        <h6 className="text-center text-md">{infoCard.info}</h6>
                     </div>
                  ) : null}
                  <h6 className="mt-4 text-sm text-gray-800">
                     <span className="text-left text-gray-400">Try saying:</span>{" "} <br />
                     <i className="font-semibold text-md">{infoCard.text}</i>{" "}
                  </h6>
               </div>
            ))}
         </div>
      )
   }

   return (
      <Grow in>
         <Grid
            className={classes.container}
            container
            alignItems="stretch"
            spacing={3}
         >
            {articles.map((article, i) => (
               <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  style={{ display: "flex" }}
               >
                  <NewsCard
                     article={article}
                     activeArticle={activeArticle}
                     i={i}
                  />
               </Grid>
            ))}
         </Grid>
      </Grow>
   )
}

export default NewsCards
