import React from 'react';

const styles = {
  container: {
    width: '80vw',
    margin: 'auto',
    padding: '4vw',
  },
  heading: {
    textAlign: 'center',
  },
  skills: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    margin: '2vw 0',
  },
  skill: {
    margin: '2vw 0',
    textAlign: 'center',
    width: '15vw',
  },
  skillIcon: {
    fontSize: '60px',
    color: 'darkgreen',
  },
  skillTitle: {
    fontSize: '20px',
    color: '#535353',
  },
};

const skillSet = [
  { icon: 'HTML5', link: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5' },
  { icon: 'CSS3', link: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5' },
  { icon: 'JavaScript', link: 'https://developer.mozilla.org/bm/docs/Web/JavaScript' },
  { icon: 'Bootstrap', link: 'https://getbootstrap.com/' },
  { icon: 'React', link: 'https://reactjs.org/' },
  { icon: 'D3', link: 'https://d3js.org/' },
  { icon: 'Node', link: 'https://nodejs.org/en/' },
  { icon: 'Github', link: 'https://github.com/' }];

const Skills = () => (
  <div style={styles.container}>
    <h1 style={styles.heading}>你可收获的技能</h1>
    <div style={styles.skills}>
      {skillSet.map(skill => (
        <div style={styles.skill}>
          <a href={skill.link} target="_blank">
            <i className={`iconfont icon-${skill.icon}`} style={styles.skillIcon} />
            <div style={styles.skillTitle}>{skill.icon}</div>
          </a>
        </div>))}
    </div>
  </div>);

export default Skills;
