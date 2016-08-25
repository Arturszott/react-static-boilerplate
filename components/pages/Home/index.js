import React from 'react'

import Logo from '../../common/Logo'

import './styles.scss'

export default class HomePage extends React.Component {
    render() {
        return (
            <div className="home-page page text-center">
                <h1>This is a starter.</h1>
                <h3>Useful for fast prototyping!</h3>

                <h4>Initialy used for UKS Bronek Site</h4>

                <a href="https://arturszott.github.io/uks-bronek/">
                    <Logo />
                </a>

                <h1>Keep creating!</h1>
                <p>Noone will read this message. It's for myself.</p>
            </div>
        )
    }
}
