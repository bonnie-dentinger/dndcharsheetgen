import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <HomePage />
  )
}

function Navbar() {
  return (
    <nav className="navbar flex justify-between items-center py-4">
      <div className="links flex gap-4">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  )
}

function Header({ title }) {
  return <h1>{ title ? title: 'D&D Character Sheet Generator' }</h1>;
}

function HomePage() {
  const names = ['John', 'Jane', 'Bob', 'Alice'];
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <Navbar />
      <Header title="D&D Character Sheet Generator" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Like ({likes})</button>
    </div>
  );
}