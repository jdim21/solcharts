import React from 'react';
import { Layout, Row, Col, Grid } from 'antd';
import Link from './Link';
import { helpUrls } from './HelpUrls';
const { Footer } = Layout;
const { useBreakpoint } = Grid;

const footerElements = [
  { description: 'Discord', link: helpUrls.discord },
  { description: 'Twitter', link: helpUrls.twitter },
  { description: 'Solana Network', link: helpUrls.solanaBeach },
];

export const CustomFooter = () => {
  return (
    <Footer
      style={{
        height: '45px',
        paddingBottom: 10,
        paddingTop: 10,
      }}
    >
      <Row align="middle" gutter={[16, 4]}>
          <>
            <Col flex="auto" />
            {footerElements.map((elem, index) => {
              return (
                <Col key={index + ''}>
                  <Link external to={elem.link}>
                    {elem.description}
                  </Link>
                </Col>
              );
            })}
          </>
        <Col flex="auto">{/*  <DexProgramSelector />*/}</Col>
      </Row>
    </Footer>
  );
};
