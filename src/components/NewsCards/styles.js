import { makeStyles } from "@material-ui/core"

export default makeStyles({
   container: {
      width: "100%",
      margin: 'auto',
   },
   card: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      height: "45vh",
      padding: "12%",
      borderRadius: 10,
      color: "#fff",
   },
   infoCard: {
      display: "flex",
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: "column",
      textAlign: "center",
   },
})
