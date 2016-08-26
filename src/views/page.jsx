import React from 'react'
import DefaultLayout from './layouts/default'
import Themes from './themes/'

class Page extends React.Component {
    render() {
        if(!this.props.doc){
            return <p>Site not found</p>
        }
        if(!this.props.theme){
            return <p>No theme selected!</p>
        }
        const Theme = Themes[this.props.theme.name]
        return (
            <DefaultLayout title={this.props.doc.data.name}>
                <Theme {...this.props} />
            </DefaultLayout>
        )
    }
}

export default Page
