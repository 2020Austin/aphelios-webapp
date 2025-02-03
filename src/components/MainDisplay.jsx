import { useState } from "react";
import Weapon from "./Weapon.jsx"
import { AnimatePresence, motion } from "motion/react";
// import Hand from "Hand.jsx";
// import Bag from "Bag.jsx;"

export default function MainDisplay() {

    const [handList, setHandList] = useState(['g', 'r'])
    const [bagList, setBagList] = useState(['p', 'b', 'w'])

    function handleDiscardOlder() {

        const replacementItem = bagList[0]
        const olderItem = handList[0]

        setHandList(prev=>[prev[1],replacementItem])
        setBagList(prev=>[...prev.slice(1), olderItem])
        
        // console.log(`handList ${handList}`)
        // console.log(`bagList ${bagList}`)
    }

    function handDiscardNewer() {
        const replacementItem = bagList[0]
        const newerItem = handList[1]

        setHandList(prev=>[prev[0],replacementItem])
        setBagList(prev=>[...prev.slice(1), newerItem])
        
        // console.log(`handList ${handList}`)
        // console.log(`bagList ${bagList}`)
    }

    return (<>
        <div className="hand">
        <AnimatePresence>
                <motion.div key={handList[0]} className="older" exit={{opacity: 0}}> 
                    <Weapon color={handList[0]} />
                    <button onClick={handleDiscardOlder}> Discard </button>
                </motion.div>
                <motion.div key={handList[1]} className="newer" exit={{opacity: 0}}> 
                    <Weapon color={handList[1]} />
                    <button onClick={handDiscardNewer}> Discard </button>
                </motion.div>
        </AnimatePresence>
        </div>
        <div className="bag">
        <AnimatePresence>
                    <Weapon key={bagList[0]} color={bagList[0]} />
                    <Weapon key={bagList[1]} color={bagList[1]} />
                    <Weapon key={bagList[2]} color={bagList[2]} />
        </AnimatePresence>
        </div>
        </>)
}