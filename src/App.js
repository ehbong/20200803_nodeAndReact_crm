/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';

const customers = [
  {
    id: 1,
    image: 'https://placeimg.com/64/64/1',
    name: '홍길동',
    birthday: '961222',
    gender: '남자',
    job: '대학생',
  },
  {
    id: 2,
    image: 'https://placeimg.com/64/64/2',
    name: '김철수',
    birthday: '931222',
    gender: '남자',
    job: '군인',
  },
  {
    id: 3,
    image: 'https://placeimg.com/64/64/3',
    name: '손흥민',
    birthday: '921222',
    gender: '남자',
    job: '축구선수',
  },
];
class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          ))
}
      </div>
    );
  }
}

export default App;
