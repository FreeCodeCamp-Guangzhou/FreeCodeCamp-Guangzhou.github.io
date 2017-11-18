import React from 'react';
import { Carousel } from 'antd';

const styles = {
  container: {
    width: '80vw',
    margin: 'auto',
    padding: '4vw',
  },
  heading: {
    textAlign: 'center',
  },
  description: {
    margin: '2vw 0',
    fontSize: '16px',
    color: '#333',
  },
};

const FCCGZ = () => (
  <div style={styles.container}>
    <h1 style={styles.heading}>FCC GZ</h1>
    <p style={styles.description}>
      FreeCodeCamp 广州社区致力于为广州本地 FCC 学员提供线下交流互动的平台，自2016年12月以来，
      FreeCodeCamp 广州社区陆续举办了Cofee & code 线下交流活动，同时感谢6CIT咖啡，一起开工社区提供活动场地。
    </p>
    <Carousel>
      <img src={require('../images/fccgz.png')} alt="FCC GZ" />
    </Carousel>
  </div>);

export default FCCGZ;
