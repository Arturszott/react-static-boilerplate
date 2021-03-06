import React from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'

import HomePage from '../components/pages/Home'

export default class Index extends React.Component {
    render() {
        return (
            <DocumentTitle title={config.siteTitle}>
                <div>
                    <HomePage />
                </div>
            </DocumentTitle>
        )
    }
}
