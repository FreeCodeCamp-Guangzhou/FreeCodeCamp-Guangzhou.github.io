import React from 'react';

const styles = {
  container: {
    width: '80vw',
    margin: 'auto',
    padding: '4vw',
    paddingTop: '12vw',
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

const Introduction = () => (
  <div style={styles.container}>
    <h1 style={styles.heading}>FreeCodeCamp</h1>
    <p style={styles.description}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="//www.freecodecamp.cn"
        title="线上学习平台"
      >FreeCodeCamp
      </a>
     是由 Quincy Larson 创办的开源社区，它致力于帮助人们利用零散时间学习编程，内容以前端和JS全栈为主。
     目前已经发展成为一个30万开发者的社区，通过游戏化的项目实战，来吸引大家学习编程，并在社区内给予实时的帮助。
     同时，为 NPO、NGO 组织给予技术支持。通过学习4个部分课程，你将获得 FCC 颁布的4个证书，分别是“前端开发证书”、“数据可视化证书”、“后端开发证书”、“全栈开发证书”。
    </p>
  </div>);

export default Introduction;
