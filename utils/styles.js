import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    navbar:{
        backgroundColor : '#203040',
        '& a':{
            color:"#ffffff",
            marginLeft : 10,
        },
    },
    main:{
        maxWidth:"80vw",
        minHeight:"80vh",
    },
    footer:{
        textAlign :"center",
    },
});
export default useStyles