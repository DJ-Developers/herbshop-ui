import React from 'react'
import TeamCard from '@/components/card/TeamCard'

const teams = [
  {
    id: '1',
    name: 'Lucian Obrien',
    role: 'Data Analyst',
    avatar: '/about/team_1.jpeg',
  },
  {
    id: '2',
    name: 'Deja Brady',
    role: 'Trainee',
    avatar: '/about/team_2.jpeg',
  },
  {
    id: '3',
    name: 'Harrison Stein',
    role: 'Director',
    avatar: '/about/team_3.jpeg',
  },
  {
    id: '4',
    name: 'Jayvion Simon',
    role: 'Intern',
    avatar: '/about/team_4.jpeg',
  },
]

export default function Team() {
  return (
    <div className=' max-w-7xl m-auto px-6 py-24'>
      <div className='flex flex-col justify-center items-center gap-6'>
        <span className='uppercase text-xs font-bold text-gray-500'>
          Dream Team
        </span>
        <h2 className='text-5xl font-extrabold'>Great team is the key</h2>
        <p className='text-gray-500 max-w-xl text-center'>
          We will provide you support if you have any problems, our support team
          will reply within a day and we also have detailed documentation.
        </p>
      </div>
      <div className='grid grid-cols-4 gap-6 py-20'>
        {teams.map((item) => (
          <TeamCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  )
}
