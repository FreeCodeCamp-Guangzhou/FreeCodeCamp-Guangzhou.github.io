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

const Community = () => (
  <div style={styles.container}>
    <h1 style={styles.heading}>FCC 社区</h1>
    <p style={styles.description}>
       FreeCodeCamp社区是全球各个城市志愿者自发的编程组织，旨在交流与分享技术学习心得。
       FreeCodeCamp China目前已经点亮30+城市，如北京，上海，成都，西安，广州，深圳等多个城市均有FCC小组，
       社区组织者定期组织城市coffee & code 线下活动，或组织黑客松活动。
       <br />
       FreeCodeCamp China 社区组织者，布道师在2017年活跃于多个技术分享活动，分享技术成长与社区建立心得，积极与当地技术平台，公益组织互动。
       2017年10月，FreeCodeCamp China 入选白皮书，标志着开源文化成为社会新公益。同时入选的有IBM、腾讯、微软、京东的技术公益项目。
    </p>
    <Carousel autoplay>
      <img src={require(`../images/fcc_community.jpg`)} alt="FCC社区" />
      <img src={require(`../images/fcc_Coscon.jpg`)} alt="FCC COSCON" />
      <img src={require(`../images/fcc_cd_fe.jpg`)} alt="FCC CD" />
    </Carousel>
  </div>);

export default Community;
