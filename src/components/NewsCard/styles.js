import { makeStyles } from "@material-ui/core"

export default makeStyles({
   media: {
      height: 250,
   },
   border: {
      border: "solid",
   },
   fullHeightCard: {
      height: "100%",
   },
   card: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      borderBottom: "12px solid white",
   },
   activeCard: {
      borderBottom: "12px solid rgb(9, 93, 215)",
   },
   grid: {
      display: "flex",
   },
   details: {
      display: "flex",
      justifyContent: "space-between",
      margin: "20px",
   },
   title: {
      padding: "0 16px",
   },
   cardActions: {
      paddingTop: "8px",
      paddingBottom: "8px",
      paddingRight: '12px',
      marginLeft: 'auto',
      display: "flex",
      alignSelf: "end",
      justifyContent: "space-between",
   },
})
