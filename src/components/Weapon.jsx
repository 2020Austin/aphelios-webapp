// import purple from '../icons/gravitum.png'
// import green from '../icons/calibrum.png'
// import white from '../icons/crescendum.png'
// import blue from '../icons/infernum.png'
// import red from '../icons/severum.png'
import { motion } from "motion/react"

export default function Weapon(props) {

    let imgChoice;
    let colorChoice;

    switch(props.color) {
        case 'g':
            imgChoice = `calibrum.png`
            colorChoice="green"
            break
        case 'r':
            imgChoice = `severum.png`
            colorChoice="red"
            break
        case 'p':
            imgChoice = `gravitum.png`
            colorChoice="purple"
            break
        case 'b':
            imgChoice = `infernum.png`
            colorChoice="blue"
            break
        case 'w':
            imgChoice = `crescendum.png`
            colorChoice="white"
            break
        default:
            console.log(`Invalid weapon choice ${props.color}`)
            break

    }
    
    let v = "calibrum.png"
    v = "severum.png"

    return (
        <>
        <motion.div key={props.color} exit={{opacity : 0}}>
            {/* <img src={imgChoice} alt="" /> */}
            <img src={require(`../icons/${imgChoice}`)} />
            <p>{colorChoice}</p>
        
        </motion.div>
        </>
    )
}