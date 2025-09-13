import { createContext, useContext, useState } from "react";
const SetsContext = createContext();
export function SetsProvider({children}){
  const [studySets, setStudySets] = useState([
    {
      id: 1,
      title: 'Advanced React Patterns',
      description: 'Higher-order components, render props, compound components and more advanced React patterns',
      cardCount: 45,
      lastStudied: '2 hours ago',
      progress: 96,
      difficulty: 'Advanced',
      category: 'Frontend',
      color: 'from-blue-500 to-purple-600',
      createdAt: '2024-01-15',
      totalTime: '4.2h',
      accuracy: 94
    },
    {
      id: 2,
      title: 'Machine Learning Fundamentals',
      description: 'Core concepts, algorithms, and practical applications of machine learning',
      cardCount: 32,
      lastStudied: 'Yesterday',
      progress: 78,
      difficulty: 'Intermediate',
      category: 'AI/ML',
      color: 'from-purple-500 to-pink-600',
      createdAt: '2024-01-12',
      totalTime: '6.1h',
      accuracy: 87
    },
    {
      id: 3,
      title: 'CSS Grid & Flexbox Mastery',
      description: 'Complete guide to modern CSS layout techniques',
      cardCount: 28,
      lastStudied: '3 days ago',
      progress: 100,
      difficulty: 'Beginner',
      category: 'CSS',
      color: 'from-green-500 to-cyan-600',
      createdAt: '2024-01-08',
      totalTime: '2.8h',
      accuracy: 98
    },
    {
      id: 4,
      title: 'Data Structures & Algorithms',
      description: 'Essential programming concepts for technical interviews',
      cardCount: 67,
      lastStudied: '1 week ago',
      progress: 45,
      difficulty: 'Advanced',
      category: 'Programming',
      color: 'from-orange-500 to-red-600',
      createdAt: '2024-01-05',
      totalTime: '8.7h',
      accuracy: 82
    },
    {
      id: 5,
      title: 'TypeScript Deep Dive',
      description: 'Advanced TypeScript features, generics, and type manipulation',
      cardCount: 39,
      lastStudied: 'Never',
      progress: 0,
      difficulty: 'Intermediate',
      category: 'TypeScript',
      color: 'from-indigo-500 to-blue-600',
      createdAt: '2024-01-20',
      totalTime: '0h',
      accuracy: 0
    },
    {
      id: 6,
      title: 'System Design Principles',
      description: 'Scalability, reliability, and performance in distributed systems',
      cardCount: 52,
      lastStudied: '5 days ago',
      progress: 67,
      difficulty: 'Advanced',
      category: 'Backend',
      color: 'from-teal-500 to-green-600',
      createdAt: '2024-01-18',
      totalTime: '5.4h',
      accuracy: 91
    }
  ]);
  return (
    <SetsContext.Provider value = {{studySets, setStudySets}}>
      {children}
    </SetsContext.Provider>
  )
}
export function useSets(){
    return useContext(SetsContext);
}