import React from 'react'
import { Button, Link } from '@material-ui/core'

function ButtonComponent(props) {
    return (
        <div>
            <Button variant="contained">
                {
                    (props.status === 0) ? 
                    <Link onClick={props.SendOtp} underline="none" sx={{ mt: 3, mb: 2 }}>SEND OTP</Link> : ""
                }

                {
                    (props.status === 1) ? 
                    <Link onClick={props.ResendOtp} underline="none">RESEND OTP</Link> : "" && <Link underline="none" onClick={props.resume}>Send Otp</Link>
                }
            </Button>
        </div>
    )
}

export default ButtonComponent
