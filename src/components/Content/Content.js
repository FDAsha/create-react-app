// import Aside from "./Aside/Aside";
// import Items from "./Items/Items";

import Items from "./Items/Items";

const styles = {
    section: {
        padding: "20px 0 35px 0"
    },
    wrapper: {
        width: "100%",
        height: "600px",
        display: "flex"
    }
}

const Content = (props) => {
    const itemss = [{
        id: 'one',
        width: '20%',
        height: '290px',
        backgroundColor: 'green',
        text: 'Контент 1',
        padding: '80px 0 0 60px'
    }, {
        id: 'two',
        width: '80%',
        height: '290px',
        backgroundColor: 'blue',
        text: 'Контент 2',
        padding: '70px 0 0 100px'
    }, {
        id: 'three',
        width: '100%',
        backgroundColor: 'pink',
        text: 'Контент 3',
    }]

      // widht = { widht },
  //   height = { height },
  //   bacgroundColor = { bacgroundColor },
  //   text = { text },
  //   padding = { padding }
    return (


        < section style = { styles.section } >
            <div style={styles.wrapper}>
                <Items itemss={itemss} />
            </div>
        </section >

    )
}

export default Content;