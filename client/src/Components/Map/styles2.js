import { makeStyles } from "@material-ui/core"

export default makeStyles( () => ({

    search: {
        position: "absolute",
        top: "1rem", 
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
        maxWidth: "400px", 
        zIndex: "10",
    }

}))