import React, { useState, useEffect, createRef } from "react"
import {
   Card,
   CardActions,
   CardActionArea,
   CardMedia,
   Typography,
} from "@material-ui/core"
import useStyles from "./styles"
import classNames from "classnames"

const NewsCard = ({
   article: { publishedAt, source, title, url, urlToImage },
   i,
   activeArticle,
}) => {
   const classes = useStyles()
   const [elRefs, setElRefs] = useState([])
   const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50)

   useEffect(() => {
      setElRefs((refs) =>
         Array(20)
            .fill()
            .map((_, j) => refs[j] || createRef())
      )
   }, [])

   useEffect(() => {
      if (i === activeArticle && elRefs[activeArticle]) {
         scrollToRef(elRefs[activeArticle])
      }
   }, [i, activeArticle, elRefs])

   return (
      <Card
         ref={elRefs[i]}
         className={classNames(
            classes.card,
            activeArticle === i ? classes.activeCard : null
         )}
      >
         <CardActionArea href={url} target="_blank">
            <CardMedia
               className={classes.media}
               image={
                  urlToImage ||
                  "https://images.pexels.com/photos/256523/pexels-photo-256523.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
               }
            />
            <div className={classes.details}>
               <Typography variant="body2" color="textSecondary" component="h2">
                  {new Date(publishedAt).toDateString()}
               </Typography>
               <Typography variant="body2" color="textSecondary" component="h2">
                  {source.name}
               </Typography>
            </div>
            <Typography className={classes.title} gutterBottom variant="h5">
               {title}
            </Typography>
         </CardActionArea>
         <CardActions className={classes.cardActions}>
            <Typography
               className="text-xl text-right"
               variant="h5"
               color="textSecondary"
            >
               {i + 1}
            </Typography>
         </CardActions>
      </Card>
   )
}

export default NewsCard
