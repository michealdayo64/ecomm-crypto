import { connect } from 'react-redux';
import PropTypes from 'prop-types'
//import styled from 'styled-components';
import { withAlert } from 'react-alert'
import React, { Component, Fragment } from 'react'

 class Alert extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired
    }
    componentDidUpdate(prevProps){
        const {auth, alert} = this.props
        //console.log(prevProps)
        if(auth !== prevProps.error){
            if(auth.signupsuccess) alert.success(`${auth.signupsuccess}`)
            else if(auth.logsucces) alert.success(`${auth.logsucces}`)
            else if(auth.logoutSuccess) alert.success("Logout Success")
            else if(auth.error) alert.error(`${auth.error}`)
            
        }
    }

    render() {
        return (
            <Fragment />
        )
    }
}

const mapStateToProps = state =>({
    auth: state.auth
})
export default connect(mapStateToProps)(withAlert()(Alert))


/*function Alert({ alerts }) {
    return (
        alerts !== null && alerts.length > 0 && alerts.map(alert => (
            <Container key={alert.id} me={alert.alertType}>
                {alert.msg}
            </Container>
        ))
    )
}

Alert.propTypes = {
    alerts: PropTypes.array.isRequired
}

const mapStateToProps = {
    alerts: state.alert
}

export default connect(mapStateToProps)(Alert)

const Container = styled.div`
    height: 50px;
    background-color: ${props.me? "green": "red"}
`*/
