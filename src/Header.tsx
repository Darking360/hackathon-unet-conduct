import React, { Component } from 'react'
import { Link } from 'gatsby'
import { Layout, Menu, Row, Icon, Col } from 'antd'

interface Props {
  siteTitle: string
}

export class Header extends Component<Props> {
  render() {
    const { siteTitle } = this.props
    return (
      <Row>
        <Menu mode="horizontal">
          <Menu.Item>
            <Link to="/docs/get-started/introduction/">{siteTitle}</Link>
            
          </Menu.Item>
        </Menu>
      </Row>
    )
  }
}
