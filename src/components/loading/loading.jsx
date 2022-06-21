import React from 'react'
import { LockBody, Spinner, Picture, ReleaseBody} from './styles/loading'

const Loading = ({ src, ...restProps}) => {
    return (
        // when use clicks on profile, a loading screen appears before the browse stuff will be shown
        <Spinner {...restProps}>
            <LockBody />
            <Picture src={`/images/users/${src}.png`} />
        </Spinner>
    )
}

const LoadingReleaseBody = () => {return <ReleaseBody />}


Loading.ReleaseBody = LoadingReleaseBody

export default Loading
